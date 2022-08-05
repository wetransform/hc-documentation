---
title: "Creating Styled Layer Descriptor files (SLDs) for hale»connect"
categories:
- "help-page-category-tutorials"
- "help-page-subcategory-tutorials"
layout: help-detail
language: en

---

### **Styled Layer Descriptor files**

The OGC standard Styled Layer Descriptor (SLD) defines an XML format to encode cartographic rules by which to display features. It reuses the OGC standards Symbology Encoding (SE) and Filter Encoding (FE). The SLD standard extends the OGC Web Map Service (WMS). A basic WMS supports named layers and styles which do not enable end-users to define custom symbology. The SLD standard extends the WMS standard to allow users to provide styling rules in a Styled Layer Descriptor file.

Symbology encoding offers standard cartographic styling options. Surface features can be styled using color or graphic fill options, and opacity. Line features can be styled in various ways by applying color and opacity, line casing, dashed lines and line join options which control how line features are symbolized where they join. Point features can be symbolized using graphic symbols, such as icons, or the WellKnownName element that includes the values square, circle, triangle, star, cross, and x.

The Symbology Encoding standard (SE) also supports the styling of text labels. Font family, style and size selection are all supported. Label placement rules enable the user to control how labels are displayed in relation to the geometry they describe, including offsets, rotation and splining.

Filter encoding (FE) can be used to make selections and apply symbology to different geometries, or attributes. Many INSPIRE SLDs are based on INSPIRE codelist values. Datasets are filtered based on codelist values to obtain the desired feature sets, and symbology is applied to only those features matching the filter criteria. In other cases, SLDs are based on geometry type.

At wetransform, we use the open source framework deegree to provide OGC- and INSPIRE-compliant view and download services. deegree view services (Web Map Services) support the use of SLDs. Like most web map servers, deegree supports several server-specific custom functions which extend the SLD, SE and FE standards to enhance styling.

