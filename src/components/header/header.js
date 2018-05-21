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

        <a href="https://github.com/ProjectEvergreen" target="_blank" rel="noopener">github</a> |
        <a href="https://twitter.com/PrjEvergreen" target="_blank" rel="noopener">twitter</a> 
    
      </header>
    `;
  }
}

customElements.define('pe-header', Header);