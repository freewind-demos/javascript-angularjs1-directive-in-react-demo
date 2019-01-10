import angular from 'angular';

const ngHelloModule = angular.module('helloModule', []);

ngHelloModule.directive('helloDirective', function () {
  return {
    scope: {
      message: '=',
      onMessageChange: '='
    },
    template: `<div>Angular: <input type="text" ng-model="message" ng-change="onMessageChange(message)"></div>`
  }
});

export default ngHelloModule;
