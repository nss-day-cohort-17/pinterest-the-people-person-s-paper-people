console.log('topics')

app.controller('CardsCtrl', function($scope, $http) {
  $http.get('https://ppppproject-afa08.firebaseio.com/.json')
  .then(function(topics) {
    console.log(topics)
  })
})
