const pluginGoogleAnalytics = require('@greenwood/plugin-google-analytics');
const pluginImportCss = require('@greenwood/plugin-import-css');
const pluginPostCss = require('@greenwood/plugin-postcss');

const FAVICON_HREF = '/assets/favicon.ico';
const HANDLE = '@PrjEvergreen';
const META_DESCRIPTION = `The goal of Project Evergreen is to provide detailed, accessible, and practical resources 
to those looking to build modern, dynamic, performant, and evergreen web applications.`;

module.exports = {
  title: 'Project Evergreen',

  meta: [
    { name: 'description', content: META_DESCRIPTION },
    { name: 'twitter:site', content: HANDLE },
    { name: 'twitter:creator', content: HANDLE },
    { property: 'og:title', content: 'Project Evergreen' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://projectevergreen.github.io' },
    { property: 'og:image', content: 'https://s3.amazonaws.com/uploads.thegreenhouse.io/project-evergreen/logo.png' },
    { property: 'og:description', content: META_DESCRIPTION },
    { rel: 'shortcut icon', href: FAVICON_HREF },
    { rel: 'icon', href: FAVICON_HREF },
    { name: 'google-site-verification', content: 'rntZgfyG-5qkalTU3qnTEwZnhfJXIhFofM-wiM2Ym6I' }
  ],

  plugins: [
    pluginPostCss(),
    
    ...pluginImportCss(),

    pluginGoogleAnalytics({
      analyticsId: 'UA-117350131-2'
    })
  ]

};