"use strict";(self.webpackChunkhc_documentation=self.webpackChunkhc_documentation||[]).push([[8196],{5680:(e,n,r)=>{r.d(n,{xA:()=>f,yg:()=>p});var i=r(6540);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,i,t=function(e,n){if(null==e)return{};var r,i,t={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var s=i.createContext({}),c=function(e){var n=i.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},f=function(e){var n=c(e.components);return i.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,s=e.parentName,f=o(e,["components","mdxType","originalType","parentName"]),d=c(r),m=t,p=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?i.createElement(p,l(l({ref:n},f),{},{components:r})):i.createElement(p,l({ref:n},f))}));function p(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,l=new Array(a);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[d]="string"==typeof e?e:t,l[1]=o;for(var c=2;c<a;c++)l[c]=r[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9467:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=r(8168),t=(r(6540),r(5680));const a={title:"Profil erstellen",categories:["help-page-category-profileworkflow","help-page-subcategory-profileworkflow-create"],layout:"help-detail",language:"de"},l=void 0,o={unversionedId:"define-schema-profile/create-profile/2015-02-15-profile-define",id:"define-schema-profile/create-profile/2015-02-15-profile-define",title:"Profil erstellen",description:"Ein Profil beschreibt die Erweiterung eines Schemas mit Hilfe der Definition von Regeln, die auf Elemente des Datenmodells angewandt werden. Ein Profil wird \xfcber Konsistenz-Bedingungen und Tags definiert, die auf Elemente des Schemas angewandt werden. Profile unterst\xfctzen individualisierte Schema-Erweiterungen f\xfcr Fachanwendungen. Ein Datenmodell kann mehrere Profile haben, die kombiniert und gemeinsam genutzt werden k\xf6nnen, um das gew\xfcnschte Ergebnis zu erhalten.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/define-schema-profile/create-profile/2015-02-15-profile-define.md",sourceDirName:"define-schema-profile/create-profile",slug:"/define-schema-profile/create-profile/2015-02-15-profile-define",permalink:"/de/docs/define-schema-profile/create-profile/2015-02-15-profile-define",draft:!1,editUrl:"https://github.com/wetransform/hc-documentation/tree/master/i18n/de/docusaurus-plugin-content-docs/current/define-schema-profile/create-profile/2015-02-15-profile-define.md",tags:[],version:"current",frontMatter:{title:"Profil erstellen",categories:["help-page-category-profileworkflow","help-page-subcategory-profileworkflow-create"],layout:"help-detail",language:"de"},sidebar:"tutorialSidebar",previous:{title:"Verwenden der Kartenansicht",permalink:"/de/docs/create-manage-datasets/map-preview/2014-01-02-map-preview"},next:{title:"Ein Profil kopieren",permalink:"/de/docs/define-schema-profile/copy-profile/2015-02-16-profile-copy"}},s={},c=[],f={toc:c},d="wrapper";function u(e){let{components:n,...a}=e;return(0,t.yg)(d,(0,i.A)({},f,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"Ein ",(0,t.yg)("em",{parentName:"p"},"Profil")," beschreibt die Erweiterung eines Schemas mit Hilfe der Definition von Regeln, die auf Elemente des Datenmodells angewandt werden. Ein Profil wird \xfcber Konsistenz-Bedingungen und Tags definiert, die auf Elemente des Schemas angewandt werden. Profile unterst\xfctzen individualisierte Schema-Erweiterungen f\xfcr Fachanwendungen. Ein Datenmodell kann mehrere Profile haben, die kombiniert und gemeinsam genutzt werden k\xf6nnen, um das gew\xfcnschte Ergebnis zu erhalten."),(0,t.yg)("p",null,"Profile k\xf6nnen unter Nutzung der verf\xfcgbaren Profil-Modellierungs-Werkzeuge in hale connect angelegt werden. Bevor sie ein Profil anlegen k\xf6nnen, m\xfcssen sie das Schema anlegen, auf welchem ihr Profil basieren soll. Folgen sie den hier beschriebenen Schritten, um ein Schema \xfcber das Hochladen einer ",(0,t.yg)("a",{parentName:"p",href:"/de/docs/setup-hc/create-a-schema/2018-01-28-schema-create-file"},"Schemadatei"),", die Angabe einer ",(0,t.yg)("a",{parentName:"p",href:"/de/docs/setup-hc/create-a-schema/2018-01-28-schema-create-external"},"Web-Adresse")," oder durch die Nutzung eines ",(0,t.yg)("a",{parentName:"p",href:"/de/docs/setup-hc/create-a-schema/2018-01-28-schema-preset"},"Schema-Presets")," anzulegen. Auf hale connect existieren Presets f\xfcr alle INSPIRE Modelle und das ISO 19115/19139 Metadaten-Schema."),(0,t.yg)("p",null,"Um ein neues Profil zu erstellen, melden sie sich in der Rolle ","\xab","Superanwender","\xbb"," oder ","\xab","Themenmanager","\xbb"," an und folgen sie diesem Ablauf:"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"Gehen sie auf ","\xab","Schemas","\xbb","."),(0,t.yg)("li",{parentName:"ol"},"Klicken sie auf ","\xab","+ Neues Schema anlegen","\xbb"," am Ende der Schema-Liste, w\xe4hlen sie ","\xab","Profil erstellen","\xbb"," und klicken sie ","\xab","Weiter","\xbb",".",(0,t.yg)("img",{src:r(8816).A,alt:"",title:"Profil erstellen",className:"img-responsive img-inline-help"})),(0,t.yg)("li",{parentName:"ol"},"\xab","Profil-Informationen erg\xe4nzen","\xbb"," Geben sie Name, Autorin oder Autor, Version und Beschreibung ihres Profils an. Wenn sie fertig sind, klicken sie auf ","\xab","Weiter","\xbb","."),(0,t.yg)("li",{parentName:"ol"},"\xab","Schema ausw\xe4hlen","\xbb"," W\xe4hlen sie das Schema, auf dem ihr Profil basieren soll. Klicken sie auf ","\xab","+Schema ausw\xe4hlen","\xbb"," und navigieren sie zu dem gew\xfcnschten Schema. Klicken sie auf das \u201e\xbb\u201c-Symbol, um es auszuw\xe4hlen. Wenn sie fertig sind, klicken sie auf ","\xab","Weiter","\xbb",".",(0,t.yg)("img",{src:r(6872).A,alt:"",title:"Profil anlegen",className:"img-responsive img-inline-help"})),(0,t.yg)("li",{parentName:"ol"},"\xab","Anlegen best\xe4tigen","\xbb"," \xdcberpr\xfcfen sie in einem letzten Schritt ihr Profil. Sie k\xf6nnen f\xfcr ihr Profil ein Thema hinzuf\xfcgen oder anlegen. Wenn sie fertig sind, klicken sie auf ","\xab","Anlegen","\xbb",".")))}u.isMDXComponent=!0},8816:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/Screenshot_2018-10-23 Create new schema-e34a4e1aa4127f95cffe7c60a154adf1.png"},6872:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/Screenshot_2018-10-23 Create new schema_1-bc65482107c9c423bf7e4a230521fc6f.png"}}]);