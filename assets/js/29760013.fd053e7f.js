"use strict";(self.webpackChunkhc_documentation=self.webpackChunkhc_documentation||[]).push([[3800],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),f=n,d=m["".concat(s,".").concat(f)]||m[f]||c[f]||o;return r?a.createElement(d,i(i({ref:t},u),{},{components:r})):a.createElement(d,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6157:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={title:"Q&A 10",categories:["help-page-category-faq","help-page-subcategory-faq"],layout:"help-detail",language:"en",displayed_sidebar:"tutorialSidebar"},i=void 0,l={unversionedId:"faq/faq_hs/faq-hs-mapview-3",id:"faq/faq_hs/faq-hs-mapview-3",title:"Q&A 10",description:"How do I correctly map geometries?",source:"@site/docs/faq/faq_hs/faq-hs-mapview-3.md",sourceDirName:"faq/faq_hs",slug:"/faq/faq_hs/faq-hs-mapview-3",permalink:"/docs/faq/faq_hs/faq-hs-mapview-3",draft:!1,editUrl:"https://github.com/wetransform/hc-documentation/tree/master/docs/faq/faq_hs/faq-hs-mapview-3.md",tags:[],version:"current",frontMatter:{title:"Q&A 10",categories:["help-page-category-faq","help-page-subcategory-faq"],layout:"help-detail",language:"en",displayed_sidebar:"tutorialSidebar"},sidebar:"tutorialSidebar",previous:{title:"Q&A 9",permalink:"/docs/faq/faq_hs/faq-hs-mapview-2"},next:{title:"FAQs for hale\xbbconnect",permalink:"/docs/faq/2018-05-06-faq-hc"}},s={},p=[],u={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",null,"How do I correctly map geometries?"),(0,n.kt)("p",null,"There are several ways of mapping geometries correctly in hale\xbbstudio, depending on the type of the geometry. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Source data contains JTS (Java Topology Suite) geometries (e.g. Shapefiles)")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"There is a value at the level of the attribute with the geometry icon but this value only serves internal geometry representation\n(this does not occur in a xml file)."),(0,n.kt)("li",{parentName:"ul"},"JTS geometries are used for all geometry related operations in hale\xbbstudio."),(0,n.kt)("li",{parentName:"ul"},"If there is a geometry object in the source data, it is recommended to use it for mapping purposes."),(0,n.kt)("li",{parentName:"ul"},"If a JTS geometry is exported from hale\xbbstudio, all information on lower level attributes will be ignored.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Source data contains geometry in xml structure")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The geometry is loaded directly from the xml file."),(0,n.kt)("li",{parentName:"ul"},"hale\xbbstudio tries to generate a JTS geometry from it.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Complex geometry attribute in the source data (an icon with three dots is displayed beside the attribute)")," "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"There will be no geometry value at this level. "),(0,n.kt)("li",{parentName:"ul"},"It should never be used for mapping purposes.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Complex geometry attribute in the target data")," "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"It can be used for mapping purposes. "),(0,n.kt)("li",{parentName:"ul"},"The JTS geometry exists on this level and can be displayed in the Map View."),(0,n.kt)("li",{parentName:"ul"},"When exporting the data, hale\xbbstudio is looking for the best way to write the JTS geometry\nto the XML structure available under the attribute.")))}c.isMDXComponent=!0}}]);