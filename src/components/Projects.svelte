<script>
    export let projects = [
      {
        title: "adamkvant.dev",
        description: "This site was created to learn more about component-based frameworks and to pick up Svelte. The site follows the standard SPA structure, and it is hosted on Google Firebase. The color scheme is also based upon my Rocket League car's color.",
        tags: ["Svelte","TailwindCSS","JS/TS","Firebase"],
        disclaimer:false,
        source: "AKSitePic.png",
        alt: "adamkvant.dev picture",
        link:"https://github.com/AdamKvant/AdamKvantSite",
    },
    {
      title:"Globetrotter",
      description:"A mobile friendly, trip logging app created using EmberJS and TailwindCSS. Hosted on Google Firebase",
      tags: ["EmberJS","TailwindCSS", "Figma","Firebase","Firestore"],
      disclaimer:true,
      source:"Globetrotter.png",
      alt:"Globetrotter picture",
      link:"https://github.com/csci5117f24/project-2-peanut-butter-pickles"
    },
    {
      title:"CulinaryCards",
      description:"A recipe sharing application created using Flask, PostgreSQL, UnsplashAPI, and PureCSS. The site features full-text search, and the ability to like and save recipes to the user profile.",
      tags:["Flask","PostgreSQL","PureCSS","JS"],
      disclaimer:true,
      source:"CulinaryCards.png",
      alt:"CulinaryCards picture",
      link:"https://github.com/csci5117f24/project-1-peanut-butter-pickles",
    },
    {
      title:"CSCI 1933 Course Overhaul",
      description:`This was a month long summer project consisting of work updating all course related material for CSCI 1933, a required class for pre-CS majors at UMN. Samantha and I took initiative by getting this project approved by the professor and department for the summer.
      We converted all LaTeX documents over to markdown files with their own repo and created Gradescope autograders for all applicable projects. We also set up a new GitHub organization for students and course staff to interact with.
      This meant we updated all labs, projects, and their related rubrics, unit tests, and code.`,
      tags:["Java","JUnit","GitHub","Bash","Algorithms & Data Structures"],
      disclaimer:false,
      link:"https://www.linkedin.com/in/adamkvant/details/projects/",
    },
    {
      title:"MathWhiz",
      description:`MathWhiz is a minimalist web-app that I created over the span of a couple of days in undergrad.
      The user tries to get as many random arithmetic questions right within one minute.`,
      tags:["ExpressJS","CSS","JS","PUG"],
      source: "MathWhiz.png",
      alt:"MathWhiz picture",
      disclaimer:true,
      link:"https://github.com/AdamKvant/MathWhiz",
    },
    {
      title:"Card Games in C#",
      description:`This project is an extendable platform to create card games in the C# console. I've programmed all of this project in C# and I plan on adding new card games to this project in the future. Some other future ideas for extensibility that I am thinking about are: creating a website, or a desktop app with a GUI. Right now, this program only has Blackjack implemented, and the code for Blackjack is fully documented using Doxygen and a UML Class Diagram.`,
      tags:["C#","Doxygen","UML"],
      disclaimer:false,
      link:"https://github.com/AdamKvant/CardGamesCSharp",
    },
    ];
    import Tag from "./Tag.svelte";
  </script>
  
  <div class="flex flex-col space-y-4 w-full items-center my-6">
    {#each projects as item}
      <a href={item.link} class="Card flex flex-col-reverse items-center md:items-start md:flex-row shadow-2xl">
        {#if item.source}
        <div class="md:mt-3 md:mb-0 md:ml-7 md:mr-1 space-y-1.5 w-11/12 md:w-1/3">
          <h2 class="text-2xl font-bold text-[#FCFAEE]">{item.title}</h2>
          {#if item.description}
            <p>{item.description}
              {#if item.disclaimer}
                <br>
                <span class="italic text-[#B8001F] text-sm">May not be hosted anymore</span>
              {/if}
            </p>
          {/if}
          <div class="flex flex-wrap justify-center gap-2">
            {#each item.tags as tag}
              <Tag text={tag}/>
            {/each}
          </div> 
        </div>
        {/if}
        {#if !item.source}
          <div class="md:mt-3 md:mb-0 md:ml-7 md:mr-0 space-y-1.5 w-11/12">
            <h2 class="text-2xl font-bold text-[#FCFAEE] mt-2">{item.title}</h2>
            {#if item.description}
              <p>{item.description}
                {#if item.disclaimer}
                  <br>
                  <span class="italic text-[#B8001F] text-sm">May not be hosted anymore</span>
                {/if}
              </p>
            {/if}
            <div class="flex flex-wrap justify-center gap-2">
              {#each item.tags as tag}
                <Tag text={tag}/>
              {/each}
            </div> 
          </div>
        {/if}
        {#if item.source}
        <div class="w-full md:w-2/3 md:pr-5 pt-3 px-3 md:pt-5">
          <img class="rounded-xl shadow-md" src="images/{item.source}" alt={item.alt}>
        </div>
        {/if}
      </a>
    {/each}
  </div>
  