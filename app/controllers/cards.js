// will load boards automatically
app.controller('CardsCtrl', function($scope, $http, cardFactory, $mdDialog) {
	cardFactory.getList()
  .then((data)=>{
    // $scope.topicCard = data.topics;
  })
   // $scope.textInputShow = false;
   // $scope.createBoardClick = () => {
   // 		textInputShow = true
   // }
   // $scope.textInput = ""
   // console.log($scope.textInput)
})
