import { loadNg1Module, loadNg2Default } from 'utils';

export const MAIN_STATES = [
  {
    name: 'login',
    url: '/login',
    lazyLoad: loadNg1Module(System.import('app/login/login.module.js'))
  },
  {
    name: 'admin',
    url: '/admin',
    lazyLoad: loadNg2Default(System.import('app/admin/admin.module.js'))
  }
];
