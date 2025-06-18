<script>
    export let timeline = [
      {
        title: "Application Engineering Associate",
        company: "RSM US LLP",
        duration: "January 2025 - Present",
        description: [
          "Earned the fastest Microsoft PL-900 and PL-200 certifications after joining the firm (both in my first 3 months).",
        ],
        source:"rsm_us_llp_logo.jpg",
        alt:"RSM Logo",
    },
    {
        title: "Application Engineering Intern",
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
      company:"UMN Department of Computer Science & Engineering",
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
        company: "UMN Department of Computer Science & Engineering",
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


    import { onMount } from 'svelte';
  
    onMount(() => {
      document.title = "Experience";
    });

    import Timeline from '../../components/Timeline.svelte';
  </script>
  <Timeline timeline={timeline}/>