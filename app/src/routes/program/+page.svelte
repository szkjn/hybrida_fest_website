<script>
	import RevealImage from '$lib/components/RevealImage.svelte';

	import dj_seduce from '$lib/assets/photos/360p/dj_seduce.jpg';
	import dip_shim from '$lib/assets/photos/360p/dip_shim.jpg';
	import dj_selfhelp from '$lib/assets/photos/360p/dj_selfhelp.jpg';
	import marius_bo from '$lib/assets/photos/360p/marius_bo.jpg';
	import migle_vycinaite from '$lib/assets/photos/360p/migle_vycinaite.jpg';
	import sstrom from '$lib/assets/photos/360p/sstrom.jpg';
	import toma_kami from '$lib/assets/photos/360p/toma_kami.jpg';
	import tomasz_skibicki from '$lib/assets/photos/360p/tomasz_skibicki.jpg';

	const thumb_dj_seduce = [dj_seduce];
	const thumb_dip_shim = [dip_shim];
	const thumb_dj_selfhelp = [dj_selfhelp];
	const thumb_marius_bo = [marius_bo];
	const thumb_migle_vycinaite = [migle_vycinaite];
	const thumb_sstrom = [sstrom];
	const thumb_toma_kami = [toma_kami];
	const thumb_tomasz_skibicki = [tomasz_skibicki];
</script>

<section>
	<div>
		<h1>PROGRAM</h1>
		<p>
			<RevealImage keyword="Toma Kami" imageUrls={thumb_toma_kami} resp_behavior={'pgm_page'} /><sup
				>DJSET</sup
			>
			<RevealImage keyword="DJ Seduce" imageUrls={thumb_dj_seduce} resp_behavior={'pgm_page'} /><sup
				>DJSET</sup
			>
			<RevealImage
				keyword="Sstrom (SHXCXCHCXSH)"
				imageUrls={thumb_sstrom}
				resp_behavior={'pgm_page'}
			/><sup>LIVE SET</sup>
			<RevealImage
				keyword="DJ Selfhelp"
				imageUrls={thumb_dj_selfhelp}
				resp_behavior={'pgm_page'}
			/><sup>DJSET</sup>
			<RevealImage keyword="Dip Shim" imageUrls={thumb_dip_shim} resp_behavior={'pgm_page'} /><sup
				>DJSET</sup
			>
			<RevealImage
				keyword="Tomasz Skibicki"
				imageUrls={thumb_tomasz_skibicki}
				resp_behavior={'pgm_page'}
			/><sup>RESIDENCY ARTIST</sup>
			<RevealImage
				keyword="Miglė Vyčinaitė"
				imageUrls={thumb_migle_vycinaite}
				resp_behavior={'pgm_page'}
			/><sup>RESIDENCY ARTIST</sup>
		</p>
		<span>+ MORE ARTISTS TO BE ANNOUNCED</span>
	</div>
</section>

<style>
	/* section {
		background-color: #4545d9;
	} */
	div {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		flex-wrap: wrap;
		/* color: #fe9055; */
		gap: 2rem;
	}
	h1 {
		font-family: var(--font-secondary);
		font-weight: 500;
		font-size: 30px;
		margin: 0;
		text-decoration: underline;
	}
	p {
		font-family: var(--font-primary);
		margin: 0;
		line-height: 2rem;
	}
	sup {
		font-family: var(--font-secondary);
		font-weight: 500;
		font-size: 14px;
		padding-right: 1rem;
	}
	span {
		font-family: var(--font-secondary);
		font-weight: 500;
		font-size: 30px;
		text-decoration: line-through;
		padding-bottom: 2rem;
	}
	@media screen and (max-width: 900px) {
		h1 {
			font-size: 25px;
		}
		span {
			font-size: 25px;
		}
		sup {
			font-size: 14px;
		}
	}
</style>
