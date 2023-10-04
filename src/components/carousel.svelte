<script lang="ts">
	import Siema from 'siema';
	import { onMount, createEventDispatcher } from 'svelte';

	export let perPage = 3;
	export let loop = true;
	export let autoplay = 0;
	export let duration = 200;
	export let easing = 'ease-out';
	export let startIndex = 0;
	export let draggable = true;
	export let multipleDrag = true;
	export let threshold = 20;
	export let rtl = false;
	let currentIndex = startIndex;

	// the magic happens here
	let siema: any;
	let controller: any;
	let timer: any;
	const dispatch = createEventDispatcher();

	$: pips = controller ? controller.innerElements : [];
	$: currentPerPage = controller ? controller.perPage : perPage;
	$: totalDots = controller ? Math.ceil(controller.innerElements.length / currentPerPage) : [];

	// actual Js happens here
	onMount(() => {
		controller = new Siema({
			selector: siema,
			perPage: typeof perPage === 'object' ? perPage : Number(perPage),
			loop,
			duration,
			easing,
			startIndex,
			draggable,
			multipleDrag,
			threshold,
			rtl,
			onChange: handleChange
		});

		if (autoplay) {
			timer = setInterval(right, autoplay);
		}
		return () => {
			autoplay && clearInterval(timer);
			controller.destroy();
		};
	});

	export function isDotActive(currentIndex: number, dotIndex: number) {
		if (currentIndex < 0) currentIndex = pips.length + currentIndex;
		return (
			currentIndex >= dotIndex * currentPerPage &&
			currentIndex < dotIndex * currentPerPage + currentPerPage
		);
	}

	export function left() {
		controller.prev();
	}

	export function right() {
		controller.next();
	}

	export function go(index: number) {
		controller.goTo(index);
	}

	export function pause() {
		clearInterval(timer);
	}

	export function resume() {
		if (autoplay) {
			timer = setInterval(right, autoplay);
		}
	}

	function handleChange(event: any) {
		currentIndex = controller.currentSlide;
		dispatch('change', {
			currentSlide: controller.currentSlide,
			slideCount: controller.innerElements.length
		});
	}

	function resetInterval(node: any, condition: any) {
		function handleReset(event: any) {
			pause();
			resume();
		}

		if (condition) {
			node.addEventListener('click', handleReset);
		}

		return {
			destroy() {
				node.removeEventListener('click', handleReset);
			}
		};
	}
</script>

<div class="relative w-full justify-center items-center">
	<div class="">
		<slot />
	</div>

	<button
		class="absolute w-[40px] h-[40px] top-1/2 z-50 mt-[-20px] border-none bg-transparent left-[2wv]"
	>
		Left
	</button>

	<button
		class="absolute w-[40px] h-[40px] top-1/2 z-50 mt-[-20px] border-none bg-transparent right-[2wv]"
	>
		Right
	</button>

	<ul class="list-none absolute flex justify-centerw-full mt-[-30px] p-0">
		<li class="m-2 rounded-full bg-slate-200 h-2 w-2">Tes</li>
	</ul>
</div>

<style>
	button:focus {
		outline: none;
	}
	ul li:hover {
		background-color: rgba(255, 255, 255, 0.85);
	}
</style>
