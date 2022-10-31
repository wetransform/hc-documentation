---
title: "Using the Map Preview"
categories:
- "help-page-category-datasetworkflow"
- "help-page-subcategory-datasetworkflowmappreview"
layout: help-detail
language: en
---

**The Map Preview**

The map preview is a simple web map application that enables the viewing of published WMS services.
<img src={require("/images/help/en/map_preview.png").default} alt="Layer widget legend" title="Layer widget legend" className="img-responsive img-inline-help"/>

The layer widget contains legend information, the option to toggle layers on and off, and the option to filter raster datasets for display within a dataset series. For published dataset series services, click on the filter icon within the layer widget to invoke the dataset selection dialog and select the sub-datasets for display. The layer widget also offers the option to supply a custom basemap URL. Visit the following documentation page for more information about adding a custom WMS basemap to your organisation: [Editing an organisation](../../users-roles-orgs/manage-orgs/2015-03-01-users-edit-organisation)

<img src={require("/images/help/en/series.png").default} alt="Selected sub-datasets in the layer widget" title="Selected sub-datasets in the layer widget" className="img-responsive img-inline-help"/>

The map preview includes a responsive scale widget, including scale factor and cursor coordinate display in the bottom right hand corner of the application. Coordinates can be entered to update the extent of the map and zoom to a particular location.

The vertical row of buttons in the upper left hand corner of the map preview enable users to:
  * zoom in and out
  * generate a permalink with the currently selected extent, layer configuration and zoom level which can be shared
  * print the current map extent or generate a PDF
