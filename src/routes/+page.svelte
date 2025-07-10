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
        B.S. Computer Science, UMN CSE Class of 2025
        <br>
        Application Engineering Associate at <span class="font-bold text-xl"><span class="text-[#63666A]">R</span><span class="text-[#3F9C35]">S</span><span class="text-[#009CDE]">M</span></span>
      </div>
    </div>
  </div>
  <!-- End of Intro -->

  <!-- About Me -->
  <Card title="About Me"
  description="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hi, I’m Adam! I recently graduated with distinction from UMN’s College of Science and Engineering with a B.S. in Computer Science.
  While in university, I served as the lead undergraduate teaching assistant for <i>CSCI 1933: Introduction to Algorithms and Data Structures</i> 
  and I was the go-to resource for students due to my experience creating much of the course content. 
  I am also an alumni of the Tau Beta Pi Engineering Honors Society.
  <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Throughout undergrad, I had three internships across the IT, Data Science, and Software Development sectors. 
  These diverse internships gave me broad knowledge across the tech industry, enabling me to collaborate effectively with peers from various disciplines.
  While I have enjoyed all of the internship experiences, I enjoy developing software the most and focus on learning more technologies in my free time.
  These days I am incredibly blessed to be working at <span class='font-bold text-xl'><span class='text-[#63666A]'>R</span><span class='text-[#3F9C35]'>S</span><span class='text-[#009CDE]'>M</span></span>
   as an Application Engineering Associate creating various applications for clients.
  <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Outside of tech, I’m passionate about lifting, baking bread, gaming, rock climbing, and spending time with friends and family.
  I also casually fence (Sabre) and play soccer in my spare time with friends and family.
  In terms of gaming, I enjoy all types of video and board games. 
  I've recently been playing Teamfight Tactics, Marvel Rivals, Fortnite and occasionally LoL (I retired at a peak of Emerald II).
  " />
  <!-- End About Me -->

  <!-- Skills -->
  <Card title="Skills"
  description=""
  tags={["Java","Python","C#","HTML/CSS","JavaScript","TailwindCSS","EmberJS","Flask","Svelte","C","ExpressJS",
  "UML","Git","Firebase","Linux (Ubuntu & Fedora)","TypeScript","MySQL","PostgreSQL","Microsoft Office", "Google Workspace",
  "Solidworks","x86_64 Assembly","C++","Agile Scrum","Power Apps","Power Automate"
  ]}/>
  <!-- End Skills -->
</div>