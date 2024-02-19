<script lang="ts">
</script>

<header>
	<nav class="f f-a-items-start f-j-c-space-between">
		<div>
			<a class="f f-a-items-center" href="/">
				<h1 class="m-0">HYBRIDA FEST 2024</h1>
				&nbsp;<span>></span>&nbsp;
				<h1 class="m-0">JUNE 27—29</h1>
			</a>
		</div>
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

<style>
	header {
		position: sticky;
		top: 13px;
		z-index: 1000;
		width: 100%;
	}
	nav > div {
		padding-right: 10px;
	}
	ul {
		height: 42px;
		width: 285px;
		list-style: none;
	}
	a,
	span,
	h1 {
		font-family: var(--font-secondary);
		font-size: var(--font-size-3);
		text-decoration: none;
		/* TODO: penser à faire fonctionner la classe layer-exclusion-white (voir global.css)*/
		color: var(--font-color-1);
	}
	h1,
	span {
		font-weight: 500;
	}
	a {
		font-weight: 300;
	}
	@media screen and (max-width: 399px) {
		nav > ul {
			height: auto;
		}
	}
	.deactivated {
		text-decoration: line-through;
	}

	ul {
		width: 200px;
	}
	li {
		/* width: 40%; */
	}
</style>
