<script lang="ts">
	import { onMount } from 'svelte';
	import ElevenOnHover from '$lib/components/ElevenOnHover.svelte';

	export let artist: any;
	export let img: [string];
	import { page } from '$app/stores';

	onMount(() => {});
</script>

<div class="container" id={artist.slug}>
	<img class="img-600more" src={img} />
	<div class="info f f-d-column">
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
		<img class="img-600less" src={img} />
		<div class="link f">
			{#if artist['Instagram']}
				<a
					target="_blank"
					href={artist['Instagram']}
					style="text-decoration-color: {$page.route.id === '/program' ? '#fe9055' : '#ffffff'}"
					><ElevenOnHover text="INSTAGRAM"></ElevenOnHover></a
				>
			{/if}
			{#if artist['Website or relevant representation']}
				<a
					target="_blank"
					href={artist['Website or relevant representation']}
					style="text-decoration-color: {$page.route.id === '/program' ? '#fe9055' : '#ffffff'}"
					><ElevenOnHover text="WEBSITE"></ElevenOnHover></a
				>
			{/if}
		</div>
	</div>
</div>

<style>
	.container {
		display: flex;
		margin-top: 1rem;
		scroll-margin-top: 40px;
	}
	.img-600less {
		display: none;
	}
	.info {
		width: 100%;
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
	hr {
		margin-left: 0;
		margin-right: 0;
	}

	@media screen and (max-width: 1127px) {
		/* @media screen and (max-width: 600px) { */
		.img-600more {
			display: none;
		}
		.img-600less {
			display: block;
			width: 100%;
			align-self: center;
			margin-bottom: 10px;
		}
		.info {
			margin: 0 0 30px 0;
		}
		.link {
			align-self: center;
		}
	}
	@media screen and (max-width: 1127px) {
		/* @media screen and (max-width: 600px) { */
		.img-600more {
			display: none;
		}
		.img-600less {
			display: block;
			max-width: 360px;
			align-self: center;
			margin-bottom: 10px;
		}
		.info {
			margin: 0 0 30px 0;
		}
		.link {
			align-self: center;
		}
	}
</style>
