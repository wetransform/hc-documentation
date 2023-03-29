---
title: "Overview"
categories:
- "help-page-category-reference"
- "help-page-subcategory-reference-data"
layout: help-detail
language: en
sidebar_position: 0
---

The Data Overview page displays general properties and settings of the data set.

The data set name is editable. Click on the name to edit the value. The description section contains an editable text field where users can enter a description of the data set.

The ownership panel lists the organisation of the user who created the data set, the user who created the data set, the date the data set was created and the date of the last update to the data set.

The content panel lists the data volume of the files associated with the data set, the capacity points used, the number of objects contained in the data set and the theme associated with the data set.

The status panel provides an overview of the system status of published resources related to the data set. Green checkmarks indicate that the resource is valid and operating normally. Yellow exclamation marks indicate that the resource has validation warnings and is operating with errors. Red X's indicate that the resource has validation errors and is not operating normally. Grey dashes indicate that the resource is not published.

The status panel Validation reports column provides a series of downloadable ETF test results, and a file analysis report of the source data. The dataset download icon enables users to download the results of dataset conformance classes configured in the theme, and a report which contains an assessment of the validity of the file based on the initial file analysis completed during file upload. The file analysis report is generated in the language selected in the website language settings. Any errors encountered during ETF validation, or file analysis are reported in the "Validation details" column.

The clickable document icons invoke a dialog to download and manage the ETF report for the resource. Green checkmarks indicate that the ETF report is valid. Red X's indicate errors or a test that did not execute. Users can choose re-run the ETF tests for a particular resource, or all resources in a category, by clicking the «Run all tests» button. Alternatively, users can run a single test by clicking the circular arrow icon next to the download icon. The yellow warning icon appears for resources with conformance classes that require manual checks.

The toggle switches in the action section indicate the current access and notification settings of the data set. Activate the *Subscribed* toggle switch to receive email notifications when there are new comments or tasks added. Activate the *Protect services* toggle switch to password protect your view and download services. Once activated, all service requests will require authorization credentials, with the exception of the GetCapabilities request.

wetransform can enable the display of service usage statistics for organisations interested in gaining additional insight into the use of their published services on [hale»connect.com](https://haleconnect.com). Please contact [support](https://www.wetransform.to/services/support/) for more information. Once enabled, the service usage statistics section contains bar graphs which display usage statistics for WMS and WFS services, with the option to display results for the last year or the last 30 days. The *Overall accesses by service type* graph displays total service usage. The *WMS capabilities requests By User Agent* graph displays the percentages of requests made by different user agents, including browsers such as Firefox and Chrome, QGIS, the hale»connect FeatureExplorer and more. The *WFS capabilities requests By User Agent* displays the same information for WFS services. The &laquo;Export as CSV&raquo; button enables users to download usage statistics based on a custom date range.
*Note: This feature is limited to users of advanced and enterprise licenses. Service usage statistics can be enabled for other licence types for an additional cost.*

The Feature type count graph displays the number of features for each feature type in the dataset’s schema.
