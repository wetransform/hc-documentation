"use strict";(self.webpackChunkhc_documentation=self.webpackChunkhc_documentation||[]).push([[7034],{4945:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tutorials/2018-05-03-sld-tutorial","title":"Styled Layer Descriptor-Dateien (SLDs) f\xfcr hale\xbbconnect erstellen","description":"Styled Layer Descriptor-Dateien","source":"@site/i18n/de/docusaurus-plugin-content-docs/current/tutorials/2018-05-03-sld-tutorial.md","sourceDirName":"tutorials","slug":"/tutorials/2018-05-03-sld-tutorial","permalink":"/de/docs/tutorials/2018-05-03-sld-tutorial","draft":false,"unlisted":false,"editUrl":"https://github.com/wetransform/hc-documentation/tree/master/i18n/de/docusaurus-plugin-content-docs/current/tutorials/2018-05-03-sld-tutorial.md","tags":[],"version":"current","frontMatter":{"title":"Styled Layer Descriptor-Dateien (SLDs) f\xfcr hale\xbbconnect erstellen","categories":["help-page-category-tutorials","help-page-subcategory-tutorials"],"layout":"help-detail","language":"de"},"sidebar":"tutorialSidebar","previous":{"title":"Verwenden von hale\xbbconnect-Ressourcen in ArcGIS Online","permalink":"/de/docs/tutorials/2018-05-02-arcGisOnline-tutorial"},"next":{"title":"Vorbereiten von ESRI-Shapefiles f\xfcr die Nutzung in einer Online-Transformation","permalink":"/de/docs/tutorials/2018-05-04-shp-tutorial"}}');var s=t(4848),i=t(8453);const a={title:"Styled Layer Descriptor-Dateien (SLDs) f\xfcr hale\xbbconnect erstellen",categories:["help-page-category-tutorials","help-page-subcategory-tutorials"],layout:"help-detail",language:"de"},l=void 0,o={},d=[{value:"<strong>Styled Layer Descriptor-Dateien</strong>",id:"styled-layer-descriptor-dateien",level:3},{value:"<strong>INSPIRE SLD-Dateien</strong>",id:"inspire-sld-dateien",level:3},{value:"<strong>Eine SLD-Datei zum Hochladen auf hale\xbbconnect erstellen</strong>",id:"eine-sld-datei-zum-hochladen-auf-haleconnect-erstellen",level:3},{value:"<strong>Hinzuf\xfcgen von Namen f\xfcr Layer sowie Titeln f\xfcr Layer und Regeln zu einer Styled Layer Descriptor-Datei</strong>",id:"hinzuf\xfcgen-von-namen-f\xfcr-layer-sowie-titeln-f\xfcr-layer-und-regeln-zu-einer-styled-layer-descriptor-datei",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"styled-layer-descriptor-dateien",children:(0,s.jsx)(n.strong,{children:"Styled Layer Descriptor-Dateien"})}),"\n",(0,s.jsx)(n.p,{children:"Der OGC-Standard Styled Layer Descriptor (SLD) definiert ein XML-Format um Regeln f\xfcr die Darstellung von Objekten festzulegen. Dabei werden die OGC-Standards Symbology Encoding (SE) und Filter Encoding (FE) genutzt. Der SLD-Standard erweitert den OGC Web Map Service (WMS). Ein einfacher WMS unterst\xfctzt benannte Layer und Stile, die es Nutzenden jedoch nicht erm\xf6glichen, eine kundenspezifische Symbologie festzulegen. Der SLD-Standard erweitert den WMS-Standard um es Nutzenden zu erm\xf6glichen, Darstellungsregeln in einer SLD-Datei festzulegen."}),"\n",(0,s.jsx)(n.p,{children:"Die Enkodierungen f\xfcr Symbologien unterst\xfctzen grundlegende kartographische Darstellungs-Optionen. Fl\xe4chenhafte Objekte k\xf6nnen mit Hilfe verschiedener Farb- oder F\xfcll-Optionen und Transparenz-Einstellungen dargestellt werden. Linienhafte Objekte k\xf6nnen auf verschiedene Weisen dargestellt werden, indem Farbe, Transparenz, Liniensymbolik, gestrichelte Linien und Vereinigungs-Optionen bearbeitet werden. Vereinigungs-Optionen kontrollieren, wie Vereinigungs-Punkte linienhafter Objekte dargestellt werden. Punkt-Objekte k\xf6nnen unter Verwendung graphischer Symbole, wie beispielsweise Piktogramme, oder \xfcber das WellKnownName-Element dargestellt werden, welches die Werte Rechteck, Kreis, Dreieck, Stern, Kreuz und x beinhaltet."}),"\n",(0,s.jsx)(n.p,{children:"Der Symbology Encoding-Standard (SE) unterst\xfctzt auch das Styling von Beschriftungen. Schriftart, -formatierung und -gr\xf6\xdfe k\xf6nnen ausgew\xe4hlt werden. Platzierungsregeln erm\xf6glichen es Nutzenden, unter Angabe von Abst\xe4nden, Rotationen oder geschwungener Textdarstellung zu kontrollieren, wie Beschriftungen im Verh\xe4ltnis zu dem Geometrieobjekt, das sie beschreiben, platziert werden sollen."}),"\n",(0,s.jsx)(n.p,{children:"Filter encoding (FE) kann genutzt werden, um unterschiedliche Symbologien f\xfcr verschiedene Geometrien oder Attribute zu nutzen. Viele INSPIRE-SLD-Dateien basieren auf INSPIRE Codelisten-Werten. Datens\xe4tze werden basierend auf den Codelisten-Werten gefiltert um einen den Kriterien entsprechenden Sub-Datensatz zu erhalten, auf den eine entsprechende Symbologie angewandt wird. In anderen F\xe4llen werden Sub-Datens\xe4tze f\xfcr die Anwendung verschiedener SLD-Darstellungen basierend auf dem Geometrie-Typ gefiltert."}),"\n",(0,s.jsx)(n.p,{children:"Bei wetransform nutzen wir die Open-Source-L\xf6sung deegree, um OGC- und INSPIRE-konforme Darstellungs- und Download-Dienste bereitzustellen. deegree Darstellungs-Dienste (Web Map Services) unterst\xfctzen die Nutzung von SLDs. Wie die meisten Webserver unterst\xfctzt deegree diverse server-spezifische Funktionalit\xe4ten, welche die SLD-, SE- und FE-Standards um kundenspezifische Styling-Optionen erweitern."}),"\n",(0,s.jsx)(n.h3,{id:"inspire-sld-dateien",children:(0,s.jsx)(n.strong,{children:"INSPIRE SLD-Dateien"})}),"\n",(0,s.jsx)(n.p,{children:"hale\xbbconnect verf\xfcgt \xfcber eine umfangreiche Bibliothek INSPIRE-konformer SLD-Dateien zu allen 34 Anhang-Themen. Wenn ein Datensatz auf der hale\xbbconnect Plattform ver\xf6ffentlicht wird, wird die in den hochgeladenen Daten enthaltene Objektart identifiziert und die hale\xbbconnect INSPIRE-SLD-Bibliothek nach dem passenden Style-Layer durchsucht. Die entsprechende INSPIRE-SLD-Datei wird, wenn verf\xfcgbar, auf die Daten angewandt. Wenn kein passender Style-Layer existiert, wird auf alle Datens\xe4tze ein Standard-Style-Layer angewandt."}),"\n",(0,s.jsxs)(n.p,{children:["Wenn sie INSPIRE-konforme GML-Daten auf der hale\xbbconnect Plattform ver\xf6ffentlicht haben und kein INSPIRE-SLD auf diese angewandt wird, kontaktieren sie bitte unseren ",(0,s.jsx)(n.a,{href:"https://wetransform.atlassian.net/servicedesk/customer/portal/1",children:"Support"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"eine-sld-datei-zum-hochladen-auf-haleconnect-erstellen",children:(0,s.jsx)(n.strong,{children:"Eine SLD-Datei zum Hochladen auf hale\xbbconnect erstellen"})}),"\n",(0,s.jsx)(n.p,{children:"SLD-Dateien k\xf6nnen im \xabDarstellungs-Dienste\xbb-Bereich von Themen hochgeladen werden."}),"\n",(0,s.jsx)("img",{src:t(5866).A,alt:"",title:"Ein SLD zu einem Thema hochladen",className:"img-responsive img-inline-help"}),"\n",(0,s.jsx)(n.p,{children:"Wenn sie einen Datensatz auf hale\xbbconnect hochladen, wird die im Datensatz enthaltene Objektart identifiziert und gegen die Objektarten gepr\xfcft, die in der hochgeladenen SLD-Datei enthalten sind. Die SLD-Datei wird angewandt, wenn eine passende Objektart identifiziert wird."}),"\n",(0,s.jsxs)(n.p,{children:["Um eine SLD-Datei auf hale\xbbconnect hochladen zu k\xf6nnen, muss diese eine valide SLD-Datei mit den umschlie\xdfenden Elementen ",(0,s.jsx)(n.code,{children:"StyledLayerDescriptor"}),", ",(0,s.jsx)(n.code,{children:"NamedLayer"})," und ",(0,s.jsx)(n.code,{children:"UserStyle"})," sein. In dem unten aufgef\xfchrten Beispiel werden die ",(0,s.jsx)(n.code,{children:"StyledLayerDescriptor"}),", ",(0,s.jsx)(n.code,{children:"NamedLayer"})," und ",(0,s.jsx)(n.code,{children:"UserStyle"}),"-Elemente nicht \xfcber einen Namensraum qualifiziert, da der Standard-Namensraum des Dokuments ",(0,s.jsx)(n.code,{children:'xmlns="http://www.opengis.net/sld"'})," ist."]}),"\n",(0,s.jsxs)(n.p,{children:["Ein SLD f\xfcr ein Shapefile muss eine Namensraum-Definition enthalten, die auf das Shapefile-Schema verweist. Die Namensraum-Definition f\xfcr Shapefiles hat folgendes Muster: ",(0,s.jsx)(n.code,{children:'xmlns:ns="http://www.esdi-humboldt.eu/hale/shp/<NameDesShapefiles>"'}),". Der Shapefile-Name, der in der SLD-Datei verwendet wird, sollte mit dem Namen des Shapefiles \xfcbereinstimmen, das zum Anlegen des entsprechenden Schemas auf hale\xbbconnect hochgeladen wurde."]}),"\n",(0,s.jsxs)(n.p,{children:["hale\xbbconnect sucht im SLD nach einem ",(0,s.jsx)(n.code,{children:"FeatureTypeName"}),"-Element, das dann mit den Inhalten des hochgeladenen Datensatzes abgeglichen wird.\nDas ",(0,s.jsx)(n.code,{children:"FeatureTypeName"}),"-Element muss zum ",(0,s.jsx)(n.code,{children:"FeatureTypeStyle"}),"-Element hinzugef\xfcgt werden. Das Element muss das Shapefile-Namensraum-Pr\xe4fix und den Namen des Shapefiles beinhalten:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:"      <se:FeatureTypeName>ns:NameDesShapefiles</se:FeatureTypeName>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Das Shapefile-Namensraum-Pr\xe4fix muss zu jeder Shapefile-Eigenschaft hinzugef\xfcgt werden, auf die verwiesen wird. Wenn sie beispielsweise das Shapefile-Attribut \xabname\xbb verwenden m\xf6chten, um ihre Polygone zu beschriften, muss es mit dem Shapefile-Namensraum-Pr\xe4fix ",(0,s.jsx)(n.code,{children:"ns"})," versehen werden:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:"      <se:Label>\n          <ogc:PropertyName>ns:name/text()</ogc:PropertyName>\n      </se:Label>\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"Sie m\xfcssen '/text()' hinter der referenzierten Eigenschaft in TextSymbolizer Label-Tags hinzuf\xfcgen um den Text in Darstellungsdiensten anzuzeigen."})}),"\n",(0,s.jsx)(n.h3,{id:"hinzuf\xfcgen-von-namen-f\xfcr-layer-sowie-titeln-f\xfcr-layer-und-regeln-zu-einer-styled-layer-descriptor-datei",children:(0,s.jsx)(n.strong,{children:"Hinzuf\xfcgen von Namen f\xfcr Layer sowie Titeln f\xfcr Layer und Regeln zu einer Styled Layer Descriptor-Datei"})}),"\n",(0,s.jsxs)(n.p,{children:["Namen und Titel f\xfcr Layer k\xf6nnen zu SLD-Dateien hinzugef\xfcgt werden. Dabei d\xfcrfen Layernamen keine Leerzeichen oder Doppelpunkte enthalten. Der von INSPIRE vorgesehene Layername f\xfcr Schutzgebiete ist beispielsweise ",(0,s.jsx)(n.code,{children:"PS.ProtectedSite"}),". Layernamen k\xf6nnen im Element NamedLayer.Name hinzugef\xfcgt werden."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:"\t<NamedLayer>\n\t    <se:Name>PS.ProtectedSite</se:Name> ...\n\t    ...\n\t</NamedLayer>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Der von INSPIRE vorgesehene Layertitel f\xfcr Schutzgebiete ist ",(0,s.jsx)(n.code,{children:"Protected Sites"}),". Layertitel k\xf6nnen im Element NamedLayer.Description.Title hinzugef\xfcgt werden."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:"\t<NamedLayer>\n\t    <se:Name>PS.ProtectedSite</se:Name>\n\t    <se:Description>\n    \t    <se:Title>Protected Sites</se:Title>\n\t    </se:Description>...\n\t    ...\n\t</NamedLayer>\n"})}),"\n",(0,s.jsx)(n.p,{children:"\xdcber Titel f\xfcr Regeln wird der Text bestimmt, der in der Legende des WMS angezeigt wird. Titel f\xfcr Regeln k\xf6nnen im Element Rule.Description.Title angegeben werden."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:"\t<se:Rule>\n\t    <se:Description>\n        <se:Title>protected sites: polygon</se:Title>\n\t    </se:Description>...\n        ...\n\t</se:Rule>\n"})}),"\n",(0,s.jsx)(n.p,{children:"Werfen wir nun einen Blick auf ein Beispiel f\xfcr ein valides SLD, wie es auf hale\xbbconnect ver\xf6ffentlicht werden kann."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"SLD f\xfcr Shapefile"})})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:'      <?xml version="1.0" encoding="UTF-8"?>\n      <StyledLayerDescriptor\n      version="1.1.0"  \n      xmlns="http://www.opengis.net/sld"\n      xmlns:ogc="http://www.opengis.net/ogc"\n      xmlns:se="http://www.opengis.net/se"\n      xmlns:xlink="http://www.w3.org/1999/xlink"\n      xmlns:gml="http://www.opengis.net/gml/3.2"\n      xmlns:sld="http://www.opengis.net/sld"\n      xmlns:ns="http://www.esdi-humboldt.eu/hale/shp/myShapefile"\n      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n      xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.1.0/sldAll.xsd http://www.opengis.net/se http://schemas.opengis.net/se/1.1.0/FeatureStyle.xsd">\n      <NamedLayer>\n        <se:Name>MyShapefileLayer</se:Name>\n        <UserStyle>\n          <se:Name>MyStyle</se:Name>\n          <se:Description>\n            <se:Title>MyStyle</se:Title>\n          </se:Description>\n          <se:FeatureTypeStyle>\n            <se:Name>Default Polygon Style</se:Name>  \n            <se:FeatureTypeName>ns:myShapefile</se:FeatureTypeName>\t  \n              <se:Rule>\n                <se:Description>\n                  <se:Title>Shapefile Polygons</se:Title>\n                </se:Description>\n                <se:PolygonSymbolizer>\n                  <se:Fill>\n                    <se:SvgParameter name="fill">#78C46E</se:SvgParameter>\n                    <se:SvgParameter name="fill-opacity">0.5</se:SvgParameter>\n                  </se:Fill>\n                  <se:Stroke>\n                    <se:SvgParameter name="stroke">#38A800</se:SvgParameter>\n                    <se:SvgParameter name="stroke-width">1.5</se:SvgParameter>\n                  </se:Stroke>\n                </se:PolygonSymbolizer>\n              </se:Rule>\n              <se:Rule>\n                <se:MaxScaleDenominator>40000</se:MaxScaleDenominator>\n                <se:TextSymbolizer>\n                  <se:Label>\n                    <ogc:PropertyName>ns:name/text()</ogc:PropertyName>\n                  </se:Label>\n                  <se:Font>\n                    <se:SvgParameter name="font-family">Arial</se:SvgParameter>\n                    <se:SvgParameter name="font-size">14</se:SvgParameter>\n                    <se:SvgParameter name="font-style">normal</se:SvgParameter>\n                    <se:SvgParameter name="font-weight">bold</se:SvgParameter>\n                  </se:Font>\n                  <se:Halo>\n                    <se:Radius>3</se:Radius>\n                    <se:Fill>\n                      <se:SvgParameter name="fill">#ffffff</se:SvgParameter>\n                    </se:Fill>\n                  </se:Halo>\n                  <se:Fill>\n                    <se:SvgParameter name="fill">#38A800</se:SvgParameter>\n                  </se:Fill>\n              </se:TextSymbolizer>          \n            </se:Rule>\n          </se:FeatureTypeStyle>\n        </UserStyle>\n      </NamedLayer>\n    </StyledLayerDescriptor>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Das n\xe4chste Beispiel ist das INSPRE-Schutzgebiete-SLD. In diesem Beispiel wird auf das INSPIRE-Schutzgebiete-Schema unter ",(0,s.jsx)(n.code,{children:'xmlns:ps="http://inspire.ec.europa.eu/schemas/ps/4.0"'})," verwiesen."]}),"\n",(0,s.jsxs)(n.p,{children:["hale\xbbconnect sucht in der SLD-Datei nach einem ",(0,s.jsx)(n.code,{children:"FeatureTypeName"}),"-Element, dessen Inhalt gegen den hochgeladenen Datensatz gepr\xfcft wird.\nDas ",(0,s.jsx)(n.code,{children:"FeatureTypeName"}),"-Element muss dem ",(0,s.jsx)(n.code,{children:"FeatureTypeStyle"}),"-Element hinzugef\xfcgt werden. Das Element muss das INSPIRE-Schema-Namensraum-Pr\xe4fix und den Namen der Objektart enthalten:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:"    <se:FeatureTypeName>ps:ProtectedSite</se:FeatureTypeName>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Das Schema-Namensraum-Pr\xe4fix muss jedem Attribut zugewiesen werden, auf das verwiesen wird. Wenn sie beispielsweise das Attribut \xabgeometry\xbb nutzen m\xf6chten, um ihre Objekte zu filtern, muss es das Namensraum-Pr\xe4fix ",(0,s.jsx)(n.code,{children:"ps"})," haben:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:'        <ogc:Filter>\n          <ogc:PropertyIsEqualTo>\n            <ogc:Function name="IsCurve">\n              <ogc:PropertyName>ps:geometry</ogc:PropertyName>\n            </ogc:Function>\n            <ogc:Literal>true</ogc:Literal>\n          </ogc:PropertyIsEqualTo>\n        </ogc:Filter>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["In dem aufgef\xfchrten Filter-Beispiel wird die deegree-Funktion ",(0,s.jsx)(n.code,{children:"IsCurve"})," genutzt um nach der Objekt-Geometrie zu filtern, sodass die Symbologie-Regeln nur auf linienhafte Objekte angewandt werden. Mehr Informationen zu deegree-Funktionen, welche die SLD-Spezifikation erweitern, finden sie in der ",(0,s.jsx)(n.a,{href:"http://download.deegree.org/documentation/3.4.5/html/renderstyles.html#deegree-specific-extensions",children:"deegree Dokumentation"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Im Folgenden finden sie ein Beispiel f\xfcr eine valide INSPIRE-SLD-Datei, die auf hale\xbbconnect genutzt werden kann. Schutzgebiete-Objekte k\xf6nnen Punkte, Linien oder Polygone sein und die SLD-Datei wendet f\xfcr jeden dieser Geometrie-Typen unterschiedliche Symbologien an."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"SLD f\xfcr GML"})})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:'      <?xml version="1.0" encoding="UTF-8"?>\n      <StyledLayerDescriptor\n      version="1.1.0"  \n      xmlns="http://www.opengis.net/sld"\n      xmlns:ogc="http://www.opengis.net/ogc"\n      xmlns:se="http://www.opengis.net/se"\n      xmlns:xlink="http://www.w3.org/1999/xlink"\n      xmlns:gml="http://www.opengis.net/gml/3.2"\n      xmlns:sld="http://www.opengis.net/sld"\n      xmlns:ps="http://inspire.ec.europa.eu/schemas/ps/4.0"\n      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n      xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.1.0/sldAll.xsd http://www.opengis.net/se http://schemas.opengis.net/se/1.1.0/FeatureStyle.xsd">\n      <NamedLayer>\n        <se:Name>PS.ProtectedSite</se:Name>\n        <se:Description>\n          \t<se:Title>Protected Sites</se:Title>\n      \t</se:Description>\n        <UserStyle>\n          <se:Name>PS.ProtectedSite.Default</se:Name>\n          <se:FeatureTypeStyle>\n            <se:Description>\n              <se:Title>Protected Sites Default Style</se:Title>\n              <se:Abstract>Point geometries are rendered as a square with a size of 6 pixels, with a 50% grey (#808080) fill and a black (#000000) outline. Line geometries are rendered as a solid black line with a stroke width of 1 pixel. Polygon geometries are rendered using a 50% grey (#808080) fill and a solid black outline with a stroke width of 1 pixel.</se:Abstract>\n            </se:Description>\n            <se:FeatureTypeName>ps:ProtectedSite</se:FeatureTypeName>\n              <se:Rule>\n                <se:Description>\n                  <se:Title>protected sites: polygon</se:Title>\n                </se:Description>\n                <ogc:Filter>\n                  <ogc:PropertyIsEqualTo>\n                    <ogc:Function name="IsSurface">\n                      <ogc:PropertyName>ps:geometry</ogc:PropertyName>\n                    </ogc:Function>\n                    <ogc:Literal>true</ogc:Literal>\n                    </ogc:PropertyIsEqualTo>\n                </ogc:Filter>\n                <se:PolygonSymbolizer>\n                  <se:Geometry>\n                    <ogc:PropertyName>ps:geometry</ogc:PropertyName>\n                  </se:Geometry>\n                  <se:Fill>\n                    <se:SvgParameter name="fill">#808080</se:SvgParameter>\n                  </se:Fill>\n                  <se:Stroke>\n                    <se:SvgParameter name="stroke">#000000</se:SvgParameter>\n                    <se:SvgParameter name="stroke-width">1</se:SvgParameter>\n                  </se:Stroke>\n                </se:PolygonSymbolizer>\n              </se:Rule>\n              <se:Rule>\n                <se:Description>\n                  <se:Title>protected sites: line</se:Title>\n                </se:Description>\n                <ogc:Filter>\n                  <ogc:PropertyIsEqualTo>\n                    <ogc:Function name="IsCurve">\n                      <ogc:PropertyName>ps:geometry</ogc:PropertyName>\n                    </ogc:Function>\n                    <ogc:Literal>true</ogc:Literal>\n                  </ogc:PropertyIsEqualTo>\n                </ogc:Filter>\n                <se:LineSymbolizer>\n                  <se:Geometry>\n                    <ogc:PropertyName>ps:geometry</ogc:PropertyName>\n                  </se:Geometry>\n                  <se:Stroke>\n                    <se:SvgParameter name="stroke">#000000</se:SvgParameter>\n                    <se:SvgParameter name="stroke-width">1</se:SvgParameter>\n                  </se:Stroke>\n                </se:LineSymbolizer>\n              </se:Rule>\n              <se:Rule>\n                <se:Description>\n                  <se:Title>protected sites: point</se:Title>\n                </se:Description>\n                <ogc:Filter>\n                  <ogc:PropertyIsEqualTo>\n                    <ogc:Function name="IsPoint">\n                      <ogc:PropertyName>ps:geometry</ogc:PropertyName>\n                    </ogc:Function>\n                    <ogc:Literal>true</ogc:Literal>\n                  </ogc:PropertyIsEqualTo>\n                </ogc:Filter>\n                <se:PointSymbolizer>\n                  <se:Geometry>\n                    <ogc:PropertyName>ps:geometry</ogc:PropertyName>\n                  </se:Geometry>\n                  <se:Graphic>\n                    <se:Mark>\n                      <se:WellKnownName>square</se:WellKnownName>\n                      <se:Fill>\n                        <se:SvgParameter name="fill">#808080</se:SvgParameter>\n                      </se:Fill>\n                      <se:Stroke>\n                        <se:SvgParameter name="stroke">#000000</se:SvgParameter>\n                        <se:SvgParameter name="stroke-width">1</se:SvgParameter>\n                      </se:Stroke>\n                    </se:Mark>\n                    <se:Size>6</se:Size>\n                  </se:Graphic>\n                </se:PointSymbolizer>\n              </se:Rule>\n            </se:FeatureTypeStyle>\n          </UserStyle>\n        </NamedLayer>\n      </StyledLayerDescriptor>\n'})})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},5866:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/Tutorial_SLD_ViewServices-4d0d142916e5286aa53af8f3ad6198d1.png"},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var r=t(6540);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);