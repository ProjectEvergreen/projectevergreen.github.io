import { LitElement, html } from 'lit-html-element';
import ContentService from '../../services/content-service';
import '../../components/carousel/carousel';
import css from './home.css';

class Home extends LitElement {
  constructor() {
    super();

    this.content = ContentService.getContent('home');
  }

  generateSlotTemplate(item, index) {
    return html`<div slot="slide${index + 1}"><h3>${item.title}</h3> ${item.template}</div>`;
  }

  render() {
    return html`
      <style>
        ${css}
      </style>

      <div id="view">
        <div class="content-banner">
          <p>The goal of <b class="project-name">Project Evergreen</b> is to provide clear, modern, and practical resources to those looking to build 
          modern, dynamic, performant, and <b><i>evergreen</i></b> web applications.</p>
          
          <br/>
          <br/>

          <span><i>This is not another framework or library per se, we're just really excited and passionate about the current state of Web APIs and what can be done with them.</i> 🤓</span>
        </div>
       
        <div class="content-body">
          <pe-carousel slots$=${this.content.length}>
            ${ this.content.map(this.generateSlotTemplate) }
          </pe-carousel>
        </div>

        <div class="content-banner">
          <p>The project's motivations are rooted in the fundamental belief that when applications are written with standards compliance in mind, we can maximize the <i>experience</i> for 
          users, developers, and businesses.</p>
        </div>

        <div class="content-footer">
          <h4><u>For more information:</u></h4>
          <p>Read <a href="https://github.com/ProjectEvergreen/project-evergreen/wiki" target="_blank" rel="noopener">our docs and how you can get started!</a><p>
          
          <p>Review our <a href="https://github.com/ProjectEvergreen/project-evergreen/milestones" target="_blank" rel="noopener">roadmap</a> and help contribute</a> to our project!</p>
          
          <p>For code and starter apps, checkout out our <a href="https://github.com/ProjectEvergreen" target="_blank" rel="noopener">GitHub repos</a> which you can read, 
          tinker with, and try out yourself!</p>
        </div>
      <div>
    `;
  }
}

customElements.define('pe-home', Home);