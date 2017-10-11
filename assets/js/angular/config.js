// constante de "dependencies" que o projeto necessita
const dependencies = [
  'ngRoute'
]

// variavel "app", que representa o projeto globalmente
var app = angular.module('sw', dependencies)

// url da api
const url = "https://swapi.co/api/"

// fazendo a configracao das rotas do projeto
app.config(( $routeProvider ) => {
    $routeProvider
        .when('/', { controller: 'moviesController', templateUrl: 'views/movies.html' })
        .when('/movie/:episodeId', { controller: 'movieController', templateUrl: 'views/movie.html' })
        .when('/about', { controller: 'aboutController', templateUrl: 'views/about.html' })
        .when('/characters', { controller: 'charactersController', templateUrl: 'views/characters.html' })
        .when('/planets', { controller: 'planetsController', templateUrl: 'views/planets.html' })
        .when('/starships', { controller: 'starshipsController', templateUrl: 'views/starships.html' })
        .when('/404', { controller: 'notFoundController', templateUrl: 'views/404.html' })
        .otherwise({ redirectTo: '/404' })
})
