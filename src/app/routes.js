import { loadNgModule } from '../utils/lazyAdapter.js';

function loadNg1(transition, module) {
  console.log('--- loading ng1 ---', module);

  let $ocLazyLoad = transition.injector().get('$ocLazyLoad');

  return new Promise((success, fail) => {
    module.then(newModule => {
      console.log('--- loaded ng1 ---', newModule);

      if(!newModule.name) newModule = newModule.default;
      $ocLazyLoad.load(newModule).then(success, fail);
    });
  });
}

export const MAIN_STATES = [
  {
    name: 'login',
    url: '/login',
    lazyLoad: t => loadNg1(t, System.import('app/login/login.module.js'))
  },
  {
    name: 'admin',
    url: '/admin',
    lazyLoad: loadNgModule(() => System.import('app/admin/admin.module.js'))
  },
  {
    name: 'dashboard',
    url: '/dashboard',
    lazyLoad: t => loadNg1(t, System.import('app/dashboard/dashboard.module.js'))
  }
];
