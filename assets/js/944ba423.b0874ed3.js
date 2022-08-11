"use strict";(self.webpackChunkhc_documentation=self.webpackChunkhc_documentation||[]).push([[7096],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),h=l(r),d=a,u=h["".concat(s,".").concat(d)]||h[d]||p[d]||o;return r?n.createElement(u,i(i({ref:t},f),{},{components:r})):n.createElement(u,i({ref:t},f))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},5588:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={title:"Questions and answers on hale\xbbconnect",categories:["help-page-category-faq","help-page-subcategory-faq"],layout:"help-detail",language:"en"},i=void 0,c={unversionedId:"faq/faq_hc/faq-hc-services-3",id:"faq/faq_hc/faq-hc-services-3",title:"Questions and answers on hale\xbbconnect",description:"Why is my data displayed with flipped coordinates?",source:"@site/docs/faq/faq_hc/faq-hc-services-3.md",sourceDirName:"faq/faq_hc",slug:"/faq/faq_hc/faq-hc-services-3",permalink:"/docs/faq/faq_hc/faq-hc-services-3",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/faq/faq_hc/faq-hc-services-3.md",tags:[],version:"current",frontMatter:{title:"Questions and answers on hale\xbbconnect",categories:["help-page-category-faq","help-page-subcategory-faq"],layout:"help-detail",language:"en"}},s={},l=[],f={toc:l};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},f,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",null,"Why is my data displayed with flipped coordinates?"),(0,a.kt)("p",null,"There are several factors that can cause issues with the axis order of spatial data:"),(0,a.kt)("p",null,"1) Some GIS products use the axis order specified in the ",(0,a.kt)("a",{href:"https://epsg.org/home.html"},"EPSG Registry")," for all CRS while others are deviating from it for some CRS. Depending on which software the data was produced with, the hale\xbbconnect platform may expect a different axis order."),(0,a.kt)("p",null,'2) hale\xbbconnect uses deegree to publish services. Depending on how the CRS definition is indicated in a request to a deegree wiki service, it can return the data in different axis orders. It will return the data in East North order if the CRS is indicated using "EPSG:XXXX" and it will return the data in the order specified in the ',(0,a.kt)("a",{href:"https://epsg.org/home.html"},"EPSG Registry"),"  if the CRS is indicated using urn notation. For more documentation see this ",(0,a.kt)("a",{href:"https://github.com/deegree/deegree3/wiki/Axis-order-handling"},"deegree entry "),"."),(0,a.kt)("p",null,"In hale\xbbconnect there is a toggle switch that enables users to flip the coordinates of their data if the services do not behave as expected."),(0,a.kt)("img",{src:r(8310).Z,alt:"",title:"Toggle Switch",className:"img-responsive img-inline-help"}),(0,a.kt)("p",null,"More information is available in the ",(0,a.kt)("a",{href:"https://www.wetransform.to/help/en/help-page-category-reference/help-page-subcategory-reference-data/2018/03/08/reference-data-view-services/"},"hale\xbbconnect documentation"),"."))}p.isMDXComponent=!0},8310:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/faq-hc-4-9d038f2131a10f188f4f4ce9baebc76f.png"}}]);