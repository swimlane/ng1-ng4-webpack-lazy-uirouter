import { adapter } from './adapter.js';
import { appModule } from 'app';

document.addEventListener('DOMContentLoaded', () => {
  adapter.bootstrap(document.body, [appModule.name]);
});
