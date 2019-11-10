import { html, LitElement } from 'lit-element';
import '../social-links-bar/social-links-bar';
import css from './header.css';

class HeaderComponent extends LitElement {

  render() {
    return html`
      <style>
        ${css}
      </style>
      
      <header>        

        <h2 class="header-text">
          <a href="https://github.com/ProjectEvergreen/project-evergreen/" target="_blank" rel="noopener">Project Evergreen</a>
        </h2>
        <x-social-links-bar></x-social-links-bar>
    
      </header>
    `;
  }
}

customElements.define('x-header', HeaderComponent);