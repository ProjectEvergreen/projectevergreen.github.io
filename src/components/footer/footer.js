import { html, LitElement } from 'lit-element';
import css from './footer.css?type=css';

class FooterComponent extends LitElement {

  render() {
    return html`
      <style>
        ${css}
      </style>

      <footer>
        <a href="https://projectevergreen.github.io/">&copy; Project Evergreen ${new Date().getFullYear()}</a>
      </footer>
    `;
  }

}

customElements.define('x-footer', FooterComponent);
