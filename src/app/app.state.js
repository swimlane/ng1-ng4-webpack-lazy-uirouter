import { loadNg1Module } from '../utils/loadNg1Module.js';

export const MAIN_STATES = [
  {
    name: 'login.**',
    url: '/login',
    lazyLoad: loadNg1Module(() => System.import('app/login/login.module.js'))
  },
  {
    name: 'admin.**',
    url: '/admin',
    loadChildren: () => System.import('app/admin/admin.module.js').then(m => m.default)
  }
];
