import { LitElement, html } from '@polymer/lit-element';
import 'component-simple-slider';
import ContentService from '../../services/content-service';
import css from './home.css';

class HomePage extends LitElement {
  constructor() {
    super();

    this.content = ContentService.getContent('home');
  }

  generateSlotTemplate(item, index) {
    return html`<div slot="slide${index + 1}"><h3>${item.title}</h3> ${item.template}</div>`;
  }

  _render() {
    return html`
      <style>
        ${css}
      </style>

      <div id="view">
        <div class="content-banner">
          <p>The goal of <b class="project-name">Project Evergreen</b> is to provide detailed, accessible, and practical resources to those looking to build 
          modern, dynamic, performant, and <b><i>evergreen</i></b> web applications.</p>
          
          <br/>
          <br/>

          <span><i>With the rise of evergreen browsers, we see an opportunity for evergreen web applications, and we think that’s pretty cool!</i></span> 🤓
        </div>
       
        <div class="content-body">
          <x-simple-slider slots$=${this.content.length}>
            ${ this.content.map(this.generateSlotTemplate) }
          </x-simple-slider>
        </div>

        <div class="content-banner">
          <p>The project's motivations are rooted in the fundamental belief that when applications are written with standards compliance in mind, we can maximize the <i>experience</i> for 
          users, developers, and businesses.</p>
        </div>

        <div class="content-footer">
          <h4><u>For more information:</u></h4>
          <p>Read <a href="https://github.com/ProjectEvergreen/project-evergreen/wiki" target="_blank" rel="noopener">our docs and how you can get started!</a><p>
          
          <p>Review our <a href="https://github.com/ProjectEvergreen/project-evergreen/milestones" target="_blank" rel="noopener">roadmap</a> and help contribute</a> to our project!</p>
          
          <p>For code and starter apps, checkout our <a href="https://github.com/ProjectEvergreen" target="_blank" rel="noopener">GitHub repos</a> which you can read, 
          tinker with, and try out yourself!</p>
        </div>
      <div>
    `;
  }
}

customElements.define('x-home-page', HomePage);