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
        <!-- <nav>
          <ul>
            <li>Getting Started</li>
            <li>State of The Web</li>
            <li>About</li>
          </ul>
        </nav> -->
        <div class="content-banner">
          <p>The goal of <b class="project-name">Project Evergreen</b> is to provide clear, modern, and practical resources to those looking to build 
          modern, dynamic, performant, and <b><i>evergreen</i></b> web applications.
          
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
          <p>The project's motivations are rooted in the fundamental belief that when applications are written with <i>standards compliance</i> in mind, the experience for 
          users, developers, and businesses can be maximized for all involved.</p>
        </div>
       
        <!--
        <div class="content-body">
          <p>The web is moving towards a persistently progressive app development environment that supports shared values like:</p>

          <ul>
            <li>Having access to powerful language features like Web Components, ES Modules, and Classes that captures our preference for clean, component based development.</li>
            <li>Long-term, backwards compatibility support from the web platform itself and interoperability with the JavaScript ecosystem at large.</li>
            <li>Favoring the use of polyfills over frameworks, best practices, and modern UI patterns.</li>
            <li>Positive developer experiences to support rapid development by working with familiar development tools like Yarn, webpack, Babel, Redux, and more.</li>
          </ul>
        </div> -->

        <!-- <div class="content-banner">
          <p><b>Project Evergreen</b> is not a framework or library per se, there is nothing to install. As browsers continue to get faster and more robust, and as standards groups 
            are working on adding more features and capabilities to all the native web technologies, specifically to the capabilities of HTML, CSS and JavaScript.</p>
        </div>
       
        <div class="content-body">          
          <h3>Technical Goals</h3>
          <ul>
            <li>Evergreen tooling to support Evergreen browsers</li>
            <li>Modern JavaScript using ES2015+ (polyfills > frameworks)</li>
            <li>Modern CSS w/Flexbox and CSS Grid</li>
            <li>Web Components Driven Development with state management</li>
            <li>Functional UI Components w/declaritve templating</li>
            <li>Minimal Dependencies (polyfills > frameworks) and boilerplate</li>
            <li>Like with Polymer, "Use the Platform"</li>
            <li>Focus on Developer Experience for rapid development</li>
          </ul>

          <p>Ultimately, our apps need to please our users.  Project Evergreen believes that all apps should:</p>
  
          <h3>User Experience Goals</h3>
          <ul> 
            <li>Lower the barrier to entry for all users</li>
            <li>Only give users what they need, when they need it</li>
            <li>Drive engagement through runtime performance and responsiveness</li>
            <li>Operate with security and trust in mind</li>
          </ul>
        </div> -->

        <!-- <div class="content-banner">
        <p>Read more about what you can do in our <a href="https://github.com/ProjectEvergreen/project-evergreen/wiki" target="_blank" rel="noopener">wiki docs</a>,
          look at our <a href="https://github.com/ProjectEvergreen" target="_blank" rel="noopener">roadmap</a> for what we're working on, and checkout out 
          our <a href="https://github.com/ProjectEvergreen" target="_blank" rel="noopener">GitHub repos</a> which you can read, tinker with, and use yourself!</p>
        </div> -->

        <div class="content-footer">
          <p>Read more about what you can do in our <a href="https://github.com/ProjectEvergreen/project-evergreen/wiki" target="_blank" rel="noopener">wiki docs</a>,
          look at our <a href="https://github.com/ProjectEvergreen" target="_blank" rel="noopener">roadmap</a> for what we're working on, and checkout out 
          our <a href="https://github.com/ProjectEvergreen" target="_blank" rel="noopener">GitHub repos</a> which you can read, tinker with, and use yourself!</p>
        </div>
      <div>
    `;
  }
}

customElements.define('pe-home', Home);

// What

// Why 

// How

// readme updates
// - open for contributions - what to do with this?
// - pushing for features
// - inspiration

// <!-- <p><b>Project Evergreen</b> is not a framework or library per se, there is nothing to install. As browsers continue to get faster and more robust, and as standards groups 
// are working on adding more features and capabilities to all the native web technologies, specifically HTML, CSS and JavaScript, it makes sense to start betting on the web
// platform itself.</p>

// <p>Check out examples of components you can write today!</p>
//  -->

// <!-- <h3>State of the Web</h3>

// <p>With the current state of the web platform, we can now look to the web to give us a lot of the tooling and features we have often looked to libraries and 
// frameworks to help us with.<p>
  
// <p>The web is moving towards a persistently progressive app development environment that supports shared values like:</p>

// <ul>
//   <li>Having access to powerful language features like Web Components, ES Modules, and Classes that captures our preference for clean, component based development.</li>
//   <li>Long-term, backwards compatibility support from the web platform itself and interoperability with the JavaScript ecosystem at large.</li>
//   <li>Favoring the use of polyfills over frameworks, best practices, and modern UI patterns.</li>
//   <li>Positive developer experiences to support rapid development by working with familiar development tools like Yarn, webpack, Babel, Redux, and more.</li>
// </ul> -->

// <!-- <div class="section dark">
//   <h3>Technical Goals</h3>
//   <ul>
//     <li>Evergreen tooling to support Evergreen browsers</li>
//     <li>Modern JavaScript using ES2015+ (polyfills > frameworks)</li>
//     <li>Modern CSS w/Flexbox and CSS Grid</li>
//     <li>Web Components Driven Development with state management</li>
//     <li>Functional UI Components w/declaritve templating</li>
//     <li>Minimal Dependencies (polyfills > frameworks) and boilerplate</li>
//     <li>Like with Polymer, "Use the Platform"</li>
//     <li>Focus on Developer Experience for rapid development</li>
//   </ul>
// </div>

// <div class="section light">          
//   <h3>User Experience Goals</h3>
  
//   <p>Ultimately, our apps need to please our users.  Project Evergreen believes that all apps should:</p>
  
//   <ul> 
//     <li>Lower the barrier to entry for all users</li>
//     <li>Only give users what they need, when they need it</li>
//     <li>Drive engagement through runtime performance and responsiveness</li>
//     <li>Operate with security and trust in mind</li>
//   </ul>
// </div>

// </div> 

// <!-- <p>We can now look to the web more and more to provide teams with the capaiblites to develop with the same great developer experiences that have often been looked to 
// libraries and frameworks for to provide through custom, opinionated abstractions.<p>
//  -->
// <!-- <p>It's not about <i>rolling</i> your own, it's about <i>making it</i> your own.  <i>Reduse.  Reuse.  Recycle.</i></p> -->
