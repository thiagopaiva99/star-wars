// controller da view "movies"
app.controller('moviesController', function($scope, $http) {
  // configuracoes do request
  const request = {
    method   : 'GET',
    url      : url + 'films',
    cache    : true,
    dataType : 'jsonp'
  }

  // realiznado o request para buscar os dados, tratando caso haja erro
  $http(request).then((res) => $scope.movies = res.data.results, (err) => console.log(err))
})
