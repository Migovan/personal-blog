angular.module('myApp').controller('previewCtrl', function ($scope, mainFactory, $routeParams) {

    $scope.data = mainFactory.articleList;
    $scope.filter = "";

    $scope.deletePaper = (index) => {
        let articleList = mainFactory.articleList;
        articleList.splice(index, 1);
        mainFactory.articleList = articleList;
        $scope.data = articleList;
        $scope.$apply();
    }



    $scope.$watch('filter', function () {

        $scope.data = [];
        console.log("filter", $scope.filter);

        mainFactory.articleList.forEach(function (item, index) {

            let itsDataFound = item.head.match($scope.filter);

            if (itsDataFound ) {
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

