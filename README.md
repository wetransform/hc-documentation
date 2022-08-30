### Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

# Migrating Remaining Documents
In order to migrate a document from the old documentation website, the following transformations are required:
- Include similar documents within the same folder. Create the same file structure for other languages. (e.g. German)
- Insert the [closing tag](#use-assets--images) for `img` elements. Use this `(<img("[^"]*"|[^\/">])*)>` regex to retrieve them, and `$1/>` to apply the fix.
- Transform `img` `src` attribute to use [dynamic imports](#use-assets--images). Use `src=("(?:[^"\/]*\/)*([^"]+)")` to retrieve those instances and `src={require($1).default}` to apply the fix.
- Replace inline styles with [JSX compliant styles](#use-inline-styles). Use `style="(([\w.-]+:\s*[^\s;]\s;?\s*)*)"` to retrieve inline styles.
- Replace custom HTML components with Docusaurus built-in ones. See [this section](#use-docusaurus-built-in-components).

*Note*: To find and replace the text using the regular expressions suggested above, the Code Editor built-in Find & Replace feature can be used. Place the search and the replace regular expressions in the Find and the Replace boxes respectively. This feature can also be used with filters, so filtering the search to the documents folders might be useful.

# Writing Markdown Documents
Before writing Markdown documents, in addition to conforming to the Markdown rules (e.g. indentation), please consider the following points as it's required to write only valid documents.

### Write a Document & Support Internationalization
When writing a document, include the english version in the `docs/` folder. And include its equivalent valid document written in a different language (e.g. German) in `i18n/<locale>/docusaurus-plugin-content-docs/current/` where locale is the language code, e.g. `de`.

In order to group similar documents under the same dropdown in the website sidebar, simply include them in the same folder. Futher limitless nested structure can be created to make a dropdown containing more dropdowns in it for instance.

### Reference Documents
Documents can be referenced with relative paths. For instance, the reference is in a document within the folder `a`, and it is referencing a document within the folder `b`, then the path `../b/doc` can be used in an anchor element as `<a href="../b/create-dataset">Create a dataset</a>`.

Note: the above relative referencing scheme works with the user configured `locale` accordingly. i.e. it will reference the English version if the user is using the English locale, and vice versa.

### Use Assets & Images
In order to include an image in the document, use the `<img/>` tag, and make sure:
- The image tag is properly closed, e.g. `<img src="example.png" />` is valid. But `<img src="example.png" >` is not. (notice the closing tag `/>`)
- Reference the images using this format: `<img src={require("image-path").default} />`, where `image-path` is relative to the `static` folder.
  
  In this the following example, we're going to reference a logo image located in `static/images/brand/`: 
  ```md
  <img src={require("images/brand/logo.png").default} />
  ```
  Referencing assets like this guarantees valid file paths when using a different locale base endpoint (e.g. `/de`), since each locale has its own application.

### Conform to the JSX Syntax

#### Use Inline Styles
Using styles in documents has to be consistent with JSX syntax, thus `<span style="font-size: 8px;">` is not valid. Instead use `<span style={{fontSize: "8px"}}>`.
Usually for a valid JSX inline styling, remove the dash and camel-case the property, e.g. background-color becomes backgroundColor. (Read on JSX inline styling [here](https://www.w3schools.com/react/react_css.asp))

#### Use className Keyword
In order to add a class to a specific HTML element, use `className` keyword instead of `class`.

### Use Docusaurus Built-in Components
Docusaurus provides multiple components that can be used, such as warning/danger cards, etc. They are easy to use, and are compatible with the theme. See the full list [here](https://docusaurus.io/docs/markdown-features).

### Add Navigation for New Content
When new documents are added, they won't appear in the sidebar until they are added to the `sidebar.js` file. See [the official documentation](https://docusaurus.io/docs/sidebar/items) for more details on this.

### Generate Translations
When new content is added, whether in `docs` folder or elsewhere, run `npm run docusaurus write-translations -- --locale [locale]` to generate translation entries from the new content. Fill those generated entries with the correct translations for that given locale.

<hr/>

# Technical Setup

## Requirements
- nodejs
- npm

## Testing Project Features

The following list specifies needed steps to test a certain feature and assumes that installation step is complete.
- View documentation: simply start the local [dev](#local-development) or [build](#serve-the-build) server
- i18n: either [start dev server in a given locale](#local-development) or [serve the build](#serve-the-build)
- Doc. Search: since local-search plugin works only for static files, this feature can be tested only after the build. Thus, [build the project](#build) then [serve the build](#serve-the-build).

## Installation

```
$ npm i
```

## Local Development
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

## Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Serve the build
Note: Build step is required for this to work.

```
$ npm run serve
```
This command starts a local server to serve the `build` folder and opens up a browser window.

## Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
