// retorna a diretiva dos "personagens"
app.directive('characters', () => {
  return {
    restrict: 'EA',
    replace: true,
    template: `
          <section>
      			<div class="box alt">
      				<div class="row uniform">
      					<div class="6u" ng-repeat="character in characters">
                  <h3>{{ character.name }}</h3>

                  <div class="table-wrapper">
            				<table class="alt">
            					<thead>
            						<tr>
            							<th>Height</th>
            							<th>Mass</th>
            							<th>Hair</th>
                          <th>Skin</th>
                          <th>Eyes</th>
                          <th>Birth Year</th>
            						</tr>
            					</thead>
            					<tbody>
            						<tr>
            							<td>{{ character.height }}</td>
            							<td>{{ character.mass }}</td>
            							<td>{{ character.hair_color }}</td>
                          <td>{{ character.skin_color }}</td>
                          <td>{{ character.eye_color }}</td>
                          <td>{{ character.birth_year }}</td>
            						</tr>
            					</tbody>
            				</table>
            			</div>

                  <hr>
                </div>
      				</div>
      			</div>
      		</section>
      `
  }
})
