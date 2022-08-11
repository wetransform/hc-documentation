"use strict";(self.webpackChunkhc_documentation=self.webpackChunkhc_documentation||[]).push([[403],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>p});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(a),p=r,h=d["".concat(i,".").concat(p)]||d[p]||f[p]||o;return a?n.createElement(h,c(c({ref:t},s),{},{components:a})):n.createElement(h,c({ref:t},s))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var u=2;u<o;u++)c[u]=a[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7114:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const o={title:"Questions and answers on hale\xbbconnect",categories:["help-page-category-faq","help-page-subcategory-faq"],layout:"help-detail",language:"en"},c=void 0,l={unversionedId:"faq/faq_hc/faq-hc-metadata-1",id:"faq/faq_hc/faq-hc-metadata-1",title:"Questions and answers on hale\xbbconnect",description:"How can I change the automation rules for metadata creation of my Theme?",source:"@site/docs/faq/faq_hc/faq-hc-metadata-1.md",sourceDirName:"faq/faq_hc",slug:"/faq/faq_hc/faq-hc-metadata-1",permalink:"/docs/faq/faq_hc/faq-hc-metadata-1",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/faq/faq_hc/faq-hc-metadata-1.md",tags:[],version:"current",frontMatter:{title:"Questions and answers on hale\xbbconnect",categories:["help-page-category-faq","help-page-subcategory-faq"],layout:"help-detail",language:"en"}},i={},u=[],s={toc:u};function f(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",null,"How can I change the automation rules for metadata creation of my ",(0,r.kt)("i",null,"Theme"),"?"),(0,r.kt)("p",null,"The metadata configuration defines which metadata data managers need to provide for all data sets associated with a theme. The metadata configuration contains autofill rules and default values, which you can use to automate metadata entry almost entirely. An automated workflow performs service publishing and data transformation as a background process that does not require any user interaction. The automated workflow responds to events including data and configuration updates and transformations. More information on automation can be found ",(0,r.kt)("a",{href:"https://www.wetransform.to/help/en/help-page-category-reference/help-page-subcategory-reference-themes/2018/04/04/reference-themes-automation/"},"this section")," of our documentation."),(0,r.kt)("p",null,'Metadata can still be updated after the creation of the dataset. For all themes that have the autofill rule set to "immediately", the automated metadata entry will be triggered for the respective datasets as soon as changes are made to the metadata editor. '),(0,r.kt)("p",null,"However, different rules apply: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If an autofill rule is changed, all values are changed accordingly. "),(0,r.kt)("li",{parentName:"ul"},"If a default rule is changed, existing values are not changed, whether they are based on an auto-dated default rule or inserted manually. "),(0,r.kt)("li",{parentName:"ul"},"A new configured default value is entered, if the metadata field was previously empty. ")),(0,r.kt)("p",null,"Detailed information on how to apply the automation rules for metadata creation in a theme can be found in ",(0,r.kt)("a",{href:"https://www.wetransform.to/help/en/help-page-category-setup-haleconnect/help-page-subcategory-setup-haleconnect-thememetadata/2015/02/10/theme-edit-metadata/"},"this section")," of our documentation."))}f.isMDXComponent=!0}}]);