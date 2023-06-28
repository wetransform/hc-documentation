"use strict";(self.webpackChunkhc_documentation=self.webpackChunkhc_documentation||[]).push([[3338],{3905:(e,t,a)=>{a.d(t,{Zo:()=>f,kt:()=>p});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},f=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),u=s(a),p=n,d=u["".concat(l,".").concat(p)]||u[p]||h[p]||o;return a?r.createElement(d,c(c({ref:t},f),{},{components:a})):r.createElement(d,c({ref:t},f))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=a[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8987:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const o={title:"Q&A 9",categories:["help-page-category-faq","help-page-subcategory-faq"],layout:"help-detail",language:"en",displayed_sidebar:"tutorialSidebar"},c=void 0,i={unversionedId:"faq/faq_hc/faq-hc-general-4",id:"faq/faq_hc/faq-hc-general-4",title:"Q&A 9",description:"The schema location has changed. What do I need to do, so my dataset will validate?",source:"@site/docs/faq/faq_hc/faq-hc-general-4.md",sourceDirName:"faq/faq_hc",slug:"/faq/faq_hc/faq-hc-general-4",permalink:"/docs/faq/faq_hc/faq-hc-general-4",draft:!1,editUrl:"https://github.com/wetransform/hc-documentation/tree/master/docs/faq/faq_hc/faq-hc-general-4.md",tags:[],version:"current",frontMatter:{title:"Q&A 9",categories:["help-page-category-faq","help-page-subcategory-faq"],layout:"help-detail",language:"en",displayed_sidebar:"tutorialSidebar"},sidebar:"tutorialSidebar",previous:{title:"Q&A 8",permalink:"/docs/faq/faq_hc/faq-hc-general-3"},next:{title:"Q&A 10",permalink:"/docs/faq/faq_hc/faq-hc-inspire-1"}},l={},s=[],f={toc:s};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",null,"The ",(0,n.kt)("i",null,"schema")," location has changed. What do I need to do, so my dataset will validate?"),(0,n.kt)("p",null,"When validating datasets in hale\xbbconnect, the Schema locations of the feature types, which are referenced from the respective schema, are used. The basis for this validation is the schema information that the theme relates to and not the schema of the GML dataset. "),(0,n.kt)("p",null,"If the schema location changes, an error in the dataset validation occurs. This error can be fixed using the following workflow. "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Create schema with new schema location."),(0,n.kt)("li",{parentName:"ul"},"Exchange the feature types of the theme."),(0,n.kt)("li",{parentName:"ul"},"Now the validation should work as expected. "),(0,n.kt)("li",{parentName:"ul"},"Republishing the services is only required, if the data has changed.")))}h.isMDXComponent=!0}}]);