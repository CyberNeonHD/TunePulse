import { onMount } from 'svelte';
import { requestAuthorization } from '../../auth.js';

//const redirect_uri = "https://tunepulse.be/pulseboard";
const redirect_uri = "http://localhost:5173/pulseboard";

export function initialize() {
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

  } else {
    console.error('Access token or expires_in parameter missing.');
    requestAuthorization();
  }
}

export function logout(){
  localStorage.removeItem("stateKey");
  localStorage.removeItem("access_token");
  localStorage.removeItem("expires_in");
}