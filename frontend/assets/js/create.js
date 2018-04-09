angular.module('myApp').controller('createCtrl', function ($scope, mainFactory) {

    $scope.dataObject = {
        head: "",
        paper: "",
        img: [21212]
    };



     $scope.$watch('dataObject.img', () => {
        console.log($scope.dataObject.img)
    })

    // $scope.addImage = (event) => {
    //     console.log(event);
    // }

    $scope.add = () => {

        if ($scope.dataObject.head == "" || $scope.dataObject.paper == ""){
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

    //  $scope.handleFiles = () => {
    //     var reader = new FileReader(),
    //         input = document.getElementById('input').files[0],
    //         output = document.getElementById('output');
    //     reader.addEventListener("loadend", function(result) {
    //         output.innerHTML = result.target.result;
    //     }, false);
    //     reader.readAsDataURL(input);
    //
    // }

});







// angular.module('myApp').controller('createCtrl', function ($scope, mainFactory, $routeParams) {
//     $scope.isEditMode = false;
//
//     if ($routeParams.editId) {
//         $scope.isEditMode = true;
//         $scope.dataObject = mainFactory.articleList[$routeParams.editId];
//
//         var newUrl = "#!/view/{{editId}}";
//         history.pushState('', '', newUrl);
//
//         $scope.saveEditPaper = () => {
//             var articleList = mainFactory.articleList
//             articleList.splice($routeParams.editId, 1, $scope.dataObject);
//             mainFactory.articleList = articleList;
//         }
//
//     } else {
//         $scope.dataObject = {
//             head: "",
//             paper: "",
//             img: []
//         };
//
//         $scope.add = () => {
//             if ($scope.dataObject.head == "" || $scope.dataObject.paper == ""){
//                 alert("Все поля обязательны к заполнению.");
//             } else {
//                 var articleList = mainFactory.articleList;
//                 articleList.push($scope.dataObject);
//                 mainFactory.articleList = articleList;
//
//                 var newUrl = "#!/";
//                 history.pushState('', '', newUrl);
//             }
//         }
//     }
//
//
//
//
//
//     $scope.$watch('dataObject.img', function (newVal, oldVal) {
//         console.log('watch newVal', newVal)
//         console.log('watch oldVal', oldVal)
//     })
//
//     $scope.addImage = (event) => {
//         console.log('addImage', event)
//     }
//
//     $scope.addImageTest = (evt) => {
//         var files = evt.target.files;
//
//         for (var i = 0, f; f = files[i]; i++) {
//
//             var reader = new FileReader();
//
//             reader.onload = (function(theFile) {
//                 return function(e) {
//                     var span = document.createElement('span');
//                     span.innerHTML = ['<img class="thumb" src="', e.target.result,
//                         '" title="', escape(theFile.name), '"/>'].join('');
//                     document.getElementById('list').insertBefore(span, null);
//                 };
//             })(f);
//
//             reader.readAsDataURL(f);
//         }
//     }
//     document.getElementById('files').addEventListener('change',  $scope.addImage, false);
// });
