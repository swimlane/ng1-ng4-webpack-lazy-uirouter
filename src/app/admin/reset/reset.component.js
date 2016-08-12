import { Component } from '@angular/core';

@Component({
  template: `
    <h1>{{title}}</h1>
    <hr />

    <a href="#" class="button" uiSref="login.hello">Goto ng1 substate</a>
  `
})
export class ResetComponent {

  title = `I'm a ng2 substate component`;

}
