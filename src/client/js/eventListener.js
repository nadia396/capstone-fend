// // eventListener.js
import { performAction } from './app';


export function attachEventListeners() {
    document.getElementById('generate').addEventListener('click', performAction);
  }