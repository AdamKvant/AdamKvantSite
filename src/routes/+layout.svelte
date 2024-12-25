<script lang="ts">
	import '../app.css';
    import Header from '../components/Header.svelte';
    import Footer from '../components/Footer.svelte'
	let { children } = $props();
</script>

<div class="flex justify-center">
    <div class="sm:w-11/12 lg:w-9/12 flex flex-col">
        <Header/>
        <div>{@render children()}</div>
        <Footer/>
    </div>
</div>


