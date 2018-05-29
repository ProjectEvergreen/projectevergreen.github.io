import { html } from 'lit-html-element';

const content = {
  home: [{
    title: 'Reduce',
    template: html`<p>By leveraging the web platform itself, code can be more portable, maintainable, and compatible.  Reducing external dependencies
      and being more "vanilla" can also provide improvements to performance and security.  Our philosophy can be simplified as such: <i>polyfills over frameworks, but
      don't feel pressured to reinvent the wheel if you don't need to.</i></p>`
  }, {
    title: 'Reuse',
    template: html`<p>Component based development has become a widely adopted and pragmatic option for approaching UI development and lends itself nicely to
      modern web application development.  Reuse as a principal allows to write our own Web Components that look a lot like components you may 
      already be used to seeing and writing.</p>
  
      <!-- Code snippet -->`
  }, {
    title: 'Recycle',
    template: html`It should be clear, the JavaScript community and ecosystem is amazing and inspiring! There are so many wonderful tools and options out there, and that's what
      makes it so great.  You pick and choose what you need when you need  In fact, this project wouldn't be possible without the amazing work of tools like
      <b>Babel</b>, <b>postCSS</b>, and <b>webpack</b> so that there isn't a need to sacrifice developer experience for the goal of writing sustainable modern web
      applications.</p>`
  }]
};

class ContentService {
  
  static getContent(key) {
    return content[key] ? content[key] : [];
  }
}

export default ContentService;