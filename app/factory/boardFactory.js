app.factory('toJSONFactory', function($http) {
	let boardInfo = {
      "uid": "uid",
      "boardid": "boardid",
      "title": title
      // "url": "url",
    }

	return {
		getBoard : () =>
			return $http.get('https://ppppproject-afa08.firebaseio.com/boards')
			.then(function(value) {
				console.log(value)
			})
	}
})
