console.log('config')

app.config(($routeProvider, $locationProvider)=> {
    $locationProvider.hashPrefix('');
    $routeProvider
    .when('/', {
      controller: 'LoginCtrl',
      templateUrl: '/partials/login.html'
    })
    .when('/topics', {
      controller: 'TopicCtrl',
      templateUrl: '/partials/topics.html'
    })
    .when('/crds', {
      controller: 'CardsCtrl',
      templateUrl: '/partials/topics.html'
    })
    .otherwise({redirectTo: '/' })
})
