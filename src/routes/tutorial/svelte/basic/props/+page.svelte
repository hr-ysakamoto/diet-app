<script lang="ts">
  import Nested from "./Nested.svelte";
  import PackageInfo from "./PackageInfo.svelte";
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
</script>

<Nested answer={42} />

<PackageInfo {...pkg} />
