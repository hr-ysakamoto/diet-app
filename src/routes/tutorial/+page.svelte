<script lang="ts">
  import ColorPicker from "./ColorPicker.svelte";
  import Nested from "./Nested.svelte";
  import PackageInfo from "./PackageInfo.svelte";
  import Thing from "./Thing.svelte";
  import { getRandomNumber } from "$lib";

  const pkg: {
    name: string;
    speed: string;
    version: number;
    website: string;
  } = {
    name: "svelte",
    speed: "blazing",
    version: 4,
    website: "https://svelte.dev",
  };

  const name = "Yuki";
  let count = 0;
  $: doubled = count * 2;
  $: {
    console.log(`count: ${count}`);
    console.log("--------------");
  }
  let array = [1, 2, 3];
  $: sum = array.reduce((a, b) => a + b, 0);

  const handleCountUp = () => {
    count += 1;
  };
  const handleAddNumber = () => {
    array = [...array, array.length + 1];
  };

  let things = [
    { id: 1, name: "apple" },
    { id: 2, name: "banana" },
    { id: 3, name: "carrot" },
    { id: 4, name: "doughnut" },
    { id: 5, name: "egg" },
  ];

  const handleRemoveClick = () => {
    things = things.slice(1);
  };
  $: console.log({ things });

  let promise = getRandomNumber();

  const handleGenerateClick = () => {
    promise = getRandomNumber();
  };
</script>

<h1>Tutorial | {name.toUpperCase()}</h1>
<p>This is a paragraph.</p>
<Nested name="Yuki" />

<button on:click={handleCountUp}>Count Up: {count}</button>

{#if count > 10}
  <p>Count is greater than 10.</p>
{:else}
  <p>Count is between 0 and 10.</p>
{/if}

<p>Doubled value: {doubled}</p>

<hr />

<p>{array.join(" + ")} = {sum}</p>
<button on:click={handleAddNumber}>Add number</button>

<PackageInfo {...pkg} />

<hr />

<ColorPicker />

<hr />

<button on:click={handleRemoveClick}>Remove first thing</button>
{#each things as thing (thing.id)}
  <Thing name={thing.name} />
{/each}

<hr />

<button on:click={handleGenerateClick}> generate random number </button>

{#await promise}
  <p>...waiting</p>
{:then number}
  <p>The number is {number}</p>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}

<!-- rejectされないことがわかっている場合の省略記法 -->
{#await promise then number}
  <p>The number is {number}</p>
{/await}

<style>
  p {
    color: goldenrod;
  }
</style>
