import { LitElement, html } from 'lit-html-element';
import '../../components/carousel/carousel';
import css from './home.css';

const content = [{
  title: 'Reduce',
  template: html`<p>By leveraging the web platform itself, code can be more portable, maintainable, and compatible.  Reducing external dependencies
    and being more "vanilla" can also provide improvements to performance and security.  Our philosophy can be simplified as such: <i>polyfills over frameworks, but
    don't feel pressured to reinvent the wheel if you don't need to.</i></p>

    <!-- CTA -->
    <p>Read more about what you can do in our <a href="#">Wiki docs</a> or look at our <a href="">GitHub repos</a> for projects you 
    can read, tinker with, and use yourself!</p> `
}, {
  title: 'Reuse',
  template: html`<p>Component based development has become a widely adopted and pragmatic option for approaching UI development and lends itself nicely to
    modern web application development.  Reuse as a principal allows to write our own Web Components that look a lot like components you may 
    already be used to seeing and writing.</p>

    <!-- Code snippet -->

    <!-- CTA -->
    <p>Read more about what you can do in our <a href="#">Wiki docs</a> or look at our <a href="">GitHub repos</a> for projects you 
    can read, tinker with, and use yourself!</p>`
}, {
  title: 'Recycle',
  template: html`It should be clear, the JavaScript community and ecosystem is amazing and inspiring! There are so many wonderful tools and options out there, and that's what
    makes it so great.  You pick and choose what you need when you need  In fact, this project wouldn't be possible without the amazing work of tools like
    <b>Babel</b>, <b>postCSS</b>, and <b>webpack</b> so that there isn't a need to sacrifice developer experience for the goal of writing sustainable modern web
    applications.</p>`
}];

console.log('content', content); // eslint-disable-line

class Home extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <style>
        ${css}
      </style>

      <div class="view">
        <!-- <nav>
          <ul>
            <li>Getting Started</li>
            <li>State of The Web</li>
            <li>About</li>
          </ul>
        </nav> -->

        <div class="section light">
          <h3>Mission</h3>
          
          <p>The goal of <b>Project Evergreen</b> is to provide a resource to web application developers who are looking to build dynamic, performant, and <b><i>evergreen</i></b> (naturally) 
          web applications.  The project's motivations are rooted in the fundamental belief that when applications are written with standards complicane in mind, the experience for 
          users, developers, and businesses can be maximized for all parties equally.</p>

          <!-- <p>We can now look to the web more and more to provide teams with the capaiblites to develop with the same great developer experiences that have often been looked to 
          libraries and frameworks for to provide through custom, opinionated abstractions.<p>
           -->
          <!-- <p>It's not about <i>rolling</i> your own, it's about <i>making it</i> your own.  <i>Reduse.  Reuse.  Recycle.</i></p> -->
        </div>

        <div class="content-wrapper">
          <div>

          <pe-carousel>
            ${content[0].template}
          </pe-carousel>

          <!-- <p><b>Project Evergreen</b> is not a framework or library per se, there is nothing to install. As browsers continue to get faster and more robust, and as standards groups 
              are working on adding more features and capabilities to all the native web technologies, specifically HTML, CSS and JavaScript, it makes sense to start betting on the web
              platform itself.</p>

              <p>Check out examples of components you can write today!</p>
               -->

              <!-- <h3>State of the Web</h3>
              
              <p>With the current state of the web platform, we can now look to the web to give us a lot of the tooling and features we have often looked to libraries and 
              frameworks to help us with.<p>
                
              <p>The web is moving towards a persistently progressive app development environment that supports shared values like:</p>
              
              <ul>
                <li>Having access to powerful language features like Web Components, ES Modules, and Classes that captures our preference for clean, component based development.</li>
                <li>Long-term, backwards compatibility support from the web platform itself and interoperability with the JavaScript ecosystem at large.</li>
                <li>Favoring the use of polyfills over frameworks, best practices, and modern UI patterns.</li>
                <li>Positive developer experiences to support rapid development by working with familiar development tools like Yarn, webpack, Babel, Redux, and more.</li>
              </ul> -->

              <!-- <div class="section dark">
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
              </div>

              <div class="section light">          
                <h3>User Experience Goals</h3>
                
                <p>Ultimately, our apps need to please our users.  Project Evergreen believes that all apps should:</p>
                
                <ul> 
                  <li>Lower the barrier to entry for all users</li>
                  <li>Only give users what they need, when they need it</li>
                  <li>Drive engagement through runtime performance and responsiveness</li>
                  <li>Operate with security and trust in mind</li>
                </ul>
              </div>

            </div> -->
          </div>
        </div>
      <div>
    `;
  }
}

customElements.define('pe-home', Home);