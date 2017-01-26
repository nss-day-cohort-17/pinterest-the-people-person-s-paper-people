// console.log('topics')
app.controller('CardsCtrl', function($scope, $http, cardFactory) {
  cardFactory.getList()
  .then((data)=> {
    console.log(data)
    $scope.topics = data.data
    //console.log($scope.topics)
  })

  

  //$http.post('https://ppppproject-afa08.firebaseio.com/.json', JSON.stringify(pin))

})
