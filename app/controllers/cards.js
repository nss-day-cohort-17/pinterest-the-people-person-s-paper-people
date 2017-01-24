
app.controller('CardsCtrl', function($scope, $http) {
  $http
  .put(`https://ppppproject-afa08.firebaseio.com/boards`)
})

// added md-icon config

app.config(function($mdIconProvider){
  $mdIconProvider.fontSet('md', 'material-icons')
})
