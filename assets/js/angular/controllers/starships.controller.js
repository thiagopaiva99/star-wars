// controller da view "starships"
app.controller('starshipsController', function($scope, $http) {
  // configuracoes do request
  const request = {
    method   : 'GET',
    url      : url + 'starships',
    cache    : true,
    dataType : 'jsonp'
  }

  // realiznado o request para buscar os dados, tratando caso haja erro
  $http(request).then((res) => $scope.starships = res.data.results, (err) => console.log(err))
})
