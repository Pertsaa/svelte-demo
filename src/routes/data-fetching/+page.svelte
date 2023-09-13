<script lang="ts">
  import { randomNumberAsync } from '$lib/utils/random.js';

  export let data;

  let numberPromise = randomNumberAsync();

  function fetchData() {
    numberPromise = randomNumberAsync();
  }
</script>

<section class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
  <div>
    <div class="bg-blue-200 p-4">
      <h2>Page Load</h2>
      <p class="text-lg">{data.value}</p>
    </div>
  </div>

  <div class="bg-green-200 p-4">
    <h2>Fetch</h2>
    {#await numberPromise}
      <p class="text-lg">...loading</p>
    {:then number}
      <p class="text-lg">{number}</p>
    {:catch error}
      <p style="color: red">{error.message}</p>
    {/await}

    <button
      type="button"
      on:click={fetchData}
      class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >Refetch
    </button>
  </div>
</section>

<svelte:head>
  <title>{data.title}</title>
</svelte:head>
