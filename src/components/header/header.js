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

        <h2 class="header-text">Project Evergreen 
          <a href="https://github.com/ProjectEvergreen/project-evergreen/milestone/1" target="_blank" rel="noopener">(alpha)</a>
        </h2>
        <pe-social-links-bar></pe-social-links-bar>
    
      </header>
    `;
  }
}

customElements.define('pe-header', Header);