angular.module('myApp').factory('mainFactory', () => {
    dataLocal = [];
    return dataLocal;

    localStorage.setItem('local', dataLocal)

    localStorage.getItem('local')

});