<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { TextPlugin } from 'gsap/dist/TextPlugin';

	export const links: { [key: string]: string } = {
		PROGRAM: '/program',
		INFO: 'https://drive.google.com/file/d/1ydwjus_PyGMprUSLW1CvkZTNT2Di3yx1/view?usp=sharing',
		TICKETS: 'https://billetto.se/ticket_buyer/offers/b4343cf1-0461-4587-86e9-cfd327ca1304',
		VOLUNTEERS: 'https://tally.so/r/wALRR0',
		INSTAGRAM: 'https://www.instagram.com/hybrida.space/'
	};
	const onClickItem = () => (toggle = false);
	export let toggle: Boolean;

	function getRandom(arr: string[], n: number) {
		var result = new Array(n),
			len = arr.length,
			taken = new Array(len);
		if (n > len) throw new RangeError('getRandom: more elements taken than available');
		while (n--) {
			var x = Math.floor(Math.random() * len);
			result[n] = arr[x in taken ? taken[x] : x];
			taken[x] = --len in taken ? taken[len] : len;
		}
		return result;
	}

	onMount(() => {
		gsap.registerPlugin(TextPlugin);

		let randomChars: HTMLElement[] = getRandom(gsap.utils.toArray('.char'), 4);
		randomChars.forEach((r, i) => {
			gsap
				.timeline({ delay: i / 3 })
				.to(r, {
					duration: 0.2,
					text: {
						value: '1'
					}
				})
				.to(r, {
					duration: 0.1,
					text: {
						value: r.innerText
					}
				})
				.play();
		});
	});
</script>

{#if toggle}
	<div class="f f-d-column f-j-c-end">
		{#each Object.entries(links) as [key, value]}
			<a
				class="link f f-j-c-space-center f-a-items-center"
				href={value}
				role="menu"
				target="_blank"
				aria-labelledby="menubutton"
				on:click={onClickItem}
			>
				{#each key as char}
					<span class="char">{char}</span>
				{/each}
			</a>
		{/each}
		<p></p>
	</div>
{/if}

<style>
	div {
		touch-action: none;
		overflow-y: hidden;
		mix-blend-mode: normal;
		z-index: 999;
		position: absolute;
		position: fixed;
		padding: 0 20px;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		text-align: center;
		/* letter-spacing: 0.15em; */
		font-family: var(--font-secondary);
		background-color: #fff;
	}
	@media screen and (max-width: 430px) {
		div {
			padding: 0 4px;
		}
	}
	a {
		color: var(--font-color-1);
		cursor: pointer;
		height: 38px;
		text-align: left;
		font-size: 1.8em;
		text-decoration: none;
	}
	a:hover {
		text-decoration: none;
	}
	.char {
		text-align: center;
	}
</style>
