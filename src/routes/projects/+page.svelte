<script>
    import { onMount } from 'svelte';
  
    onMount(() => {
      document.title = "Projects";
    });

    import Projects from '../../components/Projects.svelte';
  </script>
  <Projects/>
