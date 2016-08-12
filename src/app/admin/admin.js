import angular from 'angular';

function ConfigureModule($stateProvider, $urlRouterProvider) {
  $stateProvider.state('login', {
    url: '/login',
    template: `
      <h1>Hello</h1>
    `
  });
}

export default angular
  .module('login')
  .config(ConfigureModule)
