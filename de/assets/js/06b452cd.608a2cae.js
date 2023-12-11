"use strict";(self.webpackChunkhc_documentation=self.webpackChunkhc_documentation||[]).push([[2888],{3905:(e,n,t)=>{t.d(n,{Zo:()=>o,kt:()=>p});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),u=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},o=function(e){var n=u(e.components);return a.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),c=u(t),p=r,h=c["".concat(d,".").concat(p)]||c[p]||m[p]||i;return t?a.createElement(h,s(s({ref:n},o),{},{components:t})):a.createElement(h,s({ref:n},o))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=c;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var u=2;u<i;u++)s[u]=t[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},250:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=t(7462),r=(t(7294),t(3905));const i={title:"Neuen Datensatz mit mehreren Ressourcen-Typen anlegen",categories:["help-page-category-datasetworkflow","help-page-subcategory-datasetworkflowcreatedataset"],layout:"help-detail",language:"de"},s=void 0,l={unversionedId:"create-manage-datasets/create-dataset/2015-01-09-dataset-multiSource",id:"create-manage-datasets/create-dataset/2015-01-09-dataset-multiSource",title:"Neuen Datensatz mit mehreren Ressourcen-Typen anlegen",description:"Unterst\xfctzte Formate",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/create-manage-datasets/create-dataset/2015-01-09-dataset-multiSource.md",sourceDirName:"create-manage-datasets/create-dataset",slug:"/create-manage-datasets/create-dataset/2015-01-09-dataset-multiSource",permalink:"/de/docs/create-manage-datasets/create-dataset/2015-01-09-dataset-multiSource",draft:!1,editUrl:"https://github.com/wetransform/hc-documentation/tree/master/i18n/de/docusaurus-plugin-content-docs/current/create-manage-datasets/create-dataset/2015-01-09-dataset-multiSource.md",tags:[],version:"current",frontMatter:{title:"Neuen Datensatz mit mehreren Ressourcen-Typen anlegen",categories:["help-page-category-datasetworkflow","help-page-subcategory-datasetworkflowcreatedataset"],layout:"help-detail",language:"de"},sidebar:"tutorialSidebar",previous:{title:"Datens\xe4tze in der Ressourcen-Liste",permalink:"/de/docs/create-manage-datasets/create-dataset/2015-01-08-viewing-resource-list"},next:{title:"Datensatz anlegen",permalink:"/de/docs/create-manage-datasets/create-dataset/2015-01-10-dataset-create"}},d={},u=[{value:"Unterst\xfctzte Formate",id:"unterst\xfctzte-formate",level:2},{value:"Erstellen sie einen Datensatz",id:"erstellen-sie-einen-datensatz",level:2}],o={toc:u};function m(e){let{components:n,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"unterst\xfctzte-formate"},"Unterst\xfctzte Formate"),(0,r.kt)("p",null,"hale\xbbconnect unterst\xfctzt derzeit verschiedene Daten-Formate, die genutzt werden k\xf6nnen, um Datens\xe4tze anzulegen. Die Gr\xf6\xdfenbeschr\xe4nkung f\xfcr das Hochladen einzelner Dateien f\xfcr den Datensatz ist 2 GB. Die Gr\xf6\xdfenbeschr\xe4nkung f\xfcr Anh\xe4nge auf haleconnect.com ist 750 MiB. Ein Datensatz kann folgende Daten enthalten:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Vektor-Daten")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Die unterst\xfctzten Vektor-Daten-Formaten sind ","*",".gml und ","*",".shp."),(0,r.kt)("li",{parentName:"ul"},"Es k\xf6nnen mehrere ","*",".shp-Dateien hochgeladen werden, um einen Datensatz anzulegen."),(0,r.kt)("li",{parentName:"ul"},"Die Publikation von ","*",".shp-Dateien, deren erstes Objekt keine Geometrie hat, wird derzeit nicht unterst\xfctzt."),(0,r.kt)("li",{parentName:"ul"},"Es k\xf6nnen mehrere ","*",".gml-Dateien hochgeladen werden, um einen Datensatz anzulegen.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"INSPIRE, 3A, CityGML, XPlanung und ISYBAU werden vollst\xe4ndig unterst\xfctzt."))),(0,r.kt)("li",{parentName:"ul"},"*",".gml-Dateien, die ein gml:GenericMetaData-Element, ein leeres gml:boundedBy-Element oder Arc-Geometrien enthalten, werden derzeit nicht unterst\xfczt."),(0,r.kt)("li",{parentName:"ul"},"Es k\xf6nnen mehrere ","*",".gpkg-Dateien hochgeladen werden, um einen Datensatz anzulegen.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"GeoPackages werden als Quell- und Zieldaten zur Verwendung in hale\xbbconnect Transformationsprojekten unterst\xfctzt."),(0,r.kt)("li",{parentName:"ul"},"*",".gpkg-Schemas k\xf6nnen aus hale\xbbstudio als ","*",".json.hsd-Dateien oder ","*",".hsd-Dateien zur Verwendung in hale\xbbconnect exportiert werden.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Nicht-r\xe4umliche Daten")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Das unterst\xfctzte Daten-Format ist ","*",".xml.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Raster-Daten")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Die unterst\xfctzten Formate sind ","*",".png, und ","*",".GeoTIFF."),(0,r.kt)("li",{parentName:"ul"},"Bitte verwenden sie ein RGB-Bild mit Transparenzangaben in einem Alpha-Kanal oder einem Kanal mit NoData-Werten."),(0,r.kt)("li",{parentName:"ul"},"Derzeit wird das Hochladen einer Raster-Daten-Ressource pro Datensatz unterst\xfctzt."),(0,r.kt)("li",{parentName:"ul"},"Das Ver\xf6ffentlichen von Rasterdaten ohne Vektordaten wird nicht unterst\xfctzt. F\xfcr solche F\xe4lle muss eine Dummy-Vektor-Datei erzeugt werden."),(0,r.kt)("li",{parentName:"ul"},"In den Darstellungs- und Download-Diensten wird ein separater Raster-Layer ver\xf6ffentlicht.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Anh\xe4nge")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unterst\xfctzte Anhang-Datei-Formate sind ","*",".pdf, ","*",".png, ","*",".GeoTIFF und Texturen f\xfcr 3D-Daten."),(0,r.kt)("li",{parentName:"ul"},"Anh\xe4nge mit Punkten im Dateinamen werden nicht unterst\xfczt."),(0,r.kt)("li",{parentName:"ul"},"Es gibt verschiedene Wege, Anh\xe4nge zu ihrem Datensatz hochzuladen und mit diesem in Verbindung zu bringen."),(0,r.kt)("li",{parentName:"ul"},"Anh\xe4nge, die w\xe4hrend des Anlegens eines Datensatzes hochgeladen werden, werden automatisch zum ","\xab","Anhang","\xbb","-Fenster im ","\xab","Dateien","\xbb","-Bereich hinzugef\xfcgt."),(0,r.kt)("li",{parentName:"ul"},"F\xfcr die Anhang-Dateien, die auf hale\xbbconnect hochgeladen werden, gibt es \xf6ffentlich zug\xe4ngliche Links. Die Links zu Anhang-Dateien k\xf6nnen in ihren ",(0,r.kt)("em",{parentName:"li"},"Predefined Data"),"-Download-Dienst eingebunden werden. Die Links zu den Anhang-Dateien und externen URLs k\xf6nnen auch im Feature Explorer-Werkzeug betrachtet werden."),(0,r.kt)("li",{parentName:"ul"},"F\xfcr Anhang-Dateien werden keine separaten Dienste-Layer erstellt."),(0,r.kt)("li",{parentName:"ul"},"Besuchen sie unsere Hilfe-Seite f\xfcr ",(0,r.kt)("a",{parentName:"li",href:"/de/docs/references/data/2018-03-10-reference-data-files"},"mehr Informationen zum Arbeiten mit Anh\xe4ngen"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kombination der verschiedenen Daten-Formate")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Datens\xe4tze k\xf6nnen sowohl ","*",".gml- als auch Raster- und Anhang-Ressourcen enthalten. In Darstellungs- und Download-Diensten werden Vektor- und Raster-Daten in separaten Layern ver\xf6ffentlicht."),(0,r.kt)("li",{parentName:"ul"},"Das Hochladen von ","*",".shp-Dateien mit kombinierten Daten-Ressourcen wir derzeit nicht unterst\xfctzt.")),(0,r.kt)("h2",{id:"erstellen-sie-einen-datensatz"},"Erstellen sie einen Datensatz"),(0,r.kt)("p",null,"Um einen neuen Datensatz mit verschiedenen Daten-Formaten anzulegen, folgen sie als ","\xab","Daten-Manager","\xbb"," oder ","\xab","Themen-Manager","\xbb"," folgendem Ablauf:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Gehen sie im Hauptmen\xfc auf ","\xab","Daten","\xbb",".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Gehen sie auf ","\xab","+ Neuen Datensatz anlegen","\xbb"," am Ende der Datensatz-Liste.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"W\xe4hlen sie ein Thema aus, dem ihr Datensatz zugeordnet werden soll. Das Thema muss so konfiguriert sein, dass zus\xe4tzliche Layer aus Raster-Quellen erlaubt sind."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Sie k\xf6nnen den Datensatz auch anlegen, ohne ihn einem Thema zuzuordnen. In diesem Fall k\xf6nnen sie f\xfcr diesen Datensatz jedoch keine Dienste ver\xf6ffentlichen und keine Transformationsprojekte ausf\xfchren."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"W\xe4hlen sie die Daten-Quellen. Es gibt verschiedene Wege, die Dateien hochzuladen, die zu dem Datensatz geh\xf6ren:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Klicken sie auf ","\xab","Datei(en) ausw\xe4hlen","\xbb"," und navigieren sie zu den gew\xfcnschten Dateien.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Klicken sie auf ","\xab","URL(s) eingeben","\xbb"," und f\xfcgen sie die gew\xfcnschte URL oder WFS GetFeature-Anfrage hinzu. F\xfcgen sie den API-Schl\xfcssel in das Feld Autorisierung ein, wenn sie einen API-Schl\xfcssel im Autorisierungsheader der HTTP-Anfrage zum Herunterladen von Daten \xfcber die API \xfcbergeben m\xf6chten.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ziehen sie einen Datensatz auf ","\xab","Datei(en) hierher ziehen","\xbb","."),(0,r.kt)("br",null),"F\xfcgen sie eine \\*.gml-Datei, eine Raster-Datei und so viele zugeh\xf6rige Anhang-Dateien hinzu wie notwendig.")),(0,r.kt)("br",null),"Tipp: Wir empfehlen, die Dateien in eine zip-Datei zu komprimieren, um die Dauer des Hochladens zu reduzieren und sicherzugehen, dass keine Dateien abhandenkommen. Um eine \\*.png-Datei hochzuladen, sollten sie alle individuellen Dateien (\\*.png, \\*.pgw, \u2026) in einem zip-Archiv zusammenfassen. Auch f\xfcr das Hochladen von XML-Dateien, wie beispielsweise ALKIS, ISYBAU oder GML, empfehlen wir diese in einem zip-Archiv zu komprimieren."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Geben sie ihrem Datensatz einen Namen. Dieser Name sollte es ihnen erm\xf6glichen, ihren Datensatz schnell und eindeutig im System zu identifizieren. Wenn die Metadaten-Konfiguration des zugeh\xf6rigen Themas so eingestellt ist, dass dieser Name f\xfcr die Ver\xf6ffentlichung genutzt werden soll, wird der eingegebene Name auch f\xfcr die Datensatz-Metadaten verwendet")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Geben sie Metadaten f\xfcr ihren Datensatz an. Der Eingabe-Modus f\xfcr Metadaten wird von dem Thema vorgeschrieben, dem ihr Datensatz zugeordnet ist."),(0,r.kt)("p",{parentName:"li"},"Wenn in dem Thema der Metadaten-Editor genutzt wird, geben sie verpflichtende und optionale Metadaten f\xfcr ihren Datensatz oder ihre Dienste ein:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Metadaten-Kategorien werden mit einer roten Markierung dargestellt, in der die Anzahl der fehlenden, verpflichtenden Metadaten-Elemente angezeigt wird. Klicken sie auf das Pfeil-Symbol am Ende einer Metadaten-Kategorie um diese aufzuklappen.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Verpflichtende Metadaten-Felder werden mit roten Symbolen gekennzeichnet. Optionale Metadaten-Felder werden mit orangen Symbolen gekennzeichnet.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Metadaten-Kategorien werden mit einem gr\xfcnen Haken dargestellt, wenn alle erforderlichen Metadaten angegeben wurden.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Klicken sie auf \xabAutomatisch bef\xfcllen\xbb, wenn sie versehentlich vorausgef\xfcllte Werte l\xf6schen oder \xfcberschreiben und sie m\xf6chten, dass die urspr\xfcnglichen Werte wieder abgerufen werden.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Klicken sie auf ","\xab","Weiter","\xbb",", um die Metadaten zu speichern.",(0,r.kt)("img",{src:t(970).Z,alt:"",title:"Der Metadaten-Editor",className:"img-responsive img-inline-help"})),(0,r.kt)("br",null),"Wenn das Thema die Option \xabExistierende Metadaten neu publizieren\xbb nutzt:"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Laden sie ihre bestehende Metadaten-Datei hoch.",(0,r.kt)("img",{src:t(3962).Z,alt:"",title:"Existierende Metadaten hochladen",className:"img-responsive img-inline-help"})))),(0,r.kt)("p",{parentName:"li"},"Wenn das Thema die Option ","\xab","Existierende Metadaten verlinken","\xbb"," nutzt:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Geben sie einen Link zu Ihrer Metadaten-Datei an.",(0,r.kt)("img",{src:t(468).Z,alt:"",title:"Existierende Metadaten verlinken",className:"img-responsive img-inline-help"}),(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Der Schritt \xabProjektvariablen eingeben\xbb wird angezeigt, wenn ihr Thema eine Transformationskonfiguration hat und sie ihrem Transformationsprojekt in hale\xbbstudio Projektvariablen hinzugef\xfcgt haben. hale\xbbconnect bietet Benutzenden die M\xf6glichkeit, die Projektvariablen des Transformationsprojekts in diesem optionalen Schritt zu bearbeiten.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Im letzten Schritt k\xf6nnen sie die f\xfcr das Thema konfigurierten Ausf\xfchrungsregeln \xfcberpr\xfcfen. Die Ausf\xfchrungsregeln sind eine Liste aller m\xf6glichen Schritte im Ver\xf6ffentlichungsprozess.  Standardm\xe4\xdfig werden sie bis zu f\xfcnf Schalter sehen, um Darstellungs- und Download-Dienste f\xfcr ihren Datensatz zu ver\xf6ffentlichen, um ihren neuen Datensatz zu transformieren und um Darstellungs- und Download-Dienste f\xfcr den transformierten Datensatz zu ver\xf6ffentlichen. Wenn sie bereits wissen, dass sie den Datensatz vor seiner Ver\xf6ffentlichung noch bearbeiten m\xfcssen, deaktivieren sie die Dienste-Ver\xf6ffentlichung."))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Wenn sie den Browser oder den Tab schlie\xdfen oder einen anderen Link \xf6ffnen, werden sie gefragt, ob der derzeit bearbeitete Datensatz gespeichert oder gel\xf6scht werden soll. Wenn sie speichern ausw\xe4hlen, k\xf6nnen sie den Datensatz zu einem sp\xe4teren Zeitpunkt weiter bearbeiten.")))}m.isMDXComponent=!0},970:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/create-dataset-metadata-5dd22fc448f8abc51d0499d9783dc9b5.png"},3962:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/create-dataset-metadata_2-794bc0a62ac454416447fc799b22a84a.png"},468:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/create-dataset-metadata_3-ab0f70eb9cc0e2c7286fbe3132b3d60e.png"}}]);