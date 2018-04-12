angular.module('myApp').controller('previewCtrl', function ($scope, mainFactory, $routeParams) {

    $scope.data = mainFactory.articleList;

    $scope.deletePaper = (index) => {
        let articleList = mainFactory.articleList;
        articleList.splice(index, 1);
        mainFactory.articleList = articleList;
        $scope.data = articleList;
    }
})

