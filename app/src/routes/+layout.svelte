<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '$lib/style/global.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
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
