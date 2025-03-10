<script lang="ts">
	import { onMount } from 'svelte';
	import logo_1 from '$lib/assets/svg/250310_HybridaFest2025_Title_-12.svg';
	import logo_2 from '$lib/assets/svg/250310_HybridaFest2025_Title_-13.svg';
	import logo_3 from '$lib/assets/svg/250310_HybridaFest2025_Title_-14.svg';
	import img_1 from '$lib/assets/photos/720p/1.jpg';
	import img_2 from '$lib/assets/photos/720p/2.jpg';
	import img_3 from '$lib/assets/photos/720p/3.jpg';
	import img_4 from '$lib/assets/photos/720p/4.jpg';
	import img_5 from '$lib/assets/photos/720p/5.jpg';
	import img_6 from '$lib/assets/photos/720p/6.jpg';
	import img_7 from '$lib/assets/photos/720p/7.jpg';
	import img_8 from '$lib/assets/photos/720p/8.jpg';
	import img_9 from '$lib/assets/photos/720p/9.jpg';
	import img_10 from '$lib/assets/photos/720p/10.jpg';
	import img_11 from '$lib/assets/photos/720p/11.jpg';
	import img_12 from '$lib/assets/photos/720p/12.jpg';
	import img_13 from '$lib/assets/photos/720p/13.jpg';
	import img_14 from '$lib/assets/photos/720p/14.jpg';
	import img_15 from '$lib/assets/photos/720p/15.jpg';
	import img_16 from '$lib/assets/photos/720p/16.jpg';
	import img_17 from '$lib/assets/photos/720p/17.jpg';
	import img_18 from '$lib/assets/photos/720p/18.jpg';
	import img_19 from '$lib/assets/photos/720p/19.jpg';

	let gradientPosition = 50;
	let currentImg = img_1;

	const images = [
		img_1,
		img_2,
		img_3,
		img_4,
		img_5,
		img_6,
		img_7,
		img_8,
		img_9,
		img_10,
		img_11,
		img_12,
		img_13,
		img_14,
		img_15,
		img_16,
		img_17,
		img_18,
		img_19
	];

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
	<div class="main-section">
		<section class="banner">
			<div class="banner-top">
				<img class="svg" src={logo_1} alt="Festival logo" />
				<img class="svg" src={logo_2} alt="Title: HYBRIDA FEST '25" />
				<img class="svg" src={logo_3} alt="Title: 26-29 JUNE" />
			</div>
			<div class="banner-txt">
				<p>
					Älvsbacka, where the festival takes place, is located in Värmland in western Sweden, ca. 3
					hours from Gothenburg Stockholm & Oslo.
				</p>
				<br />
				<p>More info soon :)</p>
				<br />
				<!-- <p>↗ Discover the <a href="">program</a></p> -->
				<!-- <p>↗ Get more <a href="">info</a></p> -->
				<!-- <p>↗ Our <a href="">Presskit</a></p> -->
				<p class="bold">
					↗ Buy a <a href="https://ra.co/events/2121283" target="_blank">ticket</a>
				</p>
				<p class="bold">
					↗ Become a <a href="https://tally.so/r/mVDZgj" target="_blank">volunteer</a>
				</p>
				<!-- <p>↗ <a href="">Apply to our artist residency</a></p> -->
			</div>
		</section>

		<section class="right-section">
			<img class="img" src={currentImg} alt="2024 edition festival documentation" />
			<div class="text-section">
				<div class="header">
					<p>
						Hybrida Fest is a collective exploration of art & music deep in the Swedish countryside
						that came to life in 2021.
					</p>
				</div>
				<div class="columns">
					<p>
						It combines a festival program featuring live performances, workshops, a full dance
						floor experience, and a visual art exhibition produced during our on-site art residency.

						<br />
						<br />

						Our festival takes place during the long days around midsummer, in and around old
						buildings of a former iron works a short walk from a beautiful lake and surrounded by
						fair forests.
					</p>

					<p>
						Next to this year's exciting line-up, there will be breakfast, lunch & dinner served in
						our dining hall (all cooked by our brilliant kitchen team), sauna, trail hikes,
						exhibition viewings, and a LARP amongst other things included in the program.

						<br />
						<br />

						We can’t wait to welcome you back and meet everyone joining for the first time this
						year!
					</p>
				</div>
			</div>
		</section>
	</div>
	<section class="call-to-action">
		<a href="https://ra.co/events/2121283" target="_blank"
			><p class="action-text bold">Get your early bird ticket</p>
		</a>
	</section>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100vh;
		font-family: 'Poppins', sans-serif;
	}
	p {
		margin: 0;
	}

	.main-section {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		gap: 4rem;
		height: 100%;
		width: 100%;
	}
	.banner {
		display: flex;
		flex-direction: column;
		width: 20vw;
		max-width: 220px;
		height: 100%;
		align-items: center;
		/* border: 1px solid black; */
		background: linear-gradient(
			to bottom,
			#e22c1c 0%,
			#6d8cb2 var(--gradientPosition, 50%),
			#b4baaf 100%
		);
		padding-top: 1rem;
	}
	.banner-top {
		width: 100%;
		aspect-ratio: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.banner-txt {
		font-size: 0.7rem;
		line-height: 0.8rem;
		text-align: justify;
		padding: 1.6rem 0.7rem;
		display: flex;
		flex-direction: column;
	}
	.bold {
		font-weight: 600;
	}

	.svg {
		width: 90%;
		max-height: 60vh;
		height: auto;
	}

	.right-section {
		max-width: 600px;
		opacity: 0.8;
		color: black;
		padding-top: 1rem;
	}
	.right-section img {
		width: 100%;
		object-fit: contain;
	}
	.text-section {
		display: flex;
		flex-direction: column;
		width: 100%;
		/* justify-content: center;
		align-items: start; */
		font-weight: 500;
		font-size: 0.7rem;
		text-align: justify;
	}
	.header {
		font-weight: 700;
		font-size: 0.8rem;
		width: 100%;
		line-height: 1rem;
		padding-bottom: 0.5rem;
	}
	.columns {
		display: flex;
		gap: 1rem;
		width: 100%;
		line-height: 0.8rem;
	}
	.columns p {
		width: 50%;
	}

	.call-to-action {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 1.5rem;
		text-align: center;
		font-size: 0.9rem;
		background: #6d8cb2;
		transition: height 0.3s ease-in-out;
	}
	.call-to-action:hover {
		height: 3rem;
	}

	@media (max-width: 900px) {
		.main-section {
			gap: 2rem;
		}
		.banner {
			min-width: 180px;
		}
		.right-section {
			max-width: 400px;
		}
	}

	@media (max-width: 700px) {
		.banner {
			min-width: 150px;
		}
		.right-section {
			max-width: 350px;
		}
	}

	@media (max-width: 550px) {
		main {
			height: 150vh;
			background: linear-gradient(
				to bottom,
				#e22c1c 0%,
				#6d8cb2 var(--gradientPosition, 50%),
				#b4baaf 100%
			);
		}
		.main-section {
			padding-top: 2rem;
			flex-wrap: wrap;
		}
		.banner {
			background: transparent;
			/* max-width: 85vw; */
			width: 85vw;
			height: 70vh;
		}
		.right-section {
			max-width: 85vw;
		}
		.columns {
			flex-direction: column;
		}

		.columns p {
			width: 100%;
		}

		.call-to-action {
			position: absolute;
		}
		.call-to-action:hover {
			height: 1.5rem;
		}
	}
</style>
