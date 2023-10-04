<script lang="ts">
	import { fade } from 'svelte/transition';

	let image: string | null | undefined;
	let altImgText: string;
</script>

<div class="h-[88.5vh] relative">
	<img
		class="absolute object-cover h-full w-full opacity-90"
		transition:fade={{ duration: 400 }}
		src={image}
		alt={altImgText}
	/>
	<div
		class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
		transition:fade={{ delay: 1000, duration: 400 }}
	>
		<slot />
	</div>
</div>
