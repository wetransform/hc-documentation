---
title: "Vytvoření profilu pomocí hale»connect Profile Management Tool (PMT)"
categories:
- "help-page-category-tutorials"
- "help-page-subcategory-tutorials"
layout: help-detail
language: cs

---

### **hale»connect Profile Management Tool (PMT)**

Profily mohou být mocným nástrojem pro implementaci norem metadat, jako je ISO 19115. Často se však stávají velmi složitými a vyžadují mnoho práce při jejich vytváření a údržbě. Profily jsou často popsány v tabulkách Excelu nebo jiných nástrojích se stovkami záznamů. Zadávání a udržování dat, zajištění jejich souladu s validátory a následné testování může být deprimující. Hale»connect Profile Management Tool (PMT) vám umožňuje profily snadno definovat a spravovat. Profily můžete implementovat s vynaložením malého úsilí pomocí editorů a validátorů a zajistit, aby vaše metadata vyhovovala neustále se měnícím požadavkům.

### **Profily**

V hale»connect profil popisuje rozšíření schématu prostřednictvím definice pravidel aplikovaných na prvky datového modelu. Profil je definován omezeními konzistence a definicemi značek, které se aplikují na prvky schématu.

Profil konkrétně obsahuje následující typy informací:

  **Typová povinnost**

   Povinnost typu umožňuje uživatelům určit, zda se typ musí nacházet v datové sadě. Profily mohou mít dodatečná pravidla nebo přísnější pravidla než původní schéma. 
   <img src={require("/images/help/cs/pmt_tutorial_type.png").default} alt="Setting type obligation" title="Povinnost typu nastavení" class="img-responsive img-inline-help"/>

  **Povinnost atributů**

   Povinnost atributu umožňuje uživatelům určit, zda atribut musí být přítomen v datové sadě. Zde je několik příkladů:

   Vyžadovat, aby byl obsah přítomen ve vlastnosti (srovnej příznak nulovatelnosti) <img src={require("/images/help/cs/pmt_tutorial_content.png").default} alt="Requiring content in an attribute" title="Vyžaduje se obsah v atributu" class= "img-responsive img-inline-help"/>

   Nastavte povolenou maximální a minimální mohutnost např. od neomezeného ve schématu přesně po 1 <img src={require("/images/help/cs/pmt_tutorial_cardinality.png").default} alt="Setting allowed maximum and minimum cardinality" title="Nastavení povolené maximální a minimální mohutnosti" class="img-responsive img-inline-help"/>

  **Omezení domény**

    Omezení domény umožňují uživatelům spravovat specifické číselníky a v případě potřeby odstraňovat hodnoty číselníků. Omezení domény lze použít také pro výčet povolených hodnot. <img src={require("/images/help/cs/pmt_tutorial_domain.png").default} alt="Domain restrictions" title="Omezení domény" class="img-responsive img-inline-help"/>

  **Typová omezení**

    Typová omezení mohou být použita k vyžadování určitého typu vlastnosti tam, kde je jinak povoleno více typů, např. omezení možností nebo libovolné typy <img src={require("/images/help/cs/pmt_tutorial_typeres.png").default} alt="Restricting property types" title="Omezení typů vlastností" class="img-responsive img-inline-help"/>

  **Omezení konzistence**

    Omezení konzistence lze použít k testování více prvků.
    Hodnotové závislosti lze definovat na prvcích profilu, např. má-li prvek A hodnotu X, prvek B musí mít hodnotu Y.
    Závislosti existence lze definovat na prvcích profilu, např. existuje-li prvek A, prvek B nesmí existovat.
    Lze definovat i kombinace hodnotových a existenčních závislostí, např. má-li prvek A hodnotu X, prvek B nesmí existovat. <img src={require("/images/help/cs/pmt_tutorial_consistency.png").default} alt="Applying consistency constraints" title="Uplatňují se omezení konzistence" class="img-responsive img-inline-help"/>

### **Vytvoření profilu pomocí hale»connect Profile Management Tool (PMT)**

V tomto návodu vytvoříte profil založený na Schématu aplikace metadat CSW 2.0.2.

