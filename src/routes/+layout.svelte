<script>
	import { onMount } from 'svelte';
	import { requestAuthorization } from './auth.js';
	import { AppBar } from '@skeletonlabs/skeleton-svelte';
  
	let isMobile = false;
  
	// Function to check if viewport width is mobile
	function checkMobile() {
	  isMobile = window.innerWidth < 768; // Adjust as per your design's mobile breakpoint
	}
  
	// Call checkMobile initially and add a listener for window resize
	onMount(() => {
	  checkMobile();
	  window.addEventListener('resize', checkMobile);
	  
	  // Clean up event listener on component unmount
	  return () => {
		window.removeEventListener('resize', checkMobile);
	  };
	});
  
</script>  
  
<div class="min-h-screen flex flex-col">
  <!-- Header (AppBar replacement) -->
  <header class="bg-primary-500 sticky top-0 z-50">
    <div class="flex items-center justify-between p-4">
      <!-- Lead content (left side) -->
      <div class="flex items-center">
        <strong class="text-4xl pl-12 text-surface-500 animate-fade animate-delay-1000">TunePulse</strong>
      </div>

      <!-- Trail content (right side) -->
      <div class="flex items-center space-x-4">
        <!-- Conditional rendering for PC -->
        <div class="hidden md:flex space-x-4">
          <a class="font-semibold btn preset-filled animate-fade animate-delay-[1500ms]"
            href="#home"
            on:click|preventDefault={() => {
              const homeElement = document.getElementById('home');
              if (homeElement) {
                homeElement.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Home
          </a>
          <a
            class="font-semibold btn preset-filled animate-fade animate-delay-[1800ms]"
            href="#features"
            on:click|preventDefault={() => {
              const featuresElement = document.getElementById('features');
              if (featuresElement) {
                featuresElement.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Features
          </a>
          <a
            class="font-semibold btn preset-filled animate-fade animate-delay-[2100ms]"
            href="#roadmap"
            on:click|preventDefault={() => {
              const roadmapElement = document.getElementById('roadmap');
              if (roadmapElement) {
                roadmapElement.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Roadmap
          </a>
        </div>
        
        <a 
          on:click={requestAuthorization}
          class="font-semibold btn preset-filled animate-fade animate-delay-[2500ms]"
          href="#"
          rel="noreferrer"
        >
          Login
        </a>
      </div>
    </div>
  </header>

  <!-- Main content (slot replacement) -->
  <main class="flex-grow">
    <slot />
  </main>

  <!-- Footer -->
  <footer id="footer" class="bg-primary-500">
    <div class="flex items-center justify-center pb-8">
      <div class="brand text-center">
        <h4 class="text-3xl text-white">Tune<span style="color: rgb(20, 220, 80);">Pulse</span></h4>
        <p class="text-lg text-white">Your Symphony of Spotify Insights!</p>
      </div>
    </div>
  </footer>
</div>
  