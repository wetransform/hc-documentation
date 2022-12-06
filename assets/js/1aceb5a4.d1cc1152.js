"use strict";(self.webpackChunkhc_documentation=self.webpackChunkhc_documentation||[]).push([[3338],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>p});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},h=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),u=s(a),p=r,d=u["".concat(i,".").concat(p)]||u[p]||f[p]||o;return a?n.createElement(d,c(c({ref:t},h),{},{components:a})):n.createElement(d,c({ref:t},h))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var s=2;s<o;s++)c[s]=a[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8987:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={title:"Questions and answers on hale\xbbconnect",categories:["help-page-category-faq","help-page-subcategory-faq"],layout:"help-detail",language:"en"},c=void 0,l={unversionedId:"faq/faq_hc/faq-hc-general-4",id:"faq/faq_hc/faq-hc-general-4",title:"Questions and answers on hale\xbbconnect",description:"The schema location has changed. What do I need to do, so my dataset will validate?",source:"@site/docs/faq/faq_hc/faq-hc-general-4.md",sourceDirName:"faq/faq_hc",slug:"/faq/faq_hc/faq-hc-general-4",permalink:"/docs/faq/faq_hc/faq-hc-general-4",draft:!1,editUrl:"https://github.com/wetransform/hc-documentation/tree/master/docs/faq/faq_hc/faq-hc-general-4.md",tags:[],version:"current",frontMatter:{title:"Questions and answers on hale\xbbconnect",categories:["help-page-category-faq","help-page-subcategory-faq"],layout:"help-detail",language:"en"}},i={},s=[],h={toc:s};function f(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",null,"The ",(0,r.kt)("i",null,"schema")," location has changed. What do I need to do, so my dataset will validate?"),(0,r.kt)("p",null,"When validating datasets in hale\xbbconnect, the Schema locations of the feature types, which are referenced from the respective schema, are used. The basis for this validation is the schema information that the theme relates to and not the schema of the GML dataset. "),(0,r.kt)("p",null,"If the schema location changes, an error in the dataset validation occurs. This error can be fixed using the following workflow. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create schema with new schema location."),(0,r.kt)("li",{parentName:"ul"},"Exchange the feature types of the theme."),(0,r.kt)("li",{parentName:"ul"},"Now the validation should work as expected. "),(0,r.kt)("li",{parentName:"ul"},"Republishing the services is only required, if the data has changed.")))}f.isMDXComponent=!0}}]);