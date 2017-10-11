// retorna a diretiva do "menu"
app.directive('menu', () => {
  return {
    restrict: 'EA',
    replace: true,
    template: `
        <ul>
          <li><a href="/#!/">Home</a></li>
          <li><a href="/#!/about">About Star Wars</a></li>
          <li><a href="/#!/characters">Characters</a></li>
          <li><a href="/#!/planets">Planets</a></li>
          <li><a href="/#!/starships">Starships</a></li>
        </ul>`
  }
})
