<script>
    import { onMount } from 'svelte';
    // import { initStats } from 'init-stats.js';
  
    // onMount(initStats);
  </script>
  
  <style>
    @import url('https://fonts.googleapis.com/css?family=Montserrat:300, 400, 700&display=swap');
    /* Add Tailwind CSS styles here or import them as a separate file */
  </style>
  
  <main>
    <!-- Header -->
    <section id="header" class="fixed z-50 left-0 top-0 w-full">
      <div class="bg-black">
        <div class="nav-bar flex items-center justify-between w-full max-w-screen-lg mx-auto">
          <div class="brand">
            <h2 class="text-3xl">Tune<span style="color: rgb(20, 220, 80);" >Pulse</span></h2>
            <h3 class="text-2xl text-right text-green-500 animate-blink">beta V0.5</h3>
          </div>
          <div id="logout" class="inline-block bg-green-500 rounded-md p-4 mr-4 transition duration-500 hover:bg-red-500">
            <h2 class="text-white text-lg font-semibold">Log out</h2>
          </div>
        </div>
      </div>
    </section>
    <!-- End Header -->
  
    <!-- Personal stats header -->
    <section id="personal-stats" class="mt-11 text-center">
      <h2 class="text-4xl font-semibold text-white mb-5 pt-8">Your <span>Spotify</span> Stats</h2>
      <nav class="navMenu">
        <ul>
          <li><a href="#" id="artists" class="text-white">my top 10 artists</a></li>
          <li><a href="#" id="tracks" class="text-white">my top 10 tracks</a></li>
          <li><a href="#" id="albums" class="text-white">my top 3 albums</a></li>
        </ul>
      </nav>
    </section>
    <!-- End Personal stats header -->
  
    <!-- API Data -->
    <section id="api-data" class="flex items-center justify-center mx-auto my-10 w-85">
      <div id="card-data">
        <div id="information" class="green p-8 rounded-md">
          <h2 class="text-3xl font-semibold">Welcome to Strackifyer</h2>
          <h3 class="text-2.5xl font-semibold mb-3">WIP: Hobby Project</h3>
          <br>
          <p class="text-white text-base leading-6">
            News 20/01/2023: <br>
            - Site will be redesigned, with under the hood Sveltekit + Tailwind CSS.<br>
            - The name and domain will also change. Strackifyer will soon be "TunePulse".<br>
            - Expected to come mid February.<br>
            <br>
            <!-- Add the rest of the content here -->
          </p>
        </div>
      </div>
    </section>
    <!-- End API Data -->
  
    <!-- Footer -->
    <section id="footer" class="fixed inset-x-0 bottom-0 mt-2 mb-2">
      <div class="flex items-center justify-center">
        <div class="brand">
          <h4 class="text-3xl">Tune<span style="color: rgb(20, 220, 80);" >Pulse</span></h4>
        </div>
      </div>
    </section>
    <!-- End Footer -->
  </main>
  