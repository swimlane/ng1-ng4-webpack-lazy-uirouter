import { Component, NgModule } from '@angular/core';

//@NgModule({
//  imports: [ AppModule ]
//})
@Component({
  selector: 'app',
  template: `
    <h1>You made it</h1>
  `
})
export class AppComponent {

}

export default angular
  .module('search', [])
  .config(function($stateProvider) {
    $stateProvider.state('login', {
      url: '/login',
      views: {
        $default: { component: AppComponent }
      }
    });
  });
