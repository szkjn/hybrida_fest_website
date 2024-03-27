<script lang="ts">
	import gsap from 'gsap';
	import { TextPlugin } from 'gsap/dist/TextPlugin';
	import { onMount } from 'svelte';
	import ButtonMenu from '$lib/components/menu/Button.svelte';
	import DropMenu from '$lib/components/menu/Drop.svelte';
	import ElevenOnHover from '$lib/components/ElevenOnHover.svelte';

	import Moon_1 from '$lib/assets/svg/moon_1.svg';

	onMount(() => {
		const ticketLink = document.querySelector('.ticket-link');
		// @ts-ignore
		ticketLink.addEventListener('click', (event) => {
			// @ts-ignore
			if (typeof gtag === 'function') {
				// @ts-ignore
				gtag('event', 'click', {
					event_category: 'Ticket Purchase',
					event_label: 'Hybrida Fest 2024 Tickets',
					value: 1
				});
			}
		});

		const volunteerLink = document.querySelector('.volunteer-link');
		volunteerLink?.addEventListener('click', (event) => {
			// @ts-ignore
			if (typeof gtag === 'function') {
				// @ts-ignore
				gtag('event', 'click', {
					event_category: 'Volunteer Sign-up',
					event_label: 'Hybrida Fest 2024 Volunteers',
					value: 1
				});
			}
		});

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
	<nav class="f f-j-c-space-between">
		<div class="">
			<a class="f f-a-items-start" href="/">
				<div class="f f-a-items-center title">
					<h1 class="m-0 title">HYBRIDA FEST 2024 JUNE 27—29</h1>
				</div>
			</a>
		</div>
		<div class="display">
			<ButtonMenu bind:toggle />
		</div>
		<div class="">
			<ul class="f f-d-column m-0 p-0 none">
				<li class="f f-a-self-end">
					<a class="volunteer-link" href="https://tally.so/r/wALRR0" target="_blank">
						VOLUNTEERS
					</a>
				</li>
				<li class="f f-a-self-end">
					<a href="https://www.instagram.com/hybrida.space/" target="_blank"> INSTAGRAM </a>
				</li>
				<li class="f f-a-self-end">
					<a
						class="ticket-link"
						href="https://billetto.se/e/hybrida-fest-2024-biljetter-958997"
						target="_blank"
					>
						TICKETS
					</a>
				</li>
				<li class="f f-a-self-end">
					<a class="deactivated"> PROGRAM </a>
				</li>
			</ul>
		</div>
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
		/* mix-blend-mode: difference; */
	}
	.title {
		text-shadow: 0 0 10px #4444d8;
		font-family: var(--font-title);
		line-height: 8.5rem;
		font-size: var(--font-size-title);
	}
	@media screen and (max-width: 430px) {
		header {
			top: 4px;
		}
	}
	header a {
		color: var(--font-color-1);
	}
	ul {
		height: 33px;
		list-style: none;
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
		text-decoration: none;
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
