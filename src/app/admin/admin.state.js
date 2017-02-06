import { AdminComponent } from './admin.component.js';
import { ResetComponent } from './reset/reset.component.js';
import { AdminService, LoginService } from 'app/common';
import { TransitionService, StateService } from 'ui-router-ng2';

export const ADMIN_STATES = [
  {
    name: 'admin',
    url: '/admin/:id',
    views: {
      $default: { component: AdminComponent }
    },
    resolve: [
      {
        token: 'geo',
        deps: [AdminService],
        resolveFn: function(adminService: AdminService) {
          return adminService.get();
        }
      },
      {
        token: 'profile',
        deps: [LoginService, TransitionService, StateService],
        resolveFn: function(loginService: LoginService, trans: TransitionService, state: StateService) {
          console.log('Services', trans, state);
          return loginService.get();
        }
      }
    ]
  },
  {
    name: 'admin.reset',
    url: '/reset',
    views: {
      'reset': { component: ResetComponent }
    }
  }
];
