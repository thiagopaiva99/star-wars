// retorna a diretiva do "filme"
app.directive('movie', () => {
  return {
    restrict: 'EA',
    replace: true,
    template: `
      <div class="inner">
        <h1>{{ movie.title }}</h1>
        <span class="image main"><img src="dist/images/sw.jpg" alt="" /></span>
        <p>{{ movie.opening_crawl }}</p>

        <h1>Vehicles</h1>

        <section>
          <div class="box alt">
            <div class="row uniform">
              <div class="4u" ng-repeat="vehicle in vehicles">
                <h3>{{ vehicle.name }}</h3>
              </div>
            </div>
          </div>
        </section>

        <hr>

        <h1>Characters</h1>

        <characters></characters>
      </div>`
  }
})
