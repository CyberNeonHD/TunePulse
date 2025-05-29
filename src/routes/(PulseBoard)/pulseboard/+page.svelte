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
      <li><a href="#" id="artists" class="text-white text-xl font-medium pr-5 hover:text-green-500 transition duration-500 animate-fade animate-delay-1000" on:click={selectedMenuOption}>Top 50 artists</a></li>
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
        <p class="text-lg">This is the PulseBoard, where you can find the latest updates and news about TunePulse.</p>
        <p class="text-lg">This is a hobby project, so updates may be slow.</p>
        <div class="max-w-3xl mx-auto p-4 rounded-lg">
            <div class="mb-4">
                <h2 class="text-xl font-semibold mb-2">Update 01/03/2025:</h2>
                <ul class="list-disc pl-6">
                    <p>Rebranded as TunePulse:</p>
                    <p>We've made a major leap! The projecst has evolved from its original basic HTML, CSS, and JS setup to a more powerful tech stack using SvelteKit, Tailwind CSS, and Skeleton Lab. This new version represents a complete overhaul of the initial release and is set to breathe new life into the project.</p>
                </ul>
            </div>
        </div>
      <div class="max-w-3xl mx-auto p-4 rounded-lg">
        <div class="mb-4">
            <h2 class="text-xl font-semibold mb-2">Updates leading up V2 release:</h2>
            <ul class="list-disc pl-6">
              <li>Welcome to the beta release of Strackifyer 2.0, better called TunePulse!</li>
              <li>Currently in beta, for a couple of weeks.</li>
              <li>Please report any bugs or issues you encounter to <a href="mailto:mail@cyberneon.be" class="text-green-500">mail@cyberneon.be</a>.</li>
              <li>You can report them on the <a class="text-green-500" href="https://github.com/CyberNeonHD/TunePulse">github repo</a> as well.</li>
              <li>Better design and new features are coming soon! Stay tuned!</li>
            </ul>
            <h2 class="text-xl font-semibold mb-2">Bugs and features:</h2>
            <ul class="list-disc pl-6">
              <li>TimeRangeSelector component created</li>
              <li>Upgrades all packages to the latest version (13/01/2025)</li>
              <li>Auth bypass fixed.</li>
              <li>Top 50 Artists now available.</li>
              <li>Top 50 Tracks now available.</li>
              <li>Top 10 Albums now available (based on top 50 all-time tracks).</li>
              <li>API bug has been fixed.</li>
              <li>Routing sveltekit working.</li>
              <li>Data is now being pulled and displayed correctly.</li>
              <li>Home page is now mobile friendly.</li>
            </ul>
        </div>
      </div>
    </div>
</section>
<!-- PulseBoard -->
  