import { LitElement, html } from 'lit-html-element';
import '../social-links-bar/social-links-bar';
import css from './footer.css';

class Footer extends LitElement {

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

customElements.define('pe-footer', Footer);