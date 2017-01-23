app.config(($routeProvider, $locationProvider)=> {
    $locationProvider.hashPrefix('');
    $routeProvider
    .when('/', {
      controller: 'LoginControllerCtrl',
      templateUrl: '/partials/loginController.html'
    })
    .otherwise({redirectTo: '/' })
})
