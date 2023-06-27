---
title: "Q&A 9"
categories:
- "help-page-category-faq"
- "help-page-subcategory-faq"
layout: help-detail
language: en
displayed_sidebar: tutorialSidebar
---

<h2>The <i>schema</i> location has changed. What do I need to do, so my dataset will validate?</h2>

When validating datasets in hale»connect, the Schema locations of the feature types, which are referenced from the respective schema, are used. The basis for this validation is the schema information that the theme relates to and not the schema of the GML dataset. 


If the schema location changes, an error in the dataset validation occurs. This error can be fixed using the following workflow. 
* Create schema with new schema location.
* Exchange the feature types of the theme.
* Now the validation should work as expected. 
* Republishing the services is only required, if the data has changed. 
