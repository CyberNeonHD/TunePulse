<script>
    import { selectedMenuOption } from './pulseboard.js';

    import { initialize } from './spotify-api-handler.js';
    initialize();
    
</script>
  
<style>
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300, 400, 700&display=swap');
  
</style>

<main>
  <!-- Personal stats header -->
  <section class="text-center pt-16">
    <h2 class="text-6xl font-semibold text-white mb-5 animate-jump-in animate-delay-[900ms]">Your <span style="color: rgb(20, 220, 80);">Spotify</span> Stats</h2>
    <nav>
      <ul class="flex justify-center">
        <li><a href="#" id="artists" class="text-white text-xl font-medium pr-5 hover:text-green-500 transition duration-500 animate-fade animate-delay-[1000ms]" on:click={selectedMenuOption}>Top 50 artists</a></li>
        <li><a href="#" id="tracks" class="text-white text-xl font-medium pr-5 hover:text-green-500 transition duration-500 animate-fade animate-delay-[1100ms]" on:click={selectedMenuOption}>Top 50 tracks</a></li>
        <!-- <li><a href="#" id="albums" class="text-white text-xl font-medium hover:text-green-500 transition duration-500 animate-fade animate-delay-[1200ms]"">Top 10 albums</a></li>-->
      </ul>
    </nav>
  </section>
  <!-- End Personal stats header -->

  <!-- PulseBoard -->
  <section class="flex items-center justify-center mx-auto my-10 w-85 animate-fade animate-delay-[1300ms]">
      <div class="green p-8 rounded-md">
        <h2 class="text-4xl font-semibold">Welcome to the PulseBoard</h2>
        <h3 class="text-3xl font-semibold mb-3">WIP: Hobby Project</h3>
        <br>
        <p class="text-xl text-white leading-6">
          News 30/06/2024: <br>
          - Welcome to the beta release of Strackifyer 2.0, better called TunePulse!<br>
          - Currently in beta, for a couple of weeks. <br>
          - Please report any bugs or issues you encounter to mail@cyberneon.be.<br>
          - Better desing and new features are coming soon! Stay tuned! <br>
          <br>
        </p>
      </div>
  </section>
  <!-- PulseBoard -->
</main>
  