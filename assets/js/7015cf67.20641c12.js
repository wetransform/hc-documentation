"use strict";(self.webpackChunkhc_documentation=self.webpackChunkhc_documentation||[]).push([[9610],{5680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>m});var n=a(6540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),u=i,m=d["".concat(s,".").concat(u)]||d[u]||g[u]||o;return a?n.createElement(m,r(r({ref:t},p),{},{components:a})):n.createElement(m,r({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7185:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(8168),i=(a(6540),a(5680));const o={title:"Creating a profile using the hale\xbbconnect Profile Management Tool (PMT)",categories:["help-page-category-tutorials","help-page-subcategory-tutorials"],layout:"help-detail",language:"en"},r=void 0,l={unversionedId:"tutorials/2018-05-05-pmt-tutorial",id:"tutorials/2018-05-05-pmt-tutorial",title:"Creating a profile using the hale\xbbconnect Profile Management Tool (PMT)",description:"hale\xbbconnect Profile Management Tool (PMT)",source:"@site/docs/tutorials/2018-05-05-pmt-tutorial.md",sourceDirName:"tutorials",slug:"/tutorials/2018-05-05-pmt-tutorial",permalink:"/docs/tutorials/2018-05-05-pmt-tutorial",draft:!1,editUrl:"https://github.com/wetransform/hc-documentation/tree/master/docs/tutorials/2018-05-05-pmt-tutorial.md",tags:[],version:"current",frontMatter:{title:"Creating a profile using the hale\xbbconnect Profile Management Tool (PMT)",categories:["help-page-category-tutorials","help-page-subcategory-tutorials"],layout:"help-detail",language:"en"},sidebar:"tutorialSidebar",previous:{title:"Preparing ESRI shapefiles for online transformation",permalink:"/docs/tutorials/2018-05-04-shp-tutorial"},next:{title:"Conformance class",permalink:"/docs/key-concepts/2015-05-01-terms-conformance-class"}},s={},c=[{value:"<strong>hale\xbbconnect Profile Management Tool (PMT)</strong>",id:"haleconnect-profile-management-tool-pmt",level:3},{value:"<strong>Profiles</strong>",id:"profiles",level:3},{value:"<strong>Creating a profile using the hale\xbbconnect Profile Management Tool (PMT)</strong>",id:"creating-a-profile-using-the-haleconnect-profile-management-tool-pmt",level:3},{value:"<strong>Executable test framework and Executable test suite</strong>",id:"executable-test-framework-and-executable-test-suite",level:3},{value:"<strong>Creating example XML test data and a test suite</strong>",id:"creating-example-xml-test-data-and-a-test-suite",level:3}],p={toc:c},d="wrapper";function g(e){let{components:t,...o}=e;return(0,i.yg)(d,(0,n.A)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h3",{id:"haleconnect-profile-management-tool-pmt"},(0,i.yg)("strong",{parentName:"h3"},"hale\xbbconnect Profile Management Tool (PMT)")),(0,i.yg)("p",null,"Profiles can be a powerful tool to implement metadata standards such as ISO 19115. However, they often become very complex and demand a lot of work to create and maintain. Profiles are often described in excel tables or other tools with hundreds of entries. Entering and maintaining data, ensuring that it is compliant with validators and then testing can prove to be overwhelming. The hale\xbbconnect Profile Management Tool (PMT) enables you to easily define and manage profiles. With little effort, you can implement profiles using editors and validators and ensure that your metadata complies with constantly changing requirements."),(0,i.yg)("h3",{id:"profiles"},(0,i.yg)("strong",{parentName:"h3"},"Profiles")),(0,i.yg)("p",null,"In hale\xbbconnect, a profile describes the extension of a schema through the definition of rules applied to data model elements. A profile is defined by consistency constraints and tag definitions which are applied to schema elements."),(0,i.yg)("p",null,"A profile specifically contains the following types of information:"),(0,i.yg)("p",null,"  ",(0,i.yg)("strong",{parentName:"p"},"Type obligation")),(0,i.yg)("p",null,"   Type obligation enables users to determine whether a type must be present in a data set. Profiles may have additional rules, or more strict rules than the original schema. ",(0,i.yg)("img",{src:a(4121).A,alt:"Setting type obligation",title:"Setting type obligation",className:"img-responsive img-inline-help"})),(0,i.yg)("p",null,"  ",(0,i.yg)("strong",{parentName:"p"},"Attribute obligation")),(0,i.yg)("p",null,"   Attribute obligation allows users to determine whether an attribute must be present in a data set. Here are some examples:"),(0,i.yg)("p",null,"   Require that content is present in a property (cf. nillable flag) ",(0,i.yg)("img",{src:a(4686).A,alt:"Requiring content in an attribute",title:"Requiring content in an attribute",className:"img-responsive img-inline-help"})),(0,i.yg)("p",null,"   Set allowed maximum and minimum cardinality e.g. from unbounded in the schema to exactly 1 ",(0,i.yg)("img",{src:a(7457).A,alt:"Setting allowed maximum and minimum cardinality",title:"Setting allowed maximum and minimum cardinality",className:"img-responsive img-inline-help"})),(0,i.yg)("p",null,"  ",(0,i.yg)("strong",{parentName:"p"},"Domain restrictions"),(0,i.yg)("br",{parentName:"p"}),"\n","Domain restrictions allow users to manage specific code lists and remove codelist values, if required.\nDomain restrictions can also be used to enumerate allowed values. ",(0,i.yg)("img",{src:a(8349).A,alt:"Domain restrictions",title:"Domain restrictions",className:"img-responsive img-inline-help"})),(0,i.yg)("p",null,"  ",(0,i.yg)("strong",{parentName:"p"},"Type restrictions"),(0,i.yg)("br",{parentName:"p"}),"\n","Type restrictions can be used to require a certain property type where otherwise multiple types are allowed e.g. limiting choices or anyTypes"),(0,i.yg)("img",{src:a(6448).A,alt:"Restricting property types",title:"Restricting property types",className:"img-responsive img-inline-help"}),(0,i.yg)("p",null,"  ",(0,i.yg)("strong",{parentName:"p"},"Consistency constraints"),(0,i.yg)("br",{parentName:"p"}),"\n","Consistency constraints can be used to test across multiple elements.\nValue dependencies can be defined on profile elements, e.g. When Element A has value X, Element B must have value Y.\nExistence dependencies can be defined on profile elements, e.g. When Element A exists, Element B must not exist.\nCombinations of value and existence dependencies can also be defined, e.g. When Element A has value X, Element B must not exist. ",(0,i.yg)("img",{src:a(6613).A,alt:"Applying consistency constraints",title:"Applying consistency constraints",className:"img-responsive img-inline-help"})),(0,i.yg)("h3",{id:"creating-a-profile-using-the-haleconnect-profile-management-tool-pmt"},(0,i.yg)("strong",{parentName:"h3"},"Creating a profile using the hale\xbbconnect Profile Management Tool (PMT)")),(0,i.yg)("p",null,"In this tutorial, you will create a profile based on the CSW 2.0.2 Metadata Application schema."),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Go to ","\xab","Schemas","\xbb"," on the main toolbar."),(0,i.yg)("li",{parentName:"ol"},"Go to ","\xab","Create new schema","\xbb"," at the bottom of the schema list, chose ","\xab","Create profile","\xbb"," and click ","\xab","Continue","\xbb",".",(0,i.yg)("img",{src:a(753).A,alt:"",title:"Creating a profile",className:"img-responsive img-inline-help"})),(0,i.yg)("li",{parentName:"ol"},"Add profile information. Next, provide the name, author, version and description of your profile. When you are finished, click ","\xab","Continue","\xbb","."),(0,i.yg)("li",{parentName:"ol"},"Select the schema your profile will be based on. Click the ","\xab","+Select Schema","\xbb"," button and navigate to the CSW 2.0.2 Metadata Application schema on hale>>connect. Click the \xbb to select it. When you are finished, click ","\xab","Continue","\xbb",".",(0,i.yg)("img",{src:a(9537).A,alt:"",title:"Creating a profile",className:"img-responsive img-inline-help"})),(0,i.yg)("li",{parentName:"ol"},"Confirm creation. In the final step, review your profile. You have the option to add or create a theme for your profile. When you are finished, click ","\xab","Create","\xbb"," to generate the profile.")),(0,i.yg)("p",null,"You can add type and attribute obligations, domain and type restrictions and consistency constraints to your profile after it is created."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Adding a type obligation")),(0,i.yg)("p",null,"Navigate to your profile and click the ","\xab","Feature types","\xbb",' section. In the search bar, type "CI_ResponsibleParty". Scroll the result list and toggle the switch next to the edit icon to make the type mandatory.',(0,i.yg)("img",{src:a(9170).A,alt:"Adding a type obligation",title:"Adding a type obligation",className:"img-responsive img-inline-help"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Adding an attribute obligation")),(0,i.yg)("p",null,'To add an attribute obligation to the type "CI_ResponsibleParty", click on the edit icon. Click on the highlighted text "more" to expand the list of attributes. Next, click on the arrow next to "organisationName" to expand the list of options associate with the attribute. To change the cardinality of the attribute, change the minimum and/or maximum count by entering a number. To require content in the attribute, click the dropdown menu next to the label "Content required" and select a value.',(0,i.yg)("img",{src:a(847).A,alt:"Adding an attribute obligation",title:"Adding an attribute obligation",className:"img-responsive img-inline-help"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Adding a domain restriction")),(0,i.yg)("p",null,'Next, add a domain restriction to the attribute "role". Scroll to the bottom of "CI_ResponsibleParty" and click the arrow next to "role". Click on the codelist value "author" to remove the value from the list of allowed values.',(0,i.yg)("img",{src:a(2943).A,alt:"Removing a codelist value",title:"Removing a codelist value",className:"img-responsive img-inline-help"})),(0,i.yg)("p",null,"Click ","\xab","Update","\xbb",' to save your changes to "CI_ResponsibleParty".'),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Adding a consistency constraint")),(0,i.yg)("p",null,"INSPIRE technical guidelines require the existence of MD_Legal Constraints or MD_Security Constraints. You will add a consistency constraint to the profile to enforce this requirement.\nNavigate to the ","\xab","Consistency constraints","\xbb"," section of your profile. Click ","\xab","+Add consistency condition","\xbb",'.\nThe first step is to choose one or more operators from the dropdown list of operators. Select the "OR" operator. Next, click ',"\xab","+Create condition","\xbb",'. Type MD_Metadata in the first field and navigate the schema to find the following attribute: MD_Metadata.identificationInfo.MD_DataIdentification.resourceConstraints.MD_LegalConstraints\nClick the attribute MD_LegalConstraints and select "EXISTS" from the dropdown menu that appears. Scroll to the end of the dialog and click ',"\xab","Confirm","\xbb"," to add the condition. ",(0,i.yg)("img",{src:a(3105).A,alt:"Creating a condition",title:"Creating a condition",className:"img-responsive img-inline-help"}),"\nRepeat the step above to add the second condition to the consistency constraint. Type MD_Metadata in the first field and navigate the schema to find the following attribute:\nMD_Metadata.identificationInfo.MD_DataIdentification.resourceConstraints.MD_SecurityConstraints and add the EXISTS condition.\nWhen you are finished, scroll to the end of the dialog and click ","\xab","Confirm","\xbb"," to add the condition."),(0,i.yg)("h3",{id:"executable-test-framework-and-executable-test-suite"},(0,i.yg)("strong",{parentName:"h3"},(0,i.yg)("a",{parentName:"strong",href:"http://etf-validator.net/"},"Executable test framework")," and ",(0,i.yg)("a",{parentName:"strong",href:"https://docs.etf-validator.net/v2.0/Developer_manuals/Developing_Executable_Test_Suites.html"},"Executable test suite"))),(0,i.yg)("p",null,"ETF is an open source testing framework for validating spatial data, metadata and web services in Spatial Data Infrastructures (SDIs). For more information, visit the following link ",(0,i.yg)("a",{parentName:"p",href:"http://etf-validator.net/"},"About ETF"),"."),(0,i.yg)("p",null,"The ","\xab","Files","\xbb"," section of a profile contains options to download a test suite and an example XML document based on the profile definition."),(0,i.yg)("p",null,"A profile must contain valid sample values \u200b\u200bfor all mandatory feature types and properties to enable the generation of an example XML file. A profile with at least one condition must exist to enable the download of a test suite. The format of the test suite is ETF / BaseX due to the desired compatibility with the AdV and GDI-DE test suites (under development) and the INSPIRE Reference Validator. To use an ETF test suite, it must be exported and set up in an ETF installation."),(0,i.yg)("p",null,"In the hale\xbbconnect Profile Management Tool (PMT), tagged values can be used to identify profile elements that will be used to generate test suites and example files."),(0,i.yg)("p",null,"There are a number of different tagged values:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Testcase-label (ATS-Titel): The reserved tag testcase-label can be used to label the test case in the ETF test suite."),(0,i.yg)("li",{parentName:"ol"},"Testcase-description (ATS-Beschreibung): The reserved tag testcase-description can be used to describe the test case in the ETF test suite."),(0,i.yg)("li",{parentName:"ol"},"Module-id: The reserved tag module-id can be used to signify that a test case belongs to a module, or group of tests, that are grouped together in the ETS file."),(0,i.yg)("li",{parentName:"ol"},"Example: The reserved tag example can be used to provide an example of a valid value for the element."),(0,i.yg)("li",{parentName:"ol"},"Example XML: The reserved tag example-xml enables users to provide an XML fragment as an example value in the example XML document export. Fragments must be valid, parsable XML. If the fragment includes namespaces, the namespaces must be defined in the fragment.\nExample of a valid fragment:")),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},'<gco:CharacterString xmlns:gco="http://www.isotc211.org/2005/gco">Example-text</gco:CharacterString>')),(0,i.yg)("ol",{start:5},(0,i.yg)("li",{parentName:"ol"},"Freely defined tagged values")),(0,i.yg)("h3",{id:"creating-example-xml-test-data-and-a-test-suite"},(0,i.yg)("strong",{parentName:"h3"},"Creating example XML test data and a test suite")),(0,i.yg)("p",null,"You will create a test suite based on our profile and an example XML file using tagged values. Tagged values can be used for multiple purposes:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Tagged values can be used to provide example values that will be inserted into an XML example file which can be downloaded"),(0,i.yg)("li",{parentName:"ol"},"Tagged values can be used to organize the structure of your ETS file")),(0,i.yg)("p",null,"You can add a tagged value to provide an example value which will appear in the example XML file."),(0,i.yg)("p",null,"Navigate to your profile and click the ","\xab","Feature types","\xbb",' section. In the search bar, type "CI_ResponsibleParty" and return to the feature type that you worked with earlier. To add a tagged value to the type "CI_ResponsibleParty", click on the edit icon. Navigate to the "CI_ResponsibleParty" attribute "organisationName", expand the attribute using the chevron and click ',"\xab","+Add tagged value","\xbb",'. Select the tag name "example" from the tagged values dropdown menu. In the text field, enter the value: wetransform.'),(0,i.yg)("p",null,"When you are finished, click ","\xab","Update","\xbb"," to add the tagged value. Multiple tagged values for the same tag name are not possible."),(0,i.yg)("p",null,"Navigate to the  ","\xab","Files","\xbb"," section of your profile. Click the ","\xab","Download as Test Suite","\xbb"," button to download an executable test suite file and click the ","\xab","Example XML Document","\xbb",' button to download a sample XML file which can be used to test your profile, and provide a valid example of data which complies with the profile\'s requirements. Open the downloaded sample XML file in an XML editor to view the "CI_ResponsibleParty" element and the value you supplied using a tagged value: wetransform.'),(0,i.yg)("p",null,"You will need to set up a running instance of the ETF to run your executable test suite file. Visit the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/interactive-instruments/etf-webapp"},"ETF GitHub page")," for more information."))}g.isMDXComponent=!0},753:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Screenshot_2018-10-23 Create new schema-580531f486019212ece7819c7873a7f7.png"},9537:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Screenshot_2018-10-23 Create new schema_1-8fd93052efa535c312c2a47dca8836a6.png"},847:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/pmt_tutorial_attob-fb5539648c4f28cfdf8f7eb2cec5f6fe.png"},7457:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/pmt_tutorial_cardinality-10ae21924e9cf244200c53ef4454f04f.png"},6613:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/pmt_tutorial_consistency-71a0941013df7f75e70ab325a62f9a6a.png"},4686:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/pmt_tutorial_content-2bea9d4e43bd658a5f5647ae58ee6d7e.png"},3105:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/pmt_tutorial_createcond-6be46f47856e4a70ba9e2b808737b115.png"},8349:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/pmt_tutorial_domain-d96faa028299753a04da80b724d3d39c.png"},2943:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/pmt_tutorial_domres-9b3b5218fd098308fb7c59db3f4eb363.png"},4121:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/pmt_tutorial_type-ef4b6b6545eb3b5451f9c5df375406e2.png"},9170:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/pmt_tutorial_typeob-f80449b3feaf856fb2026c921cb8e18b.png"},6448:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/pmt_tutorial_typeres-5df542dd6b0289a352292fec2fc38f68.png"}}]);