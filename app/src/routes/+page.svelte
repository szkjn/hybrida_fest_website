<script>
	import home_01 from '$lib/assets/photos/1280p/home_01.jpg';
	import home_02 from '$lib/assets/photos/1280p/home_02.jpg';
	import home_03 from '$lib/assets/photos/1280p/home_03.jpg';
	import home_04 from '$lib/assets/photos/1280p/home_04.jpg';
	import home_05 from '$lib/assets/photos/1280p/home_05.jpg';
	import map from '$lib/assets/photos/360p/map.jpg';

	// Importing preview thumbnails pictures
	// Keyword: "experimental art x music"
	import thumb_exp_art_01 from '$lib/assets/photos/360p/exp_art_music_01.jpg';
	import thumb_exp_art_02 from '$lib/assets/photos/360p/exp_art_music_02.jpg';
	import thumb_exp_art_03 from '$lib/assets/photos/360p/exp_art_music_03.jpg';
	import thumb_exp_art_04 from '$lib/assets/photos/360p/exp_art_music_04.jpg';
	import thumb_exp_art_05 from '$lib/assets/photos/360p/exp_art_music_05.jpg';
	import thumb_exp_art_06 from '$lib/assets/photos/360p/exp_art_music_06.jpg';
	import thumb_exp_art_07 from '$lib/assets/photos/360p/exp_art_music_07.jpg';
	import thumb_exp_art_08 from '$lib/assets/photos/360p/exp_art_music_08.jpg';
	// Keyword: "forests"
	import thumb_nature_01 from '$lib/assets/photos/360p/nature_01.jpg';
	import thumb_nature_02 from '$lib/assets/photos/360p/nature_02.jpg';
	import thumb_nature_03 from '$lib/assets/photos/360p/nature_03.jpg';
	import thumb_nature_04 from '$lib/assets/photos/360p/nature_04.jpg';
	import thumb_nature_05 from '$lib/assets/photos/360p/nature_05.jpg';
	import thumb_nature_06 from '$lib/assets/photos/360p/nature_06.jpg';
	import thumb_nature_07 from '$lib/assets/photos/360p/nature_07.jpg';
	import thumb_nature_08 from '$lib/assets/photos/360p/nature_08.jpg';
	// Keyword: "art exhibition"
	import thumb_exhib_01 from '$lib/assets/photos/360p/exhib_01.jpg';
	import thumb_exhib_02 from '$lib/assets/photos/360p/exhib_02.jpg';
	import thumb_exhib_03 from '$lib/assets/photos/360p/exhib_03.jpg';
	import thumb_exhib_04 from '$lib/assets/photos/360p/exhib_04.jpg';
	import thumb_exhib_05 from '$lib/assets/photos/360p/exhib_05.jpg';
	import thumb_exhib_06 from '$lib/assets/photos/360p/exhib_06.jpg';
	import thumb_exhib_07 from '$lib/assets/photos/360p/exhib_07.jpg';
	import thumb_exhib_08 from '$lib/assets/photos/360p/exhib_08.jpg';
	import thumb_exhib_09 from '$lib/assets/photos/360p/exhib_09.jpg';
	import thumb_exhib_10 from '$lib/assets/photos/360p/exhib_10.jpg';
	import thumb_exhib_11 from '$lib/assets/photos/360p/exhib_11.jpg';
	import thumb_exhib_12 from '$lib/assets/photos/360p/exhib_12.jpg';
	// Keyword: "ironworks"
	import thumb_ironworks_01 from '$lib/assets/photos/360p/ironworks_01.jpg';
	import thumb_ironworks_02 from '$lib/assets/photos/360p/ironworks_02.jpg';
	import thumb_ironworks_03 from '$lib/assets/photos/360p/ironworks_03.jpg';
	import thumb_ironworks_04 from '$lib/assets/photos/360p/ironworks_04.jpg';
	import thumb_ironworks_05 from '$lib/assets/photos/360p/ironworks_05.jpg';
	import thumb_ironworks_06 from '$lib/assets/photos/360p/ironworks_06.jpg';
	import thumb_ironworks_07 from '$lib/assets/photos/360p/ironworks_07.jpg';
	import thumb_ironworks_08 from '$lib/assets/photos/360p/ironworks_08.jpg';
	// Keyword: "live performances"
	import thumb_live_01 from '$lib/assets/photos/360p/live_01.jpg';
	import thumb_live_02 from '$lib/assets/photos/360p/live_02.jpg';
	import thumb_live_03 from '$lib/assets/photos/360p/live_03.jpg';
	import thumb_live_04 from '$lib/assets/photos/360p/live_04.jpg';
	import thumb_live_05 from '$lib/assets/photos/360p/live_05.jpg';
	import thumb_live_06 from '$lib/assets/photos/360p/live_06.jpg';
	import thumb_live_07 from '$lib/assets/photos/360p/live_07.jpg';
	import thumb_live_08 from '$lib/assets/photos/360p/live_08.jpg';
	// Keyword: "workshops"
	import thumb_workshop_01 from '$lib/assets/photos/360p/workshop_01.jpg';
	import thumb_workshop_02 from '$lib/assets/photos/360p/workshop_02.jpg';
	import thumb_workshop_03 from '$lib/assets/photos/360p/workshop_03.jpg';
	import thumb_workshop_04 from '$lib/assets/photos/360p/workshop_04.jpg';
	import thumb_workshop_05 from '$lib/assets/photos/360p/workshop_05.jpg';
	import thumb_workshop_06 from '$lib/assets/photos/360p/workshop_06.jpg';
	// Keyword: "DJ sets"
	import thumb_dj_01 from '$lib/assets/photos/360p/dj_01.jpg';
	import thumb_dj_02 from '$lib/assets/photos/360p/dj_02.jpg';
	import thumb_dj_03 from '$lib/assets/photos/360p/dj_03.jpg';
	import thumb_dj_04 from '$lib/assets/photos/360p/dj_04.jpg';
	import thumb_dj_05 from '$lib/assets/photos/360p/dj_05.jpg';
	import thumb_dj_06 from '$lib/assets/photos/360p/dj_06.jpg';
	// Keyword: "meals"
	import thumb_meals_01 from '$lib/assets/photos/360p/meals_01.jpg';
	import thumb_meals_02 from '$lib/assets/photos/360p/meals_02.jpg';
	import thumb_meals_03 from '$lib/assets/photos/360p/meals_03.jpg';
	import thumb_meals_04 from '$lib/assets/photos/360p/meals_04.jpg';
	import thumb_meals_05 from '$lib/assets/photos/360p/meals_05.jpg';
	import thumb_meals_06 from '$lib/assets/photos/360p/meals_06.jpg';
	import thumb_meals_07 from '$lib/assets/photos/360p/meals_07.jpg';
	import thumb_meals_08 from '$lib/assets/photos/360p/meals_08.jpg';
	// Keyword: "sauna"
	import thumb_sauna_01 from '$lib/assets/photos/360p/sauna_01.jpg';
	import thumb_sauna_02 from '$lib/assets/photos/360p/sauna_02.jpg';
	import thumb_sauna_03 from '$lib/assets/photos/360p/sauna_03.jpg';
	import thumb_sauna_04 from '$lib/assets/photos/360p/sauna_04.jpg';
	import thumb_sauna_05 from '$lib/assets/photos/360p/sauna_05.jpg';
	// Keyword: "new friends"
	import thumb_friends_01 from '$lib/assets/photos/360p/friends_01.jpg';
	import thumb_friends_02 from '$lib/assets/photos/360p/friends_02.jpg';
	import thumb_friends_03 from '$lib/assets/photos/360p/friends_03.jpg';
	import thumb_friends_04 from '$lib/assets/photos/360p/friends_04.jpg';
	import thumb_friends_05 from '$lib/assets/photos/360p/friends_05.jpg';
	import thumb_friends_06 from '$lib/assets/photos/360p/friends_06.jpg';
	import thumb_friends_07 from '$lib/assets/photos/360p/friends_07.jpg';

	import RevealImage from '$lib/components/RevealImage.svelte';
	import ElevenOnHover from '$lib/components/ElevenOnHover.svelte';

	const thumb_exp_art = [
		thumb_exp_art_01,
		thumb_exp_art_02,
		thumb_exp_art_03,
		thumb_exp_art_04,
		thumb_exp_art_05,
		thumb_exp_art_06,
		thumb_exp_art_07,
		thumb_exp_art_08
	];
	const thumb_nature = [
		thumb_nature_01,
		thumb_nature_02,
		thumb_nature_03,
		thumb_nature_04,
		thumb_nature_05,
		thumb_nature_06,
		thumb_nature_07,
		thumb_nature_08
	];
	const thumb_exhib = [
		thumb_exhib_01,
		thumb_exhib_02,
		thumb_exhib_03,
		thumb_exhib_04,
		thumb_exhib_05,
		thumb_exhib_06,
		thumb_exhib_07,
		thumb_exhib_08,
		thumb_exhib_09,
		thumb_exhib_10,
		thumb_exhib_11,
		thumb_exhib_12
	];
	const thumb_ironworks = [
		thumb_ironworks_01,
		thumb_ironworks_02,
		thumb_ironworks_03,
		thumb_ironworks_04,
		thumb_ironworks_05,
		thumb_ironworks_06,
		thumb_ironworks_07,
		thumb_ironworks_08
	];
	const thumb_live = [
		thumb_live_01,
		thumb_live_02,
		thumb_live_03,
		thumb_live_04,
		thumb_live_05,
		thumb_live_06,
		thumb_live_07,
		thumb_live_08
	];
	const thumb_workshop = [
		thumb_workshop_01,
		thumb_workshop_02,
		thumb_workshop_03,
		thumb_workshop_04,
		thumb_workshop_05,
		thumb_workshop_06
	];
	const thumb_djset = [
		thumb_dj_01,
		thumb_dj_02,
		thumb_dj_03,
		thumb_dj_04,
		thumb_dj_05,
		thumb_dj_06
	];
	const thumb_meals = [
		thumb_meals_01,
		thumb_meals_02,
		thumb_meals_03,
		thumb_meals_04,
		thumb_meals_05,
		thumb_meals_06,
		thumb_meals_07,
		thumb_meals_08
	];
	const thumb_sauna = [
		thumb_sauna_01,
		thumb_sauna_02,
		thumb_sauna_03,
		thumb_sauna_04,
		thumb_sauna_05
	];
	const thumb_friends = [
		thumb_friends_01,
		thumb_friends_02,
		thumb_friends_03,
		thumb_friends_04,
		thumb_friends_05,
		thumb_friends_06,
		thumb_friends_07
	];
