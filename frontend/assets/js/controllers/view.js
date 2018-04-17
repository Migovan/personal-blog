angular.module('myApp').controller('viewCtrl', function ($scope, mainFactory, $routeParams) {
    $scope.data = mainFactory.articleList[$routeParams.Id];
    $scope.Id = $routeParams.Id;

    $scope.tagParagraph = document.getElementsByClassName('paragraph')[0];
    $scope.tagParagraph.style.fontSize = $scope.data.value + "px";

    let n = $routeParams.Id;

    $scope.sliderPlus = () => {

        let newUrl = "#!/view/" + n++;
        console.log(mainFactory.articleList.length);

        if (mainFactory.articleList.length > n) {

            let newUrl = "#!/view/" + n++;
            history.pushState('', '', newUrl);
        }
        if (mainFactory.articleList.length <= n) {
            $scope.flagPlus = true;
        }

        console.log(newUrl);
    }

    $scope.sliderMinus = () => {

        let newUrl = "#!/view/" + n--;

        if (n >= 0 ) {
            let newUrl = "#!/view/" + n--;
            history.pushState('', '', newUrl);
        } else {
            $scope.flagMinus = true;
        }
    }

})