<script>
	export let timeline;

	// Track open states for each card
	let openStates = timeline.map(() => false);

	function toggle(index) {
		openStates[index] = !openStates[index];
		openStates = [...openStates];
	}
</script>

<h1 class="CardTitle">Experience</h1>
<div class="my-5 flex w-full md:w-9/12 xl:w-6/12 flex-col items-center space-y-4">
	{#each timeline as item, i}
		<div class="Card pt-2 shadow-xl border-2 border-[#507687]">
			<div class="relative mx-6 md:mb-0 md:ml-6 md:mr-4 md:mt-2">
				
				<!-- Dropdown Button -->
				<button on:click={() => toggle(i)}
				class="absolute top-2 right-2 p-1 rounded-full bg-[#384B70] hover:bg-[#B8001F] transition"
				aria-label="Open/Collapse Experience">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class={`h-5 w-5 transform transition-transform duration-300 ${openStates[i] ? 'rotate-180' : ''}`}
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
					</svg>
				</button>

				<div class="flex flex-col items-center md:flex-row md:items-start">
					<img
						class="mb-3 mt-2 h-16 w-16 rounded-full shadow-lg md:mb-0 md:mr-2 md:mt-0 md:h-14 md:w-14"
						src="/images/{item.source}"
						alt={item.alt}
					/>
					<div class="flex flex-col items-center md:items-start">
						<h2 class="text-lg font-bold text-[#384B70]">{item.title}</h2>
						<div class="flex flex-row items-center gap-3 md:items-start">
							<span class="text-sm font-bold text-[#384B70] md:text-base">{item.company}</span>
							<span class="text-sm italic text-[#384B70] md:text-base">{item.duration}</span>
						</div>
					</div>
				</div>

				<!-- Description -->
				{#if item.description}
					<div
						class={`grid transition-all duration-500 ease-in-out overflow-hidden ${openStates[i] ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
					>
						<ul class="mx-4 list-disc pb-2 md:pb-0 overflow-hidden">
							{#each item.description as desc}
								<li class="text-sm md:text-base text-[#384B70]">{desc}</li>
							{/each}
						</ul>
					</div>
				{/if}
			</div>
		</div>
	{/each}
</div>
