<script>
	import RevealImage from '$lib/components/RevealImage.svelte';
	import Artist from '$lib/components/Artist.svelte';
	import ElevenOnHover from '$lib/components/ElevenOnHover.svelte';
	// import EasterEgg from '$lib/components/EasterEgg.svelte';

	import toma_kami from '$lib/assets/photos/360p/toma_kami.jpg';
	import dj_seduce from '$lib/assets/photos/360p/dj_seduce.jpg';
	import sstrom from '$lib/assets/photos/360p/sstrom.jpg';
	import dip_shim from '$lib/assets/photos/360p/dip_shim.jpg';
	import dj_selfhelp from '$lib/assets/photos/360p/dj_selfhelp.jpg';
	import tomasz_skibicki from '$lib/assets/photos/360p/tomasz_skibicki.jpg';
	import j_nordstrom from '$lib/assets/photos/360p/j_nordstrom.png';
	import migle_vycinaite from '$lib/assets/photos/360p/migle_vycinaite.jpg';
	import marius_bo from '$lib/assets/photos/360p/marius_bo.jpg';
	import little_floating_oracles from '$lib/assets/photos/360p/little_floating_oracles.png';
	import mikkel_hogh_kaldal from '$lib/assets/photos/360p/mikkel_hogh_kaldal.jpg';
	import vox_supreme from '$lib/assets/photos/360p/vox_supreme.jpg';
	import sonia_witwitzka from '$lib/assets/photos/360p/sonia_witwitzka.jpg';
	import egregore from '$lib/assets/photos/360p/egregore.jpg';
	import aaro_murphy from '$lib/assets/photos/360p/aaro_murphy.png';
	import tadan from '$lib/assets/photos/360p/tadan.png';
	import jacob_dwyer from '$lib/assets/photos/360p/jacob_dwyer.png';
	import kg_le from '$lib/assets/photos/360p/kg_le.png';
	import sebastian_burger from '$lib/assets/photos/360p/sebastian_burger.png';
	import sa_dk from '$lib/assets/photos/360p/sa_dk.png';
	import joanna_party from '$lib/assets/photos/360p/joanna_party.jpg';
	import jun_suzuki from '$lib/assets/photos/360p/jun_suzuki.png';

	import artists from '$lib/assets/data/artists';

	const thumb_toma_kami = [toma_kami];
	const thumb_dj_seduce = [dj_seduce];
	const thumb_sstrom = [sstrom];
	const thumb_dip_shim = [dip_shim];
	const thumb_dj_selfhelp = [dj_selfhelp];
	const thumb_tomasz_skibicki = [tomasz_skibicki];
	const thumb_j_nordstrom = [j_nordstrom];
	const thumb_migle_vycinaite = [migle_vycinaite];
	const thumb_marius_bo = [marius_bo];
	const thumb_little_floating_oracles = [little_floating_oracles];
	const thumb_mikkel_hogh_kaldal = [mikkel_hogh_kaldal];
	const thumb_vox_supreme = [vox_supreme];
	const thumb_sonia_witwitzka = [sonia_witwitzka];
	const thumb_egregore = [egregore];
	const thumb_aaro_murphy = [aaro_murphy];
	const thumb_tadan = [tadan];
	const thumb_jacob_dwyer = [jacob_dwyer];
	const thumb_kg_le = [kg_le];
	const thumb_sebastian_burger = [sebastian_burger];
	const thumb_sa_dk = [sa_dk];
	const thumb_joanna_party = [joanna_party];
	const thumb_jun_suzuki = [jun_suzuki];

	const arrImg = [
		thumb_toma_kami,
		thumb_dj_seduce,
		thumb_sstrom,
		thumb_dip_shim,
		thumb_dj_selfhelp,
		thumb_tomasz_skibicki,
		thumb_j_nordstrom,
		thumb_migle_vycinaite,
		thumb_marius_bo,
		thumb_little_floating_oracles,
		thumb_mikkel_hogh_kaldal,
		thumb_vox_supreme,
		thumb_sonia_witwitzka,
		thumb_egregore,
		thumb_aaro_murphy,
		thumb_tadan,
		thumb_jacob_dwyer,
		thumb_kg_le,
		thumb_sebastian_burger,
		thumb_sa_dk,
		thumb_joanna_party,
		thumb_jun_suzuki
	];
