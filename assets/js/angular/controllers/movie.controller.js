// controller da view "movie"
app.controller('movieController', function($scope, $http, $routeParams) {
  // id do filme que se deseja ver os detalhes
  const id  = $routeParams.episodeId

  // configuracoes do request
  const request = {
    method   : 'GET',
    url      : url + `films/${id}`,
    cache    : true,
    dataType : 'jsonp'
  }

  // array que vai guardar os dados dos personagens vindos da api
  $scope.characters = []

  // array que vai guardar os dados dos veiculos vindos da api
  $scope.vehicles   = []

  // realiznado o request para buscar os dados, tratando caso haja erro
  $http(request).then((res) => {
    // o objeto "movie" vai receber os dados do filme vindos da api
    $scope.movie = res.data

    // passando em cada personagem que tem dentro do objeto do filme
    $scope.movie.characters.map(item => {
      // criando uma variavel de bloco para guardar o conteudo do personagem
      let character = {}

      // configuracoes do request do personagem
      let request = {
        method   : 'GET',
        url      : item,
        cache    : true,
        dataType : 'jsonp'
      }

      // realizando o request e guardando guardando o resultado vindo da api dentro do array de personagens
      $http(request).then((response) => $scope.characters.push( response.data ), (err) => console.log(err))
    })

    // passando em cada veiculo que tem dentro do objeto do filme
    $scope.movie.starships.map(item => {
      // criando um variavel de bloco para guardar o conteudo do veiculo
      let vehicle = {}

      // configuracoes do request do veiculo
      let request = {
        method   : 'GET',
        url      : item,
        cache    : true,
        dataType : 'jsonp'
      }

      // realizando o request e guardando guardando o resultado vindo da api dentro do array de veiculos
      $http(request).then((response) => $scope.vehicles.push( response.data ), (err) => console.log(err))
    })
  }, (err) => console.log(err))
})
