---
title: "Questions and answers on hale»connect"
categories:
- "help-page-category-faq"
- "help-page-subcategory-faq"
layout: help-detail
language: en
---

<h2>Why are no <i>FeatureTypes</i> assigned to a theme that was created together with a new schema?</h2>

When working with large schemas, it is possible that the schema creation workflow runs into a timeout. 
In such cases, an empty theme can be created during schema creation because the automated assignment of the schema's feature types does not work.
You can view a theme's associated feature types in the theme's 'Feature types' section. Themes with no feature types should display a yellow warning banner at the top of the page. 
If there are no feature types displayed, the creation did not work as expected. 

In order to generate the expected configuration, you can use the '+ Add new type' button and add all feature types from the schema you created.

<img src={require().default}/>

In order to avoid that behavior: It is recommended to create big schemas including theme creation using Google Chrome.
