---
title: "Metadata"
categories:
- "help-page-category-reference"
- "help-page-subcategory-reference-themes"
layout: help-detail
language: en
sidebar_position: 2

---

The Metadata section of a theme provides configuration settings for metadata.

The Dataset name pattern field allows you to define an autofill rule for the dataset name. Autofill rules enable the automatic generation of metadata through the use of variables. To create an autofill rule, click in the Dataset name pattern field. The Autofill assistant appears in the top right corner. Click on a value in the Autofill assistant to insert the autofill rule.

For example, you may want to automatically assign the value in a schema element as the dataset name. In the Autofill Assistant, navigate to File Analysis, and next, to Attribute Values. Select the schema element that contains the dataset name in your dataset. During dataset creation, the dataset name is automatically populated by the value in the dataset.

The Metadata Editor displays Dataset metadata and Service metadata configurations. You can toggle freely between the tabs to view your entries in the editor.

In the Dataset metadata section, you have three options, listed in the dropdown menu:

  *	Use metadata editor: Select this option to let hale connect generate the metadata. To define how hale connect should generate the metadata, the system provides a special-purpose text editor. The default metadata configuration displays INSPIRE compliant metadata elements.
  * Republish existing metadata: Select this option to upload your existing metadata file during data set creation.
  * Link to existing metadata: Select this option to provide a link to your metadata file during data set creation.

Select the metadata language in the dropdown menu. All official European Union languages are supported.

The Show metadata editor on data set creation toggle switch enables you to control where metadata is entered:

  * Toggle switch is active: Display the metadata editor during data set creation.
  * Toggle switch is deactivated: Don’t display the metadata editor during data set creation. Deactivating the editor means that users don’t have any control over metadata in the initial dataset creation, but can still later on go to the data set -> metadata section to edit the generated metadata.

Visit the [Edit metadata configuration](../../setup-hc/edit-metadata-config/2015-02-10-theme-edit-metadata.md) documentation for more information.

Click the “Save” button to save any changes to the metadata configurations.
