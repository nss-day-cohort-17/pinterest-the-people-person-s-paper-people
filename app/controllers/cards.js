app.config(($routeProvider, $locationProvider)=> {
    $locationProvider.hashPrefix('');
    $routeProvider
    .when('/', {
      controller: 'CardsCtrl',
      templateUrl: '/partials/cards.html'
    })
    .otherwise({redirectTo: '/' })
})


.controller('CardsCtrl', function() {
  console.log('blaaaah')
})
