<script>
    import { onMount } from 'svelte';
        import Card from '../components/Card.svelte'
        import Tag from '../components/Tag.svelte'
    onMount(() => {
      document.title = "Adam Kvant";
    });
  </script>

  <!-- Body -->
<div class="flex flex-col items-center gap-4 min-h-full mb-10">

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
  description="Hi, I’m Adam! I recently graduated with distinction from UMN’s College of Science and Engineering with a B.S. in Computer Science. With intern experience in IT, Data Science, and Development, I have a diverse set of skills at my disposal. I enjoy exploring new technologies and 3D printing.
  <br> Outside of tech, I’m passionate about lifting, baking bread, fencing (Sabre), rock climbing, gaming, and soccer." />
  <!-- End About Me -->

  <!-- Skills -->
  <Card title="Skills"
  description=""
  tags={["Java","Python","C#","HTML/CSS","JavaScript","TailwindCSS","EmberJS","Flask","Svelte","C",
  "UML","Git","Firebase","Linux (Ubuntu & Fedora)","MySQL","PostgresSQL","Microsoft Office", "Google Workspace",
  "Solidworks","x86_64 Assembly","C++","Agile Scrum"
  ]}/>
  <!-- End Skills -->
</div>