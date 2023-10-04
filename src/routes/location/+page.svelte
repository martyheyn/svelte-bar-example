<script lang="ts">
	import { fade } from 'svelte/transition';
	import OutsideBar from '../../public/outside_bar.jpg';
	import Draggable from '../../utils/draggable.svelte';

	let w: number, h: number;
	// $: console.log(w, h);
</script>

<div class="h-[76.5vh] md:h-[81.5vh] relative">
	<img
		class="absolute object-cover h-full w-full opacity-90"
		in:fade={{ duration: 800 }}
		out:fade={{ duration: 400 }}
		src={OutsideBar}
		alt="test"
	/>
	<div
		class="absolute left-1/2 top-[65%] transform -translate-x-1/2 -translate-y-3/4 max-w-md w-[70%] h-2/3 bg-gray-300 rounded-2xl shiner p-4 shadow-xl"
		in:fade={{ duration: 1000 }}
		out:fade={{ duration: 400 }}
	>
		<div class="flex justify-center text-xl mb-4 font-semibold">Hours</div>
		<div class="grid grid-cols-2 gap-4 md:gap-5 place-items-center">
			<div>Monday:</div>
			<div class="font-semibold">10am - 1am</div>

			<div>Tuesday:</div>
			<div class="font-semibold">Closed</div>

			<div>Wednesday:</div>
			<div class="font-semibold">Closed</div>

			<div>Thursday:</div>
			<div class="font-semibold">10am - 12pm</div>

			<div>Friday:</div>
			<div class="font-semibold">10 - late</div>

			<div>Saturday:</div>
			<div class="font-semibold">10 - late</div>

			<div>Sunday:</div>
			<div class="font-semibold">10 - 1am</div>
		</div>
	</div>
</div>

<div
	class="h-[70vh] border-t-4 border-gray-400 relative"
	bind:clientWidth={w}
	bind:clientHeight={h}
>
	<iframe
		src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=531%20S%20Potomac%20St,%20Baltimore,%20MD%2021224+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
		title="location"
		class="h-full w-full"
	/>
	<div class="absolute left-1/2 top-[58%] transform -translate-x-1/2 -translate-y-1/">
		<!-- <Draggable left={w ? w / 2 : 200} top={h ? h / 2 : 200}> -->
		<a
			class="cursor-pointer px-6 py-2 bg-gray-300 rounded-3xl hover:bg-gray-200 hover:ring-2 hover:ring-gray-400 "
			href="https://www.google.com/maps/place/O'Donnell's+Pub+%26+Grille/@39.285444,-76.574194,15z/data=!4m2!3m1!1s0x0:0xe69c82b22d0d521c?sa=X&ved=2ahUKEwjz2ZHz3O_5AhVShIkEHVYBCTIQ_BJ6BAhWEAU"
			target="blank"
		>
			Directions
		</a>
		<!-- </Draggable> -->
	</div>
</div>

<!-- https://www.section.io/engineering-education/compile-your-nodejs-application-into-a-exe-file/ -->
