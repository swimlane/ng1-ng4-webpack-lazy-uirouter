/**
 * This is all the definitions of the lazy-loaded routes
 */
export const routes = {

  login: {
    url: '/login',
    resolve: function() {
      return System.import('app/login/login.js');
    }
  },

  admin: {
    url: '/admin',
    resolve: function() {
      return System.import('app/admin/admin.js');
    }
  }

};
