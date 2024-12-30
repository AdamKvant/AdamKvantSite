<script>
    export let projects = [
      {
        title: "adamkvant.dev",
        description: "This site was created to learn more about component-based frameworks and to pick up Svelte. The site follows the standard SPA structure, and it is hosted on Google Firebase. The color scheme is also based upon my Rocket League car's color.",
        tags: ["Svelte","TailwindCSS","JS/TS","Firebase"],
        disclaimer:false,
        source: "AKSitePic.png",
        alt: "adamkvant.dev picture",
        link:"https://github.com/AdamKvant/AdamKvantSite",
    },
    {
      title:"Globetrotter",
      description:"A mobile friendly, trip logging app created using EmberJS and TailwindCSS.",
      tags: ["EmberJS","TailwindCSS", "Figma","Firebase"],
      disclaimer:true,
      source:"Globetrotter.png",
      alt:"Globetrotter picture",
      link:"https://github.com/csci5117f24/project-2-peanut-butter-pickles"
    },
    ];
    import Tag from "./Tag.svelte";
  </script>
  
  <div class="flex flex-col space-y-4 w-full items-center my-10">
    {#each projects as item}
      <a href={item.link} class="Card flex flex-row shadow-2xl">
        <div class="mt-3 mb-0 ml-7 mr-1 space-y-1.5 w-1/3">
          <h2 class="text-2xl font-bold text-[#FCFAEE]">{item.title}</h2>
          {#if item.description}
            <p>{item.description}
              {#if item.disclaimer}
                <br>
                <span class="italic text-[#B8001F] text-sm">May not be hosted anymore</span>
              {/if}
            </p>
          {/if}
          <div class="flex flex-wrap justify-center gap-2">
            {#each item.tags as tag}
              <Tag text={tag}/>
            {/each}
          </div> 
        </div>
        <div class="w-2/3 pr-5 pt-5">
          {#if item.source}
          <img class="rounded-xl shadow-md" src="images/{item.source}" alt={item.alt}>
          {/if}
        </div>
      </a>
    {/each}
  </div>
  