</script>

<section>
	<div>
		<h1>PROGRAM</h1>
		<!-- <EasterEgg /> -->
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
					keyword="SSTROM (SHXCXCHCXSH)"
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
			<a href="#j_nordstrom">
				<RevealImage
					keyword="J. Nordström"
					imageUrls={thumb_j_nordstrom}
					resp_behavior={'pgm_page'}
				/><sup>DJSET</sup>
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
			<a href="#little_floating_oracles">
				<RevealImage
					keyword="Little Floating Oracles"
					imageUrls={thumb_little_floating_oracles}
					resp_behavior={'pgm_page'}
				/><sup>LIVE PERFORMANCE</sup>
			</a>
			<a href="#mikkel_hogh_kaldal">
				<RevealImage
					keyword="Mikkel Høgh Kaldal"
					imageUrls={thumb_mikkel_hogh_kaldal}
					resp_behavior={'pgm_page'}
				/><sup>RESIDENCY ARTIST</sup>
			</a>
			<a href="#vox_supreme">
				<RevealImage
					keyword="Vox supreme"
					imageUrls={thumb_vox_supreme}
					resp_behavior={'pgm_page'}
				/><sup>DJSET</sup>
			</a>
			<a href="#sonia_witwitzka">
				<RevealImage
					keyword="Sonia Witwitzka"
					imageUrls={thumb_sonia_witwitzka}
					resp_behavior={'pgm_page'}
				/><sup>RESIDENCY ARTIST</sup>
			</a>
			<a href="#egregore">
				<RevealImage keyword="Egregore" imageUrls={thumb_egregore} resp_behavior={'pgm_page'} /><sup
					>DJSET</sup
				>
			</a>
			<a href="#aaro_murphy">
				<RevealImage
					keyword="Aaro Murphy"
					imageUrls={thumb_aaro_murphy}
					resp_behavior={'pgm_page'}
				/><sup>FEATURED WORK</sup>
			</a>
			<a href="#tadan">
				<RevealImage keyword="Tadan" imageUrls={thumb_tadan} resp_behavior={'pgm_page'} /><sup
					>DJSET</sup
				>
			</a>
			<a href="#jacob_dwyer">
				<RevealImage
					keyword="Jacob Dwyer"
					imageUrls={thumb_jacob_dwyer}
					resp_behavior={'pgm_page'}
				/><sup>READING PERFORMANCE</sup>
			</a>
			<a href="#kg_le">
				<RevealImage
					keyword="Klara & Leen"
					imageUrls={thumb_kg_le}
					resp_behavior={'pgm_page'}
				/><sup>FEATURED WORK & WORKSHOP</sup>
			</a>
			<a href="#sebastian_burger">
				<RevealImage
					keyword="Sebastian Burger"
					imageUrls={thumb_sebastian_burger}
					resp_behavior={'pgm_page'}
				/><sup>RESIDENCY ARTIST</sup>
			</a>
			<a href="#sa_dk">
				<RevealImage
					keyword="Samira Ariadad & DJ Kugg"
					imageUrls={thumb_sa_dk}
					resp_behavior={'pgm_page'}
				/><sup>DJSET</sup>
			</a>
			<a href="#joanna_party">
				<RevealImage
					keyword="Joanna Party"
					imageUrls={thumb_joanna_party}
					resp_behavior={'pgm_page'}
				/><sup>DJSET</sup>
			</a>
			<a href="#jun_suzuki">
				<RevealImage
					keyword="Jun Suzuki"
					imageUrls={thumb_jun_suzuki}
					resp_behavior={'pgm_page'}
				/><sup>VOCAL PERFORMANCE</sup>
			</a>
		</p>
		<span>+ MORE ARTISTS TO BE ANNOUNCED</span>
	</div>
</section>
<section>
	{#each artists as artist, index}
		<Artist {artist} img={arrImg[index]}></Artist>
	{/each}
	<div><a href="#"><ElevenOnHover text="↑↑TOP↑↑"></ElevenOnHover></a></div>
</section>

<style>
	/* section {
		background-color: #4545d9;
	} */
	section,
	a,
	div,
	h1,
	p,
	sup,
	span {
		color: #fe9055;
	}
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
		/* text-decoration: line-through; */
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
