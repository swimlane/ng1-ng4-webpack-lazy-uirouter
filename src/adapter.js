import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeAdapter } from '@angular/upgrade';

import { UIRouterModule } from 'ui-router-ng2';
import { uiRouterNgUpgrade, Ng1ToNg2Module } from 'ui-router-ng1-to-ng2';

@NgModule({
  imports: [BrowserModule, Ng1ToNg2Module]
})
class AppModule { }

// Create ngUpgrade Adapter
export const adapter = new UpgradeAdapter(AppModule);

// Bootstrap ui-router
uiRouterNgUpgrade.setUpgradeAdapter(adapter);

// Just a demo scenario
adapter.upgradeNg1Provider('$http');
