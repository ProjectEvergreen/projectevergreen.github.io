import { greenwoodPluginGoogleAnalytics } from '@greenwood/plugin-google-analytics';
import { greenwoodPluginImportCss } from '@greenwood/plugin-import-css';
import { greenwoodPluginPostCss } from '@greenwood/plugin-postcss';

const FAVICON_HREF = '/assets/favicon.ico';
const HANDLE = '@PrjEvergreen';
const META_DESCRIPTION = 'Project Evergreen\'s goal is to help everyone succeed in making a modern website or application using the latest in web standards and technologies.';

export default {
  title: 'Project Evergreen',

  meta: [
    { name: 'description', content: META_DESCRIPTION },
    { name: 'twitter:site', content: HANDLE },
    { name: 'twitter:creator', content: HANDLE },
    { property: 'og:title', content: 'Project Evergreen' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://projectevergreen.github.io' },
    { property: 'og:image', content: 'https://projectevergreen.github.io/assets/evergreen-logo.png' },
    { property: 'og:description', content: META_DESCRIPTION },
    { rel: 'shortcut icon', href: FAVICON_HREF },
    { rel: 'icon', href: FAVICON_HREF },
    { name: 'google-site-verification', content: 'KWcqT8r7R4bo7MjTwPtmAsZ079gqb7wAXeFkIJQJzs0' }
  ],

  plugins: [
    greenwoodPluginPostCss(),
    
    ...greenwoodPluginImportCss(),

    greenwoodPluginGoogleAnalytics({
      analyticsId: 'UA-147204327-2'
    })
  ]

};