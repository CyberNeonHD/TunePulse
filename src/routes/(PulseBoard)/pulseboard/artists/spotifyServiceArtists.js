import { callApi } from '../api-caller';

export let topArtists = [];

export async function fetchTopArtists() {
  const topArtistsLifeTime = "https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=50&offset=0";
  callApi("GET", topArtistsLifeTime, null, handleArtistsResponse);
}

function handleArtistsResponse() {
  if (this.status === 200) {
    let data = JSON.parse(this.responseText);
    topArtists = data.items;
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
