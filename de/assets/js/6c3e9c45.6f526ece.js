"use strict";(self.webpackChunkhc_documentation=self.webpackChunkhc_documentation||[]).push([[8151],{5680:(e,n,r)=>{r.d(n,{xA:()=>p,yg:()=>m});var t=r(6540);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=t.createContext({}),u=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},p=function(e){var n=u(e.components);return t.createElement(s.Provider,{value:n},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=u(r),c=i,m=f["".concat(s,".").concat(c)]||f[c]||d[c]||o;return r?t.createElement(m,l(l({ref:n},p),{},{components:r})):t.createElement(m,l({ref:n},p))}));function m(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=c;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[f]="string"==typeof e?e:i,l[1]=a;for(var u=2;u<o;u++)l[u]=r[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}c.displayName="MDXCreateElement"},1608:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var t=r(8168),i=(r(6540),r(5680));const o={title:"Profil als Test Suite oder XML-Beispiel-Dokument herunterladen",categories:["help-page-category-profileworkflow","help-page-subcategory-profileworkflow-files"],layout:"help-detail",language:"de"},l=void 0,a={unversionedId:"define-schema-profile/download-profile-as/2015-02-14-profile-files",id:"define-schema-profile/download-profile-as/2015-02-14-profile-files",title:"Profil als Test Suite oder XML-Beispiel-Dokument herunterladen",description:"Der &laquo;Dateien&raquo;-Bereich enth\xe4lt Optionen zum Herunterladen einer Testsuite und eines XML-Beispiel-Dokuments basierend auf der Profil-Definition.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/define-schema-profile/download-profile-as/2015-02-14-profile-files.md",sourceDirName:"define-schema-profile/download-profile-as",slug:"/define-schema-profile/download-profile-as/2015-02-14-profile-files",permalink:"/de/docs/define-schema-profile/download-profile-as/2015-02-14-profile-files",draft:!1,editUrl:"https://github.com/wetransform/hc-documentation/tree/master/i18n/de/docusaurus-plugin-content-docs/current/define-schema-profile/download-profile-as/2015-02-14-profile-files.md",tags:[],version:"current",frontMatter:{title:"Profil als Test Suite oder XML-Beispiel-Dokument herunterladen",categories:["help-page-category-profileworkflow","help-page-subcategory-profileworkflow-files"],layout:"help-detail",language:"de"},sidebar:"tutorialSidebar",previous:{title:"Ein Profil kopieren",permalink:"/de/docs/define-schema-profile/copy-profile/2015-02-16-profile-copy"},next:{title:"Objektarten eines Profils",permalink:"/de/docs/define-schema-profile/define-type-constraints/2015-02-13-profile-feature-types"}},s={},u=[],p={toc:u},f="wrapper";function d(e){let{components:n,...r}=e;return(0,i.yg)(f,(0,t.A)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Der ","\xab","Dateien","\xbb","-Bereich enth\xe4lt Optionen zum Herunterladen einer Testsuite und eines XML-Beispiel-Dokuments basierend auf der Profil-Definition."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Herunterladen als Test Suite")),(0,i.yg)("p",null,"Es muss ein Profil mit mindestens einer Bedingung existieren um den Download einer Test Suite zu erm\xf6glichen. Das Format der Test Suite ist aufgrund der geforderten Kompatibilit\xe4t mit den AdV- und GDI-DE-Test Suites (derzeit in Entwicklung) sowie mit dem INSPIRE Reference Validator ETF / BaseX. Um eine ETF Test Suite zu nutzen, muss diese exportiert und in einer ETF-Installation aufgesetzt werden."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"XML-Beispiel-Dokument")),(0,i.yg)("p",null,"Ein Profil muss zul\xe4ssige Beispielwerte f\xfcr alle verpflichtenden Objektarten und Eigenschaften enthalten, um die Generierung eines XML-Beispiel-Dokuments zu erm\xf6glichen. F\xfcr jedes Profil sollte es m\xf6glich sein, leicht Testdaten zu generieren. Die XML-Beispiel-Dokumente basieren auf den Schema- und Profil-Definitionen sowie auf den Beispiel-Werten, die unter der Nutzung von Tag/Wert-Paaren angegeben wurden."),(0,i.yg)("p",null,"Um ein XML-Beispiel-Dokument zu exportieren:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Geben sie den Namen des Tag/Wert-Paares an, von dem das Beispiel-Dokument abgeleitet werden soll."),(0,i.yg)("li",{parentName:"ul"},"Geben sie an, ob zus\xe4tzlich zu den Werten verpflichtender Elemente auch Werte f\xfcr optionale Elemente generiert werden sollen.")))}d.isMDXComponent=!0}}]);