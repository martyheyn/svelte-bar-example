<script>
	import { fly } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let menuOpen = false;
	let menuCarrot = false;

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	function carrotIn() {
		menuCarrot = true;
	}

	function carrotOut() {
		menuCarrot = false;
	}

	function toggleOpen() {
		dispatch('toggleOpen');
	}
</script>

<!-- want this to slide in from the left and take up 90% of screen -->
<nav
	class="sm:hidden bg-[#232020] text-white absolute z-10 w-full flex flex-col justify-center items-center transition-all duration-300"
	transition:fly={{ y: -200, duration: 300 }}
>
	<a on:click={toggleOpen} class="mobile-nav-item" href="/">Home</a>
	<a on:click={toggleOpen} class="mobile-nav-item" href="/location">Hours & Location</a>
	<!-- <a on:click={toggleOpen} class="mobile-nav-item" href="/about">About</a> -->
	<div
		class={`mobile-nav-item flex justify-center group relative ${menuOpen && 'bg-gray-600'}`}
		on:click={toggleMenu}
		on:mouseenter={carrotIn}
		on:mouseleave={carrotOut}
	>
		<div class="">Menu</div>
		{#if menuCarrot}
			<div
				class="flex items-center ml-2 mt-[1px] transition-all duration-300"
				transition:fly={{ y: -10, duration: 300 }}
			>
				<svg data-baseweb="icon" viewBox="0 0 24 24" class="w-4 h-4 fill-white chevron">
					<title>Chevron Down</title>
					<path
						transform="rotate(270, 12, 12)"
						d="M9 12C9 12.2652 9.10536 12.5196 9.29289 12.7071L13.2929 16.7071C13.6834 17.0976 14.3166 17.0976 14.7071 16.7071C15.0976 16.3166 15.0976 15.6834 14.7071 15.2929L11.4142 12L14.7071 8.70711C15.0976 8.31658 15.0976 7.68342 14.7071 7.29289C14.3166 6.90237 13.6834 6.90237 13.2929 7.29289L9.29289 11.2929C9.10536 11.4804 9 11.7348 9 12Z"
					/>
				</svg>
			</div>
		{/if}
	</div>
	{#if menuOpen}
		<a
			on:click={toggleOpen}
			transition:fly={{ y: -80, duration: 300 }}
			class="mobile-nav-item"
			href="/specials">Food</a
		>
		<a
			on:click={toggleOpen}
			transition:fly={{ y: -90, duration: 300 }}
			class="mobile-nav-item"
			href="/specials">Drink</a
		>
	{/if}
	<a on:click={toggleOpen} class="mobile-nav-item" href="/specials">Specials</a>
</nav>
