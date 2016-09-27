import { loadNg1Module } from '../utils/loadNg1Module.js';
import { loadNg2Module } from '../utils/loadNg2Module.js';

export const MAIN_STATES = [
  {
    name: 'login',
    url: '/login',
    lazyLoad: loadNg1Module(System.import('app/login/login.module.js'))
  },
  {
    name: 'admin',
    url: '/admin',
    // https://github.com/angular-ui/ui-router/pull/3037
    lazyLoad: loadNg2Module(() =>
      System.import('app/admin/admin.module.js').then(m => m.default))
  }
];
