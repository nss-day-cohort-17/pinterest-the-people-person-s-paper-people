// console.log('topics')

app.controller('TopicCtrl', function($scope, $http, cardFactory) {
  cardFactory.getList()
  .then((data)=> {
    console.log(data.data)
    console.log($scope.topics = data.data.topics);
  })

  let getPin = function (uid, boardid, url, title) {

    let pin = {
      "uid": 
      "boardid": boardid,
      "url": 
      "title": title
    }
  }
  $http.post('https://ppppproject-afa08.firebaseio.com/.json', JSON.stringify(pin))
})
