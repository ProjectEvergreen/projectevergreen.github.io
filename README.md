# project-evergreen.thegreenhouse.io
Website repository written as an "evergreen" project.

## Development
Make sure you have [NodeJS](https://nodejs.org/) and [Yarn](https://yarnpkg.com/en/) installed.

### Workflows
Tasks to get you going working on this project:
- `yarn build` - build the app for production
- `yarn develop` - develop locally with live reload
- `yarn serve` - build the app and serve it locally (good for quick demos / debugging)

### Misc
- Visual Studio Code has [an extenstion to support lit-html](https://marketplace.visualstudio.com/items?itemName=bierner.lit-html)

## Release Management
Default branch is `develop` and all code is deployed from the `master` branch, as per GitHub restrictions.  There are
two environments for the site:
* **project-evergreen.thegreenhouse.io (stage)**: hosted in AWS, builds off the `develop` branch
* **projectevergreen.github.io (prod)**: hosted as a GitHub page, build off the `master` branch

To release:
1. Make sure all changes to be released have gone into the `develop` branch
1. Merge everything into `master` branch
1. Run `yarn release:prod`
1. Commit the changes and push to `master`

**DO NOT MERGE BACK INTO DEVELOP!!**