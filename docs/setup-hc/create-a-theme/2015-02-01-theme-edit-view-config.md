---
title: "Edit display properties"
categories:
- "help-page-category-setup-haleconnect"
- "help-page-subcategory-setup-haleconnect-themecreate"
layout: help-detail
language: en

---


A common issue with type and property names from data schemas is that they are hard to understand. They tend to be cryptic abbreviations, especially when they come from a Shapefile, or are defined using a foreign language. To provide effective view services despite this, you can define display properties which are then used for legends and GetFeatureInfo popups. hale»connect supports the configuration aliases for feature type names and feature properties.

To set display properties, follow these steps as a logged in theme manager or organisation superuser:

1.	Go to &laquo;Themes&raquo;
1.	Pick the theme you'd like to change the configuration for
1.	Go to &laquo;Feature Types&raquo;
4.	Click on the properties of the feature type for which you'd like to edit the display properties
5.	In the table that appears, first decide which fields you want to be visible in a popup by setting the &laquo;Display&raquo; property to &laquo;Yes&raquo;, and then pick an &laquo;Alias&raquo; for those that should be visible.<img src={require("/images/help/en/property_editing.png").default} alt="" title="Editing feature type properties" className="img-responsive img-inline-help"/>
6.	Save your configuration by clicking on the &laquo;Save&raquo; button at the end of the table.

# Formatting display values #

The renderer enables users to control the formatting of values displayed in the Feature Explorer. Users have the option to select one of the following renderers:

* Default (no renderer)
* Formatted number (enter a number format, e.g. ###.##)
* Formatted Date (choose a date format option)
* Codelist Labels (substitute coded values can be provided in lookup table)
    * semicolon separated CSV or valid JSON values can be provided
    * the first column must contain values found in the data and the second column must contain the display values

Here is an example of how to substitute coded values using labels provided through a lookup table:
<img src={require("/images/help/en/renderer.png").default} alt="" title="Substitute coded values using labels" className="img-responsive img-inline-help"/>

To edit applied renderers, click on the gear symbol to make your changes.
