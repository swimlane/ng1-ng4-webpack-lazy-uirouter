import { AdminComponent } from './admin.component.js';
import { ResetComponent } from './reset/reset.component.js';

export function configState($stateProvider) {

  $stateProvider.state('admin', {
    url: '/admin',
    views: {
      $default: { component: AdminComponent }
    }
  });

  $stateProvider.state('admin.reset', {
    url: '/reset',
    views: {
      $default: { component: ResetComponent }
    }
  });

}
