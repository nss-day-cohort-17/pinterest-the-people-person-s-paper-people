
app.controller('CardCtrl', function($scope, $http, cardFactory) {
  cardFactory.getList()
  .then((data)=> {
    $scope.topics = data.topics;
    console.log($scope.topics)

	})
})

// app.controller('CardsCtrl' function())
