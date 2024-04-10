<script lang="ts">
	import { onMount } from 'svelte';
	import ElevenOnHover from '$lib/components/ElevenOnHover.svelte';

	export let imgPath: string;
	export let artist: any;

	onMount(() => {});

</script>

<div class="f">
	<img src={imgPath}/>
	<div class="info">
		<div class="f f-j-c-space-between f-d-column">
			<h2>{artist["alias"]}</h2>
			<h3>{artist["category"]}</h3>
		</div>
		<hr />
		<div>
			<p>
				{artist["bio"]}
			</p>
		</div>
		<div class="f">
			{#if artist["Instagram"]}
				<a target="_blank" href={artist["Instagram"]}><ElevenOnHover text="INSTAGRAM"></ElevenOnHover></a>
			{/if}
			{#if artist["Website or relevant representation"]}
				<a target="_blank" href={artist["Website or relevant representation"]}><ElevenOnHover text="WEBSITE"></ElevenOnHover></a>
			{/if}
		</div>
	</div>
</div>

<style>
	img, .info {
		margin: 20px;
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
</style>
