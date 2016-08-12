import { UIROUTER_DIRECTIVES, UIView } from 'ui-router-ng2';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [UIROUTER_DIRECTIVES],
  exports: [UIROUTER_DIRECTIVES],
  entryComponents: [UIView]
})
export class UIRouterModule { }
