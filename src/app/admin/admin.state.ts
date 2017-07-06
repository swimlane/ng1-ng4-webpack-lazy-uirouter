import { AdminComponent } from './admin.component';
import { ResetComponent } from './reset/reset.component';
import { LoginService } from '../common';
import { AdminService } from '../common/services/admin.service';
import { TransitionService, StateService } from '@uirouter/angular';

export const ADMIN_STATES = [
  {
    name: 'admin',
    url: '/admin',
    component: AdminComponent,
    resolve: {
        geo: function(AdminService) {
          return AdminService.get();
        },
        // deps: [LoginService, TransitionService, StateService],
        profile: function(LoginService, $transition$) {
          return LoginService.get();
        }
    }
  },
  {
    name: 'admin.reset',
    url: '/reset',
    views: {
      'reset': { component: ResetComponent }
    }
  }
];
