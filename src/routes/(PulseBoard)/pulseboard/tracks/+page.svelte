<style>
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300, 400, 700&display=swap');
</style>

<script>
  import { onMount } from 'svelte';
  import { topTracks, fetchTopTracks, convertDuration } from './spotifyServiceTracks';
  
  onMount(() => {
    fetchTopTracks();
  });

  let tracks = [];
  topTracks.subscribe(value => {
    tracks = value;
  });
</script>

<section class="text-center pt-14">
  <h2 class="text-4xl font-semibold text-white mb-5 animate-jump-in animate-delay-[900ms]">Your top <span style="color: rgb(20, 220, 80);">50</span> tracks</h2>
  <h3 class="text-xl text-white pb animate-jump-in animate-delay-[1000ms]">Here are your top 50 tracks based on your all-time listening habits.</h3>
</section>
<section>
  <div id="card-data" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 p-8">
    {#each tracks as track, i}
      <div class="card-container bg-green-500 text-black rounded-xl p-8 relative max-w-full text-center flex flex-col items-center animate-jump-in animate-delay-[1200ms]">
        <span class="position bg-black text-green-500 font-bold py-1 px-3 absolute top-8 left-8 rounded-sm">#{i + 1}</span>
        <div class="image mb-8">
          <img class="round rounded-full" src={track.album.images[1].url} alt="track" />
        </div>
        <a href={track.external_urls.spotify} target="_blank" class="hover:text-white">
          <h3 class="text-2xl">{track.artists[0].name} - {track.name}</h3>
        </a>
        <h6 class="text-xl uppercase my-3">Length: {convertDuration(track.duration_ms)} mins</h6>
        <div class="skills w-full bg-green-500 text-left p-4 rounded-xl">
          <h6 class="text-xl">Album:</h6>
          <p>{track.album.name}</p>
        </div>
      </div>
    {/each}
  </div>
</section>
  