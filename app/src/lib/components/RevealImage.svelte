<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	export let keyword: string;
	export let imageUrls: string[]; // Array of image URLs

	let imageVisible = false;
	let currentImageIndex = 0;
	let intervalId: ReturnType<typeof setInterval>;
	let imageStyle = ''; // Dynamic style for the image

	// Function to cycle through images
	function cycleImages() {
		currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
		updateImageStyle(imageUrls[currentImageIndex]);
	}

	// Function to start the slideshow
	function startSlideshow() {
		imageVisible = true;
		cycleImages(); // Start by showing the first image immediately
		intervalId = setInterval(cycleImages, 500); // Change image every 0.5 seconds
	}

	// Function to stop the slideshow
	function stopSlideshow() {
		imageVisible = false;
		clearInterval(intervalId);
		currentImageIndex = 0; // Reset for the next hover
	}

	// Update image style based on its orientation
	function updateImageStyle(imageUrl: string) {
		const img = new Image();
		img.onload = () => {
			// Check if the image is landscape
			imageStyle =
				img.width > img.height
					? 'width: 300px; max-width: 75vw; height: auto;'
					: 'height: 300px; max-height: 75vw; width: auto;';
		};
		img.src = imageUrl;
	}

	onMount(() => {
		// Component setup can go here
	});

	onDestroy(() => {
		clearInterval(intervalId); // Clear the interval when the component is destroyed
	});
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<span on:mouseover={startSlideshow} on:mouseout={stopSlideshow}>{keyword}</span>
{#if imageVisible}
	<!-- svelte-ignore a11y-img-redundant-alt -->
	<img
		class="hover-image"
		src={imageUrls[currentImageIndex]}
		alt="Hover Image"
		style={imageStyle}
	/>
{/if}

<style>
	.hover-image {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		pointer-events: none;
		transition: opacity 0.2s ease;
	}
	span {
		font-size: var(--font-size-4);
	}
</style>
