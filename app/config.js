console.log('config')

app.config(($routeProvider, $locationProvider, $mdIconProvider)=> {
    $locationProvider.hashPrefix('');
    $mdIconProvider.fontSet('md', 'material-icons')
    $routeProvider
    .when('/', {
      controller: 'LoginCtrl',
      templateUrl: '/partials/login.html'
    })
    .when('/cards', {
      controller: 'CardsCtrl',
      templateUrl: '/partials/cards.html'
    })
    .when('/boards', {
      controller: 'BoardsCtrl',
      templateUrl: 'partials/boards.html'
    })
    .otherwise({redirectTo: '/' })
})
