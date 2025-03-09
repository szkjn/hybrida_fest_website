<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '$lib/style/global.css';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let mounted = false;
	onMount(() => {
		mounted = true;
	});

	$: {
		if (mounted)
			document.body.style.background = $page.route.id === '/program' ? '#4545d9' : '#ffffff';
	}
</script>

<svelte:head>
	<!-- Google tag (gtag.js) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-CQNLH7N1WG"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', 'G-CQNLH7N1WG');
	</script>
</svelte:head>

<div class="app f f-d-column">
	<!-- <Header /> -->

	<main>
		<slot />
	</main>

	<!-- <Footer /> -->
</div>

<style>
	.app {
		width: 100%;
		height: 100%;
		/* background: red; */
		background: white;
	}

	main {
		width: 100%;
		height: 100%;
		/* margin-top: 10px; */
	}

	@media screen and (max-width: 600px) {
		main {
			padding-top: 13px;
		}
	}
</style>
