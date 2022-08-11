"use strict";(self.webpackChunkhc_documentation=self.webpackChunkhc_documentation||[]).push([[4851],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),d=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(t),h=a,g=p["".concat(o,".").concat(h)]||p[h]||c[h]||i;return t?r.createElement(g,l(l({ref:n},u),{},{components:t})):r.createElement(g,l({ref:n},u))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=p;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var d=2;d<i;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1057:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=t(7462),a=(t(7294),t(3905));const i={title:"Fragen und Antworten f\xfcr hale\xbbconnect",categories:["help-page-category-faq","help-page-subcategory-faq"],layout:"help-detail",language:"de"},l=void 0,s={unversionedId:"faq/faq_hs/faq-hs-general-3",id:"faq/faq_hs/faq-hs-general-3",title:"Fragen und Antworten f\xfcr hale\xbbconnect",description:"Wie k\xf6nnen die pro plugins installiert werden?",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/faq/faq_hs/faq-hs-general-3.md",sourceDirName:"faq/faq_hs",slug:"/faq/faq_hs/faq-hs-general-3",permalink:"/de/docs/faq/faq_hs/faq-hs-general-3",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/faq/faq_hs/faq-hs-general-3.md",tags:[],version:"current",frontMatter:{title:"Fragen und Antworten f\xfcr hale\xbbconnect",categories:["help-page-category-faq","help-page-subcategory-faq"],layout:"help-detail",language:"de"}},o={},d=[],u={toc:d};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",null,"Wie k\xf6nnen die pro plugins installiert werden?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Installation der Lizenz")),(0,a.kt)("p",null,"Um die Lizenz in hale\xbbstudio oder einer anderen hale-basierten Anwendung verf\xfcgbar zu machen,\nlegen sie bitte die Datei plugin.lic aus dem ZIP-Archiv an einem der folgenden Orte ab:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Im Ordner .hale in ihrem Benutzerverzeichnis (Windows: %USERPROFILE%/.hale; Linux: ~/.hale;\nMac: suchen sie hale\xbbstudio in ",(0,a.kt)("code",null,"Applications"),", Rechtsklick und Contents-Ordner ausw\xe4hlen).\nFalls n\xf6tig, legen sie den Ordner an. Hinweis f\xfcr Windows-Nutzer: Ordner, deren Namen mit einem ",(0,a.kt)("code",null,".")," beginnen,\nk\xf6nnen nicht mit dem Explorer angelegt werden, sondern m\xfcssen \xfcber die Eingabeaufforderung angelegt werden:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"C:\\>cd %USERPROFILE%\nC:\\Users\\Mustermann>mkdir .hale\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Im Arbeitsverzeichnis der Anwendung (f\xfcr hale\xbbstudio ist dies \xfcblicherweise der Ort, an dem auch die Datei HALE.exe zu finden ist)")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Installation \xfcber update-site")),(0,a.kt)("p",null,"Wenn f\xfcr die Verbindung ins Internet kein Proxy erforderlich ist,\nk\xf6nnen die hale\xbbstudio pro Plugins \xfcber den "),(0,a.kt)("a",{href:"http://help.halestudio.org/latest/index.jsp?topic=%2Feu.esdihumboldt.hale.doc.user%2Fhtml%2Fgetting_started%2Finstall_plugins.html&cp%3D0_2_3"},"eingebauten Installationsmechanismus")," installiert werden. Die Adresse der Update-Site f\xfcr hale-pro-Plugins und das Passwort f\xfcr den Zugriff k\xf6nnen \xfcber das ",(0,a.kt)("a",{href:"https://wetransform.atlassian.net/servicedesk/customer/portal/1"},"Service Desk")," angefragt werden.",(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Download der hale\xbbstudio pro Plugins")),(0,a.kt)("p",null,"Wenn die Installation \xfcber die Update-Site z. B. wegen eines Proxys nicht verwendet werden kann,\nkann die Update-Site als ZIP-Archiv unter ",(0,a.kt)("a",{href:"https://wetransform.app.box.com/v/hale-pro-plugins"},"dieser Adresse")," heruntergeladen werden.\nDas Passwort f\xfcr den Zugriff kann \xfcber das ",(0,a.kt)("a",{href:"https://wetransform.atlassian.net/servicedesk/customer/portal/1"},"Service Desk")," angefragt werden.\nDas heruntergeladene Archiv kann dann als Update-Site eingebunden werden (",(0,a.kt)("a",{href:"http://help.halestudio.org/latest/index.jsp?topic=%2Feu.esdihumboldt.hale.doc.user%2Fhtml%2Fgetting_started%2Finstall_plugins.html&cp%3D0_2_3"},"Anleitung"),")."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Installation von Plugins f\xfcr hale\xbbstudio-Versionen < 3.5.0")),(0,a.kt)("p",null,"Falls nicht anders angegeben, lassen sich hale Plugins installieren indem man das entsprechende Zip-Archiv entpackt und den enthaltenen Ordner\nim hale\xbbstudio Installationsverzeichnis ablegt. Der Ordner kann mehrere Plugins enthalten.\nFalls sie eine Aktualisierung eines Plugins vornehmen, sollten sie die alte Version innerhalb des Ordners l\xf6schen.\nWenn sie hale\xbbstudio das n\xe4chste Mal starten sollte das Plugin verf\xfcgbar sein.\nSie k\xf6nnen die Verf\xfcgbarkeit von Plugins in hale\xbbstudio \xfcber die Installation details in ",(0,a.kt)("code",null,"About >> Installation details")," pr\xfcfen.\nDen About-Dialog finden sie im Men\xfc Help. Falls sie Probleme haben das Plugin zu verwenden, gibt ggf. ein Blick in die Ansicht Error Log Aufschluss \xfcber die Ursachen."))}c.isMDXComponent=!0}}]);