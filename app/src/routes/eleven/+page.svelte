<script>
	import Liquid from '$lib/components/Liquid.svelte';
</script>

<Liquid />

<section class="f f-j-c-center f-a-items-center">
	<h1 class="m-0">11:11</h1>
</section>

<style>
	section {
		width: 100%;
		height: calc(100vh - 165px);
	}
	h1 {
		font-family: var(--font-secondary);
		/* font-size: 400px; */
		font-size: clamp(50px, 20vw, 400px);
		font-weight: 400;
		mix-blend-mode: difference;
		color: white;
	}
</style>
