// src/routes/(PulseBoard)/pulseboard/api-caller.js
/*import { get } from 'svelte/store';
import { access_token} from '../../../stores/spotify.js';*/

export function callApi(method, url, body, callback) {
  const token = localStorage.getItem('access_token');
  
  if (!token) {
    console.error("No access token found");
    return;
  }

  let xhr = new XMLHttpRequest();
  xhr.open(method, url, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader('Authorization', 'Bearer ' + token);
  xhr.send(body);
  xhr.onload = callback;
}
