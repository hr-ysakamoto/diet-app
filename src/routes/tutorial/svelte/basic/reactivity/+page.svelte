<script lang="ts">
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
</script>

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
