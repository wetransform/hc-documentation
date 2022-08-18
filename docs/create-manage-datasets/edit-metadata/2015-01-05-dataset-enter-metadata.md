---
title: "Edit metadata for a data set"
categories:
- "help-page-category-datasetworkflow"
- "help-page-subcategory-datasetworkfloweditmetadata"
layout: help-detail
language: en
---

Editing metadata can be a time-consuming and sometimes tiresome process. For this reason, the system allows automation of about 95% of the process. The remaining fields still have to be filled manually, or edited. Please keep the following hints in mind when manually editing metadata:

* Your input has to be in the correct format. Some fields will allow any kind of text, while others expect numbers, web links, e-mail addresses, JSON objects or Well-Known-Text (WKT) objects. The round symbols to the left of each input indicate which type of input the system expects. When you hover over these symbols, you'll get more information.
* Some fields may be set more than once. To set multiple values, e.g. on &laquo;Keywords&raquo;, click the &laquo;+&raquo; button below the input field. To remove a field again, click the remove symbol right next to the field.
* When you edit metadata for any existing data set, each change is saved by the system as soon as you press enter or go to another field. The system indicates this by showing a green border and checkmark on the modified input.

To edit metadata, follow these steps:

1. Go to &laquo;Data&raquo; on the main toolbar
1. Pick the data set from the resource list for which you'd like to edit metadata
1. Go to &laquo;Metadata&raquo;
1. Enter required and optional metadata for your dataset or services. Open one of the metadata categories by clicking on the title or the chevron.<img src={require("/images/help/en/dataset_edit_metadata.png").default} alt="" title="Editing data set metadata" className="img-responsive img-inline-help"/>
1. Provide a value for any field marked with a red symbol. You can also edit existing values.
    * Red symbols turn green once required metadata has been entered, and the number of missing required metadata elements is updated in the category header.
1. Close the category again and proceed with the next category
1. When values referenced by auto-fill rules have been changed or updated, the «Fill automatically» button will update the values in the metadata. For example: You update the address of your organization in the organisation profile settings. You have referenced the organization address in an auto-fill rule and you want the updated address to appear in your metadata. The «Fill automatically» button can be used to update the metadata fields.

It is necessary to re-publish services to view the updated values in the metadata.
