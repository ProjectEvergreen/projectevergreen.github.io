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
      makes it so great. You pick and choose what you need when you need it.  In fact, it is the open source JavaScript community that inspires us so much.  We all have more in common
      than we do apart. ❤️</p>
      <br/>
      <img class="screenshot" src="/assets/community.png" loading="lazy"/>
      <p>We don't believe in sacrificing any experiences in the pursuit of writing modern web sites and apps.  Where there is a will, there is a way. ✌️</p>
    `
  }]
};

class ContentService {
  
  static getContent(key) {
    return content[key] ? content[key] : [];
  }
}

export default ContentService;