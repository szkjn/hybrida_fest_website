<script>
	import { onMount } from 'svelte';
	import logo_1 from '$lib/assets/svg/square_logo_1.svg';
	import title_banner from '$lib/assets/png/hybrida_banner_v1.png';
	import img_1 from '$lib/assets/photos/720p/img1.jpg';
	import img_2 from '$lib/assets/photos/720p/img2.jpg';
	import img_3 from '$lib/assets/photos/720p/img3.jpg';
	import img_4 from '$lib/assets/photos/720p/img4.jpg';
	import img_5 from '$lib/assets/photos/720p/img5.jpg';
	import img_6 from '$lib/assets/photos/720p/img6.jpg';

	let gradientPosition = 50;
	let currentImg = img_1;

	const images = [img_1, img_2, img_3, img_4, img_5, img_6];

	const updateGradientAndImage = (event) => {
		const mouseY = event.clientY;
		const windowHeight = window.innerHeight;
		gradientPosition = (mouseY / windowHeight) * 100;

		// Determine which image to show based on mouse position
		const imageIndex = Math.min(
			Math.floor((mouseY / windowHeight) * images.length),
			images.length - 1
		);
		currentImg = images[imageIndex];
	};

	onMount(() => {
		window.addEventListener('mousemove', updateGradientAndImage);

		return () => {
			window.removeEventListener('mousemove', updateGradientAndImage);
		};
	});
</script>

<main
	style="background: linear-gradient(to bottom, #e22c1c 0%, #6d8cb2 {gradientPosition}%, #b4baaf 100%);"
>
	<section class="banner">
		<div class="banner-top">
			<img class="svg" alt="" src={logo_1} />
		</div>
		<div class="banner-btm">
			<img class="svg" src={title_banner} alt="" />
		</div>
	</section>

	<section class="right-section">
		<img class="img" src={currentImg} alt="Dynamic Image" />
		<div class="text-section">
			<div class="header">
				<p>
					Hybrida Fest is a collective exploration of art & music deep in the Swedish countryside
					that came to life in 2021.
				</p>
			</div>
			<div class="columns">
				<p>
					It combines a festival program featuring live performances, workshops, a full dance floor
					experience, and a visual art exhibition produced during our on-site art residency.

					<br />
					<br />

					Our festival takes place during the long days around midsummer, in and around old
					buildings of a former iron works a short walk from a beautiful lake and surrounded by fair
					forests.
				</p>

				<p>
					Next to this year's exciting line-up, there will be breakfast, lunch & dinner served in
					our dining hall (all cooked by our brilliant kitchen team), sauna, trail hikes, exhibition
					viewings, and a LARP amongst other things included in the program.

					<br />
					<br />

					We can’t wait to welcome you back and meet everyone joining for the first time this year!
				</p>
			</div>
		</div>
	</section>
</main>

<style>
	main {
		/* background-image: url('$lib/assets/photos/img3.JPG');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat; */
		/* padding-left: 2rem; */
		display: flex;
		flex-direction: row;
		height: 100vh;
		justify-content: space-around;
		align-items: center;
	}
	p {
		margin: 0;
	}
	.banner {
		display: flex;
		flex-direction: column;
		width: 20vw;
		max-width: 280px;
		height: 100%;
		flex-shrink: 0;
		align-items: center;
		/* border: 1px solid black; */
		background: linear-gradient(
			to bottom,
			#e22c1c 0%,
			#6d8cb2 var(--gradientPosition, 50%),
			#b4baaf 100%
		);
	}

	.banner-top,
	.banner-btm {
		width: 100%;
		aspect-ratio: 1;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.svg,
	.img {
		width: 90%;
		height: auto;
		object-fit: contain;
	}

	.right-section {
		max-width: 720px;
		width: 66%;
		opacity: 0.8;
		padding: 0.5rem 1rem;
		color: black; /* Base color for mixing */
		/* mix-blend-mode: difference; */
	}
	.right-section img {
		width: 100%;
	}
	.text-section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: start;
		width: 100%;
		font-family: 'Poppins', sans-serif;
		font-weight: 560;
		font-size: 0.7rem;
		text-align: justify;
	}
	.header {
		margin: 0;
		font-weight: 700;
		font-size: 0.8rem;
		width: 100%;
		padding: 0;
		line-height: 1rem;
		padding: 0.5rem 0;
	}
	.columns {
		display: flex;
		justify-content: center;
		align-items: start;
		gap: 1rem;
		width: 100%;
		line-height: 0.8rem;
	}
	.columns p {
		width: 50%;
	}
</style>
