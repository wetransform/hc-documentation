"use strict";(self.webpackChunkhc_documentation=self.webpackChunkhc_documentation||[]).push([[4146],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=c(r),d=a,g=f["".concat(s,".").concat(d)]||f[d]||p[d]||o;return r?n.createElement(g,l(l({ref:t},u),{},{components:r})):n.createElement(g,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8266:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"Questions and answers on hale\xbbstudio",categories:["help-page-category-faq","help-page-subcategory-faq"],layout:"help-detail",language:"en"},l=void 0,i={unversionedId:"faq/faq_hs/faq-hs-general-5",id:"faq/faq_hs/faq-hs-general-5",title:"Questions and answers on hale\xbbstudio",description:"How can I use the File GeoDataBase (FGDB) reader with the command line?",source:"@site/docs/faq/faq_hs/faq-hs-general-5.md",sourceDirName:"faq/faq_hs",slug:"/faq/faq_hs/faq-hs-general-5",permalink:"/docs/faq/faq_hs/faq-hs-general-5",draft:!1,tags:[],version:"current",frontMatter:{title:"Questions and answers on hale\xbbstudio",categories:["help-page-category-faq","help-page-subcategory-faq"],layout:"help-detail",language:"en"}},s={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",null,"How can I use the File GeoDataBase (FGDB) reader with the command line?"),(0,a.kt)("p",null,"The provider ID for the FGDB instance reader is ",(0,a.kt)("code",null,"eu.esdihumboldt.hale.gdal.fgdb.instance.reader")," and can be used after the ",(0,a.kt)("code",null,"-source")," parameter.\nAn example of a command line transformation is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'"C:\\Program Files\\wetransform\\HALE\\HALE.exe" -nosplash -console -application hale.transform -project "C:\\temp\\buildings_fgdb.hale" -source "D:\\FGDB\\INSPIRE.gdb\\a00000001.gdbtable" -providerId eu.esdihumboldt.hale.gdal.fgdb.instance.reader -Scharset UTF-8 -target "buildings.gml.gz" -providerId eu.esdihumboldt.hale.io.gml.writer -gml.geometry.simplify TRUE -contentType eu.esdihumboldt.hale.io.gml.gzip -reportsOut "C:\\temp\\buildings_fgdb.log" \u2013stacktrace\n')))}p.isMDXComponent=!0}}]);