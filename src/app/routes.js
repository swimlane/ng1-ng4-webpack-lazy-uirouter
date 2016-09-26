import { loadNgModule } from '../utils/lazyAdapter.js';

function loadNg1Module(module) {
  return (transition) => {
    let $ocLazyLoad = transition.injector().get('$ocLazyLoad');

    return new Promise((success, fail) => {
      module.then(newModule => {
        if(!newModule.name) newModule = newModule.default;
        $ocLazyLoad.load(newModule).then(success, fail);
      });
    });
  };
}

export const MAIN_STATES = [
  {
    name: 'login',
    url: '/login',
    lazyLoad: loadNg1Module(System.import('app/login/login.module.js'))
  },
  {
    name: 'admin',
    url: '/admin',
    lazyLoad: loadNgModule(System.import('app/admin/admin.module.js'))
  },
  {
    name: 'dashboard',
    url: '/dashboard',
    lazyLoad: loadNg1Module(System.import('app/dashboard/dashboard.module.js'))
  }
];
