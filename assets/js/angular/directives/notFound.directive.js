// retorna a diretiva do "404"
app.directive('notfound', () => {
  return {
    restrict: 'EA',
    replace: true,
    template: `
      <div id="main">
        <div class="inner" style="text-align: center !important;">
          <h1>404</h1>
          <h2>This page can not be found.</h2>
          <a href="/#!/">Return to home</a>
        </div>
      </div>`
  }
})
