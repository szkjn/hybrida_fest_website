<script lang="ts">
	import gsap from 'gsap';

	const onClickMenu = () => {
		if (!toggle) {
			gsap.to("button", {duration: 0.2, rotate: 90})
		} else {
			gsap.to("button", {duration: 0.2, rotate: 45})
		}
		toggle = !toggle;
	};
	export let toggle = false;
</script>

<button 
	on:click={onClickMenu}
>
<svg width="20" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
	<g style="mix-blend-mode:exclusion">
	<line x1="2.87868" y1="76.8787" x2="76.8787" y2="2.87868" stroke="white" stroke-width="6"/>
	</g>
	<g style="mix-blend-mode:exclusion">
	<line x1="76.8787" y1="76.1213" x2="2.87868" y2="2.12132" stroke="white" stroke-width="6"/>
	</g>
	</svg>
</button>

<style>
	@media screen and (min-width: 601px) {
		button {
			display: none;
		}
	}
	button {
		transform: rotate(45deg);
		padding: 0;
		margin-top: 3px;
		z-index: 1000;
		cursor: pointer;	
		background: none;
		border: none;
		color: #fff;
		font-family: var(--font-secondary);
		font-size: var(--font-size-3);
	}
</style>
