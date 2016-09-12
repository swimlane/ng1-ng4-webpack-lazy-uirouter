import { Component } from '@angular/core';

@Component({
  template: `
    <h1>{{title}}</h1>
    <div ui-view="reset"></div>

    <a href="#" class="button" uiSref="admin.reset">Goto ng2 substate</a>
    <a href="#" class="button" uiSref="login">Goto ng1 page</a>
    <a href="#" class="button" uiSref="login.hello">Goto ng1 substate</a>
  `
})
export class AdminComponent {

  title = `I'm a ng2 component`;

}
