export class LoginController {

  constructor($scope, profile, geo) {
    $scope.title = `I'm a ng1 page!`;
    $scope.status = profile.status;
    $scope.geo = geo.data;
  }

}
