"use strict";(self.webpackChunkhc_documentation=self.webpackChunkhc_documentation||[]).push([[861],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=l(a),d=r,h=f["".concat(s,".").concat(d)]||f[d]||p[d]||o;return a?n.createElement(h,c(c({ref:t},u),{},{components:a})):n.createElement(h,c({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=a[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},5765:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const o={title:"Questions and answers on hale\xbbconnect",categories:["help-page-category-faq","help-page-subcategory-faq"],layout:"help-detail",language:"en"},c=void 0,i={unversionedId:"faq/faq_hc/faq-hc-validation-3",id:"faq/faq_hc/faq-hc-validation-3",title:"Questions and answers on hale\xbbconnect",description:"The INSPIRE Validator is returning a",source:"@site/docs/faq/faq_hc/faq-hc-validation-3.md",sourceDirName:"faq/faq_hc",slug:"/faq/faq_hc/faq-hc-validation-3",permalink:"/docs/faq/faq_hc/faq-hc-validation-3",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/faq/faq_hc/faq-hc-validation-3.md",tags:[],version:"current",frontMatter:{title:"Questions and answers on hale\xbbconnect",categories:["help-page-category-faq","help-page-subcategory-faq"],layout:"help-detail",language:"en"}},s={},l=[],u={toc:l};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",null,"The INSPIRE Validator is returning a",(0,r.kt)("code",null,"Severity: ERROR Message: TargetNamespace.1: Expecting namespace '[...]', but the target namespace of the schema document is '[...]'\" error for a WFS validation"),". Why?"),(0,r.kt)("p",null,"This happens because the INSPIRE Validator does not accept features from multiple schemas on top level.\nSee the ",(0,r.kt)("a",{href:"https://github.com/opengeospatial/ets-wfs20/issues/217"},"discussion")," about this issue."))}p.isMDXComponent=!0}}]);