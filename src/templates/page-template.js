import { html, LitElement } from 'lit-element';

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

      <section class="wrapper">

        <div class="content">
          <entry></entry>
        </div>

      </section>
    `;
  }
}

customElements.define('page-template', PageTemplate);