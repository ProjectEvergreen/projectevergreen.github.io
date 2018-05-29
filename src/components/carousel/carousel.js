// import css from './header.css';
import { LitElement, html } from 'lit-html-element';
// import css from './header.css';

class Carousel extends LitElement {
  constructor() {
    super();
    
    this._content = [{ template: '' }];
    this.activeIndex = 0;
  }

  static get properties() {
    return {
      uppercase: {
        type: Array,
        attrName: 'content'
      }
    };
  }

  render() {
    console.log('carousel content render', this.content); // eslint-disable-line

    return html`
      <div>
        <slot>Slide 1</slot>
      </div>
    `;
  }
}

customElements.define('pe-carousel', Carousel.withProperties());