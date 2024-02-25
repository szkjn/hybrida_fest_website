<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { TextPlugin } from "gsap/dist/TextPlugin";

	export const links: Array<string> = ['ABOUT', 'TICKETS', 'VOLUNTEERS', 'INSTAGRAM'];
	const onClickItem = () => toggle = false;
	export let toggle: Boolean;

	function getRandom(arr: string[], n: number) {
		var result = new Array(n),
			len = arr.length,
			taken = new Array(len);
		if (n > len)
			throw new RangeError("getRandom: more elements taken than available");
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
			gsap.timeline({delay: i/3})
			.to(r, {
				duration: 0.2, 
				text: {
					value: "1",
				}
			})
			.to(r, {
				duration: 0.1,
				text: {
					value: r.innerText,
				}
			})
			.play()
		})
	});
</script>

{#if toggle}
    <div class="f f-d-column f-j-c-center">
		{#each links as link}
		<a class="link f f-j-c-space-between f-a-items-center" href="/" role="menu" aria-labelledby="menubutton" on:click={onClickItem}>
			{#each link as char}
				<span class="char f-g-1">{char}</span>
			{/each}
		</a>
		{/each}
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
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
        text-align: center;
        letter-spacing: 0.15em;
		font-family: var(--font-secondary);
		background-color: #FFF;
    }
    a {
		color: var(--font-color-1);
		cursor: pointer;
        width: 100%;
		/* height: 20%; */
		height: calc(2em + 5vw);
		text-align: justify;
		font-size: calc(0.9em + 9vw);
    }
	a:hover {
		text-decoration: none;
    }
	a:nth-child(1), a:nth-child(2){
		text-decoration: line-through;
		cursor: auto;
	}
	.char{
		text-align: center;
	}
	@media screen and (max-width: 279px) {
		a {
			font-size: calc(0.9em + 4vw);
			/* height: 10%; */
		}
	}
</style>
