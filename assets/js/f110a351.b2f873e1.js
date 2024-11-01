"use strict";(self.webpackChunkhc_documentation=self.webpackChunkhc_documentation||[]).push([[5661],{5680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>h});var a=r(6540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,h=u["".concat(l,".").concat(d)]||u[d]||g[d]||o;return r?a.createElement(h,i(i({ref:t},p),{},{components:r})):a.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1853:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(8168),n=(r(6540),r(5680));const o={title:"Access the harvesting endpoint",categories:["help-page-category-users","help-page-subcategory-users-metadata"],layout:"help-detail",language:"en"},i=void 0,s={unversionedId:"users-roles-orgs/harvesting-metadata/2015-03-06-harvest-metadata",id:"users-roles-orgs/harvesting-metadata/2015-03-06-harvest-metadata",title:"Access the harvesting endpoint",description:"We provide a harvesting endpoint for catalogue services that want to harvest metadata from the haleconnect platform. The harvesting URL can be built using the following pattern:",source:"@site/docs/users-roles-orgs/harvesting-metadata/2015-03-06-harvest-metadata.md",sourceDirName:"users-roles-orgs/harvesting-metadata",slug:"/users-roles-orgs/harvesting-metadata/2015-03-06-harvest-metadata",permalink:"/docs/users-roles-orgs/harvesting-metadata/2015-03-06-harvest-metadata",draft:!1,editUrl:"https://github.com/wetransform/hc-documentation/tree/master/docs/users-roles-orgs/harvesting-metadata/2015-03-06-harvest-metadata.md",tags:[],version:"current",frontMatter:{title:"Access the harvesting endpoint",categories:["help-page-category-users","help-page-subcategory-users-metadata"],layout:"help-detail",language:"en"},sidebar:"tutorialSidebar",previous:{title:"Edit and delete organisation profile",permalink:"/docs/users-roles-orgs/manage-orgs/2015-03-01-users-edit-organisation"},next:{title:"Catalogue Service for the Web 2.0.2 (CSW service)",permalink:"/docs/users-roles-orgs/harvesting-metadata/2015-03-07-csw"}},l={},c=[],p={toc:c},u="wrapper";function g(e){let{components:t,...r}=e;return(0,n.yg)(u,(0,a.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"We provide a harvesting endpoint for catalogue services that want to harvest metadata from the haleconnect platform. The harvesting URL can be built using the following pattern:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"https://haleconnect.com/services/bsp/metadata/org/<your org num>\n")),(0,n.yg)("p",null,"Catalogue services retrieve a zip file containing all of the metadata for an organization from the harvesting URL."),(0,n.yg)("p",null,"As a system administrator, you can access a preview page which displays the metadata that is accessible from the harvesting endpoint. The harvesting preview page URL can be built using the following pattern:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"https://haleconnect.com/services/bsp/metadata/org/<your org num>?preview=true\n")),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"To find your organisation number, navigate to your organisation's account page in settings (gear symbol). Your organisation number is displayed in the browser URL. For example: ",(0,n.yg)("a",{parentName:"p",href:"https://haleconnect.com/#/organisation/1"},"https://haleconnect.com/#/organisation/1")," indicates that your organisation number is 1.")),(0,n.yg)("p",null,"The Harvest-Preview page displays the harvesting URL, the preview page URL and the number of resources at the endpoint. There are also options to control the inclusion of remote metadata resources and keyword filters through the use of toggles. The includeremote toggle allows you to include remote metadata in the endpoint. The keywords toggle allows you to filter the list of metadata resources for datasets with the keyword 'inspireidentifiziert'. You can add additional keywords by adding one or more keywords in a comma separated list to the preview page URL after the keywords parameter."),(0,n.yg)("p",null,"For example, to filter on the keyword 'infoFeatureAccessService', construct the following URL:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"https://haleconnect.com/services/bsp/metadata/org/1?preview=true&keywords=infoFeatureAccessService\n")),(0,n.yg)("p",null,"The Harvest-Preview page lists the metadata resources in tabular format at the bottom of the page. Metadata resources are listed in rows with the following columns:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Type: The type of service"),(0,n.yg)("li",{parentName:"ul"},"Title: The title of the service"),(0,n.yg)("li",{parentName:"ul"},"Simple Keywords: The keywords extracted from the keywords field in the metadata file"),(0,n.yg)("li",{parentName:"ul"},"Fileidentifier: The file identifier number"),(0,n.yg)("li",{parentName:"ul"},"Filename: The name of the metadata file"),(0,n.yg)("li",{parentName:"ul"},"Link: A hyperlink to the metadata file")))}g.isMDXComponent=!0}}]);