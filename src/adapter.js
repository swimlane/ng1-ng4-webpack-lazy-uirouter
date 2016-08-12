import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeAdapter } from '@angular/upgrade';

import { uiRouterNgUpgrade } from 'ui-router-ng1-to-ng2';
import { UIRouterModule } from './utils/routerModule.js';


@NgModule({
  imports: [BrowserModule, UIRouterModule]
})
class Ng2AppModule { }

export const adapter = new UpgradeAdapter(Ng2AppModule);
uiRouterNgUpgrade.setUpgradeAdapter(adapter);
