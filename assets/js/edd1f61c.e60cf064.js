"use strict";(self.webpackChunkhc_documentation=self.webpackChunkhc_documentation||[]).push([[8461],{5680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>g});var r=a(6540);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,s=function(e,t){if(null==e)return{};var a,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(a),d=s,g=p["".concat(l,".").concat(d)]||p[d]||h[d]||i;return a?r.createElement(g,n(n({ref:t},u),{},{components:a})):r.createElement(g,n({ref:t},u))}));function g(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=a.length,n=new Array(i);n[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:s,n[1]=o;for(var c=2;c<i;c++)n[c]=a[c];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},102:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=a(8168),s=(a(6540),a(5680));const i={title:"Publish Services for a data set",categories:["help-page-category-datasetworkflow","help-page-subcategory-datasetworkflowpublishservices"],layout:"help-detail",language:"en"},n=void 0,o={unversionedId:"create-manage-datasets/publish-services/2015-01-01-dataset-publish-services",id:"create-manage-datasets/publish-services/2015-01-01-dataset-publish-services",title:"Publish Services for a data set",description:"You can publish view and download services if the theme linked to your data set has a valid service configuration. Publishing services is done either by triggering the automated publishing process at the end of the data set creation, or through a manual command later on. When you publish services, the system always creates all configured services types at once; in other words, if your theme configuration includes a view- and a download service, it is not possible to publish just a download service. The reason for this is that the metadata of each has references to the other.",source:"@site/docs/create-manage-datasets/publish-services/2015-01-01-dataset-publish-services.md",sourceDirName:"create-manage-datasets/publish-services",slug:"/create-manage-datasets/publish-services/2015-01-01-dataset-publish-services",permalink:"/docs/create-manage-datasets/publish-services/2015-01-01-dataset-publish-services",draft:!1,editUrl:"https://github.com/wetransform/hc-documentation/tree/master/docs/create-manage-datasets/publish-services/2015-01-01-dataset-publish-services.md",tags:[],version:"current",frontMatter:{title:"Publish Services for a data set",categories:["help-page-category-datasetworkflow","help-page-subcategory-datasetworkflowpublishservices"],layout:"help-detail",language:"en"},sidebar:"tutorialSidebar",previous:{title:"Create new dataset series",permalink:"/docs/create-manage-datasets/create-dataset-series/2014-01-01-dataset-series"},next:{title:"Using the Feature Explorer Tool",permalink:"/docs/create-manage-datasets/feature-explorer/2015-01-02-dataset-feature-explorer"}},l={},c=[],u={toc:c},p="wrapper";function h(e){let{components:t,...i}=e;return(0,s.yg)(p,(0,r.A)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,s.yg)("p",null,"You can publish view and download services if the theme linked to your data set has a valid service configuration. Publishing services is done either by triggering the automated publishing process at the end of the data set creation, or through a manual command later on. When you publish services, the system always creates all configured services types at once; in other words, if your theme configuration includes a view- and a download service, it is not possible to publish just a download service. The reason for this is that the metadata of each has references to the other."),(0,s.yg)("p",null,"When you're logged in as a Data Manager or Theme manager, follow these steps to publish services manually:"),(0,s.yg)("ol",null,(0,s.yg)("li",{parentName:"ol"},"Go to ","\xab","Data","\xbb"," on the main toolbar"),(0,s.yg)("li",{parentName:"ol"},"Pick the data set from the resource list for which you'd like to publish services"),(0,s.yg)("li",{parentName:"ol"},"Go to ","\xab","View Services","\xbb"," or ","\xab","Download Services","\xbb"),(0,s.yg)("li",{parentName:"ol"},"Activate the toggle switch"),(0,s.yg)("li",{parentName:"ol"},"Click ","\xab","Publish services","\xbb"," to create and start the service, and also run any configured test suites",(0,s.yg)("ul",{parentName:"li"},(0,s.yg)("li",{parentName:"ul"},"This process runs in the background and can take a while. A progress bar displaying the status of service creation, service testing and service publishing appears. You will also receive an email with information on the success, or failure, of service publishing once the publication process has completed. The platform considers publications that take longer than one hour as having failed and will send you an email even if the publication is still running.",(0,s.yg)("img",{src:a(1151).A,alt:"",title:"Publishing view services",className:"img-responsive img-inline-help"})))),(0,s.yg)("li",{parentName:"ol"},"As each process completes, additional information will become available:",(0,s.yg)("ul",{parentName:"li"},(0,s.yg)("li",{parentName:"ul"},"Links to service and data set metadata"),(0,s.yg)("li",{parentName:"ul"},"For view services, you'll also get a preview link"),(0,s.yg)("li",{parentName:"ul"},"Test reports"),(0,s.yg)("li",{parentName:"ul"},"Service settings"),(0,s.yg)("li",{parentName:"ul"},"Service log ",(0,s.yg)("img",{src:a(3798).A,alt:"",title:"Publishing view services",className:"img-responsive img-inline-help"})))),(0,s.yg)("li",{parentName:"ol"},"To unpublish a service, deactivate the toggle switch and click ","\xab","Delete services","\xbb",".")),(0,s.yg)("p",null,"Services can be protected through the access control settings. Read more ",(0,s.yg)("a",{parentName:"p",href:"/docs/references/data/2018-03-09-reference-data-accesscontrol"},"here"),"."))}h.isMDXComponent=!0},1151:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/publish_services-c663076ca6c53400cf44060aff8aa257.png"},3798:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/publish_services_testing-08ae77a4482ccc9528e527e3c88000c3.png"}}]);