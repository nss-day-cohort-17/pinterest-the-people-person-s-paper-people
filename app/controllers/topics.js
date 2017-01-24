// console.log('topics')
app.controller('TopicCtrl', function($scope, $http, cardFactory, boardFactory) {
  cardFactory.getList()
  .then((data)=> {
    $scope.topics = data.topics;
    // console.log($scope.topic)
    boardFactory.
  })
})
