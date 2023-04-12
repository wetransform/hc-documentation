---
title: "Create metadata"
categories:
- "help-page-category-datasetworkflow"
- "help-page-subcategory-datasetworkflowcreatemetadata"
layout: help-detail
language: en
---


hale»connect currently supports the creation of dataset metadata, without requiring the upload of associated data. The metadata only workflow is not available for service metadata.

## Create metadata only theme ##

To create a metadata only theme, follow this workflow as a logged in data manager or theme manager:

1. Go to &laquo;Themes&raquo; on the main toolbar
2. Go to &laquo;Create new theme&raquo; at the bottom of the theme list
3. Select "Don't inherit" to create a theme that is not based on an existing theme.
    * This will create a blank theme with no associated feature types.
4. Enter a name for your theme. Add a description and version number if desired.
5. In the next step, Add feature types, accept the default and click &laquo;Continue&raquo;.
6. In the final step, click &laquo;Create&raquo;.

The newly created theme is displayed. The toggle *Publish metadata only* on the theme overview page must be activated. Navigate to the Metadata section of the theme to configure metadata. For more information about configuring metadata, visit the [Edit metadata configuration](../../setup-hc/edit-metadata-config/2015-02-10-theme-edit-metadata) page.

## Create metadata ##

To create dataset metadata, follow this workflow as a logged in data manager or theme manager:

1. Go to &laquo;Data&raquo; on the main toolbar
2. Go to &laquo;Create new Data Set&raquo; at the bottom of the data set list
3. Select a metadata only theme to link to your data set.
4. Give your metadata file a name. This name should enable you to quickly und clearly identify the metadata in the system.
5. In the next step, enter any remaining metadata values required for publication. If your theme is configured to use existing metadata, add it in this step.
6.	In the final step, create and publish your metadata.
