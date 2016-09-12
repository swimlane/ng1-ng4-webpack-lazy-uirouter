import { DashboardComponent } from './dashboard.component.js';

export function configure($stateProvider) {
  $stateProvider.state('dashboard', {
    url: '/dashboard',
    views: {
      $default: {
        component: DashboardComponent,
        resolve: {
          // wanna keep this for something
          // I might wanna DI in that isn't
          // available in ng2
          foo: function() {
            return 'foo';
          }
        }
      }
    }
  });
}
