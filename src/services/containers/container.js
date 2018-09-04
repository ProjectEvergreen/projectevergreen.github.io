import { LitElement, html } from '@polymer/lit-element';
import css from './container.css';
class Container extends LitElement {
  constructor() {
    super();

  }
  _render() {
    return html`
      <style>
        ${css}
      </style>
    <div>This is an example of animation to be applied:
    <div class="Loader">Loading...</div>
    
    </div>
    `;
  }
}
customElements.define('x-container', Container);