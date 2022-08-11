"use strict";(self.webpackChunkhc_documentation=self.webpackChunkhc_documentation||[]).push([[6165],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),o=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=o(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=o(t),h=a,d=m["".concat(l,".").concat(h)]||m[h]||p[h]||i;return t?r.createElement(d,c(c({ref:n},u),{},{components:t})):r.createElement(d,c({ref:n},u))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var o=2;o<i;o++)c[o]=t[o];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3789:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var r=t(7462),a=(t(7294),t(3905));const i={title:"Ein neues Schema \xfcber Angabe einer Web-Adresse eines Schemas erstellen",categories:["help-page-category-setup-haleconnect","help-page-subcategory-setup-haleconnect-schema-create"],layout:"help-detail",language:"de"},c=void 0,s={unversionedId:"setup-hc/create-a-schema/2018-01-28-schema-create-external",id:"setup-hc/create-a-schema/2018-01-28-schema-create-external",title:"Ein neues Schema \xfcber Angabe einer Web-Adresse eines Schemas erstellen",description:"Ein Schema beschreibt die Struktur eines Datensatzes durch die Definition von Typen und deren Eigenschaften. Schemas k\xf6nnen aus diversen Datenquellen, wie Datenbanken, XML Schema-Dateien oder Shape-Dateien, importiert werden. Sie k\xf6nnen unter Nutzung des enthaltenen Modellierungswerkzeuges auch direkt in hale connect erstellt werden.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/setup-hc/create-a-schema/2018-01-28-schema-create-external.md",sourceDirName:"setup-hc/create-a-schema",slug:"/setup-hc/create-a-schema/2018-01-28-schema-create-external",permalink:"/de/docs/setup-hc/create-a-schema/2018-01-28-schema-create-external",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/setup-hc/create-a-schema/2018-01-28-schema-create-external.md",tags:[],version:"current",frontMatter:{title:"Ein neues Schema \xfcber Angabe einer Web-Adresse eines Schemas erstellen",categories:["help-page-category-setup-haleconnect","help-page-subcategory-setup-haleconnect-schema-create"],layout:"help-detail",language:"de"},sidebar:"tutorialSidebar",previous:{title:"Ein neues Schema auf Basis eines bestehenden Schemas erstellen",permalink:"/de/docs/setup-hc/create-a-schema/2018-01-28-schema-create-existing"},next:{title:"Ein neues Schema \xfcber das Hochladen von Schemadateien erstellen",permalink:"/de/docs/setup-hc/create-a-schema/2018-01-28-schema-create-file"}},l={},o=[],u={toc:o};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Ein ",(0,a.kt)("em",{parentName:"p"},"Schema")," beschreibt die Struktur eines Datensatzes durch die Definition von Typen und deren Eigenschaften. Schemas k\xf6nnen aus diversen Datenquellen, wie Datenbanken, XML Schema-Dateien oder Shape-Dateien, importiert werden. Sie k\xf6nnen unter Nutzung des enthaltenen Modellierungswerkzeuges auch direkt in hale connect erstellt werden."),(0,a.kt)("p",null,"Um ein neues Schema zu erstellen, gehen sie in der Rolle ","\xab","Themenmanager","\xbb"," oder ","\xab","Superanwender","\xbb"," wie folgt vor:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Gehen sie auf ","\xab","Schemas","\xbb",".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Klicken sie auf ","\xab","+ Neues Schema anlegen","\xbb",".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\xab","Erstellungsmethode w\xe4hlen","\xbb",": W\xe4hlen sie ","\xab","Web-Adresse eines Schemas angeben (WFS,XSD)","\xbb"," und klicken sie auf ","\xab","Weiter","\xbb",".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Definieren sie in den folgenden Schritten das Schema. Die Schemadefinition wird durch die Erstellungsmethode bestimmt."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Geben sie die Web-Adresse ihres Schemas an (WFS, XSD). Geben sie bei Nutzung eines WFS eine DescribeFeatureType-Abfrage an. Wenn sie fertig sind, klicken sie auf ","\xab","Weiter","\xbb",".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\xab","Informationen erg\xe4nzen","\xbb",": Geben sie Name, Autor oder Autorin, Typ und Version ihres Schemas an. Wenn sie fertig sind, klicken sie auf ","\xab","Weiter","\xbb",".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\xab","Anlegen best\xe4tigen","\xbb",": \xdcberpr\xfcfen sie im letzten Schritt ihr Schema. Sie k\xf6nnen zu ihrem Schema ein Thema anlegen oder hinzuf\xfcgen. Klicken sie ","\xab","Anlegen","\xbb"," um das Schema zu speichern."))))))}p.isMDXComponent=!0}}]);