<script lang="ts">
    export let data;
    import { onMount } from 'svelte';
    onMount(() => {
      document.title = data.title;
    });
</script>

<div class="my-6 flex w-full flex-col items-center">
	<div class="Card flex flex-col items-center shadow-2xl">
		<h1 class="text-3xl pt-3">{data.title}</h1>
		<p class="text-sm">{data.date}</p>
		<div class="prose prose-invert prose-img prose-centered text-white text-lg mt-6">
			{@html data.content}
		</div>
	</div>
</div>
