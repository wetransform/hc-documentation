---
title: "Configure Download Services"
categories:
- "help-page-category-setup-haleconnect"
- "help-page-subcategory-setup-haleconnect-themeservices"
layout: help-detail
language: en

---

As for View Services, all data sets linked to a theme share a common configuration for the creation of download services, such as OGC Web Feature Services, INSPIRE Predefined Dataset Download Services, or OGC API - Features Download Services. In the Download Service configuration, you can adjust aspects such as the type of service and the supported file formats and coordinate reference systems.

To edit this configuration, follow these steps as a logged in theme manager or organisation superuser:

1.	Go to &laquo;Themes&raquo;
1.	Pick the theme you'd like to change the configuration for
1.	Go to &laquo;Download Services&raquo;
1.	Pick the type of service you'd like to publish. Click the &laquo;+&raquo; button to add an additional type of service.<img src={require("/images/help/en/configure_download_services1.png").default} alt="" title="Configuring download services" className="img-responsive img-inline-help"/>
1.	Choose at least one coordinate reference system (CRS) that should be supported. You can add additional CRS by clicking the &laquo;+&raquo; button.
1.	Choose at least one file format that should be supported. Datasets will be included for download in the selected formats in published atom feeds. Supported formats are \*.gml, \*.shp and \*.gpkg. You can add more than one supported format by clicking the &laquo;+&raquo; button.
1.  Activate the *Include attachment links in Predefined Dataset download services* toggle to include attachment links in the atom feed. The attachment links enable users to download the attachments directly from the published predefined dataset download service.
