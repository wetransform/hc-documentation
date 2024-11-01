"use strict";(self.webpackChunkhc_documentation=self.webpackChunkhc_documentation||[]).push([[8554],{5680:(e,t,a)=>{a.d(t,{xA:()=>l,yg:()=>g});var r=a(6540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(a),u=n,g=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return a?r.createElement(g,s(s({ref:t},l),{},{components:a})):r.createElement(g,s({ref:t},l))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9766:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(8168),n=(a(6540),a(5680));const o={title:"Catalogue Service for the Web 2.0.2 (CSW service)",categories:["help-page-category-users","help-page-subcategory-users-metadata"],layout:"help-detail",language:"en"},s=void 0,i={unversionedId:"users-roles-orgs/harvesting-metadata/2015-03-07-csw",id:"users-roles-orgs/harvesting-metadata/2015-03-07-csw",title:"Catalogue Service for the Web 2.0.2 (CSW service)",description:"wetransform provides a catalogue service for the web (CSW) 2.0.2 for users who want to harvest metadata published on the hale\xbbconnect platform. The CSW contains both dataset and service metadata.",source:"@site/docs/users-roles-orgs/harvesting-metadata/2015-03-07-csw.md",sourceDirName:"users-roles-orgs/harvesting-metadata",slug:"/users-roles-orgs/harvesting-metadata/2015-03-07-csw",permalink:"/docs/users-roles-orgs/harvesting-metadata/2015-03-07-csw",draft:!1,editUrl:"https://github.com/wetransform/hc-documentation/tree/master/docs/users-roles-orgs/harvesting-metadata/2015-03-07-csw.md",tags:[],version:"current",frontMatter:{title:"Catalogue Service for the Web 2.0.2 (CSW service)",categories:["help-page-category-users","help-page-subcategory-users-metadata"],layout:"help-detail",language:"en"},sidebar:"tutorialSidebar",previous:{title:"Access the harvesting endpoint",permalink:"/docs/users-roles-orgs/harvesting-metadata/2015-03-06-harvest-metadata"},next:{title:"hale\xbbconnect API",permalink:"/docs/references/haleconnect-api/2023-11-15-haleconnect-api"}},p={},c=[{value:"<strong>Organisation CSW endpoint</strong>",id:"organisation-csw-endpoint",level:3}],l={toc:c},m="wrapper";function d(e){let{components:t,...o}=e;return(0,n.yg)(m,(0,r.A)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"wetransform provides a catalogue service for the web (CSW) 2.0.2 for users who want to harvest metadata published on the hale\xbbconnect platform. The CSW contains both dataset and service metadata."),(0,n.yg)("p",null,"The hale\xbbconnect CSW GetCapabilities URL is: ",(0,n.yg)("a",{parentName:"p",href:"https://haleconnect.com/csw?service=CSW&request=GetCapabilities"},"https://haleconnect.com/csw?service=CSW&request=GetCapabilities")),(0,n.yg)("h3",{id:"organisation-csw-endpoint"},(0,n.yg)("strong",{parentName:"h3"},"Organisation CSW endpoint")),(0,n.yg)("p",null,"wetransform can provide organisations with an organisation specific CSW endpoint upon request. A parameter was added to the CSW that enables users to retrieve all resources belonging to an organisation by providing their organisation ID. Depending on user requirements, suborganisation metadata may be or not be included in the endpoint."),(0,n.yg)("p",null,"Organisation administrators can enter values for supported languages, default language, date, gemet keywords, service conformity, and temporal extent on the organisation profile page. Default values are entered automatically in the CSW GetCapabilities document if no values are entered in the fields."),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Note: New suborganisations and changes to the CSW GetCapabilities document may take up to 24 h to be included in the endpoint.")),(0,n.yg)("p",null,"The CSW GetCapabilities response document lists the supported request operations in the ",(0,n.yg)("inlineCode",{parentName:"p"},"OperationsMetadata")," element, which include:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"DescribeRecord")),(0,n.yg)("p",{parentName:"li"},"The ",(0,n.yg)("inlineCode",{parentName:"p"},"DescribeRecord")," request allows users to retrieve type definition(s) used by metadata of one or more registered resource types ","[OGC 07-006r1]","."),(0,n.yg)("p",{parentName:"li"},"  ",(0,n.yg)("inlineCode",{parentName:"p"},"https://haleconnect.com/csw?service=CSW&version=2.0.2&request=DescribeRecord")),(0,n.yg)("p",{parentName:"li"},"The request returns a type definition document containing definition(s) of type(s) used by the metadata of one or\nmore registered resource types. This type definition shall include the structure (schema), queryables, element sets, and formats of the metadata used for one or more registered resource types. The contents of the result of this operation depend on the types of metadata that can currently be used by registered resources ","[OGC 07-006r1]",".")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"GetDomain")),(0,n.yg)("p",{parentName:"li"},"The ",(0,n.yg)("inlineCode",{parentName:"p"},"GetDomain")," request retrieves information about the valid values of one or more named metadata properties."),(0,n.yg)("p",{parentName:"li"},"  ",(0,n.yg)("inlineCode",{parentName:"p"},"https://haleconnect.com/csw?service=CSW&version=2.0.2&request=GetDomain&propertyname=gmd:contactInfo")),(0,n.yg)("p",{parentName:"li"},"The request returns descriptions of domains of one or more requested metadata properties or request parameters."),(0,n.yg)("p",{parentName:"li"},"The ",(0,n.yg)("inlineCode",{parentName:"p"},"GetDomain")," operation is a \u201cbest-effort\u201d operation that tries to generate useful information about the specified request parameter or property. It is possible that a catalogue may not be able to determine anything about the values of a property or request parameter beyond the basic type; in this case only a type reference or a type description will be returned. ","[OGC 07-006r1]")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"GetRecords")),(0,n.yg)("p",{parentName:"li"},"The ",(0,n.yg)("inlineCode",{parentName:"p"},"GetRecords")," operation enables users to build queries based on spatial predicates and attribute filters."),(0,n.yg)("p",{parentName:"li"},"  Use the ",(0,n.yg)("inlineCode",{parentName:"p"},"startPosition")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"maxRecords")," parameters to customize the number of results returned\nUse the ",(0,n.yg)("inlineCode",{parentName:"p"},"outputSchema")," parameter to customize the output format\nUse the ",(0,n.yg)("inlineCode",{parentName:"p"},"ElementSetName")," parameter (brief, summary, full) to adjust the length and detail of metadata record responses"),(0,n.yg)("p",{parentName:"li"},"All records example"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"https://haleconnect.com/csw?service=CSW&version=2.0.2&request=GetRecords&resultType=results&outputSchema=http://www.isotc211.org/2005/gmd&NAMESPACE=xmlns(gmd=http://www.isotc211.org/2005/gmd)&typeNames=gmd:MD_Metadata&elementSetName=full&startPosition=1&maxRecords=10\n")),(0,n.yg)("p",{parentName:"li"},"Full text search example"),(0,n.yg)("p",{parentName:"li"},"The CSW can be queried to obtain the datasets which belong to an organisation. The following example demonstrates how to retrieve 10 records for the organisation named ",(0,n.yg)("inlineCode",{parentName:"p"},"Test Org"),". The constraint parameter contains an ",(0,n.yg)("inlineCode",{parentName:"p"},"ogc:Filter")," which filters on organisation name."),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},'https://haleconnect.com/csw?service=CSW&version=2.0.2&request=GetRecords&resultType=results&outputSchema=http://www.isotc211.org/2005/gmd&NAMESPACE=xmlns(gmd=http://www.isotc211.org/2005/gmd)&typeNames=gmd:MD_Metadata&CONSTRAINTLANGUAGE=FILTER&elementSetName=full&startPosition=1&maxRecords=10&CONSTRAINT=<ogc:Filter xmlns:ogc="http://www.opengis.net/ogc" xmlns:gmd="http://www.isotc211.org/2005/gmd"><ogc:PropertyIsLike wildCard="%" singleChar="\\_" escapeChar="!"><ogc:PropertyName>csw:AnyText</ogc:PropertyName><ogc:Literal>%Test Org%</ogc:Literal></ogc:PropertyIsLike></ogc:Filter>\n')),(0,n.yg)("p",{parentName:"li"},"Use the ",(0,n.yg)("inlineCode",{parentName:"p"},"startPosition")," parameter to issue iterative requests to the CSW to obtain all results for an organisation. Currently, the CSW returns a maximum of 10 records per request.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"GetRecordById")),(0,n.yg)("p",{parentName:"li"},"The ",(0,n.yg)("inlineCode",{parentName:"p"},"GetRecordsById")," request enables users to query the service for individual metadata records through the use of identifiers. A CSW advertises which schemas it can use to represent a record in response to a ",(0,n.yg)("inlineCode",{parentName:"p"},"GetRecordById")," request in the Capabilities document."),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"https://haleconnect.com/csw?service=CSW&version=2.0.2&request=GetRecordById&id=07901729-84a2-4008-89c5-17403cd014ba&elementsetname=full&outputSchema=http://www.isotc211.org/2005/gmd"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Filtering by attributes")),(0,n.yg)("p",{parentName:"li"},"To filter the CSW response for the keyword \u201cINSPIRE\u201d, you can use the ",(0,n.yg)("inlineCode",{parentName:"p"},"apiso:Subject")," property. For more information on how to create attribute-based filters, visit the ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/geopython/pycsw/blob/70f1a19f764757a459501ae59f75982a50a14acb/pycsw/plugins/profiles/apiso/apiso.py#L65"},"pycsw codebase on GitHub"),"."),(0,n.yg)("p",{parentName:"li"},"The CSW can be queried, for example, to obtain the metadata records that contain the keyword \u201cINSPIRE\u201d:"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},'https://haleconnect.com/csw/org/223?service=CSW&version=2.0.2&request=GetRecords&resultType=results&outputSchema=http://www.isotc211.org/2005/gmd&NAMESPACE=xmlns(gmd=http://www.isotc211.org/2005/gmd)&typeNames=gmd:MD_Metadata&CONSTRAINTLANGUAGE=FILTER&elementSetName=full&startPosition=1&maxRecords=10&CONSTRAINT=<ogc:Filter xmlns:ogc="http://www.opengis.net/ogc" xmlns:apiso="http://www.opengis.net/cat/csw/apiso/1.0" xmlns:gmd="http://www.isotc211.org/2005/gmd"><ogc:PropertyIsLike wildCard="%" singleChar="\\_" escapeChar="!"><ogc:PropertyName>apiso:Subject</ogc:PropertyName><ogc:Literal>%INSPIRE%</ogc:Literal></ogc:PropertyIsLike></ogc:Filter>\n')))),(0,n.yg)("p",null,"Each of the request types supports a range of parameters which can be used to query and filter the returns. Requests to the CSW can be made using HTTP GET, HTTP POST (including SOAP encodings of operation requests) and XML encoded POST requests.   "),(0,n.yg)("p",null,"The hale\xbbconnect CSW also includes an ExtendedCapabilites element which contains additional metadata required for INSPIRE compliancy."),(0,n.yg)("p",null,"You can explore the hale\xbbconnect CSW easily in the QGIS MetaSearch Catalogue Client plug-in. In QGIS 2.0 and higher, the plug-in is installed by default. Navigate to the Web menu in the top row of resource tabs in QGIS, and select MetaSearch from the dropdown menu."),(0,n.yg)("p",null,"In the MetaSearch dialog, click the Services tab and click New to create a connection to the hale\xbbconnect CSW. Give the connection a name, and enter the GetCapabilities URL to the CSW. Click OK."),(0,n.yg)("img",{src:a(2471).A,alt:"",title:"Adding a new CSW connection in QGIS",className:"img-responsive center-block"}),(0,n.yg)("p",null,"Next, click the Search tab in the MetaSearch dialog and enter a search term in the Keywords field to explore the available metadata records."),(0,n.yg)("p",null,"For more information, visit the MetaSearch documentation on the QGIS website."))}d.isMDXComponent=!0},2471:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/csw-a74c26e053a024f8be4e90af8f2980f4.png"}}]);