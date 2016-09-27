import angular from 'angular';

export const ButtonComponent = {

  template: `
    <button type="button">ng1 component - {{age}}</button>
  `,

  bindings: {
    age: '<'
  },

  controller($scope) {
    $scope.age = 1;
  }

}
