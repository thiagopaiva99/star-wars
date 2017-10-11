// retorna a diretiva das "naves"
app.directive('starships', () => {
  return {
    restrict: 'EA',
    replace: true,
    template: `
      <div class="box alt">
        <div class="row uniform">
          <div class="4u" ng-repeat="starship in starships">
            <h3>{{ starship.name }}</h3>
          </div>
        </div>
      </div>`
  }
})
