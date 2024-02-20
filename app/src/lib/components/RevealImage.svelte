<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	export let keyword: string;
	export let imageUrl: string;

	let imageVisible = false;
	let mouseX: number = 0;
	let mouseY: number = 0;

	// Function to update mouse position
	function updateMousePosition(event: MouseEvent) {
		mouseX = event.clientX + window.scrollX;
		mouseY = event.clientY + window.scrollY;
	}

	// Function to show image
	function showImage() {
		imageVisible = true;
	}

	// Function to hide image
	function hideImage() {
		imageVisible = false;
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<span on:mouseover={showImage} on:mousemove={updateMousePosition} on:mouseout={hideImage}
	>{keyword}</span
>
{#if imageVisible}
	<!-- svelte-ignore a11y-img-redundant-alt -->
	<img
		class="hover-image"
		src={imageUrl}
		alt="Hover Image"
		style={`position: absolute; top: ${mouseY}px; left: ${mouseX}px; display: ${imageVisible ? 'block' : 'none'};`}
	/>
{/if}

<style>
	.hover-image {
		pointer-events: none;
		transition: opacity 0.2s ease;
		width: 200px;
		height: auto;
	}
	span {
		font-size: var(--font-size-4);
	}
</style>
