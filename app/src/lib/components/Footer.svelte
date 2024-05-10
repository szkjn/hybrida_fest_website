<script lang="ts">
	import logos_logo from '$lib/assets/png/logos.png';
	import karlstads_logo from '$lib/assets/png/ks.png';
	import sac_logo from '$lib/assets/png/sac.gif';
	import varmland_logo from '$lib/assets/png/rv.png';
</script>

<footer class="f f-j-c-space-between m-0 m-b-2">
	<div class="top-footer">
		<div class="top-footer-title">
			<p class="sponsor-title">
				Hybrida fest is realised in cooperation by Byalaget Älvan, with generous support from:
			</p>
		</div>
		<div class="logos">
			<img src={logos_logo} alt="" width="200" id="test" />
			<img src={karlstads_logo} alt="" width="80" />
			<img src={sac_logo} alt="" width="150" />
			<img src={varmland_logo} alt="" width="150" />
		</div>
	</div>
	<div class="low-footer">
		<p>HOME PAGE PICTURES -> OLOF EKMAN</p>
		<p>GRAPHIC DESIGN -> BIN KOH</p>
		<p>
			RESIDENCY -> <a href="www.hybrida.space">www.hybrida.space</a>
		</p>
		<br />
		<p>WEBDESIGN -> J&J</p>
		<p>©2024 HYBRIDA FEST</p>
		<p>ALL RIGHTS RESERVED</p>
	</div>
</footer>

<style>
	footer {
		color: white;
		mix-blend-mode: difference;
		display: flex;
		flex-direction: column;
	}
	.top-footer {
		display: flex;
		flex-direction: column;
		border-top: 1px solid white;
		margin: 2rem 0;
		padding-top: 1rem;
	}
	.top-footer-title {
		margin-bottom: 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.logos {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.low-footer {
		display: flex;
		flex-direction: column;
	}
	.low-footer > p,
	.top-footer-title > p {
		margin: auto;
	}
	p,
	a {
		font-family: var(--font-secondary);
		font-size: var(--font-size-5);
		color: white;
	}
	@media screen and (max-width: 600px) {
		.logos {
			flex-direction: column;
			gap: 1rem;
		}

		p {
			margin: 1px 0 1px 0;
		}
	}
</style>
