import { Admin2Component } from './admin.component';
import { AdminService, LoginService } from '../common';
import { TransitionService, StateService } from 'ui-router-ng2';

export const ADMIN_STATES = [
  {
    name: 'admin2',
    url: '/admin2',
    views: {
      $default: { component: Admin2Component }
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
  }
];
