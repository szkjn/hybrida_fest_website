<script>
	import Header from '$lib/components/Header.svelte';
	import '$lib/style/global.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>


</div>

<style>
	.app {
		width: 100%;
		height: 100%;
	}
	main {
		width: 100%;
		height: 500px;
	}
</style>
