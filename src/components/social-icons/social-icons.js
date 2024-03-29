import { html, LitElement } from 'lit-element';
import css from './social-icons.css?type=css';
import githubIcon from '../icons/github-icon.js';
import twitterIcon from '../icons/twitter-icon.js';
import slackIcon from '../icons/slack-icon.js';

class SocialIcons extends LitElement {
  render() {
    const socialUrls = {
      github: 'https://github.com/ProjectEvergreen',
      slack: 'https://join.slack.com/t/thegreenhouseio/shared_invite/enQtMzcyMzE2Mjk1MjgwLTU5YmM1MDJiMTg0ODk4MjA4NzUwNWFmZmMxNDY5MTcwM2I0MjYxN2VhOTEwNDU2YWQwOWQzZmY1YzY4MWRlOGI',
      twitter: 'https://twitter.com/PrjEvergreen'
    };

    return html`
      <style>
        ${css}
      </style>

      <a class="icons"
        href="${socialUrls.github}"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="open github page"
        @onclick="getOutboundLink('${socialUrls.github}'); return false;"
      >${githubIcon}</a>

      <a href="${socialUrls.slack}"
        class="icons slack-icon"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="slack"
        @onclick="getOutboundLink('${socialUrls.slack}'); return false;"
      >${slackIcon}</a>

      <a class="icons"
        href="${socialUrls.twitter}"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="open twitter page"
        @onclick="getOutboundLink('${socialUrls.twitter}'); return false;"
      >${twitterIcon}</a>
    `;
  }
}

customElements.define('eve-social-icons', SocialIcons);
