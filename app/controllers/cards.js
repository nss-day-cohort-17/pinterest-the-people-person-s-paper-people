// will load boards automatically

app.controller('CardsCtrl', function($scope, $http, cardFactory) {
  cardFactory.getList()
  .then((data)=> {
    console.log(data)
    $scope.topics = data.data
    //console.log($scope.topics)
  })
})