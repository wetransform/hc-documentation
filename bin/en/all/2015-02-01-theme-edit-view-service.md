---
title: "Configure View Services"
categories:
- "help-page-category-setup-haleconnect"
- "help-page-subcategory-setup-haleconnect-themeservices"
layout: help-detail
language: en

---

All data sets linked to a theme share a common configuration for the creation of view services, such as OGC Web Map Services or INSPIRE View Services. In the View Service configuration, you can adjust aspects such as the type of service, the coordinate reference systems and the cartographic styling.

To edit this configuration, follow these steps as a logged in theme manager or organisation superuser:

1.	Go to &laquo;Themes&raquo;
1.	Pick the theme you'd like to change the configuration for
1.	Go to &laquo;View Services&raquo;
1.	Pick the type of service you'd like to publish (as of 1.0, only WMS 1.3.0 and WMTS 1.0.0 are available)<img src="/images/help/en/configure_view_services1.png" alt="" title="Configuring view services" class="img-responsive img-inline-help"/>
1.	Choose at least one coordinate reference system (CRS) that should be supported. You can add additional CRS by clicking the &laquo;+&raquo; button.
1.	Activate or deactivate GetFeatureInfo. Activating GetFeatureInfo enables feature query in the WMS.
1.	Upload a Styled Layer Descriptor to define the cartographic configuration for the view service.
The SLD must be a fully valid Styled Layer Descriptor file. The following is an example of how layers are defined in the WMS (name, description, style):

    <StyledLayerDescriptor version="1.1.0" xmlns:usgovserv="http://inspire.ec.europa.eu/schemas/us-govserv/4.0" … >
      <NamedLayer>
        <se:Name>areas</se:Name>
        <se:Description>
          <se:Title>Bezirke</se:Title>
          <se:Abstract></se:Abstract>
        </se:Description>
        <UserStyle>
          <se:Name>US.GovernmentalService_1</se:Name>
          <se:FeatureTypeStyle>
            <se:FeatureTypeName>…:GovernmentalService</se:FeatureTypeName>
            <se:Rule>
              <se:PolygonSymbolizer>
                <se:Name>symbolizer_Schulstandorte</se:Name>
                <se:Geometry>
                  <ogc:PropertyName>…:areaOfResponsibilityByPolygon
                  </ogc:PropertyName>
                </se:Geometry>
                …

  For more information about SLDs on hale»connect, visit the [SLD tutorial](https://www.wetransform.to/help/en/help-page-category-tutorials/help-page-subcategory-tutorials/2018/05/03/sld-tutorial/).

1. Activate or deactivate additional raster layers from raster sources. The toggle enables users to upload and publish PNG or GeoTIFF raster data, in addition to vector data, during dataset creation. The raster data will be published in a separate raster layer.
