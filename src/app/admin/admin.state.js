import { AdminComponent } from './admin.component.js';
import { ResetComponent } from './reset/reset.component.js';
import { AdminService, LoginService } from 'app/services';

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
      }
      /*
      {
        token: 'status',
        deps: [LoginService],
        resolveFn: function(loginService: LoginService) {
          return loginService.get();
        }
      }
      */
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
