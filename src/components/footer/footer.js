import { html, LitElement } from 'lit-element';
import '../social-links-bar/social-links-bar';
import css from './footer.css';

class FooterComponent extends LitElement {

  render() {
    return html`
      <style>
        ${css}
      </style>
      
      <footer>     

        <pe-social-links-bar></pe-social-links-bar>
        <a href="https://projectevergreen.github.io/">&copy; Project Evergreen 2018</a>
        
      </footer>
    `;
  }
  
}

customElements.define('x-footer', FooterComponent);