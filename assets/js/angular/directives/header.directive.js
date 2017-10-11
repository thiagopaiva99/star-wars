// retorna a diretiva do "cabecalho"
app.directive('customheader', () => {
  return {
    restrict: 'EA',
    replace: true,
    template: `
        <div class="inner">
            <a href="/#!/" class="logo">
              <span class="title">Star Wars</span>
            </a>
            <nav>
              <ul>
                <li><a href="#menu">Menu</a></li>
              </ul>
            </nav>
        </div>`
  }
})
