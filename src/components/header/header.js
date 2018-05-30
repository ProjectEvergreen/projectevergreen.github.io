import { LitElement, html } from 'lit-html-element';
import css from './header.css';

class Header extends LitElement {

  render() {
    return html`
      <style>
        ${css}
      </style>
      
      <header>        

        <h2 class="header-text">Project Evergreen (alpha)</h2>
    
      </header>
    `;
  }
}

customElements.define('pe-header', Header);