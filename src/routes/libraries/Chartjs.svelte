<script lang="ts">
  import { Chart } from 'chart.js/auto';
  import { onMount } from 'svelte';

  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 }
  ];

  let ctx: CanvasRenderingContext2D | null;
  let canvas: HTMLCanvasElement;

  onMount(() => {
    ctx = canvas.getContext('2d');
    if (ctx) {
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: data.map((row) => row.year),
          datasets: [
            {
              label: 'Acquisitions by year',
              data: data.map((row) => row.count)
            }
          ]
        },
      });
    }
  });
</script>

<div class="relative">
  <canvas id="graph" bind:this={canvas} />
</div>
