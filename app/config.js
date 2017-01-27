console.log('config')


app.config(($routeProvider, $locationProvider, $mdIconProvider)=> { 
  
  // firebase auth
firebase.initializeApp({
    apiKey: "AIzaSyBNVYJAHD5iy2Kp5lB_Cgrs2Y-qaWvH3mo",
    authDomain: "ppppproject-afa08.firebaseapp.com",
    databaseURL: "https://ppppproject-afa08.firebaseio.com",
    storageBucket: "ppppproject-afa08.appspot.com",
    messagingSenderId: "390130747860"
    })


//   // sending register info to firebase
// firebase.auth().createUserWithEmailAndPassword(email, password)
//     .catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   if (errorCode == 'auth/weak-password') {
//     alert('The password is too weak.');
//   } else {
//     alert(errorMessage);
//   }
//   console.log(error);
// });


// checking for auth
const checkForAuth = {
      checkForAuth ($location) {
        const authReady = firebase.auth().onAuthStateChanged(user => {
          authReady()
          if (!user) {
            $location.url('/')
          }
        })
      }
    }

    $locationProvider.hashPrefix('');
    $mdIconProvider.fontSet('md', 'material-icons')
    $routeProvider
    .when('/', {
      controller: 'LoginCtrl',
      templateUrl: '/partials/login.html'
    })
    // .when('/topics', {
    //   controller: 'TopicCtrl',
    //   templateUrl: '/partials/topics.html'
    // })
    .when('/logout', {
      controller: 'LogoutCtrl',
      templateUrl: 'partials/login.html'
    })
    .when('/home', {
      controller: 'CardsCtrl',
      templateUrl: '/partials/cards.html'
    })
    .when('/pinBoard', {
      controller: 'BoardCtrl',
      templateUrl: '/partials/pinBoard.html'
    })
    .when('/register', {
      controller: 'RegisterCtrl',
      templateUrl: '/partials/register.html'
    })
    .otherwise({redirectTo: '/' })
})
