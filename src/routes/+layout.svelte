<script>
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>

<Header />

<section class="mx-auto max-w-7xl py-20 px-4 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-3xl">
		<slot />
	</div>
</section>
