import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeAdapter } from '@angular/upgrade';

import { UIRouterModule } from 'ui-router-ng2';
import { uiRouterNgUpgrade } from 'ui-router-ng1-to-ng2';


@UIRouterModule({
  imports: [BrowserModule]
})
class Ng2AppModule { }

export const adapter = new UpgradeAdapter(Ng2AppModule);
uiRouterNgUpgrade.setUpgradeAdapter(adapter);
