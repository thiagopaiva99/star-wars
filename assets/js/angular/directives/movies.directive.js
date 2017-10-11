// retorna a diretiva do "filmes"
app.directive('movies', () => {
  return {
    restrict: 'EA',
    replace: true,
    template: `
      <div id="main">
        <div class="inner">
          <header>
            <h1>Star Wars<br /></h1>
            <p>Look here the movies list and characters info!</p>
          </header>
            <section class="tiles">
              <article class="" ng-repeat="movie in movies">
                <span class="image">
                  <img src="dist/images/sw.jpg" alt="" />
                </span>
                <a href="/#!/movie/{{ movie.episode_id }}">
                  <h2>{{ movie.title }}</h2>
                </a>
              </article>
            </section>
          </div>
        </div>`
  }
})
