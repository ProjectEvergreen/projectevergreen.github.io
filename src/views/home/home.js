import { html, render } from 'lit-html';
import css from './home.css';

class Home extends HTMLElement {
  constructor() {
    super();

    this.root = this.attachShadow({ mode: 'closed' });    
    render(this.template(), this.root);
  }

  template() {
    return html`
      <style>
        ${css}
      </style>

      <div class="view">

        <div class="section light">
          <h3>Mission</h3>
          
          <p>The mission of <b>Project Evergreen</b> is to provide a web application blueprint for building dynamic, performant, and evergreen (naturally) web applications that 
          are designed to be easy to understand and intuitive to use by both users and developers.</p>

        </div>

        <div class="section dark">
          <h3>Motivations</h3>
          
          <p>The project's motivations are rooted in the fundamental belief that applications should be as standards compliant as possible to maximize the experience 
          for users, developers, and businesses.</p>
          
          <p>Of course we want great user experiences, but we consider that a given as a fundamental result of the time and effort 
          we put into developing our applications in the first place.</p>
        </div>

        <div class="section light">
          <h3>State of the Web</h3>
          
          <p>With the current state of the web platform, we can now look to the web to give us a lot of the tooling and features we have often looked to libraries and 
          frameworks to help us with.<p>
            
          <p>The web is moving towards a persistently progressive app development environment that supports shared values like:</p>
          
          <ul>
            <li>Having access to powerful language features like Web Components, ES Modules, and Classes that captures our preference for clean, component based development.</li>
            <li>Long-term, backwards compatibility support from the web platform itself and interoperability with the JavaScript ecosystem at large.</li>
            <li>Favoring the use of polyfills over frameworks, best practices, and modern UI patterns.</li>
            <li>Positive developer experiences to support rapid development by working with familiar development tools like Yarn, webpack, Babel, Redux, and more.</li>
          </ul>
        </div>

        <div class="section dark">
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

      </div>
    `;
  }
}

customElements.define('pe-home', Home);