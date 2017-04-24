import { loadNg1Module } from '../utils/load-ng1-module';

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
  },
  ,
  {
    name: 'admin2.**',
    url: '/admin2',
    loadChildren: () => System.import('app/admin2/admin.module').then(m => m.default)
  }
];
