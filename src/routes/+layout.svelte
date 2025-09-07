<script lang="ts">
	import '../app.css';
    import Header from '../components/Header.svelte';
    import Footer from '../components/Footer.svelte';
    import IconHeader from '../components/IconHeader.svelte';
    import { onMount } from 'svelte';
    let loaded = $state(false);
	let { children } = $props();
    onMount(() => {
    requestAnimationFrame(() => {
      loaded = true;
    });
  });
</script>
<main class:loaded={loaded}>
<div class="flex flex-col min-h-screen items-center">
    <IconHeader/>
    <div class="sm:w-11/12 lg:w-10/12 w-full"><Header /></div>
    <div class="flex justify-center flex-grow w-full">
        <div class="aspect-h-9 aspect-w-16">
            {@render children()}
        </div>
    </div>
    <div class="w-full md:w-9/12 xl:w-5/12"><Footer /></div>
</div>
</main>


