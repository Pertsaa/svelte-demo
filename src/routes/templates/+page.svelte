<script>
	let count = 0;

	function increment() {
		count += 1;
	}

	const tools = ['React', 'Svelte', 'Vue', 'Solid', 'Quick'];
</script>

<section class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
	<!-- Conditional elements -->
	<div class="p-4 bg-blue-200">
		<h1 class="text-lg font-bold">Conditionals</h1>
		<button
			on:click={increment}
			class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
		>
			Clicked {count}
			{count === 1 ? 'time' : 'times'}
		</button>

		{#if count > 10}
			<p>{count} is greater than 10</p>
		{:else if count < 5}
			<p>{count} is less than 5</p>
		{:else}
			<p>{count} is between 5 and 10</p>
		{/if}
	</div>

	<!-- Mapping over elements -->
	<div class="p-4 bg-green-200">
		<h1 class="text-lg font-bold">Lists</h1>
		<ul>
			{#each tools as tool (tool)}
				<li>{tool}</li>
			{/each}
		</ul>
	</div>
</section>
