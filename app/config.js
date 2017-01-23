console.log('config')

app.config(($routeProvider, $locationProvider)=> {
    $locationProvider.hashPrefix('');
    $routeProvider
    .when('/', {
      controller: 'LoginCtrl',
      templateUrl: '/partials/login.html'
    })
    .otherwise({redirectTo: '/' })
})
