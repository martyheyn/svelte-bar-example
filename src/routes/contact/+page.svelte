<script lang="ts">
	import { slide, fly } from 'svelte/transition';

	let success = false;

	async function handleSubmit(event: any) {
		const data = new FormData(event.target as HTMLFormElement);
		const response = await fetch('/contact', {
			method: 'POST',
			body: data
		});

		const result = await response.json();
		console.log('result: ', result);

		if (result.data === 'success') {
			// animate
			success = true;

			setTimeout(() => {
				success = false;
			}, 3000);
		}

		// reset values
		event.target.reset();
	}
</script>

<div
	class="h-[76.2vh] md:h-[81.5vh] transition-all duration-300 flex flex-col justify-center items-center bg-slate-400 overflow-hidden relative"
>
	<div
		class="bg-gray-300 max-w-xl w-2/3 h-3/4 min-h-[300px] rounded-xl transition-all duration-300 absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2"
	>
		<div class="bg-gray-500 h-8 w-full rounded-t-md flex items-center">
			<div
				class="bg-red-500 h-3 w-3 rounded-full ml-3 mx-[6px] text-[9px] indent-[2.5px] font-extrabold hover:bg-red-600 transition-all duration-200 cursor-pointer hover:font-black hover:ring-1 hover:ring-red-500"
			>
				X
			</div>
			<div
				class="bg-green-400 h-3 w-3 rounded-full mx-[6px]
			hover:bg-green-500 transition-all duration-200 cursor-pointer hover:font-black hover:ring-1 hover:ring-green-400"
			>
				<div
					class="border border-black h-[50%] w-1/2 mt-[3px] ml-[3px] hover:border-2
				"
				/>
			</div>
			<div
				class="bg-yellow-500 h-3 w-3 rounded-full mx-[6px] text-lg hover:bg-yellow-600 transition-all 
				duration-200 cursor-pointer hover:font-black hover:ring-1 hover:ring-yellow-500"
			>
				<div class="border-t border-black w-1/2 mt-[5.5px] ml-[3px] hover:border-t-2" />
			</div>
		</div>

		<form method="POST" on:submit|preventDefault={handleSubmit}>
			<div class="flex flex-col space-y-5 px-6 sm:px-8 py-4">
				<div>
					<label class="text-sm" for="email">Email</label>
					<input
						class="ring-1 ring-gray-300 w-full rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-gray-500 mt-2"
						type="email"
						name="email"
						placeholder="Email Address"
						required
					/>
				</div>

				<div>
					<label class="" for="comments">Comments</label>
					<textarea
						class="resize-none h-32 ring-1 ring-gray-300 w-full rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-gray-500 mt-2"
						type="text"
						name="comments"
						placeholder="Anything you'd like to tell us..."
						required
					/>
				</div>

				<div class="flex justify-end col-start-2 col-end-2">
					<button type="submit" class="bg-gray-200 p-2 w-28 rounded-md hover:bg-gray-100 shiner">
						Submit
					</button>
				</div>
			</div>
		</form>
	</div>
	{#if success}
		<div
			transition:fly={{ x: 200 }}
			class="max-w-xl w-2/3 p-2 my-2 mx-3 bg-green-400 rounded-lg text-xl"
		>
			Email Sent!
		</div>
	{/if}
</div>
