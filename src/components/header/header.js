import { html, LitElement } from 'lit-element';
import '../social-links-bar/social-links-bar.js';
import css from './header.css?type=css';
import '../social-icons/social-icons.js';

class HeaderComponent extends LitElement {

  render() {
    return html`
      <style>
        ${css}
      </style>

      <header>
        <div id="brand-header">
          <div>
            <img src="/assets/evergreen.svg"  alt="project evergreen logo" height="60px" width="60px"/>
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
