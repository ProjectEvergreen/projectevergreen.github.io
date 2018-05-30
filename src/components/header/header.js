import { LitElement, html } from 'lit-html-element';
import '../social-links-bar/social-links-bar';
import css from './header.css';

class Header extends LitElement {

  render() {
    return html`
      <style>
        ${css}
      </style>
      
      <header>        

        <h2 class="header-text">
          <a href="https://github.com/ProjectEvergreen/project-evergreen/" target="_blank" rel="noopener">Project Evergreen</a>
        </h2>
        <pe-social-links-bar></pe-social-links-bar>
    
      </header>
    `;
  }
}

customElements.define('pe-header', Header);