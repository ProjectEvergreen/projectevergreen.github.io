import { LitElement, html } from 'lit-html-element';
import css from './social-links-bar.css';

class SocialLinksBar extends LitElement {

  render() {
    return html`
      <style>
        ${css}
      </style>
      
      <div>        

        <ul>
          <li class="github"><a href="https://github.com/ProjectEvergreen" class="github" target="_blank" rel="noopener"></a></li>
          <li class="twitter"><a href="https://twitter.com/PrjEvergreen" target="_blank" rel="noopener"></a></li>
        </ul>

      </div>
    `;
  }
}

customElements.define('pe-social-links-bar', SocialLinksBar);