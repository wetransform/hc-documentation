"use strict";(self.webpackChunkhc_documentation=self.webpackChunkhc_documentation||[]).push([[4167],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=n,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(h,i(i({ref:t},p),{},{components:r})):a.createElement(h,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9373:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const o={title:"Overview",categories:["help-page-category-reference","help-page-subcategory-reference-themes"],layout:"help-detail",language:"en",sidebar_position:0},i=void 0,s={unversionedId:"references/themes/2018-04-10-reference-themes-overview",id:"references/themes/2018-04-10-reference-themes-overview",title:"Overview",description:"The Themes Overview page displays general properties and settings of the theme. The first item enables users to provide a description of the theme.",source:"@site/docs/references/themes/2018-04-10-reference-themes-overview.md",sourceDirName:"references/themes",slug:"/references/themes/2018-04-10-reference-themes-overview",permalink:"/docs/references/themes/2018-04-10-reference-themes-overview",draft:!1,editUrl:"https://github.com/wetransform/hc-documentation/tree/master/docs/references/themes/2018-04-10-reference-themes-overview.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Overview",categories:["help-page-category-reference","help-page-subcategory-reference-themes"],layout:"help-detail",language:"en",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Delete",permalink:"/docs/references/data/2018-02-01-reference-data-delete"},next:{title:"Feature types",permalink:"/docs/references/themes/2018-04-09-reference-themes-feature-types"}},c={},l=[{value:"Configure metadata only themes",id:"configure-metadata-only-themes",level:2},{value:"Custom data upload instructions",id:"custom-data-upload-instructions",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Themes Overview page displays general properties and settings of the theme. The first item enables users to provide a description of the theme."),(0,n.kt)("p",null,"Theme type is an editable property which displays the current theme type. Click on the dropdown menu to change the associated theme type. The system can be configured to have different default behavior for different theme types."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Author(s)")," lists the user who created the theme."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Organisation")," displays the organisation of the user who created the theme."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Version")," is an editable property which displays the version of the theme.")),(0,n.kt)("p",null,"The toggle switches indicate current settings of the theme. Activate the ",(0,n.kt)("em",{parentName:"p"},"Public")," toggle switch to make the theme visible to the public. Activate the ",(0,n.kt)("em",{parentName:"p"},"Subscribed")," toggle switch to receive email notifications when there are new comments or tasks added."),(0,n.kt)("h2",{id:"configure-metadata-only-themes"},"Configure metadata only themes"),(0,n.kt)("p",null,"Metadata only themes are configured on the theme overview page. Toggle ",(0,n.kt)("em",{parentName:"p"},"Publish metadata only")," to create a theme that can be used to publish dataset metadata without associated data. Metadata only themes for service metadata are not supported. For more information about metadata only workflows, visit ",(0,n.kt)("a",{parentName:"p",href:"/docs/create-manage-datasets/create-metadata/2015-01-10-metadata-create"},"Create metadata")),(0,n.kt)("h2",{id:"custom-data-upload-instructions"},"Custom data upload instructions"),(0,n.kt)("p",null,"hale\xbbconnect themes can be configured to include custom data upload instructions. Users with permission to edit a theme can enter their own, custom data upload instructions. Data upload instructions for single dataset creation will appear in a message dialog in the data upload workflow step of dataset creation. Series enabled themes provide an additional set of instructions for batch upload. Data upload instructions for batch upload will appear in a message dialog in the data upload workflow step of dataset series creation using batch upload."))}u.isMDXComponent=!0}}]);