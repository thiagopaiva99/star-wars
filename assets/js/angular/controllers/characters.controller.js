// controller da view "characters"
app.controller('charactersController', function($scope, $http) {
  // configuracoes do request
  const request = {
    method   : 'GET',
    url      : url + `people`,
    cache    : true,
    dataType : 'jsonp'
  }

  // array que vai guardar os dados vindos da api
  $scope.characters = []

  // realiznado o request para buscar os dados, tratando caso haja erro
  $http(request).then((res) => $scope.characters = res.data.results, (err) => console.log(err))
})
