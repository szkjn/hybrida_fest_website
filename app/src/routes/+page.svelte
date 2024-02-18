<script>
		import home_1 from '$lib/assets/photos/home_1.jpg';
		import home_2 from '$lib/assets/photos/home_2.jpg';
		import home_3 from '$lib/assets/photos/home_3.jpg';
		import home_4 from '$lib/assets/photos/home_4.jpg';
		import home_5 from '$lib/assets/photos/home_5.jpg';
		import home_6 from '$lib/assets/photos/home_6.jpg';
		import home_7 from '$lib/assets/photos/home_7.jpg';
		import home_8 from '$lib/assets/photos/home_8.jpg';
	</script>

<section>
	<h2 class="m-0">
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		We are an experimental arts
		&nbsp;
		<svg width="148" height="78" viewBox="0 0 148 78" fill="none" xmlns="http://www.w3.org/2000/svg"><g style="mix-blend-mode:exclusion"><line x1="37.0009" y1="75.8918" x2="75.8918" y2="37.0009" stroke="black" stroke-width="5.5"/><line x1="36.89" y1="2.00089" x2="75.7808" y2="40.8918" stroke="black" stroke-width="5.5"/></g><g style="mix-blend-mode:exclusion"><line x1="110.835" y1="1.94454" x2="71.9445" y2="40.8354" stroke="black" stroke-width="5.5"/><line x1="110.946" y1="75.8354" x2="72.0555" y2="36.9445" stroke="black" stroke-width="5.5"/></g></svg>
		music festival in the midst of the Swedish forest.
	</h2>
</section>
<section>
	<img class="photo-w100" alt="friendly moment between festival-goers" src={home_1}/>
</section>
<section>
	<p class="m-0">
		This summer marks our fourth year curating the space 
		in the little village of Älvsbacka in West Sweden, 
		surrounded by forests, streams and a great lake.
	</p>
</section>
<section>
	<img class="photo-w100" alt="singing performance" src={home_2}/>
</section>
<section>
	<p class="m-0">
		Over three glorious days at the peak of Midsommar, we will indulge in 
		a variety of 
		<span>art-works</span> 
		<span>,</span> 
		<span>live performances</span> 
		<span>,</span> 
		<span>dj sets</span> 
		<span>, and</span> 
		<span>workshops</span> 
		<span>,</span> 
		all specific to the unique site of an old rambling ironworks.
	</p>
</section>
<section class="f f-d-row inline-photos f-row-gap-15">
	<img class="f-g-1" alt="" src={home_3}/>
	<img class="f-g-1" alt="" src={home_4}/> 
	<img class="f-g-1" alt="" src={home_5}/> 
	<img class="f-g-1" alt="" src={home_6}/> 
</section>
<section>
	<p class="m-0">
		In the embrace of our intimate gathering (max. 200 souls) , 
		we aim to dissolve boundaries between artists, audience and organisers.
	</p>
</section>
<section>
	<img class="photo-w100" alt="" src={home_7}/>
</section>
<section>
	<div class="f f-j-c-end">
		<p class="m-0">June 27-<br>June -28-<br>June -29</p>
	</div>
	<div class="f f-j-c-center">
		<svg width="148" height="78" viewBox="0 0 148 78" fill="none" xmlns="http://www.w3.org/2000/svg"><g style="mix-blend-mode:exclusion"><line x1="37.0009" y1="75.8918" x2="75.8918" y2="37.0009" stroke="black" stroke-width="5.5"/><line x1="36.89" y1="2.00089" x2="75.7808" y2="40.8918" stroke="black" stroke-width="5.5"/></g><g style="mix-blend-mode:exclusion"><line x1="110.835" y1="1.94454" x2="71.9445" y2="40.8354" stroke="black" stroke-width="5.5"/><line x1="110.946" y1="75.8354" x2="72.0555" y2="36.9445" stroke="black" stroke-width="5.5"/></g></svg>
	</div>
	<div>
		<p class="m-0">Join us.</p>
	</div>
</section>
<section>
	<div>
		<p class="m-0">Become a <a href="/volunteers"><span>volunteer</span></a>.</p>
		<p class="m-0">Get your <a href="/tickets"><span>tickets</span></a>.</p>
	</div>
	<div>
	</div>
</section>
<section>
	<img class="photo-w100" alt="" src={home_8}/>
</section>

<style>
  section {
		width: 100%;
		margin: 100px 0 100px 0;
	}
	section:nth-child(1), section:nth-child(2), section:last-child {
		margin: 0;
	}
	h2, p, span {
		display: inline-block;
		line-height: var(--font-line-heignt);
		text-align: justify;
	}
	h2, p {
		font-family: var(--font-primary);
		font-size: var(--font-size-1);
		font-weight: 400;
	}
	span:nth-child(2n+1) {
		font-family: var(--font-secondary);
		font-size: var(--font-size-4);
		font-weight: 300;
	}
	.inline-photos {
		gap: 0 15px;
	}
	img {
		object-fit: cover;
  	object-position: 50% 50%;
	}
	.inline-photos > img {
		width: 13%;
	}
	.photo-w100 {
  	width: 100%;
		height: 100vh;
	}
	section:nth-last-child(2) > div > p > a > span {
		cursor: pointer;
		color: var(--font-color-1);
		font-size: var(--font-size-4);
	}
	section:nth-last-child(2) > div > p > a > span:hover {
		text-decoration: underline;
	}
</style>
