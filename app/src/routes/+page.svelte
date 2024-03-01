<script>
	import people_01 from '$lib/assets/photos/1280p/people_01.jpg';
	import live_04 from '$lib/assets/photos/1280p/live_04.jpg';
	import texture_01 from '$lib/assets/photos/720p/texture_01.jpg';
	import texture_02 from '$lib/assets/photos/720p/texture_02.jpg';
	import live_01 from '$lib/assets/photos/720p/live_01.jpg';
	import live_03 from '$lib/assets/photos/720p/live_03.jpg';
	import people_04 from '$lib/assets/photos/1280p/people_04.jpg';
	import people_03 from '$lib/assets/photos/1280p/people_03b.jpg';

	import thumb_live_01 from '$lib/assets/photos/360p/live_01.jpg';
	import thumb_live_02 from '$lib/assets/photos/360p/live_02.jpg';
	import thumb_live_03 from '$lib/assets/photos/360p/live_03.jpg';
	import thumb_live_04 from '$lib/assets/photos/360p/live_04.jpg';
	import thumb_install_01 from '$lib/assets/photos/360p/install_01.jpg';
	import thumb_install_02 from '$lib/assets/photos/360p/install_02.jpg';
	import thumb_install_03 from '$lib/assets/photos/360p/install_03.jpg';
	import thumb_install_04 from '$lib/assets/photos/360p/install_04.jpg';
	import thumb_workshop_01 from '$lib/assets/photos/360p/workshop_01.jpg';
	import thumb_workshop_02 from '$lib/assets/photos/360p/workshop_02.jpg';
	import thumb_workshop_03 from '$lib/assets/photos/360p/workshop_03.jpg';
	import thumb_workshop_04 from '$lib/assets/photos/360p/workshop_04.jpg';
	import thumb_dj_01 from '$lib/assets/photos/360p/dj_01.jpg';
	import thumb_dj_02 from '$lib/assets/photos/360p/dj_02.jpg';
	import thumb_dj_03 from '$lib/assets/photos/360p/dj_03.jpg';
	import thumb_dj_04 from '$lib/assets/photos/360p/dj_04.jpg';
	import thumb_nature_01 from '$lib/assets/photos/360p/nature_01.jpg';
	import thumb_nature_02 from '$lib/assets/photos/360p/nature_02.jpg';
	import thumb_nature_03 from '$lib/assets/photos/360p/nature_04.jpg';
	import thumb_nature_04 from '$lib/assets/photos/360p/nature_05.jpg';

	import RevealImage from '$lib/components/RevealImage.svelte';

	const live_images = [thumb_live_01, thumb_live_02, thumb_live_03, thumb_live_04];
	const install_images = [thumb_install_01, thumb_install_02, thumb_install_03, thumb_install_04];
	const workshop_images = [
		thumb_workshop_01,
		thumb_workshop_02,
		thumb_workshop_03,
		thumb_workshop_04
	];
	const dj_images = [thumb_dj_01, thumb_dj_02, thumb_dj_03, thumb_dj_04];
	const nature_images = [thumb_nature_01, thumb_nature_02, thumb_nature_03, thumb_nature_04];
</script>

<section>
	<h2 class="m-0">
		<!-- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -->
		Hybrida Fest is an intimate experimental art x music festival in the Swedish
		<RevealImage keyword="forests" imageUrls={nature_images} />.
		<br/>
		<br/>
	</h2>
</section>
<section>
	<img class="photo-w100" alt="friendly moment between festival-goers" src={people_01} />
</section>
<section>
	<p class="m-0">
		<br/>
		<RevealImage keyword="Residency exhibition" imageUrls={install_images} /> in a rambling ironworks.
		Alongside
		<RevealImage keyword="performances" imageUrls={live_images} />,
		<RevealImage keyword="workshops" imageUrls={workshop_images} />, and <RevealImage
			keyword="DJ sets"
			imageUrls={dj_images}
		/>.
	</p>
</section>
<section>
	<img class="photo-w100" alt="singing performance" src={live_04} />
