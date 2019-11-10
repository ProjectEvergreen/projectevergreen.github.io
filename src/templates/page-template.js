import { html, LitElement } from 'lit-element';
import '../components/header/header';
import '../components/footer/footer';
import '../styles/theme.css';

MDIMPORT;
METAIMPORT;
METADATA;

class PageTemplate extends LitElement {

  constructor() {
    super();
  }

  render() {
    return html`
      
      METAELEMENT

      <div class="wrapper">

        <section>
          <x-header></x-header>
        </section>

        <section class="content">
          <entry></entry>
        </section>

        <section>
          <x-footer></x-footer>
        </section>

      </div>
    `;
  }
}

customElements.define('page-template', PageTemplate);