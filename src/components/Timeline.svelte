<script>
	export let timeline;
</script>

<div class="my-6 flex w-full flex-col items-center space-y-4">
	{#each timeline as item}
		<div class={`Card pt-2 shadow-2xl ${item.description.length == 0 ? 'md:pb-2' : 'md:pb-4'}`}>
			<div class="mx-7 space-y-2 md:mb-0 md:ml-8 md:mr-4 md:mt-2">
				<div class="flex flex-col items-center md:flex-row md:items-start">
					<img
						class="mb-3 mt-2 h-16 w-16 rounded-full shadow-lg md:mb-0 md:mr-2 md:mt-0 md:h-14 md:w-14"
						src="/images/{item.source}"
						alt={item.alt}
					/>
					<div class="flex flex-col items-center md:items-start">
						<h2 class="text-lg font-bold text-[#FCFAEE]">{item.title}</h2>
						<div class="flex flex-row items-center gap-3 md:items-start">
							<span class="text-sm font-bold text-gray-300 md:text-base">{item.company}</span>
							<span class="text-sm italic text-gray-300 md:text-base">{item.duration}</span>
						</div>
					</div>
				</div>
				{#if item.description}
					<ul class=" mx-4 list-disc pb-2 md:pb-0">
						{#each item.description as desc}
							<li class="text-sm md:text-base">{desc}</li>
						{/each}
					</ul>
				{/if}
			</div>
		</div>
	{/each}
</div>
