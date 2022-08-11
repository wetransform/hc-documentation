### Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Requirements
- nodejs
- npm

### Testing Project Features

The following list specifies needed steps to test a certain feature and assumes that installation step is complete.
- View documentation: simply start the local [dev](#local-development) or [build](#serve-the-build) server
- i18n: either [start dev server in a given locale](#local-development) or [serve the build](#serve-the-build)
- Doc. Search: since local-search plugin works only for static files, this feature can be tested only after the build. Thus, [build the project](#build) then [serve the build](#serve-the-build).

### Installation

```
$ npm i
```

### Local Development
Start the project in the default locale (English, in this case)
```
$ npm start
```

Start the project in another locale
```bash
$ npm start -- --locale [locale]
$ npm start -- --locale de # for German locale
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Serve the build
Note: Build step is required for this to work.

```
$ npm run serve
```
This command starts a local server to serve the `build` folder and opens up a browser window.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
