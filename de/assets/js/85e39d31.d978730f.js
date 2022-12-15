"use strict";(self.webpackChunkhc_documentation=self.webpackChunkhc_documentation||[]).push([[8335],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,a=new Array(s);a[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2343:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const s={title:"Darstellungsdienste konfigurieren",categories:["help-page-category-setup-haleconnect","help-page-subcategory-setup-haleconnect-themeservices"],layout:"help-detail",language:"de"},a=void 0,o={unversionedId:"setup-hc/config-services/2015-02-01-theme-edit-view-service",id:"setup-hc/config-services/2015-02-01-theme-edit-view-service",title:"Darstellungsdienste konfigurieren",description:"F\xfcr alle Datens\xe4tze, die dem Thema zugeordnet werden, gilt eine einheitliche Konfiguration f\xfcr Darstellungsdienste. Es lassen sich verschiedene Aspekte der Konfiguration solcher Dienste anpassen, insbesondere die Art des Dienstes (WMS oder WMTS), die unterst\xfctzten r\xe4umlichen Bezugssysteme, sowie die kartografische Darstellung.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/setup-hc/config-services/2015-02-01-theme-edit-view-service.md",sourceDirName:"setup-hc/config-services",slug:"/setup-hc/config-services/2015-02-01-theme-edit-view-service",permalink:"/de/docs/setup-hc/config-services/2015-02-01-theme-edit-view-service",draft:!1,editUrl:"https://github.com/wetransform/hc-documentation/tree/master/i18n/de/docusaurus-plugin-content-docs/current/setup-hc/config-services/2015-02-01-theme-edit-view-service.md",tags:[],version:"current",frontMatter:{title:"Darstellungsdienste konfigurieren",categories:["help-page-category-setup-haleconnect","help-page-subcategory-setup-haleconnect-themeservices"],layout:"help-detail",language:"de"},sidebar:"tutorialSidebar",previous:{title:"Download-Dienste konfigurieren",permalink:"/de/docs/setup-hc/config-services/2015-02-01-theme-edit-download-service"},next:{title:"Automatischer Ablauf bei Neuanlage und \xc4nderungen",permalink:"/de/docs/setup-hc/config-transformations/2015-02-01-theme-automation"}},l={},c=[],u={toc:c};function p(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"F\xfcr alle Datens\xe4tze, die dem Thema zugeordnet werden, gilt eine einheitliche Konfiguration f\xfcr Darstellungsdienste. Es lassen sich verschiedene Aspekte der Konfiguration solcher Dienste anpassen, insbesondere die Art des Dienstes (WMS oder WMTS), die unterst\xfctzten r\xe4umlichen Bezugssysteme, sowie die kartografische Darstellung."),(0,i.kt)("p",null,"Um diese anzupassen, gehen sie in der Rolle ","\xab","Themenmanager","\xbb"," oder ","\xab","Superanwender","\xbb"," wie folgt vor:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Gehen sie auf ","\xab","Themen","\xbb",".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"W\xe4hlen sie das Thema aus, das sie bearbeiten wollen.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Gehen sie auf ","\xab","Darstellungsdienste","\xbb",".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"W\xe4hlen sie die Dienstart aus. (zur Zeit nur WMS 1.3.0 und WMTS 1.0.0 verf\xfcgbar)",(0,i.kt)("img",{src:n(3742).Z,alt:"",title:"Darstellungs-Dienste konfigurieren",className:"img-responsive img-inline-help"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"W\xe4hlen sie mindestens ein r\xe4umliches Bezugssystem aus, das unterst\xfctzt werden soll. Sie k\xf6nnen durch klicken auf den ","\xab","+","\xbb","-Knopf weitere r\xe4umliche Bezugssysteme hinzuf\xfcgen.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Aktivieren oder deaktivieren sie GetFeatureInfo. Das Aktivieren von GetFeatureInfo erm\xf6glicht die Abfrage von Objekten im WMS.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Laden sie einen Styled Layer Descriptor hoch, um die kartographische Konfiguration des Darstellungsdiensts vorzunehmen.\nDas SLD muss eine valide Styled Layer Descriptor-Datei sein. Im folgenden ist ein Beispiel aufgef\xfchrt um zu verdeutlichen wie Layer im WMS definiert werden (Name, Beschreibung, Darstellung):"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'<StyledLayerDescriptor version="1.1.0" xmlns:usgovserv="http://inspire.ec.europa.eu/schemas/us-govserv/4.0" \u2026 >\n  <NamedLayer>\n    <se:Name>areas</se:Name>\n    <se:Description>\n      <se:Title>Bezirke</se:Title>\n      <se:Abstract></se:Abstract>\n    </se:Description>\n    <UserStyle>\n      <se:Name>US.GovernmentalService_1</se:Name>\n      <se:FeatureTypeStyle>\n        <se:FeatureTypeName>\u2026:GovernmentalService</se:FeatureTypeName>\n        <se:Rule>\n          <se:PolygonSymbolizer>\n            <se:Name>symbolizer_Schulstandorte</se:Name>\n            <se:Geometry>\n              <ogc:PropertyName>\u2026:areaOfResponsibilityByPolygon\n              </ogc:PropertyName>\n            </se:Geometry>\n            \u2026\n')),(0,i.kt)("p",{parentName:"li"},"F\xfcr weitere Informationen zu SLD-Dateien auf hale\xbbconnect, besuchen sie bitte das ",(0,i.kt)("a",{parentName:"p",href:"/de/docs/tutorials/2018-05-03-sld-tutorial"},"SLD-Tutorial"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Aktivieren sie den ","\xab","Zus\xe4tzliche Ebenen aus Raster-Quellen erlauben","\xbb","-Schalter. Das Aktivieren des Schalters erm\xf6glicht es Nutzenden, zus\xe4tzlich zu Vektor-Daten Raster-Daten im PNG- oder GeoTIFF-Format w\xe4hrend des Anlegens eines Datensatzes hochzuladen und zu ver\xf6ffentlichen. Die Raster-Daten werden in einem separaten Raster-Layer ver\xf6ffentlicht."))))}p.isMDXComponent=!0},3742:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/configure_view_services1-226e6a5942c8dba9a7a8a13e5330558e.png"}}]);