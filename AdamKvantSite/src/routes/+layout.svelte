<script lang="ts">
	import '../app.css';
    import Header from '../components/Header.svelte';
	let { children } = $props();
</script>

<div class="bg-[#FCFAEE] min-h-screen">
    <Header/>
    <div>{@render children()}</div>
</div>


