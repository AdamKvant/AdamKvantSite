<script>
    export let timeline = [
      {
        title: "Application Developer Associate",
        company: "RSM US LLP",
        duration: "January 2025 - Present",
        description: [],
        source:"rsm_us_llp_logo.jpg",
        alt:"RSM Logo",
    },
    {
        title: "Application Developer Intern",
        company: "RSM US LLP",
        duration: "June 2024 - August 2024",
        description: [
          "Developed Model-Driven Apps, Canvas Apps, Power Automate Flows, Power Pages, and other Power Platform tools.",
          "Generated web resources in JavaScript to automate and customize Power Platform application frontends.",
          "Generated plugins and scripts in C# to automate backend Power Platform application processes.",
          "Utilized OData API requests to implement custom data filtering, tested using Postman."
        ],
        source:"rsm_us_llp_logo.jpg",
        alt:"RSM Logo",
    },
    {
      title:"CSCI 1933 Course Content Designer",
      company:"University of Minnesota Department of Computer Science & Engineering",
      duration: "May 2024 - June 2024",
      description:[
        "Took initiative to gain support from the course professor and department to secure funding.",
        "Led a major course-wide restructuring of course content, the changes affect ~400 students each semester.",
        "Specific details can be found in the \"CSCI 1933 Course Overhaul\" project in my \"Projects\" page.",
      ],
      source:"umncs.jpg",
      alt:"University of Minnesota Computer Science Logo",
    },
    {
        title: "Undergraduate Teaching Assistant",
        company: "University of Minnesota Department of Computer Science & Engineering",
        duration: "September 2023 - December 2024",
        description: [
          "Undergraduate Teaching Assistant for CSCI 1933: Introduction to Algorithms and Data Structures",
          "Project Leader: I directed the creation of many major assignments that introduce core Java concepts.",
          "I lead a lab section with two other TAs, answering questions and directing lab overview.",
        ],
        source:"umncs.jpg",
        alt:"University of Minnesota Computer Science Logo",    
    },
    {
        title: "Data Science Intern",
        company: "Optum",
        duration: "June 2023 - August 2023",
        description: [
          "Researched Clinical Trial Optimization Feasibility for OptumAI.",
          "Implemented SQL queries on insurance claims database to generate synthetic control arms for three clinical trials.",
          "Supported initial progress towards two publications.",
          "Presented to senior engineers and executives in Shark Tank presentations and managed stakeholder expectations."
        ],
        source:"optum.jpg",
        alt:"Optum Logo",    
    },
    {
        title: "Systems Support Analyst Intern",
        company: "Egan Company",
        duration: "May 2022 - August 2022",
        description: [
          "Led a summer long project of laptop maintenance, repairs, and updates for various Windows machines.",
          "Collaborated with other interns on replacing employee phones throughout the metro area.",
          "Learned how to virtualize apps, use Cylance software, Active Directory, and some server maintenance.",
        ],
        source:"egan.jpg",
        alt:"Egan Logo",    
    },
    ];
  </script>
  
  <div class="flex flex-col space-y-4 w-full items-center my-6">
    {#each timeline as item}
      <div class={`Card shadow-2xl pt-2 ${item.description.length == 0 ? 'md:pb-2' : 'md:pb-4'}`}>
        <div class="md:mt-2 md:mb-0 md:ml-8 space-y-2 md:mr-4 mx-7">
          <div class="flex flex-col md:flex-row items-center md:items-start">
            <img class="shadow-lg rounded-full h-16 w-16 md:h-14 md:w-14 md:mr-2 mt-2 md:mt-0 mb-3 md:mb-0" src="/images/{item.source}" alt={item.alt}>
            <div class="flex flex-col items-center md:items-start">
              <h2 class="text-lg font-bold text-[#FCFAEE]">{item.title}</h2>
              <div class="flex flex-row items-center md:items-start gap-3">
                <span class="text-sm md:text-base font-bold text-gray-300">{item.company}</span>
                <span class="text-sm md:text-base text-gray-300 italic">{item.duration}</span>
              </div>
            </div>
            
          </div>
          {#if item.description}
          <ul class=" mx-4 list-disc pb-2 md:pb-0">
            {#each item.description as desc}
            <li class="text-sm md:text-base">{desc}</li>
            {/each}
          </ul>
          {/if}
        </div>
      </div>
    {/each}
  </div>
  