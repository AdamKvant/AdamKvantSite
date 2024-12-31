<script lang="ts">
	import '../app.css';
    import Header from '../components/Header.svelte';
    import Footer from '../components/Footer.svelte'
	let { children } = $props();
</script>

<div class="flex justify-center max-w-screen">
    <div class="sm:w-11/12 lg:w-9/12 flex flex-col min-h-screen relative">
        <Header/>
        <div class="mb-14">{@render children()}</div>
        <div class="absolute bottom-0 w-full">
            <Footer/>
        </div>
    </div>
</div>


