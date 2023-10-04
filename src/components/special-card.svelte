<script lang="ts">
	export let day: string;
	export let specials: string[];
</script>

<div class="relative">
	<!-- flex justify-between items-center  -->
	<div
		class="min-h-[105px] py-4 bg-orange-100 rounded-xl grid grid-cols-2 divide-x divide-gray-800 place-content-center shiner"
	>
		<div class="flex w-full justify-center items-center font-semibold">{day}:</div>
		<ul class="flex flex-col w-full justify-center items-center">
			{#each specials as special}
				<li class="font-semibold">{special}</li>
			{/each}
		</ul>
	</div>
</div>
