import { writable } from 'svelte/store';

export const access_token = writable(null);
export const expires_in = writable(null);
