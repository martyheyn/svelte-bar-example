<script lang="ts">
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	let ready = false;
	onMount(() => (ready = true));

	import Carousel from '../components/carousel.svelte';
	let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

	import landingBar from '../public/divebar-hero-dark.jpg';
	import fullBar from '../public/bar_full.jpg';
	import drink from '../public/drink.jpg';
	import outsideBar from '../public/outside_bar.jpg';
	import Loader from '../components/loader.svelte';
	import Logo from '../public/odonells-logo.png';

	let active = 0;

	const pics = [landingBar, fullBar, drink, outsideBar];

	const setActive = (index: number) => {
		active = index;
	};

	let images = [
		{ title: 'Red Stripe', src: '/images/beer/red_stripe.png' },
		{ title: 'Kirin', src: '/images/beer/asain_beer.png' },
		{ title: 'Coors Light', src: '/images/beer/coors-light.png' },
		{ title: 'Beer', src: '/images/beer/generic-beer.png' },
		{ title: 'Green Stripe', src: '/images/beer/green_beer.png' }
	];

	let scroll: number;
	$: scale = 1 - scroll * 0.0006;
</script>

<svelte:window bind:scrollY={scroll} />

{#if ready}
	<div class="h-[76.3vh] md:h-[81.5vh] relative transition-all duration-300">
		{#key active}
			<img
				class="absolute object-cover h-full w-full opacity-90"
				in:fade={{ duration: 800 }}
				out:fade={{ duration: 400 }}
				src={pics[active]}
				alt="test"
			/>
		{/key}
		<div
			class="absolute left-1/2 top-[42%] transform -translate-x-1/2 -translate-y-1/2  w-full"
			transition:fade={{ duration: 400 }}
		>
			<div
				class="page-title text-8xl"
				style:transform={` translate3d(0, -${scroll * 0.4}px, 0) scale(${scale})`}
			>
				Odonells Pub
			</div>
		</div>
		<div class="absolute bottom-5 right-7 text-white flex flex-row">
			{#each pics as pic, i (pic)}
				{#if i !== active}
					<div class="w-24 h-14 px-2" on:click={() => setActive(i)}>
						<img
							class="grayscale hover:grayscale-0 opacity-70 hover:scale-105 cursor-pointer transition-all duration-300 rounded-sm object-cover w-full h-full"
							src={pic}
							alt="bar img"
						/>
					</div>
				{/if}
			{/each}
		</div>
	</div>

	<!-- maybe make it a snap -->
	<div class="h-screen bg-yellow-300 flex justify-center items-center text-5xl">Carousel</div>
	<div class="h-screen bg-red-300 flex justify-center items-center text-5xl">
		Parallax horizontal scroll
	</div>
	<!-- <div>
		<Carousel {images} />
	</div> -->
{:else}
	<div class="h-[85vh] bg-[#232020] flex justify-center items-center">
		<Loader />
	</div>
{/if}
