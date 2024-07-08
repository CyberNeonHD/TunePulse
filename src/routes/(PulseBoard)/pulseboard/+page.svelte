<script>
    import { selectedMenuOption } from './pulseboard.js';
    import { onMount } from 'svelte';
    import { initialize } from './spotify-api-handler.js';

    onMount(() => {
        initialize();
    });    
</script>
  
<!-- Personal stats header -->
<section class="text-center pt-16">
  <h2 class="text-6xl font-semibold text-white mb-5 animate-jump-in animate-delay-[900ms]">Your <span style="color: rgb(20, 220, 80);">Spotify</span> Stats</h2>
  <nav>
    <ul class="flex justify-center">
      <!-- svelte-ignore a11y-invalid-attribute -->
      <li><a href="#" id="artists" class="text-white text-xl font-medium pr-5 hover:text-green-500 transition duration-500 animate-fade animate-delay-[1000ms]" on:click={selectedMenuOption}>Top 50 artists</a></li>
      <!-- svelte-ignore a11y-invalid-attribute -->
      <li><a href="#" id="tracks" class="text-white text-xl font-medium pr-5 hover:text-green-500 transition duration-500 animate-fade animate-delay-[1100ms]" on:click={selectedMenuOption}>Top 50 tracks</a></li>
      <!-- svelte-ignore a11y-invalid-attribute -->
      <li><a href="#" id="albums" class="text-white text-xl font-medium hover:text-green-500 transition duration-500 animate-fade animate-delay-[1200ms]" on:click={selectedMenuOption}>Top 10 albums</a></li>
    </ul>
  </nav>
</section>
<!-- End Personal stats header -->

<!-- PulseBoard -->
<section class="flex items-center justify-center mx-auto my-10 w-85 animate-fade animate-delay-[1300ms]">
    <div class="green p-8 rounded-md">
      <h2 class="text-4xl font-semibold">Welcome to the PulseBoard</h2>
      <h3 class="text-3xl font-semibold mb-3">WIP: Hobby Project</h3>
      <div class="max-w-3xl mx-auto p-4 shadow-lg rounded-lg">
        <div class="mb-4">
            <h2 class="text-xl font-semibold mb-2">Update 08/07/2024:</h2>
            <ul class="list-disc pl-6">
                <li>Auth bypass fixed.</li>
                <li>Top 10 Albums now available (based on top 50 all-time tracks).</li>
            </ul>
        </div>
        
        <div class="mb-4">
            <h2 class="text-xl font-semibold mb-2">Update 07/07/2024:</h2>
            <ul class="list-disc pl-6">
                <li>API bug has been fixed.</li>
                <li>Data is now being pulled and displayed correctly.</li>
                <li>Home page is now mobile friendly.</li>
                <li>New features are coming soon!</li>
            </ul>
        </div>
        
        <div class="mb-4">
            <h2 class="text-xl font-semibold mb-2">Notice 30/06/2024:</h2>
            <ul class="list-disc pl-6">
                <li>Currently there is a bug with pulling the data from the API.</li>
                <li>It only pulls the data the first time, then it wipes itself and doesn't re-pull.</li>
                <li>For now strackifyer.co.uk is still available for use.</li>
                <li>I am working on a fix for this issue.</li>
            </ul>
        </div>
        
        <div class="mb-4">
            <h2 class="text-xl font-semibold mb-2">News 30/06/2024:</h2>
            <ul class="list-disc pl-6">
                <li>Welcome to the beta release of Strackifyer 2.0, better called TunePulse!</li>
                <li>Currently in beta, for a couple of weeks.</li>
                <li>Please report any bugs or issues you encounter to <a href="mailto:mail@cyberneon.be" class="text-green-500">mail@cyberneon.be</a>.</li>
                <li>Or you can report them on the <a class="text-green-500" href="https://github.com/CyberNeonHD/TunePulse">github repo</a>.</li>
                <li>Better design and new features are coming soon! Stay tuned!</li>
            </ul>
        </div>
      </div>
    </div>
</section>
<!-- PulseBoard -->
  