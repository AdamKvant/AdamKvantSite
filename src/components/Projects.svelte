<script>
    export let projects = [
      {
        title: "Incoming Application Developer Associate",
        description: "duhqowdqwod qwj pd qjwpwpdqjod iqo oiqwj iowdoqhd ijdoiqj ioq",
        source: "",
        alt: "",
    },
    ];
  </script>
  
  <div class="flex flex-col space-y-4 w-full items-center my-10">
    {#each projects as item}
      <div class="Card">
        <div class="mt-2 mb-0 ml-8 space-y-2 mr-4">
          <h2 class="text-lg font-bold text-[#FCFAEE]">{item.title}</h2>
          {#if item.description}
            <div class="text-sm">{item.description}</div>
          {/if}
        </div>
        <div>
          {#if item.source}
          <img src="images/{item.source}" alt={item.alt}>
          {/if}
        </div>
      </div>
    {/each}
  </div>
  