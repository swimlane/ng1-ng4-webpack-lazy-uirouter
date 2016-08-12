import { UpgradeAdapter } from '@angular/upgrade';
import { uiRouterNgUpgrade } from 'ui-router-ng1-to-ng2';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

const Ng2AppModule =
  NgModule({
    declarations: [],
    imports: [BrowserModule],
    providers: []
  }).Class({
    constructor: function Ng2AppModule() {},
    ngDoBootstrap: function() {}
  });

export const adapter = new UpgradeAdapter(Ng2AppModule);
uiRouterNgUpgrade.setUpgradeAdapter(adapter);
