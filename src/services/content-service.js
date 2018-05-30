import { html } from 'lit-html-element';

const content = {
  home: [{
    title: 'Reduce',
    template: html`
      <p>By leveraging more of the the web's native capabilities, application's can become more consistent, portable, and maintainable.  Reducing external dependencies
      and being more "vanilla" can also provide passive improvements to performance and security.</p>
      <br/>
      <p><i>Favor polyfills over frameworks, but don't re-invent the wheel if you don't need to.</i></p>
    `
  }, {
    title: 'Reuse',
    template: html`
      <p>Component based development has become a widely adopted and pragmatic approach for modern web application development.</p>
      <br/>
      <p>Reuse as a principal allows for native "Web" components that end up looking a lot like components you may already be used to seeing and writing.</p>
      <br/>
      <a href="https://jsfiddle.net/thegreenhouseio/qjj9hvv9/1/" target="_blank" rel="noopener">
        <img class="screenshot" src="https://s3.amazonaws.com/uploads.thegreenhouse.io/project-evergreen/simple-component-example.jpg"/>
      </a>
    `
  }, {
    title: 'Recycle',
    template: html`<p>It should be clear, the JavaScript community and ecosystem is amazing and inspiring! There are so many wonderful tools and options out there, and that's what
      makes it so great. You pick and choose what you need when you need it.  In fact, this project wouldn't be possible without the amazing work of tools like
      <b>Babel</b>, <b>postCSS</b>, and <b>webpack</b>. ❤️</p>
      <br/>
      <p>We believe in not sacrificing developer experience for the goal of writing sustainable, modern web applications. ✌️</p>
    `
  }]
};

class ContentService {
  
  static getContent(key) {
    return content[key] ? content[key] : [];
  }
}

export default ContentService;