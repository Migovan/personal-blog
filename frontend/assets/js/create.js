angular.module('myApp').controller('createCtrl', function ($scope, mainFactory) {

    $scope.dataObject = {
        head: "",
        paper: "",
        img: ""
    };

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

    $scope.add = () => {

        if ($scope.dataObject.head == "" || $scope.dataObject.paper == "" || $scope.dataObject.img == ""){
            alert("Все поля обязательны к заполнению.");
        } else {
            let articleList = mainFactory.articleList;
            if (articleList == null) articleList = []
            articleList.push($scope.dataObject);
            mainFactory.articleList = articleList;

            let newUrl = "#!/";
            history.pushState('', '', newUrl);
        }
    }
});





