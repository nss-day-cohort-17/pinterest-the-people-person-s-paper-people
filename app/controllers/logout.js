app.controller('LogoutCtrl',function($location, $scope, $window){
    $window.localStorage.clear();
    $location.path('/');
});