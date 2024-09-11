"use strict";(self.webpackChunkhc_documentation=self.webpackChunkhc_documentation||[]).push([[8534],{5680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>h});var n=a(6540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(a),p=i,h=c["".concat(s,".").concat(p)]||c[p]||m[p]||o;return a?n.createElement(h,r(r({ref:t},u),{},{components:a})):n.createElement(h,r({ref:t},u))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},1597:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(8168),i=(a(6540),a(5680));const o={title:"Configuring metadata on hale\xbbconnect",categories:["help-page-category-tutorials","help-page-subcategory-tutorials"],layout:"help-detail",language:"en"},r=void 0,l={unversionedId:"tutorials/2018-04-30-metadata-tutorial",id:"tutorials/2018-04-30-metadata-tutorial",title:"Configuring metadata on hale\xbbconnect",description:"Metadata creation is often a time-consuming, tedious and error-prone task. The hale\xbbconnect platform can be configured to automatically generate ISO, INSPIRE and GDI-DE compliant metadata for datasets and view and download network services. hale\xbbconnect gathers information from datasets, environment variables such as user profile data, and user-defined custom metadata fields, to auto-generate metadata compliant with numerous metadata standards. The default metadata that hale\xbbconnect generates can be configured by Theme managers and Superusers in the metadata section of a theme. Metadata configuration only needs to be configured once. The theme containing the metadata configuration can be re-used multiple times by any user, for any dataset in an organisation.",source:"@site/docs/tutorials/2018-04-30-metadata-tutorial.md",sourceDirName:"tutorials",slug:"/tutorials/2018-04-30-metadata-tutorial",permalink:"/docs/tutorials/2018-04-30-metadata-tutorial",draft:!1,editUrl:"https://github.com/wetransform/hc-documentation/tree/master/docs/tutorials/2018-04-30-metadata-tutorial.md",tags:[],version:"current",frontMatter:{title:"Configuring metadata on hale\xbbconnect",categories:["help-page-category-tutorials","help-page-subcategory-tutorials"],layout:"help-detail",language:"en"},sidebar:"tutorialSidebar",previous:{title:"Configuring an online transformation on hale\xbbconnect",permalink:"/docs/tutorials/2018-04-29-transformation-tutorial"},next:{title:"Using hale\xbbconnect resources in QGIS",permalink:"/docs/tutorials/2018-05-01-qgis-tutorial"}},s={},d=[{value:"<strong>Tutorial data</strong>",id:"tutorial-data",level:3},{value:"<strong>Configuring metadata using the Metadata Editor</strong>",id:"configuring-metadata-using-the-metadata-editor",level:3}],u={toc:d},c="wrapper";function m(e){let{components:t,...o}=e;return(0,i.yg)(c,(0,n.A)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Metadata creation is often a time-consuming, tedious and error-prone task. The hale\xbbconnect platform can be configured to automatically generate ISO, INSPIRE and GDI-DE compliant metadata for datasets and view and download network services. hale\xbbconnect gathers information from datasets, environment variables such as user profile data, and user-defined custom metadata fields, to auto-generate metadata compliant with numerous metadata standards. The default metadata that hale\xbbconnect generates can be configured by Theme managers and Superusers in the metadata section of a theme. Metadata configuration only needs to be configured once. The theme containing the metadata configuration can be re-used multiple times by any user, for any dataset in an organisation."),(0,i.yg)("p",null,"This tutorial reviews the steps required to configure metadata using hale\xbbconnect's metadata editor tool. The validation tests hale\xbbconnect executes to ensure ISO, INSPIRE and GDI-DE metadata compliancy are also discussed. Before we begin, let's review a list of the hale\xbbconnect resources we need:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Theme manager or Superuser hale\xbbconnect profile"),(0,i.yg)("li",{parentName:"ul"},"dataset"),(0,i.yg)("li",{parentName:"ul"},"schema(s) for your dataset"),(0,i.yg)("li",{parentName:"ul"},"theme")),(0,i.yg)("p",null,(0,i.yg)("em",{parentName:"p"},"IMPORTANT: Default metadata is automatically generated by hale\xbbconnect for datasets, and network services. The configuration of metadata is optional.")),(0,i.yg)("h3",{id:"tutorial-data"},(0,i.yg)("strong",{parentName:"h3"},"Tutorial data")),(0,i.yg)("p",null,"For this tutorial, we will use:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"One shapefile ",(0,i.yg)("em",{parentName:"li"},"Contains OS data \xa9 Crown copyright and database right 2018"),". You can download the shapefile ",(0,i.yg)("a",{parentName:"li",href:"https://wetransform.box.com/s/2mnyp9xtjbbk3b5tbc1thg0jmxthgd0e"},"here"),".")),(0,i.yg)("h3",{id:"configuring-metadata-using-the-metadata-editor"},(0,i.yg)("strong",{parentName:"h3"},"Configuring metadata using the Metadata Editor")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 1: Add custom metadata fields")),(0,i.yg)("p",null,"hale\xbbconnect provides users with the option to add custom metadata fields to the Organisation section found under Settings, and to a user's profile. Custom metadata fields hold values that can be used to prefill metadata elements. In order to auto-populate metadata, hale\xbbconnect gathers information across the platform, including all of the user-supplied values in the user profile and Organisation sections. In some cases, hale\xbbconnect automatically applies these collected values to metadata fields."),(0,i.yg)("p",null,"When you create a custom metadata field, hale\xbbconnect adds the key, value pair(s) provided to the autofill assistant in the metadata editor. We will take a look at the autofill assistant later. First, let's add a custom metadata field."),(0,i.yg)("p",null,"To create a new custom metadata field in your organisation profile, follow this workflow logged in as a Theme Manager or Superuser:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Click the Settings icon (gear symbol) at the top right of the screen"),(0,i.yg)("li",{parentName:"ul"},"Click the Organisations section and select your organisation from the list",(0,i.yg)("img",{src:a(3893).A,alt:"",title:"Organisation profile page",className:"img-responsive img-inline-help"})),(0,i.yg)("li",{parentName:"ul"},"Scroll to the bottom of the organisation profile page and click ","\xab","+Add field","\xbb"," to add your custom key, value pair",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"The key, value pair that you enter will be available to you in the autofill assistant during metadata configuration.",(0,i.yg)("img",{src:a(875).A,alt:"",title:"Creating a custom metadata field",className:"img-responsive img-inline-help"}))))),(0,i.yg)("p",null,"To add a custom field to your user profile, follow this workflow logged in as a Data Manager, Theme Manager or Superuser:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Click the User profile icon (person) at the top right of the screen"),(0,i.yg)("li",{parentName:"ul"},"Scroll to the bottom of the user profile page and click ","\xab","+Add field","\xbb"," to add your custom key, value pair",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"The key, value pair that you enter will be available to you in the autofill assistant during metadata configuration."),(0,i.yg)("li",{parentName:"ul"},"All organisation users can add custom metadata fields to their user profiles. Theme Managers and Superusers configuring metadata should come to an agreement with Data Managers on the custom metadata fields that will be implemented. Themes configured to use custom metadata fields in user profiles will access the value from the user profile of the person creating the dataset.")))),(0,i.yg)("p",null,(0,i.yg)("em",{parentName:"p"},"IMPORTANT: Custom metadata fields are optional.")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 2: Create a schema and a theme for your data")),(0,i.yg)("p",null,"The next step in the metadata configuration workflow is to create a schema and a theme for your dataset. Your dataset is the data that you want to create metadata for. hale\xbbconnect provides several options for creating a schema. You can visit the following documentation pages to learn more about schema creation:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/docs/setup-hc/create-a-schema/2018-01-28-schema-preset"},"Create a schema based on a schema preset")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/docs/setup-hc/create-a-schema/2018-01-28-schema-create-file"},"Create a schema by uploading a schema file")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/docs/setup-hc/create-a-schema/2018-01-28-schema-create-external"},"Create a schema using a web address")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/docs/setup-hc/create-a-schema/2018-01-28-schema-create-existing"},"Create a new schema based on an existing schema"))),(0,i.yg)("p",null,"In this tutorial, we will work with the option to create a schema by uploading a schema file. Your source data is in shapefile format, and the option to create a schema by uploading a schema file enables us to simply upload a shapefile. hale\xbbconnect automatically reads the shapefile and generates a schema for you."),(0,i.yg)("p",null,"To create a new schema based on a shapefile, follow this workflow logged in as a Theme Manager or Superuser:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Go to \u201cSchemas\u201d on the main toolbar")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Go to \u201cCreate new schema\u201d at the bottom of the schema list")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Select creation method. In the first step, select ","\xab","Upload schema file","\xbb",". Click ","\xab","Continue","\xbb")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Next, define the schema you want to use. The schema definition is determined by the creation method you selected in the previous step."),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Click the ","\xab","Select file(s)","\xbb"," button and navigate to the shapefile located in the tutorial data folder. Add the shapefile named WatercourseLink. You can also upload the zipped folder which contains the shapefile. When you are finished, click ","\xab","Continue","\xbb",(0,i.yg)("img",{src:a(7235).A,alt:"",title:"Creating a new schema",className:"img-responsive img-inline-help"}))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Add information. Provide the name, author, type and version of your schema. When you are finished, click ","\xab","Continue","\xbb")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Confirm creation. In the final step, review your schema. You have the option to add or create a theme for your schema. Toggle the switch to enable the creation of a theme. When you are finished, click ","\xab","Create","\xbb"," to save the schema and create an associated theme."))))),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 3: Configure metadata in your theme")),(0,i.yg)("p",null,"A theme is a re-usable configuration object used to define common settings for dataset metadata, service publishing and transformation. A theme has several elements:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"A schema, defined through association with a number of feature types"),(0,i.yg)("li",{parentName:"ul"},"Display properties for the fields and types of that schema, such as aliases and styling"),(0,i.yg)("li",{parentName:"ul"},"A metadata configuration which defines the metadata fields that need to be provided, as well as default values and autofill rules for a high degree of automation"),(0,i.yg)("li",{parentName:"ul"},"An association with a transformation project that enables format conversion and schema transformation"),(0,i.yg)("li",{parentName:"ul"},"A configuration for an automated workflow that can be set to execute service publishing and data transformation on certain events such as an update to a dataset")),(0,i.yg)("p",null,"The metadata editor tool is located in the Metadata section of your theme. In this step, we will use the metadata editor to create a re-useable metadata configuration which utilizes custom fields, autofill rules and enumerations. The metadata configuration is applied to all datasets that use your theme. If you have metadata that you want to re-use, visit the ",(0,i.yg)("a",{parentName:"p",href:"/docs/setup-hc/edit-metadata-config/2015-02-10-theme-edit-metadata"},"Edit metadata configuration")," section of our help for more information."),(0,i.yg)("p",null,"First, navigate to the theme you created during schema creation in Step 2."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Go to \u201cThemes\u201d on the main toolbar"),(0,i.yg)("li",{parentName:"ul"},"Enter the name of your theme in the search bar. When you create a theme during schema creation, your theme is automatically given the same name as your schema. You can also use the dropdown menu next to \u201cSort order\u201d. Select \u201cLast modified\u201d to view your most recent themes."),(0,i.yg)("li",{parentName:"ul"},"Select your theme from the list of resources"),(0,i.yg)("li",{parentName:"ul"},"Click the section named Metadata ",(0,i.yg)("img",{src:a(6637).A,alt:"",title:"Metadata",className:"img-responsive img-inline-help"}))),(0,i.yg)("p",null,"The Metadata section contains configuration settings and an editable JSON text editor that enables Theme managers and Superusers to customize the default metadata template. The default metadata template is a list of category objects which are used to create valid ISO, INSPIRE and GDI-DE metadata files. Each category object and the list of fields contained within it, provides the information required to populate metadata properties in the supported metadata profiles. The metadata template is used internally to map user-provided metadata values to the metadata profiles. The comment field in each category object identifies the relevant metadata profile. For example: ",(0,i.yg)("inlineCode",{parentName:"p"},'"comment": "ISO 3.2.1 #360"')," indicates that the object fulfils the requirement of the ISO 19115 Geographic information \u2013 Metadata profile, ",(0,i.yg)("a",{parentName:"p",href:"https://www.geoportal.de/SharedDocs/Downloads/DE/GDI-DE/Deutsche_Uebersetzung_der_ISO-Felder.html"},"section B.3.2.1 item #360"),"."),(0,i.yg)("p",null,"Let's take a look at the list of fields in a category object, because that is what you have to configure."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'    {\n        "name": "md-dataset.citation.title",\n        "required": true,\n        "minOccurs": 1,\n        "maxOccurs": 1,\n        "comment": "ISO 3.2.1 #360",\n        "label": "Title",\n        "description": "name by which the cited resource is known",\n        "type": "string",\n        "schema": null,\n        "defaultValue": null,\n        "autofillRule": "{{dataset.name}}",\n        "visibility": true,\n        "editable": true,\n        "targets": {\n            "bsp": "md-dataset.citation.title"\n    }\n')),(0,i.yg)("p",null,"It is important to understand that the internal mapping is based on the ",(0,i.yg)("inlineCode",{parentName:"p"},"name")," field of each category object. Values entered in the ",(0,i.yg)("inlineCode",{parentName:"p"},"name")," field are limited to the following values:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"md-dataset.citation.title"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.identification.","*",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"md-dataset.identification.abstract"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.identification.keyword_inspire"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.identification.keyword_simple"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.identification.topicCategory"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.identification.geographicExtent.eastBoundLongitude"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.identification.geographicExtent.northBoundLatitude"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.identification.geographicExtent.southBoundLatitude"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.identification.geographicExtent.westBoundLongitude"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.identification.topicCategory"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.identification.constraints.useLimitations"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.identification.constraints.useConstraints"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.identification.constraints.accessContraints"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.identification.contactForResource.","*",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"md-dataset.identification.contactForResource.individualName"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.identification.contactForResource.authorityUrl"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.identification.contactForResource.organisationName"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.identification.contactForResource.positionName"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.identification.contactForResource.roleCode"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.identification.contactForResource.email"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.identification.contactForResource.deliveryPoint"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.identification.contactForResource.postalCode"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.identification.contactForResource.city"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.identification.contactForResource.administrativeArea"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.identification.contactForResource.country"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.identification.contactForResource.voicePhone"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.identification.contactForResource.facsimile"))))),(0,i.yg)("li",{parentName:"ul"},"md-dataset.contactForMetadata.","*",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"md-dataset.contactForMetadata.individualName"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.contactForMetadata.authorityUrl"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.contactForMetadata.organisationName"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.contactForMetadata.positionName"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.contactForMetadata.roleCode"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.contactForMetadata.email"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.contactForMetadata.deliveryPoint"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.contactForMetadata.postalCode"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.contactForMetadata.city"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.contactForMetadata.administrativeArea"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.contactForMetadata.country"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.contactForMetadata.voicePhone"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.contactForMetadata.facsimile"))),(0,i.yg)("li",{parentName:"ul"},"md-dataset.fileidentifier"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.mdIdentifierLocalId"),(0,i.yg)("li",{parentName:"ul"},"md-dataset.mdIdentifierNamespace")),(0,i.yg)("p",null," The ",(0,i.yg)("inlineCode",{parentName:"p"},"required"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"minOccurs")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"maxOccurs")," fields express the cardinality of the metadata value, and should not be altered. Each additional field describes how the input should look and behave in the user interface, what kind of content is allowed, and whether default values or derived values should be inserted."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"label:")," The label that should be displayed to the user next to the input field."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"description:")," A longer, explanatory text for the fields that is displayed on hovering over the label."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"type:")," The primitive type of data this field expects. One of string, object, array, integer and float."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"schema:")," The schema or format of the value to be inserted. One of email, enum, geojson, json, wkt and csv."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"defaultValue:")," A fixed default value that will always be assigned to the field."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"autofillRule:")," A dynamic default value that will be assigned to the field. This value is calculated from the current environment variables such as the user, the organisation context, the data set and the theme. When you click into a row with an ",(0,i.yg)("inlineCode",{parentName:"li"},"autofillRule")," property key, an assistant for choosing a value appears in the upper right corner of the editor."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"editable:")," Set to ",(0,i.yg)("inlineCode",{parentName:"li"},"true")," when the data manager should be able to edit the value in this field."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"targets:")," This is a list with mapping rules to external services, such as metadata catalogues. By default, there should always be at least a ",(0,i.yg)("inlineCode",{parentName:"li"},"bsp")," target defined. ",(0,i.yg)("inlineCode",{parentName:"li"},"bsp")," is what hale\xbbconnect needs in order to publish services.")),(0,i.yg)("p",null,"In this tutorial we will focus on the following fields, each of which can be configured by the user to support the automatic creation of metadata in hale\xbbconnect:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"type")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"defaultValue")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"autofillRule")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"visibility")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"editable")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"enumValues"))),(0,i.yg)("p",null,"The first category object in the metadata editor provides the name of the dataset: ",(0,i.yg)("inlineCode",{parentName:"p"},'"name": "md-dataset.citation.title"'),". In the first example, we will set the ",(0,i.yg)("inlineCode",{parentName:"p"},"editable")," property to ",(0,i.yg)("inlineCode",{parentName:"p"},"false"),". Place your cursor next to the ",(0,i.yg)("inlineCode",{parentName:"p"},"editable"),' property and type "false". This option prevents other users in your organisation from editing the auto fill value.'),(0,i.yg)("p",null,"The second category object provides a brief summary of the dataset: ",(0,i.yg)("inlineCode",{parentName:"p"},'"name": "md-dataset.identification.abstract"'),". In this example, we will set the ",(0,i.yg)("inlineCode",{parentName:"p"},"visibility")," property to ",(0,i.yg)("inlineCode",{parentName:"p"},"false"),". Place your cursor next to the ",(0,i.yg)("inlineCode",{parentName:"p"},"visibility"),' property and type "false". This option controls the number of fields users must view during dataset creation.',(0,i.yg)("img",{src:a(7168).A,alt:"",title:"Editing configuration fields ",className:"img-responsive img-inline-help"})),(0,i.yg)("p",null,"The third category object provides an enumeration example: ",(0,i.yg)("inlineCode",{parentName:"p"},'"name": "md-dataset.identification.keyword_inspire"'),". Enumeration fields enable you to create dropdown menus in the metadata entry user interface. The label, value pairs define the labels shown in the user interface and the mapping values used internally. You can edit the labels in an enumeration to display labels in a different language in the user interface. You cannot edit the associated values because they are used in an internal mapping.",(0,i.yg)("img",{src:a(7385).A,alt:"",title:"Creating an enumeration",className:"img-responsive img-inline-help"})),(0,i.yg)("p",null,"The fourth category object provides simple keywords: ",(0,i.yg)("inlineCode",{parentName:"p"},'"name": "md-dataset.identification.keyword_simple"'),". In this example, we will set the ",(0,i.yg)("inlineCode",{parentName:"p"},"defaultValue")," to 'INSPIRE' so that the field is always populated with this value. Place your cursor next to the ",(0,i.yg)("inlineCode",{parentName:"p"},"defaultValue"),' property and type "INSPIRE". The field remains editable, so users can change the value if necessary.'),(0,i.yg)("p",null,"In the last example, we will use custom metadata fields to create autofill rules. In this example, we will work with the category object: ",(0,i.yg)("inlineCode",{parentName:"p"},'"name": "md-dataset.contactForMetadata.positionName"'),". Place your cursor next to ",(0,i.yg)("inlineCode",{parentName:"p"},"autofillRule:"),". The autofill assistant will appear in the upper right corner of the editor. Click on Organisation in the autofill assistant, and scroll to Custom fields. Click Custom fields in the assistant, and click on the key value you set in step 1 of this tutorial. The metadata will now auto-populate with the value you entered in your newly created custom field.",(0,i.yg)("img",{src:a(1270).A,alt:"",title:"Autofill assistant",className:"img-responsive img-inline-help"})),(0,i.yg)("p",null,"Once you have configured the template in the editor, click the ","\xab","Save","\xbb"," button at the bottom of the page."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 4: Publish and validate your dataset and metadata")),(0,i.yg)("p",null,"In the final step, we will create a dataset and view the metadata that we configured in this tutorial. Using our configured theme, we can upload data and create metadata in a few simple steps."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Go to ","\xab","Data","\xbb"," on the main toolbar")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Go to ","\xab","Create new Data Set","\xbb"," at the bottom of the dataset list")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Select your theme to link to your dataset.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Click ","\xab","Select file(s)","\xbb"," and navigate to the tutorial data named ",(0,i.yg)("a",{parentName:"p",href:"https://wetransform.box.com/s/2mnyp9xtjbbk3b5tbc1thg0jmxthgd0e"},"Metadata_TutorialData.zip"),". If you are working with shapefiles, we recommend that you upload them in a .zip file.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Give your dataset a name. This name should enable you to quickly und clearly identify the dataset in the system.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Provide metadata for your dataset. In this step, we will see the results of our metadata configuration. There is a list of several, expandable panels which contain both optional and required metadata elements."),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},'Expand the first panel, "Data Set - General" to check:',(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"The Title field is not editable"),(0,i.yg)("li",{parentName:"ul"},"The Abstract Dataset field is not visible"),(0,i.yg)("li",{parentName:"ul"},"Put your cursor in the INSPIRE Theme dropdown menu to view the enumeration values"))),(0,i.yg)("li",{parentName:"ul"},'Expand the "Data set - Contact for Metadata" panel to check:',(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"The Position field is populated with your custom metadata field value"))))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"In the final step, you can review the steps of the publishing process configured for the theme. You will see two toggle switches to publish download and view services for your dataset. Activate the toggle switches and click ","\xab","Create","\xbb"))),(0,i.yg)("p",null,"hale\xbbconnect will immediately begin to test and validate your metadata."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Click the section named View Services"),(0,i.yg)("li",{parentName:"ul"},"The test reports panel provides a list of PDFs which contain the results of a series of tests executed on published metadata and services. Tests check for ISO, GDI-DE and INSPIRE compliancy. For more information, visit our ",(0,i.yg)("a",{parentName:"li",href:"/docs/references/data/2018-03-08-reference-data-view-services"},"View Services")," help section."),(0,i.yg)("li",{parentName:"ul"},"Click on any of the listed test reports to view the results")),(0,i.yg)("p",null,"Metadata configuration helps users to create metadata quickly and efficiently, greatly reducing the potential for error. The hale\xbbconnect platform gathers information from across the platform to automate the metadata generation process and produce valid and compliant dataset and network service metadata. In this tutorial we configured metadata in a theme which can be reused by multiple users, with any role, as often as necessary, greatly reducing the burden of metadata requirements."))}m.isMDXComponent=!0},7235:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Tutorial_Upload_schema-d7b369fd9cbc655e99bd57ce5196b0af.png"},1270:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Tutorial_autofillAssistant-e217b54c4b6318c5241819d33a933ef1.png"},875:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Tutorial_custom_fields-da78d42095dac5b1b617316f30c39173.png"},7168:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Tutorial_editconfig-0ff20b3080b9b92e055702cf4fd2c407.png"},7385:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Tutorial_enum-75b9c775c426ab7f48fa97ba2482f37b.png"},6637:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Tutorial_metadata-45cf9434cf13e34eee2505184d433d77.png"},3893:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Tutorial_organisations-7fe44cf2b90db5fcce26a4efa45a4d7c.png"}}]);