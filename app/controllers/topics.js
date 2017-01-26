app.controller('TopicCtrl', function($scope, $http, cardFactory) {
  cardFactory.getList()
  .then((data)=>{
    $scope.topicCard = data.topics;
  })

    // $http.post('https://ppppproject-afa08.firebaseio.com/.json', JSON.stringify(pinCard))
  })
