<script>
  import { onMount } from 'svelte';
  import { topArtists, fetchTopArtists, convertGenresToLi, convertRightSize } from './spotifyServiceArtists';
  import TimeRangeSelector from '$lib/components/TimeRangeSelector.svelte';
  import BackButton from '$lib/components/BackButton.svelte';
  
  let selectedTimeRange = 'short_term';
  
  onMount(() => {
    fetchTopArtists(selectedTimeRange);
  });

  let artists = [];
  topArtists.subscribe(value => {
    artists = value;
  });

  const handleTimeRangeClick = (range) => {
    selectedTimeRange = range;
    fetchTopArtists(range);
  };
</script>

<section class="text-center pt-14">
  <BackButton target="/pulseboard" text="Go to Pulseboard" />
  <h2 class="text-4xl font-semibold text-white mb-5 animate-jump-in animate-delay-[900ms]">Your top <span style="color: rgb(20, 220, 80);">50</span> artists</h2>
  <h3 class="text-xl text-white pb-4 animate-jump-in animate-delay-[1000ms]">Here are your top 50 artists based on:</h3>
  
  <TimeRangeSelector 
    {selectedTimeRange}
    onTimeRangeClick={handleTimeRangeClick}
  />
</section>
<main>
  <section>
    <div id="card-data" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 p-8">
      {#each artists as artist, i}
        <div class="card-container bg-green-500 text-black rounded-xl p-8 relative max-w-full text-center flex flex-col items-center animate-jump-in animate-delay-[1200ms]">
          <span class="position bg-black text-green-500 font-bold py-1 px-3 absolute top-8 left-8 rounded-sm">
            #{i + 1}
          </span>
          <div class="image mb-8">
            <img class="round rounded-full" src={convertRightSize(artist.images)} alt="user" />
          </div>
          <a href={artist.external_urls.spotify} target="_blank" class="hover:text-white">
            <h3 class="text-2xl">{artist.name}</h3>
          </a>
          <h6 class="text-xl uppercase my-3">Popularity Rating: {artist.popularity}</h6>
          <div class="skills w-full bg-green-500 text-left p-4 rounded-xl">
            <h6 class="text-xl">Genre:</h6>
            <ul class="list-none p-0 m-0">
              {#each convertGenresToLi(artist.genres) as genre}
                <li class="inline-block border border-gray-800 rounded-sm text-xs m-1 py-1 px-2">
                  {genre}
                </li>
              {/each}
            </ul>
          </div>
        </div>
      {/each}
    </div>
  </section>
</main>
