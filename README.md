[![CC BY-SA 4.0][cc-by-sa-shield]][cc-by-sa]

### Documentation for [hale»connect](https://wetransform.to/haleconnect/)

This documentation is built as a website using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

This work is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License][cc-by-sa].

[cc-by-sa]: http://creativecommons.org/licenses/by-sa/4.0/
[cc-by-sa-image]: https://licensebuttons.net/l/by-sa/4.0/88x31.png
[cc-by-sa-shield]: https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg

# Writing Markdown Documents
Before writing Markdown documents, in addition to conforming to the Markdown rules (e.g. indentation), please consider the following points as it's required to write only valid documents.

### Write a Document & Support Internationalization
When writing a document, include the english version in the `docs/` folder. And include its equivalent valid document written in a different language (e.g. German) in `i18n/<locale>/docusaurus-plugin-content-docs/current/` where locale is the language code, e.g. `de`.

In order to group similar documents under the same dropdown in the website sidebar, simply include them in the same folder. Futher limitless nested structure can be created to make a dropdown containing more dropdowns in it for instance.

### Reference Documents
Documents can be referenced with relative paths. For instance, the reference is in a document within the folder `a`, and it is referencing a document within the folder `b`, then the path `../b/doc` can be used in an anchor element as `<a href="../b/create-dataset.md">Create a dataset</a>` or `[Create a dataset](../b/create-dataset.md)`. Using the `.md` file extension is optional in this case.

Note: the above relative referencing scheme works with the user configured `locale` accordingly. i.e. it will reference the English version if the user is using the English locale, and vice versa.

### Reference Sections of a Document
Sections of a document can also be referenced. Docusaurus generates automatically heading identifiers for each heading to be used in section references. e.g. A `Hello World` heading will have a `hello-world` identifier. In order to reference its section, the anchor `[Go to HW Section](#hello-world)` can be used. 

This same section can also be referenced from another file with `[Go to HW Section](./hw-file#hello-world)`. Notice that in this case, adding `.md` is not allowed and will break the reference. 

Additionally, a custom heading identifier can be defined, e.g. `### Hello World {#my-explicit-id}`.

The full documentation on this can be found [here](https://docusaurus.io/docs/next/markdown-features/toc#heading-ids).

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

### Useful Components
#### Collapsable Sections
Any content can be made collapsable with the help of the `details` HTML element. Wrap whatever content as follows:

```
<details>
<summary>Title for the collapsed section</summary>

[content goes here]

</details>
```
Note: the feature was discovered through a SO post [here](https://stackoverflow.com/questions/60827828/docusaurus-v2-collapsible-section-in-markdown). ([demo here](https://gist.github.com/joyrexus/16041f2426450e73f5df9391f7f7ae5f))

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
