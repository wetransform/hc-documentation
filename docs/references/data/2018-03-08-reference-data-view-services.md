---
title: "View services"
categories:
- "help-page-category-reference"
- "help-page-subcategory-reference-data"
layout: help-detail
language: en
sidebar_position: 3

---

The View services section displays the operational status of your published view services. You can activate and deactivate your services using the toggle button in the top left corner. After activation, manually start the publishing process with the &laquo;Publish Services&raquo; button in the top right corner.

The View service panel provides a list of published view services. You can directly access the capabilities documents for WMS 1.1.1 and 1.3.0. To copy any URL to the clipboard, click the <a className="btn btn-default" title="Copy URL"><span className="glyphicon glyphicon-copy"></span></a> icon to the right of the URL. Map view provides a simple web mapping client where you can preview your published view service. Visit [Using the Feature Explorer](../../create-manage-datasets/feature-explorer/2015-01-02-dataset-feature-explorer.md) for more information about accessing the Feature Explorer tool from the HTML view of the GetFeatureInfo client.

The Metadata panel provides a list of published metadata. Click on “Metadata (Dataset)” or “Metadata (View Service)” to open it in a browser and view the XML data directly. Click on the <a className="btn btn-default" title="Copy URL"><span className="glyphicon glyphicon-copy"></span></a> icon to copy the service URL.

The Validation reports panel provides a list of results for a series of tests executed on published metadata and services. Click on the download icon to download the test result directly. Green checkmarks indicate that the ETF report is valid. Red X's indicate errors or a test that did not execute. Users can choose re-run the ETF tests for all resources listed by clicking the «Run all tests» button. Alternatively, users can re-run a single test by clicking the circular arrow icon next to the download icon. The yellow warning icon appears for resources with conformance classes that require manual checks.

A set of default conformance classes are executed on dataset metadata, download and view service metadata, and services, and can be configured in the theme. Tests check for INSPIRE compliancy. The number and type of tests executed on your metadata and services reflect your compliancy requirements. Visit [Configure validation](../../setup-hc/config-validation/2015-02-10-validation.md) for more information.

Tests executed on Metadata and View Services:

<table className="tb">
    <th colspan="2">Test</th>
    <th colspan="2">Conformity Level</th>
    <th colspan="2">Resource</th>
    <tr>
      <td>Title</td>
      <td>INSPIRE</td>
      <td>Dataset-Metadata</td>
      <td>Service-Metadata</td>
      <td>Service</td>
    </tr>
  <tr>
    <td>Common Requirements for ISO/TC 19139:2007 based INSPIRE metadata records</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td></td>
  </tr>
  <tr>
    <td>Conformance Class 1: 'Baseline metadata for data sets and data set series</td>
    <td>X</td>
    <td>X</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Conformance Class 2: 'INSPIRE data sets and data set series interoperability metadata'</td>
    <td>X</td>
    <td>X</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Conformance Class 2b: 'INSPIRE data sets and data set series metadata for Monitoring'</td>
    <td>X</td>
    <td>X</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Conformance Class 3: 'INSPIRE Spatial Data Service baseline metadata'</td>
    <td>X</td>
    <td></td>
    <td>X</td>
    <td></td>
  </tr>
  <tr>
    <td>Conformance Class 4: 'INSPIRE Network Services'</td>
    <td>X</td>
    <td></td>
    <td>X</td>
    <td></td>
  </tr>
  <tr>
    <td>Conformance Class 'View Service WMS'</td>
    <td>X</td>
    <td></td>
    <td></td>
    <td>X</td>
  </tr>
</table>

<br/>

The Service settings panel provides a toggle switch to flip the coordinate axes of your data set. If your data set is displaying in flipped coordinates, toggle the switch to correct the display.

The *Split files for publication* toggle enables users to configure a threshold used to control the maximum number of features in each \*.gml or \*.gpkg file. File splitting can be used to enable the publishing of large files. The maximum number of features per file is set at 10,000. The functionality for splitting files during the publication is not applied when the Atom feed is enabled in the Download Services section of the theme for most file types. File splitting functionality can only be applied to \*.gpkg datasets with enabled Atom feeds because the original \*.gpkg file that was not split is used for the Atom feed.

The rendering optimization toggles are activated or deactivated by default depending on the system settings. Whether they can be applied may depend on the data structure and the configured styling rules. The *Allow geometry generalization* toggle will display generalized features at smaller zoom levels. The toggle can be deactivated if the generalization oversimplifies the features, however the performance of the view service may be affected. The *Feature limit for internally rendered map tiles* toggle limits the number of features displayed in each tile. The toggle can be deactivated if the omitted features become a problem in the visualization, however the performance of the view service may be affected.

The Service log panel displays a transaction log which describes processes executed on your data set and any errors that may occur during publishing. The Service log is generated by the service publisher.
