const content = {
  home: [{
    title: 'Reduce',
    template: `
      <p>By leveraging more of the the web's native capabilities, application's can become more consistent, portable, and maintainable.  Reducing external dependencies
      and being more "vanilla" can also provide passive improvements to performance and security.</p>
      <br/>
      <img class="screenshot" src="/assets/wheel.jpg" loading="lazy"/>
      <p><i>Favor polyfills over frameworks, but don't re-invent the wheel if you don't need to.</i></p>
    `
  }, {
    title: 'Reuse',
    template: `
      <p>Component based development has become a widely adopted and pragmatic approach in modern web application development.</p>
      <br/>
      <p>Reuse is encouraged through the use of native "Web" components that look a lot like the components you may already be used to seeing and writing.</p>
      <br/>
      <a href="https://jsfiddle.net/thegreenhouseio/qjj9hvv9/1/" target="_blank" rel="noopener">
        <img class="screenshot" src="/assets/simple-component-example.jpg" loading="lazy"/>
      </a>
    `
  }, {
    title: 'Recycle',
    template: `<p>It should be clear, the JavaScript community and ecosystem is amazing and inspiring! There are so many wonderful tools and options out there, and that's what
      makes it so great. We always endorse using the right tool for the job, but favor those that promote positive choices around web standards.  <i>We often have more in common
      than we do apart</i>.</p>
      <br/>
      <img class="screenshot" src="/assets/community.png" loading="lazy"/>
    `
  }]
};

class ContentService {
  
  static getContent(key) {
    return content[key] ? content[key] : [];
  }
}

export default ContentService;