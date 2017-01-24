// console.log('topics')

app.controller('TopicCtrl', function($scope, $http) {
  $http.get('https://ppppproject-afa08.firebaseio.com/.json')
  .then(function(topics) {
    // console.log(topics)
  $scope.topicCards = topics.data.topics
  console.log($scope.topicCards)
  })
})
