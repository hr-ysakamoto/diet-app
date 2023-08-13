<script>
  import ColorPicker from "./ColorPicker.svelte";
  import Thing from "./Thing.svelte";
  import { getRandomNumber } from "$lib";

  let count = 0;
  const increment = () => {
    count += 1;
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

<button on:click={increment}>
  Clicked {count}
  {count === 1 ? "time" : "times"}
</button>

{#if count > 10}
  <p>{count} is greater than 10</p>
{:else if count < 5}
  <p>{count} is less than 5</p>
{:else}
  <p>{count} is between 5 and 10</p>
{/if}
<hr />
<ColorPicker />
<hr />
<button on:click={handleRemoveClick}>Remove first thing</button>
{#each things as thing (thing.id)}
  <Thing name={thing.name} />
{/each}

<button on:click={handleGenerateClick}> generate random number </button>
<hr />
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
