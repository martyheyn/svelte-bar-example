<script>
	// @ts-nocheck
	import { fly } from 'svelte/transition';

	import { clickOutside } from '../../utils/click_outside';

	import Hambuger from './hambuger.svelte';
	import MobileMenu from './mobile-menu.svelte';

	let mobileNav = false;
	let menuOpen = false;
	let menuCarrot = false;

	function toggleMobile() {
		mobileNav = !mobileNav;
	}

	function closeMobile() {
		mobileNav = false;
	}

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	function carrotIn() {
		menuCarrot = true;
	}

	function carrotOut() {
		menuCarrot = false;
	}
</script>

<!-- Bar Name here -->
<nav class="bg-[#232020] z-20 w-full" use:clickOutside on:click_outside={closeMobile}>
	<div
		class="bg-[#292828] py-2 text-white sm:flex justify-center md:hidden hidden w-full transition-all duration-300"
	>
		531 S Potomac St, Baltimore, MD 21224 | (410) 675-0160 | <a
			class="mx-1 transition-all duration-300 cursor-pointer hover:font-semibold hover:underline hover:underline-offset-2"
			href="/contact">Contact</a
		>
	</div>
	<div class="mx-auto border-b-4 sm:border-b border-white">
		<div
			class="hidden sm:flex justify-around items-center transition-all duration-300 sm:px-10 md:px-28 lg:px-56 text-white"
		>
			<div class="navbtn sm:my-6">
				<a href="/">Home</a>
			</div>
			<div class="navbtn sm:my-6">
				<a href="/location">Hours & Location</a>
			</div>

			<!-- <div class="navbtn">
				<a href="/about">About</a>
			</div> -->

			<div
				class="navbtn sm:py-6 flex justify-between group relative before:bottom-4"
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
								fillRule="evenodd"
								clipRule="evenodd"
								d="M9 12C9 12.2652 9.10536 12.5196 9.29289 12.7071L13.2929 16.7071C13.6834 17.0976 14.3166 17.0976 14.7071 16.7071C15.0976 16.3166 15.0976 15.6834 14.7071 15.2929L11.4142 12L14.7071 8.70711C15.0976 8.31658 15.0976 7.68342 14.7071 7.29289C14.3166 6.90237 13.6834 6.90237 13.2929 7.29289L9.29289 11.2929C9.10536 11.4804 9 11.7348 9 12Z"
							/>
						</svg>
					</div>
				{/if}
				{#if menuOpen && menuCarrot}
					<div
						class="absolute bg-[#232020] rounded-sm mx-4 w-36 z-20 -right-10 -bottom-[114.4px]"
						transition:fly={{ y: -10, duration: 300 }}
					>
						<div class="py-4 px-2 border-white border-b border-l border-r hover:bg-gray-300">
							Food
						</div>
						<div class="py-4 px-2 border-white border-b border-l border-r hover:bg-gray-300">
							Drinks
						</div>
					</div>
				{/if}
			</div>

			<div class="navbtn sm:my-6">
				<a href="/specials">Specials</a>
			</div>

			<div
				class=" hidden md:block bg-white text-black px-4 rounded-xl hover:bg-slate-100 hover:ring-2 hover:ring-slate-300 transition-all duration-300"
			>
				<a href="/">Order Now</a>
			</div>
		</div>
		<div class="pt-3 flex flex-col justify-center items-center sm:hidden text-white">
			<Hambuger open={mobileNav} on:toggleOpen={toggleMobile} />
			<div
				class="bg-[#292828] py-2 mt-1 flex justify-center md:hidden w-full transition-all duration-300"
			>
				531 S Potomac St, Baltimore, MD 21224 | (410) 675-0160
			</div>
		</div>
	</div>
	{#if mobileNav}
		<!-- use:clickOutside on:click_outside={toggleMobile} -->
		<MobileMenu on:toggleOpen={toggleMobile} />
	{/if}
</nav>
