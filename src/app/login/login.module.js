import angular from 'angular';
import { configState } from './login.state';
import { commonNg1Module } from '../common';

export default angular
  .module('login', [ commonNg1Module.name ])
  .config(configState)
