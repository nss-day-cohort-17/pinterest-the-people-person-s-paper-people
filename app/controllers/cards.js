
app.controller('CardsCtrl', function($scope, $http, cardFactory) {
  cardFactory.getList()
  .then((data)=>{
    $scope.topicCard = data.topics;
  })

