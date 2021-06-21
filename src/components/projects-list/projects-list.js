const projects = [{
  name: 'Greenwood',
  description: 'A modern and performant static site generator supporting Web Component based development.',
  image: '/assets/projects/greenwood-logo-500w.png',
  github: 'ProjectEvergreen/greenwood',
  website: 'https://www.greenwoodjs.io/'
}, {
  name: 'Evergreen Web Components',
  description: 'A component library bsaed on modern Web (Component) standards.',
  image: '/assets/evergreen.svg',
  github: 'hutchgrant/evergreen-web-components',
  website: 'https://evergreen-wc.hutchdev.ca/docs'
}, {
  name: 'Contributary',
  description: 'Helping connect open source with the open source community.',
  image: '/assets/projects/contributary.png',
  github: 'ContributaryCommunity/www.contributary.community',
  website: 'https://www.contributary.community/'
}];

const projectsList = projects.map(project => {
  const { description, image, github, website, name } = project;

  return `
    <article class="card">
      
      <h1>${name}</h1>
      <div class="card-img-top">
        <img src="${image}" alt="${name}" loading="lazy"/>
      </div>
      
      <p>${description}</p>
      
      <a href="${website}" title="${name} Website">
        <img 
          src="https://img.shields.io/github/stars/${github}.svg?style=social&logo=github&label=github" 
          alt="${name} GitHub badge"
          class="github-badge"
          loading="lazy"/>
      </a>
    </article>
  `;
}).join('');

const template = document.createElement('template');

template.innerHTML = `
  <style>
    article {
      margin-bottom: 25px;
    }
    
    .card {
      position: relative;
      display: flex;
      flex-direction: column;
      min-width: 0;
      word-wrap: break-word;
      background-color: #fff;
      background-clip: initial;
      border: 1px solid rgba(0,0,0,.125);
      border-radius: .25rem;
      box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    }

    .card p {
      text-align: center;
      font-size: 1rem;
      padding: 5px;
    }
    
    .card .card-img-top {
      background-size: cover;
      background-position-x: center;
      background-position-y: center;
    }

    .card .card-img-top img {
      width: 200px;
      max-width: 200px;
    }
  </style>

  ${projectsList}
`;

class ProjectsListComponent extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('app-projects-list', ProjectsListComponent);