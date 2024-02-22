<script lang="ts">
	import gsap from 'gsap';
	import { TextPlugin } from "gsap/dist/TextPlugin";
	import { onMount } from 'svelte';
	import ButtonMenu from '$lib/components/menu/Button.svelte';
	import DropMenu from '$lib/components/menu/Drop.svelte';

	onMount(() => {
		let mm = gsap.matchMedia();
		mm.add("(max-width: 601px)", () => {
			gsap.registerPlugin(TextPlugin);
			gsap.timeline({ repeat: -1 })
			.to(".date", {duration: 2, text: "2024"})
			.to(".date", {duration: 2, text: "JUNE 27—29"})
			.play()
		});
	});
	let toggle = false;
</script>
<header>
	<nav class="f f-a-items-start f-j-c-space-between">
		<div>
			<a class="f f-a-items-center" href="/">
				<div class="f hybrida">
					<h1 class="m-0">HYBRIDA FEST <span class="media-600">2024&nbsp;</span></h1>
					<h1 class="m-0"><span>>&nbsp;</span><span class="date">JUNE 27—29</span></h1>
				</div>
	
			</a>
		</div>
		<ButtonMenu bind:toggle={toggle}/>
		<ul class="f f-j-c-space-between f-w-wrap m-0 p-0">
			<li>
				<a href="/volunteers">VOLUNTEERS</a>
			</li>
			<li aria-current="false">
				<a href="https://www.instagram.com/hybrida.space/" target="_blank">INSTAGRAM</a>
			</li>
			<li>
				<a class="deactivated">TICKETS</a>
			</li>
			<li>
				<a class="deactivated">ABOUT</a>
			</li>
		</ul>
	</nav>
</header>
<DropMenu bind:toggle={toggle}/>

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
		height: 42px;
		width: 220px;
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
		font-weight: 500;
	}
	a {
		font-weight: 300;
	}
	.deactivated {
		text-decoration: line-through;
	}
	@media screen and (max-width: 600px) {
		nav > ul {
			display: none;
		}
		nav > div > a{
			flex-direction: column;
			align-items: flex-start;
		}
		.media-600 {
			display: none;
		}
		.hybrida {
			flex-direction: column;
		}
	}
</style>
