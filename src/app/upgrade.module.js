import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng1ToNg2Module } from 'ui-router-ng1-to-ng2';
import { CommonNg2Module } from 'app/common/commonng2.module.js';

@NgModule({
  imports: [
    BrowserModule,
    Ng1ToNg2Module,
    CommonNg2Module
  ]
})
export class UpgradeModule { }
