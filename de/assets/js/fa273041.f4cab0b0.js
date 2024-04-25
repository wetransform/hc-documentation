"use strict";(self.webpackChunkhc_documentation=self.webpackChunkhc_documentation||[]).push([[2095],{3905:(e,n,r)=>{r.d(n,{Zo:()=>d,kt:()=>p});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=t.createContext({}),l=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},d=function(e){var n=l(e.components);return t.createElement(u.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=l(r),p=i,m=c["".concat(u,".").concat(p)]||c[p]||g[p]||a;return r?t.createElement(m,s(s({ref:n},d),{},{components:r})):t.createElement(m,s({ref:n},d))}));function p(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=c;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var l=2;l<a;l++)s[l]=r[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}c.displayName="MDXCreateElement"},9461:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var t=r(7462),i=(r(7294),r(3905));const a={title:"Rollen und Zugriffsrechte konfigurieren",categories:["help-page-category-users","help-page-subcategory-users-general"],layout:"help-detail",language:"de",sidebar_position:2},s=void 0,o={unversionedId:"users-roles-orgs/intro-to-users/2015-03-02-users-roles-privileges",id:"users-roles-orgs/intro-to-users/2015-03-02-users-roles-privileges",title:"Rollen und Zugriffsrechte konfigurieren",description:"Rollen und Zugriffsrechte k\xf6nnen nicht \xfcber die Weboberfl\xe4che konfiguriert werden. Sie werden \xfcber eine nur f\xfcr die Systemadministration zug\xe4ngliche JSON-Datei konfiguriert. Diese Datei kann auf Anfrage f\xfcr Private-Cloud- und On-Premise-Instanzen angepasst werden.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/users-roles-orgs/intro-to-users/2015-03-02-users-roles-privileges.md",sourceDirName:"users-roles-orgs/intro-to-users",slug:"/users-roles-orgs/intro-to-users/2015-03-02-users-roles-privileges",permalink:"/de/docs/users-roles-orgs/intro-to-users/2015-03-02-users-roles-privileges",draft:!1,editUrl:"https://github.com/wetransform/hc-documentation/tree/master/i18n/de/docusaurus-plugin-content-docs/current/users-roles-orgs/intro-to-users/2015-03-02-users-roles-privileges.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Rollen und Zugriffsrechte konfigurieren",categories:["help-page-category-users","help-page-subcategory-users-general"],layout:"help-detail",language:"de",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Wechsel der Anzeigesprache",permalink:"/de/docs/users-roles-orgs/intro-to-users/2015-03-03-users-switch-language"},next:{title:"Selbstregistrierung",permalink:"/de/docs/users-roles-orgs/registration/2015-03-10-users-register"}},u={},l=[{value:"Zugriff auf Ressourcen",id:"zugriff-auf-ressourcen",level:3},{value:"Bedingungen",id:"bedingungen",level:3},{value:"Beispiel roles.json",id:"beispiel-rolesjson",level:3}],d={toc:l};function g(e){let{components:n,...r}=e;return(0,i.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Rollen und Zugriffsrechte k\xf6nnen nicht \xfcber die Weboberfl\xe4che konfiguriert werden. Sie werden \xfcber eine nur f\xfcr die Systemadministration zug\xe4ngliche JSON-Datei konfiguriert. Diese Datei kann auf ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@wetransform.to"},"Anfrage")," f\xfcr ",(0,i.kt)("strong",{parentName:"p"},"Private-Cloud- und On-Premise-Instanzen")," angepasst werden. "),(0,i.kt)("h3",{id:"zugriff-auf-ressourcen"},"Zugriff auf Ressourcen"),(0,i.kt)("p",null,"Die Konfiguration, welche Zugriffsrechte mit einer Rolle verbunden sind, erfolgt \xfcber die Zuordung von Schl\xfcsseln zu jeder Art des Zugriffs auf vom System verwaltete Ressourcen. Die Zugriffsarten sind:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"read:")," Ressource darf gelesen werden."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"edit:")," Ressoruce darf bearbeitet werden."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"delete:")," Ressource darf gel\xf6scht werden."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"create:")," Ressource des Typs darf erstellt werden.")),(0,i.kt)("p",null,"Das System verwaltet viele verschiedene Arten von Ressourcen. Jeder Ressourcentyp wird von einem eigenen Dienst verwaltet. Die folgenden Ressourcen-Arten sind standardm\xe4\xdfig im System konfiguriert:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"User:")," Eine Anwenderin, ein Anwender"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Organisation:")," Eine Organisation"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Bucket:")," Ein Datensatz mit dazugeh\xf6rigen Metadaten und Dateien"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Theme:")," Ein Datenthema, dem Datens\xe4tze zugeordnet werden"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Schema:")," Ein Datenmodell, aus dem Objektarten einem Thema zugeordnet werden"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"TransformationProject:")," Ein hale studio-Transformationsprojekt")),(0,i.kt)("h3",{id:"bedingungen"},"Bedingungen"),(0,i.kt)("p",null,"Wenn eine Benutzerin oder ein Benutzer Zugriff auf eine Ressource anfragt, muss mindestens eine definierte Zugriffsbedingung f\xfcr die Art des Zugriffs auf diese Ressource erf\xfcllt sein. Das System unterst\xfctzt die folgenden Bedingungstypen:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"owner:")," - Die Benutzerin oder der Benutzer ist der Besitzer der Ressource (keine Organsation)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"organisation:")," - Die Ressource ist im Besitz der Rolle ","\xab","Organisation","\xbb"," oder ist die Rolle ","\xab","Organisation","\xbb"," selbst."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"suborganisations:")," - Die Ressource ist im Besitz einer Unterorganisation oder ist eine Unterorganisation der Rolle ","\xab","Organisation","\xbb","."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"parentOrg:")," Die Ressource ist im Besitz einer Eltern-Organisation oder ist eine Eltern-Organsation der Rolle ","\xab","Organisation","\xbb","."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"public:")," Die Ressource ist als \xf6ffentlich gekennzeichnet."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"shared:")," Die Ressource wurde mit der Benutzerin oder dem Benutzer geteilt (in der Regel Leserechte)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"collaborator:")," Die Benutzerin oder der Benutzer arbeitet an der Ressource mit (in der Regel Schreibrechte).")),(0,i.kt)("h3",{id:"beispiel-rolesjson"},"Beispiel roles.json"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "anonymous": {\n    "resource": {\n      "Bucket": {\n        "comment": {\n          "requires": "read"\n        },\n        "createNote": {\n          "requires": "read"\n        },\n        "editMetadata": {\n          "requires": "edit"\n        }\n      },\n      "Schema": {\n        "comment": {\n          "requires": "read"\n        },\n        "createNote": {\n          "requires": "read"\n        }\n      },\n      "Theme": {\n        "comment": {\n          "requires": "read"\n        },\n        "createNote": {\n          "requires": "read"\n        },\n        "editMetadata": {\n          "requires": "edit"\n        }\n      },\n      "TransformationProject": {\n        "comment": {\n          "requires": "read"\n        },\n        "createNote": {\n          "requires": "read"\n        },\n        "createTask": {\n          "requires": "edit"\n        },\n        "replyToTask": {\n          "requires": "read"\n        }\n      }\n    },\n    "application": {\n      "awsGrantAccess": false\n    }\n  },\n  "user": {\n    "extends": "anonymous",\n    "label": {\n      "en": "Registered user",\n      "de": "Standardnutzer"\n    },\n    "resources": {\n      "User": {\n        "read": true,\n        "edit": ["self"]\n      },\n      "Organisation": {\n        "read": true\n      }\n    }\n  },\n  "dataManager": {\n    "extends": "user",\n    "label": {\n      "en": "Data manager",\n      "de": "Daten-Manager"\n    },\n    "resources": {\n      "Bucket": {\n        "create": ["organisation"],\n        "read": ["organisation"],\n        "edit": ["organisation"],\n        "delete": ["organisation"]\n      },\n      "Theme": {\n        "read": ["organisation", "parentOrg"]\n      },\n      "Schema": {\n        "read": ["organisation", "parentOrg"]\n      },\n      "TransformationProject": {\n        "read": ["organisation", "parentOrg"]\n      }\n    }\n  },\n  "themeManager": {\n    "extends": "dataManager",\n    "label": {\n      "en": "Theme manager",\n      "de": "Themen-Manager"\n    },\n    "resources": {\n      "Theme": {\n        "create": ["organisation"],\n        "edit": ["organisation"],\n        "delete": ["organisation"],\n        "view": {\n          "requires": "read"\n        }\n      },\n      "Schema": {\n        "create": ["organisation"],\n        "edit": ["organisation"],\n        "delete": ["organisation"],\n        "view": {\n          "requires": "read"\n        }\n      },\n      "TransformationProject": {\n        "create": ["organisation"],\n        "edit": ["organisation"],\n        "delete": ["organisation"],\n        "view": {\n          "requires": "read"\n        }\n      }\n    }\n  },\n  "orgAdmin": {\n    "extends": "themeManager",\n    "label": {\n      "en": "Superuser",\n      "de": "Superanwender"\n    },\n    "resources": {\n      "User": {\n        "create": true,\n        "delete": ["organisation", "suborganisations"],\n        "disable": ["organisation", "suborganisations"],\n        "accessDisabled": true,\n        "accessNotActivated": true\n      },\n      "Organisation": {\n        "create": ["organisation", "suborganisations"],\n        "edit": ["organisation", "suborganisations"],\n        "delete": ["organisation", "suborganisations"],\n        "assignRole": ["organisation", "suborganisations"]\n      },\n      "Bucket": {\n        "create": ["suborganisations"],\n        "read": ["suborganisations"],\n        "edit": ["suborganisations"],\n        "delete": ["suborganisations"]\n      },\n      "Theme": {\n        "create": ["suborganisations"],\n        "edit": ["suborganisations"],\n        "delete": ["suborganisations"]\n      },\n      "Schema": {\n        "create": ["suborganisations"],\n        "edit": ["suborganisations"],\n        "delete": ["suborganisations"]\n      },\n      "TransformationProject": {\n        "create": ["suborganisations"],\n        "read": ["suborganisations"],\n        "edit": ["suborganisations"],\n        "delete": ["suborganisations"]\n      }\n    },\n    "application": {\n      "viewSystemInfo": true\n    }\n  }\n}\n')))}g.isMDXComponent=!0}}]);