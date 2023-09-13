<script>
	import { animate, stagger } from 'motion';
	import { onMount } from 'svelte';

	onMount(() => {
		animate(
			'#box',
			{ x: 200 },
			{
				delay: stagger(0.1),
				duration: 0.5,
				easing: [0.22, 0.03, 0.26, 1]
			}
		);
	});
</script>

<div class="flex flex-col gap-4">
	<div id="box" class="bg-blue-300 w-10 h-10 rounded-md" />
	<div id="box" class="bg-blue-300 w-10 h-10 rounded-md" />
	<div id="box" class="bg-blue-300 w-10 h-10 rounded-md" />
	<div id="box" class="bg-blue-300 w-10 h-10 rounded-md" />
</div>
