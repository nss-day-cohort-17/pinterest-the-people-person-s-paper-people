// will load boards automatically
app.controller('CardsCtrl', function($scope, $http, cardFactory) {

   cardFactory.getList()
   .then((data)=> {


    $scope.topicCard = data.topics;
     console.log($scope.topics)

	 })
})
 added md-icon config
