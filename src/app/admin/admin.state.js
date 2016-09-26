import { AdminComponent } from './admin.component.js';
import { ResetComponent } from './reset/reset.component.js';
import { AdminService } from '../services/admin.js';

export const ADMIN_STATES = [
  {
    name: 'admin',
    url: '/admin',
    views: {
      $default: { component: AdminComponent }
    },
    resolve: {
      // status: function(adminService: AdminService) {
      status: function() {
        return 'blue';
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
