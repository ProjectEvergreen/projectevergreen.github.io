import { greenwoodPluginGoogleAnalytics } from '@greenwood/plugin-google-analytics';
import { greenwoodPluginImportRaw } from '@greenwood/plugin-import-raw';
import { greenwoodPluginPostCss } from '@greenwood/plugin-postcss';
import { greenwoodPluginRendererPuppeteer } from '@greenwood/plugin-renderer-puppeteer';

export default {
  plugins: [
    greenwoodPluginPostCss(),
    greenwoodPluginImportRaw(),
    greenwoodPluginRendererPuppeteer(),
    greenwoodPluginGoogleAnalytics({
      analyticsId: 'UA-147204327-2'
    })
  ]
};