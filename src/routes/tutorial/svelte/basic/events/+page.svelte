<script lang="ts">
  import Inner from "./Inner.svelte";

  let m = { x: 0, y: 0 };
  const handleMessage = (event: any) => {
    alert(event.detail.text);
  };
</script>

<div
  on:pointermove={(e) => {
    m = { x: e.clientX, y: e.clientY };
  }}
>
  <p>The mouse position is {m.x} x {m.y}</p>
  <button on:click|once={() => alert("clicked")}> Click me </button>
  <Inner on:message={handleMessage} />
</div>

<style>
  div {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 1rem;
    background-color: #eee;
  }
</style>
