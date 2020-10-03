import { html, LitElement } from 'lit-element';
import '../social-links-bar/social-links-bar';
import css from './header.css';
import '../components/social-icons/social-icons';
import evergreenLogo from '../assets/evergreen.svg';

class HeaderComponent extends LitElement {

  render() {
    return html`
      <style>
        ${css}
      </style>

      <header>
        <div id="brand-header">
          <div>
            <img src="${evergreenLogo}"  alt="project evergreen logo" />
          </div>
          <h2 class="header-text">
            Project Evergreen
          </h2>
        </div>
        <eve-social-icons></eve-social-icons>
      </header>
    `;
  }
}

customElements.define('x-header', HeaderComponent);
