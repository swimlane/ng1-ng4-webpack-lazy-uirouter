import { Component, Input } from '@angular/core';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  @Input() geo = '';
  @Input() profile = '';

  age1 = 11;
  age2 = 22;

  constructor(){
    console.log('IN COMPONENT');
  }

  get geoFormatted() {
    return JSON.stringify(this.geo, null, 4);
  }

  title = `I'm a ng2 component`;

}
