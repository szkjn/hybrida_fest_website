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
</script>

<section>
	<h2 class="m-0">
		Hybrida Fest is an intimate experimental art x music festival shaped by people coming together,
		new connections, and dissolving the boundaries between artist, audience and organiser.
	</h2>
</section>
<section>
	<img class="photo-w100" alt="friendly moment between festival-goers" src={people_01} />
</section>
<section>
	<p class="m-0">
		An exhibition by this year's visual artists in Hybrida’s international artist residency program,
		alongside a lovingly selected program of
		<RevealImage keyword="live performances" imageUrls={live_images} />,
		<RevealImage keyword="workshops" imageUrls={workshop_images} />,
		<RevealImage keyword="installations" imageUrls={install_images} />
		and <RevealImage keyword="DJ sets" imageUrls={dj_images} /> to let it all go.
	</p>
</section>
<section>
	<img class="photo-w100" alt="singing performance" src={live_04} />
</section>
<section>
	<p class="m-0">
		On the edge of the lake, not far from the sauna, is the campsite. Amongst the buildings is the
		dining hall with home-cooked food, the exhibition space and the stage. Enveloping us are forests
		inviting you to explore.
	</p>
</section>
<section class="f f-d-row inline-photos f-row-gap-15">
	<img class="f-g-1" alt="" src={texture_01} />
	<img class="f-g-1" alt="" src={texture_02} />
	<img class="f-g-1" alt="" src={live_01} />
	<img class="f-g-1" alt="" src={live_03} />
</section>
<section>
	<p class="m-0">
		Hybrida Fest is ca. 3 hours from Gothenburg, Stockholm & Oslo in the little village of Älvsbacka
		in Värmland, Sweden. We have just 200 tickets which cost XXX. Your ticket includes camping,
		breakfast & lunch from Thursday to Saturday, and the festival bus from Karlstad to the festival.
	</p>
</section>
<section>
	<img class="photo-w100" alt="" src={people_04} />
</section>
<section>
	<p>We can’t wait to create Hybrida Fest 2024 with you !</p>
	<div class="f f-j-c-end">
		<p class="">
			June 27-<br />
			June &nbsp;&nbsp;-28-<br />
			June &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-29
		</p>
	</div>
	<div class="f f-j-c-center">
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
	</div>
</section>
<section>
	<div>
		<p class="m-0">Become a <a href="/volunteers"><span>volunteer</span></a>.</p>
		<!-- <p class="m-0">Get your <a href="/tickets"><span>tickets</span></a>.</p> -->
	</div>
	<div></div>
</section>
<section>
	<img class="photo-w100" alt="" src={people_03} />
</section>

<style>
	section {
		width: 100%;
		margin: 100px 0 100px 0;
	}
	section:nth-child(1),
	section:nth-child(2),
	section:last-child {
		margin: 0;
	}
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
</style>
