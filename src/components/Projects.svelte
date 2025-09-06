<script>
  export let projects;
  import Tag from "./Tag.svelte";

  // Sort projects
  projects = projects.slice().sort((a, b) => (b.order || 0) - (a.order || 0));

  // Split projects into two columns
  let leftColumn = [];
  let rightColumn = [];

  projects.forEach((project, i) => {
    if (i % 2 === 0) leftColumn.push(project);
    else rightColumn.push(project);
  });
  rightColumn.push(leftColumn.pop())
</script>

<h1 class="CardTitle text-center">Projects</h1>

<div class="w-11/12 md:w-full max-w-5xl mx-auto gap-6 mt-6 mb-2 grid grid-cols-1 sm:grid-cols-2">
  <!-- Left Column -->
  <div class="flex flex-col gap-6">
    {#each leftColumn as item}
      <a
        href={item.link}
        class="inline-block w-full break-inside-avoid shadow-xl border-2 border-[#507687]"
      >
        <div class="space-y-1.5 w-full px-6 mt-2">
          <h2 class="text-2xl font-bold text-[#384B70]">{item.title}</h2>

          {#if item.source}
            <div class="w-full px-0">
              <img src="images/{item.source}" alt={item.alt} />
            </div>
          {/if}

          {#if item.description}
            <p class="text-[#384B70] font-semibold">
              {item.description}
              {#if item.disclaimer}
                <br />
                <span class="italic text-[#B8001F] text-sm">
                  May not be hosted anymore
                </span>
              {/if}
            </p>
          {/if}

          <div class="flex flex-wrap justify-center gap-2 pb-3 lg:pb-1 font-semibold">
            {#each item.tags as tag}
              <Tag text={tag} />
            {/each}
          </div>
        </div>
      </a>
    {/each}
  </div>

  <!-- Right Column -->
  <div class="flex flex-col gap-6">
    {#each rightColumn as item}
      <a
        href={item.link}
        class="inline-block w-full break-inside-avoid shadow-xl border-2 border-[#507687]"
      >
        <div class="space-y-1.5 w-full px-6 mt-2">
          <h2 class="text-2xl font-bold text-[#384B70]">{item.title}</h2>

          {#if item.source}
            <div class="w-full px-0">
              <img src="images/{item.source}" alt={item.alt} />
            </div>
          {/if}

          {#if item.description}
            <p class="text-[#384B70] font-semibold">
              {item.description}
              {#if item.disclaimer}
                <br />
                <span class="italic text-[#B8001F] text-sm">
                  May not be hosted anymore
                </span>
              {/if}
            </p>
          {/if}

          <div class="flex flex-wrap justify-center gap-2 pb-3 lg:pb-1 font-semibold">
            {#each item.tags as tag}
              <Tag text={tag} />
            {/each}
          </div>
        </div>
      </a>
    {/each}
  </div>
</div>
