// retorna a diretiva do "planetas"
app.directive('planets', () => {
  return {
    restrict: 'EA',
    replace: true,
    template: `
      <div class="box alt">
        <div class="row uniform">
          <div class="4u" ng-repeat="planet in planets">
            <h3>{{ planet.name }}</h3>
          </div>
        </div>
      </div>`
  }
})
