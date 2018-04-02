require('angular-route');
angular.module('myApp', ['ngRoute']).config(function ($routeProvider) {
    $routeProvider
        .when("/create",{
            templateUrl: 'create.html',
            controller: "createCtrl"
        })
        .when("/",{
            templateUrl: 'preview.html',
            controller: "viewCtrl"
        })
        .when("/view",{
            templateUrl: 'view.html',
            controller: "editCtrl"
        })
        .when("/view/edit",{
            templateUrl: 'edit.html',
            controller: "editCtrl"
        })
        .otherwise({
            template: '<h1>404 no such page</h1>'
        })
});