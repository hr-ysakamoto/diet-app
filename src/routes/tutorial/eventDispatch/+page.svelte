<script lang="ts">
  import Outer from "./Outer.svelte";

  function handleMessage(event: any) {
    alert(event.detail.text);
  }
</script>

<Outer on:message={handleMessage} />
