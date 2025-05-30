<script>
	import { AppBar } from '@skeletonlabs/skeleton-svelte';
	import { logout } from './pulseboard/spotify-api-handler';
</script>

<div class="min-h-screen flex flex-col">
  <!-- Header Section (fixed) -->
  <header id="header" class="bg-black fixed z-50 left-0 top-0 w-full">
    <div class="flex items-center justify-between w-full max-w-screen-xl mx-auto p-4">
      <div class="flex items-center">
        <h2 class="text-4xl text-white animate-fade animate-delay-500">Tune<span class="text-[rgb(20,220,80)]">Pulse</span></h2>
        <h3 class="text-xl text-green-500 animate-fade animate-delay-[600ms]">V2 (Beta)</h3>
      </div>
      <div id="logout" class="bg-green-500 rounded-md p-2 transition duration-500 hover:bg-red-500 hover:cursor-pointer animate-fade animate-delay-700">
        <a class="text-white text-lg font-semibold hover:cursor-pointer" href="/" rel="noreferrer" on:click={logout}>
          Log out
        </a>
      </div>
    </div>
  </header>

  <!-- Main Content Area -->
  <main class="flex-grow pt-16 pb-16"> <!-- Padding to avoid header/footer overlap -->
    <slot />
  </main>

  <!-- Footer Section -->
  <footer id="footer" class="bg-black inset-x-0 bottom-0 z-50">
    <div class="flex items-center justify-center pb-8 pt-8">
      <div class="brand text-center">
        <h4 class="text-3xl text-white">Tune<span class="text-[rgb(20,220,80)]">Pulse</span></h4>
        <p class="text-lg text-white">Your Symphony of Spotify Insights!</p>
      </div>
    </div>
  </footer>
</div>
