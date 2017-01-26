console.log('boardCtrl')
app.controller('BoardCtrl', function($scope, $http){
$scope.newPin = function () {
      console.log('new pin button clicked')
      let pinCard = {
          "title": $scope.title,
          "boardid": $scope.boardid,
          "url": $scope.url
      }
      console.log(pinCard)
      $http.post('https://pintrest-app.firebaseio.com/pin/.json', JSON.stringify(pinCard))
    }
})
