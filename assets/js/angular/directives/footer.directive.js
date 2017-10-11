// retorna a diretiva do "rodape"
app.directive('subfooter', () => {
  return {
    template: `
      <footer id="footer">
        <div class="inner">
          <section>
            <h2>Get in touch</h2>
            <form method="post" action="#">
              <div class="field half first">
                <input type="text" name="name" id="name" placeholder="Name" />
              </div>
              <div class="field half">
                <input type="email" name="email" id="email" placeholder="Email" />
              </div>
              <div class="field">
                <textarea name="message" id="message" placeholder="Message"></textarea>
              </div>
              <ul class="actions">
                <li><input type="submit" value="Soon" disabled class="special" /></li>
              </ul>
            </form>
          </section>
          <section>
            <h2>Follow Me</h2>
            <ul class="icons">
              <li><a href="https://www.facebook.com/thiago.paivagalvani" target="_blank" class="icon style2 fa-facebook"><span class="label">Facebook</span></a></li>
              <li><a href="https://www.instagram.com/thiagopaiva21/" target="_blank" class="icon style2 fa-instagram"><span class="label">Instagram</span></a></li>
              <li><a href="https://www.github.com/thiagopaiva99" target="_blank" class="icon style2 fa-github"><span class="label">GitHub</span></a></li>
            </ul>
          </section>
          <ul class="copyright">
            <li>MIT Licensed</li><li>Design: <a href="https://thiagopaiva99.github.io" target="_blank">thiagopaiva99</a></li>
          </ul>
        </div>
      </footer>
      `
  }
})
