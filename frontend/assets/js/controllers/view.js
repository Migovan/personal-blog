angular.module('myApp').controller('viewCtrl', function ($scope, mainFactory, $routeParams) {
    $scope.data = mainFactory.articleList[$routeParams.Id];
    $scope.Id = $routeParams.Id;

    $scope.tagParagraph = document.getElementsByClassName('paragraph')[0];
    $scope.tagParagraph.style.fontSize = $scope.data.value + "px";
})