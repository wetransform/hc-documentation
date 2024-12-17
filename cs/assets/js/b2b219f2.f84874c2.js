"use strict";(self.webpackChunkhc_documentation=self.webpackChunkhc_documentation||[]).push([[2033],{5680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>d});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(r),f=a,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||o;return r?n.createElement(d,c(c({ref:t},u),{},{components:r})):n.createElement(d,c({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5693:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(8168),a=(r(6540),r(5680));const o={title:"Transformace",categories:["help-page-category-reference","help-page-subcategory-reference-themes"],layout:"help-detail",language:"cs"},c=void 0,i={unversionedId:"references/themes/2018-04-05-reference-themes-transformation",id:"references/themes/2018-04-05-reference-themes-transformation",title:"Transformace",description:"\u010c\xe1st Transformace zobrazuje konfigurace transformace propojen\xe9 s va\u0161\xedm t\xe9matem. M\u016f\u017eete p\u0159idat libovoln\xfd po\u010det konfigurac\xed transformace. B\u011b\u017en\xfdm p\u0159\xedkladem je nahr\xe1v\xe1n\xed neinteroperabiln\xedch dat ve form\xe1tu Shapefile a jejich transformace do GML kompatibiln\xedho s INSPIRE.",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/references/themes/2018-04-05-reference-themes-transformation.md",sourceDirName:"references/themes",slug:"/references/themes/2018-04-05-reference-themes-transformation",permalink:"/cs/docs/references/themes/2018-04-05-reference-themes-transformation",draft:!1,editUrl:"https://github.com/wetransform/hc-documentation/tree/master/i18n/cs/docusaurus-plugin-content-docs/current/references/themes/2018-04-05-reference-themes-transformation.md",tags:[],version:"current",frontMatter:{title:"Transformace",categories:["help-page-category-reference","help-page-subcategory-reference-themes"],layout:"help-detail",language:"cs"},sidebar:"tutorialSidebar",previous:{title:"Automatizace",permalink:"/cs/docs/references/themes/2018-04-04-reference-themes-automation"},next:{title:"Stahovac\xed slu\u017eby",permalink:"/cs/docs/references/themes/2018-04-06-reference-themes-download-services"}},s={},l=[],u={toc:l},m="wrapper";function p(e){let{components:t,...r}=e;return(0,a.yg)(m,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"\u010c\xe1st Transformace zobrazuje konfigurace transformace propojen\xe9 s va\u0161\xedm t\xe9matem. M\u016f\u017eete p\u0159idat libovoln\xfd po\u010det konfigurac\xed transformace. B\u011b\u017en\xfdm p\u0159\xedkladem je nahr\xe1v\xe1n\xed neinteroperabiln\xedch dat ve form\xe1tu Shapefile a jejich transformace do GML kompatibiln\xedho s INSPIRE."),(0,a.yg)("p",null,"Ka\u017ed\xe1 konfigurace sest\xe1v\xe1 z v\xfdb\u011bru skute\u010dn\xe9ho transforma\u010dn\xedho projektu, kter\xfd m\xe1 b\xfdt proveden na datov\xfdch sad\xe1ch pat\u0159\xedc\xedch k tomuto t\xe9matu, a z konfigurace c\xedlov\xe9ho t\xe9matu. Hale connect tuto konfiguraci c\xedlov\xe9ho t\xe9matu pot\u0159ebuje, aby v\u011bd\u011bl, jak m\xe1 nakl\xe1dat s transformovan\xfdmi daty \u2013 nap\u0159\xedklad zda by tato data m\u011bla b\xfdt znovu zve\u0159ejn\u011bna nebo transformov\xe1na."),(0,a.yg)("p",null,"Chcete-li p\u0159idat novou konfiguraci, postupujte takto:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Kliknut\xedm na \u201eP\u0159idat novou konfiguraci transformace\u201c p\u0159i\u0159ad\xedte transforma\u010dn\xed projekt k t\xe9matu."),(0,a.yg)("li",{parentName:"ol"},"Klikn\u011bte na \u201eVybrat projekt\u201c a vyberte p\u0159\xedslu\u0161n\xfd transforma\u010dn\xed projekt kliknut\xedm na tla\u010d\xedtko \u201e."),(0,a.yg)("li",{parentName:"ol"},"D\xe1le klikn\u011bte na \xabVybrat c\xedlov\xe9 t\xe9ma\xbb a vyberte t\xe9ma, ke kter\xe9mu se maj\xed p\u0159i\u0159adit datov\xe9 sady vytvo\u0159en\xe9 transformac\xed."),(0,a.yg)("li",{parentName:"ol"},"Klikn\u011bte na \xabP\u0159idat konfiguraci\xbb")),(0,a.yg)("p",null,"V konfiguraci transformace klikn\u011bte na n\xe1zev projektu pro otev\u0159en\xed str\xe1nky s p\u0159ehledem transforma\u010dn\xedho projektu. Kliknut\xedm na n\xe1zev c\xedlov\xe9ho t\xe9matu otev\u0159ete str\xe1nku s p\u0159ehledem t\xe9matu."),(0,a.yg)("p",null,"Chcete-li upravit transforma\u010dn\xed projekt nebo c\xedlov\xe9 t\xe9ma ve sv\xe9 konfiguraci, klikn\u011bte na p\u0159ilehlou ikonu \xfaprav. Chcete-li odstranit konfiguraci transformace, klikn\u011bte na \u010dervenou ikonu odstran\u011bn\xed v prav\xe9m horn\xedm rohu konfigurace."))}p.isMDXComponent=!0}}]);