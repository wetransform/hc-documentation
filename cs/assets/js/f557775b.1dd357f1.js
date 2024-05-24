"use strict";(self.webpackChunkhc_documentation=self.webpackChunkhc_documentation||[]).push([[57],{3905:(t,e,o)=>{o.d(e,{Zo:()=>u,kt:()=>v});var n=o(7294);function a(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function i(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function l(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(Object(o),!0).forEach((function(e){a(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function r(t,e){if(null==t)return{};var o,n,a=function(t,e){if(null==t)return{};var o,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)o=i[n],e.indexOf(o)>=0||(a[o]=t[o]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)o=i[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(a[o]=t[o])}return a}var s=n.createContext({}),p=function(t){var e=n.useContext(s),o=e;return t&&(o="function"==typeof t?t(e):l(l({},e),t)),o},u=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var o=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,u=r(t,["components","mdxType","originalType","parentName"]),m=p(o),v=a,d=m["".concat(s,".").concat(v)]||m[v]||c[v]||i;return o?n.createElement(d,l(l({ref:e},u),{},{components:o})):n.createElement(d,l({ref:e},u))}));function v(t,e){var o=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=o.length,l=new Array(i);l[0]=m;var r={};for(var s in e)hasOwnProperty.call(e,s)&&(r[s]=e[s]);r.originalType=t,r.mdxType="string"==typeof t?t:a,l[1]=r;for(var p=2;p<i;p++)l[p]=o[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},2298:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var n=o(7462),a=(o(7294),o(3905));const i={title:"Vytvo\u0159en\xed profilu pomoc\xed hale\xbbconnect Profile Management Tool (PMT)",categories:["help-page-category-tutorials","help-page-subcategory-tutorials"],layout:"help-detail",language:"cs"},l=void 0,r={unversionedId:"tutorials/2018-05-05-pmt-tutorial",id:"tutorials/2018-05-05-pmt-tutorial",title:"Vytvo\u0159en\xed profilu pomoc\xed hale\xbbconnect Profile Management Tool (PMT)",description:"hale\xbbconnect Profile Management Tool (PMT)",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/tutorials/2018-05-05-pmt-tutorial.md",sourceDirName:"tutorials",slug:"/tutorials/2018-05-05-pmt-tutorial",permalink:"/cs/docs/tutorials/2018-05-05-pmt-tutorial",draft:!1,editUrl:"https://github.com/wetransform/hc-documentation/tree/master/i18n/cs/docusaurus-plugin-content-docs/current/tutorials/2018-05-05-pmt-tutorial.md",tags:[],version:"current",frontMatter:{title:"Vytvo\u0159en\xed profilu pomoc\xed hale\xbbconnect Profile Management Tool (PMT)",categories:["help-page-category-tutorials","help-page-subcategory-tutorials"],layout:"help-detail",language:"cs"},sidebar:"tutorialSidebar",previous:{title:"P\u0159\xedprava ESRI shapefiles k online transformaci",permalink:"/cs/docs/tutorials/2018-05-04-shp-tutorial"},next:{title:"Conformance class",permalink:"/cs/docs/key-concepts/2015-05-01-terms-conformance-class"}},s={},p=[{value:"<strong>hale\xbbconnect Profile Management Tool (PMT)</strong>",id:"haleconnect-profile-management-tool-pmt",level:3},{value:"<strong>Profily</strong>",id:"profily",level:3},{value:"<strong>Vytvo\u0159en\xed profilu pomoc\xed hale\xbbconnect Profile Management Tool (PMT)</strong>",id:"vytvo\u0159en\xed-profilu-pomoc\xed-haleconnect-profile-management-tool-pmt",level:3},{value:"<strong>Spustiteln\xfd testovac\xed r\xe1mec a Spustiteln\xfd testovac\xed bal\xedk</strong>",id:"spustiteln\xfd-testovac\xed-r\xe1mec-a-spustiteln\xfd-testovac\xed-bal\xedk",level:3},{value:"<strong>Vytvo\u0159en\xed vzorov\xfdch testovac\xedch dat XML a testovac\xed sady</strong>",id:"vytvo\u0159en\xed-vzorov\xfdch-testovac\xedch-dat-xml-a-testovac\xed-sady",level:3}],u={toc:p};function c(t){let{components:e,...i}=t;return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"haleconnect-profile-management-tool-pmt"},(0,a.kt)("strong",{parentName:"h3"},"hale\xbbconnect Profile Management Tool (PMT)")),(0,a.kt)("p",null,"Profily mohou b\xfdt mocn\xfdm n\xe1strojem pro implementaci norem metadat, jako je ISO 19115. \u010casto se v\u0161ak st\xe1vaj\xed velmi slo\u017eit\xfdmi a vy\u017eaduj\xed mnoho pr\xe1ce p\u0159i jejich vytv\xe1\u0159en\xed a \xfadr\u017eb\u011b. Profily jsou \u010dasto pops\xe1ny v tabulk\xe1ch Excelu nebo jin\xfdch n\xe1stroj\xedch se stovkami z\xe1znam\u016f. Zad\xe1v\xe1n\xed a udr\u017eov\xe1n\xed dat, zaji\u0161t\u011bn\xed jejich souladu s valid\xe1tory a n\xe1sledn\xe9 testov\xe1n\xed m\u016f\u017ee b\xfdt deprimuj\xedc\xed. Hale\xbbconnect Profile Management Tool (PMT) v\xe1m umo\u017e\u0148uje profily snadno definovat a spravovat. Profily m\u016f\u017eete implementovat s vynalo\u017een\xedm mal\xe9ho \xfasil\xed pomoc\xed editor\u016f a valid\xe1tor\u016f a zajistit, aby va\u0161e metadata vyhovovala neust\xe1le se m\u011bn\xedc\xedm po\u017eadavk\u016fm."),(0,a.kt)("h3",{id:"profily"},(0,a.kt)("strong",{parentName:"h3"},"Profily")),(0,a.kt)("p",null,"V hale\xbbconnect profil popisuje roz\u0161\xed\u0159en\xed sch\xe9matu prost\u0159ednictv\xedm definice pravidel aplikovan\xfdch na prvky datov\xe9ho modelu. Profil je definov\xe1n omezen\xedmi konzistence a definicemi zna\u010dek, kter\xe9 se aplikuj\xed na prvky sch\xe9matu."),(0,a.kt)("p",null,"Profil konkr\xe9tn\u011b obsahuje n\xe1sleduj\xedc\xed typy informac\xed:"),(0,a.kt)("p",null,"  ",(0,a.kt)("strong",{parentName:"p"},"Typov\xe1 povinnost")),(0,a.kt)("p",null,"   Povinnost typu umo\u017e\u0148uje u\u017eivatel\u016fm ur\u010dit, zda se typ mus\xed nach\xe1zet v datov\xe9 sad\u011b. Profily mohou m\xedt dodate\u010dn\xe1 pravidla nebo p\u0159\xedsn\u011bj\u0161\xed pravidla ne\u017e p\u016fvodn\xed sch\xe9ma. "),(0,a.kt)("img",{src:o(3178).Z,alt:"Setting type obligation",title:"Povinnost typu nastaven\xed",class:"img-responsive img-inline-help"}),(0,a.kt)("p",null,"  ",(0,a.kt)("strong",{parentName:"p"},"Povinnost atribut\u016f")),(0,a.kt)("p",null,"   Povinnost atributu umo\u017e\u0148uje u\u017eivatel\u016fm ur\u010dit, zda atribut mus\xed b\xfdt p\u0159\xedtomen v datov\xe9 sad\u011b. Zde je n\u011bkolik p\u0159\xedklad\u016f:"),(0,a.kt)("p",null,"   Vy\u017eadovat, aby byl obsah p\u0159\xedtomen ve vlastnosti (srovnej p\u0159\xedznak nulovatelnosti) ",(0,a.kt)("img",{src:o(4718).Z,alt:"Requiring content in an attribute",title:"Vy\u017eaduje se obsah v atributu",class:"img-responsive img-inline-help"})),(0,a.kt)("p",null,"   Nastavte povolenou maxim\xe1ln\xed a minim\xe1ln\xed mohutnost nap\u0159. od neomezen\xe9ho ve sch\xe9matu p\u0159esn\u011b po 1 ",(0,a.kt)("img",{src:o(3322).Z,alt:"Setting allowed maximum and minimum cardinality",title:"Nastaven\xed povolen\xe9 maxim\xe1ln\xed a minim\xe1ln\xed mohutnosti",class:"img-responsive img-inline-help"})),(0,a.kt)("p",null,"  ",(0,a.kt)("strong",{parentName:"p"},"Omezen\xed dom\xe9ny")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Omezen\xed dom\xe9ny umo\u017e\u0148uj\xed u\u017eivatel\u016fm spravovat specifick\xe9 \u010d\xedseln\xedky a v p\u0159\xedpad\u011b pot\u0159eby odstra\u0148ovat hodnoty \u010d\xedseln\xedk\u016f. Omezen\xed dom\xe9ny lze pou\u017e\xedt tak\xe9 pro v\xfd\u010det povolen\xfdch hodnot. <img src={require("/images/help/cs/pmt_tutorial_domain.png").default} alt="Domain restrictions" title="Omezen\xed dom\xe9ny" class="img-responsive img-inline-help"/>\n')),(0,a.kt)("p",null,"  ",(0,a.kt)("strong",{parentName:"p"},"Typov\xe1 omezen\xed")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Typov\xe1 omezen\xed mohou b\xfdt pou\u017eita k vy\u017eadov\xe1n\xed ur\u010dit\xe9ho typu vlastnosti tam, kde je jinak povoleno v\xedce typ\u016f, nap\u0159. omezen\xed mo\u017enost\xed nebo libovoln\xe9 typy <img src={require("/images/help/cs/pmt_tutorial_typeres.png").default} alt="Restricting property types" title="Omezen\xed typ\u016f vlastnost\xed" class="img-responsive img-inline-help"/>\n')),(0,a.kt)("p",null,"  ",(0,a.kt)("strong",{parentName:"p"},"Omezen\xed konzistence")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Omezen\xed konzistence lze pou\u017e\xedt k testov\xe1n\xed v\xedce prvk\u016f.\nHodnotov\xe9 z\xe1vislosti lze definovat na prvc\xedch profilu, nap\u0159. m\xe1-li prvek A hodnotu X, prvek B mus\xed m\xedt hodnotu Y.\nZ\xe1vislosti existence lze definovat na prvc\xedch profilu, nap\u0159. existuje-li prvek A, prvek B nesm\xed existovat.\nLze definovat i kombinace hodnotov\xfdch a existen\u010dn\xedch z\xe1vislost\xed, nap\u0159. m\xe1-li prvek A hodnotu X, prvek B nesm\xed existovat. <img src={require("/images/help/cs/pmt_tutorial_consistency.png").default} alt="Applying consistency constraints" title="Uplat\u0148uj\xed se omezen\xed konzistence" class="img-responsive img-inline-help"/>\n')),(0,a.kt)("h3",{id:"vytvo\u0159en\xed-profilu-pomoc\xed-haleconnect-profile-management-tool-pmt"},(0,a.kt)("strong",{parentName:"h3"},"Vytvo\u0159en\xed profilu pomoc\xed hale\xbbconnect Profile Management Tool (PMT)")),(0,a.kt)("p",null,"V tomto n\xe1vodu vytvo\u0159\xedte profil zalo\u017een\xfd na Sch\xe9matu aplikace metadat CSW 2.0.2."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"P\u0159ejd\u011bte na ","\xab","Sch\xe9mata","\xbb"," na hlavn\xedm panelu n\xe1stroj\u016f."),(0,a.kt)("li",{parentName:"ol"},"P\u0159ejd\u011bte na polo\u017eku ","\xab","Vytvo\u0159it nov\xe9 sch\xe9ma","\xbb",", ve spodn\xed \u010d\xe1sti seznamu sch\xe9mat vyberte mo\u017enost ","\xab","Vytvo\u0159it profil","\xbb"," a klikn\u011bte na ","\xab","Pokra\u010dovat","\xbb",".",(0,a.kt)("img",{src:o(7656).Z,alt:"",title:"Vytv\xe1\u0159en\xed profilu",class:"img-responsive img-inline-help"})),(0,a.kt)("li",{parentName:"ol"},"P\u0159idejte informace o profilu. D\xe1le uve\u010fte n\xe1zev, autora, verzi a popis sv\xe9ho profilu. Po dokon\u010den\xed klikn\u011bte na ","\xab","Pokra\u010dovat","\xbb","."),(0,a.kt)("li",{parentName:"ol"},"Vyberte sch\xe9ma, na kter\xe9m bude zalo\u017een v\xe1\u0161 profil. Klikn\u011bte na ","\xab","+Vybrat sch\xe9ma","\xbb"," a p\u0159ejd\u011bte na sch\xe9ma aplikace CSW 2.0.2 Metadata na hale>>connect. Kliknut\xedm na \xbb jej vyberte. Po dokon\u010den\xed klikn\u011bte na ","\xab","Pokra\u010dovat","\xbb",".",(0,a.kt)("img",{src:o(1566).Z,alt:"",title:"Vytv\xe1\u0159en\xed profilu",class:"img-responsive img-inline-help"})),(0,a.kt)("li",{parentName:"ol"},"Potvr\u010fte vytvo\u0159en\xed. V posledn\xedm kroku sv\u016fj profil zkontrolujte. M\xe1te mo\u017enost p\u0159idat nebo vytvo\u0159it pro sv\u016fj profil t\xe9ma. Po dokon\u010den\xed klikn\u011bte na ","\xab","Vytvo\u0159it","\xbb"," pro vygenerov\xe1n\xed profilu.")),(0,a.kt)("p",null,"Po vytvo\u0159en\xed profilu m\u016f\u017eete do sv\xe9ho profilu p\u0159idat povinnosti typu a atribut\u016f, omezen\xed dom\xe9ny a typu a omezen\xed konzistence."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Povinnost p\u0159idat typ")),(0,a.kt)("p",null,"P\u0159ejd\u011bte do sv\xe9ho profilu a klikn\u011bte na ","\xab","Typy funkc\xed","\xbb",". Do vyhled\xe1vac\xedho panelu napi\u0161te \u201eCI_ResponsibleParty\u201c. Posouvejte seznam v\xfdsledk\u016f a p\u0159epn\u011bte p\u0159ep\xedna\u010d vedle ikony \xfaprav, aby byl typ povinn\xfd.",(0,a.kt)("img",{src:o(3216).Z,alt:"Adding a type obligation",title:"Povinnost p\u0159idat typ",class:"img-responsive img-inline-help"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Povinnost p\u0159idat atribut")),(0,a.kt)("p",null,"Chcete-li p\u0159idat povinnost atributu k typu \u201eCI_ResponsibleParty\u201c, klikn\u011bte na ikonu \xfaprav. Kliknut\xedm na zv\xfdrazn\u011bn\xfd text \u201ev\xedce\u201c rozbal\xedte seznam atribut\u016f. Potom klikn\u011bte na \u0161ipku vedle \u201en\xe1zev organizace\u201c a rozbalte seznam mo\u017enost\xed spojen\xfdch s atributem. Chcete-li zm\u011bnit mohutnost atributu, zm\u011b\u0148te minim\xe1ln\xed a/nebo maxim\xe1ln\xed po\u010det zad\xe1n\xedm \u010d\xedsla. Chcete-li v atributu vy\u017eadovat obsah, klikn\u011bte na rozbalovac\xed nab\xeddku vedle ozna\u010den\xed \u201eVy\u017eaduje se obsah\u201c a vyberte hodnotu.",(0,a.kt)("img",{src:o(9002).Z,alt:"Adding an attribute obligation",title:"Povinnost p\u0159idat atribut",class:"img-responsive img-inline-help"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Omezen\xed p\u0159id\xe1n\xed dom\xe9ny")),(0,a.kt)("p",null,'D\xe1le p\u0159idejte omezen\xed dom\xe9ny do atributu \u201erole\u201c. Posu\u0148te se na konec \u201eCI_ResponsibleParty\u201c a klikn\u011bte na \u0161ipku vedle polo\u017eky \u201erole\u201c. Kliknut\xedm na hodnotu ze seznamu k\xf3d\u016f "autor" tuto hodnotu odstran\xedte ze seznamu povolen\xfdch hodnot.',(0,a.kt)("img",{src:o(5849).Z,alt:"Removing a codelist value",title:"Odstran\u011bn\xed hodnoty ze seznamu k\xf3d\u016f ",class:"img-responsive img-inline-help"})),(0,a.kt)("p",null,"Klikn\u011bte na ","\xab","Aktualizovat","\xbb",', aby se zm\u011bny ulo\u017eily do "CI_ResponsibleParty".'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"P\u0159id\xe1n\xed omezen\xed konzistence")),(0,a.kt)("p",null,"Technick\xe9 pokyny INSPIRE vy\u017eaduj\xed existenci MD_Legal Constraints nebo MD_Security Constraints. Do profilu p\u0159id\xe1te omezen\xed konzistence, abyste tento po\u017eadavek prosadili.\nP\u0159ejd\u011bte na ","\xab","Omezen\xed konzistence","\xbb"," \u010d\xe1sti va\u0161eho profilu. Klikn\u011bte na ","\xab","+P\u0159idat podm\xednku konzistence","\xbb",".\nPrvn\xedm krokem je v\xfdb\u011br jednoho nebo n\u011bkolika oper\xe1tor\u016f z rozbalovac\xedho seznamu oper\xe1tor\u016f. Vyberte oper\xe1tor \u201eNEBO\u201c. Potom klikn\u011bte na ","\xab","+Vytvo\u0159it podm\xednku","\xbb",". Do prvn\xedho pole zadejte MD_Metadata a ve sch\xe9matu p\u0159ejd\u011bte s c\xedlem nal\xe9zt n\xe1sleduj\xedc\xed atribut: MD_Metadata.identificationInfo.\nMD_DataIdentification.resourceConstraints.MD_LegalConstraints\nKlikn\u011bte na atribut MD_LegalConstraints a v zobrazen\xe9 rozbalovac\xed nab\xeddce vyberte mo\u017enost \u201eEXISTUJE\u201c. Posu\u0148te se na konec dialogov\xe9ho okna a klikn\u011bte na tla\u010d\xedtko ","\xab","Potvrdit","\xbb"," p\u0159idat podm\xednku. ",(0,a.kt)("img",{src:o(2890).Z,alt:"Creating a condition",title:"Vytv\xe1\u0159en\xed podm\xednky",class:"img-responsive img-inline-help"}),"\nOpakujte v\xfd\u0161e uveden\xfd krok a p\u0159idejte druhou podm\xednku k omezen\xed konzistence. Do prvn\xedho pole zadejte MD_Metadata a ve sch\xe9matu p\u0159ejd\u011bte s c\xedlem nal\xe9zt n\xe1sleduj\xedc\xed atribut:\nMD_Metadata.identificationInfo.MD_DataIdentification.resourceConstraints.MD_SecurityConstraints a p\u0159idejte podm\xednku EXISTS.\nPot\xe9 se p\u0159esu\u0148te na konec dialogov\xe9ho okna a klikn\u011bte na tla\u010d\xedtko ","\xab","Potvrdit","\xbb"," p\u0159idat podm\xednku."),(0,a.kt)("h3",{id:"spustiteln\xfd-testovac\xed-r\xe1mec-a-spustiteln\xfd-testovac\xed-bal\xedk"},(0,a.kt)("strong",{parentName:"h3"},(0,a.kt)("a",{parentName:"strong",href:"http://etf-validator.net/"},"Spustiteln\xfd testovac\xed r\xe1mec")," a ",(0,a.kt)("a",{parentName:"strong",href:"https://docs.etf-validator.net/v2.0/Developer_manuals/Developing_Executable_Test_Suites.html"},"Spustiteln\xfd testovac\xed bal\xedk"))),(0,a.kt)("p",null,"ETF je testovac\xed r\xe1mec s otev\u0159en\xfdm zdrojem pro ov\u011b\u0159ov\xe1n\xed prostorov\xfdch dat, metadat a webov\xfdch slu\u017eeb v Infrastruktur\xe1ch prostorov\xfdch dat (SDI). Pro v\xedce informac\xed nav\u0161tivte n\xe1sleduj\xedc\xed odkaz ",(0,a.kt)("a",{parentName:"p",href:"http://etf-validator.net/"},"o ETF"),"."),(0,a.kt)("p",null,"Soubor ","\xab","Soubory","\xbb"," \u010d\xe1st profilu obsahuje volby pro sta\u017een\xed testovac\xedho bal\xed\u010dku a vzorov\xe9ho dokumentu XML na z\xe1klad\u011b definice profilu."),(0,a.kt)("p",null,"Aby bylo mo\u017en\xe9 vygenerovat vzorov\xfd soubor XML, mus\xed profil obsahovat platn\xe9 vzorov\xe9 hodnoty pro v\u0161echny povinn\xe9 typy funkc\xed a vlastnost\xed. Aby bylo mo\u017en\xe9 st\xe1hnout testovac\xed sadu, mus\xed existovat profil s alespo\u0148 jednou podm\xednkou. Form\xe1t testovac\xed sady je ETF / BaseX kv\u016fli po\u017eadovan\xe9 kompatibilit\u011b s testovac\xedmi sadami AdV a GDI-DE (ve v\xfdvoji) a INSPIRE Reference Validator. Chcete-li pou\u017e\xedt testovac\xed bal\xed\u010dek ETF, mus\xedte jej exportovat a nastavit v instalaci ETF."),(0,a.kt)("p",null,"V n\xe1stroji hale\xbbconnect Profile Management Tool (PMT) lze pou\u017e\xedt ozna\u010den\xe9 hodnoty pro identifikaci prvk\u016f profilu, kter\xe9 se pou\u017eij\xed ke generov\xe1n\xed testovac\xedch souprav a vzorov\xfdch soubor\u016f."),(0,a.kt)("p",null,"Existuje n\u011bkolik r\u016fzn\xfdch ozna\u010den\xfdch hodnot:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Testcase-label (ATS-Titel): Vyhrazenou zna\u010dku testcase-label lze pou\u017e\xedt k ozna\u010den\xed testovac\xedho p\u0159\xedpadu v testovac\xed sad\u011b ETF."),(0,a.kt)("li",{parentName:"ol"},"Testcase-description (ATS-Beschreibung): Vyhrazenou zna\u010dku testcase-description lze pou\u017e\xedt k popisu testovac\xedho p\u0159\xedpadu v testovac\xed sad\u011b ETF."),(0,a.kt)("li",{parentName:"ol"},"Module-id: Vyhrazenou zna\u010dku module-id lze pou\u017e\xedt k ozna\u010den\xed, \u017ee testovac\xed p\u0159\xedpad pat\u0159\xed do modulu nebo skupiny test\u016f, kter\xe9 jsou seskupeny v souboru ETS."),(0,a.kt)("li",{parentName:"ol"},"P\u0159\xedklad: P\u0159\xedklad vyhrazen\xe9 zna\u010dky lze pou\u017e\xedt k uveden\xed p\u0159\xedkladu platn\xe9 hodnoty pro prvek."),(0,a.kt)("li",{parentName:"ol"},"P\u0159\xedklad XML: Vyhrazen\xe1 zna\u010dka example-xml umo\u017e\u0148uje u\u017eivatel\u016fm uv\xe9st fragment XML jako vzorovou hodnotu ve vzorov\xe9m exportu dokumentu XML. Fragmenty mus\xed b\xfdt platn\xe9 analyzovateln\xe9 XML. Pokud fragment obsahuje jmenn\xe9 prostory, mus\xed b\xfdt jmenn\xe9 prostory definov\xe1ny ve fragmentu.\nP\u0159\xedklad platn\xe9ho fragmentu:")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'<gco:CharacterString xmlns:gco="http://www.isotc211.org/2005/gco">Example-text</gco:CharacterString>')),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Voln\u011b definovan\xe9 ozna\u010den\xe9 hodnoty")),(0,a.kt)("h3",{id:"vytvo\u0159en\xed-vzorov\xfdch-testovac\xedch-dat-xml-a-testovac\xed-sady"},(0,a.kt)("strong",{parentName:"h3"},"Vytvo\u0159en\xed vzorov\xfdch testovac\xedch dat XML a testovac\xed sady")),(0,a.kt)("p",null,"Na z\xe1klad\u011b na\u0161eho profilu a vzorov\xe9ho souboru XML pomoc\xed ozna\u010den\xfdch hodnot vytvo\u0159\xedte testovac\xed bal\xed\u010dek. Ozna\u010den\xe9 hodnoty lze pou\u017e\xedt k n\u011bkolika \xfa\u010del\u016fm:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Ozna\u010den\xe9 hodnoty lze pou\u017e\xedt k uveden\xed vzorov\xfdch hodnot, kter\xe9 se vlo\u017e\xed do vzorov\xe9ho souboru XML, kter\xfd je mo\u017en\xe9 st\xe1hnout"),(0,a.kt)("li",{parentName:"ol"},"Ozna\u010den\xe9 hodnoty lze pou\u017e\xedt k uspo\u0159\xe1d\xe1n\xed struktury va\u0161eho souboru ETS")),(0,a.kt)("p",null,"M\u016f\u017eete p\u0159idat ozna\u010denou hodnotu, abyste uvedli vzorovou hodnotu, kter\xe1 se zobraz\xed ve vzorov\xe9m souboru XML."),(0,a.kt)("p",null,"P\u0159ejd\u011bte do sv\xe9ho profilu a klikn\u011bte na ","\xab","Typy funkc\xed","\xbb",". Do vyhled\xe1vac\xedho panelu napi\u0161te \u201eCI_ResponsibleParty\u201c a vra\u0165te se k typu funkce, se kter\xfdm jste p\u0159edt\xedm pracovali. Chcete-li p\u0159idat ozna\u010denou hodnotu k typu \u201eCI_ResponsibleParty\u201c, klikn\u011bte na ikonu \xfaprav. P\u0159ejd\u011bte na atribut \u201eCI_ResponsibleParty\u201c \u201eorganisationName\u201c, rozbalte atribut pomoc\xed \u0161ipky a klikn\u011bte na ","\xab","+P\u0159idat ozna\u010denou hodnotu","\xbb",". Z rozbalovac\xed nab\xeddky hodnot zna\u010dek vyberte n\xe1zev zna\u010dky \u201ep\u0159\xedklad\u201c. Do textov\xe9ho pole zadejte hodnotu: wetransform."),(0,a.kt)("p",null,"Po dokon\u010den\xed klikn\u011bte na ","\xab","Aktualizovat","\xbb"," p\u0159idejte ozna\u010denou hodnotu. Nen\xed mo\u017en\xe9 pou\u017e\xedt v\xedce hodnot ozna\u010den\xfdch pro t\xfd\u017e n\xe1zev zna\u010dky."),(0,a.kt)("p",null,"P\u0159ejd\u011bte do \u010d\xe1sti ","\xab","Soubory","\xbb"," \u010d\xe1sti va\u0161eho profilu. Klikn\u011bte na ","\xab","St\xe1hnout jako testovac\xed bal\xed\u010dek","\xbb",", st\xe1hn\u011bte spustiteln\xfd soubor testovac\xed sady a klikn\u011bte na ","\xab","P\u0159\xedklad dokumentu XML","\xbb"," tla\u010d\xedtko ke sta\u017een\xed vzorov\xe9ho souboru XML, kter\xfd lze pou\u017e\xedt k testov\xe1n\xed va\u0161eho profilu, a uv\xe9st platn\xfd p\u0159\xedklad dat, kter\xe1 spl\u0148uj\xed po\u017eadavky profilu. Otev\u0159ete sta\u017een\xfd vzorov\xfd soubor XML v editoru XML a zobrazte prvek \u201eCI_ResponsibleParty\u201c a hodnotu, kterou jste zadali pomoc\xed ozna\u010den\xe9 hodnoty: wetransform."),(0,a.kt)("p",null,"Chcete-li spustit spustiteln\xfd soubor testovac\xed sady, budete muset nastavit spu\u0161t\u011bnou instanci ETF. Dal\u0161\xed informace naleznete na ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/interactive-instruments/etf-webapp"},"str\xe1nce ETF GitHub"),"."))}c.isMDXComponent=!0},7656:(t,e,o)=>{o.d(e,{Z:()=>n});const n=o.p+"assets/images/Screenshot_2018-10-23 Create new schema-2091b2a589c6fc9e10524dc459f9d5a0.png"},1566:(t,e,o)=>{o.d(e,{Z:()=>n});const n=o.p+"assets/images/Screenshot_2018-10-23 Create new schema_1-ac271d0f4efca1ca3ceb9154557abb19.png"},9002:(t,e,o)=>{o.d(e,{Z:()=>n});const n=o.p+"assets/images/pmt_tutorial_attob-57e5f0822e399d9764cca341120d6b40.png"},3322:(t,e,o)=>{o.d(e,{Z:()=>n});const n=o.p+"assets/images/pmt_tutorial_cardinality-9ac5b4e313b0e5524fdb0782f3986033.png"},4718:(t,e,o)=>{o.d(e,{Z:()=>n});const n=o.p+"assets/images/pmt_tutorial_content-47a63353ff15f716fd1fa1c623ba27fa.png"},2890:(t,e,o)=>{o.d(e,{Z:()=>n});const n=o.p+"assets/images/pmt_tutorial_createcond-6be46f47856e4a70ba9e2b808737b115.png"},5849:(t,e,o)=>{o.d(e,{Z:()=>n});const n=o.p+"assets/images/pmt_tutorial_domres-677d37703663375e592adcd529229f50.png"},3178:(t,e,o)=>{o.d(e,{Z:()=>n});const n=o.p+"assets/images/pmt_tutorial_type-7b85dd8f6897390a430b2b83d7d48008.png"},3216:(t,e,o)=>{o.d(e,{Z:()=>n});const n=o.p+"assets/images/pmt_tutorial_typeob-1921432598a961ec49c4951923b63417.png"}}]);