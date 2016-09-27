import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UIRouterModule } from 'ui-router-ng2';
import { Ng1ToNg2Module } from 'ui-router-ng1-to-ng2';

@NgModule({
  imports: [BrowserModule, Ng1ToNg2Module]
})
export class UpgradeModule { }
