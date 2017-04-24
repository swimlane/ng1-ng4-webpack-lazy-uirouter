import { loadNg1Module } from '../utils/loadNg1Module';

export const MAIN_STATES = [
  {
    name: 'login.**',
    url: '/login',
    lazyLoad: loadNg1Module(() => System.import('app/login/login.module'))
  },
  {
    name: 'admin.**',
    url: '/admin',
    loadChildren: () => System.import('app/admin/admin.module').then(m => m.default)
  }
];
