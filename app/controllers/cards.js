
app.controller('CardCtrl', function($scope, $http, cardFactory) {
  cardFactory.getList()
  .then((data)=> {
    $scope.topics = data.topics;
    // console.log($scope.topic)

})

// app.controller('CardsCtrl' function())
