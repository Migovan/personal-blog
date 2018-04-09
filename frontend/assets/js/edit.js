angular.module('myApp').controller('editCtrl', function ($scope, mainFactory, $routeParams) {

    $scope.data = mainFactory.articleList[$routeParams.Id];
    $scope.Id = $routeParams.Id

    $scope.saveEditPaper = () => {
        let articleList = mainFactory.articleList;
        articleList.splice($routeParams.Id, 1, $scope.data);
        mainFactory.articleList = articleList;
    }

    $scope.loadImage = (event) => {
        if (event) {
            let file = event.target.files[0];
            let reader = new FileReader();
            if (file) {
                reader.readAsDataURL(file);
            }

            reader.onloadend = () => {

                $scope.$apply(() => {
                    $scope.dataObject.img = reader.result;
            })
            }
        } else {
            document.querySelector('input[type=file]').onchange= $scope.loadImage;
        }
    }
})