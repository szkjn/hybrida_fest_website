<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	export let keyword: string;
	let mapVisible = false;
	let keywordRef: HTMLElement;

	// Function to show the map
	function showMap() {
		mapVisible = true;
	}

	// Function to hide the map
	function hideMap() {
		mapVisible = false;
	}

	onMount(() => {});

	onDestroy(() => {});
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<span bind:this={keywordRef} on:mouseover={showMap} on:mouseout={hideMap}>
	{keyword}
</span>


{#if mapVisible}
	<!-- svelte-ignore a11y-missing-attribute -->
	<iframe
		class="map"
		src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125077.89391615202!2d13.565347984255492!3d59.7226989124827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465ccd80bf13f827%3A0xfb754ea59f89a496!2s%C3%84lvsbacka%2C%20655%2098%20Molkom%2C%20Sweden!5e0!3m2!1sen!2sfr!4v1710964451484!5m2!1sen!2sfr"
		width="400"
		height="300"
		style="border:0;"
		allowfullscreen=""
		loading="lazy"
		referrerpolicy="no-referrer-when-downgrade"
	></iframe>
{/if}

<style>
	.map {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		pointer-events: none;
		z-index: 1000;
	}
	span {
		font-size: var(--font-size-4);
		font-optical-sizing: auto;
		font-weight: 200;
		font-style: italic;
		cursor: pointer;
	}
	span:hover {
		color: #3f3;
	}
</style>
