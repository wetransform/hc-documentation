"use strict";(self.webpackChunkhc_documentation=self.webpackChunkhc_documentation||[]).push([[5986],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),d=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=d(a),u=n,h=p["".concat(c,".").concat(u)]||p[u]||s[u]||o;return a?r.createElement(h,i(i({ref:t},m),{},{components:a})):r.createElement(h,i({ref:t},m))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2580:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const o={title:"Create metadata",categories:["help-page-category-datasetworkflow","help-page-subcategory-datasetworkflowcreatemetadata"],layout:"help-detail",language:"en"},i=void 0,l={unversionedId:"create-manage-datasets/create-metadata/2015-01-10-metadata-create",id:"create-manage-datasets/create-metadata/2015-01-10-metadata-create",title:"Create metadata",description:"hale\xbbconnect currently supports the creation of dataset metadata, without requiring the upload of associated data. The metadata only workflow is not available for service metadata.",source:"@site/docs/create-manage-datasets/create-metadata/2015-01-10-metadata-create.md",sourceDirName:"create-manage-datasets/create-metadata",slug:"/create-manage-datasets/create-metadata/2015-01-10-metadata-create",permalink:"/de/docs/create-manage-datasets/create-metadata/2015-01-10-metadata-create",draft:!1,editUrl:"https://github.com/wetransform/hc-documentation/tree/master/docs/create-manage-datasets/create-metadata/2015-01-10-metadata-create.md",tags:[],version:"current",frontMatter:{title:"Create metadata",categories:["help-page-category-datasetworkflow","help-page-subcategory-datasetworkflowcreatemetadata"],layout:"help-detail",language:"en"},sidebar:"tutorialSidebar",previous:{title:"Datensatz anlegen",permalink:"/de/docs/create-manage-datasets/create-dataset/2015-01-10-dataset-create"},next:{title:"Metadaten zu Datensatz bearbeiten",permalink:"/de/docs/create-manage-datasets/edit-metadata/2015-01-05-dataset-enter-metadata"}},c={},d=[{value:"Create metadata only theme",id:"create-metadata-only-theme",level:2},{value:"Create metadata",id:"create-metadata",level:2}],m={toc:d};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"hale\xbbconnect currently supports the creation of dataset metadata, without requiring the upload of associated data. The metadata only workflow is not available for service metadata."),(0,n.kt)("h2",{id:"create-metadata-only-theme"},"Create metadata only theme"),(0,n.kt)("p",null,"To create a metadata only theme, follow this workflow as a logged in data manager or theme manager:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ","\xab","Themes","\xbb"," on the main toolbar"),(0,n.kt)("li",{parentName:"ol"},"Go to ","\xab","Create new theme","\xbb"," at the bottom of the theme list"),(0,n.kt)("li",{parentName:"ol"},'Select "Don\'t inherit" to create a theme that is not based on an existing theme.',(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This will create a blank theme with no associated feature types."))),(0,n.kt)("li",{parentName:"ol"},"Enter a name for your theme. Add a description and version number if desired."),(0,n.kt)("li",{parentName:"ol"},"In the next step, Add feature types, accept the default and click ","\xab","Continue","\xbb","."),(0,n.kt)("li",{parentName:"ol"},"In the final step, click ","\xab","Create","\xbb",".")),(0,n.kt)("p",null,"The newly created theme is displayed. The toggle ",(0,n.kt)("em",{parentName:"p"},"Publish metadata only")," on the theme overview page must be activated. Navigate to the Metadata section of the theme to configure metadata. For more information about configuring metadata, visit the ",(0,n.kt)("a",{parentName:"p",href:"../../setup-hc/edit-metadata-config/2015-02-10-theme-edit-metadata"},"Edit metadata configuration")," page."),(0,n.kt)("h2",{id:"create-metadata"},"Create metadata"),(0,n.kt)("p",null,"To create dataset metadata, follow this workflow as a logged in data manager or theme manager:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ","\xab","Data","\xbb"," on the main toolbar"),(0,n.kt)("li",{parentName:"ol"},"Go to ","\xab","Create new Data Set","\xbb"," at the bottom of the data set list"),(0,n.kt)("li",{parentName:"ol"},"Select a metadata only theme to link to your data set."),(0,n.kt)("li",{parentName:"ol"},"Give your metadata file a name. This name should enable you to quickly und clearly identify the metadata in the system."),(0,n.kt)("li",{parentName:"ol"},"In the next step, enter any remaining metadata values required for publication. If your theme is configured to use existing metadata, add it in this step."),(0,n.kt)("li",{parentName:"ol"},"In the final step, create and publish your metadata.")))}s.isMDXComponent=!0}}]);