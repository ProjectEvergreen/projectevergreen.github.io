import { greenwoodPluginGoogleAnalytics } from '@greenwood/plugin-google-analytics';
import { greenwoodPluginImportCss } from '@greenwood/plugin-import-css';
import { greenwoodPluginPostCss } from '@greenwood/plugin-postcss';

export default {
  prerender: true,

  plugins: [
    greenwoodPluginPostCss(),
    
    ...greenwoodPluginImportCss(),

    greenwoodPluginGoogleAnalytics({
      analyticsId: 'UA-147204327-2'
    })
  ]
};