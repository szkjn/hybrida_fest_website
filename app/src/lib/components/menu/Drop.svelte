<script lang="ts">
	const onClickItem = () => toggle = false;
	export let toggle: Boolean;
</script>

{#if toggle}
    <div class="f f-d-column f-j-c-center">
        {#each ['ABOUT', 'TICKETS', 'VOLUNTEERS', 'INSTAGRAM'] as link}
            <p on:click={onClickItem}>
                {link}
            </p>
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
    p {
        cursor: pointer;
        width: max-content;
        margin: 2rem auto;
		font-size: clamp(1em, 6vw , 2em);
    }
	p:nth-child(1), p:nth-child(2){
		text-decoration: line-through;
		cursor: none;
	}
</style>
