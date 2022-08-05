---
title: "View services"
categories:
- "help-page-category-reference"
- "help-page-subcategory-reference-themes"
layout: help-detail
language: en

---

The View services section displays several configuration options for your published view services.

You can select the service type of your view services. Currently, the only view service types supported are WMS (1.1.1) and WMS (1.3.0). Please note that an implicit tile cache is always generated, but not externally accessible. To remove a service type, click the red “-” sign next to the service.

You can select the spatial reference systems that are supported by your published services. Click the “+” button to add additional spatial reference systems. Users of your service can request views of your data set in the spatial reference systems you select. To remove a spatial reference system, click the red “-” sign next to the service.

**Note: To add more choices to the list of spatial reference systems, ask your administrator to configure these for you.**

You can activate and deactivate GetFeatureInfo for your WMS using the dropdown menu. GetFeatureInfo is an optional operation which allows users of your WMS to query layers. GetFeatureInfo is only supported by layers with the attribute queryable="1" (true).

By default, hale»connect will generate a style for your data. Currently, services contain all layers for which a style is defined - regardless of whether or not the dataset contains relevant objects. On the hale»connect platform, there are default styles defined for most INSPIRE layers. Thus, these layers are created even if they are empty. If you want to specifically control the appearance of your data and avoid empty layers being created, upload a Styled Layer Descriptor file (SLD). To apply it to your theme, click on “Select file(s)” and pick an XML SLD file. Please note that it is currently not possible to exchange the SLD used for a series' publication if it has been published once.

Activate the *Allow additional layers from raster sources* toggle to enable raster data upload during dataset creation. The toggle enables users to upload and publish PNG or GeoTIFF raster data, in addition to vector data, during dataset creation. The raster data will be published in a separate raster layer. 
