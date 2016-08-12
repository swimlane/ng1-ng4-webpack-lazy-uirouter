import angular from 'angular';
import { adapter } from '../adapter.js';
import { routes } from '../app/routes.js';

const services = [ '$q', '$state', '$ocLazyLoad', '$injector',
  'ng2.ComponentFactoryRefMap' /* 'ng2.Compiler' */ ];

export const configLaziness = [
  ...services,
  ($q, $state, $ocLazyLoad, $injector, componentFactoryRefMap) => {

    // Builds the state given the src
    function buildState(state) {
      let def = $q.defer();


      state.resolve().then(function(loaded) {
        let newModule = loaded;

        if(!loaded.name) {
          newModule = loaded.default;
        }

        let compiler = $injector.get('ng2.Compiler');

        console.log('Pre ng2 compile');

        adapter.compileNg2Components(compiler, componentFactoryRefMap);

        console.log('Pre ocLazyLoad');

        $ocLazyLoad.load(newModule).then(function(){
          console.log('LOADED!');
          def.resolve();
        }, function(err) {
          console.error('Error occurred!')
          throw err;
        });
      });

      return def.promise;
    };

    // handle deep link urls
    $state.router.urlRouterProvider.otherwise(($injector, $location) => {
      const url = $location.url();

      const splits = url
        .replace(/^\/?|\/?$/, '')
        .split('/');

      let state = undefined;
      for(const key in routes) {
        const route = routes[key];
        if(route && route.url.indexOf(splits[0]) > -1) {
          state = route;
          break;
        }
      }

      if(state) {
        if(!$state.get(state.name)) {
          buildState(state).then(() => {
            $state.router.urlRouter.sync();
          });
        }
      } else {
        console.error('Error occurred!')
      }
    });

    // handle invalid state transitions
    $state.router.stateProvider.onInvalid(($to$, $from$, $state) => {
      const name = $to$.name();
      const state = routes[name];

      if(state) {
        const redirect = {
          to: $to$.identifier(),
          toParams: $to$.params(),
          options: $to$.options()
        };

        buildState(state).then(() => {
          $state.go(redirect.to, redirect.toParams, redirect.options);
        });
      } else {
        console.error('Error occurred!')
      }
    });
  }
];