1.	Přejděte na &laquo;Schémata&raquo; na hlavním panelu nástrojů.
2.  Přejděte na položku &laquo;Vytvořit nové schéma&raquo;, ve spodní části seznamu schémat vyberte možnost &laquo;Vytvořit profil&raquo; a klikněte na &laquo;Pokračovat&raquo;.
<img src={require("/images/help/cs/Screenshot_2018-10-23 Create new schema.png").default} alt="" title="Vytváření profilu" class="img-responsive img-inline-help"/>
3.  Přidejte informace o profilu. Dále uveďte název, autora, verzi a popis svého profilu. Po dokončení klikněte na &laquo;Pokračovat&raquo;.
4.  Vyberte schéma, na kterém bude založen váš profil. Klikněte na &laquo;+Vybrat schéma&raquo; a přejděte na schéma aplikace CSW 2.0.2 Metadata na hale>>connect. Kliknutím na » jej vyberte. Po dokončení klikněte na &laquo;Pokračovat&raquo;.
<img src={require("/images/help/cs/Screenshot_2018-10-23 Create new schema_1.png").default} alt="" title="Vytváření profilu" class="img-responsive img-inline-help"/>
5. Potvrďte vytvoření. V posledním kroku svůj profil zkontrolujte. Máte možnost přidat nebo vytvořit pro svůj profil téma. Po dokončení klikněte na &laquo;Vytvořit&raquo; pro vygenerování profilu.

Po vytvoření profilu můžete do svého profilu přidat povinnosti typu a atributů, omezení domény a typu a omezení konzistence.

**Povinnost přidat typ**

Přejděte do svého profilu a klikněte na &laquo;Typy funkcí&raquo;. Do vyhledávacího panelu napište „CI_ResponsibleParty“. Posouvejte seznam výsledků a přepněte přepínač vedle ikony úprav, aby byl typ povinný.<img src={require("/images/help/cs/pmt_tutorial_typeob.png").default} alt="Adding a type obligation" title="Povinnost přidat typ" class="img-responsive img-inline-help"/>

**Povinnost přidat atribut**

Chcete-li přidat povinnost atributu k typu „CI_ResponsibleParty“, klikněte na ikonu úprav. Kliknutím na zvýrazněný text „více“ rozbalíte seznam atributů. Potom klikněte na šipku vedle „název organizace“ a rozbalte seznam možností spojených s atributem. Chcete-li změnit mohutnost atributu, změňte minimální a/nebo maximální počet zadáním čísla. Chcete-li v atributu vyžadovat obsah, klikněte na rozbalovací nabídku vedle označení „Vyžaduje se obsah“ a vyberte hodnotu.<img src={require("/images/help/cs/pmt_tutorial_attob.png").default} alt="Adding an attribute obligation" title= "Povinnost přidat atribut" class="img-responsive img-inline-help"/>

**Omezení přidání domény**

Dále přidejte omezení domény do atributu „role“. Posuňte se na konec „CI_ResponsibleParty“ a klikněte na šipku vedle položky „role“. Kliknutím na hodnotu ze seznamu kódů "autor" tuto hodnotu odstraníte ze seznamu povolených hodnot.<img src={require("/images/help/cs/pmt_tutorial_domres.png").default} alt="Removing a codelist value" title="Odstranění hodnoty ze seznamu kódů " class="img-responsive img-inline-help"/>

Klikněte na &laquo;Aktualizovat&raquo;, aby se změny uložily do "CI_ResponsibleParty".

**Přidání omezení konzistence**

Technické pokyny INSPIRE vyžadují existenci MD_Legal Constraints nebo MD_Security Constraints. Do profilu přidáte omezení konzistence, abyste tento požadavek prosadili.
Přejděte na &laquo;Omezení konzistence&raquo; části vašeho profilu. Klikněte na &laquo;+Přidat podmínku konzistence&raquo;.
Prvním krokem je výběr jednoho nebo několika operátorů z rozbalovacího seznamu operátorů. Vyberte operátor „NEBO“. Potom klikněte na &laquo;+Vytvořit podmínku&raquo;. Do prvního pole zadejte MD_Metadata a ve schématu přejděte s cílem nalézt následující atribut: MD_Metadata.identificationInfo.
MD_DataIdentification.resourceConstraints.MD_LegalConstraints
Klikněte na atribut MD_LegalConstraints a v zobrazené rozbalovací nabídce vyberte možnost „EXISTUJE“. Posuňte se na konec dialogového okna a klikněte na tlačítko &laquo;Potvrdit&raquo; přidat podmínku. <img src={require("/images/help/cs/pmt_tutorial_createcond.png").default} alt="Creating a condition" title="Vytváření podmínky" class="img-responsive img-inline-help"/>
Opakujte výše uvedený krok a přidejte druhou podmínku k omezení konzistence. Do prvního pole zadejte MD_Metadata a ve schématu přejděte s cílem nalézt následující atribut:
MD_Metadata.identificationInfo.MD_DataIdentification.resourceConstraints.MD_SecurityConstraints a přidejte podmínku EXISTS.
Poté se přesuňte na konec dialogového okna a klikněte na tlačítko &laquo;Potvrdit&raquo; přidat podmínku.