</script>

<section>
	<h2 class="m-0">
		<!-- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -->
		Hybrida Fest is an intimate
		<RevealImage keyword="experimental arts x music" imageUrls={thumb_exp_art} />
		festival in the midst of the Swedish
		<RevealImage keyword="forests" imageUrls={thumb_nature} />.
		<br />
		<br />
	</h2>
</section>
<section>
	<img class="photo-w100" alt="friendly moment between festival-goers" src={home_01} />
</section>
<section>
	<p class="m-0">
		<br />
		With a residency
		<RevealImage keyword="art exhibition" imageUrls={thumb_exhib} /> in a rambling
		<RevealImage keyword="ironworks" imageUrls={thumb_ironworks} />. A program of
		<RevealImage keyword="live performances" imageUrls={thumb_live} />,
		<RevealImage keyword="workshops" imageUrls={thumb_workshop} />, and
		<RevealImage keyword="DJ sets" imageUrls={thumb_djset} />.
		<br />
		<br />
	</p>
</section>
<section>
	<img class="photo-w100" alt="singing performance" src={home_02} />
</section>
<section>
	<p class="m-0">
		<br />
		We'll eat
		<RevealImage keyword="home-cooked meals" imageUrls={thumb_meals} /> together, jump in the lake sweaty
		from the
		<RevealImage keyword="sauna" imageUrls={thumb_sauna} /> and toast to
		<RevealImage keyword="new friends" imageUrls={thumb_friends} />.
		<br />
		<br />
	</p>
</section>
<section>
	<img class="photo-w100" alt="" src={home_03} />
</section>
<section>
	<p class="m-0">
		<br />
		Ca. 3 hrs from
		<RevealImage keyword="Gothenburg, Stockholm & Oslo" imageUrls={[map]} />
		in Värmland. Come and create Hybrida Fest 2024 with us !
		<br />
		<br />
	</p>
</section>
<section>
	<img class="photo-w100" alt="" src={home_04} />
</section>
<section>
	<p>
		June 27—29 <br />
		Buy a <span class="link deactivated">ticket</span>.<br />
		Become a <a class="link" href="/volunteers"><ElevenOnHover text="volunteer" /></a>.
		<br />
	</p>
</section>
<section>
	<img class="photo-w100" alt="" src={home_05} />
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
	.link {
		font-size: var(--font-size-4);
		text-decoration: none;
		display: inline-table;
	}
	img {
		object-fit: cover;
		object-position: 50% 50%;
		pointer-events: none; /* Ensures the mouse events are not interfered by the image */
		transition: opacity 0.2s ease; /* Optional: for smooth appearance and disappearance */
	}
	.photo-w100 {
		width: 100%;
	}
</style>
