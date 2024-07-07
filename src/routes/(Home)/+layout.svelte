<script>
	import '../../app.postcss';
	import { requestAuthorization } from './auth.js';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
  
	let menuOpen = false;
  
	function toggleMenu() {
	  menuOpen = !menuOpen;
	}
  </script>
  
  <!-- App Shell -->
  <AppShell>
	<svelte:fragment slot="header">
	  <!-- App Bar -->
	  <AppBar background="bg-primary-500">
		<svelte:fragment slot="lead">
		  <strong class="text-4xl pl-12 text-surface-500 animate-fade animate-delay-[1000ms]">TunePulse</strong>
		</svelte:fragment>
		<svelte:fragment slot="trail">
		  <!-- Mobile menu button -->
		  <div class="md:hidden flex justify-center py-2">
			<button class="font-semibold btn variant-filled" on:click={toggleMenu}>
			  Menu
			</button>
		  </div>
  
		  <!-- Links for larger screens -->
		  <div class="hidden md:flex space-x-4">
			<a
			  class="font-semibold btn variant-filled animate-fade animate-delay-[1500ms]"
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
			  class="font-semibold btn variant-filled animate-fade animate-delay-[1800ms]"
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
			  class="font-semibold btn variant-filled animate-fade animate-delay-[2100ms]"
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
			<a
			  on:click="{requestAuthorization}"
			  class="font-semibold btn variant-filled animate-fade animate-delay-[2500ms]"
			  href="#"
			  rel="noreferrer"
			>
			  Login
			</a>
		  </div>
  
		  <!-- Submenu for mobile devices -->
		  {#if menuOpen}
			<div class="flex flex-col space-y-4 mt-2 items-center md:hidden">
			  <a
				class="font-semibold btn variant-filled"
				href="#home"
				on:click|preventDefault={() => {
				  const homeElement = document.getElementById('home');
				  if (homeElement) {
					homeElement.scrollIntoView({ behavior: 'smooth' });
				  }
				  toggleMenu();
				}}
			  >
				Home
			  </a>
			  <a
				class="font-semibold btn variant-filled"
				href="#features"
				on:click|preventDefault={() => {
				  const featuresElement = document.getElementById('features');
				  if (featuresElement) {
					featuresElement.scrollIntoView({ behavior: 'smooth' });
				  }
				  toggleMenu();
				}}
			  >
				Features
			  </a>
			  <a
				class="font-semibold btn variant-filled"
				href="#roadmap"
				on:click|preventDefault={() => {
				  const roadmapElement = document.getElementById('roadmap');
				  if (roadmapElement) {
					roadmapElement.scrollIntoView({ behavior: 'smooth' });
				  }
				  toggleMenu();
				}}
			  >
				Roadmap
			  </a>
			  <a
				on:click="{requestAuthorization}"
				class="font-semibold btn variant-filled"
				href="#"
				rel="noreferrer"
			  >
				Login
			  </a>
			</div>
		  {/if}
		</svelte:fragment>
	  </AppBar>
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="footer">
	  <!-- Footer Section -->
	  <section id="footer">
		<div class="flex items-center justify-center pb-8">
		  <div class="brand text-center">
			<h4 class="text-3xl text-white">Tune<span style="color: rgb(20, 220, 80);">Pulse</span></h4>
			<p class="text-lg text-white">Your Symphony of Spotify Insights!</p>
		  </div>
		</div>
	  </section>
	</svelte:fragment>
  </AppShell>
  