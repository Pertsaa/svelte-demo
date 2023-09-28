<script lang="ts">
  let count = 0;
  let array: number[] = [];
</script>

<section class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
  <div class="bg-blue-200 p-4">
    <h1 class="text-lg">{count}</h1>
    <button
      type="button"
      on:click={() => (count += 1)}
      class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >Increment
    </button>
  </div>
  <div class="bg-green-200 p-4">
    <h1 class="text-lg">[{array}]</h1>
    <button
      type="button"
      on:click={() => {
        array.push(Math.floor(Math.random() * 10));
        array = array;
      }}
      class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >Append
    </button>
  </div>
</section>
