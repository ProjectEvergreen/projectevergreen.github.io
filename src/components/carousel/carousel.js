import { LitElement, html } from 'lit-html-element';
import css from './carousel.css';

class Carousel extends LitElement {
  constructor() {
    super();
    
    this._content = [{ template: '' }];
    this.activeIndex = 0;
  }

  static get properties() {
    return {
      slots: {
        type: Number,
        attrName: 'slots'
      }
    };
  }

  // TODO do this with lit-html ideall4
  generateCarouselContent() {
    let slotsContainerElement = document.createElement('div');

    for (let i = 1; i < this.slots; i += 1) {
      const isActiveSlot = i - 1 === this.activeIndex ? 'active-slot' : 'slot';
      let slotContainer = document.createElement('div');
      let slot = document.createElement('slot');
      
      slotContainer.classList.add(isActiveSlot);
      slot.setAttribute('name', `slide${i + 1}`);

      slotContainer.appendChild(slot);
      slotsContainerElement.appendChild(slotContainer);
    }

    return slotsContainerElement;
  }

  generateCarouselNavigation() {
    let slotNavigationElement = document.createElement('ul');

    for (let i = 1; i < this.slots; i += 1) {
      let navItem = document.createElement('li');

      navItem.textContent = `Nav Item ${i}`;
      slotNavigationElement.appendChild(navItem);
    }

    Array(4).map(i => {
      console.log('inside', i); // eslint-disable-line
    });
    
    return slotNavigationElement;
  }

  render() {
    return html`
      <style>
        ${css}
      </style>

      <div>
        ${ this.generateCarouselContent() }

        ${ this.generateCarouselNavigation() }
      </div>
    `;
  }
}

customElements.define('pe-carousel', Carousel.withProperties());