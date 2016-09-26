/**
 * This is all the definitions of the lazy-loaded routes
 */
export const FUTURE_STATES = {

  login: {
    url: '/login',
    resolve: function() {
      return System.import('app/login/login.module.js');
    }
  },

  admin: {
    url: '/admin',
    resolve: function() {
      return System.import('app/admin/admin.module.js');
    }
  },

  dashboard: {
    url: '/dashboard',
    resolve: function() {
      return System.import('app/dashboard/dashboard.module.js');
    }
  }

};
