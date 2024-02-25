<script lang="ts">
	import gsap from 'gsap';
	import { TextPlugin } from "gsap/dist/TextPlugin";
	import { onMount } from 'svelte';
	import ButtonMenu from '$lib/components/menu/Button.svelte';
	import DropMenu from '$lib/components/menu/Drop.svelte';

	let onHoverLinkTl: GSAPTimeline;

	const onHoverLink = (e: MouseEvent) => {
		let target: HTMLTextAreaElement | string ;
		switch ((<HTMLTextAreaElement>e?.target)?.tagName) {
			case 'SPAN':
				target = <HTMLTextAreaElement>e?.target
				break;
			case 'A':
				target = <HTMLTextAreaElement>(<HTMLTextAreaElement>e?.target)?.firstElementChild
				break;
			default:
				target = '.fest'
				break;
		}
		return gsap.timeline({ repeat: -1 })
			.to(target, { duration: 0, text: "11:11" })
			.to(target, { duration: 0.5, text: "11 11" })
			.play()
	};

	const onOutHoverLink = (e: MouseEvent) => {
		const target = onHoverLinkTl._first._targets[0];
		onHoverLinkTl.kill()
		switch (target?.classList[0]) {
			case 'volunteers':
				gsap.to(target, { duration: 0, text: 'NTEERS' });
				break;
			case 'instagram':
				gsap.to(target, { duration: 0, text: 'NSTAG' });
				break;
			case 'tickets':
				gsap.to(target, { duration: 0, text: 'ICKET' });
				break;
			case 'about':
				gsap.to(target, { duration: 0, text: 'ABOU' });
				break;
			default:
				gsap.to(target, { duration: 0, text: 'XXXXX' });
				break;
		}
	};

	onMount(() => {
		gsap.registerPlugin(TextPlugin);
		let mm = gsap.matchMedia();
		// Animation date for device <601px
		mm.add("(max-width: 601px)", () => {
			gsap.timeline({ repeat: -1 })
			.to(".date", {duration: 2, text: "2024"})
			.to(".date", {duration: 2, text: "JUNE 27—29"})
			.play()
		});
		// Animation Fest => 11:11
		mm.add("(min-width: 602px)", () => {
			gsap.timeline({ repeat: -1 })
			.to(".fest", {duration: 2, text: "11:11"})
			.to(".fest", {duration: 2, text: "FEST"})
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
					<h1 class="m-0">HYBRIDA <span class="fest">FEST</span>&nbsp;<span class="none">2024&nbsp;</span></h1>
					<h1 class="m-0"><span>>&nbsp;</span><span class="date">JUNE 27—29</span></h1>
				</div>
	
			</a>
		</div>
		<div class="display">
			<ButtonMenu bind:toggle={toggle}/>
		</div>
		<ul class="f f-j-c-space-between f-w-wrap m-0 p-0 none">
			<li>
				<a href="/volunteers" on:mouseover={(e) => { return onHoverLinkTl = onHoverLink(e)}} on:mouseout={onOutHoverLink}>VOLU<span class="volunteers">NTEERS</span></a>
			</li>
			<li aria-current="false">
				<a href="https://www.instagram.com/hybrida.space/" target="_blank" on:mouseover={(e) => { return onHoverLinkTl = onHoverLink(e)}} on:mouseout={onOutHoverLink}>I<span class="instagram">NSTAG</span>RAM</a>
			</li>
			<li>
				<a class="deactivated" on:mouseover={(e) => { return onHoverLinkTl = onHoverLink(e)}} on:mouseout={onOutHoverLink}>T<span class="tickets">ICKET</span>S</a>
			</li>
			<li>
				<a class="deactivated" on:mouseover={(e) => { return onHoverLinkTl = onHoverLink(e)}} on:mouseout={onOutHoverLink}><span class="about">ABOU</span>T</a>
			</li>
		</ul>
	</nav>
</header>
{#if toggle}
	<DropMenu bind:toggle={toggle}/>
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
		height: 42px;
		width: 220px;
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
		font-weight: 500;
	}
	a {
		font-weight: 300;
	}
	a:hover {
		text-decoration: none;
	}
	.deactivated {
		text-decoration: line-through;
	}
	.deactivated:hover {
		text-decoration: line-through;
	}
	@media screen and (max-width: 600px) {
		nav > div > a{
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
