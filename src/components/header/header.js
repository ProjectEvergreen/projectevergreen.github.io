import { html, render } from 'lit-html';
import css from './header.css';

class Header extends HTMLElement {
  constructor() {
    super();
    
    this.root = this.attachShadow({ mode: 'closed' });
    render(this.template(), this.root);
  }

  template() {
    return html`
      <style>
        ${css}
      </style>
      
      <header>        

        <h2 class="header-text">Project Evergreen</h2>
    
      </header>
    `;
  }
}

customElements.define('pe-header', Header);