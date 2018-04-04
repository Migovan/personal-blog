angular.module('myApp').controller('createCtrl', function ($scope, mainFactory) {

    $scope.flag = true;
    $scope.dataObject = {
        head: "",
        paper: "",
        img: []
    };

    // $scope.style = 'link-none'

    $scope.add = () => {

        if ($scope.dataObject.head == "" || $scope.dataObject.paper == ""){
            alert("Все поля обязательны к заполнению.");
        } else {
            mainFactory.push ($scope.dataObject)
            var newUrl = "#!/";
            history.pushState('', '', newUrl);
        }

        console.log($scope.dataObject.head)

        // if ($scope.dataObject.paper == ""){
        //     alert("Напишите статью.");
        // } else {
        //     mainFactory.push ($scope.dataObject)
        //     var newUrl = "#!/";
        //     history.pushState('', '', newUrl);
        // }


        console.log($scope.dataObject.paper)
        console.log(mainFactory);
    }

    // $scope.$watch('dataObject.img', function (newVal, oldVal) {
    //     console.log('watch newVal', newVal)
    //     console.log('watch oldVal', oldVal)
    // })
    //
    // $scope.addImage = (event) => {
    //     console.log('addImage', event)
    // }
    //
    // $scope.addImageTest = (evt) => {
    //     var files = evt.target.files;
    //
    //     for (var i = 0, f; f = files[i]; i++) {
    //
    //         var reader = new FileReader();
    //
    //         reader.onload = (function(theFile) {
    //             return function(e) {
    //                 var span = document.createElement('span');
    //                 span.innerHTML = ['<img class="thumb" src="', e.target.result,
    //                     '" title="', escape(theFile.name), '"/>'].join('');
    //                 document.getElementById('list').insertBefore(span, null);
    //             };
    //         })(f);
    //
    //         reader.readAsDataURL(f);
    //     }
    // }
    // document.getElementById('files').addEventListener('change',  $scope.addImage, false);
});
