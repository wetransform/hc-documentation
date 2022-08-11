"use strict";(self.webpackChunkhc_documentation=self.webpackChunkhc_documentation||[]).push([[7586],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),p=a,m=d["".concat(l,".").concat(p)]||d[p]||f[p]||o;return n?r.createElement(m,c(c({ref:t},u),{},{components:n})):r.createElement(m,c({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4261:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={title:"Fragen und Antworten f\xfcr hale\xbbconnect",categories:["help-page-category-faq","help-page-subcategory-faq"],layout:"help-detail",language:"de"},c=void 0,i={unversionedId:"faq/faq_hc/faq-hc-datasets-4",id:"faq/faq_hc/faq-hc-datasets-4",title:"Fragen und Antworten f\xfcr hale\xbbconnect",description:"Werden Bildpyramiden in den Rasterdaten von hale\xbbconnect genutzt?",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/faq/faq_hc/faq-hc-datasets-4.md",sourceDirName:"faq/faq_hc",slug:"/faq/faq_hc/faq-hc-datasets-4",permalink:"/de/docs/faq/faq_hc/faq-hc-datasets-4",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/faq/faq_hc/faq-hc-datasets-4.md",tags:[],version:"current",frontMatter:{title:"Fragen und Antworten f\xfcr hale\xbbconnect",categories:["help-page-category-faq","help-page-subcategory-faq"],layout:"help-detail",language:"de"}},l={},s=[],u={toc:s};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",null,"Werden Bildpyramiden in den Rasterdaten von hale\xbbconnect genutzt?"),(0,a.kt)("p",null,"Rasterdaten werden von hale\xbbconnect intern konvertiert, wobei keine Bildpyramiden erzeugt werden."),(0,a.kt)("p",null,"Im Hintergrund wird immer in eine 32-bit-Bilddatei mit vier Kan\xe4len (RGB + Alpha f\xfcr Transparenz, 8bit je Kanal) konvertiert (mit GDAL). Bei solchen Quellen (auch wenn es PNGs sind) wurden bisher keine Probleme festgestellt. NoData wird unterst\xfctzt sofern diese Information mit GDAL bestimmbar ist. In jedem Fall findet eine \xdcberf\xfchrung in einen Alpha-Kanal statt."))}f.isMDXComponent=!0}}]);