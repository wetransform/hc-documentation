---
title: "Vytváření souborů Styled Layer Descriptor (SLD) pro hale»connect"
categories:
- "help-page-category-tutorials"
- "help-page-subcategory-tutorials"
layout: help-detail
language: cs

---

### **Soubory se stylem deskriptoru vrstvy**

Standard OGC Styled Layer Descriptor (SLD) definuje formát XML pro kódování kartografických pravidel, podle kterých se mají zobrazovat prvky. Opětovně využívá standardy OGC Symbology Encoding (SE) a Filter Encoding (FE). Standard SLD rozšiřuje OGC Web Map Service (WMS). Základní WMS podporuje pojmenované vrstvy a styly, které neumožňují koncovým uživatelům definovat vlastní symboliku. Standard SLD rozšiřuje standard WMS a umožňuje uživatelům uvádět pravidla stylu v souboru se stylem deskriptoru vrstvy.

Kódování symboliky nabízí standardní možnosti kartografického stylu. Prvky povrchu lze upravovat pomocí barev nebo možností grafické výplně a neprůhlednosti. Prvky čar lze stylizovat různými způsoby pomocí barvy a neprůhlednosti, obálek čar, přerušovaných čar a možností spojování čar, které určují, jak jsou prvky čar symbolizovány v místě jejich spojení. Bodové prvky lze symbolizovat pomocí grafických symbolů, jako jsou ikony, nebo prvek WellKnownName, který obsahuje hodnoty čtverec, kruh, trojúhelník, hvězda, křížek a x.

Standard kódování symboliky (SE) podporuje také styl textových štítků. Podporovány jsou všechny typy písma, výběr stylu a velikosti. Pravidla umisťování štítků umožňují uživateli řídit způsob zobrazení štítků ve vztahu ke geometrii, kterou popisují, včetně odsazení, rotace a splinování.

Kódování filtru (FE) lze použít pro výběr a aplikaci symboliky pro různé geometrie nebo atributy. Mnohé INSPIRE SLD jsou založeny na hodnotách INSPIRE kódů. Datové sady se filtrují na základě hodnot ze seznamu kódů, aby se získaly požadované soubory funkcí, a symbolika se aplikuje pouze na ty vlastnosti, které vyhovují kritériím filtru. V jiných případech jsou SLD založeny na typu geometrie.

Ve wetransform používáme open source framework pro poskytování služeb zobrazení a stahování v souladu s OGC a INSPIRE. služby deegree view (Web Map Services) podporují používání SLD. Jako většina webových mapových serverů podporuje i deegree několik vlastních funkcí specifických pro server, které rozšiřují standardy SLD, SE a FE pro zlepšení stylu.

