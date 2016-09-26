export class LoginController {

  constructor($scope, profile) {
    $scope.title = `I'm a ng1 page!`;
    $scope.status = profile.status;
  }

}
