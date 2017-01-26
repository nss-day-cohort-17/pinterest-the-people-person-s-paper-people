console.log('RegisterForm')

// register controller
app.controller('RegisterCtrl', function ($scope, $location, regFactory) {

    $scope.register = () => {
        console.log('RegisterCtrl')
        regFactory.register($scope.email, $scope.password)
      .then((response) => {
        console.log('response')
        $location.url('/register')
      })
    }
})

// register factory
.factory('regFactory', ($q) => {
    return {
      register (email, pass) {
        return $q.resolve(firebase.auth().signInWithEmailAndPassword(email, pass))
      },

      getUserId () {
        return firebase.auth().currentUser.uid
      }
    }
  })
