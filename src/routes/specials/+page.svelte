<script>
	import SpecialCard from '../../components/special-card.svelte';
	import { fade } from 'svelte/transition';
	import tabs from '../../public/tab.jpeg';
</script>

<div class="h-[76.3vh] md:h-[81.5vh] relative">
	<img
		class="absolute object-cover h-full w-full opacity-90"
		in:fade={{ duration: 800 }}
		out:fade={{ duration: 400 }}
		src={tabs}
		alt="Specials"
	/>
	<div
		class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
		in:fade={{ duration: 1000 }}
		out:fade={{ duration: 400 }}
	>
		<div
			class="page-title border-white bg-gradient-to-br from-slate-300 to-slate-400 px-12 py-2 rounded-full"
		>
			Specials
		</div>
	</div>
</div>

<div class="border-t-4 border-white bg-gradient-to-r from-slate-200 to-slate-400 relative">
	<div class="mx-10 mt-10 text-5xl font-bold flex justify-center">Specials</div>
	<div
		class="absolute top-24 right-2 sm:top-24 sm:right-2 md:top-28 md:right-6 lg:top-28 lg:right-20 h-24 w-24 bg-green-300 rounded-full"
	/>
	<div
		class="absolute bottom-4 left-4 sm:bottom-4 sm:left-4 md:bottom-10 md:left-10 lg:bottom-10 lg:left-24 h-16 w-16 bg-yellow-200 rounded-full"
	/>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 md:gap-16 p-10 md:p-16 lg:px-32 ">
		<SpecialCard day="Monday" specials={['$5 Appletinis', '$5 Appletinis']} />
		<SpecialCard day="Tuesday" specials={['$5 Appletinis', '$5 Appletinis']} />
		<SpecialCard day="Wednesday" specials={['$5 Appletinis']} />
		<SpecialCard day="Thursday" specials={['$5 Appletinis', '$5 Appletinis', '$5 Appletinis']} />
		<SpecialCard day="Friday" specials={['$5 Appletinis', '$5 Appletinis']} />
		<SpecialCard day="Sunday" specials={['Game day deals', '$5 Appletinis']} />
	</div>
</div>
