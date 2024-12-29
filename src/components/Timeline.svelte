<!-- <div class="Card">
    <img src="" alt="" class="TimelineCompany">
  <div class="flex flex-col w-4/5 sm:w-full">
    <h1 class="TimelineTitle">Adam Kvant</h1>
    <div class="TimelineDesc">
      Computer Science Graduate UMN CSE Class of 2025
    </div>
  </div>
</div> -->
<script>
    export let timeline = [
      {
        title: "Incoming Application Developer Associate",
        company: "RSM US LLP",
        duration: "",
        description: [],
    },
    {
        title: "Application Developer Intern",
        company: "RSM US LLP",
        duration: "June 2024 - August 2024",
        description: [
          "Developed Model-Driven Apps, Canvas Apps, Power Automate Flows, Power Pages, and other Power Platform tools.",
          "Generated web resources in JS to automate and customize Power Platform application frontends.",
          "Generated plugins and scripts in C# to automate backend Power Platform application processes.",
          "Utilized OData API requests to implement custom data filtering, tested using Postman."
        ],
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
    },
    {
        title: "Research Assistant",
        company: "UMN Data Lab",
        duration: "Spring 2023",
        description: [],      
    },
    ];
  </script>
  
  <div class="flex flex-col space-y-8 w-full items-center my-10">
    {#each timeline as item}
      <div class="Card">
        <div class="mt-2 mb-0 ml-8 space-y-2">
          <h2 class="text-lg font-bold text-[#FCFAEE]">{item.title}</h2>
          <div class="flex flex-row gap-3">
            <span class="text-sm font-bold text-gray-300">{item.company}</span>
            <span class="text-sm text-gray-300 italic">{item.duration}</span>
          </div>
          {#if item.description}
          <ul class=" ml-4 list-disc">
            {#each item.description as desc}
            <li class="text-sm">{desc}</li>
            {/each}
          </ul>
          {/if}
        </div>
      </div>
    {/each}
  </div>
  