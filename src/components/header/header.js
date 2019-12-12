import { html, LitElement } from 'lit-element';
import '../social-links-bar/social-links-bar';
import css from './header.css';
import '../components/social-icons/social-icons';

class HeaderComponent extends LitElement {

  render() {
    return html`
      <style>
        ${css}
      </style>

      <header>

        <h2 class="header-text">
          Project Evergreen
        </h2>
        <eve-social-icons></eve-social-icons>
      </header>
    `;
  }
}

customElements.define('x-header', HeaderComponent);
