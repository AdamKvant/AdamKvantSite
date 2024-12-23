<script lang="ts">
    export let title = "";
    export let description = "";
    export let tags: Array<string> = []
    import Tag from '../components/Tag.svelte'
</script>
  
  <div class="Card">
    <h1 class="CardTitle">{title}</h1>
    <div class="CardDesc">
      {@html description}
      {#if description}
      <br>
      {/if}
      <div class="flex flex-wrap gap-2">
        {#each tags as tag}
          <Tag text={tag}/>
        {/each}
      </div> 
    </div>
  </div>
