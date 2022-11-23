import { greenwoodPluginGoogleAnalytics } from '@greenwood/plugin-google-analytics';
import { greenwoodPluginImportCss } from '@greenwood/plugin-import-css';
import { greenwoodPluginPostCss } from '@greenwood/plugin-postcss';
import { greenwoodPluginRendererPuppeteer } from '@greenwood/plugin-renderer-puppeteer';

export default {
  plugins: [
    greenwoodPluginPostCss(),
    greenwoodPluginImportCss(),
    greenwoodPluginRendererPuppeteer(),
    greenwoodPluginGoogleAnalytics({
      analyticsId: 'UA-147204327-2'
    })
  ]
};