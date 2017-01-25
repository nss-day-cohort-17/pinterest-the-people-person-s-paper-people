
app.controller('CardsCtrl', function($scope, $http, cardFactory) {
  cardFactory.getList()
  .then((data)=> {
    $scope.topicCard = data.topics;
  })
})
// added md-icon config

app.config(function($mdIconProvider){
  $mdIconProvider.fontSet('md', 'material-icons')
})

// app.controller('CardsCtrl' function())
