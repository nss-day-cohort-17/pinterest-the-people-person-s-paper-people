// console.log('topics')
app.controller('TopicCtrl', function($scope, $http, cardFactory) {
  cardFactory.getList()
  .then((data)=> {
    console.log(data)
    console.log($scope.topics = data.topics);
  })

  let getPin = function (uid, boardid, url, title) {

    let pin = {
      "uid": "",
      "url": "",
      "title": ""
    };
  }

  //$http.post('https://ppppproject-afa08.firebaseio.com/.json', JSON.stringify(pin))

})
