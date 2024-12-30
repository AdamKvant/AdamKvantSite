<script>
    export let projects = [
      {
        title: "adamkvant.dev",
        description: "This site was created to learn more about component-based frameworks and to pick up Svelte. The site follows the standard SPA structure, and it is hosted on Google Firebase. The color scheme is also based upon my Rocket League car's color.",
        tags: ["Svelte","TailwindCSS","JS/TS","Firebase"],
        source: "AKSitePic.png",
        alt: "adamkvant.dev picture",
    },
    ];
    import Tag from "./Tag.svelte";
  </script>
  
  <div class="flex flex-col space-y-4 w-full items-center my-10">
    {#each projects as item}
      <div class="Card flex flex-row">
        <div class="mt-2 mb-0 ml-8 space-y-2 w-1/3">
          <h2 class="text-2xl font-bold text-[#FCFAEE]">{item.title}</h2>
          {#if item.description}
            <div class="">{item.description}</div>
          {/if}
          <div class="flex flex-wrap justify-center gap-2">
            {#each item.tags as tag}
              <Tag text={tag}/>
            {/each}
          </div> 
        </div>
        <div class="w-2/3 pr-5 pt-5">
          {#if item.source}
          <img class="rounded-xl" src="images/{item.source}" alt={item.alt}>
          {/if}
        </div>
      </div>
    {/each}
  </div>
  