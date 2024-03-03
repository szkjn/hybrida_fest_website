<script lang="ts">
	import { onMount } from 'svelte';

	export let text: string;

	onMount(() => {
		const link = document.querySelectorAll(`.${text} span`);
		console.warn(link)
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
				console.warn(span)
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

<div class={text}>
	{#each text as char}
		<span>{char}</span>
	{/each}
</div>

<style>
	span {
		font-family: var(--font-secondary);
    	font-size: var(--font-size-3);
	}
</style>
