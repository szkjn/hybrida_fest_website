<script lang="ts">
	import { onMount } from 'svelte';
	import ElevenOnHover from '$lib/components/ElevenOnHover.svelte';

	export let artist: any;
	export let img: [string];
	import { page } from '$app/stores';

	onMount(() => {});
</script>

<div class="container">
	<img src={img} id={artist.slug} />
	<div class="info">
		<div class="f f-j-c-space-between f-d-column">
			<h2>{artist['alias']}</h2>
			<h3>{artist['category']}</h3>
		</div>
		<hr />
		<div>
			<p>
				{artist['bio']}
			</p>
		</div>
		<div class="project">
			{#if artist['project']}
				<p>
					"{artist['project']}"
				</p>
			{/if}
		</div>
		<div class="f">
			{#if artist['Instagram']}
				<a target="_blank" href={artist['Instagram']} 
					style="text-decoration-color: {$page.route.id === '/program' ? '#fe9055' : '#ffffff'}"
					><ElevenOnHover text="INSTAGRAM"></ElevenOnHover></a
				>
			{/if}
			{#if artist['Website or relevant representation']}
				<a target="_blank" href={artist['Website or relevant representation']}
					style="text-decoration-color: {$page.route.id === '/program' ? '#fe9055' : '#ffffff'}"
					><ElevenOnHover text="WEBSITE"></ElevenOnHover></a
				>
			{/if}
		</div>
	</div>
</div>

<style>
	/* img,
	.info {
		margin: 20px;
	} */
	.container {
		display: flex;
		margin-top: 1rem;
	}
	img {
		/* width: 33%; */
	}
	.info {
		margin-left: 1rem;
	}
	h2 {
		font-family: var(--font-secondary);
		font-size: 20px;
		margin: 0;
	}
	h3 {
		font-family: var(--font-secondary);
		text-transform: uppercase;
		font-weight: 300;
		margin: 0;
	}
	p {
		font-family: var(--font-primary);
	}
	a {
		margin-right: 10px;
	}

	.project {
		font-style: italic;
	}

	@media screen and (max-width: 600px) {
		img {
			display: none;
		}
	}
</style>