### **INSPIRE SLDs**

 hale»connect has an extensive library of INSPIRE compliant SLDs across all 34 Annex themes. When a dataset is published on the hale»connect platform, the feature type contained in the uploaded data set is identified and the hale»connect INSPIRE SLD library is searched for a matching style layer. INSPIRE SLDs are then applied if available. A default style layer is applied to all datasets for which a matching style layer does not exist.

 If you have published INSPIRE compliant GML on the hale»connect platform and an INSPIRE SLD is not applied, please [contact support](https://wetransform.atlassian.net/servicedesk/customer/portal/1).

### **Creating a Styled Layer Descriptor file for upload to hale»connect**

Styled Layer Descriptor files can be uploaded to the View Services section of a theme.

<img src={require("/images/help/en/Tutorial_SLD_ViewServices.png").default} alt="" title="Uploading an SLD to a theme" className="img-responsive img-inline-help"/>

When you upload a dataset to hale»connect, the feature type in the dataset is identified and matched against the feature type referenced in the uploaded SLD. The SLD is applied when a match is identified.

In order to upload an SLD to hale»connect, it must be a fully valid SLD file with ```StyledLayerDescriptor```, ```NamedLayer``` and ```UserStyle``` outer tags. In the example below, the ```StyledLayerDescriptor```, ```NamedLayer``` and ```UserStyle``` elements are unqualified because the default namespace of the document is ```xmlns="http://www.opengis.net/sld"```.

An SLD for a shapefile must contain a namespace declaration which points to the shapefile schema. The shapefile namespace declaration follows the pattern: ```xmlns:ns="http://www.esdi-humboldt.eu/hale/shp/<nameOfShapefile>"```. The shapefile name used in the SLD should correspond to the name of the shapefile that was uploaded to create the schema on hale»connect.

hale»connect searches the SLD for a ```FeatureTypeName``` attribute, which it uses to match against the uploaded dataset.
The ```FeatureTypeName``` attribute must be added to the ```FeatureTypeStyle``` element. The attribute must contain the shapefile namespace prefix, and the name of the shapefile:

      <se:FeatureTypeName>ns:nameOfShapefile</se:FeatureTypeName>

The shapefile namespace prefix must be added to any shapefile property that is referenced. For example, if you want to use the shapefile attribute 'name' to label your polygons, it must have the shapefile namespace prefix ```ns```:

      <se:Label>
          <ogc:PropertyName>ns:name/text()</ogc:PropertyName>
      </se:Label>

:::caution

You must add '/text()' after the referenced property in TextSymbolizer Label tags to display text in view services.

:::

### **Adding layer names, layer titles and rule titles to a Styled Layer Descriptor file**

Layer names and layer titles can be added to SLDs. Layer names cannot contain white spaces. The INSPIRE layer name for the Protected Sites feature type is ```PS.ProtectedSite```. Layer names can be added to the NamedLayer.Name element:

	<NamedLayer>
	    <se:Name>PS.ProtectedSite</se:Name> ...
	    ...
	</NamedLayer>

The INSPIRE layer title for the Protected Sites feature type is ```Protected Sites```. Layer titles can be added to the NamedLayer.Description.Title element:

	<NamedLayer>
	    <se:Name>PS.ProtectedSite</se:Name>
	    <se:Description>
    	    <se:Title>Protected Sites</se:Title>
	    </se:Description>...
	    ...
	</NamedLayer>

Rule titles control the text displayed in the WMS legend. Rule titles can be added to the Rule.Description.Title element:

	<se:Rule>
	    <se:Description>
        <se:Title>protected sites: polygon</se:Title>
	    </se:Description>...
        ...
	</se:Rule>

Now, let's take a look at an example of a fully valid SLD file which can be published on hale»connect.

***SLD for shapefile***

      <?xml version="1.0" encoding="UTF-8"?>
      <StyledLayerDescriptor
      version="1.1.0"  
      xmlns="http://www.opengis.net/sld"
      xmlns:ogc="http://www.opengis.net/ogc"
      xmlns:se="http://www.opengis.net/se"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns:gml="http://www.opengis.net/gml/3.2"
      xmlns:sld="http://www.opengis.net/sld"
      xmlns:ns="http://www.esdi-humboldt.eu/hale/shp/myShapefile"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.1.0/sldAll.xsd http://www.opengis.net/se http://schemas.opengis.net/se/1.1.0/FeatureStyle.xsd">
      <NamedLayer>
        <se:Name>MyShapefileLayer</se:Name>
        <UserStyle>
          <se:Name>MyStyle</se:Name>
          <se:Description>
            <se:Title>MyStyle</se:Title>
          </se:Description>
          <se:FeatureTypeStyle>
            <se:Name>Default Polygon Style</se:Name>  
            <se:FeatureTypeName>ns:myShapefile</se:FeatureTypeName>	  
              <se:Rule>
                <se:Description>
                  <se:Title>Shapefile Polygons</se:Title>
                </se:Description>
                <se:PolygonSymbolizer>
                  <se:Fill>
                    <se:SvgParameter name="fill">#78C46E</se:SvgParameter>
                    <se:SvgParameter name="fill-opacity">0.5</se:SvgParameter>
                  </se:Fill>
                  <se:Stroke>
                    <se:SvgParameter name="stroke">#38A800</se:SvgParameter>
                    <se:SvgParameter name="stroke-width">1.5</se:SvgParameter>
                  </se:Stroke>
                </se:PolygonSymbolizer>
              </se:Rule>
              <se:Rule>
                <se:MaxScaleDenominator>40000</se:MaxScaleDenominator>
                <se:TextSymbolizer>
                  <se:Label>
                    <ogc:PropertyName>ns:name/text()</ogc:PropertyName>
                  </se:Label>
                  <se:Font>
                    <se:SvgParameter name="font-family">Arial</se:SvgParameter>
                    <se:SvgParameter name="font-size">14</se:SvgParameter>
                    <se:SvgParameter name="font-style">normal</se:SvgParameter>
                    <se:SvgParameter name="font-weight">bold</se:SvgParameter>
                  </se:Font>
                  <se:Halo>
                    <se:Radius>3</se:Radius>
                    <se:Fill>
                      <se:SvgParameter name="fill">#ffffff</se:SvgParameter>
                    </se:Fill>
                  </se:Halo>
                  <se:Fill>
                    <se:SvgParameter name="fill">#38A800</se:SvgParameter>
                  </se:Fill>
              </se:TextSymbolizer>          
            </se:Rule>
          </se:FeatureTypeStyle>
        </UserStyle>
      </NamedLayer>
    </StyledLayerDescriptor>

The next example is the Protected Sites INSPIRE SLD. In this example, the INSPIRE Protected Sites schema is declared as ```xmlns:ps="http://inspire.ec.europa.eu/schemas/ps/4.0"```

hale»connect searches the SLD for a ```FeatureTypeName``` attribute, which it uses to match against the uploaded dataset.
The ```FeatureTypeName``` attribute must be added to the ```FeatureTypeStyle``` element. The attribute must contain the INSPIRE schema namespace prefix, and the name of the feature type:

    <se:FeatureTypeName>ps:ProtectedSite</se:FeatureTypeName>

The schema namespace prefix must be added to any attribute that is referenced. For example, if you want to use the attribute 'geometry' to filter your features, it must have the namespace prefix ```ps```:

        <ogc:Filter>
          <ogc:PropertyIsEqualTo>
            <ogc:Function name="IsCurve">
              <ogc:PropertyName>ps:geometry</ogc:PropertyName>
            </ogc:Function>
            <ogc:Literal>true</ogc:Literal>
          </ogc:PropertyIsEqualTo>
        </ogc:Filter>

In the filter example above, the deegree function ```IsCurve``` is used to filter feature geometry, so that the symobology rule is applied only to line features. For more information about deegree functions which extend the SLD specification, visit the [deegree documentation pages](http://download.deegree.org/documentation/3.4.5/html/renderstyles.html#deegree-specific-extensions).

Here is an example of a fully valid INSPIRE SLD file which can be published on hale»connect. Protected Site features may be point, line or polygon and the SLD applies a different symbology rule to each geometry type.

***SLD for GML***

      <?xml version="1.0" encoding="UTF-8"?>
      <StyledLayerDescriptor
      version="1.1.0"  
      xmlns="http://www.opengis.net/sld"
      xmlns:ogc="http://www.opengis.net/ogc"
      xmlns:se="http://www.opengis.net/se"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns:gml="http://www.opengis.net/gml/3.2"
      xmlns:sld="http://www.opengis.net/sld"
      xmlns:ps="http://inspire.ec.europa.eu/schemas/ps/4.0"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.1.0/sldAll.xsd http://www.opengis.net/se http://schemas.opengis.net/se/1.1.0/FeatureStyle.xsd">
      <NamedLayer>
        <se:Name>PS.ProtectedSite</se:Name>
        <se:Description>
          	<se:Title>Protected Sites</se:Title>
      	</se:Description>
        <UserStyle>
          <se:Name>PS.ProtectedSite.Default</se:Name>
          <se:FeatureTypeStyle>
            <se:Description>
              <se:Title>Protected Sites Default Style</se:Title>
              <se:Abstract>Point geometries are rendered as a square with a size of 6 pixels, with a 50% grey (#808080) fill and a black (#000000) outline. Line geometries are rendered as a solid black line with a stroke width of 1 pixel. Polygon geometries are rendered using a 50% grey (#808080) fill and a solid black outline with a stroke width of 1 pixel.</se:Abstract>
            </se:Description>
            <se:FeatureTypeName>ps:ProtectedSite</se:FeatureTypeName>
              <se:Rule>
                <se:Description>
                  <se:Title>protected sites: polygon</se:Title>
                </se:Description>
                <ogc:Filter>
                  <ogc:PropertyIsEqualTo>
                    <ogc:Function name="IsSurface">
                      <ogc:PropertyName>ps:geometry</ogc:PropertyName>
                    </ogc:Function>
                    <ogc:Literal>true</ogc:Literal>
                    </ogc:PropertyIsEqualTo>
                </ogc:Filter>
                <se:PolygonSymbolizer>
                  <se:Geometry>
                    <ogc:PropertyName>ps:geometry</ogc:PropertyName>
                  </se:Geometry>
                  <se:Fill>
                    <se:SvgParameter name="fill">#808080</se:SvgParameter>
                  </se:Fill>
                  <se:Stroke>
                    <se:SvgParameter name="stroke">#000000</se:SvgParameter>
                    <se:SvgParameter name="stroke-width">1</se:SvgParameter>
                  </se:Stroke>
                </se:PolygonSymbolizer>
              </se:Rule>
              <se:Rule>
                <se:Description>
                  <se:Title>protected sites: line</se:Title>
                </se:Description>
                <ogc:Filter>
                  <ogc:PropertyIsEqualTo>
                    <ogc:Function name="IsCurve">
                      <ogc:PropertyName>ps:geometry</ogc:PropertyName>
                    </ogc:Function>
                    <ogc:Literal>true</ogc:Literal>
                  </ogc:PropertyIsEqualTo>
                </ogc:Filter>
                <se:LineSymbolizer>
                  <se:Geometry>
                    <ogc:PropertyName>ps:geometry</ogc:PropertyName>
                  </se:Geometry>
                  <se:Stroke>
                    <se:SvgParameter name="stroke">#000000</se:SvgParameter>
                    <se:SvgParameter name="stroke-width">1</se:SvgParameter>
                  </se:Stroke>
                </se:LineSymbolizer>
              </se:Rule>
              <se:Rule>
                <se:Description>
                  <se:Title>protected sites: point</se:Title>
                </se:Description>
                <ogc:Filter>
                  <ogc:PropertyIsEqualTo>
                    <ogc:Function name="IsPoint">
                      <ogc:PropertyName>ps:geometry</ogc:PropertyName>
                    </ogc:Function>
                    <ogc:Literal>true</ogc:Literal>
                  </ogc:PropertyIsEqualTo>
                </ogc:Filter>
                <se:PointSymbolizer>
                  <se:Geometry>
                    <ogc:PropertyName>ps:geometry</ogc:PropertyName>
                  </se:Geometry>
                  <se:Graphic>
                    <se:Mark>
                      <se:WellKnownName>square</se:WellKnownName>
                      <se:Fill>
                        <se:SvgParameter name="fill">#808080</se:SvgParameter>
                      </se:Fill>
                      <se:Stroke>
                        <se:SvgParameter name="stroke">#000000</se:SvgParameter>
                        <se:SvgParameter name="stroke-width">1</se:SvgParameter>
                      </se:Stroke>
                    </se:Mark>
                    <se:Size>6</se:Size>
                  </se:Graphic>
                </se:PointSymbolizer>
              </se:Rule>
            </se:FeatureTypeStyle>
          </UserStyle>
        </NamedLayer>
      </StyledLayerDescriptor>
