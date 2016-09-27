export * from './loadNg1Module.js';
export * from './configRouting.js';

import { loadNgModule } from './loadNg2Module.js';

// This simplifies using `loadNgModule`
// https://github.com/angular-ui/ui-router/pull/3037
// lazyLoad: loadNgModule(() => System.import('app/admin/admin.module.js').then(m => m.default))
export function loadNg2Default(module) {
  return loadNgModule(() => module.then(m => m.default));
}

export { loadNgModule };
