// controller da view "planets"
app.controller('planetsController', function($scope, $http) {
  // configuracoes do request
  const request = {
    method   : 'GET',
    url      : url + 'planets',
    cache    : true,
    dataType : 'jsonp'
  }

  // realiznado o request para buscar os dados, tratando caso haja erro
  $http(request).then((res) => $scope.planets = res.data.results, (err) => console.log(err))
})