### **INSPIRE SLD**

 hale»connect má rozsáhlou knihovnu SLD kompatibilních s INSPIRE ve všech 34 přílohách. Je-li soubor dat publikován na platformě hale»connect, identifikuje se typ funkce obsažený v nahrané datové sadě a v knihovně hale»connect INSPIRE SLD se vyhledá odpovídající vrstva stylu. Potom se použijí INSPIRE SLD, jsou-li k dispozici. Přednastavená vrstva stylu se použije pro všechny datové sady, pro které neexistuje odpovídající vrstva stylu.

 Pokud jste na platformě hale»connect zveřejnili GML v souladu s INSPIRE a nepoužíváte INSPIRE SLD, [kontaktujte podporu](https://wetransform.atlassian.net/servicedesk/customer/portal/1).

### **Vytvoření souboru Stylizovaný deskriptor vrstvy pro nahrání do hale»connect**

Soubory stylizovaného deskriptoru vrstvy lze nahrát do sekce Zobrazit služby tématu.

<img src={require("/images/help/cs/Tutorial_SLD_ViewServices.png").default} alt="" title="Nahrání SLD do tématu" class="img-responsive img-inline-help"/>

Když nahrajete datovou sadu do služby hale»connect, je typ funkce v datové sadě identifikován a porovnán s typem funkce, na který se odkazuje v nahraném SLD. SLD se použije, je-li identifikována shoda.

Aby bylo možné nahrát SLD do hale»connect, musí se jednat o plně platný soubor SLD s externími značkami ```StyledLayerDescriptor```, ```NamedLayer``` a ```UserStyle```. V níže uvedeném příkladu jsou prvky ```StyledLayerDescriptor```, ```NamedLayer``` a ```UserStyle``` nekvalifikované, protože přednastavený jmenný prostor dokumentu je ```xmlns="http:// www.opengis.net/sld"```.

SLD pro soubor shapefile musí obsahovat deklaraci jmenného prostoru odkazujícího na schéma shapefile. Deklarace jmenného prostoru souboru shapefile se řídí vzorem: ```xmlns:ns="http://www.esdi-humboldt.eu/hale/shp/<nameOfShapefile>"```. Název souboru shapefile použitý v SLD by měl odpovídat názvu souboru shapefile, který byl nahrán k vytvoření schématu na hale»connect.

hale»connect hledá v SLD atribut ```FeatureTypeName```, který používá pro porovnávání s nahranou datovou sadou.
Atribut ```FeatureTypeName``` je třeba přidat do prvku ```FeatureTypeStyle```. Atribut musí obsahovat předponu jmenného prostoru shapefile a název souboru shapefile:

```xml
      <se:FeatureTypeName>ns:nameOfShapefile</se:FeatureTypeName>
```

Předpona jmenného prostoru souboru shapefile se musí přidat do každé vlastnosti souboru shapefile, na kterou se odkazuje. Například chcete-li k označení vašich polygonů použít atribut shapefile 'name', musí mít předponu jmenného prostoru shapefile ```ns```:

```xml
      <se:Label>
          <ogc:PropertyName>ns:name/text()</ogc:PropertyName>
      </se:Label>
```

:::warning[Caution]

You must add '/text()' after the referenced property in TextSymbolizer Label tags to display text in view services.

:::

### **Přidání názvů vrstev, názvů vrstev a názvů pravidel do souboru Stylizovaný deskriptor vrstvy**

Do SLD lze přidat názvy vrstev a názvy vrstev. Název vrstvy INSPIRE pro typ funkce Chráněné lokality je ```PS.ProtectedSite```. Názvy vrstev lze přidat do prvku NamedLayer.Name element:

```xml
	<NamedLayer>
	    <se:Name>PS.ProtectedSite</se:Name> ...
	    ...
	</NamedLayer>
```

Název vrstvy INSPIRE pro typ funkce Chráněné lokality je ```Chráněné lokality```. Názvy vrstev lze přidat do prvku NamedLayer.Description.Title element:

```xml
	<NamedLayer>
	    <se:Name>PS.ProtectedSite</se:Name>
	    <se:Description>
    	    <se:Title>Protected Sites</se:Title>
	    </se:Description>...
	    ...
	</NamedLayer>
```

Názvy pravidel řídí text zobrazený v legendě WMS. Názvy pravidel lze přidat do prvku Rule.Description.Title element:

```xml
	<se:Rule>
	    <se:Description>
        <se:Title>protected sites: polygon</se:Title>
	    </se:Description>...
        ...
	</se:Rule>
```

Nyní se podívejme na příklad plně platného souboru SLD, který lze publikovat na hale»connect.

***SLD pro shapefile***

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

Dalším příkladem jsou Chráněná území INSPIRE SLD. V tomto příkladu je schéma chráněných lokalit INSPIRE deklarováno jako ```xmlns:ps="http://inspire.ec.europa.eu/schemas/ps/4.0"```

hale»connect hledá v SLD atribut ```FeatureTypeName```, který používá pro porovnávání s nahranou datovou sadou.
Atribut ```FeatureTypeName``` je třeba přidat do prvku ```FeatureTypeStyle```. Atribut musí obsahovat předponu jmenného prostoru schématu INSPIRE a název typu funkce:

```xml
    <se:FeatureTypeName>ps:ProtectedSite</se:FeatureTypeName>
```

Předpona jmenného prostoru schématu se musí přidat ke každému atributu, na který se odkazuje. Například chcete-li použít atribut 'geometrie' k filtrování funkcí, musí mít předponu jmenného prostoru ```ps```:

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

Ve výše uvedeném příkladu filtru se pro filtrování geometrie prvků používá funkce stupně ```IsCurve```, takže pravidlo symboliky se aplikuje pouze na prvky čar. Další informace o funkcích stupňování, které rozšiřují specifikaci SLD, naleznete na [stránkách dokumentace stupňů](http://download.deegree.org/documentation/3.4.5/html/renderstyles.html#deegree-specific-extensions).

Zde je příklad plně platného souboru INSPIRE SLD, který může být zveřejněn na hale»connect. Prvky Chráněného území mohou být bodové, liniové nebo mnohoúhelníkové a SLD aplikuje na každý typ geometrie jiné pravidlo symboliky.

***SLD pro GML***

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
