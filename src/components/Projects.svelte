<script>
  export let projects;
  import Tag from "./Tag.svelte";
  projects = projects
    .slice()
    .sort((a, b) => (b.order || 0) - (a.order || 0));
</script>

<h1 class="CardTitle text-center">Projects</h1>

<div class="w-11/12 md:w-full max-w-5xl mx-auto my-6">
<!-- Masonry -->
  <div class="columns-1 sm:columns-2 gap-4">
    {#each projects as item}
      <a
        href={item.link}
        class="inline-block w-full mb-6 break-inside-avoid shadow-2xl border-2 border-[#507687]"
      >
        <!-- Card text content -->
        <div class="space-y-1.5 w-full px-6 mt-2">
          <h2 class="text-2xl font-bold text-[#384B70]">{item.title}</h2>

                  <!-- Card image (if exists) -->
        {#if item.source}
          <div class="w-full px-0">
            <img class="shadow-lg" src="images/{item.source}" alt={item.alt} />
          </div>
        {/if}

          {#if item.description}
            <p class="text-[#384B70]">
              {item.description}
              {#if item.disclaimer}
                <br />
                <span class="italic text-[#B8001F] text-sm">
                  May not be hosted anymore
                </span>
              {/if}
            </p>
          {/if}

          <!-- Tags -->
          <div class="flex flex-wrap justify-center gap-2 pb-3 lg:pb-1">
            {#each item.tags as tag}
              <Tag text={tag} />
            {/each}
          </div>
        </div>
      </a>
    {/each}
  </div>
</div>
