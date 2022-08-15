"use strict";(self.webpackChunkhc_documentation=self.webpackChunkhc_documentation||[]).push([[4844],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2342:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={title:"Questions and answers on hale\xbbstudio",categories:["help-page-category-faq","help-page-subcategory-faq"],layout:"help-detail",language:"en"},s=void 0,i={unversionedId:"faq/faq_hs/faq-hs-mapping-1",id:"faq/faq_hs/faq-hs-mapping-1",title:"Questions and answers on hale\xbbstudio",description:"Map elements using AnyType",source:"@site/docs/faq/faq_hs/faq-hs-mapping-1.md",sourceDirName:"faq/faq_hs",slug:"/faq/faq_hs/faq-hs-mapping-1",permalink:"/docs/faq/faq_hs/faq-hs-mapping-1",draft:!1,tags:[],version:"current",frontMatter:{title:"Questions and answers on hale\xbbstudio",categories:["help-page-category-faq","help-page-subcategory-faq"],layout:"help-detail",language:"en"}},c={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",null,"Map elements using ",(0,o.kt)("i",null,"AnyType")),(0,o.kt)("p",null,"The XML Schema type ",(0,o.kt)("i",null,"anyType")," allows the content of the element to be anything you want.\nThat is a problem for hale\xbbstudio, as it doesn't know which kind of value or structure is expected then.\nWe made this configurable for such cases.\nHowever, adapting a hale project for using ",(0,o.kt)("i",null,"anyType")," is a manual process, there is no support in the User Interface."),(0,o.kt)("p",null,"You need to add ",(0,o.kt)("i",null,"customTypeContent")," to the settings of the XML Schema Reader in the hale project file\n(XML format, save as .halex to edit)."),(0,o.kt)("p",null,"The following is an example of the schema reader configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<resource action-id="eu.esdihumboldt.hale.io.schema.read.target" provider-id="eu.esdihumboldt.hale.io.xsd.reader">\n    <complex-setting name="customTypeContent">\n        <xsd:typeContentConfig xmlns:xsd="http://www.esdi-humboldt.eu/hale/io/xsd">\n            <core:list xmlns:core="http://www.esdi-humboldt.eu/hale/core">\n                <core:entry>\n                    <xsd:association>\n                        <xsd:property>\n                            <core:list>\n                                <core:entry>\n                                    <core:name namespace="http://www.opengis.net/om/2.0">OM_ObservationType</core:name>\n                                </core:entry>\n                                <core:entry>\n                                    <core:name namespace="http://www.opengis.net/om/2.0">result</core:name>\n                                </core:entry>\n                            </core:list>\n                        </xsd:property>\n                        <xsd:config>\n                            <xsd:typeContent mode="elements">\n                                <xsd:elements>\n                                    <core:list>\n                                        <core:entry>\n                                            <core:name namespace="http://www.opengis.net/swe/2.0">Quantity</core:name>\n                                        </core:entry>\n                                    </core:list>\n                                </xsd:elements>\n                            </xsd:typeContent>\n                        </xsd:config>\n                    </xsd:association>\n                </core:entry>\n            </core:list>\n        </xsd:typeContentConfig>\n    </complex-setting>\n    <setting name="resourceId">110e79da-ba08-4759-8cea-8102b0850dc0</setting>\n    <setting name="source">resource1/EF_OF_4.xsd</setting>\n    <setting name="charset">UTF-8</setting>\n    <setting name="contentType">eu.esdihumboldt.hale.io.xsd</setting>\n</resource>\n')),(0,o.kt)("p",null,"In the above example the property result of the type ",(0,o.kt)("i",null,"ObservationType")," is configured so that it may contain the element ",(0,o.kt)("i",null,"Quantity"),"."))}u.isMDXComponent=!0}}]);