</section>
<section>
	<p class="m-0">
		<br/>
		Eat home cooked meals together. Jump in the lake still sweaty from the sauna. Toast to new
		friends.
	</p>
</section>
<section class="f f-d-row f-j-c-center inline-photos f-row-gap-15">
	<img class="f-g-1" alt="" src={texture_01} />
	<img class="f-g-1" alt="" src={texture_02} />
	<img class="f-g-1" alt="" src={live_01} />
	<img class="f-g-1" alt="" src={live_03} />
	<svg width="148" height="78" viewBox="0 0 148 78" fill="none" xmlns="http://www.w3.org/2000/svg"
	><g style="mix-blend-mode:exclusion"
		><line
		x1="37.0009"
		y1="75.8918"
		x2="75.8918"
		y2="37.0009"
		stroke="black"
		stroke-width="5.5"
	/><line
		x1="36.89"
		y1="2.00089"
		x2="75.7808"
		y2="40.8918"
		stroke="black"
		stroke-width="5.5"
	/></g
><g style="mix-blend-mode:exclusion"
	><line
		x1="110.835"
		y1="1.94454"
		x2="71.9445"
		y2="40.8354"
		stroke="black"
		stroke-width="5.5"
	/><line
		x1="110.946"
		y1="75.8354"
		x2="72.0555"
		y2="36.9445"
		stroke="black"
		stroke-width="5.5"
	/></g
></svg
	>
</section>
<section>
	<p class="m-0">
		<br/>
		Ca. 3 hrs from Gothenburg, Stockholm & Oslo in Värmland.
	</p>
</section>
<section>
	<img class="photo-w100" alt="" src={people_04} />
</section>
<section>
	<p class="m-0">
		<br/>
		Come and take part in Hybrida Fest 2024 with us !
	</p>
	<div class="m-0 f">
		<p class="">June 27—29</p>
	</div>
	<!-- <div class="f f-j-c-center">
		<svg width="148" height="78" viewBox="0 0 148 78" fill="none" xmlns="http://www.w3.org/2000/svg"
			><g style="mix-blend-mode:exclusion"
				><line
					x1="37.0009"
					y1="75.8918"
					x2="75.8918"
					y2="37.0009"
					stroke="black"
					stroke-width="5.5"
				/><line
					x1="36.89"
					y1="2.00089"
					x2="75.7808"
					y2="40.8918"
					stroke="black"
					stroke-width="5.5"
				/></g
			><g style="mix-blend-mode:exclusion"
				><line
					x1="110.835"
					y1="1.94454"
					x2="71.9445"
					y2="40.8354"
					stroke="black"
					stroke-width="5.5"
				/><line
					x1="110.946"
					y1="75.8354"
					x2="72.0555"
					y2="36.9445"
					stroke="black"
					stroke-width="5.5"
				/></g
			></svg
		>
	</div> -->
</section>
<section>
	<div>
		<p class="m-0 m-b-1">Become a <a href="/volunteers"><span>volunteer</span></a>.</p>
		<!-- <p class="m-0">Get your <a href="/tickets"><span>tickets</span></a>.</p> -->
	</div>
	<div></div>
</section>
<section>
	<img class="photo-w100" alt="" src={people_03} />
</section>

<style>
	h2,
	p,
	span {
		display: inline-block;
		line-height: var(--font-line-heignt);
		text-align: justify;
	}
	h2,
	p {
		font-family: var(--font-primary);
		font-size: var(--font-size-1);
		font-weight: 400;
	}
	.inline-photos {
		gap: 0 15px;
	}
	img {
		object-fit: cover;
		object-position: 50% 50%;
		pointer-events: none; /* Ensures the mouse events are not interfered by the image */
		transition: opacity 0.2s ease; /* Optional: for smooth appearance and disappearance */
	}
	.inline-photos > img {
		width: 13%;
	}
	.photo-w100 {
		width: 100%;
	}
	.inline-photos > svg {
		display: none;
	}
	@media screen and (max-width: 768px) {
		.inline-photos > svg {
			display: block;
			width: clamp(80px, 25vw, 148px);
		}
		.inline-photos > img {
			display: none;
		}
	}
</style>
