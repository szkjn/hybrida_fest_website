<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	export let text: string;
	export let isHeader: boolean = false;

	onMount(() => {
		const link = document.querySelectorAll(`.${text} span`);
		const updateText = (spans: NodeListOf<Element>, i: number) => {
            if (i >= 2) {
                spans[i-2].textContent = '1';
                spans[i-1].textContent = '1';
            }
            spans[i].textContent = ':';
            if (i < spans.length-2) {
                spans[i+1].textContent = '1';
                spans[i+2].textContent = '1'; 
            }
        }
		
		link.forEach((span, index) => {
			// @ts-ignore
			span.setAttribute('data-original-text', span.textContent);
			span.addEventListener('mouseenter', () => {
				updateText(link, index);
			});
			span.addEventListener('mouseleave', () => {
				link.forEach((span) => {
					span.textContent = span.getAttribute('data-original-text');
				});
			});
		});
	});
</script>

<div class={text} style="color: {$page.route.id === '/program' && !isHeader ? '#fe9055' : isHeader? '#ffffff' : '#000000'}">
	{#each text as char}
		<span>{char}</span>
	{/each}
</div>

<style>
</style>
