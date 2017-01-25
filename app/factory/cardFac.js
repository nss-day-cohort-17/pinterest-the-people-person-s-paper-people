console.log('factory')

app.factory('cardFactory', function($http) {
  return {
    getList : ()=> {
      return $http
      .get('https://ppppproject-afa08.firebaseio.com/.json')
      .then(function(data) {
        //console.log(data.data)
        return data.data
      })
      .catch(()=> {
        alert('failed to load')
      })
    }
  }
})
