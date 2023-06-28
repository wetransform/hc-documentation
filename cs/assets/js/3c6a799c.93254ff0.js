"use strict";(self.webpackChunkhc_documentation=self.webpackChunkhc_documentation||[]).push([[8438],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(r),d=n,h=f["".concat(l,".").concat(d)]||f[d]||u[d]||o;return r?a.createElement(h,i(i({ref:t},p),{},{components:r})):a.createElement(h,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3186:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const o={title:"Q&A 21",categories:["help-page-category-faq","help-page-subcategory-faq"],layout:"help-detail",language:"en",displayed_sidebar:"tutorialSidebar"},i=void 0,c={unversionedId:"faq/faq_hc/faq-hc-validation-2",id:"faq/faq_hc/faq-hc-validation-2",title:"Q&A 21",description:"The INSPIRE Validator is returning multiple NullPointerExceptions for a WFS validation. Why?",source:"@site/docs/faq/faq_hc/faq-hc-validation-2.md",sourceDirName:"faq/faq_hc",slug:"/faq/faq_hc/faq-hc-validation-2",permalink:"/cs/docs/faq/faq_hc/faq-hc-validation-2",draft:!1,editUrl:"https://github.com/wetransform/hc-documentation/tree/master/docs/faq/faq_hc/faq-hc-validation-2.md",tags:[],version:"current",frontMatter:{title:"Q&A 21",categories:["help-page-category-faq","help-page-subcategory-faq"],layout:"help-detail",language:"en",displayed_sidebar:"tutorialSidebar"},sidebar:"tutorialSidebar",previous:{title:"Q&A 20",permalink:"/cs/docs/faq/faq_hc/faq-hc-validation-1"},next:{title:"Q&A 22",permalink:"/cs/docs/faq/faq_hc/faq-hc-validation-3"}},l={},s=[],p={toc:s};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",null,"The INSPIRE Validator is returning multiple ",(0,n.kt)("code",null,"NullPointerExceptions")," for a WFS validation. Why?"),(0,n.kt)("p",null,"This happens because indirectly imported schemas are not accepted.\nSee the ",(0,n.kt)("a",{target:"_blank",href:"https://github.com/opengeospatial/ets-wfs20/issues/207"},"discussion")," about this issue."))}u.isMDXComponent=!0}}]);