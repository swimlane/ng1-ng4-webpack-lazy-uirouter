import { AdminComponent } from './admin.component.js';
import { ResetComponent } from './reset/reset.component.js';

export const ADMIN_STATES = [
  {
    name: 'admin',
    url: '/admin',
    views: {
      $default: { component: AdminComponent }
    }
  },
  {
    name: 'admin.reset',
    url: '/reset',
    views: {
      $default: { component: ResetComponent }
    }
  }
];
