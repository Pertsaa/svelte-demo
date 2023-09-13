<script>
	import { count, increment, reset } from '$lib/stores/count';
</script>

<div class="bg-blue-200 p-4">
	<h2>Component 1</h2>
	<p class="text-lg">{$count}</p>
	<button
		type="button"
		on:click={increment}
		class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
		>Increment
	</button>
	<button
		type="button"
		on:click={reset}
		class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
		>Reset
	</button>
</div>
