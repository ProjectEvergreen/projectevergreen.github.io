// const pluginGoogleAnalytics = require('./packages/plugin-google-analytics/src/index');

const META_DESCRIPTION = 'Website for Project Evergreen.';
// const FAVICON_HREF = '/assets/favicon.ico';

module.exports = {
  title: 'Project Evergreen',
  meta: [
    { name: 'description', content: META_DESCRIPTION },
    { name: 'twitter:site', content: '@PrjEvergreen' },
    { property: 'og:title', content: 'Project Evergreen' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://projectevergreen.github.io' },
    // { property: 'og:image', content: 'https://s3.amazonaws.com/hosted.greenwoodjs.io/greenwood-logo.png' },
    { property: 'og:description', content: META_DESCRIPTION }
    // { rel: 'shortcut icon', href: FAVICON_HREF },
    // { rel: 'icon', href: FAVICON_HREF }
    // { name: 'google-site-verification', content: '4rYd8k5aFD0jDnN0CCFgUXNe4eakLP4NnA18mNnK5P0' }
  ],
  plugins: [
    // ...pluginGoogleAnalytics({
    //   analyticsId: 'UA-147204327-1'
    // }),
  ]
};