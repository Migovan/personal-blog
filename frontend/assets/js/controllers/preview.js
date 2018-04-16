angular.module('myApp').controller('previewCtrl', function ($scope, mainFactory, $routeParams) {

    $scope.data = mainFactory.articleList;
    $scope.filter = "";

    $scope.deletePaper = (index) => {
        let articleList = mainFactory.articleList;
        articleList.splice(index, 1);
        mainFactory.articleList = articleList;
        $scope.data = articleList;
    }

    $scope.$watch('filter', function () {

        $scope.data = [];

        mainFactory.articleList.forEach(function (item, index) {

            let itsDataFinded = item.head.match($scope.filter);

            if (itsDataFinded ) {
                $scope.data.push(item);
                // $scope.fil = (document.getElementsByClassName('box-content'))[index];
                // $scope.fil.style.display = "none";
            } else {
                // $scope.box = (document.getElementsByClassName('box-content'))[index];
                // $scope.box.style.display = "block";
            }

        })
    })
})

