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

The vertical row of buttons in the upper left hand corner of the map preview allows users to:
  * zoom in and out
  * generate a permalink with the currently selected extent, layer configuration and zoom level which can be shared
  * print the current map extent or generate a PDF

The map can be downloaded as a PNG or printed as a PDF in portrait and landscape mode. Please note that printing can only be expected to work as intended on screens with resolutions 1920x1080 (Full HD) and 2560x1440 (QHD).

## The Layer Widget ##

The layer widget contains:

* legend information,
* the option to add external WMS layers,
* the options to turn layers on and off, and
* the option to filter raster datasets for display within a dataset series

# Select single datasets in a dataset series #

For published dataset series services, click on the filter icon within the layer widget to invoke the dataset selection dialog and select the sub-datasets for display.
<img src={require("/images/help/en/series.png").default} alt="Selected sub-datasets in the layer widget" title="Selected sub-datasets in the layer widget" className="img-responsive img-inline-help"/>

# Add an external WMS layer #

The layer widget supports the option to add external WMS layers to the map preview so that external layers can be viewed together with hale»connect services. Additional hale»connect services can also be added. Click on the plus sign in the Layers panel to add your WMS. You can arrange the order of layers in the layer list to configure the display of layers in the map preview.

# Add a custom basemap #

The layer widget also offers the option to supply a custom basemap URL. Click on the plus sign in the Basemap panel to add your URL. Visit the following documentation page for more information about adding a custom WMS basemap to your organisation: [Adding an organisation](../../users-roles-orgs/manage-orgs/2015-03-04-users-add-organisation).

# Add external WMS as background map #

In addition, the layer widget supports the option to add external WMS services to the map preview so that external services can be viewed alongside hale»connect services.

The map preview includes a responsive scale widget, including scale factor and cursor coordinate display in the bottom right hand corner of the application. Coordinates can be entered to update the extent of the map and zoom to a particular location.
