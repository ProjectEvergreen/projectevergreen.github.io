import { LitElement, html } from 'lit-html-element';
import '../header/header';
import '../footer/footer';
import '../../views/home/home';
import css from './app.css';

// TOOD component MUST be transpiled with native Class syntax intact? need to check browser support
// https://stackoverflow.com/questions/39037489/extending-htmlelement-constructor-fails-when-webpack-was-used
class App extends LitElement {

  render() {
    return html`
      <style>
        ${css}
      </style>

      <div id="container">

        <section>
          <pe-header></pe-header>
        </section>
        
        <section>
          <pe-home></pe-home>
        </section>

        <section>
          <pe-footer></pe-footer>
        </section>

      </div>
    `;
  }
}

customElements.define('pe-app', App);