### **[Spustitelný testovací rámec](http://etf-validator.net/) a [Spustitelný testovací balík](https://docs.etf-validator.net/v2.0/Developer_manuals/Developing_Executable_Test_Suites.html)**

ETF je testovací rámec s otevřeným zdrojem pro ověřování prostorových dat, metadat a webových služeb v Infrastrukturách prostorových dat (SDI). Pro více informací navštivte následující odkaz [o ETF](http://etf-validator.net/).

Soubor &laquo;Soubory&raquo; část profilu obsahuje volby pro stažení testovacího balíčku a vzorového dokumentu XML na základě definice profilu.

Aby bylo možné vygenerovat vzorový soubor XML, musí profil obsahovat platné vzorové hodnoty pro všechny povinné typy funkcí a vlastností. Aby bylo možné stáhnout testovací sadu, musí existovat profil s alespoň jednou podmínkou. Formát testovací sady je ETF / BaseX kvůli požadované kompatibilitě s testovacími sadami AdV a GDI-DE (ve vývoji) a INSPIRE Reference Validator. Chcete-li použít testovací balíček ETF, musíte jej exportovat a nastavit v instalaci ETF.

V nástroji hale»connect Profile Management Tool (PMT) lze použít označené hodnoty pro identifikaci prvků profilu, které se použijí ke generování testovacích souprav a vzorových souborů.

Existuje několik různých označených hodnot:

1. Testcase-label (ATS-Titel): Vyhrazenou značku testcase-label lze použít k označení testovacího případu v testovací sadě ETF.
2. Testcase-description (ATS-Beschreibung): Vyhrazenou značku testcase-description lze použít k popisu testovacího případu v testovací sadě ETF.
3. Module-id: Vyhrazenou značku module-id lze použít k označení, že testovací případ patří do modulu nebo skupiny testů, které jsou seskupeny v souboru ETS.
3. Příklad: Příklad vyhrazené značky lze použít k uvedení příkladu platné hodnoty pro prvek.
4. Příklad XML: Vyhrazená značka example-xml umožňuje uživatelům uvést fragment XML jako vzorovou hodnotu ve vzorovém exportu dokumentu XML. Fragmenty musí být platné analyzovatelné XML. Pokud fragment obsahuje jmenné prostory, musí být jmenné prostory definovány ve fragmentu.
Příklad platného fragmentu:

`<gco:CharacterString xmlns:gco="http://www.isotc211.org/2005/gco">Example-text</gco:CharacterString>`

5. Volně definované označené hodnoty


### **Vytvoření vzorových testovacích dat XML a testovací sady**

Na základě našeho profilu a vzorového souboru XML pomocí označených hodnot vytvoříte testovací balíček. Označené hodnoty lze použít k několika účelům:

1.  Označené hodnoty lze použít k uvedení vzorových hodnot, které se vloží do vzorového souboru XML, který je možné stáhnout
2.  Označené hodnoty lze použít k uspořádání struktury vašeho souboru ETS

Můžete přidat označenou hodnotu, abyste uvedli vzorovou hodnotu, která se zobrazí ve vzorovém souboru XML.

Přejděte do svého profilu a klikněte na &laquo;Typy funkcí&raquo;. Do vyhledávacího panelu napište „CI_ResponsibleParty“ a vraťte se k typu funkce, se kterým jste předtím pracovali. Chcete-li přidat označenou hodnotu k typu „CI_ResponsibleParty“, klikněte na ikonu úprav. Přejděte na atribut „CI_ResponsibleParty“ „organisationName“, rozbalte atribut pomocí šipky a klikněte na &laquo;+Přidat označenou hodnotu&raquo;. Z rozbalovací nabídky hodnot značek vyberte název značky „příklad“. Do textového pole zadejte hodnotu: wetransform.

Po dokončení klikněte na &laquo;Aktualizovat&raquo; přidejte označenou hodnotu. Není možné použít více hodnot označených pro týž název značky.

Přejděte do části &laquo;Soubory&raquo; části vašeho profilu. Klikněte na &laquo;Stáhnout jako testovací balíček&raquo;, stáhněte spustitelný soubor testovací sady a klikněte na &laquo;Příklad dokumentu XML&raquo; tlačítko ke stažení vzorového souboru XML, který lze použít k testování vašeho profilu, a uvést platný příklad dat, která splňují požadavky profilu. Otevřete stažený vzorový soubor XML v editoru XML a zobrazte prvek „CI_ResponsibleParty“ a hodnotu, kterou jste zadali pomocí označené hodnoty: wetransform.

Chcete-li spustit spustitelný soubor testovací sady, budete muset nastavit spuštěnou instanci ETF. Další informace naleznete na [stránce ETF GitHub](https://github.com/interactive-instruments/etf-webapp).
