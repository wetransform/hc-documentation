"use strict";(self.webpackChunkhc_documentation=self.webpackChunkhc_documentation||[]).push([[6344],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>g});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(t),g=i,p=d["".concat(c,".").concat(g)]||d[g]||f[g]||a;return t?r.createElement(p,o(o({ref:n},l),{},{components:t})):r.createElement(p,o({ref:n},l))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5065:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=t(7462),i=(t(7294),t(3905));const a={title:"Zugriffskontrollen",categories:["help-page-category-reference","help-page-subcategory-reference-data"],layout:"help-detail",language:"de",sidebar_position:2},o=void 0,s={unversionedId:"references/data/2018-03-09-reference-data-accesscontrol",id:"references/data/2018-03-09-reference-data-accesscontrol",title:"Zugriffskontrollen",description:"Der Abschnitt &laquo;Zugriffskontrolle&raquo; definiert, wie auf ver\xf6ffentlichte hale\xbbconnect-Dienste zugegriffen werden kann. hale\xbbconnect unterst\xfctzt sichere Serviceanfragen durch den Einsatz von Authentifizierungstokens. Aktivieren sie &laquo;Authentifizierung mit Organisations-Token&raquo;, um sichere Serviceanfragen zu erm\xf6glichen. Darstellungs- und Download-Dienste k\xf6nnen dabei unabh\xe4ngig voneinander konfiguriert werden.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/references/data/2018-03-09-reference-data-accesscontrol.md",sourceDirName:"references/data",slug:"/references/data/2018-03-09-reference-data-accesscontrol",permalink:"/de/docs/references/data/2018-03-09-reference-data-accesscontrol",draft:!1,editUrl:"https://github.com/wetransform/hc-documentation/tree/master/i18n/de/docusaurus-plugin-content-docs/current/references/data/2018-03-09-reference-data-accesscontrol.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Zugriffskontrollen",categories:["help-page-category-reference","help-page-subcategory-reference-data"],layout:"help-detail",language:"de",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Dateien",permalink:"/de/docs/references/data/2018-03-10-reference-data-files"},next:{title:"Metadaten",permalink:"/de/docs/references/data/2018-03-09-reference-data-metadata"}},c={},u=[],l={toc:u};function f(e){let{components:n,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Der Abschnitt ","\xab","Zugriffskontrolle","\xbb"," definiert, wie auf ver\xf6ffentlichte hale\xbbconnect-Dienste zugegriffen werden kann. hale\xbbconnect unterst\xfctzt sichere Serviceanfragen durch den Einsatz von Authentifizierungstokens. Aktivieren sie ","\xab","Authentifizierung mit Organisations-Token","\xbb",", um sichere Serviceanfragen zu erm\xf6glichen. Darstellungs- und Download-Dienste k\xf6nnen dabei unabh\xe4ngig voneinander konfiguriert werden."),(0,i.kt)("p",null,"Authentifizierungstoken k\xf6nnen auf der Profilseite der Organisation generiert werden. Klicken sie auf den Knopf \xabToken generieren\xbb, um ein Authentifizierungstoken zu generieren. Tokens sind zwei Wochen lang g\xfcltig und werden im Browser-Cache gespeichert. Der Parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"kelvin_token")," wird automatisch zu Diensten hinzugef\xfcgt, die \xfcber die Token-Authentifizierung gesch\xfctzt sind. Das Token muss in der URL enthalten sein, um auf den gesch\xfctzten Dienst zugreifen zu k\xf6nnen."),(0,i.kt)("img",{src:t(3833).Z,alt:"",title:"Generieren eines Authentifizierungstokens auf der Profilseite der Organisation",className:"img-responsive img-inline- Hilfe"}),(0,i.kt)("p",null,"Es kann auch ein einfacher Passwortschutz aktiviert werden. Der grundlegende Passwortschutz ist nicht so sicher wie die Token-Authentifizierung. Aktivieren sie ","\xab","Basic Authentifizierung mit festem Benutzernamen und Passwort","\xbb",", um den Passwortschutz zu aktivieren. Bei Verwendung dieses Schutzmechanismus m\xfcssen Benutzende f\xfcr den Zugriff auf Dienste Nutzername und Passwort eingeben."),(0,i.kt)("p",null,"Damit \xc4nderungen an Zugriffskontrollen wirksam werden, m\xfcssen die Dienste erneut publiziert werden."),(0,i.kt)("p",null,"Derzeit wird die Token-Authentifizierung f\xfcr Serien oder Serien-Unterdatens\xe4tze nicht unterst\xfctzt."))}f.isMDXComponent=!0},3833:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/token_auth-403e82b6b9214f8fecd2a3e84e7f2484.png"}}]);