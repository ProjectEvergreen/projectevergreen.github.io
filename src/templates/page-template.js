import { html, LitElement } from 'lit-element';
import 'component-simple-slider';
import '../components/header/header';
import '../components/footer/footer';
import ContentService from '../services/content-service';
import '../styles/theme.css';
import css from '../styles/home.css';

MDIMPORT;
METAIMPORT;
METADATA;

class PageTemplate extends LitElement {

  constructor() {
    super();

    this.content = ContentService.getContent('home');
  }

  generateSlotTemplate(item, index) {
    return html`<div slot="slide${index + 1}"><h3>${item.title}</h3> ${item.template}</div>`;
  }

  render() {
    return html`
      METAELEMENT

      <style>
        ${ css }
      </style>

      <div class="wrapper">

        <section>
          <x-header></x-header>
        </section>

        <section class="content">
          <entry></entry>

          <div>

            <div class="content-banner">
              <p>The goal of <b class="project-name">Project Evergreen</b> is to provide detailed, accessible, and practical resources to those looking to build
              modern, dynamic, performant, and <b><i>evergreen</i></b> web applications.</p>

              <br/>
              <br/>

              <span><i>With the rise of evergreen browsers, we see an opportunity for evergreen web applications, and we think that’s pretty cool!</i></span> 🤓
            </div>

            <div class="content-body">
              <x-simple-slider .slots=${this.content.length}>
                ${ this.content.map(this.generateSlotTemplate) }
              </x-simple-slider>
            </div>

            <div class="content-banner">
              <p>The project's motivations are rooted in the fundamental belief that when applications are written with standards compliance in mind, we can maximize the <i>experience</i> for
              users, developers, and businesses.</p>
            </div>

            <div class="content-footer">
              <h4><u>For more information:</u></h4>
              <br />
              <p>Read <a href="https://github.com/ProjectEvergreen/project-evergreen/wiki" target="_blank" rel="noopener">our docs and how you can get started!</a><p>

              <p>Review our <a href="https://github.com/ProjectEvergreen/project-evergreen/milestones" target="_blank" rel="noopener">roadmap</a> and help contribute</a> to our project!</p>

              <p>For code and starter apps, checkout our <a href="https://github.com/ProjectEvergreen" target="_blank" rel="noopener">GitHub repos</a> which you can read,
              tinker with, and try out yourself!</p>
            </div>
            <x-footer></x-footer>
          <div>
        </section>

        <!-- <section>
          <x-footer></x-footer>
        </section> -->

      </div>
    `;
  }
}

customElements.define('page-template', PageTemplate);
