"use strict";(self.webpackChunkhc_documentation=self.webpackChunkhc_documentation||[]).push([[3817],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),c=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return t?a.createElement(h,l(l({ref:n},s),{},{components:t})):a.createElement(h,l({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=p;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1408:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const i={title:"Datenbank konfigurieren",categories:["help-page-category-setup-haleconnect","help-page-subcategory-setup-haleconnect-themecreate"],layout:"help-detail",language:"de"},l=void 0,o={unversionedId:"setup-hc/config-source-data/2015-02-10-database",id:"setup-hc/config-source-data/2015-02-10-database",title:"Datenbank konfigurieren",description:"Arbeiten mit einer Datenbank als Quelldaten",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/setup-hc/config-source-data/2015-02-10-database.md",sourceDirName:"setup-hc/config-source-data",slug:"/setup-hc/config-source-data/2015-02-10-database",permalink:"/de/docs/setup-hc/config-source-data/2015-02-10-database",draft:!1,editUrl:"https://github.com/wetransform/hc-documentation/tree/master/i18n/de/docusaurus-plugin-content-docs/current/setup-hc/config-source-data/2015-02-10-database.md",tags:[],version:"current",frontMatter:{title:"Datenbank konfigurieren",categories:["help-page-category-setup-haleconnect","help-page-subcategory-setup-haleconnect-themecreate"],layout:"help-detail",language:"de"},sidebar:"tutorialSidebar",previous:{title:"WFS und URL konfigurieren",permalink:"/de/docs/setup-hc/config-source-data/2015-02-09-WFS"},next:{title:"Automatischer Ablauf bei Neuanlage und \xc4nderungen",permalink:"/de/docs/setup-hc/config-transformations/2015-02-01-theme-automation"}},u={},c=[{value:"Arbeiten mit einer Datenbank als Quelldaten",id:"arbeiten-mit-einer-datenbank-als-quelldaten",level:2},{value:"Leeres Thema erstellen",id:"leeres-thema-erstellen",level:2}],s={toc:c};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"arbeiten-mit-einer-datenbank-als-quelldaten"},"Arbeiten mit einer Datenbank als Quelldaten"),(0,r.kt)("p",null,"hale\xbbconnect unterst\xfctzt die Verwendung von Datenbanken als Quelldaten und erfordert Authentifizierungsdetails, um in einer Datenbank gespeicherte Daten hochzuladen. Um Ihre Dateien aus einer Datenbank hochzuladen, klicken Sie auf \xabMit Datenbank verbinden\xbb und geben Sie die folgenden Informationen ein:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Datenbanktyp (MS SQL, PostgreSQL und PostGIS werden derzeit unterst\xfctzt)"),(0,r.kt)("li",{parentName:"ul"},"Host (:Port)"),(0,r.kt)("li",{parentName:"ul"},"Datenbank (Geben Sie den Datenbanknamen an)"),(0,r.kt)("li",{parentName:"ul"},"Nutzername"),(0,r.kt)("li",{parentName:"ul"},"Passwort")),(0,r.kt)("p",null,"hale\xbbconnect ben\xf6tigt kein Schema, um eine Datenbank als Quelle zu verwenden, ben\xf6tigt jedoch ein leeres Thema (d. h. ein Thema, das keine Feature-Typen enth\xe4lt). Datenbanken k\xf6nnen als Quelldaten in Online-Umwandlungskonfigurationen verwendet werden."),(0,r.kt)("h2",{id:"leeres-thema-erstellen"},"Leeres Thema erstellen"),(0,r.kt)("p",null,"Um ein leeres Thema zu erstellen, folgen Sie diesem Arbeitsablauf als angemeldeter Datenmanager oder Themenmanager:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Gehen Sie zu ","\xab","Themen","\xbb"," auf der Hauptsymbolleiste"),(0,r.kt)("li",{parentName:"ol"},"Gehen Sie zu ","\xab","Neues Thema erstellen","\xbb"," am Ende der Themenliste"),(0,r.kt)("li",{parentName:"ol"},"W\xe4hlen Sie \u201eNicht erben\u201c, um ein Thema zu erstellen, das nicht auf einem vorhandenen Thema basiert.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Dadurch wird ein leeres Thema ohne zugeordnete Funktionstypen erstellt."))),(0,r.kt)("li",{parentName:"ol"},"Geben Sie einen Namen f\xfcr Ihr Thema ein. F\xfcgen Sie bei Bedarf eine Beschreibung und Versionsnummer hinzu."),(0,r.kt)("li",{parentName:"ol"},"Im n\xe4chsten Schritt Feature-Typen hinzuf\xfcgen, akzeptieren Sie die Standardeinstellung und klicken Sie auf ","\xab","Weiter","\xbb","."),(0,r.kt)("li",{parentName:"ol"},"Klicken Sie im letzten Schritt auf ","\xab","Erstellen","\xbb",".")))}d.isMDXComponent=!0}}]);