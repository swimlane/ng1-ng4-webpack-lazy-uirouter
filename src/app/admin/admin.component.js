import { Component, Input } from '@angular/core';

@Component({
  template: `
    <h1>{{title}} + {{profile.status}}</h1>
    <pre>{{geoFormatted}}</pre>
    <img src="https://media.giphy.com/media/NMuaDOlkCOvJe/giphy.gif" width="150" height="150" />
    <div ui-view="reset"></div>
    <hr />

    <a href="#" class="button" uiSref="admin.reset">Goto ng2 substate</a>
    <a href="#" class="button" uiSref="login">Goto ng1 page</a>
    <a href="#" class="button" uiSref="login.hello">Goto ng1 substate</a>
  `
})
export class AdminComponent {

  @Input() geo = '';
  @Input() profile = '';

  get geoFormatted() {
    return JSON.stringify(this.geo, null, 4);
  }

  title = `I'm a ng2 component`;

}
