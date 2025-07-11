<script>
    let isOpen = false
  
    function toggleMenu() {
      isOpen = !isOpen
    }

    function hideHamburger(){
        isOpen = false
    }
</script>
  
<div class="headerOverall rounded-b-lg justify-between items-center flex relative">
    <!-- Home -->
    <a on:click={hideHamburger} class="hoverHeader pl-5" href="/">Adam Kvant</a>

    <!-- Hamburger -->
    <button class="block md:hidden pr-5" on:click={toggleMenu} aria-label="Toggle Menu">
        <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 7L4 7" stroke="#FCFAEE" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M20 12L4 12" stroke="#FCFAEE" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M20 17L4 17" stroke="#FCFAEE" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
    </button>

    <!-- Default -->
    <div class="hidden md:flex flex-row gap-4 pr-5">
        <a class="hoverHeader" href="/experience">Experience</a>
        <a class="hoverHeader" href="/projects">Projects</a>
        <!-- <a class="hoverHeader" href="/blog">Blog</a> -->
    </div>

    <!-- Dropdown Menu -->
    <div on:click={toggleMenu} class={`z-10 absolute top-12 right-0 bg-[#B8001F] md:w-5/12 xl:w-7/12 shadow-md rounded-b-lg flex flex-col items-start gap-4 p-5 md:hidden transition-all duration-500 
        transform ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'}`}>
        <a on:click={toggleMenu} class="hoverHeaderHam w-full text-right border border-b-4 border-x-0 border-t-0 pb-1.5 z-0" href="/experience">Experience</a>
        <a on:click={toggleMenu} class="hoverHeaderHam w-full text-right border border-b-4 border-x-0 border-t-0 pb-1.5 z-0" href="/projects">Projects</a>
        <!-- <a on:click={toggleMenu} class="hoverHeaderHam w-full text-right border border-b-4 border-x-0 border-t-0 pb-1.5 z-0" href="/blog">Blog</a> -->
    </div>
</div>
