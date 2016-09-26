import { adapter } from '../../adapter.js';
import { DashboardComponent } from './dashboard.component.js';

const dashboardComponent = adapter.downgradeNg2Component(DashboardComponent);

export function configState($stateProvider) {
  $stateProvider.state('dashboard', {
    url: '/dashboard',
    views: {
      $default: {
        // component: DashboardComponent,
        controller: dashboardComponent,
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
