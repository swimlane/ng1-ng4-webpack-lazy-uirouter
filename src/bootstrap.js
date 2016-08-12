import { adapter } from './adapter.js';
import app from './app/app.js';

document.addEventListener('DOMContentLoaded', () => {
  adapter.bootstrap(document.body, [app.name]);
});
