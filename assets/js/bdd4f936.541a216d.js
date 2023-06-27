"use strict";(self.webpackChunkhc_documentation=self.webpackChunkhc_documentation||[]).push([[366],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=r,p=m["".concat(c,".").concat(d)]||m[d]||f[d]||o;return t?a.createElement(p,i(i({ref:n},u),{},{components:t})):a.createElement(p,i({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8468:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=t(7462),r=(t(7294),t(3905));const o={title:"Questions and answers on hale\xbbstudio",categories:["help-page-category-faq","help-page-subcategory-faq"],layout:"help-detail",language:"en",displayed_sidebar:"tutorialSidebar"},i=void 0,l={unversionedId:"faq/faq_hs/faq-hs-general-4",id:"faq/faq_hs/faq-hs-general-4",title:"Questions and answers on hale\xbbstudio",description:"How can I increase the available memory for memory-intensive transformations?",source:"@site/docs/faq/faq_hs/faq-hs-general-4.md",sourceDirName:"faq/faq_hs",slug:"/faq/faq_hs/faq-hs-general-4",permalink:"/docs/faq/faq_hs/faq-hs-general-4",draft:!1,editUrl:"https://github.com/wetransform/hc-documentation/tree/master/docs/faq/faq_hs/faq-hs-general-4.md",tags:[],version:"current",frontMatter:{title:"Questions and answers on hale\xbbstudio",categories:["help-page-category-faq","help-page-subcategory-faq"],layout:"help-detail",language:"en",displayed_sidebar:"tutorialSidebar"},sidebar:"tutorialSidebar"},c={},s=[],u={toc:s};function f(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",null,"How can I increase the available memory for memory-intensive transformations?"),(0,r.kt)("p",null,"The maximum amount of memory in use can be configured in the file ",(0,r.kt)("code",null,"HALE.ini"),". "),(0,r.kt)("p",null,"hale\xbbstudio uses Java, which needs to reserve a maximum amount of memory to be used.\nDepending on the complexity of a transformation or the size of a data set, hale\xbbstudio\nmay have problems with insufficient memory, surfacing in an ",(0,r.kt)("code",null,"OutOfMemoryError"),"."),(0,r.kt)("p",null,"To increase the available memory, find the configuration file ",(0,r.kt)("code",null,"HALE.ini"),",\nwhich sits either in your installation directory or in the directory where you unpacked the hale studio archive\n(for Mac users go to ",(0,r.kt)("code",null,"Applications >> hale studio"),", right-click and ",(0,r.kt)("code",null,"Show Package Content"),")."),(0,r.kt)("p",null,"Edit HALE.ini and look for a line starting with ",(0,r.kt)("code",null,"-Xmx")," (e.g. ",(0,r.kt)("code",null,"-Xmx2g"),").\nThe value after ",(0,r.kt)("code",null,"-Xmx")," indicates the maximum amount of memory that is available to hale\xbbstudio.\nYou can use the suffix ",(0,r.kt)("code",null,"g")," (e.g. ",(0,r.kt)("code",null,"-Xmx4g"),") to specify a memory size in GiB\nor the suffix ",(0,r.kt)("code",null,"m")," (e.g. ",(0,r.kt)("code",null,"-Xmx4096m"),") to specify a size in MiB."),(0,r.kt)("p",null,"An example of an edited HALE.ini file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"-startup\nplugins/org.eclipse.equinox.launcher_1.5.700.v20200207-2156.jar\n--launcher.library\nplugins/org.eclipse.equinox.launcher.win32.win32.x86_64_1.1.1100.v20190907-0426\n-clean\n-name\nhale studio\n--launcher.defaultAction\nopenFile\n-vmargs\n-Dsun.net.client.defaultConnectTimeout=10000\n-Dsun.net.client.defaultReadTimeout=20000\n-Dcache.level1.enabled=false\n-Dcache.level1.size=0\n-Dcache.level2.enabled=false\n-Dcache.level2.size=0\n-Xmx4g\n")),(0,r.kt)("p",null,"where the amount of available memory has been increased to 4 GiB (line 17)."))}f.isMDXComponent=!0}}]);