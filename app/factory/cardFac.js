console.log('factory')

app.factory('cardFactory', function($http) {
  return {
    getList : ()=> {
      return $http
      .get('https://ppppproject-afa08.firebaseio.com/.json')
      .then(function(data) {
        console.log(data)
        return data
      })
      .catch(()=> {
        alert('failed load')
      })
    },
    // setPin : () => {
    //   .put('https://ppppproject-afa08.firebaseio.com/boards')
    // }
  }
})
