import { AdminComponent } from './admin.component.js';
import { ResetComponent } from './reset/reset.component.js';
import { AdminService, LoginService } from '../common';
import { Transition } from 'ui-router-ng2';

export const ADMIN_STATES = [
  {
    name: 'admin',
    url: '/admin',
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
        deps: [LoginService, Transition],
        resolveFn: function(loginService: LoginService, trans: Transition) {
          debugger;
          console.log('trans', trans);
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
