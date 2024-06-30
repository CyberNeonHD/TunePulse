import { access_token, expires_in } from '../../../stores/spotify.js';

export function callApi(method, url, body, callback) {
    let Bearer = access_token;
  
    let xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorization', 'Bearer ' + Bearer);
    xhr.send(body);
    xhr.onload = callback;
  }
  