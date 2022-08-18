---
title: "Using the Feature Explorer Tool"
categories:
- "help-page-category-datasetworkflow"
- "help-page-subcategory-datasetworkflowfeatureExplorer"
layout: help-detail
language: en
---

**The Feature Explorer Tool**

The Feature Explorer makes it easy to navigate the nested structure of complex GML and
enables the exploration of complex GML attributes. GML attributes which contain links to related features, codelists, or attachment files are viewable via the tool.

The Feature Explorer tool can be accessed from the «show Details» button in the HTML GetFeatureInfo response of WMS view services on hale»connect.
<img src={require("/images/help/en/Feature Explorer.png").default} alt="" title="Accessing the Feature Explorer tool using the show details button" className="img-responsive img-inline-help"/>

 To enable the tool, first activate GetFeatureInfo on your theme.
  * Go to the «Themes» menu and select the theme you are working with from the list
  *	Select the «View services» section of the theme
  *	Select «Activated» in the dropdown menu next to GetFeatureInfo

GetFeatureInfo is an optional operation which allows users of your view services to query your WMS layers. The GetFeatureInfo client is only available for WMS layers which have been configured to support the GetFeatureInfo operation.

The next step is to create a dataset and publish view services.

To access the Feature Explorer Tool, click on the Map view link in the dataset’s View services section:
  *	Go to the «Data» menu and select the data set you want to explore
  *	Select the «View services» section of the dataset
  *	Click on Map view to open a demo WMS service
  *	In the demo WMS service, click on a feature in the map display
  *	Click on the «show Details» button in the HTML view of GetFeatureInfo client

The Feature Explorer opens in a new tab which displays the attributes associated with the selected feature. Click on any link to further explore the attributes and related features. Click the «+» button to the right of the attribute to expand the additional levels of attribute nesting.
