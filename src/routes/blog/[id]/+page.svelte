<script lang="ts">
    export let data;
    import { onMount } from 'svelte';
    onMount(() => {
      document.title = data.title;
    });
</script>

<div class="my-6 flex w-full flex-col items-center">
	<div class="Card flex flex-col items-center shadow-2xl px-6 pt-3">
		<h1 class="text-5xl py-3 text-center">{data.title}</h1>
		<p class="text-xl">{data.date}</p>
		<div class="prose prose-invert prose-img prose-centered text-white text-lg max-w-none w-full px-6">
			{@html data.content}
		</div>
	</div>
</div>