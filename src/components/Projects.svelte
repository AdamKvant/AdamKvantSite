<script>
    export let projects;
    import Tag from "./Tag.svelte";
  </script>
  
  <div class="flex flex-col space-y-4 w-full items-center my-6">
    <div class="flex items-center justify-center text-2xl font-bold text-[#FCFAEE] px-6 pt-2 Card w-fit xl:w-fit shadow-2xl">
      <span class="-pb-3 lg:-mb-4 lg:-mt-1.5">All project cards are links to GitHub or other related resources.</span>
    </div>
    {#each projects as item}
      <a href={item.link} class="Card flex flex-col-reverse items-center shadow-2xl">
        {#if item.source}
        <div class="space-y-1.5 w-full px-6 mt-2">
          <h2 class="text-2xl font-bold text-[#FCFAEE]">{item.title}</h2>
          {#if item.description}
            <p>{item.description}
              {#if item.disclaimer}
                <br>
                <span class="italic text-[#B8001F] text-sm">May not be hosted anymore</span>
              {/if}
            </p>
          {/if}
          <div class="flex flex-wrap justify-center gap-2 pb-3 lg:pb-1">
            {#each item.tags as tag}
              <Tag text={tag}/>
            {/each}
          </div> 
        </div>
        {/if}
        {#if !item.source}
          <div class="space-y-1.5 w-full px-6 mt-2">
            <h2 class="text-2xl font-bold text-[#FCFAEE] mt-2">{item.title}</h2>
            {#if item.description}
              <p>{item.description}
                {#if item.disclaimer}
                  <br>
                  <span class="italic text-[#B8001F] text-sm">May not be hosted anymore</span>
                {/if}
              </p>
            {/if}
            <div class="flex flex-wrap justify-center gap-2 pb-3 lg:pb-1">
              {#each item.tags as tag}
                <Tag text={tag}/>
              {/each}
            </div> 
          </div>
        {/if}
        {#if item.source}
        <div class="w-full pt-6 px-6">
          <img class="rounded-xl shadow-lg" src="images/{item.source}" alt={item.alt}>
        </div>
        {/if}
      </a>
    {/each}
  </div>
  