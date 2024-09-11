"use strict";(self.webpackChunkhc_documentation=self.webpackChunkhc_documentation||[]).push([[7447],{5680:(e,n,t)=>{t.d(n,{xA:()=>o,yg:()=>p});var a=t(6540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},o=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,o=d(e,["components","mdxType","originalType","parentName"]),m=u(t),c=i,p=m["".concat(s,".").concat(c)]||m[c]||g[c]||r;return t?a.createElement(p,l(l({ref:n},o),{},{components:t})):a.createElement(p,l({ref:n},o))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=c;var d={};for(var s in n)hasOwnProperty.call(n,s)&&(d[s]=n[s]);d.originalType=e,d[m]="string"==typeof e?e:i,l[1]=d;for(var u=2;u<r;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8069:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>d,toc:()=>u});var a=t(8168),i=(t(6540),t(5680));const r={title:"Metadaten auf hale\xbbconnect konfigurieren",categories:["help-page-category-tutorials","help-page-subcategory-tutorials"],layout:"help-detail",language:"de"},l=void 0,d={unversionedId:"tutorials/2018-04-30-metadata-tutorial",id:"tutorials/2018-04-30-metadata-tutorial",title:"Metadaten auf hale\xbbconnect konfigurieren",description:"Das Erstellen von Metadaten ist h\xe4ufig ein aufwendiges, langwieriges und fehleranf\xe4lliges Unterfangen. Die hale\xbbconnect Plattform kann so konfiguriert werden, dass automatisch ISO-, INSPIRE-, und GDI-DE-konforme Metadaten f\xfcr Datens\xe4tze sowie Darstellungs- und Download-Dienste generiert werden. hale\xbbconnect sammelt dazu Informationen aus Datens\xe4tzen, aus Umgebungsvariablen wie beispielsweise den Nutzerprofildaten und aus nutzerdefinierten eigenen Metadaten-Feldern, um automatisch Metadaten zu generieren, die zu diversen Metadaten-Standards konform sind. Die Standard-Metadaten, die von hale\xbbconnect generiert werden, k\xf6nnen durch Nutzende mit der Rolle &laquo;Themenmanager&raquo; oder &laquo;Supernutzer&raquo; im Metadaten-Bereich eines Themas konfiguriert werden. Diese Metadaten-Konfiguration muss lediglich ein Mal durchgef\xfchrt werden. Das Thema, das die Metadaten-Konfiguration enth\xe4lt kann von allen Nutzenden der Organisation f\xfcr jeden Datensatz innerhalb der Organisation wiederverwendet werden.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/tutorials/2018-04-30-metadata-tutorial.md",sourceDirName:"tutorials",slug:"/tutorials/2018-04-30-metadata-tutorial",permalink:"/de/docs/tutorials/2018-04-30-metadata-tutorial",draft:!1,editUrl:"https://github.com/wetransform/hc-documentation/tree/master/i18n/de/docusaurus-plugin-content-docs/current/tutorials/2018-04-30-metadata-tutorial.md",tags:[],version:"current",frontMatter:{title:"Metadaten auf hale\xbbconnect konfigurieren",categories:["help-page-category-tutorials","help-page-subcategory-tutorials"],layout:"help-detail",language:"de"},sidebar:"tutorialSidebar",previous:{title:"Online-Transformationen auf hale\xbbconnect konfigurieren",permalink:"/de/docs/tutorials/2018-04-29-transformation-tutorial"},next:{title:"Verwenden von hale\xbbconnect Ressourcen in QGIS",permalink:"/de/docs/tutorials/2018-05-01-qgis-tutorial"}},s={},u=[{value:"<strong>Beispiel-Daten</strong>",id:"beispiel-daten",level:3},{value:"<strong>Metadaten mit Hilfe des Metadaten-Editors konfigurieren</strong>",id:"metadaten-mit-hilfe-des-metadaten-editors-konfigurieren",level:3}],o={toc:u},m="wrapper";function g(e){let{components:n,...r}=e;return(0,i.yg)(m,(0,a.A)({},o,r,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Das Erstellen von Metadaten ist h\xe4ufig ein aufwendiges, langwieriges und fehleranf\xe4lliges Unterfangen. Die hale\xbbconnect Plattform kann so konfiguriert werden, dass automatisch ISO-, INSPIRE-, und GDI-DE-konforme Metadaten f\xfcr Datens\xe4tze sowie Darstellungs- und Download-Dienste generiert werden. hale\xbbconnect sammelt dazu Informationen aus Datens\xe4tzen, aus Umgebungsvariablen wie beispielsweise den Nutzerprofildaten und aus nutzerdefinierten eigenen Metadaten-Feldern, um automatisch Metadaten zu generieren, die zu diversen Metadaten-Standards konform sind. Die Standard-Metadaten, die von hale\xbbconnect generiert werden, k\xf6nnen durch Nutzende mit der Rolle ","\xab","Themenmanager","\xbb"," oder ","\xab","Supernutzer","\xbb"," im Metadaten-Bereich eines Themas konfiguriert werden. Diese Metadaten-Konfiguration muss lediglich ein Mal durchgef\xfchrt werden. Das Thema, das die Metadaten-Konfiguration enth\xe4lt kann von allen Nutzenden der Organisation f\xfcr jeden Datensatz innerhalb der Organisation wiederverwendet werden."),(0,i.yg)("p",null,"Dieses Tutorial f\xfchrt durch die Schritte, die notwendig sind um Metadaten mit dem Metadaten-Editor-Werkzeug von hale\xbbconnect zu konfigurieren. Au\xdferdem wird auf die Validierungen, die hale\xbbconnect ausf\xfchrt, um die Konformit\xe4t der Metadaten zu ISO, INSPIRE und der GDI-DE zu gew\xe4hrleisten, eingegangen. Bevor wir beginnen, ein kurzer \xdcberblick \xfcber die f\xfcr das Tutorial ben\xf6tigten hale\xbbconnect-Ressourcen:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"hale\xbbconnect-Nutzerprofil mit der Rolle ","\xab","Themenmanager","\xbb"," oder ","\xab","Supernutzer","\xbb"),(0,i.yg)("li",{parentName:"ul"},"Datensatz"),(0,i.yg)("li",{parentName:"ul"},"Schema(s) f\xfcr den Datensatz"),(0,i.yg)("li",{parentName:"ul"},"Thema")),(0,i.yg)("p",null,(0,i.yg)("em",{parentName:"p"},"WICHTIG: Standard-Metadaten f\xfcr Datens\xe4tze und Web-Dienste werden von hale\xbbconnect automatisch angelegt. Die Konfiguration von Metadaten ist optional.")),(0,i.yg)("h3",{id:"beispiel-daten"},(0,i.yg)("strong",{parentName:"h3"},"Beispiel-Daten")),(0,i.yg)("p",null,"F\xfcr dieses Tutorial nutzen wir:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Eine Shape-Datei ",(0,i.yg)("em",{parentName:"li"},"Contains OS data \xa9 Crown copyright and database right 2018"),". Sie k\xf6nnen die Shape-Datei ",(0,i.yg)("a",{parentName:"li",href:"https://wetransform.box.com/s/2mnyp9xtjbbk3b5tbc1thg0jmxthgd0e"},"hier")," herunterladen.")),(0,i.yg)("h3",{id:"metadaten-mit-hilfe-des-metadaten-editors-konfigurieren"},(0,i.yg)("strong",{parentName:"h3"},"Metadaten mit Hilfe des Metadaten-Editors konfigurieren")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Schritt 1: Eigene Metadaten-Felder hinzuf\xfcgen")),(0,i.yg)("p",null,"hale\xbbconnect erm\xf6glicht es Nutzenden, eigene Metadaten-Felder im ","\xab","Organisation","\xbb","-Bereich der Einstellungen oder im Nutzerprofil hinzuzuf\xfcgen. Eigene Metadaten-Felder enthalten Werte, die genutzt werden k\xf6nnen, um Metadaten-Elemente zu bef\xfcllen. Um Metadaten automatisch erzeugen zu k\xf6nnen, sammelt hale\xbbconnect Informationen von verschiedenen Stellen der Plattform, inklusive der von Nutzenden angegebenen Werte in den Nutzerprofilen und im ","\xab","Organisation","\xbb","-Bereich. In manchen F\xe4llen ordnet hale\xbbconnect die dabei gesammelten Werten automatisch bestimmten Metadaten-Feldern zu."),(0,i.yg)("p",null,"Wenn sie ein eigenes Metadaten-Feld anlegen, f\xfcgt hale\xbbconnect das dabei entstandene Schl\xfcssel-Wert-Paar dem Autofill-Assistenten im Metadaten-Editor hinzu. Der Autofill-Assistent wird an sp\xe4terer Stelle genauer betrachtet. Zun\xe4chst f\xfcgen wir ein eigenes Metadaten-Feld hinzu."),(0,i.yg)("p",null,"Um im Profil ihrer Organisation ein neues eigenes Metadaten-Feld hinzuzuf\xfcgen, folgen sie mit der Rolle ","\xab","Themenmanager","\xbb"," oder ","\xab","Supernutzer","\xbb"," diesem Ablauf:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Klicken sie auf das ","\xab","Einstellungen","\xbb","-Symbol (Zahnrad-Symbol) oben rechts auf dem Bildschirm."),(0,i.yg)("li",{parentName:"ul"},"Klicken sie auf den ","\xab","Organisationen","\xbb","-Bereich und w\xe4hlen sie ihre Organisation aus der Liste aus.",(0,i.yg)("img",{src:t(4445).A,alt:"",title:"Organisations-Profil",className:"img-responsive img-inline-help"})),(0,i.yg)("li",{parentName:"ul"},"Scrollen sie an das Ende der Organisations-Profil-Seite und klicken Sie auf ","\xab","+Profilfeld hinzuf\xfcgen","\xbb"," um ihr eigenes Schl\xfcssel-Wert-Paar hinzuzuf\xfcgen.",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Das Schl\xfcssel-Wert-Paar, das sie eingeben, wird ihnen w\xe4hrend der Metadaten-Konfiguration im Autofill-Assistenten zur Verf\xfcgung stehen.",(0,i.yg)("img",{src:t(1155).A,alt:"",title:"Ein eigenes Metadaten-Feld anlegen",className:"img-responsive img-inline-help"}))))),(0,i.yg)("p",null,"Um ihrem Nutzerprofil ein eigenes Metadaten-Feld hinzuzuf\xfcgen, folgen Sie mit der Rolle ","\xab","Datenmanager","\xbb",", ","\xab","Themenmanager","\xbb"," oder ","\xab","Supernutzer","\xbb"," diesem Ablauf:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Klicken sie auf das ","\xab","Profil","\xbb","-Symbol (Person-Symbol) oben rechts auf dem Bildschirm."),(0,i.yg)("li",{parentName:"ul"},"Scrollen sie an das Ende der Nutzerprofil-Seite und klicken sie auf ","\xab","+Profilbild hinzuf\xfcgen","\xbb"," um ihr Schl\xfcssel-Wert-Paar anzulegen.",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Das Schl\xfcssel-Wert-Paar, das sie eingeben, wird ihnen w\xe4hrend der Metadaten-Konfiguration im Autofill-Assistenten zur Verf\xfcgung stehen."),(0,i.yg)("li",{parentName:"ul"},"Alle Nutzende einer Organisation k\xf6nnen eigene Metadaten-Felder zu ihren Nutzerprofilen hinzuf\xfcgen. Nutzende mit den Rollen Themen-Manager oder Supernutzer, die Metadaten konfigurieren, sollten mit Nutzenden mit der Rolle Daten-Manager abstimmen, welche eigenen Metadaten-Felder angelegt werdne. Themen, die so konfiguriert sind, dass sie auf die eigenen Metadaten-Felder eines Nutzerprofils zugreifen, werden den Wert des Nutzerprofils verwenden, von dem aus ein Datensatz angelegt wird.")))),(0,i.yg)("p",null,(0,i.yg)("em",{parentName:"p"},"WICHTIG: Eigene Metadaten-Felder sind optional.")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Schritt 2: Ein Schema und ein Thema f\xfcr ihren Datensatz anlegen")),(0,i.yg)("p",null,"Der n\xe4chste Schritt im Metadaten-Konfigurations-Ablauf ist, ein Schema und ein Thema f\xfcr ihren Datensatz anzulegen. Ihr Datensatz besteht aus den Daten, f\xfcr die sie Metadaten erzeugen m\xf6chten. hale\xbbconnect bietet verschiedene M\xf6glichkeiten, ein Schema anzulegen. Mehr Informationen zu diesen finden sie in den folgenden Abschnitten der Dokumentation:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/de/docs/setup-hc/create-a-schema/2018-01-28-schema-preset"},"Ein neues Schema \xfcber die Auswahl eines Presets erstellen")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/de/docs/setup-hc/create-a-schema/2018-01-28-schema-create-file"},"Ein neues Schema \xfcber das Hochladen von Schemadateien erstellen")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/de/docs/setup-hc/create-a-schema/2018-01-28-schema-create-external"},"Ein neues Schema \xfcber Angabe einer Web-Adresse eines Schemas erstellen")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/de/docs/setup-hc/create-a-schema/2018-01-28-schema-create-existing"},"Ein neues Schema auf Basis eines bestehenden Schemas erstellen"))),(0,i.yg)("p",null,"In diesem Tutorial werden wir die Option nutzen, ein neues Schema \xfcber das Hochladen einer Schema-Datei zu erstellen. Ihre Quell-Daten sind in Shape-Format und hale\xbbconnect erm\xf6glicht das Erstellen eines Schemas aus einer vorliegenden Shape-Datei. hale\xbbconnect liest diese Shape-Datei automatisch und generiert ihr Schema."),(0,i.yg)("p",null,"Um auf Basis einer Shape-Datei ein neues Schema anzulegen, folgen sie in der Rolle ","\xab","Themenmanager","\xbb"," oder ","\xab","Superanwender","\xbb"," folgendem Ablauf:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Gehen sie auf ","\xab","Schemas","\xbb"," im Hauptmen\xfc.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Gehen sie auf ","\xab","+ Neues Schema anlegen","\xbb"," am Ende der Schema-Liste.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Erstellungsmethode w\xe4hlen. W\xe4hlen sie im ersten Schritt ","\xab","Schemadateien hochladen","\xbb",". Klicken sie auf ","\xab","Weiter","\xbb",".")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Schema definieren. Definieren sie als n\xe4chstes das Schema, das sie nutzen wollen. Die Schemadefinition h\xe4ngt von der Erstellungsmethode ab, die sie im vorherigen Schritt ausgew\xe4hlt haben."),(0,i.yg)("p",{parentName:"li"},"*Klicken sie auf ","\xab","Datei(en) ausw\xe4hlen","\xbb"," und navigieren sie zu den Shape-Dateien, die sich im Ordner mit den Daten zu diesem Tutorial befinden. F\xfcgen sie die Shape-Dateie ","\xab","WatercourseLink","\xbb"," hinzu. Sie k\xf6nnen auch den Ordner, der die Shape-Dateien enth\xe4lt, im zip-Format hochladen. Wenn sie fertig sind, klicken sie auf ","\xab","Weiter","\xbb",".",(0,i.yg)("img",{src:t(8091).A,alt:"",title:"Ein neues Schema anlegen",className:"img-responsive img-inline-help"})),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Informationen erg\xe4nzen. Geben sie den Namen der Autorin oder des Autors, den Typ und die Version ihres Schemas an. Wenn sie fertig sind, klicken sie auf ","\xab","Weiter","\xbb",".")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Anlegen best\xe4tigen. \xdcberpr\xfcfen sie in einem abschlie\xdfenden Schritt ihr Schema. Sie haben die Option, ihrem Schema ein Thema hinzuzuf\xfcgen oder ein solches f\xfcr ihr Schema zu erstellen. Aktivieren sie den Schalter um das Anlegen eines Themas zu erm\xf6glichen. Wenn sie fertig sind, klicken sie auf ","\xab","Anlegen","\xbb"," um ihr Schema zu speichern und ein zugeh\xf6riges Thema anzulegen."))))),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Schritt 3: Metadaten in ihrem Thema konfigurieren")),(0,i.yg)("p",null,"Ein Thema ist ein wiederverwendbares Konfigurationsobjekt, das verwendet wird, um allgemeine Einstellungen f\xfcr Datensatz-Metadaten, Dienste-Bereitstellung und Transformationen zu definieren. Ein Thema besteht aus mehreren Elementen:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Ein Schema, das durch die Verbindung zu Objektarten definiert wird."),(0,i.yg)("li",{parentName:"ul"},"Anzeige-Einstellungen f\xfcr die Attribute und Objektarten des Schemas, wie beispielsweise Alias und Darstellung."),(0,i.yg)("li",{parentName:"ul"},"Eine Metadaten-Konfiguration, die festlegt, welche Metadaten-Felder bereitgestellt werden m\xfcssen und Standardwerte sowie automatische F\xfcll-Regeln f\xfcr eine st\xe4rkere Automatisierung festlegt."),(0,i.yg)("li",{parentName:"ul"},"Verbindungen zu Transformationsprojekten, die Format-Konvertierungen und Schema-Transformationen erlauben."),(0,i.yg)("li",{parentName:"ul"},"Eine Konfiguration f\xfcr einen automatischen Ablauf, die daf\xfcr sorgt, dass die Dienste-Bereitstellung und die Daten-Transformation durch bestimmte Ereignisse, wie die Aktualisierung eines Datensatzes ausgel\xf6st werden k\xf6nnen.")),(0,i.yg)("p",null,"Das Metadaten-Editor-Werkzeug befindet sich im ","\xab","Metadaten","\xbb","-Bereich ihres Themas. In diesem Schritt nutzen wir den Metadaten-Editor um eine wiederverwendbare Metadaten-Konfiguration zu erstellen, die eigene Metadaten-Felder, Autofill-Regeln und Enumerationen verwendet. Die Metadaten-Konfiguration wird f\xfcr alle Datens\xe4tze verwendet, die ihr Thema nutzen. Wenn sie Metadaten haben, die sie wiederverwenden wollen, finden sie Informationen dazu im ",(0,i.yg)("a",{parentName:"p",href:"/de/docs/setup-hc/edit-metadata-config/2015-02-10-theme-edit-metadata"},"Metadatenkonfiguration bearbeiten"),"-Bereich unserer Hilfe."),(0,i.yg)("p",null,"Navigieren sie zun\xe4chst zu dem Thema, das sie w\xe4hrend des Anlegen des Schemas in Schritt 2 angelegt haben."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Gehen sie auf ","\xab","Themen","\xbb"," im Hauptmen\xfc."),(0,i.yg)("li",{parentName:"ul"},"Geben sie den Namen ihres Themas in die Suchleiste ein. Wenn sie ein Thema w\xe4hrend des Anlegens eines Schemas anlegen, erh\xe4lt ihr Thema automatisch den gleichen Namen wie ihr Schema. Sie k\xf6nnen auch das Aufklappmen\xfc neben ","\xab","Sortierung","\xbb"," nutzen. W\xe4hlen sie ","\xab","Aktualit\xe4t","\xbb"," um ihre zuletzt erstellten Themen anzeigen zu lassen."),(0,i.yg)("li",{parentName:"ul"},"W\xe4hlen sie ihr Thema von der Liste der angezeigten Ressourcen aus."),(0,i.yg)("li",{parentName:"ul"},"Klicken sie auf den Bereich namens ","\xab","Metadaten","\xbb",". ",(0,i.yg)("img",{src:t(4085).A,alt:"",title:"Metadaten",className:"img-responsive img-inline-help"}))),(0,i.yg)("p",null,"Der ","\xab","Metadaten","\xbb","-Bereich enth\xe4lt Konfigurations-Optionen und einen editierbaren JSON Text-Editor, der es Nutzenden mit den Rollen ","\xab","Themenmanager","\xbb"," oder ","\xab","Superanwender","\xbb"," erm\xf6glicht, die Standard-Metadaten-Vorlage anzupassen. Die Standard-Metadaten-Vorlage ist eine Liste von Kategorie-Objekten, mit deren Hilfe valide ISO-, INSPIRE- und GDI-DE-Metadaten-Dateien erzeugt werden. Jedes Kategorie-Objekt in Verbindung mit den darin enthaltenen Feldern liefert die Informationen, die ben\xf6tigt werden, um Metadaten-Attribute in den unterst\xfctzten Metadaten-Profilen zu f\xfcllen. Die Metadaten-Vorlage wird intern genutzt um von Nutzenden bereitgestellte Metadaten auf die Metadaten-Profile abzubilden. Das ","\xab","comment","\xbb","-Feld in jedem Kategorie-Objekt gibt das daf\xfcr relevante Metadaten-Profil an. Beispielsweise ",(0,i.yg)("inlineCode",{parentName:"p"},'"comment": "ISO 3.2.1 #360"')," gibt an, dass das Objekt die Anforderung der ISO 19115 Geographic information \u2013 Metadata profile, ",(0,i.yg)("a",{parentName:"p",href:"https://www.geoportal.de/SharedDocs/Downloads/DE/GDI-DE/Deutsche_Uebersetzung_der_ISO-Felder.html"},"Abschnitt B.3.2.1 Eintrag #360")," erf\xfcllt."),(0,i.yg)("p",null,"Werfen wir einen Blick auf die Liste von Feldern in einem Kategorie-Objekt, denn diese wird f\xfcr die Metadaten-Konfiguration ben\xf6tigt."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'    {\n        "name": "md-dataset.citation.title",\n        "required": true,\n        "minOccurs": 1,\n        "maxOccurs": 1,\n        "comment": "ISO 3.2.1 #360",\n        "label": "Title",\n        "description": "name by which the cited resource is known",\n        "type": "string",\n        "schema": null,\n        "defaultValue": null,\n        "autofillRule": "{{dataset.name}}",\n        "visibility": true,\n        "editable": true,\n        "targets": {\n            "bsp": "md-dataset.citation.title"\n    }\n')),(0,i.yg)("p",null,"Es k\xf6nnen nur die folgenden Werte in das ",(0,i.yg)("inlineCode",{parentName:"p"},"name"),"-Feld eingegeben werden:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"md-dataset.citation.title"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.identification.","*",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"md-dataset.identification.abstract"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.identification.keyword_inspire"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.identification.keyword_simple"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.identification.topicCategory"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.identification.geographicExtent.eastBoundLongitude"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.identification.geographicExtent.northBoundLatitude"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.identification.geographicExtent.southBoundLatitude"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.identification.geographicExtent.westBoundLongitude"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.identification.topicCategory"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.identification.constraints.useLimitations"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.identification.constraints.useConstraints"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.identification.constraints.accessContraints"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.identification.contactForResource.","*",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"md-dataset.identification.contactForResource.individualName"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.identification.contactForResource.authorityUrl"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.identification.contactForResource.organisationName"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.identification.contactForResource.positionName"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.identification.contactForResource.roleCode"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.identification.contactForResource.email"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.identification.contactForResource.deliveryPoint"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.identification.contactForResource.postalCode"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.identification.contactForResource.city"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.identification.contactForResource.administrativeArea"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.identification.contactForResource.country"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.identification.contactForResource.voicePhone"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.identification.contactForResource.facsimile"))))),(0,i.yg)("li",{parentName:"ul"},"md-dataset.contactForMetadata.","*",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"md-dataset.contactForMetadata.individualName"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.contactForMetadata.authorityUrl"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.contactForMetadata.organisationName"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.contactForMetadata.positionName"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.contactForMetadata.roleCode"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.contactForMetadata.email"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.contactForMetadata.deliveryPoint"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.contactForMetadata.postalCode"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.contactForMetadata.city"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.contactForMetadata.administrativeArea"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.contactForMetadata.country"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.contactForMetadata.voicePhone"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.contactForMetadata.facsimile"))),(0,i.yg)("li",{parentName:"ul"},"md-dataset.fileidentifier"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.mdIdentifierLocalId"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.mdIdentifierNamespace")),(0,i.yg)("p",null,"Die ",(0,i.yg)("inlineCode",{parentName:"p"},"required"),"-, ",(0,i.yg)("inlineCode",{parentName:"p"},"minOccurs"),"- und ",(0,i.yg)("inlineCode",{parentName:"p"},"maxOccurs"),"-Felder geben die Kardinalit\xe4t eines Metadaten-Wertes an und sollten nicht ver\xe4ndert werden. Die weiteren Felder beschreiben, wie Eintr\xe4ge in der Nutzeroberfl\xe4che aussehen und sich verhalten sollen, welcher Inhalt erlaubt ist und ob sie mit Standard-Werten oder abgeleiteten Werten bef\xfcllt werden sollen."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"label:")," Die Kennzeichnung, die Nutzenden neben dem Eingabefeld angezeigt werden soll."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"description:")," Ein l\xe4ngerer, erkl\xe4render Text zu den Feldern, der angezeigt wird, wenn man die Maus \xfcber das ","\xab","label","\xbb"," bewegt."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"type:")," Der primitive Datentyp dieses Feldes. Dieser kann string, object, array, integer und float sein."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"schema:")," Das Schema oder Format des einzugebenden Wertes. Dieses kann email, enum, geojson, json, wkt und csv sein."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"defaultValue:")," Ein festgeschriebener Standard-Wert, der dem Feld immer zugewiesen wird."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"autofillRule:")," Ein dynamischer Standard-Wert, der dem Feld zugewiesen wird. Dieser Wert wird aus den aktuellen Umgebungsvariablen, wie beispielsweise der Benutzerin oder dem Benutzer, dem Organisations-Kontext, den Daten oder dem Thema berechnet. Wenn sie in eine Reihe mit einem ",(0,i.yg)("inlineCode",{parentName:"li"},"autofillRule"),"-Eigenschaften-Schl\xfcssel klicken, erscheint ein Assistent zur Auswahl eines Wertes in der operen rechten Ecke des Editors."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"editable:")," Wird auf ",(0,i.yg)("inlineCode",{parentName:"li"},"true")," gesetzt, wenn Nutzende mit der Rolle ","\xab","Datenmanager","\xbb"," in der Lage sein sollen, den Wert in diesem Feld zu ver\xe4ndern."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"targets:")," Ist eine Liste mit Abbildungs-Regeln zu externen Diensten wie beispielsweise Metadaten-Katalogen. Standardm\xe4\xdfig sollte dort zumindest ein ",(0,i.yg)("inlineCode",{parentName:"li"},"bsp"),"-Ziel definiert werden. ",(0,i.yg)("inlineCode",{parentName:"li"},"bsp")," ist die Angabe, die hale\xbbconnect f\xfcr die Ver\xf6ffentlichung der Dienste ben\xf6tigt.")),(0,i.yg)("p",null,"In diesem Tutorial werden wir uns auf die folgenden Felder konzentrieren, die alle von Nutzenden konfiguriert werden k\xf6nnen, um die automatische Erstellung von Metadaten in hale\xbbconnect zu unterst\xfctzen:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"type")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"defaultValue")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"autofillRule")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"visibility")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"editable")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"enumValues"))),(0,i.yg)("p",null,"Das erste Kategorie-Objekt im Metadaten-Editor enth\xe4lt den Namen des Datensatzes: ",(0,i.yg)("inlineCode",{parentName:"p"},'"name": "md-dataset.citation.title"'),". Im diesem ersten Beispiel setzen wir das ",(0,i.yg)("inlineCode",{parentName:"p"},"editable"),"-Feld auf ",(0,i.yg)("inlineCode",{parentName:"p"},"false"),". Platzieren sie ihren Mauszeiger neben dem ",(0,i.yg)("inlineCode",{parentName:"p"},"editable"),"-feld und geben sie ","\xab","false","\xbb"," ein. Diese Option hindert andere Nutzende in ihrer Organisation daran, den automatisch eingef\xfcllten Wert zu editieren."),(0,i.yg)("p",null,"Das zweite Kategorie-Objekt enth\xe4lt eine kutze Zusammenfassung des Datensatzes: ",(0,i.yg)("inlineCode",{parentName:"p"},'"name": "md-dataset.identification.abstract"'),". In diesem Beispiel setzen wir das ",(0,i.yg)("inlineCode",{parentName:"p"},"visibility"),"-Feld auf ",(0,i.yg)("inlineCode",{parentName:"p"},"false"),". Platzieren sie ihren Mauszeuger neben dem ",(0,i.yg)("inlineCode",{parentName:"p"},"visibility"),"-Feld und geben sie ","\xab","false","\xbb"," ein. Diese Option bestimmt die Anzahl der Felder, die Nutzende w\xe4hrend der Datensatz-Erstellung betrachten m\xfcssen.",(0,i.yg)("img",{src:t(2920).A,alt:"",title:"Konfigurations-Felder editieren",className:"img-responsive img-inline-help"})),(0,i.yg)("p",null,"Das dritte Kategorie-Objekt enh\xe4lt ein Beispiel f\xfcr eine Enumeration: ",(0,i.yg)("inlineCode",{parentName:"p"},'"name": "md-dataset.identification.keyword_inspire"'),". Enumerationen-Felder erm\xf6glichen es ihnen, Aufklappmen\xfcs in der Nutzeroberfl\xe4che zur Metadaten-Erzeugung zu erzeugen. Die Label-Wert-Paare definieren die Kennzeichnung, die in der Nutzeroberfl\xe4che angezeigt werden und die Abbildungs-Werte, die intern verwendet werden. Sie k\xf6nnen die Kennzeichnungen innerhalb einer Enumeration editieren, um die Bezeichner in der Nutzeroberfl\xe4che in einer anderen Sprache anzeigen zu lassen. Die zugeordneten Werte k\xf6nnen sie nicht editieren, da diese in einer internen Abbildung verwendet werden.",(0,i.yg)("img",{src:t(6593).A,alt:"",title:"Eine Enumeration anlegen",className:"img-responsive img-inline-help"})),(0,i.yg)("p",null,"Das vierte Kategorie-Objekt enth\xe4lt einfache Schl\xfcsselw\xf6rter: ",(0,i.yg)("inlineCode",{parentName:"p"},'"name": "md-dataset.identification.keyword_simple"'),". In diesem Beipsiel setzen wir das ",(0,i.yg)("inlineCode",{parentName:"p"},"defaultValue"),"-Feld auf 'INSPIRE', was dazu f\xfchrt, dass das Feld immer mit diesem Wert belegt wird. Platzieren sie ihren Mauszeiger neben dem ",(0,i.yg)("inlineCode",{parentName:"p"},"defaultValue"),"-Feld und geben sie  ","\xab","INSPIRE","\xbb"," ein. Das Feld bleibt editierbar, so dass Nutzende den Wert anpassen k\xf6nnen, wenn n\xf6tig."),(0,i.yg)("p",null,"Im letzten Beispiel nutzen wir eigene Metadaten-Felder um Autofill-Regeln anzulegen. In diesem Beispiel arbeiten wir mit dem Kategorie-Objekt: ",(0,i.yg)("inlineCode",{parentName:"p"},'"name": "md-dataset.contactForMetadata.positionName"'),". Platzieren sie ihren Mauszeiger neben dem ",(0,i.yg)("inlineCode",{parentName:"p"},"autofillRule:"),"-Feld. Der Autofill-Assistent erscheint in der oberen rechten Ecke des Editors. Klicken sie im Autofill-Assistenten auf ","\xab","Organisation","\xbb"," und scrollen sie zu ","\xab","Eigene Felder","\xbb",". Klicken sie im Autofill-Assistenten auf ","\xab","Eigene Felder","\xbb"," und klicken sie auf den Schl\xfcssel-Wert, den sie in Schritt 1 des Tutorials festgesetzt haben. Die Metadaten werden nun automatisch mit dem Wert bef\xfcllt, den sie f\xfcr ihr neu angeleges eigenes Feld angegeben haben.",(0,i.yg)("img",{src:t(1950).A,alt:"",title:"Autofill-Assistent",className:"img-responsive img-inline-help"})),(0,i.yg)("p",null,"Wenn sie die Vorlage im Editor konfiguriert haben, klicken sie auf den ","\xab","Speichern","\xbb","-Knopf am Ende der Seite."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Schritt 4: Datensatz und Metadaten ver\xf6ffentlichen und validieren")),(0,i.yg)("p",null,"Im letzten Schritt legen wir einen Datensatz an und pr\xfcfen die Metadaten, die wir im Laufe des Tutorials konfiguriert haben. Unter Nutzung des von und konfigurierten Themas k\xf6nnen wir in wenigen einfachen Schritten Daten hochladen und Metadaten anlegen."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Gehen sie auf ","\xab","Daten","\xbb"," im Hauptmen\xfc.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Gehen sie auf ","\xab","Neuen Datensatz anlegen","\xbb"," am Ende der Datensatz-Liste.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"W\xe4hlen sie ihr Thema aus, um es mit dem Datensatz zu verbinden.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Klicken sie ","\xab","Datei(en) ausw\xe4hlen","\xbb"," und navigieren sie zu den Tutorial-Daten namens ",(0,i.yg)("a",{parentName:"p",href:"https://wetransform.box.com/s/2mnyp9xtjbbk3b5tbc1thg0jmxthgd0e"},"Metadata_TutorialData.zip"),". Wenn sie mit Shape-Dateien arbeiten, empfehlen wir den Upload in Form einer .zip-Datei.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Geben sie ihrem Datensatz einen Namen. Dieser Name sollte es ihnen erm\xf6glichen, den Datensatz schnell und sicher im System zu identifizieren.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Geben sie Metadaten f\xfcr ihren Datensatz an. In diesem Schritt werden wir die Ergebnisse unserer Metadaten-Konfiguration sehen. Ihnen wird eine Liste mehrerer aufklappbarer Felder angezeigt, die sowohl optionale als auch erforderliche Metadaten-Elemente enthalten."),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Klappen sie das erste Feld ","\xab","Datensatz - Allgemeine Angaben","\xbb"," auf, um folgende Festsetzungen zu pr\xfcfen:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Das ","\xab","Datensatz-Titel","\xbb","-Feld ist nicht editierbar."),(0,i.yg)("li",{parentName:"ul"},"Das ","\xab","Kurzbeschreibung Datensatz","\xbb","-Feld ist nicht sichtbar."),(0,i.yg)("li",{parentName:"ul"},"Klicken sie in das Aufklappmen\xfc des ","\xab","INSPIRE-Thema","\xbb","-Feldes, um die Werte der Enumeration zu sehen."))),(0,i.yg)("li",{parentName:"ul"},"Klappen sie das Feld ","\xab","Datensatz - Ansprechperson Metadaten","\xbb"," auf um folgende Festsetzung zu pr\xfcfen:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Das ","\xab","Position","\xbb","-Feld ist mit dem Wert ihres eigenen Metadaten-Feldes belegt."))))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"In einem letzten Schritt k\xf6nnen sie die Schritte des Ver\xf6ffentlichungs-Ablaufes \xfcberpr\xfcfen, die sie f\xfcr das Thema konfiguriert haben. Ihnen werden zwei Schalter angezeigt, mit denen sie Darstellungs- und Download-Dienste f\xfcr ihren Datensatz anlegen k\xf6nnen. Aktivieren sie die Schalter und klicken sie auf ","\xab","Weiter","\xbb","."))),(0,i.yg)("p",null,"hale\xbbconnect beginnt sofort, ihre Metadaten zu testen und zu validieren."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Klicken sie auf den ","\xab","Datstellungs-Dienste","\xbb","-Bereich."),(0,i.yg)("li",{parentName:"ul"},"Das Testberichte-Feld stellt eine Liste von PDF-Dateien zur Verf\xfcgung, welche die Ergebnisse einer Reihe von Tests enthalten, die mit den ver\xf6ffentlichten Metadaten und Diensten durchgef\xfchrt werden. Die Tests \xfcberpr\xfcfen die Konformit\xe4t zu ISO, GDI-DE und INSPIRE. Mehr Informationen dar\xfcber finden sie im ",(0,i.yg)("a",{parentName:"li",href:"/de/docs/references/data/2018-03-08-reference-data-view-services"},"Darstellungs-Dienste"),"-Bereich unserer Hilfe."),(0,i.yg)("li",{parentName:"ul"},"Klicken sie auf einen der aufgelisteten Testberichte um die Ergebnisse anzusehen.")),(0,i.yg)("p",null,"Die Konfiguration von Metadaten hilft Nutzenden Metadaten schnell und effizient zu erzeugen, w\xe4hrend das Fehlerpotential deutlich reduziert wird. hale\xbbconnect sammelt Informationen von verschiedenen Stellen der PLattform um den Metadaten-Generierungs-Prozess zu automatisieren und valide sowie konforme Datensatz- und Dienste-Metadaten zu produzieren. In diesem Tutorial haben wir Metadaten in einem Thema konfiguriert, dass von verschiedenen Nutzern mit allen m\xf6glichen Rollen so oft wir n\xf6tig wiederverwendet werden kann, wodurch die Belastung durch Vorgaben zu Metadaten deutlich vermindert werden kann."))}g.isMDXComponent=!0},8091:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/Tutorial_Upload_schema-3d4ed508bc450e418cf92dd795331515.png"},1950:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/Tutorial_autofillAssistant-8138ea007261969ac60d40f9fea684e3.png"},1155:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/Tutorial_custom_fields-1b8d3eedbbca529ec8306daff62ad7bb.png"},2920:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/Tutorial_editconfig-1ab44321d668a00e2b93a702d06dc3ce.png"},6593:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/Tutorial_enum-776a0874d4291e7cde0752034acdd61d.png"},4085:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/Tutorial_metadata-e279e2f043846e1156890397447dcd5a.png"},4445:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/Tutorial_organisations-4991759904cc1a79c3d3e24d624ff69a.png"}}]);