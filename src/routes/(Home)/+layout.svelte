<script>
	import { onMount } from 'svelte';
	import '../../app.postcss';
	import { requestAuthorization } from './auth.js';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
  
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
  
<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar background="bg-primary-500">
			<svelte:fragment slot="lead">
				<strong class=" text-4xl pl-12 text-surface-500 animate-fade animate-delay-[1000ms]">TunePulse</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<!-- Conditional rendering for PC -->
				{#if !isMobile}
				<a class="font-semibold btn variant-filled animate-fade animate-delay-[1500ms]"
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
				{/if}
				<a 	on:click="{requestAuthorization}"
					class="font-semibold btn variant-filled animate-fade animate-delay-[2500ms]"
					href="#"
					rel="noreferrer"
				>
					Login
				</a>
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
  