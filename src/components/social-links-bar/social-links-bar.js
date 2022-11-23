import { html, LitElement } from 'lit-element';
import css from './social-links-bar.css?type=css';

class SocialLinksBarComponent extends LitElement {

  render() {
    return html`
      <style>
        ${css}
      </style>
      
      <div>        

        <ul>
          <li class="github"><a href="https://github.com/ProjectEvergreen" class="github" target="_blank" rel="noopener"></a></li>
          <li class="twitter"><a href="https://twitter.com/PrjEvergreen" target="_blank" rel="noopener"></a></li>
          <li class="slack">
            <a href="https://join.slack.com/t/thegreenhouseio/shared_invite/enQtMzcyMzE2Mjk1MjgwLTFkNzY2NDQwOTg0MjRiYmY1ZDYyOGE1YzM0ZmQwNTgxZWI0NWU0YmYxZDhkNDQ3Y2Q3ODhjZTdiMTEwNzY5MTk" 
              target="_blank" rel="noopener"></a>
          </li>
        </ul>

      </div>
    `;
  }
}

customElements.define('x-social-links-bar', SocialLinksBarComponent);