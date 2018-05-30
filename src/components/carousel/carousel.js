import { LitElement, html } from 'lit-html-element';
import css from './carousel.css';

class Carousel extends LitElement {
  constructor() {
    super();
    
    this.slots = 0;
    this.activeIndex = 0;
  }

  static get properties() {
    return {
      activeIndex: {
        type: Number,
        attrName: 'activeIndex'
      },
      slots: {
        type: Number,
        attrName: 'slots'
      }
    };
  }

  generateCarouselContent() {
    return new Array(this.slots).fill(null).map((item, index) => {
      const isActiveSlot = index === this.activeIndex ? 'active-slot' : 'slot';

      return html`
        <div class$="${isActiveSlot}"><slot name$="slide${index + 1}"></slot>
      `;
    });
  }

  generateCarouselNavigation() {
    return new Array(this.slots).fill(null).map((item, index) => {
      const isActiveSlot = index === this.activeIndex ? 'active-slot' : 'slot';

      return html`
        <li class$="${isActiveSlot}" onclick=${() => this.setActiveIndex(index) }>o</li>
      `;
    });
  }

  setActiveIndex(index) {
    this.activeIndex = index;
  }

  render() {
    return html`
      <style>
        ${css}
      </style>

      <div>
        ${ this.generateCarouselContent() }

        <ul>
          ${ this.generateCarouselNavigation() }
        </ul>
      </div>
    `;
  }
}

customElements.define('pe-carousel', Carousel.withProperties());