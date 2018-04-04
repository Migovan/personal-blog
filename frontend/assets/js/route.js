require('angular-route');
angular.module('myApp', ['ngRoute']).config(function ($routeProvider) {
    $routeProvider
        .when("/create",{
            templateUrl: 'create.html',
            controller: "createCtrl"
        })
        .when("/",{
            templateUrl: 'preview.html',
            controller: "previewCtrl"
        })
        .when("/view/:Id",{
            templateUrl: 'view.html',
            controller: "viewCtrl"
        })
        .when("/edit/:Id",{
            templateUrl: 'edit.html',
            controller: "editCtrl"
        })
        .otherwise({
            template: '<h1>404 no such page</h1>'
        })
});