console.log('factory')

app.factory('cardFactory', function($http) {
  return {
    getList : ()=> {
      return $http
      .get('')
      .then(function(data) {
        console.log(data)
        return data
      })
      .catch(()=> {
        alert('failed load')
      })
    }
  }
})
