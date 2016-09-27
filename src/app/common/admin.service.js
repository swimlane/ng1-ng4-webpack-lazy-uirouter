import { Injectable, Inject } from '@angular/core';

@Injectable()
export class AdminService {

  constructor(@Inject('$http') $http) {
    this.$http = $http;
  }

  get() {
    return this.$http.get('http://ip-api.com/json/');
  }

}
