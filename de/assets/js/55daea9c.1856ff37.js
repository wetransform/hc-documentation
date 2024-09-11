"use strict";(self.webpackChunkhc_documentation=self.webpackChunkhc_documentation||[]).push([[7034],{5680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>c});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),d=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=d(e.components);return r.createElement(o.Provider,{value:n},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),g=d(t),p=a,c=g["".concat(o,".").concat(p)]||g[p]||u[p]||i;return t?r.createElement(c,s(s({ref:n},m),{},{components:t})):r.createElement(c,s({ref:n},m))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=p;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[g]="string"==typeof e?e:a,s[1]=l;for(var d=2;d<i;d++)s[d]=t[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2336:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=t(8168),a=(t(6540),t(5680));const i={title:"Styled Layer Descriptor-Dateien (SLDs) f\xfcr hale\xbbconnect erstellen",categories:["help-page-category-tutorials","help-page-subcategory-tutorials"],layout:"help-detail",language:"de"},s=void 0,l={unversionedId:"tutorials/2018-05-03-sld-tutorial",id:"tutorials/2018-05-03-sld-tutorial",title:"Styled Layer Descriptor-Dateien (SLDs) f\xfcr hale\xbbconnect erstellen",description:"Styled Layer Descriptor-Dateien",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/tutorials/2018-05-03-sld-tutorial.md",sourceDirName:"tutorials",slug:"/tutorials/2018-05-03-sld-tutorial",permalink:"/de/docs/tutorials/2018-05-03-sld-tutorial",draft:!1,editUrl:"https://github.com/wetransform/hc-documentation/tree/master/i18n/de/docusaurus-plugin-content-docs/current/tutorials/2018-05-03-sld-tutorial.md",tags:[],version:"current",frontMatter:{title:"Styled Layer Descriptor-Dateien (SLDs) f\xfcr hale\xbbconnect erstellen",categories:["help-page-category-tutorials","help-page-subcategory-tutorials"],layout:"help-detail",language:"de"},sidebar:"tutorialSidebar",previous:{title:"Verwenden von hale\xbbconnect-Ressourcen in ArcGIS Online",permalink:"/de/docs/tutorials/2018-05-02-arcGisOnline-tutorial"},next:{title:"Vorbereiten von ESRI-Shapefiles f\xfcr die Nutzung in einer Online-Transformation",permalink:"/de/docs/tutorials/2018-05-04-shp-tutorial"}},o={},d=[{value:"<strong>Styled Layer Descriptor-Dateien</strong>",id:"styled-layer-descriptor-dateien",level:3},{value:"<strong>INSPIRE SLD-Dateien</strong>",id:"inspire-sld-dateien",level:3},{value:"<strong>Eine SLD-Datei zum Hochladen auf hale\xbbconnect erstellen</strong>",id:"eine-sld-datei-zum-hochladen-auf-haleconnect-erstellen",level:3},{value:"<strong>Hinzuf\xfcgen von Namen f\xfcr Layer sowie Titeln f\xfcr Layer und Regeln zu einer Styled Layer Descriptor-Datei</strong>",id:"hinzuf\xfcgen-von-namen-f\xfcr-layer-sowie-titeln-f\xfcr-layer-und-regeln-zu-einer-styled-layer-descriptor-datei",level:3}],m={toc:d},g="wrapper";function u(e){let{components:n,...i}=e;return(0,a.yg)(g,(0,r.A)({},m,i,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h3",{id:"styled-layer-descriptor-dateien"},(0,a.yg)("strong",{parentName:"h3"},"Styled Layer Descriptor-Dateien")),(0,a.yg)("p",null,"Der OGC-Standard Styled Layer Descriptor (SLD) definiert ein XML-Format um Regeln f\xfcr die Darstellung von Objekten festzulegen. Dabei werden die OGC-Standards Symbology Encoding (SE) und Filter Encoding (FE) genutzt. Der SLD-Standard erweitert den OGC Web Map Service (WMS). Ein einfacher WMS unterst\xfctzt benannte Layer und Stile, die es Nutzenden jedoch nicht erm\xf6glichen, eine kundenspezifische Symbologie festzulegen. Der SLD-Standard erweitert den WMS-Standard um es Nutzenden zu erm\xf6glichen, Darstellungsregeln in einer SLD-Datei festzulegen."),(0,a.yg)("p",null,"Die Enkodierungen f\xfcr Symbologien unterst\xfctzen grundlegende kartographische Darstellungs-Optionen. Fl\xe4chenhafte Objekte k\xf6nnen mit Hilfe verschiedener Farb- oder F\xfcll-Optionen und Transparenz-Einstellungen dargestellt werden. Linienhafte Objekte k\xf6nnen auf verschiedene Weisen dargestellt werden, indem Farbe, Transparenz, Liniensymbolik, gestrichelte Linien und Vereinigungs-Optionen bearbeitet werden. Vereinigungs-Optionen kontrollieren, wie Vereinigungs-Punkte linienhafter Objekte dargestellt werden. Punkt-Objekte k\xf6nnen unter Verwendung graphischer Symbole, wie beispielsweise Piktogramme, oder \xfcber das WellKnownName-Element dargestellt werden, welches die Werte Rechteck, Kreis, Dreieck, Stern, Kreuz und x beinhaltet."),(0,a.yg)("p",null,"Der Symbology Encoding-Standard (SE) unterst\xfctzt auch das Styling von Beschriftungen. Schriftart, -formatierung und -gr\xf6\xdfe k\xf6nnen ausgew\xe4hlt werden. Platzierungsregeln erm\xf6glichen es Nutzenden, unter Angabe von Abst\xe4nden, Rotationen oder geschwungener Textdarstellung zu kontrollieren, wie Beschriftungen im Verh\xe4ltnis zu dem Geometrieobjekt, das sie beschreiben, platziert werden sollen."),(0,a.yg)("p",null,"Filter encoding (FE) kann genutzt werden, um unterschiedliche Symbologien f\xfcr verschiedene Geometrien oder Attribute zu nutzen. Viele INSPIRE-SLD-Dateien basieren auf INSPIRE Codelisten-Werten. Datens\xe4tze werden basierend auf den Codelisten-Werten gefiltert um einen den Kriterien entsprechenden Sub-Datensatz zu erhalten, auf den eine entsprechende Symbologie angewandt wird. In anderen F\xe4llen werden Sub-Datens\xe4tze f\xfcr die Anwendung verschiedener SLD-Darstellungen basierend auf dem Geometrie-Typ gefiltert."),(0,a.yg)("p",null,"Bei wetransform nutzen wir die Open-Source-L\xf6sung deegree, um OGC- und INSPIRE-konforme Darstellungs- und Download-Dienste bereitzustellen. deegree Darstellungs-Dienste (Web Map Services) unterst\xfctzen die Nutzung von SLDs. Wie die meisten Webserver unterst\xfctzt deegree diverse server-spezifische Funktionalit\xe4ten, welche die SLD-, SE- und FE-Standards um kundenspezifische Styling-Optionen erweitern."),(0,a.yg)("h3",{id:"inspire-sld-dateien"},(0,a.yg)("strong",{parentName:"h3"},"INSPIRE SLD-Dateien")),(0,a.yg)("p",null," hale\xbbconnect verf\xfcgt \xfcber eine umfangreiche Bibliothek INSPIRE-konformer SLD-Dateien zu allen 34 Anhang-Themen. Wenn ein Datensatz auf der hale\xbbconnect Plattform ver\xf6ffentlicht wird, wird die in den hochgeladenen Daten enthaltene Objektart identifiziert und die hale\xbbconnect INSPIRE-SLD-Bibliothek nach dem passenden Style-Layer durchsucht. Die entsprechende INSPIRE-SLD-Datei wird, wenn verf\xfcgbar, auf die Daten angewandt. Wenn kein passender Style-Layer existiert, wird auf alle Datens\xe4tze ein Standard-Style-Layer angewandt."),(0,a.yg)("p",null," Wenn sie INSPIRE-konforme GML-Daten auf der hale\xbbconnect Plattform ver\xf6ffentlicht haben und kein INSPIRE-SLD auf diese angewandt wird, kontaktieren sie bitte unseren ",(0,a.yg)("a",{parentName:"p",href:"https://wetransform.atlassian.net/servicedesk/customer/portal/1"},"Support"),"."),(0,a.yg)("h3",{id:"eine-sld-datei-zum-hochladen-auf-haleconnect-erstellen"},(0,a.yg)("strong",{parentName:"h3"},"Eine SLD-Datei zum Hochladen auf hale\xbbconnect erstellen")),(0,a.yg)("p",null,"SLD-Dateien k\xf6nnen im ","\xab","Darstellungs-Dienste","\xbb","-Bereich von Themen hochgeladen werden."),(0,a.yg)("img",{src:t(5439).A,alt:"",title:"Ein SLD zu einem Thema hochladen",className:"img-responsive img-inline-help"}),(0,a.yg)("p",null,"Wenn sie einen Datensatz auf hale\xbbconnect hochladen, wird die im Datensatz enthaltene Objektart identifiziert und gegen die Objektarten gepr\xfcft, die in der hochgeladenen SLD-Datei enthalten sind. Die SLD-Datei wird angewandt, wenn eine passende Objektart identifiziert wird."),(0,a.yg)("p",null,"Um eine SLD-Datei auf hale\xbbconnect hochladen zu k\xf6nnen, muss diese eine valide SLD-Datei mit den umschlie\xdfenden Elementen ",(0,a.yg)("inlineCode",{parentName:"p"},"StyledLayerDescriptor"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"NamedLayer")," und ",(0,a.yg)("inlineCode",{parentName:"p"},"UserStyle")," sein. In dem unten aufgef\xfchrten Beispiel werden die ",(0,a.yg)("inlineCode",{parentName:"p"},"StyledLayerDescriptor"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"NamedLayer")," und ",(0,a.yg)("inlineCode",{parentName:"p"},"UserStyle"),"-Elemente nicht \xfcber einen Namensraum qualifiziert, da der Standard-Namensraum des Dokuments ",(0,a.yg)("inlineCode",{parentName:"p"},'xmlns="http://www.opengis.net/sld"')," ist."),(0,a.yg)("p",null,"Ein SLD f\xfcr ein Shapefile muss eine Namensraum-Definition enthalten, die auf das Shapefile-Schema verweist. Die Namensraum-Definition f\xfcr Shapefiles hat folgendes Muster: ",(0,a.yg)("inlineCode",{parentName:"p"},'xmlns:ns="http://www.esdi-humboldt.eu/hale/shp/<NameDesShapefiles>"'),". Der Shapefile-Name, der in der SLD-Datei verwendet wird, sollte mit dem Namen des Shapefiles \xfcbereinstimmen, das zum Anlegen des entsprechenden Schemas auf hale\xbbconnect hochgeladen wurde."),(0,a.yg)("p",null,"hale\xbbconnect sucht im SLD nach einem ",(0,a.yg)("inlineCode",{parentName:"p"},"FeatureTypeName"),"-Element, das dann mit den Inhalten des hochgeladenen Datensatzes abgeglichen wird.\nDas ",(0,a.yg)("inlineCode",{parentName:"p"},"FeatureTypeName"),"-Element muss zum ",(0,a.yg)("inlineCode",{parentName:"p"},"FeatureTypeStyle"),"-Element hinzugef\xfcgt werden. Das Element muss das Shapefile-Namensraum-Pr\xe4fix und den Namen des Shapefiles beinhalten:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"  <se:FeatureTypeName>ns:NameDesShapefiles</se:FeatureTypeName>\n")),(0,a.yg)("p",null,"Das Shapefile-Namensraum-Pr\xe4fix muss zu jeder Shapefile-Eigenschaft hinzugef\xfcgt werden, auf die verwiesen wird. Wenn sie beispielsweise das Shapefile-Attribut ","\xab","name","\xbb"," verwenden m\xf6chten, um ihre Polygone zu beschriften, muss es mit dem Shapefile-Namensraum-Pr\xe4fix ",(0,a.yg)("inlineCode",{parentName:"p"},"ns")," versehen werden:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"  <se:Label>\n      <ogc:PropertyName>ns:name/text()</ogc:PropertyName>\n  </se:Label>\n")),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"Sie m\xfcssen '/text()' hinter der referenzierten Eigenschaft in TextSymbolizer Label-Tags hinzuf\xfcgen um den Text in Darstellungsdiensten anzuzeigen.")),(0,a.yg)("h3",{id:"hinzuf\xfcgen-von-namen-f\xfcr-layer-sowie-titeln-f\xfcr-layer-und-regeln-zu-einer-styled-layer-descriptor-datei"},(0,a.yg)("strong",{parentName:"h3"},"Hinzuf\xfcgen von Namen f\xfcr Layer sowie Titeln f\xfcr Layer und Regeln zu einer Styled Layer Descriptor-Datei")),(0,a.yg)("p",null,"Namen und Titel f\xfcr Layer k\xf6nnen zu SLD-Dateien hinzugef\xfcgt werden. Dabei d\xfcrfen Layernamen keine Leerzeichen oder Doppelpunkte enthalten. Der von INSPIRE vorgesehene Layername f\xfcr Schutzgebiete ist beispielsweise ",(0,a.yg)("inlineCode",{parentName:"p"},"PS.ProtectedSite"),". Layernamen k\xf6nnen im Element NamedLayer.Name hinzugef\xfcgt werden."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"<NamedLayer>\n    <se:Name>PS.ProtectedSite</se:Name> ...\n    ...\n</NamedLayer>\n")),(0,a.yg)("p",null,"Der von INSPIRE vorgesehene Layertitel f\xfcr Schutzgebiete ist ",(0,a.yg)("inlineCode",{parentName:"p"},"Protected Sites"),". Layertitel k\xf6nnen im Element NamedLayer.Description.Title hinzugef\xfcgt werden."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"<NamedLayer>\n    <se:Name>PS.ProtectedSite</se:Name>\n    <se:Description>\n        <se:Title>Protected Sites</se:Title>\n    </se:Description>...\n    ...\n</NamedLayer>\n")),(0,a.yg)("p",null,"\xdcber Titel f\xfcr Regeln wird der Text bestimmt, der in der Legende des WMS angezeigt wird. Titel f\xfcr Regeln k\xf6nnen im Element Rule.Description.Title angegeben werden."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"<se:Rule>\n    <se:Description>\n    <se:Title>protected sites: polygon</se:Title>\n    </se:Description>...\n    ...\n</se:Rule>\n")),(0,a.yg)("p",null,"Werfen wir nun einen Blick auf ein Beispiel f\xfcr ein valides SLD, wie es auf hale\xbbconnect ver\xf6ffentlicht werden kann."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("em",{parentName:"strong"},"SLD f\xfcr Shapefile"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'  <?xml version="1.0" encoding="UTF-8"?>\n  <StyledLayerDescriptor\n  version="1.1.0"  \n  xmlns="http://www.opengis.net/sld"\n  xmlns:ogc="http://www.opengis.net/ogc"\n  xmlns:se="http://www.opengis.net/se"\n  xmlns:xlink="http://www.w3.org/1999/xlink"\n  xmlns:gml="http://www.opengis.net/gml/3.2"\n  xmlns:sld="http://www.opengis.net/sld"\n  xmlns:ns="http://www.esdi-humboldt.eu/hale/shp/myShapefile"\n  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n  xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.1.0/sldAll.xsd http://www.opengis.net/se http://schemas.opengis.net/se/1.1.0/FeatureStyle.xsd">\n  <NamedLayer>\n    <se:Name>MyShapefileLayer</se:Name>\n    <UserStyle>\n      <se:Name>MyStyle</se:Name>\n      <se:Description>\n        <se:Title>MyStyle</se:Title>\n      </se:Description>\n      <se:FeatureTypeStyle>\n        <se:Name>Default Polygon Style</se:Name>  \n        <se:FeatureTypeName>ns:myShapefile</se:FeatureTypeName>   \n          <se:Rule>\n            <se:Description>\n              <se:Title>Shapefile Polygons</se:Title>\n            </se:Description>\n            <se:PolygonSymbolizer>\n              <se:Fill>\n                <se:SvgParameter name="fill">#78C46E</se:SvgParameter>\n                <se:SvgParameter name="fill-opacity">0.5</se:SvgParameter>\n              </se:Fill>\n              <se:Stroke>\n                <se:SvgParameter name="stroke">#38A800</se:SvgParameter>\n                <se:SvgParameter name="stroke-width">1.5</se:SvgParameter>\n              </se:Stroke>\n            </se:PolygonSymbolizer>\n          </se:Rule>\n          <se:Rule>\n            <se:MaxScaleDenominator>40000</se:MaxScaleDenominator>\n            <se:TextSymbolizer>\n              <se:Label>\n                <ogc:PropertyName>ns:name/text()</ogc:PropertyName>\n              </se:Label>\n              <se:Font>\n                <se:SvgParameter name="font-family">Arial</se:SvgParameter>\n                <se:SvgParameter name="font-size">14</se:SvgParameter>\n                <se:SvgParameter name="font-style">normal</se:SvgParameter>\n                <se:SvgParameter name="font-weight">bold</se:SvgParameter>\n              </se:Font>\n              <se:Halo>\n                <se:Radius>3</se:Radius>\n                <se:Fill>\n                  <se:SvgParameter name="fill">#ffffff</se:SvgParameter>\n                </se:Fill>\n              </se:Halo>\n              <se:Fill>\n                <se:SvgParameter name="fill">#38A800</se:SvgParameter>\n              </se:Fill>\n          </se:TextSymbolizer>          \n        </se:Rule>\n      </se:FeatureTypeStyle>\n    </UserStyle>\n  </NamedLayer>\n</StyledLayerDescriptor>\n')),(0,a.yg)("p",null,"Das n\xe4chste Beispiel ist das INSPRE-Schutzgebiete-SLD. In diesem Beispiel wird auf das INSPIRE-Schutzgebiete-Schema unter ",(0,a.yg)("inlineCode",{parentName:"p"},'xmlns:ps="http://inspire.ec.europa.eu/schemas/ps/4.0"')," verwiesen."),(0,a.yg)("p",null,"hale\xbbconnect sucht in der SLD-Datei nach einem ",(0,a.yg)("inlineCode",{parentName:"p"},"FeatureTypeName"),"-Element, dessen Inhalt gegen den hochgeladenen Datensatz gepr\xfcft wird.\nDas ",(0,a.yg)("inlineCode",{parentName:"p"},"FeatureTypeName"),"-Element muss dem ",(0,a.yg)("inlineCode",{parentName:"p"},"FeatureTypeStyle"),"-Element hinzugef\xfcgt werden. Das Element muss das INSPIRE-Schema-Namensraum-Pr\xe4fix und den Namen der Objektart enthalten:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"<se:FeatureTypeName>ps:ProtectedSite</se:FeatureTypeName>\n")),(0,a.yg)("p",null,"Das Schema-Namensraum-Pr\xe4fix muss jedem Attribut zugewiesen werden, auf das verwiesen wird. Wenn sie beispielsweise das Attribut ","\xab","geometry","\xbb"," nutzen m\xf6chten, um ihre Objekte zu filtern, muss es das Namensraum-Pr\xe4fix ",(0,a.yg)("inlineCode",{parentName:"p"},"ps")," haben:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'    <ogc:Filter>\n      <ogc:PropertyIsEqualTo>\n        <ogc:Function name="IsCurve">\n          <ogc:PropertyName>ps:geometry</ogc:PropertyName>\n        </ogc:Function>\n        <ogc:Literal>true</ogc:Literal>\n      </ogc:PropertyIsEqualTo>\n    </ogc:Filter>\n')),(0,a.yg)("p",null,"In dem aufgef\xfchrten Filter-Beispiel wird die deegree-Funktion ",(0,a.yg)("inlineCode",{parentName:"p"},"IsCurve")," genutzt um nach der Objekt-Geometrie zu filtern, sodass die Symbologie-Regeln nur auf linienhafte Objekte angewandt werden. Mehr Informationen zu deegree-Funktionen, welche die SLD-Spezifikation erweitern, finden sie in der ",(0,a.yg)("a",{parentName:"p",href:"http://download.deegree.org/documentation/3.4.5/html/renderstyles.html#deegree-specific-extensions"},"deegree Dokumentation"),"."),(0,a.yg)("p",null,"Im Folgenden finden sie ein Beispiel f\xfcr eine valide INSPIRE-SLD-Datei, die auf hale\xbbconnect genutzt werden kann. Schutzgebiete-Objekte k\xf6nnen Punkte, Linien oder Polygone sein und die SLD-Datei wendet f\xfcr jeden dieser Geometrie-Typen unterschiedliche Symbologien an."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("em",{parentName:"strong"},"SLD f\xfcr GML"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'  <?xml version="1.0" encoding="UTF-8"?>\n  <StyledLayerDescriptor\n  version="1.1.0"  \n  xmlns="http://www.opengis.net/sld"\n  xmlns:ogc="http://www.opengis.net/ogc"\n  xmlns:se="http://www.opengis.net/se"\n  xmlns:xlink="http://www.w3.org/1999/xlink"\n  xmlns:gml="http://www.opengis.net/gml/3.2"\n  xmlns:sld="http://www.opengis.net/sld"\n  xmlns:ps="http://inspire.ec.europa.eu/schemas/ps/4.0"\n  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n  xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.1.0/sldAll.xsd http://www.opengis.net/se http://schemas.opengis.net/se/1.1.0/FeatureStyle.xsd">\n  <NamedLayer>\n    <se:Name>PS.ProtectedSite</se:Name>\n    <se:Description>\n        <se:Title>Protected Sites</se:Title>\n    </se:Description>\n    <UserStyle>\n      <se:Name>PS.ProtectedSite.Default</se:Name>\n      <se:FeatureTypeStyle>\n        <se:Description>\n          <se:Title>Protected Sites Default Style</se:Title>\n          <se:Abstract>Point geometries are rendered as a square with a size of 6 pixels, with a 50% grey (#808080) fill and a black (#000000) outline. Line geometries are rendered as a solid black line with a stroke width of 1 pixel. Polygon geometries are rendered using a 50% grey (#808080) fill and a solid black outline with a stroke width of 1 pixel.</se:Abstract>\n        </se:Description>\n        <se:FeatureTypeName>ps:ProtectedSite</se:FeatureTypeName>\n          <se:Rule>\n            <se:Description>\n              <se:Title>protected sites: polygon</se:Title>\n            </se:Description>\n            <ogc:Filter>\n              <ogc:PropertyIsEqualTo>\n                <ogc:Function name="IsSurface">\n                  <ogc:PropertyName>ps:geometry</ogc:PropertyName>\n                </ogc:Function>\n                <ogc:Literal>true</ogc:Literal>\n                </ogc:PropertyIsEqualTo>\n            </ogc:Filter>\n            <se:PolygonSymbolizer>\n              <se:Geometry>\n                <ogc:PropertyName>ps:geometry</ogc:PropertyName>\n              </se:Geometry>\n              <se:Fill>\n                <se:SvgParameter name="fill">#808080</se:SvgParameter>\n              </se:Fill>\n              <se:Stroke>\n                <se:SvgParameter name="stroke">#000000</se:SvgParameter>\n                <se:SvgParameter name="stroke-width">1</se:SvgParameter>\n              </se:Stroke>\n            </se:PolygonSymbolizer>\n          </se:Rule>\n          <se:Rule>\n            <se:Description>\n              <se:Title>protected sites: line</se:Title>\n            </se:Description>\n            <ogc:Filter>\n              <ogc:PropertyIsEqualTo>\n                <ogc:Function name="IsCurve">\n                  <ogc:PropertyName>ps:geometry</ogc:PropertyName>\n                </ogc:Function>\n                <ogc:Literal>true</ogc:Literal>\n              </ogc:PropertyIsEqualTo>\n            </ogc:Filter>\n            <se:LineSymbolizer>\n              <se:Geometry>\n                <ogc:PropertyName>ps:geometry</ogc:PropertyName>\n              </se:Geometry>\n              <se:Stroke>\n                <se:SvgParameter name="stroke">#000000</se:SvgParameter>\n                <se:SvgParameter name="stroke-width">1</se:SvgParameter>\n              </se:Stroke>\n            </se:LineSymbolizer>\n          </se:Rule>\n          <se:Rule>\n            <se:Description>\n              <se:Title>protected sites: point</se:Title>\n            </se:Description>\n            <ogc:Filter>\n              <ogc:PropertyIsEqualTo>\n                <ogc:Function name="IsPoint">\n                  <ogc:PropertyName>ps:geometry</ogc:PropertyName>\n                </ogc:Function>\n                <ogc:Literal>true</ogc:Literal>\n              </ogc:PropertyIsEqualTo>\n            </ogc:Filter>\n            <se:PointSymbolizer>\n              <se:Geometry>\n                <ogc:PropertyName>ps:geometry</ogc:PropertyName>\n              </se:Geometry>\n              <se:Graphic>\n                <se:Mark>\n                  <se:WellKnownName>square</se:WellKnownName>\n                  <se:Fill>\n                    <se:SvgParameter name="fill">#808080</se:SvgParameter>\n                  </se:Fill>\n                  <se:Stroke>\n                    <se:SvgParameter name="stroke">#000000</se:SvgParameter>\n                    <se:SvgParameter name="stroke-width">1</se:SvgParameter>\n                  </se:Stroke>\n                </se:Mark>\n                <se:Size>6</se:Size>\n              </se:Graphic>\n            </se:PointSymbolizer>\n          </se:Rule>\n        </se:FeatureTypeStyle>\n      </UserStyle>\n    </NamedLayer>\n  </StyledLayerDescriptor>\n')))}u.isMDXComponent=!0},5439:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/Tutorial_SLD_ViewServices-4d0d142916e5286aa53af8f3ad6198d1.png"}}]);