import { writable } from 'svelte/store';
import { callApi } from '../api-caller';

export const topTracks = writable([]);
export const topAlbums = writable([]);

const topTracksLifeTime = "https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=50&offset=0";

export async function fetchTopTracks() {
  callApi("GET", topTracksLifeTime, null, handleTracksResponse);
}

function handleTracksResponse(){
  if (this.status === 200){
    let data = JSON.parse(this.responseText);
    topTracks.set(data.items);

    // Count occurrences of each album and collect image URLs
    const albumCounts = {};
    const albumImages = {};

    data.items.forEach(item => {
      const albumName = item.album.name;
      const imageUrl = item.album.images[1].url;

      if (albumCounts[albumName]) {
        albumCounts[albumName]++;
      } else {
        albumCounts[albumName] = 1;
        albumImages[albumName] = imageUrl;
      }
    });

    // Convert albumCounts to array of objects with images
    const albumsRanked = Object.keys(albumCounts).map(album => ({
      name: album,
      count: albumCounts[album],
      imageUrl: albumImages[album],
    }));

    // Sort albums by count (descending)
    albumsRanked.sort((a, b) => b.count - a.count);

    // Update topAlbums store with ranked albums (top 10)
    topAlbums.set(albumsRanked.slice(0, 10));
    
  } else if (this.status === 401) {
    requestAuthorization();
  } else {
    console.log(this.responseText);
  }
}

export function convertDuration(duration_ms) {
  return (duration_ms / 60000).toFixed(2);
}
