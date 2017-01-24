// console.log('topics')
app.controller('TopicCtrl', function($scope, $http, cardFactory) {
  cardFactory.getList()
  .then((data)=> {
    $scope.topics = data.topics;
    // console.log($scope.topic)
})

  let getPin = function (uid, boardid, url, title) {

    let pin = {
      "uid": "",
      "url": "",
      "title": ""
    };
  }
})
