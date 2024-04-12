<script>
	import RevealImage from '$lib/components/RevealImage.svelte';
	import Artist from '$lib/components/Artist.svelte';

	import dj_seduce from '$lib/assets/photos/360p/dj_seduce.jpg';
	import dip_shim from '$lib/assets/photos/360p/dip_shim.jpg';
	import dj_selfhelp from '$lib/assets/photos/360p/dj_selfhelp.jpg';
	import marius_bo from '$lib/assets/photos/360p/marius_bo.jpg';
	import migle_vycinaite from '$lib/assets/photos/360p/migle_vycinaite.jpg';
	import sstrom from '$lib/assets/photos/360p/sstrom.jpg';
	import toma_kami from '$lib/assets/photos/360p/toma_kami.jpg';
	import tomasz_skibicki from '$lib/assets/photos/360p/tomasz_skibicki.jpg';

	import artists from '$lib/assets/data/artists';

	const thumb_dj_seduce = [dj_seduce];
	const thumb_dip_shim = [dip_shim];
	const thumb_dj_selfhelp = [dj_selfhelp];
	const thumb_marius_bo = [marius_bo];
	const thumb_migle_vycinaite = [migle_vycinaite];
	const thumb_sstrom = [sstrom];
	const thumb_toma_kami = [toma_kami];
	const thumb_tomasz_skibicki = [tomasz_skibicki];

	const arrImg = [
		thumb_toma_kami,
		thumb_dj_seduce,
		thumb_sstrom,
		thumb_dip_shim,
		thumb_dj_selfhelp,
		thumb_tomasz_skibicki,
		thumb_migle_vycinaite,
		thumb_marius_bo
	];
</script>

<section>
	<div>
		<h1>PROGRAM</h1>
		<p>
			<a href="#toma_kami">
				<RevealImage
					keyword="Toma Kami"
					imageUrls={thumb_toma_kami}
					resp_behavior={'pgm_page'}
				/><sup>DJSET</sup>
			</a>
			<a href="#dj_seduce">
				<RevealImage
					keyword="DJ Seduce"
					imageUrls={thumb_dj_seduce}
					resp_behavior={'pgm_page'}
				/><sup>DJSET</sup>
			</a>
			<a href="#sstrom">
				<RevealImage
					keyword="Sstrom (SHXCXCHCXSH)"
					imageUrls={thumb_sstrom}
					resp_behavior={'pgm_page'}
				/><sup>LIVE SET</sup>
			</a>
			<a href="#dip_shim">
				<RevealImage keyword="Dip Shim" imageUrls={thumb_dip_shim} resp_behavior={'pgm_page'} /><sup
					>DJSET</sup
				>
			</a>
			<a href="#dj_selfhelp">
				<RevealImage
					keyword="DJ Selfhelp"
					imageUrls={thumb_dj_selfhelp}
					resp_behavior={'pgm_page'}
				/><sup>DJSET</sup>
			</a>
			<a href="#tomasz_skibicki">
				<RevealImage
					keyword="Tomasz Skibicki"
					imageUrls={thumb_tomasz_skibicki}
					resp_behavior={'pgm_page'}
				/><sup>RESIDENCY ARTIST</sup>
			</a>
			<a href="#migle_vycinaite">
				<RevealImage
					keyword="Miglė Vyčinaitė"
					imageUrls={thumb_migle_vycinaite}
					resp_behavior={'pgm_page'}
				/><sup>RESIDENCY ARTIST</sup>
			</a>
			<a href="#marius_bo">
				<RevealImage
					keyword="Marius Bø"
					imageUrls={thumb_marius_bo}
					resp_behavior={'pgm_page'}
				/><sup>DJSET</sup>
			</a>
		</p>
		<span>+ MORE ARTISTS TO BE ANNOUNCED</span>
	</div>
</section>
<section>
	{#each artists as artist, index}
		<Artist {artist} img={arrImg[index]}></Artist>
	{/each}
</section>

<style>
	/* section {
		background-color: #4545d9;
	} */
	a,
	a:hover {
		text-decoration: none;
	}
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
