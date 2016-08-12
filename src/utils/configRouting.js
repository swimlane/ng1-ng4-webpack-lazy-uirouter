import angular from 'angular';

export function configRouting($locationProvider, $urlMatcherFactoryProvider, $urlRouterProvider) {
  $locationProvider.html5Mode({
    enabled: true
  });

  $urlMatcherFactoryProvider.caseInsensitive(true);
  $urlMatcherFactoryProvider.strictMode(false);

  $urlRouterProvider.when('', function($state){
    $state.go('login');
  });
};
