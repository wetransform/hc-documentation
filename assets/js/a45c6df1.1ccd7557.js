"use strict";(self.webpackChunkhc_documentation=self.webpackChunkhc_documentation||[]).push([[9681],{5680:(e,a,t)=>{t.d(a,{xA:()=>p,yg:()=>g});var r=t(6540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),d=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=d(e.components);return r.createElement(s.Provider,{value:a},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=n,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return t?r.createElement(g,i(i({ref:a},p),{},{components:t})):r.createElement(g,i({ref:a},p))}));function g(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},62:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=t(8168),n=(t(6540),t(5680));const o={title:"Create new data set",categories:["help-page-category-datasetworkflow","help-page-subcategory-datasetworkflowcreatedataset"],layout:"help-detail",language:"en"},i=void 0,l={unversionedId:"create-manage-datasets/create-dataset/2015-01-10-dataset-create",id:"create-manage-datasets/create-dataset/2015-01-10-dataset-create",title:"Create new data set",description:"Supported formats",source:"@site/docs/create-manage-datasets/create-dataset/2015-01-10-dataset-create.md",sourceDirName:"create-manage-datasets/create-dataset",slug:"/create-manage-datasets/create-dataset/2015-01-10-dataset-create",permalink:"/docs/create-manage-datasets/create-dataset/2015-01-10-dataset-create",draft:!1,editUrl:"https://github.com/wetransform/hc-documentation/tree/master/docs/create-manage-datasets/create-dataset/2015-01-10-dataset-create.md",tags:[],version:"current",frontMatter:{title:"Create new data set",categories:["help-page-category-datasetworkflow","help-page-subcategory-datasetworkflowcreatedataset"],layout:"help-detail",language:"en"},sidebar:"tutorialSidebar",previous:{title:"Create new data set with multiple resource types",permalink:"/docs/create-manage-datasets/create-dataset/2015-01-09-dataset-multiSource"},next:{title:"Create metadata",permalink:"/docs/create-manage-datasets/create-metadata/2015-01-10-metadata-create"}},s={},d=[{value:"Supported formats",id:"supported-formats",level:2},{value:"Create a dataset",id:"create-a-dataset",level:2}],p={toc:d},u="wrapper";function c(e){let{components:a,...o}=e;return(0,n.yg)(u,(0,r.A)({},p,o,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"supported-formats"},"Supported formats"),(0,n.yg)("p",null,"hale\xbbconnect currently supports a range of file formats which can be used to create data sets. The size limit for single file upload is 2 GB. The size limit for attachments on haleconnect.com is 750 MiB. A data set may contain:"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Vector data")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Supported vector data formats include ","*",".gml, ","*","gpkg and ","*",".shp"),(0,n.yg)("li",{parentName:"ul"},"Multiple ","*",".shp files can be uploaded to create a data set"),(0,n.yg)("li",{parentName:"ul"},"Publication of ","*",".shp files in which the first object does not have a geometry is currently not supported"),(0,n.yg)("li",{parentName:"ul"},"One or more  ","*",".gml files per data set is supported",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"INSPIRE, 3A, CityGML, XPlanung and ISYBAU are fully supported"))),(0,n.yg)("li",{parentName:"ul"},"*",".gml files containing the element gml:GenericMetaData, an empty gml:boundedBy element or arc geometries are currently not supported"),(0,n.yg)("li",{parentName:"ul"},"One or more  ","*",".gpkg files per data set is supported",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"*",".gpkg schemas can be exported from hale\xbbstudio as ","*",".json.hsd files for use in hale\xbbconnect"),(0,n.yg)("li",{parentName:"ul"},"*",".gpkg is supported as source and target in online transformation configurations"))),(0,n.yg)("li",{parentName:"ul"},"The publication of 3D data is supported.")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Non-spatial data")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Supported data formats include ","*",".xml")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Raster data")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Supported formats include ","*",".png, and ","*",".GeoTIFF"),(0,n.yg)("li",{parentName:"ul"},"Use an RGB image with transparency through an additional alpha channel or with NoData values"),(0,n.yg)("li",{parentName:"ul"},"Currently the upload of one raster data resource per data set is supported"),(0,n.yg)("li",{parentName:"ul"},"Publishing raster resources without vector resources is not supported. A dummy vector file needs to be added in this case"),(0,n.yg)("li",{parentName:"ul"},"A separate raster layer is published in the view and download services")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Attachments")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Supported file attachment formats include ","*",".pdf, ","*",".png, ","*",".GeoTIFF, or even textures for 3D data"),(0,n.yg)("li",{parentName:"ul"},"Attachments with dots in their file name are not supported"),(0,n.yg)("li",{parentName:"ul"},"There are multiple ways to upload and associate attachments to your data set"),(0,n.yg)("li",{parentName:"ul"},"Attachments uploaded during data set creation are added to the attachments section automatically"),(0,n.yg)("li",{parentName:"ul"},"The attachment files uploaded to hale\xbbconnect have a publicly available link to the attachment file. The links to attachment files can be included in your Predefined data set download service. The links to attachment files and external URLs can also be viewed in the Feature Explorer Tool."),(0,n.yg)("li",{parentName:"ul"},"Separate service layers are not created for attachment files"),(0,n.yg)("li",{parentName:"ul"},"Visit our help page for ",(0,n.yg)("a",{parentName:"li",href:"/docs/references/data/2018-03-10-reference-data-files"},"more information about working with attachments"))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"A combination of these data resources")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Data sets can include ","*",".gml, raster and attachment data resources. View and download services for vector and raster data are published as separate layers."),(0,n.yg)("li",{parentName:"ul"},"Currently the upload of ","*",".shp with combined data resources is not supported")),(0,n.yg)("h2",{id:"create-a-dataset"},"Create a dataset"),(0,n.yg)("p",null,"To create a new data set, follow this workflow as a logged in data manager or theme manager:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Go to ","\xab","Data","\xbb"," on the main toolbar")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Go to ","\xab","Create new Data Set","\xbb"," at the bottom of the data set list")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Select a theme to link to your data set."),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Superusers who belong to more than one organisation can select the organisation in which to create a dataset. The dropdown menu of available organisations enables Superusers to create datasets for organizations that they are not currently logged into."))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Select the data source. There are a few ways to upload the files belonging to your dataset:"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Click ","\xab","Select file(s)","\xbb"," and navigate to the desired dataset."),(0,n.yg)("li",{parentName:"ul"},"Click ","\xab","Enter URL(s)","\xbb"," and add the desired URL or WFS GetFeature request. Add the API key in the Authorization field if you would like to pass an API key in the authorization header of the HTTP request to download data via API."),(0,n.yg)("li",{parentName:"ul"},"Drag a dataset to ","\xab","Drop file(s) here","\xbb")),(0,n.yg)("p",{parentName:"li"},"The size limit for single file upload is 2 GB."),(0,n.yg)("br",null),"Tip: We recommend that you zip your files to reduce upload times and to ensure that no files are lost. To upload a Shapefile, you should zip all individual files (\\*.shp, \\*.dbf, \\*.prj, \\*.shx, \u2026) in an archive. To upload an XML file such as ALKIS, ISYBAU or GML, we also recommend that you upload them as a zip archive.",(0,n.yg)("br",null),"To upload your files from a database click \xabConnect to database\xbb and enter the following information: * Database type (MS SQL, PostgreSQL and PostGIS are currently supported) * Host (:Port) * Database (Provide the database name) * Username * Password",(0,n.yg)("br",null),(0,n.yg)("img",{src:t(5974).A,alt:"",title:"Uploading files from a database",className:"img-responsive img-inline-help"})),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Give your data set a name. This name should enable you to quickly und clearly identify the data set in the system. If the linked theme's metadata configuration is set up to use the name in publishing, the name is also used for data set metadata.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Provide metadata for your data set. Metadata entry is determined by the theme associated with your dataset."),(0,n.yg)("p",{parentName:"li"},"If the theme uses the metadata editor, enter required and optional metadata for your dataset or services:"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Metadata categories display a red badge with the number of missing required metadata elements. Click the chevron at the end of any  metadata category to expand it.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Required input fields are marked by red symbols. Optional input fields are marked by orange symbols.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Metadata categories display a green check mark once you have provided all required metadata.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Click \xabFill automatically\xbb if you accidentally remove or overwrite pre-populated values and you would like to retrieve the original values.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Click ","\xab","Continue","\xbb"," to save the metadata.",(0,n.yg)("img",{src:t(5421).A,alt:"",title:"The metadata editor",className:"img-responsive img-inline-help"})),(0,n.yg)("br",null),"If the theme uses Republish existing metadata:"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Upload your existing metadata file.",(0,n.yg)("img",{src:t(7038).A,alt:"",title:"The metadata editor",className:"img-responsive img-inline-help"})))),(0,n.yg)("p",{parentName:"li"},"If the theme uses Link to existing metadata:"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Provide a link to your metadata file.",(0,n.yg)("img",{src:t(7031).A,alt:"",title:"The metadata editor",className:"img-responsive img-inline-help"}),(0,n.yg)("br",null)))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"The \xabSet project variables\xbb step will appear if your theme has a transformation configuration and you have added project variables to your transformation project in hale\xbbstudio. hale\xbbconnect provides users the option to edit the transformation project variable in this optional step.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"In the final step, you can review the execution rules configured for the theme. The execution rules are a list of all possible steps in the publishing process. By default, you will see up to five toggle switches to publish Download and View Services, to transform the new data set, and to publish services for the transformed data set. If you know you need to work on the data set before it is to be published, deactivate the service publishing."))),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"If you close the browser or the tab, or you click a different link, you will be asked whether the work in progress data set should be saved or deleted. If you pick save, you can continue editing it later.")))}c.isMDXComponent=!0},5421:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/create-dataset-metadata-f54d45e757cd6ce673ed67a37a49b6e2.png"},7038:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/create-dataset-metadata_2-722308c5943f15accaadfebfe79ca781.png"},7031:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/create-dataset-metadata_3-fe845371fd600db2a8c421f9273916af.png"},5974:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/upload_from_database-4e633fd8982c2aabd85eb247d21631aa.png"}}]);