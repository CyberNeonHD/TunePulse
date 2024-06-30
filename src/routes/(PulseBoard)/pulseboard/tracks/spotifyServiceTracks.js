import { callApi } from '../api-caller';

export let topTracks = [];

export async function fetchTopTracks() {
  const topTracksLifeTime = "https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=50&offset=0";
  callApi("GET", topTracksLifeTime, null, handleTracksResponse);
}

function handleTracksResponse(){
  if ( this.status ===  200 ){
    let data = JSON.parse(this.responseText);
    topTracks = data.items;
  } else if ( this.status === 401 ){
    requestAuthorization();
  } else {
    console.log(this.responseText);
  }
}

export function convertDuration(duration_ms) {
  return (duration_ms / 60000).toFixed(2);
}
