import { Component, NgModule } from '@angular/core';
import { UIROUTER_DIRECTIVES, StateService } from 'ui-router-ng2';

//@NgModule({ imports: [ AppModule ] })
@Component({
  selector: 'admin',
  directives: [UIROUTER_DIRECTIVES],
  template: `
    <h1>I'm a ng2 page</h1>
    <a uiSref="login">Goto ng1 page</a>
  `
})
export class AppComponent {

}

export default angular
  .module('admin', [])
  .config(function($stateProvider) {
    $stateProvider.state('admin', {
      url: '/admin',
      views: {
        $default: { component: AppComponent }
      }
    });
  });
