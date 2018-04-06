angular.module('myApp').controller('viewCtrl', function ($scope, mainFactory, $routeParams) {
    $scope.data = mainFactory.articleList[$routeParams.Id];
    $scope.Id = $routeParams.Id
})