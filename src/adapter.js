import { UpgradeAdapter } from '@angular/upgrade';
import { uiRouterNgUpgrade } from 'ui-router-ng1-to-ng2';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UIROUTER_DIRECTIVES } from 'ui-router-ng2';

@NgModule({
  declarations: [ UIROUTER_DIRECTIVES ],
  imports: [BrowserModule]
})
class Ng2AppModule {
  ngDoBootstrap(){ }
}

export const adapter = new UpgradeAdapter(Ng2AppModule);
uiRouterNgUpgrade.setUpgradeAdapter(adapter);
