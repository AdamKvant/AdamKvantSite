<script>
	import { server_loads } from './../../.svelte-kit/generated/client-optimized/app.js';
    import { onMount } from 'svelte';
  
    onMount(() => {
      document.title = "Adam Kvant";
    });
  </script>

  <!-- Body -->
<div class="flex flex-col items-center gap-3 min-h-full sm:w-2/3 lg:w-1/3">

  <!-- Intro -->
  <div class="Intro" id="Intro">
      <img src="/images/Headshot.jpg" alt="Adam Kvant Headshot" class="headshot">
    <div class="flex flex-col w-4/5 sm:w-full">
      <h1 class="Name">Adam Kvant</h1>
      <div class="IntroDesc">
        Computer Science Graduate UMN CSE Class of 2025
        <br>
        Incoming Application Developer Associate at <span class="font-bold text-xl"><span class="text-[#63666A]">R</span><span class="text-[#3F9C35]">S</span><span class="text-[#009CDE]">M</span></span>
      </div>
    </div>
  </div>
  <!-- End of Intro -->

  <!-- About Me -->
  <div class="Card">
    Hello
  </div>
  <!-- End About Me -->
</div>