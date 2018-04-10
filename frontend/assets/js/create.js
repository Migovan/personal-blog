// angular.module('myApp').controller('createCtrl', function ($scope, mainFactory,$routeParams) {
//
//     $scope.dataObject = {
//         head: "",
//         paper: "",
//         img: ""
//     };
//
//     $scope.data = mainFactory.articleList[$routeParams.editId];
//     $scope.editId = $routeParams.editId
//
//     $scope.loadImage = (event) => {
//         if (event) {
//             let file = event.target.files[0];
//             let reader = new FileReader();
//             if (file) {
//                 reader.readAsDataURL(file);
//             }
//
//             reader.onloadend = () => {
//                 $scope.$apply(() => {
//                     $scope.dataObject.img = reader.result;
//                 })
//             }
//         } else {
//             document.querySelector('input[type=file]').onchange= $scope.loadImage;
//         }
//     }
//
//     $scope.add = () => {
//
//         if ($scope.dataObject.head == "" || $scope.dataObject.paper == "" || $scope.dataObject.img == ""){
//             alert("Все поля обязательны к заполнению.");
//         } else {
//             let articleList = mainFactory.articleList;
//             if (articleList == null) articleList = []
//             articleList.push($scope.dataObject);
//             mainFactory.articleList = articleList;
//
//             let newUrl = "#!/";
//             history.pushState('', '', newUrl);
//         }
//     }
// });
//


angular.module('myApp').controller('createCtrl', function ($scope, mainFactory,$routeParams) {

    $scope.Id = $routeParams.editId;
    $scope.editMode = !!$routeParams.editId;

    $scope.dataObject = {
        head: "",
        paper: "",
        img: ""
    };

    if($scope.Id) {
        $scope.dataObject = mainFactory.articleList[$scope.Id];
    }

    $scope.saveEditPaper = () => {
        let articleList = mainFactory.articleList;
        articleList.splice($scope.Id, 1, $scope.dataObject);
        mainFactory.articleList = articleList;
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

});





