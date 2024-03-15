---
title: "Q&A 11"
categories:
- "help-page-category-faq"
- "help-page-subcategory-faq"
layout: help-detail
language: en
displayed_sidebar: tutorialSidebar
---

<h2>How can I change the automation rules for metadata creation of my <i>Theme</i>?</h2>

The metadata configuration defines which metadata data managers need to provide for all data sets associated with a theme. The metadata configuration contains autofill rules and default values, which you can use to automate metadata entry almost entirely. An automated workflow performs service publishing and data transformation as a background process that does not require any user interaction. The automated workflow responds to events including data and configuration updates and transformations. More information on automation can be found <a href="../../references/themes/2018-04-04-reference-themes-automation">this section</a> of our documentation.

Metadata can still be updated after the creation of the dataset. Once the changes in the respective theme's metadata editor are done, they can be applied for a dataset by using the "Fill automatically" buttons on the dataset's metadata section.

However, different rules apply: 
* If an autofill rule is changed, all values are changed accordingly. 
* If a default rule is changed, existing values are not changed, whether they are based on an auto-dated default rule or inserted manually. 
* A new configured default value is entered, if the metadata field was previously empty. 

Detailed information on how to apply the automation rules for metadata creation in a theme can be found in <a href="../../setup-hc/edit-metadata-config/2015-02-10-theme-edit-metadata">this section</a> of our documentation.

