<script>
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	/**
	 * @type {gsap.TweenTarget}
	 */
	let easterEgg;
	let showPopup = false;
	let copySuccess = '';

	function randomizePosition() {
		const maxX = window.innerWidth / 2;
		const maxY = window.innerHeight / 2;
		const x = (Math.random() * 2 - 1) * maxX;
		const y = (Math.random() * 2 - 1) * maxY;

		// Use GSAP to animate the Easter egg to a new random position
		gsap.to(easterEgg, {
			x: x,
			y: y,
			duration: 1.5,
			ease: 'elastic.out(1, 0.5)'
		});

		console.log(window.innerWidth);
	}

	onMount(() => {
		// Initialize position
		randomizePosition();
		// Change position every 2 seconds
		const interval = setInterval(randomizePosition, 2000);

		return () => {
			clearInterval(interval); // Clean up the interval on component destruction
		};
	});

	function handleClick() {
		showPopup = true;
	}

	function closePopup() {
		showPopup = false;
	}

	function openNewTab() {
		window.open(
			'https://billetto.se/ticket_buyer/offers/faf53025-a78a-445a-89e6-47c7e51364f1',
			'_blank'
		);
	}

	function copyToClipboard() {
		navigator.clipboard.writeText('09842').then(
			() => {
				copySuccess = 'COPIED!';
				setTimeout(() => (copySuccess = ''), 2000); // Reset message after 2 seconds
			},
			() => {
				copySuccess = 'Failed to copy!';
			}
		);
	}
</script>

<!-- Render the Easter egg at a random position, managed by GSAP -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div bind:this={easterEgg} class="easter-egg" on:click={handleClick}>11:11</div>

{#if showPopup}
	<div class="popup">
		<div class="popup-content">
			<pre>
 ██╗ ██╗    ██╗ ██╗
███║███║██╗███║███║
╚██║╚██║╚═╝╚██║╚██║
 ██║ ██║██╗ ██║ ██║
 ██║ ██║╚═╝ ██║ ██║
 ╚═╝ ╚═╝    ╚═╝ ╚═╝
            </pre>
			<p>
				<strong>CONGRATULATIONS!</strong> You're aligned with the magic numbers !<br />
				Get one full festival ticket for the price of: <strong>1111 SEK</strong>
			</p>
			<p>
				<strong>BE QUICK!</strong> First come, first served :)<br />
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				CHECK OUT CODE : <strong><u on:click={copyToClipboard}>09842</u></strong>
				<small>{copySuccess}</small>
			</p>
			<p>
				Add the code by clicking "Ange kampanjkod" <br />
				at the top of the ticket page.
			</p>
			<button on:click={openNewTab}>Get the offer</button>
			<button on:click={closePopup}>Cancel</button>
		</div>
	</div>
{/if}

<style>
	button,
	p {
		font-family: var(--font-primary);
		font-weight: 500;
	}
	.easter-egg {
		position: fixed;
		width: 50px;
		height: 50px;
		background-color: rgb(69, 69, 217);
		border: 2px solid #fe9055;
		color: #fe9055;
		border-radius: 50%;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 16px;
		font-family: var(--font-primary);
		z-index: 10;
	}
	.popup {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 11;
	}
	.popup-content {
		color: rgb(69, 69, 217);
		background-color: #fe9055;
		padding: 20px;
		text-align: center;
	}
	button {
		background-color: rgb(69, 69, 217);
		color: #fe9055;
		margin-top: 10px;
		padding: 8px 16px;
		font-size: 16px;
		cursor: pointer;
		border-radius: 3px;
		border: 2px solid rgb(69, 69, 217);
		font-weight: 700;
	}
	button:hover {
		color: rgb(69, 69, 217);
		background-color: #fe9055;
		border: 2px solid rgb(69, 69, 217);
	}
	pre {
		white-space: pre-wrap; /* Respect whitespace */
		word-wrap: break-word; /* Break lines */
	}
	u {
		cursor: pointer;
		text-decoration: underline;
	}
	small {
		color: green;
		font-weight: bold;
	}
</style>
