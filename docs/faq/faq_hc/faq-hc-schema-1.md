---
title: "Q&A 13"
categories:
- "help-page-category-faq"
- "help-page-subcategory-faq"
layout: help-detail
language: en
displayed_sidebar: tutorialSidebar
---

<h2>The Schema location has changed. What do I need to do, what do I have to do in order to ensure that my dataset will still be validated?</h2>

The validation engine in in hale»connect for the validation of the datasets reads out the location of the schema of the feature types. 
The basis is the schema information that is configured in the theme and not the schema referred to in the GML-dataset. 
Thus, if the schema location in hale»connect changes, an error during the dataset validation occurs. 

This error can be fixed using the following workflow:
- Create a new schema in hale»connect
- Exchange the feature types of the theme; Select the feature types of the new created schema
- Now the validation should work as expected
Republishing the services is only required, if the data has changed. 
