<script>
    import { onMount } from 'svelte';
        import Card from '../components/Card.svelte'
        import Tag from '../components/Tag.svelte'
    onMount(() => {
      document.title = "Adam Kvant";
    });
  </script>

  <!-- Body -->
<div class="flex flex-col items-center gap-4 min-h-full mb-6">
  <!-- Intro -->
  <div class="Card Intro" id="Intro">
      <img src="/images/Headshot.jpg" alt="Adam Kvant Headshot" class="headshot">
    <div class="flex flex-col items-center xl:items-start justify-center xl:w-4/5 w-full">
      <h1 class="Name">Adam Kvant</h1>
      <div class="IntroDesc">
        Computer Science Graduate UMN CSE Class of 2025
        <br>
        Application Developer Associate at <span class="font-bold text-xl"><span class="text-[#63666A]">R</span><span class="text-[#3F9C35]">S</span><span class="text-[#009CDE]">M</span></span>
      </div>
    </div>
  </div>
  <!-- End of Intro -->

  <!-- About Me -->
  <Card title="About Me"
  description="Hi, I’m Adam! I recently graduated with distinction from UMN’s College of Science and Engineering with a B.S. in Computer Science. Throughout my undergrad experience I had intern experiences in IT, Data Science, and Software Development.
  Interning in many sectors of the tech industry brought me broad knowledge that allows me to communicate effectively with my peers.
  <br> Outside of tech, I’m passionate about lifting, baking bread, fencing (Sabre), rock climbing, gaming, and soccer." />
  <!-- End About Me -->

  <!-- Skills -->
  <Card title="Skills"
  description=""
  tags={["Java","Python","C#","HTML/CSS","JavaScript","TailwindCSS","EmberJS","Flask","Svelte","C","ExpressJS",
  "UML","Git","Firebase","Linux (Ubuntu & Fedora)","TypeScript","MySQL","PostgreSQL","Microsoft Office", "Google Workspace",
  "Solidworks","x86_64 Assembly","C++","Agile Scrum"
  ]}/>
  <!-- End Skills -->
</div>