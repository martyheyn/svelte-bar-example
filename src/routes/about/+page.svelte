<script>
	import { fade } from 'svelte/transition';
	import FullBar from '../../public/bar_full.jpg';
	import Beer from '../../public/drink.jpg';
</script>

<div class="overflow-x-hidden">
	<div class="h-[76.3vh] md:h-[81.5vh] relative">
		<img
			class="absolute object-cover h-full w-full opacity-90"
			transition:fade={{ duration: 400 }}
			src={FullBar}
			alt="test"
		/>
		<div class="absolute left-1/2 top-[65%] transform -translate-x-1/2 -translate-y-1/2 ">
			<div class="w-[500px] text-white text-5xl text-center">This place freaking rocks</div>
		</div>
	</div>
	<div class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 md:gap-16 lg:gap-0 p-10 md:p-16">
		<div
			class="flex justify-center items-center bg-yellow-100 p-10 rounded-lg place-content-center transition-all duration-300 lg:h-[90%] lg:w-[90%] shiner"
		>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid atque, id recusandae
			necessitatibus vero optio modi deleniti repudiandae rem possimus velit fugiat labore facere
			neque expedita, perspiciatis mollitia doloribus voluptas.
		</div>
		<img class="flex justify-center rounded-lg h-full w-full object-cover" src={Beer} alt="Beer" />
	</div>
</div>
