---
title: "Create theme"
categories:
- "help-page-category-setup-haleconnect"
- "help-page-subcategory-setup-haleconnect-themecreate"
layout: help-detail
language: en

---

A theme is a re-usable configuration object used to define common settings for data set metadata, service publishing and transformation. The theme manager manages themes and the associated schemas and transformation projects.

The process for the creation of a theme is typically:

1.	Create Schema
2.	Upload transformation project
3.	Create theme
4.	Edit theme

Once you have created the schema and transformation project, follow these steps as a logged in theme manager or organisation superuser to create a new theme:

1. Go to &laquo;Themes&raquo;
2. Go to &laquo;Create new theme&raquo; at the bottom of the theme list
3. Select base theme. In the first step, decide whether you want to re-use an existing theme configuration by deriving your new theme from the selected one. You will be able to edit the configuration later on. Click &laquo;Continue&raquo;
4. Select name and type. In the second step, select your theme type and assign a name, version and description to your theme. You can choose from one of the existing, preconfigured theme types in the dropdown menu, or choose Custom to create your own theme type. Click &laquo;Continue&raquo;<img src="/images/help/en/create_theme.png" alt="" title="Creating a theme" class="img-responsive img-inline-help"/>
5. Add feature types. In the third step, click &laquo;Add new type&raquo; to add feature types to your theme.
Click on the » button to select a schema that contains the feature types you would like to add. Next, click the » button to select a single feature type or click &laquo;Add all&raquo; to add all of the listed feature types to your theme. When you are finished, click &laquo;Continue&raquo;

You can assign as many features types as you want to a theme. A single feature type can be associated with many themes. If you want to remove the assignment of a single feature type, click the red «remove» icon in the top right corner of the feature type. If you want to remove all feature types of a single schema currently associated to the theme, click the red «remove» icon in the top right corner of the schema. When you are finished adding feature types, click &laquo;Continue&raquo;
6. Confirm creation. In the fourth step, review your theme and click &laquo;Create&raquo; to save the theme.

:::info

When you derive your theme from an existing one, later changes to the original theme do not influence your derived theme.

:::

:::caution

You can only delete a theme when no data sets are associated with it anymore.

:::
