<script lang="ts">
    export let title = "";
    export let description = "";
    export let tags: Array<string> = []
    import Tag from '../components/Tag.svelte'
</script>
  
  <div class="Card flex flex-col items-center justify-center w-full md:w-9/12 xl:w-6/12">
    <h1 class="CardTitle pb-5">{title}</h1>
    <div class="CardDesc">
        {@html description}
      {#if description}
      <br>
      {/if}
      <div class="flex flex-wrap w-full md:w-11/12 lg:w-10/12 justify-center gap-2 mx-auto">
        {#each tags as tag}
          <Tag text={tag}/>
        {/each}
      </div> 
    </div>
  </div>
