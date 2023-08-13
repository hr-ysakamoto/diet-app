<script lang="ts">
  import Nested from "./Nested.svelte";
  const name = "Yuki";
  let string = `this string contains some <strong>HTML!!!</strong>`;
</script>

<h1>Tutorial | {name.toUpperCase()}</h1>
<p>This is a paragraph.</p>
<Nested name="Yuki" />
<p>{@html string}</p>

<style>
  p {
    color: goldenrod;
  }
</style>
