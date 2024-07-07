import { writable } from 'svelte/store';
import { callApi } from '../api-caller';

export const topArtists = writable([]);
const topArtistsLifeTime = "https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=50&offset=0";

export async function fetchTopArtists() {
  callApi("GET", topArtistsLifeTime, null, handleArtistsResponse);
}

function handleArtistsResponse() {
  if (this.status === 200) {
    let data = JSON.parse(this.responseText);
    topArtists.set(data.items);
  } else if (this.status === 401) {
    requestAuthorization();
  } else {
    console.log(this.responseText);
  }
}

export function convertGenresToLi(genres) {
  return genres.map(genre => genre);
}

export function convertRightSize(images) {
  let holdCounter = 0;
  for (let counter = 0; counter < images.length; counter++) {
    if (images[counter].width <= 320) {
      holdCounter = counter;
      break;
    }
  }
  return images[holdCounter].url;
}
