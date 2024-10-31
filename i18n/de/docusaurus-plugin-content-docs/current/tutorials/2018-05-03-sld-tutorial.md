---
title: "Styled Layer Descriptor-Dateien (SLDs) für hale»connect erstellen"
categories:
- "help-page-category-tutorials"
- "help-page-subcategory-tutorials"
layout: help-detail
language: de

---

### **Styled Layer Descriptor-Dateien**

Der OGC-Standard Styled Layer Descriptor (SLD) definiert ein XML-Format um Regeln für die Darstellung von Objekten festzulegen. Dabei werden die OGC-Standards Symbology Encoding (SE) und Filter Encoding (FE) genutzt. Der SLD-Standard erweitert den OGC Web Map Service (WMS). Ein einfacher WMS unterstützt benannte Layer und Stile, die es Nutzenden jedoch nicht ermöglichen, eine kundenspezifische Symbologie festzulegen. Der SLD-Standard erweitert den WMS-Standard um es Nutzenden zu ermöglichen, Darstellungsregeln in einer SLD-Datei festzulegen.

Die Enkodierungen für Symbologien unterstützen grundlegende kartographische Darstellungs-Optionen. Flächenhafte Objekte können mit Hilfe verschiedener Farb- oder Füll-Optionen und Transparenz-Einstellungen dargestellt werden. Linienhafte Objekte können auf verschiedene Weisen dargestellt werden, indem Farbe, Transparenz, Liniensymbolik, gestrichelte Linien und Vereinigungs-Optionen bearbeitet werden. Vereinigungs-Optionen kontrollieren, wie Vereinigungs-Punkte linienhafter Objekte dargestellt werden. Punkt-Objekte können unter Verwendung graphischer Symbole, wie beispielsweise Piktogramme, oder über das WellKnownName-Element dargestellt werden, welches die Werte Rechteck, Kreis, Dreieck, Stern, Kreuz und x beinhaltet.

Der Symbology Encoding-Standard (SE) unterstützt auch das Styling von Beschriftungen. Schriftart, -formatierung und -größe können ausgewählt werden. Platzierungsregeln ermöglichen es Nutzenden, unter Angabe von Abständen, Rotationen oder geschwungener Textdarstellung zu kontrollieren, wie Beschriftungen im Verhältnis zu dem Geometrieobjekt, das sie beschreiben, platziert werden sollen.

Filter encoding (FE) kann genutzt werden, um unterschiedliche Symbologien für verschiedene Geometrien oder Attribute zu nutzen. Viele INSPIRE-SLD-Dateien basieren auf INSPIRE Codelisten-Werten. Datensätze werden basierend auf den Codelisten-Werten gefiltert um einen den Kriterien entsprechenden Sub-Datensatz zu erhalten, auf den eine entsprechende Symbologie angewandt wird. In anderen Fällen werden Sub-Datensätze für die Anwendung verschiedener SLD-Darstellungen basierend auf dem Geometrie-Typ gefiltert.

Bei wetransform nutzen wir die Open-Source-Lösung deegree, um OGC- und INSPIRE-konforme Darstellungs- und Download-Dienste bereitzustellen. deegree Darstellungs-Dienste (Web Map Services) unterstützen die Nutzung von SLDs. Wie die meisten Webserver unterstützt deegree diverse server-spezifische Funktionalitäten, welche die SLD-, SE- und FE-Standards um kundenspezifische Styling-Optionen erweitern.

