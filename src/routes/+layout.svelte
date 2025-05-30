<script>
	import { requestAuthorization } from './auth.js';
	import '$lib/styles/app.css';
</script>  
  
<div class="min-h-screen flex flex-col">
  <!-- Header (AppBar replacement) -->
  <header class="bg-primary-500 sticky top-0 z-50">
    <div class="flex items-center justify-between p-4">
      <div class="flex items-center">
        <strong class="text-4xl pl-12 text-black animate-fade animate-delay-1000">TunePulse</strong>
      </div>

      <!-- Trail content (right side) -->
      <div class="flex items-center space-x-4">
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
  <footer id="footer">
    <div class="flex items-center justify-center pb-8">
      <div class="brand text-center">
        <h4 class="text-3xl text-white">Tune<span style="color: rgb(20, 220, 80);">Pulse</span></h4>
        <p class="text-lg text-white">Your Symphony of Spotify Insights!</p>
      </div>
    </div>
  </footer>
</div>
  