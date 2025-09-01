<script>
	import Projects from './../components/Projects.svelte';
	import Timeline from '../components/Timeline.svelte';
    import { onMount } from 'svelte';
        import Card from '../components/Card.svelte'
        import Tag from '../components/Tag.svelte'
    onMount(() => {
      document.title = "Adam Kvant";
    });

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
      company:"UMN Dept. of CS & E",
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
        company: "UMN Dept. CS & E",
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

    	export let projects = [
		{
			title: 'PDAParser',
			tags: ['Python', 'File I/O', 'Medical Research Contribution'],
			disclaimer: false,
			source: 'Final_Study_Poster.png',
			alt: 'Study Poster',
			link: 'https://github.com/AdamKvant/PDAParser',
			order:7
		},
		{
			title: 'adamkvant.dev',
			tags: ['Svelte', 'TailwindCSS', 'JavaScript', 'TypeScript', 'Firebase','MiniSearch'],
			disclaimer: false,
			source: 'AKSitePic.png',
			alt: 'adamkvant.dev picture',
			link: 'https://github.com/AdamKvant/AdamKvantSite',
			order: 6
		},
		{
			title: 'Globetrotter',
			tags: ['EmberJS', 'TailwindCSS', 'Figma', 'Firebase', 'Firestore'],
			disclaimer: true,
			source: 'Globetrotter.png',
			alt: 'Globetrotter picture',
			link: 'https://github.com/csci5117f24/project-2-peanut-butter-pickles',
			order: 5
		},
		{
			title: 'CulinaryCards',
			tags: ['Flask', 'JavaScript', 'PostgreSQL', 'PureCSS'],
			disclaimer: true,
			source: 'CulinaryCards.png',
			alt: 'CulinaryCards picture',
			link: 'https://github.com/csci5117f24/project-1-peanut-butter-pickles',
			order:4
		},
		{
			title: 'CSCI 1933 Course Overhaul',
			description: `This was a month long summer project consisting of work updating all course related material for CSCI 1933, a required class for pre-CS majors at UMN. Samantha and I took initiative by getting this project approved by the professor and department for the summer.
      We converted all LaTeX documents over to markdown files with their own repo and created Gradescope autograders for all applicable projects. We also set up a new GitHub organization for students and course staff to interact with.
      This meant we updated all labs, projects, and their related rubrics, unit tests, and code.`,
			tags: ['Java', 'JUnit', 'GitHub', 'Bash', 'Algorithms & Data Structures', 'Documentation'],
			disclaimer: false,
			link: 'https://www.linkedin.com/in/adamkvant/details/projects/',
			order:3
		},
		{
			title: 'MathWhiz',
			tags: ['ExpressJS', 'CSS', 'JavaScript', 'PUG'],
			source: 'MathWhiz.png',
			alt: 'MathWhiz picture',
			disclaimer: true,
			link: 'https://github.com/AdamKvant/MathWhiz',
			order:2
		},
		{
			title: 'Card Games in C#',
			description: `This project is an extendable platform to create card games in the C# console. I've programmed all of this project in C# and I plan on adding new card games to this project in the future. Some other future ideas for extensibility that I am thinking about are: creating a website, or a desktop app with a GUI. Right now, this program only has Blackjack implemented, and the code for Blackjack is fully documented using Doxygen and a UML Class Diagram.`,
			tags: ['C#', 'Doxygen', 'UML'],
			disclaimer: false,
			link: 'https://github.com/AdamKvant/CardGamesCSharp',
			order:1
		}
	];
</script>
<!-- Body -->
<div class="flex flex-col items-center gap-5 min-h-full mb-6">
	<!-- Experience -->
	<Timeline timeline={timeline}/>
	<!-- Skills -->
	<Card title="Skills"
	description=""
	tags={["Java","Python","C#","HTML/CSS","JavaScript","TailwindCSS","EmberJS","Flask","Svelte","C","ExpressJS",
	"UML","Git","Firebase","Linux (Ubuntu & Fedora)","TypeScript","MySQL","PostgreSQL","Microsoft Office", "Google Workspace",
	"Solidworks","x86_64 Assembly","C++","Agile Scrum","Power Apps","Power Automate", "TSQL","Azure Functions"
	]}/>
	<!-- End Skills -->

  
















  <Projects projects={projects}/>
</div>