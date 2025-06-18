<script>
  export let blogs;
  import Tag from "./Tag.svelte";
</script>
<div class="flex flex-col space-y-4 w-full items-center my-6">
  {#if blogs.length > 0}
  {#each blogs as item, index}
    <a href={`blog/${item.id}`} class="Card flex flex-col-reverse items-center shadow-2xl w-full max-w-4xl">
      
      <div class="flex flex-col w-full px-6 mt-2">
        <div class="flex flex-col sm:flex-row w-full gap-4 pb-3">
          
          <!-- Left side: Title + Description -->
          <div class="flex-1">
            <h2 class="text-2xl font-bold text-[#FCFAEE]">{item.title}</h2>
            {#if item.description}
              <span class="italic text-md text-[#FCFAEE]">{item.description}</span>
            {/if}
          </div>

          <!-- Right side: Tags -->
          <div class="flex flex-wrap gap-2 sm:justify-end">
            {#each item.tags as tag}
              <Tag text={tag} />
            {/each}
          </div>

        </div>
      </div>

      {#if item.source}
        <div class="w-full pt-6 px-6">
          <img class="rounded-xl shadow-lg w-full" src={`blog/${item.id}/${item.source}`} alt={item.alt} />
        </div>
      {/if}
    </a>
  {/each}
  {:else}
    <h1 class="text-center bg-[#384B70] rounded-3xl text-[#FCFAEE] font-semibold text-xl shadow-xl w-fit px-3 py-1">No results found</h1>
  {/if}
</div>




