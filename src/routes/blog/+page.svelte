<script>
    import { onMount } from 'svelte';
  
    onMount(() => {
      document.title = "Blog";
    });
    import BlogHome from '../../components/BlogHome.svelte';
  </script>
  
  <BlogHome/>
