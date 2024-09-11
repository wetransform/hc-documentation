"use strict";(self.webpackChunkhc_documentation=self.webpackChunkhc_documentation||[]).push([[2196],{5680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>h});var r=t(6540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(t),m=i,h=p["".concat(l,".").concat(m)]||p[m]||g[m]||a;return t?r.createElement(h,o(o({ref:n},d),{},{components:t})):r.createElement(h,o({ref:n},d))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3899:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=t(8168),i=(t(6540),t(5680));const a={title:"Vorbereiten von ESRI-Shapefiles f\xfcr die Nutzung in einer Online-Transformation",categories:["help-page-category-tutorials","help-page-subcategory-tutorials"],layout:"help-detail",language:"de"},o=void 0,s={unversionedId:"tutorials/2018-05-04-shp-tutorial",id:"tutorials/2018-05-04-shp-tutorial",title:"Vorbereiten von ESRI-Shapefiles f\xfcr die Nutzung in einer Online-Transformation",description:"ESRI-Shapefile-Format",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/tutorials/2018-05-04-shp-tutorial.md",sourceDirName:"tutorials",slug:"/tutorials/2018-05-04-shp-tutorial",permalink:"/de/docs/tutorials/2018-05-04-shp-tutorial",draft:!1,editUrl:"https://github.com/wetransform/hc-documentation/tree/master/i18n/de/docusaurus-plugin-content-docs/current/tutorials/2018-05-04-shp-tutorial.md",tags:[],version:"current",frontMatter:{title:"Vorbereiten von ESRI-Shapefiles f\xfcr die Nutzung in einer Online-Transformation",categories:["help-page-category-tutorials","help-page-subcategory-tutorials"],layout:"help-detail",language:"de"},sidebar:"tutorialSidebar",previous:{title:"Styled Layer Descriptor-Dateien (SLDs) f\xfcr hale\xbbconnect erstellen",permalink:"/de/docs/tutorials/2018-05-03-sld-tutorial"},next:{title:"Mit dem hale\xbbconnect Profil-Management-Werkzeug ein Profil anlegen",permalink:"/de/docs/tutorials/2018-05-05-pmt-tutorial"}},l={},u=[{value:"<strong>ESRI-Shapefile-Format</strong>",id:"esri-shapefile-format",level:3},{value:"<strong>Datumstransformationen</strong>",id:"datumstransformationen",level:3},{value:"<strong>Identifikation von Koordinatenreferenzsystemen in hale\xbbconnect</strong>",id:"identifikation-von-koordinatenreferenzsystemen-in-haleconnect",level:3},{value:"<strong>Manuell den AUTHORITY-Parameter zu einer ESRI-prj-Datei hinzuf\xfcgen</strong>",id:"manuell-den-authority-parameter-zu-einer-esri-prj-datei-hinzuf\xfcgen",level:3},{value:"<strong>Achsentausch</strong>",id:"achsentausch",level:3}],d={toc:u},p="wrapper";function g(e){let{components:n,...t}=e;return(0,i.yg)(p,(0,r.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h3",{id:"esri-shapefile-format"},(0,i.yg)("strong",{parentName:"h3"},"ESRI-Shapefile-Format")),(0,i.yg)("p",null,"ESRI Shapefile ist ein Speicherformat f\xfcr Vektor-Geodaten, welches auf dem DataBaseFiles (DBF)-Format aufbaut. Ein Shapefile besteht aus mindestens drei Dateien mit gleichem Namen, aber unterschiedlichen Dateiendungen."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"shp: enth\xe4lt die Geometrie in Form einer Liste von St\xfctzpunkten"),(0,i.yg)("li",{parentName:"ul"},"shx: enth\xe4lt einen Index der Geometrie um schnelle, index-basierte Suchen zu erm\xf6glichen"),(0,i.yg)("li",{parentName:"ul"},"dbf: dBase-Datei, die zur Speicherung von Attribut-Informationen dient")),(0,i.yg)("p",null,"Zu einem Shapefile k\xf6nnen weitere Dateien geh\xf6ren - beispielsweise ",(0,i.yg)("inlineCode",{parentName:"p"},".prj"),"-Dateien, welche Informationen zum Koordinatensystem f\xfcr ArcGIS enthalten oder ",(0,i.yg)("inlineCode",{parentName:"p"},".cpg"),"-Dateien, welche den verwendeten Zeichensatz spezifizieren. Shapefiles enthalten Vektor-Geodaten. Die meisten geographischen Informationssysteme, darunter beispielsweise ArcGIS von ESRI, speichern r\xe4umliche Daten im Vektor-Format. Andere \xfcbliche Datenformate sind beispielsweise Raster oder TIN.\nF\xfcr mehr Informationen k\xf6nnen sie ",(0,i.yg)("a",{parentName:"p",href:"https://www.esri.com/library/whitepapers/pdfs/shapefile.pdf"},"ESRI Shapefile Technical Description: An ESRI White Paper-July 1988")," lesen."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"ESRI prj-Dateien und WKT-Dateien")),(0,i.yg)("p",null,"Ein Shapefile enth\xe4lt \xfcblicherweise eine ",(0,i.yg)("inlineCode",{parentName:"p"},".prj"),"-Datei, welche eine Well known text (WKT)-Zeichenfolge enth\xe4lt, in der Angaben zum geographischen Referenzsystem enthalten sind. WKT ist eine Markup-Sprache zur Repr\xe4sentation von Vektorgeometrie-Objekten auf einer Karte. Das WKT-Format wurde urspr\xfcnglich durch das Open Geospatial Consortium (OGC) definiert und in dessen Simple Feature Access-Spezifikation beschrieben, zu der auch ESRI beigetragen hat. Die ",(0,i.yg)("a",{parentName:"p",href:"https://www.opengeospatial.org/standards/wkt-crs"},"aktuelle Version des WKT-Standards")," wurde am 13. August 2019 ver\xf6ffentlicht."),(0,i.yg)("p",null,"Nicht alle ",(0,i.yg)("inlineCode",{parentName:"p"},".prj"),"-Dateien enthalten die gleichen Parameter. Au\xdferdem gibt es syntaktische Unterschiede zwischen ESRI-WKT-Dateien und OGC-WKT-Dateien. Beispiele f\xfcr verschiedene WKT-Dateien finden sich auf der Webseite ",(0,i.yg)("a",{parentName:"p",href:"https://epsg.io/"},"EPSG.io"),". Exemplarisch werden im folgenden verschiedene WKT-Dateien f\xfcr EPSG:25832 aufgef\xfchrt:"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("em",{parentName:"strong"},"WKT-Beispiel in HTML"))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'PROJCS["ETRS89 / UTM zone 32N",\n  GEOGCS["ETRS89",\n    DATUM["European_Terrestrial_Reference_System_1989",\n        SPHEROID["GRS 1980",6378137,298.257222101,\n            AUTHORITY["EPSG","7019"]],\n        TOWGS84[0,0,0,0,0,0,0],\n        AUTHORITY["EPSG","6258"]],\n    PRIMEM["Greenwich",0,\n        AUTHORITY["EPSG","8901"]],\n    UNIT["degree",0.0174532925199433,\n        AUTHORITY["EPSG","9122"]],\n    AUTHORITY["EPSG","4258"]],\nPROJECTION["Transverse_Mercator"],\nPARAMETER["latitude_of_origin",0],\nPARAMETER["central_meridian",9],\nPARAMETER["scale_factor",0.9996],\nPARAMETER["false_easting",500000],\nPARAMETER["false_northing",0],\nUNIT["metre",1,\n  AUTHORITY["EPSG","9001"]],\nAXIS["Easting",EAST],\nAXIS["Northing",NORTH],\nAUTHORITY["EPSG","25832"]]\n')),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("em",{parentName:"strong"},"OGC-WKT-Beispiel"))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'PROJCS["ETRS89 / UTM zone 32N",\n  GEOGCS["ETRS89",\n    DATUM["European_Terrestrial_Reference_System_1989",\n      SPHEROID["GRS 1980",6378137,298.257222101,AUTHORITY["EPSG","7019"]],\n             TOWGS84[0,0,0,0,0,0,0],\n             AUTHORITY["EPSG","6258"]],\n           PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],\n           UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],\n  AUTHORITY["EPSG","4258"]],\nPROJECTION["Transverse_Mercator"],\nPARAMETER["latitude_of_origin",0],\nPARAMETER["central_meridian",9],\nPARAMETER["scale_factor",0.9996],\nPARAMETER["false_easting",500000],\nPARAMETER["false_northing",0],\nUNIT["metre",1,AUTHORITY["EPSG","9001"]],\nAXIS["Easting",EAST],\nAXIS["Northing",NORTH],\nAUTHORITY["EPSG","25832"]]\n')),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("em",{parentName:"strong"},"ESRI-WKT-Beispiel"))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'PROJCS["ETRS89_UTM_zone_32N",\n  GEOGCS["GCS_ETRS_1989",\n    DATUM["D_ETRS_1989",\n           SPHEROID["GRS_1980",6378137,298.257222101]],\n          PRIMEM["Greenwich",0],\n          UNIT["Degree",0.017453292519943295]],\nPROJECTION["Transverse_Mercator"],\nPARAMETER["latitude_of_origin",0],\nPARAMETER["central_meridian",9],\nPARAMETER["scale_factor",0.9996],\nPARAMETER["false_easting",500000],\nPARAMETER["false_northing",0],\nUNIT["Meter",1]]\n')),(0,i.yg)("h3",{id:"datumstransformationen"},(0,i.yg)("strong",{parentName:"h3"},"Datumstransformationen")),(0,i.yg)("p",null,"Datumstransformationen sind notwendig, wenn bei ihrer Reprojektion von einem in ein anderes Koordinatensystem eines der beiden ein geographisches Koordinatensystem ist. Datumstransformationen sollten stets mit Vorsicht vorgenommen werden, da sie in signifikante Datenverschiebungen um einen Meter oder sogar mehr resultieren k\xf6nnen. Es gibt verschiedene Methoden um Datumstransformationen durchzuf\xfchren - eine davon ist das Bursa-Wolf-Modell."),(0,i.yg)("p",null,"Der WKT-Parameter ",(0,i.yg)("inlineCode",{parentName:"p"},"TOWGS84")," wird genutzt, um eine Transformation vom horizontalen Datum in das WGS84-Datum anzun\xe4hern.\nIn der urspr\xfcnglichen WKT-Simple Features-Spezifikation wird ",(0,i.yg)("inlineCode",{parentName:"p"},"TOWGS84")," nicht als g\xfcltiges Schl\xfcsselwort definiert. ESRI unterst\xfctzt den ",(0,i.yg)("inlineCode",{parentName:"p"},"TOWGS84"),"-Parameter in WKT nicht. Anstatt eine vorgeschriebene Transformation zu verwenden, werden Nutzende von ESRI-Software oder QGIS wenn notwendig gebeten, eine geeignete Transformations-Methode zu w\xe4hlen."),(0,i.yg)("p",null,"Die aktuelle WKT-Version hat keine R\xfcckw\xe4rtskompatibilit\xe4t zu ",(0,i.yg)("inlineCode",{parentName:"p"},"TOWGS84"),". WKT-Beschreibungen geod\xe4tischer Daten, die zur OGC 01-009-Spezifikation erstellt werden, k\xf6nnen von Implementierungen zur aktuellen WKT-Spezifikation nicht gelesen werden, wenn der optionale ",(0,i.yg)("inlineCode",{parentName:"p"},"TOWGS84"),"-Parameter enthalten ist."),(0,i.yg)("h3",{id:"identifikation-von-koordinatenreferenzsystemen-in-haleconnect"},(0,i.yg)("strong",{parentName:"h3"},"Identifikation von Koordinatenreferenzsystemen in hale\xbbconnect")),(0,i.yg)("p",null,"hale\xbbconnect nutzt das open source Java GIS-Werkzeug GeoTools f\xfcr die Prozessierung r\xe4umlicher Daten. GeoTools wiederum enth\xe4lt eine Kopie der ",(0,i.yg)("a",{parentName:"p",href:"https://www.epsg-registry.org/"},"EPSG-Registry"),". Wenn ein Shapefile auf die Plattform hochgeladen wird, versucht hale\xbbconnect unter Nutzung der GeoTools-Bibliothek die in der ",(0,i.yg)("inlineCode",{parentName:"p"},".prj"),"-Datei enthaltene WKT-Definition einem r\xe4umlichen Bezugssystem aus der EPSG-Registry zuzuordnen. Wenn eine \xdcbereinstimmung gefunden wird, werden die Daten anschlie\xdfend unter Nutzung des passenden EPSG-CRS-Codes prozessiert."),(0,i.yg)("p",null,"Es kann vorkommen, dass GeoTools auf Grundlage der WKT-Informationen nicht das entsprechende r\xe4umliche Bezugssystem ermitteln kann. Um GeoTools bei der Bestimmung der korrekten Zuordnung zu unterst\xfctzen, k\xf6nnen Nutzende der WKT-Datei als letzten Parameter einen ",(0,i.yg)("inlineCode",{parentName:"p"},"AUTHORITY"),"- Parameter hinzuf\xfcgen. GeoTools verwendet dann den EPSG-Code aus dem ",(0,i.yg)("inlineCode",{parentName:"p"},"AUTHORITY"),"-Parameter f\xfcr die Festlegung des zu verwendenden r\xe4umlichen Bezugssystems und verwendet dessen Definition aus der EPSG-Registry. Diese Definitionen enthalten auch die Bursa-Wolf-Parameter, die f\xfcr eine Datumstransformation ben\xf6tigt werden, aus der EPSG-Registry."),(0,i.yg)("h3",{id:"manuell-den-authority-parameter-zu-einer-esri-prj-datei-hinzuf\xfcgen"},(0,i.yg)("strong",{parentName:"h3"},"Manuell den AUTHORITY-Parameter zu einer ESRI-prj-Datei hinzuf\xfcgen")),(0,i.yg)("p",null,"Sie k\xf6nnen eine ESRI-",(0,i.yg)("inlineCode",{parentName:"p"},".prj"),"-Datei manuell bearbeiten, um den optionalen ",(0,i.yg)("inlineCode",{parentName:"p"},"AUTHORITY"),"-Parameter hinzuzuf\xfcgen. Der Parameter muss der Datei als letzter Parameter unter Nutzung des folgenden Musters hinzugef\xfcgt werden: ",(0,i.yg)("inlineCode",{parentName:"p"},'AUTHORITY["EPSG","25832"]'),". Der ",(0,i.yg)("inlineCode",{parentName:"p"},"AUTHORITY"),"-Parameter ist in der aktuellen WKT-Version zwar als veraltet gekennzeichnet, wird aber aus Gr\xfcnden der R\xfcckw\xe4rtskompatibilit\xe4t weiterhin unterst\xfctzt."),(0,i.yg)("p",null,"In der aktuellen WKT-Version wurde ",(0,i.yg)("inlineCode",{parentName:"p"},"AUTHORITY")," durch ",(0,i.yg)("inlineCode",{parentName:"p"},"ID")," ersetzt. Dieser Parameter ist weniger eng definiert, als es ",(0,i.yg)("inlineCode",{parentName:"p"},"AUTHORITY")," in den vorhergehenden Versionen war."),(0,i.yg)("h3",{id:"achsentausch"},(0,i.yg)("strong",{parentName:"h3"},"Achsentausch")),(0,i.yg)("p",null,"Viele Probleme mit vertauschten Achsen entstehen durch Abweichungen bei der Festlegung der Achsenreihenfolge in der prj-Datei einer Shapedatei. So ist beispielsweise bei WGS84 = EPSG:4326 die Achsenreihenfolge in der EPSG-Datenbank Breite (Northing) /L\xe4nge (Easting) definiert, w\xe4hrend die Achsenreihenfolge im Shapefile L\xe4nge (Easting) /Breite (Northing) ist."),(0,i.yg)("p",null,"Das ist problematisch, wenn keine EPSG-Definition f\xfcr das Koordinaten-Referenzsystem mit der Achsen-Reihenfolge, wie sie im Shapefile genutzt wird, existiert. Denn dann kann kein passender Code f\xfcr den ",(0,i.yg)("inlineCode",{parentName:"p"},"AUTHORITY"),"-Parameter angegeben werden. In diesen F\xe4llen ist es notwendig, den auf hale\xbbconnect bereitgestellten Schalter ","\xab","Koordinatenreihenfolge tauschen","\xbb"," zu nutzen, um die Achsen-Reihenfolge zu tauschen, wenn das Shapefile publiziert wird."),(0,i.yg)("p",null,"Der einzige Weg, die Achsen-Reihenfolge richtig zu handhaben ist, die Achsen-Reihenfolge der Shapefile-Geometrien zu analysieren und zu pr\xfcfen, ob die Achsen-Reihenfolge mit derjenigen in der Koordinaten-Referenzsystem-Definition in der ",(0,i.yg)("inlineCode",{parentName:"p"},".prj"),"-Datei \xfcbereinstimmt und entsprechend zu agieren. Also entweder einen ",(0,i.yg)("inlineCode",{parentName:"p"},"AUTHORITY"),"-Parameter zur ",(0,i.yg)("inlineCode",{parentName:"p"},".prj"),"-Datei hinzuzuf\xfcgen oder den ","\xab","Koordinatenreihenfolge tauschen","\xbb","-Schalter zu nutzen."))}g.isMDXComponent=!0}}]);