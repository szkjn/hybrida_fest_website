<script lang="ts">
	import gsap from 'gsap';
	import { TextPlugin } from 'gsap/dist/TextPlugin';
	import { onMount } from 'svelte';
	import ButtonMenu from '$lib/components/menu/Button.svelte';
	import DropMenu from '$lib/components/menu/Drop.svelte';
	import ElevenOnHover from '$lib/components/ElevenOnHover.svelte';

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
		<ul class="f f-d-column m-0 p-0 none">
			<li>
				<a class="link" href="/program">
					<span class="arrow">•</span><ElevenOnHover text="PROGRAM" />
				</a>
			</li>
			<li>
				<a
					class="link"
					href="https://drive.google.com/file/d/1ydwjus_PyGMprUSLW1CvkZTNT2Di3yx1/view?usp=sharing"
					target="_blank"
				>
					<span class="arrow">•</span><ElevenOnHover text="INFO" />
				</a>
			</li>
			<li>
				<a
					class="link"
					href="https://billetto.se/e/hybrida-fest-2024-biljetter-958997"
					target="_blank"
				>
					<span class="arrow">•</span><ElevenOnHover text="TICKETS" />
				</a>
			</li>
			<li>
				<a class="link" href="https://tally.so/r/wALRR0" target="_blank">
					<span class="arrow">•</span><ElevenOnHover text="VOLUNTEERS" />
				</a>
			</li>
			<li aria-current="false">
				<a class="link" href="https://www.instagram.com/hybrida.space/" target="_blank">
					<span class="arrow">•</span><ElevenOnHover text="INSTAGRAM" />
				</a>
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
	@media screen and (max-width: 430px) {
		header {
			top: 4px;
		}
	}
	header a {
		color: #fff;
	}
	ul {
		/* height: 33px;
		width: 237px; */
		/* list-style: none; */
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
	.arrow {
		padding-right: 0.5rem;
	}
	a {
		font-weight: 300;
		text-decoration: none;
	}

	.link {
		display: flex;
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
