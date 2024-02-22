<script lang="ts">
	import gsap from 'gsap';

	const onHoverMenu = () => toggle ? null : gsap.to(".menu-line", {duration: 0.2, text: "1"});
	const onOutHoverMenu = () => toggle ? null : gsap.to(".menu-line", {duration: 0.2, text: "-"});
	const onClickMenu = () => {
		gsap.to(".menu-line", {duration: 0.2, text: "1111"});
		toggle = !toggle;
	}
	export let toggle = false;
</script>

<button 
	class="menu-icon" 
	on:mouseover={onHoverMenu}
	on:focus={onHoverMenu}
	on:mouseout={onOutHoverMenu}
	on:blur={onOutHoverMenu}
	on:click={onClickMenu}
>
	<span class="menu-line">-</span>
	_
</button>


<style>
	@media screen and (min-width: 601px) {
		button {
			display: none;
		}
	}
	button {
		z-index: 1000;
	}
	.menu-icon {
		cursor: pointer;	
		background: none;
		border: none;
		color: #fff;
		font-family: var(--font-secondary);
		font-size: var(--font-size-3);
	}
</style>
