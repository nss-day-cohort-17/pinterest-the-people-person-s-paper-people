
app.controller('TopicCtrl', function($scope, $http, cardFactory) {
  cardFactory.getList()
  .then((data)=>{
    $scope.topicCard = data.topics;
  })

  $scope.searchInput = ""
})
