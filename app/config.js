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
    .when('/cards', {
      controller: 'CardsCtrl',
      templateUrl: '/partials/cards.html'
    })
    .otherwise({redirectTo: '/' })
})
