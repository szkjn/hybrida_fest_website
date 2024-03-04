<script lang="ts">
	import gsap from 'gsap';
	import { TextPlugin } from 'gsap/dist/TextPlugin';
	import { onMount } from 'svelte';
	import ButtonMenu from '$lib/components/menu/Button.svelte';
	import DropMenu from '$lib/components/menu/Drop.svelte';
	import ElevenOnHover from '$lib/components/ElevenOnHover.svelte';

	onMount(() => {
		gsap.registerPlugin(TextPlugin);
		let mm = gsap.matchMedia();
		// Animation date for device <601px
		mm.add('(max-width: 601px)', () => {
			gsap
				.timeline({ repeat: -1 })
				.to('.date', { duration: 2, text: '2024' })
				.to('.date', { duration: 2, text: 'JUNE 27—29' })
				.play();
		});
	});
	let toggle = false;
</script>

<header>
	<nav class="f f-a-items-start f-j-c-space-between">
		<div>
			<a class="f f-a-items-center" href="/">
				<div class="f hybrida">
					<h1 class="m-0">
						HYBRIDA <span class="fest">FEST</span>&nbsp;<span class="none">2024&nbsp;</span>
					</h1>
					<h1 class="m-0"><span>>&nbsp;</span><span class="date">JUNE 27—29</span></h1>
				</div>
			</a>
		</div>
		<div class="display">
			<ButtonMenu bind:toggle />
		</div>
		<ul class="f f-j-c-space-between f-w-wrap m-0 p-0 none">
			<li>
				<a href="/volunteers">
					<ElevenOnHover text="VOLUNTEERS" />
				</a>
			</li>
			<li aria-current="false">
				<a href="https://www.instagram.com/hybrida.space/" target="_blank">
					<ElevenOnHover text="INSTAGRAM" />
				</a>
			</li>
			<li>
				<a class="deactivated"> TICKETS </a>
			</li>
			<li>
				<a class="deactivated"> ABOUT </a>
			</li>
		</ul>
	</nav>
</header>
{#if toggle}
	<DropMenu bind:toggle />
{/if}

<style>
	header {
		position: sticky;
		top: 13px;
		z-index: 1000;
		width: 100%;
		mix-blend-mode: difference;
	}
	header a {
		color: #fff;
	}
	nav > div {
		padding-right: 10px;
	}
	ul {
		height: 33px;
		width: 237px;
		list-style: none;
	}
	li:nth-child(1) > a {
		display: block;
		width: 92px;
	}
	a,
	span,
	h1 {
		font-family: var(--font-secondary);
		font-size: var(--font-size-3);
	}
	h1,
	span {
		font-weight: 300;
	}
	a {
		font-weight: 300;
	}
	@media screen and (max-width: 600px) {
		nav > div > a {
			flex-direction: column;
			align-items: flex-start;
		}
		.display {
			display: block;
		}
		.none {
			display: none;
		}
		.hybrida {
			flex-direction: column;
		}
	}
</style>