### **INSPIRE SLD-Dateien**

 hale»connect verfügt über eine umfangreiche Bibliothek INSPIRE-konformer SLD-Dateien zu allen 34 Anhang-Themen. Wenn ein Datensatz auf der hale»connect Plattform veröffentlicht wird, wird die in den hochgeladenen Daten enthaltene Objektart identifiziert und die hale»connect INSPIRE-SLD-Bibliothek nach dem passenden Style-Layer durchsucht. Die entsprechende INSPIRE-SLD-Datei wird, wenn verfügbar, auf die Daten angewandt. Wenn kein passender Style-Layer existiert, wird auf alle Datensätze ein Standard-Style-Layer angewandt.

 Wenn sie INSPIRE-konforme GML-Daten auf der hale»connect Plattform veröffentlicht haben und kein INSPIRE-SLD auf diese angewandt wird, kontaktieren sie bitte unseren [Support](https://wetransform.atlassian.net/servicedesk/customer/portal/1).

### **Eine SLD-Datei zum Hochladen auf hale»connect erstellen**

SLD-Dateien können im &laquo;Darstellungs-Dienste&raquo;-Bereich von Themen hochgeladen werden.

<img src={require("/images/help/de/Tutorial_SLD_ViewServices.png").default} alt="" title="Ein SLD zu einem Thema hochladen" className="img-responsive img-inline-help"/>

Wenn sie einen Datensatz auf hale»connect hochladen, wird die im Datensatz enthaltene Objektart identifiziert und gegen die Objektarten geprüft, die in der hochgeladenen SLD-Datei enthalten sind. Die SLD-Datei wird angewandt, wenn eine passende Objektart identifiziert wird.

Um eine SLD-Datei auf hale»connect hochladen zu können, muss diese eine valide SLD-Datei mit den umschließenden Elementen ```StyledLayerDescriptor```, ```NamedLayer``` und ```UserStyle``` sein. In dem unten aufgeführten Beispiel werden die ```StyledLayerDescriptor```, ```NamedLayer``` und ```UserStyle```-Elemente nicht über einen Namensraum qualifiziert, da der Standard-Namensraum des Dokuments ```xmlns="http://www.opengis.net/sld"``` ist.

Ein SLD für ein Shapefile muss eine Namensraum-Definition enthalten, die auf das Shapefile-Schema verweist. Die Namensraum-Definition für Shapefiles hat folgendes Muster: ```xmlns:ns="http://www.esdi-humboldt.eu/hale/shp/<NameDesShapefiles>"```. Der Shapefile-Name, der in der SLD-Datei verwendet wird, sollte mit dem Namen des Shapefiles übereinstimmen, das zum Anlegen des entsprechenden Schemas auf hale»connect hochgeladen wurde.

hale»connect sucht im SLD nach einem ```FeatureTypeName```-Element, das dann mit den Inhalten des hochgeladenen Datensatzes abgeglichen wird.
Das ```FeatureTypeName```-Element muss zum ```FeatureTypeStyle```-Element hinzugefügt werden. Das Element muss das Shapefile-Namensraum-Präfix und den Namen des Shapefiles beinhalten:

```xml
      <se:FeatureTypeName>ns:NameDesShapefiles</se:FeatureTypeName>
```

Das Shapefile-Namensraum-Präfix muss zu jeder Shapefile-Eigenschaft hinzugefügt werden, auf die verwiesen wird. Wenn sie beispielsweise das Shapefile-Attribut &laquo;name&raquo; verwenden möchten, um ihre Polygone zu beschriften, muss es mit dem Shapefile-Namensraum-Präfix ```ns``` versehen werden:

```xml
      <se:Label>
          <ogc:PropertyName>ns:name/text()</ogc:PropertyName>
      </se:Label>
```

:::caution

Sie müssen '/text()' hinter der referenzierten Eigenschaft in TextSymbolizer Label-Tags hinzufügen um den Text in Darstellungsdiensten anzuzeigen.

:::

### **Hinzufügen von Namen für Layer sowie Titeln für Layer und Regeln zu einer Styled Layer Descriptor-Datei** ###

Namen und Titel für Layer können zu SLD-Dateien hinzugefügt werden. Dabei dürfen Layernamen keine Leerzeichen oder Doppelpunkte enthalten. Der von INSPIRE vorgesehene Layername für Schutzgebiete ist beispielsweise ```PS.ProtectedSite```. Layernamen können im Element NamedLayer.Name hinzugefügt werden.

```xml
	<NamedLayer>
	    <se:Name>PS.ProtectedSite</se:Name> ...
	    ...
	</NamedLayer>
```

Der von INSPIRE vorgesehene Layertitel für Schutzgebiete ist ```Protected Sites```. Layertitel können im Element NamedLayer.Description.Title hinzugefügt werden.

```xml
	<NamedLayer>
	    <se:Name>PS.ProtectedSite</se:Name>
	    <se:Description>
    	    <se:Title>Protected Sites</se:Title>
	    </se:Description>...
	    ...
	</NamedLayer>
```

Über Titel für Regeln wird der Text bestimmt, der in der Legende des WMS angezeigt wird. Titel für Regeln können im Element Rule.Description.Title angegeben werden.

```xml
	<se:Rule>
	    <se:Description>
        <se:Title>protected sites: polygon</se:Title>
	    </se:Description>...
        ...
	</se:Rule>
```

Werfen wir nun einen Blick auf ein Beispiel für ein valides SLD, wie es auf hale»connect veröffentlicht werden kann.

***SLD für Shapefile***

```xml
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
```

Das nächste Beispiel ist das INSPRE-Schutzgebiete-SLD. In diesem Beispiel wird auf das INSPIRE-Schutzgebiete-Schema unter ```xmlns:ps="http://inspire.ec.europa.eu/schemas/ps/4.0"``` verwiesen.

hale»connect sucht in der SLD-Datei nach einem ```FeatureTypeName```-Element, dessen Inhalt gegen den hochgeladenen Datensatz geprüft wird.
Das ```FeatureTypeName```-Element muss dem ```FeatureTypeStyle```-Element hinzugefügt werden. Das Element muss das INSPIRE-Schema-Namensraum-Präfix und den Namen der Objektart enthalten:

```xml
    <se:FeatureTypeName>ps:ProtectedSite</se:FeatureTypeName>
```

Das Schema-Namensraum-Präfix muss jedem Attribut zugewiesen werden, auf das verwiesen wird. Wenn sie beispielsweise das Attribut &laquo;geometry&raquo; nutzen möchten, um ihre Objekte zu filtern, muss es das Namensraum-Präfix ```ps``` haben:

```xml
        <ogc:Filter>
          <ogc:PropertyIsEqualTo>
            <ogc:Function name="IsCurve">
              <ogc:PropertyName>ps:geometry</ogc:PropertyName>
            </ogc:Function>
            <ogc:Literal>true</ogc:Literal>
          </ogc:PropertyIsEqualTo>
        </ogc:Filter>
```

In dem aufgeführten Filter-Beispiel wird die deegree-Funktion ```IsCurve``` genutzt um nach der Objekt-Geometrie zu filtern, sodass die Symbologie-Regeln nur auf linienhafte Objekte angewandt werden. Mehr Informationen zu deegree-Funktionen, welche die SLD-Spezifikation erweitern, finden sie in der [deegree Dokumentation](http://download.deegree.org/documentation/3.4.5/html/renderstyles.html#deegree-specific-extensions).

Im Folgenden finden sie ein Beispiel für eine valide INSPIRE-SLD-Datei, die auf hale»connect genutzt werden kann. Schutzgebiete-Objekte können Punkte, Linien oder Polygone sein und die SLD-Datei wendet für jeden dieser Geometrie-Typen unterschiedliche Symbologien an.

***SLD für GML***

```xml
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
```
