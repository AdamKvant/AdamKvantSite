<script>
	export let blogs = [
		{
			title: 'Git Integration for Power Platform',
			description: 'June 3rd, 2025',
			tags: ['Power Platform', 'Azure DevOps'],
			source: 'GitPP.png',
			alt: 'Cover Image',
			id: 0
		}
	];
	import { onMount } from 'svelte';
	import BlogHome from '../../components/BlogHome.svelte';
	import MiniSearch from 'minisearch';

	onMount(() => {
		document.title = 'Blog';
	});

	let query = '';
	let results = [...blogs]; // Initially show all blogs

	// Initialize MiniSearch
	let miniSearch = new MiniSearch({
		fields: ['title', 'description', 'tags', 'source', 'alt', 'id'],
		storeFields: ['title', 'description', 'tags', 'source', 'alt', 'id'],
    searchOptions: {
      prefix : true
    }
	});
	miniSearch.addAll(blogs);

	function runSearch() {
		results = query.trim() ? miniSearch.search(query) : blogs;
	}

	function handleKeydown(event) {
		if (event.key === 'Enter') {
			runSearch();
		}
	}



</script>

<div class="w-full flex flex-col items-center">
	<div class="flex w-11/12 md:w-4/5 max-w-4xl mt-6 p-2">
		<input
			bind:value={query}
			placeholder="Search..."
			class="flex-grow outline-none rounded rounded-r-none focus:outline-none focus:shadow-none border-[#384B70] focus:border-[#384B70]"
			on:keydown={handleKeydown}
		/>
		<button
			class="px-4 py-2 bg-[#384B70] text-[#FCFAEE] rounded-l-none rounded hover:bg-[#507687]"
			on:click={runSearch}
		>
			Search
		</button>
	</div>

	<BlogHome blogs={results} />
</div>
