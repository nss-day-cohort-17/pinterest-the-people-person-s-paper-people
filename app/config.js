console.log('config')

app.config(($routeProvider, $locationProvider, $mdIconProvider)=> {
    $locationProvider.hashPrefix('');
    $mdIconProvider.fontSet('md', 'material-icons')
    $routeProvider
    .when('/', {
      controller: 'LoginCtrl',
      templateUrl: '/partials/login.html'
    })
    .when('/topics', {
      controller: 'TopicCtrl',
      templateUrl: '/partials/topics.html'
    })
    .when('/home', {
      controller: 'CardsCtrl',
      templateUrl: '/partials/cards.html'
    })
    .when('/pinBoard', {
      controller: 'BoardCtrl',
      templateUrl: '/partials/pinBoard.html'
    })
    .otherwise({redirectTo: '/' })
})
