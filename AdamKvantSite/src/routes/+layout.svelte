<script lang="ts">
	import '../app.css';
    import Header from '../components/Header.svelte';
	let { children } = $props();
</script>
<Header />
<div class="bg-[#384B70] min-h-screen">
    {@render children()}
</div>


