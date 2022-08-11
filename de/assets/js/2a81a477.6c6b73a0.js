"use strict";(self.webpackChunkhc_documentation=self.webpackChunkhc_documentation||[]).push([[9503],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),d=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(t),m=a,g=p["".concat(u,".").concat(m)]||p[m]||s[m]||i;return t?r.createElement(g,o(o({ref:n},c),{},{components:t})):r.createElement(g,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=p;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4858:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=t(7462),a=(t(7294),t(3905));const i={title:"Komplexe Nutzungsbedingungen konfigurieren",categories:["help-page-category-setup-haleconnect","help-page-subcategory-setup-haleconnect-thememetadata"],layout:"help-detail",language:"de"},o=void 0,l={unversionedId:"setup-hc/edit-metadata-config/2015-02-01-theme-edit-usage-conditions",id:"setup-hc/edit-metadata-config/2015-02-01-theme-edit-usage-conditions",title:"Komplexe Nutzungsbedingungen konfigurieren",description:"Im Pfad &laquo;md-dataset.identification.constraints.mdConstraintPredefined&raquo; k\xf6nnen komplexe Nutzungsbedingungen vordefiniert werden, die Nutzenden in der Rolle &laquo;Datenmanager&raquo; dann zur Auswahl stehen. Hier k\xf6nnen auch open-data-Lizenzen hinterlegen werden.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/setup-hc/edit-metadata-config/2015-02-01-theme-edit-usage-conditions.md",sourceDirName:"setup-hc/edit-metadata-config",slug:"/setup-hc/edit-metadata-config/2015-02-01-theme-edit-usage-conditions",permalink:"/de/docs/setup-hc/edit-metadata-config/2015-02-01-theme-edit-usage-conditions",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/setup-hc/edit-metadata-config/2015-02-01-theme-edit-usage-conditions.md",tags:[],version:"current",frontMatter:{title:"Komplexe Nutzungsbedingungen konfigurieren",categories:["help-page-category-setup-haleconnect","help-page-subcategory-setup-haleconnect-thememetadata"],layout:"help-detail",language:"de"},sidebar:"tutorialSidebar",previous:{title:"Thema anlegen",permalink:"/de/docs/setup-hc/create-a-theme/2015-02-10-theme-create"},next:{title:"Metadatenkonfiguration bearbeiten",permalink:"/de/docs/setup-hc/edit-metadata-config/2015-02-10-theme-edit-metadata"}},u={},d=[],c={toc:d};function s(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Im Pfad ","\xab","md-dataset.identification.constraints.mdConstraintPredefined","\xbb"," k\xf6nnen komplexe Nutzungsbedingungen vordefiniert werden, die Nutzenden in der Rolle ","\xab","Datenmanager","\xbb"," dann zur Auswahl stehen. Hier k\xf6nnen auch open-data-Lizenzen hinterlegen werden."),(0,a.kt)("p",null,"Die Hinterlegung der Nutzungsbedingungen erfolgt als Auswahlliste (enum). Im Feld \u201alabel\u2018 wird jeweils ein Bezeichner hinterlegt und im Feld \u201avalue\u2018 die Nutzungsbedingungen in einem vorgegebenen Textformat. Das Textformat ben\xf6tigt folgende Grammatik:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"('constraint' '['\n  ('useLimitation='<TEXT>)?\n   (\n     ('useConstraint=' <TEXT>)\n     |('accessConstraint=' iso:RestrictionCode)\n     |('otherConstraint=' <TEXT>)\n     |('otherConstraint-opendata='\n       '['  \n           'id=' <TEXT>\n           'name=' <TEXT>\n           'source=' <TEXT>\n           'url=' <TEXT>\n       ']'\n   )*\n']')*\n")),(0,a.kt)("p",null,"Erl\xe4uterung der verwendeten Syntax:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'abc'"),":  Schl\xfcsselworte, Eingabe ohne Anf\xfchrungszeichen."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"( inhalt )?"),": Optional, der Inhalt kann bei der Eingabe weggelassen werden."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"( inhalt )*"),": Mehrfach, der Inhalt kann mehrfach eingegeben werden."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"(inhalt-1 | inhalt-2)"),": Oder, entweder Inhalt-1 oder Inhalt-2."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<TEXT>"),": Texteingabe, ohne die spitzen Klammern, ")),(0,a.kt)("p",null,"Erlaubte Zeichen sind alle Buchstaben und Ziffern sowie folgende Sonderzeichen: ",(0,a.kt)("inlineCode",{parentName:"p"},"'+'|':'|'-'|','|'.'|';'|'?'|'!'|'\u201e'|'\xf6'|'\xe4'|'\xfc'|'\xd6'|'\xc4'|'\xdc'|'\xdf'|'\u201c'|'('|')'|'@'|'/'|'#'|'{'|'}'|'\xa9'"),", jedoch keine Anf\xfchrungszeichen. "),(0,a.kt)("p",null,"Die Angabe im Feld \u201avalue\u2018 erfolgt ohne Zeilenumbruch. Es empfiehlt sich daher, den Inhalt zun\xe4chst in einem Texteditor vorzubereiten und dann ohne Zeilenumbr\xfcche in die Konfiguration zu \xfcbertragen."))}s.isMDXComponent=!0}}]);