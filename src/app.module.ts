import * as angular from 'angular';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UIRouterModule } from '@uirouter/angular';
import { UIRouterUpgradeModule } from '@uirouter/angular-hybrid';
import { CommonNg2Module } from './app/common/common-ng2.module';
// import LoginModule from './app/login/login.module';
import { HybridHelper } from './hybrid-helper';
import AdminModule from './app/admin/admin.module';

// entry components
import { ToggleComponent } from './app/common/components/toggle.component';
import { AdminComponent } from './app/admin/admin.component';

@NgModule({
  entryComponents: [ ToggleComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UpgradeModule,
    UIRouterModule,
    UIRouterUpgradeModule,
    CommonNg2Module,
    AdminModule
  ],
})
export class AppModule {
  ngDoBootstrap() {}
}
