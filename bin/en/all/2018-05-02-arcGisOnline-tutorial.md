---
title: "Using hale»connect resources in ArcGIS Online"
categories:
- "help-page-category-tutorials"
- "help-page-subcategory-tutorials"
layout: help-detail
language: en

---

Both open source and proprietary geographic information systems currently offer limited out-of-the-box support for complex GML. For a more in depth discussion of GML support in GIS software, visit the [CanIUse INSPIRE github repository](https://github.com/INSPIRE-MIF/caniuse). Harmonized INSPIRE data is complex GML and this tutorial aims to demonstrate how hale»connect WMS services can be viewed in ArcGIS Online.

***The Esri WFS implementation in ArcGIS Online only supports basic OGC WFS at the simple features level.***

This tutorial uses:

* the current version of ArcGIS Online (April 2019). A valid Esri account is required to log-in to ArcGIS Online. You can create an Esri account on the Esri website for free.

### **Viewing a WMS**

In order to view your hale»connect WMS in ArcGIS Online, you will need a URL link to the capabilities document of your service. You can directly access the capabilities documents for WMS 1.1.1 and 1.3.0 from the View Services section of your dataset. To copy any URL to the clipboard, click the <a class="btn btn-default" title="Copy URL"><span class="glyphicon glyphicon-copy"></span></a> icon to the right of the URL.

Login to ArcGIS Online and navigate to My Map. Click on the Add tab at the top left of the application.

<img src="/images/help/en/Tutorial_arcLogin.png" alt="" title="Adding a WMS to ArcGIS Online" class="img-responsive img-inline-help"/>

From the Layer menu, select Add layer from the Web. In the Add layer from the Web dialog, select WMS-OGC-Web-Service as service type in the dropdown menu and enter the URL of your WMS capabilities document. Click Add layer.

Your WMS layer should appear in the layers panel on the left. Left click on the three dots which appear under the WMS name to view the options menu. The menu includes a range of options, such as zoom, transparency, rename and the option to further refine your OGC WMS request parameters.

<img src="/images/help/en/Tutorial_arcLayerOptions.png" alt="" title="WMS options in ArcGIS Online" class="img-responsive img-inline-help"/>

Next, click on the black arrow next to the WMS name. Your WMS layer should appear. Left click on the three dots which appear under the layer name to activate pop-ups.

<img src="/images/help/en/Tutorial_arcPopUp.PNG" alt="" title="Pop ups in ArcGIS Online" class="img-responsive img-inline-help"/>

Once you activate pop-ups for your layer, the GetFeatureInfo response will display in the pop-up dialog for any feature that you click. If you click on an area with overlapping features, results for each feature will be listed. hale»connect services provide the unique ability to explore complex GML through the hale»connect FeatureExplorer. In the pop-up dialog in ArcGIS Online, click on the Details anzeigen button for the feature you are interested in.

<img src="/images/help/en/Tutorial_arcPopUpDialog.PNG" alt="" title="Pop ups in ArcGIS Online" class="img-responsive img-inline-help"/>

The hale»connect FeatureExplorer will open in a new tab in your browser. The FeatureExplorer enables you to navigate through any level of nested, complex GML to further investigate the linked resources, linked features, codelists or attributes that you are interested in.

<img src="/images/help/en/Tutorial_arcFeatureExplorer.png" alt="" title="FeatureExplorer in ArcGIS Online" class="img-responsive img-inline-help"/>

### **Learn more**

For more information about ArcGIS Online, visit [the Esri website](https://www.arcgis.com/index.html).

ArcGIS Online maintains it's own Resource pages. For more information about using OGC services in ArcGIS Online visit [the ArcGIS Online OGC support pages](https://doc.arcgis.com/en/arcgis-online/reference/ogc.htm).
