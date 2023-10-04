<script lang="ts">
	export let left: number = 200;
	export let top: number = 200;
	let moving = false;

	function start() {
		moving = true;
	}

	function stop() {
		moving = false;
	}

	function move(e: MouseEvent) {
		if (moving) {
			left += e.movementX;
			top += e.movementY;
		}
	}

	// $: console.log(moving);
	// $: console.log('left: ', left);
	// $: console.log('top: ', top);
</script>

<!-- -->
<div
	on:mousedown={start}
	class={`absolute cursor-move select-none left-[${left}px] top-[${top}px] transform -translate-x-1/2 -translate-y-1/2
    `}
>
	<slot />
</div>

<svelte:window on:mouseup={stop} on:mousemove={move} />
