# projectevergreen.github.io
[![GitHub release](https://img.shields.io/github/tag/ProjectEvergreen/projectevergreen.github.io.svg)](https://github.com/ProjectEvergreen/projectevergreen.github.io/tags)
![CircleCI branch](https://img.shields.io/circleci/project/github/RedSparr0w/node-csgo-parser/master.svg?style=plastic)
[![GitHub issues](https://img.shields.io/github/issues-raw/ProjectEvergreen/projectevergreen.github.io.svg)](https://github.com/ProjectEvergreen/projectevergreen.github.io/issues)
[![GitHub issues](https://img.shields.io/github/issues-pr-raw/ProjectEvergreen/projectevergreen.github.io.svg)](https://github.com/ProjectEvergreen/projectevergreen.github.io/issues)
[![GitHub license](https://img.shields.io/badge/license-Apache%202-blue.svg)](https://raw.githubusercontent.com/ProjectEvergreen/projectevergreen.github.io/master/LICENSE.md)

## Development
Make sure you have [NodeJS](https://nodejs.org/) and [Yarn](https://yarnpkg.com/en/) installed.

### Workflows
Tasks to get you going working on this project:
- `yarn build` - build the app for production
- `yarn develop` - develop locally with live reload
- `yarn serve` - build the app and serve it locally (good for quick demos / debugging)

> _All PRs will have Netlify deploy previews setup and uses GitHub Actions for running all PRs through a Continuos Integration build._

### Misc
- Visual Studio Code has [an extenstion to support lit-html](https://marketplace.visualstudio.com/items?itemName=bierner.lit-html)

## Release Management
This project is managed as a GitHub page using [GitHub Actions](https://github.com/marketplace/actions/deploy-to-github-pages) to deploy it.  Everything should happen automatically on each merge into master.