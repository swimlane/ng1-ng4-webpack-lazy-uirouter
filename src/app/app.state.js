import { loadNg1Module } from '../utils';

export const MAIN_STATES = [
  {
    name: 'login',
    url: '/login',
    loadChildren: loadNg1Module(() => System.import('app/login/login.module.js'))
  },
  {
    name: 'admin',
    url: '/admin',
    loadChildren: () => System.import('app/admin/admin.module.js').then(m => m.default)
  }
];
