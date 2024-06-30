import { onMount } from 'svelte';
import { access_token, expires_in } from '../../../stores/spotify.js';
import { requestAuthorization } from '../../(Home)/auth.js';

const TOKEN = "https://accounts.spotify.com/api/token";
//const redirect_uri = "https://tunepulse.be/pulseboard";
const redirect_uri = "http://localhost:5173/pulseboard";

export function initialize() {
  onMount(() => {
    if (window.location.href.length > 0) {
      handleRedirect();
    }
    else {
      requestAuthorization();
    }
  });
}

function handleRedirect() {
  configureData();
  window.history.pushState("", "", redirect_uri);
}

function configureData() {
  const params = new Proxy(new URLSearchParams(window.location.hash.substring(1, window.location.hash.length)), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  const token = params.access_token;
  const expires = params.expires_in;

  access_token.set(token);
  expires_in.set(expires);
}
