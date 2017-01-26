console.log('factory')

app.factory('cardFactory', function($http) {
  return {
    getList : ()=> {
      return $http
      .get('https://pintrest-app.firebaseio.com/pin/.json')
      .then(function(data) {
        //console.log(data)
        return data
      })
      .catch(()=> {
        alert('failed to load')
      })
    }
  }
})
