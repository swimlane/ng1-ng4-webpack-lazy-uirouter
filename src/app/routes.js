import { loadNgModule } from '../utils/lazyAdapter.js';

export const MAIN_STATES = [
  {
    name: 'login',
    url: '/login',
    lazyLoad: transition => {
      return new Promise((success, fail) => {
        let $ocLazyLoad = transition.injector().get('$ocLazyLoad');
        System.import('app/login/login.module.js').then((newModule) => {
          if(!newModule.name) newModule = newModule.default;
          $ocLazyLoad.load(newModule).then(success, fail);
        });
      });
    }
  },
  {
    name: 'admin',
    url: '/admin',
    lazyLoad: loadNgModule(() => System.import('app/admin/admin.module.js'))
  },
  {
    name: 'dashboard',
    url: '/dashboard',
    lazyLoad: loadNgModule(() => System.import('app/dashboard/dashboard.module.js'))
  }
];
