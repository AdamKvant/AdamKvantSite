<script>
    import { onMount } from 'svelte';
        import Card from '../components/Card.svelte'
    onMount(() => {
      document.title = "Adam Kvant";
    });
  </script>

  <!-- Body -->
<div class="flex flex-col items-center gap-3 min-h-full">

  <!-- Intro -->
  <div class="Card Intro" id="Intro">
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
  <Card title="About Me"
  description="Hello! I'm Adam, I recently graduated with distinction from UMN's College of Science and and Engineering with a B.S. in Computer Science.
      I enjoy learning all things technology, whether it's software or hardware. I have interned in various sectors of the tech industry (IT, Data Science, and Development),
      and these roles have provided me with unique and useful skills that I can apply in any setting.
      <br>
      Outside of work, I enjoy learning new tech stacks (I learned Svelte for this site) and 3D printing.
      I also spend my time lifting, baking bread, fencing (Sabre), rock climbing, gaming, and playing soccer." />
  <!-- End About Me -->

  <!-- Skills -->
  <Card title="Skills"
  description="Blah"/>
  <!-- End Skills -->
</div>