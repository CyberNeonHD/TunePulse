import { onMount } from 'svelte';
import { access_token, expires_in } from '../../../stores/spotify.js';
import { requestAuthorization } from '../../(Home)/auth.js';

const redirect_uri = "https://tunepulse.be/pulseboard";
//const redirect_uri = "http://localhost:5173/pulseboard";

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
  const url = window.location.href;
  const hashIndex = url.indexOf('#');
  const hash = url.slice(hashIndex + 1);
  const params = new URLSearchParams(hash);

  const token = params.get('access_token');
  const expires = params.get('expires_in');

  if (token && expires) {
    localStorage.setItem('access_token', token);
    localStorage.setItem('expires_in', expires);
    /*
    access_token.set(token);
    expires_in.set(expires);*/
  } else {
    console.error('Access token or expires_in parameter missing.');
  }
}

export function logout(){
  localStorage.removeItem("stateKey");
  localStorage.removeItem("access_token");
  localStorage.removeItem("expires_in");
}