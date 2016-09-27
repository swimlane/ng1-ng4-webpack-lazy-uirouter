import { adapter } from './adapter.js';
import app from './app';

document.addEventListener('DOMContentLoaded', () => {
  adapter.bootstrap(document.body, [app.name]);
});
