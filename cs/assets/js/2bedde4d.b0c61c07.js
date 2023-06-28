"use strict";(self.webpackChunkhc_documentation=self.webpackChunkhc_documentation||[]).push([[7517],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},f=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,h=u["".concat(l,".").concat(d)]||u[d]||p[d]||o;return n?r.createElement(h,c(c({ref:t},f),{},{components:n})):r.createElement(h,c({ref:t},f))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3936:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={title:"Q&A 10",categories:["help-page-category-faq","help-page-subcategory-faq"],layout:"help-detail",language:"en",displayed_sidebar:"tutorialSidebar"},c=void 0,i={unversionedId:"faq/faq_hc/faq-hc-inspire-1",id:"faq/faq_hc/faq-hc-inspire-1",title:"Q&A 10",description:"According to the INSPIRE Technical Guidelines for Metadata version 2.0 a gmx:Anchor element has to be applied for LegalConstraints. Is this implemented in hale\xbbconnect?",source:"@site/docs/faq/faq_hc/faq-hc-inspire-1.md",sourceDirName:"faq/faq_hc",slug:"/faq/faq_hc/faq-hc-inspire-1",permalink:"/cs/docs/faq/faq_hc/faq-hc-inspire-1",draft:!1,editUrl:"https://github.com/wetransform/hc-documentation/tree/master/docs/faq/faq_hc/faq-hc-inspire-1.md",tags:[],version:"current",frontMatter:{title:"Q&A 10",categories:["help-page-category-faq","help-page-subcategory-faq"],layout:"help-detail",language:"en",displayed_sidebar:"tutorialSidebar"},sidebar:"tutorialSidebar",previous:{title:"Q&A 9",permalink:"/cs/docs/faq/faq_hc/faq-hc-general-4"},next:{title:"Q&A 11",permalink:"/cs/docs/faq/faq_hc/faq-hc-metadata-1"}},l={},s=[],f={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",null,"According to the INSPIRE Technical Guidelines for Metadata version 2.0 a ",(0,a.kt)("code",null,"gmx:Anchor")," element has to be applied for ",(0,a.kt)("code",null,"LegalConstraints"),". Is this implemented in hale\xbbconnect?"),(0,a.kt)("p",null,"The ",(0,a.kt)("code",null,"gmx:Anchor")," elements can be configured for the legal constraints elements ",(0,a.kt)("code",null,"accessConstraints")," as well as ",(0,a.kt)("code",null,"useConstraints")," on hale\xbbconnect. It cannot be configured for the element ",(0,a.kt)("code",null,"useLimitations")," that was mandatory in INSPIRE metadata 1.3 (deprecated), but it is not mandatory in INSPIRE metadata version 2.0 (current) any longer. It is now optional and users can include it if they want."),(0,a.kt)("p",null,"If a user has filled in all required elements on hale\xbbconnect then the metadata is INSPIRE comformant and should pass the INSPIRE validator."))}p.isMDXComponent=!0}}]);