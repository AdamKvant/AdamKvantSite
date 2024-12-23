<script lang="ts">
	import '../app.css';
    import Header from '../components/Header.svelte';
	let { children } = $props();
</script>

<div class="flex justify-center">
    <div class="sm:w-11/12 lg:w-2/3 flex flex-col">
        <Header/>
        <div>{@render children()}</div>
    </div>
</div>


