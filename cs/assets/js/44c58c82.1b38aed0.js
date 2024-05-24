"use strict";(self.webpackChunkhc_documentation=self.webpackChunkhc_documentation||[]).push([[4777],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>m});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),u=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},p=function(e){var n=u(e.components);return t.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return r?t.createElement(g,s(s({ref:n},p),{},{components:r})):t.createElement(g,s({ref:n},p))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=r[u];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5800:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var t=r(7462),o=(r(7294),r(3905));const a={title:"Konfigurov\xe1n\xed rol\xed a opr\xe1vn\u011bn\xed",categories:["help-page-category-users","help-page-subcategory-users-general"],layout:"help-detail",language:"cs"},s=void 0,i={unversionedId:"users-roles-orgs/intro-to-users/2015-03-02-users-roles-privileges",id:"users-roles-orgs/intro-to-users/2015-03-02-users-roles-privileges",title:"Konfigurov\xe1n\xed rol\xed a opr\xe1vn\u011bn\xed",description:"Role a opr\xe1vn\u011bn\xed nelze konfigurovat p\u0159es webov\xe9 rozhran\xed aplikace. Nam\xedsto toho je lze upravovat pouze prost\u0159ednictv\xedm souboru JSON, kter\xfd je p\u0159\xedstupn\xfd spr\xe1vci syst\xe9mu. Nastaven\xed pro instance ve\u0159ejn\xe9ho cloudu nelze zm\u011bnit. V p\u0159\xedpad\u011b instanc\xed Private Cloud po\u017e\xe1dejte o zm\u011bnu, kterou chcete prov\xe9st, [kontaktov\xe1n\xedm podpory] (mailto:support@wetransform.to). Jako spr\xe1vce syst\xe9mu pro instanci On Premise prove\u010fte zm\u011bny v rol\xedch a opr\xe1vn\u011bn\xedch podle n\xed\u017ee popsan\xfdch krok\u016f.",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/users-roles-orgs/intro-to-users/2015-03-02-users-roles-privileges.md",sourceDirName:"users-roles-orgs/intro-to-users",slug:"/users-roles-orgs/intro-to-users/2015-03-02-users-roles-privileges",permalink:"/cs/docs/users-roles-orgs/intro-to-users/2015-03-02-users-roles-privileges",draft:!1,editUrl:"https://github.com/wetransform/hc-documentation/tree/master/i18n/cs/docusaurus-plugin-content-docs/current/users-roles-orgs/intro-to-users/2015-03-02-users-roles-privileges.md",tags:[],version:"current",frontMatter:{title:"Konfigurov\xe1n\xed rol\xed a opr\xe1vn\u011bn\xed",categories:["help-page-category-users","help-page-subcategory-users-general"],layout:"help-detail",language:"cs"},sidebar:"tutorialSidebar",previous:{title:"Odstran\u011bn\xed profilu",permalink:"/cs/docs/define-schema-profile/delete-profile/2015-02-11-profile-delete"},next:{title:"Zm\u011bna jazyka aplikace",permalink:"/cs/docs/users-roles-orgs/intro-to-users/2015-03-03-users-switch-language"}},l={},u=[{value:"Opr\xe1vn\u011bn\xed ke zdroj\u016fm",id:"opr\xe1vn\u011bn\xed-ke-zdroj\u016fm",level:3},{value:"Podm\xednky",id:"podm\xednky",level:3},{value:"Example roles.json",id:"example-rolesjson",level:3}],p={toc:u};function c(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Role a opr\xe1vn\u011bn\xed nelze konfigurovat p\u0159es webov\xe9 rozhran\xed aplikace. Nam\xedsto toho je lze upravovat pouze prost\u0159ednictv\xedm souboru JSON, kter\xfd je p\u0159\xedstupn\xfd spr\xe1vci syst\xe9mu. Nastaven\xed pro instance ve\u0159ejn\xe9ho cloudu nelze zm\u011bnit. V p\u0159\xedpad\u011b instanc\xed ",(0,o.kt)("strong",{parentName:"p"},"Private Cloud")," po\u017e\xe1dejte o zm\u011bnu, kterou chcete prov\xe9st, ","[kontaktov\xe1n\xedm podpory]"," (mailto:",(0,o.kt)("a",{parentName:"p",href:"mailto:support@wetransform.to"},"support@wetransform.to"),"). Jako spr\xe1vce syst\xe9mu pro instanci ",(0,o.kt)("strong",{parentName:"p"},"On Premise")," prove\u010fte zm\u011bny v rol\xedch a opr\xe1vn\u011bn\xedch podle n\xed\u017ee popsan\xfdch krok\u016f."),(0,o.kt)("h3",{id:"opr\xe1vn\u011bn\xed-ke-zdroj\u016fm"},"Opr\xe1vn\u011bn\xed ke zdroj\u016fm"),(0,o.kt)("p",null,"Opr\xe1vn\u011bn\xed ke zdroj\u016fm jsou opr\xe1vn\u011bn\xed ud\u011blen\xe1 pro jednotliv\xe9 zdroje nebo typy zdroj\u016f. Pro kontrolu opr\xe1vn\u011bn\xed ke zdroji je pot\u0159ebn\xfd n\xe1zev typu zdroje (nap\u0159. 'U\u017eivatel') a \u010dasto i konkr\xe9tn\xed objekt zdroje nebo ID, kter\xe9 lze pou\u017e\xedt ke kontrole podm\xednek opr\xe1vn\u011bn\xed."),(0,o.kt)("p",null,"Pro ka\u017ed\xfd typ zdroje existuj\xed \u010dty\u0159i p\u0159edvolen\xe1 opr\xe1vn\u011bn\xed, kter\xe1 lze v p\u0159\xedpad\u011b pot\u0159eby roz\u0161\xed\u0159it o dal\u0161\xed vlastn\xed opr\xe1vn\u011bn\xed. \u010cty\u0159i p\u0159edvolen\xe1 opr\xe1vn\u011bn\xed jsou:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u010d\xedst:")," Zdroj si lze \u010d\xedst a prohl\xed\u017eet"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"editovat:")," Zdroj lze upravit"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"vymazat:")," Zdroj lze vymazt"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"vytvo\u0159it:")," Je mo\u017en\xe9 vytvo\u0159it zdroj ur\u010dit\xe9ho typu")),(0,o.kt)("p",null,"Syst\xe9m spravuje r\u016fzn\xe9 typy zdroj\u016f v z\xe1vislosti na tom, kter\xe9 slu\u017eby jsou jeho sou\u010d\xe1st\xed. Typ zdroje je obvykle \u0159\xedzen specifickou slu\u017ebou. Typy zdroj\u016f za\u010d\xednaj\xed podle konvence velk\xfdm p\xedsmenem. Moment\xe1ln\u011b jsou v hale-connect dostupn\xe9 tyto typy zdroj\u016f:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"U\u017eivatel:")," Registrovan\xfd u\u017eivatel"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Organizace:")," Registrovan\xe1 organizace"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Segment:")," Datov\xe1 sada sest\xe1vaj\xedc\xed ze soubor\u016f a metadat"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"T\xe9ma:")," T\xe9ma, kter\xe9 definuje b\u011b\u017en\xe1 nastaven\xed pro datov\xe9 sady"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Sch\xe9ma:")," Datov\xfd model, na kter\xfd lze odkazovat z t\xe9mat"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Projekt transformace:")," Transforma\u010dn\xed projekt studia hale","\xbb")),(0,o.kt)("h3",{id:"podm\xednky"},"Podm\xednky"),(0,o.kt)("p",null,"Po\u017eaduje-li u\u017eivatel p\u0159\xedstup ke zdroji nebo funkc\xedm syst\xe9mu, mus\xed b\xfdt spln\u011bna alespo\u0148 jedna podm\xednka p\u0159\xedstupu. Syst\xe9m podporuje tyto kontroly stavu:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"vlastn\xedk:")," \u2013 U\u017eivatel je vlastn\xedkem zdroje (nikoli organizace)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"organizace:")," \u2013 Zdroj vlastn\xed organizace role nebo jde o samotnou organizaci role"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"podorganizace:")," \u2013 Zdroj vlastn\xed podorganizace nebo je podorganizac\xed organizace role"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"parentOrg:")," Zdroj vlastn\xed nad\u0159azen\xe1 organizace nebo je nad\u0159azenou organizac\xed organizace role"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"ve\u0159ejn\xfd:")," Zdroj je ozna\u010den jako ve\u0159ejn\xfd"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"sd\xedlen\xfd:")," Zdroj je sd\xedlen s u\u017eivatelem (obvykle p\u0159\xedstup ke \u010dten\xed)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"spolupracovn\xedk:")," U\u017eivatel je spolupracovn\xedkem zdroje (obvykle p\u0159\xedstup k \xfaprav\xe1m)")),(0,o.kt)("h3",{id:"example-rolesjson"},"Example roles.json"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "anonymous": {\n    "resource": {\n      "Bucket": {\n        "comment": {\n          "requires": "read"\n        },\n        "createNote": {\n          "requires": "read"\n        },\n        "editMetadata": {\n          "requires": "edit"\n        }\n      },\n      "Schema": {\n        "comment": {\n          "requires": "read"\n        },\n        "createNote": {\n          "requires": "read"\n        }\n      },\n      "Theme": {\n        "comment": {\n          "requires": "read"\n        },\n        "createNote": {\n          "requires": "read"\n        },\n        "editMetadata": {\n          "requires": "edit"\n        }\n      },\n      "TransformationProject": {\n        "comment": {\n          "requires": "read"\n        },\n        "createNote": {\n          "requires": "read"\n        },\n        "createTask": {\n          "requires": "edit"\n        },\n        "replyToTask": {\n          "requires": "read"\n        }\n      }\n    },\n    "application": {\n      "awsGrantAccess": false\n    }\n  },\n  "user": {\n    "extends": "anonymous",\n    "label": {\n      "en": "Registered user",\n      "de": "Standardnutzer"\n    },\n    "resources": {\n      "User": {\n        "read": true,\n        "edit": ["self"]\n      },\n      "Organisation": {\n        "read": true\n      }\n    }\n  },\n  "dataManager": {\n    "extends": "user",\n    "label": {\n      "en": "Data manager",\n      "de": "Daten-Manager"\n    },\n    "resources": {\n      "Bucket": {\n        "create": ["organisation"],\n        "read": ["organisation"],\n        "edit": ["organisation"],\n        "delete": ["organisation"]\n      },\n      "Theme": {\n        "read": ["organisation", "parentOrg"]\n      },\n      "Schema": {\n        "read": ["organisation", "parentOrg"]\n      },\n      "TransformationProject": {\n        "read": ["organisation", "parentOrg"]\n      }\n    }\n  },\n  "themeManager": {\n    "extends": "dataManager",\n    "label": {\n      "en": "Theme manager",\n      "de": "Themen-Manager"\n    },\n    "resources": {\n      "Theme": {\n        "create": ["organisation"],\n        "edit": ["organisation"],\n        "delete": ["organisation"],\n        "view": {\n          "requires": "read"\n        }\n      },\n      "Schema": {\n        "create": ["organisation"],\n        "edit": ["organisation"],\n        "delete": ["organisation"],\n        "view": {\n          "requires": "read"\n        }\n      },\n      "TransformationProject": {\n        "create": ["organisation"],\n        "edit": ["organisation"],\n        "delete": ["organisation"],\n        "view": {\n          "requires": "read"\n        }\n      }\n    }\n  },\n  "orgAdmin": {\n    "extends": "themeManager",\n    "label": {\n      "en": "Superuser",\n      "de": "Superanwender"\n    },\n    "resources": {\n      "User": {\n        "create": true,\n        "delete": ["organisation", "suborganisations"],\n        "disable": ["organisation", "suborganisations"],\n        "accessDisabled": true,\n        "accessNotActivated": true\n      },\n      "Organisation": {\n        "create": ["organisation", "suborganisations"],\n        "edit": ["organisation", "suborganisations"],\n        "delete": ["organisation", "suborganisations"],\n        "assignRole": ["organisation", "suborganisations"]\n      },\n      "Bucket": {\n        "create": ["suborganisations"],\n        "read": ["suborganisations"],\n        "edit": ["suborganisations"],\n        "delete": ["suborganisations"]\n      },\n      "Theme": {\n        "create": ["suborganisations"],\n        "edit": ["suborganisations"],\n        "delete": ["suborganisations"]\n      },\n      "Schema": {\n        "create": ["suborganisations"],\n        "edit": ["suborganisations"],\n        "delete": ["suborganisations"]\n      },\n      "TransformationProject": {\n        "create": ["suborganisations"],\n        "read": ["suborganisations"],\n        "edit": ["suborganisations"],\n        "delete": ["suborganisations"]\n      }\n    },\n    "application": {\n      "viewSystemInfo": true\n    }\n  }\n}\n')))}c.isMDXComponent=!0}}]);