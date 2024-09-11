"use strict";(self.webpackChunkhc_documentation=self.webpackChunkhc_documentation||[]).push([[3416],{5680:(e,t,r)=>{r.d(t,{xA:()=>l,yg:()=>u});var a=r(6540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=p(r),y=n,u=m["".concat(c,".").concat(y)]||m[y]||h[y]||i;return r?a.createElement(u,s(s({ref:t},l),{},{components:r})):a.createElement(u,s({ref:t},l))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=y;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[m]="string"==typeof e?e:n,s[1]=o;for(var p=2;p<i;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},5084:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=r(8168),n=(r(6540),r(5680));const i={title:"Overview",categories:["help-page-category-reference","help-page-subcategory-reference-schemas"],layout:"help-detail",language:"en",sidebar_position:0},s=void 0,o={unversionedId:"references/schemas/2018-04-20-reference-schemas-overview",id:"references/schemas/2018-04-20-reference-schemas-overview",title:"Overview",description:"The Schemas Overview page displays general properties and settings of the schema:",source:"@site/docs/references/schemas/2018-04-20-reference-schemas-overview.md",sourceDirName:"references/schemas",slug:"/references/schemas/2018-04-20-reference-schemas-overview",permalink:"/docs/references/schemas/2018-04-20-reference-schemas-overview",draft:!1,editUrl:"https://github.com/wetransform/hc-documentation/tree/master/docs/references/schemas/2018-04-20-reference-schemas-overview.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Overview",categories:["help-page-category-reference","help-page-subcategory-reference-schemas"],layout:"help-detail",language:"en",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Delete",permalink:"/docs/references/themes/2018-03-20-reference-themes-delete"},next:{title:"Files",permalink:"/docs/references/schemas/2018-04-19-reference-schemas-files"}},c={},p=[],l={toc:p},m="wrapper";function h(e){let{components:t,...r}=e;return(0,n.yg)(m,(0,a.A)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"The Schemas Overview page displays general properties and settings of the schema:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("em",{parentName:"li"},"Author")," is an editable property which lists the creator of the schema. Click in the text field to edit the property."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("em",{parentName:"li"},"Schema")," type is an editable property which displays the current schema type. The type can be set freely. Click in the text field to edit the property."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("em",{parentName:"li"},"Version")," is an editable property which displays the version of the schema."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("em",{parentName:"li"},"Created and Last updated")," display the dates of schema creation and the last update to the schema.")),(0,n.yg)("p",null,"The toggle switches indicate current settings of the theme. Activate the ",(0,n.yg)("em",{parentName:"p"},"Public")," toggle switch to make the theme visible to the public. Activate the ",(0,n.yg)("em",{parentName:"p"},"Subscribed")," toggle switch to receive email notifications when there are new comments or tasks added."),(0,n.yg)("p",null,"Under Statistics, a series of bar graphs are displayed. The bar graph entitled ",(0,n.yg)("em",{parentName:"p"},"Types")," displays summary statistics that describe:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Total: The total number of types contained by the schema"),(0,n.yg)("li",{parentName:"ul"},"Local: The number of types directly defined in this schema"),(0,n.yg)("li",{parentName:"ul"},"Imported: The number of types from another schema that are imported into this schema, e.g. as property types"),(0,n.yg)("li",{parentName:"ul"},"Inherited: The number of types from another schema that types in this schema inherit from")),(0,n.yg)("p",null,"Max. Property Depth: The maximum nesting depth of a property definition in the schema."),(0,n.yg)("p",null,"The bar graph entitled ",(0,n.yg)("em",{parentName:"p"},"Properties")," displays summary statistics that describe:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Total: The total number of properties defined in this schema"),(0,n.yg)("li",{parentName:"ul"},"Imported: The total number of properties imported from another schema"),(0,n.yg)("li",{parentName:"ul"},"Inherited: The total number of properties inherited from another schema")),(0,n.yg)("p",null,"The bar graph entitled ",(0,n.yg)("em",{parentName:"p"},"Property types")," displays the number of complex and simple property types contained by the schema."))}h.isMDXComponent=!0}}]);