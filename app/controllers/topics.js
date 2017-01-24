// console.log('topics')
app.controller('TopicCtrl', function($scope, $http, cardFactory) {
  cardFactory.getList()
  .then((data)=> {
    $scope.topicCard = data.topics;
    // console.log($scope.topic)
  })
})
//   let getPin = function (uid, boardid, url, title) {

//     let pin = {
//       "uid": uid,
//       "boardid": boardid,
//       "url": url,
//       "title": title
//     }
//   }
//   $http.post('https://ppppproject-afa08.firebaseio.com/.json', JSON.stringify(pin))
// }
