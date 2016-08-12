import angular from 'angular';

export default angular
  .module('login', [])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('login', {
      url: '/login',
      template: `
        <h1>I'm a ng1 page</h1>
        <a href="#" ui-sref="admin">Goto ng2 page</a>
      `
    });
  });
