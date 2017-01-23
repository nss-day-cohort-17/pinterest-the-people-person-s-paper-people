console.log('topics')

app.controller('TopicCtrl', function($scope, cardFactory) {
  cardFactory.getList()
  .then((data)=> {
    console.log(data.data)
  })
})
