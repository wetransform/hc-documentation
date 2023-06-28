"use strict";(self.webpackChunkhc_documentation=self.webpackChunkhc_documentation||[]).push([[9568],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5841:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={title:"Q&A 14",categories:["help-page-category-faq","help-page-subcategory-faq"],layout:"help-detail",language:"en",displayed_sidebar:"tutorialSidebar"},i=void 0,c={unversionedId:"faq/faq_hc/faq-hc-schema-2",id:"faq/faq_hc/faq-hc-schema-2",title:"Q&A 14",description:"Map elements using AnyType",source:"@site/docs/faq/faq_hc/faq-hc-schema-2.md",sourceDirName:"faq/faq_hc",slug:"/faq/faq_hc/faq-hc-schema-2",permalink:"/docs/faq/faq_hc/faq-hc-schema-2",draft:!1,editUrl:"https://github.com/wetransform/hc-documentation/tree/master/docs/faq/faq_hc/faq-hc-schema-2.md",tags:[],version:"current",frontMatter:{title:"Q&A 14",categories:["help-page-category-faq","help-page-subcategory-faq"],layout:"help-detail",language:"en",displayed_sidebar:"tutorialSidebar"},sidebar:"tutorialSidebar",previous:{title:"Q&A 13",permalink:"/docs/faq/faq_hc/faq-hc-schema-1"},next:{title:"Q&A 15",permalink:"/docs/faq/faq_hc/faq-hc-services-1"}},s={},l=[],p={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",null,"Map elements using AnyType"),(0,a.kt)("p",null,"The XML Schema type ",(0,a.kt)("inlineCode",{parentName:"p"},"anyType")," allows the content of the element to be literally anything.\nThat's a problem for hale, as it doesn't know which kind of value or structure is expected there.\nAlso, it is not really feasible to just offer any possible value or type as content.\nWe had this problem also in a project we were doing, thus we decided to make this configurable for such cases.\nSadly the efforts we could spend on that did not include any support in the User Interface, so adapting the hale project for that is a manual process.\nWhat you need to do is to add a setting ",(0,a.kt)("inlineCode",{parentName:"p"},"customTypeContent")," to the settings of the XML Schema Reader in the hale project file (XML format, save as ",(0,a.kt)("inlineCode",{parentName:"p"},".halex")," to edit).\nHere is an example of the schema reader configuration in an existing project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<resource action-id="eu.esdihumboldt.hale.io.schema.read.target" provider-id="eu.esdihumboldt.hale.io.xsd.reader">\n    <complex-setting name="customTypeContent">\n        <xsd:typeContentConfig xmlns:xsd="http://www.esdi-humboldt.eu/hale/io/xsd">\n            <core:list xmlns:core="http://www.esdi-humboldt.eu/hale/core">\n                <core:entry>\n                    <xsd:association>\n                        <xsd:property>\n                            <core:list>\n                                <core:entry>\n                                    <core:name namespace="http://www.opengis.net/om/2.0">OM_ObservationType</core:name>\n                                </core:entry>\n                                <core:entry>\n                                    <core:name namespace="http://www.opengis.net/om/2.0">result</core:name>\n                                </core:entry>\n                            </core:list>\n                        </xsd:property>\n                        <xsd:config>\n                            <xsd:typeContent mode="elements">\n                                <xsd:elements>\n                                    <core:list>\n                                        <core:entry>\n                                            <core:name namespace="http://www.opengis.net/swe/2.0">Quantity</core:name>\n                                        </core:entry>\n                                    </core:list>\n                                </xsd:elements>\n                            </xsd:typeContent>\n                        </xsd:config>\n                    </xsd:association>\n                </core:entry>\n            </core:list>\n        </xsd:typeContentConfig>\n    </complex-setting>\n    <setting name="resourceId">110e79da-ba08-4759-8cea-8102b0850dc0</setting>\n    <setting name="source">resource1/EF_OF_4.xsd</setting>\n    <setting name="charset">UTF-8</setting>\n    <setting name="contentType">eu.esdihumboldt.hale.io.xsd</setting>\n</resource>\n')),(0,a.kt)("p",null,"In the example the property ",(0,a.kt)("inlineCode",{parentName:"p"},"result")," of the type ",(0,a.kt)("inlineCode",{parentName:"p"},"ObservationType")," is configured that it may contain the element ",(0,a.kt)("inlineCode",{parentName:"p"},"Quantity"),"."))}d.isMDXComponent=!0}}]);