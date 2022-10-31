---
title: "Třídy objektů profilu"
categories:
- "help-page-category-profileworkflow"
- "help-page-subcategory-profileworkflow-ft"
layout: help-detail
language: cs

---

Sekce Typy funkcí zobrazuje typy funkcí obsažené ve schématu profilu. hale»connect zobrazí pro každý typ funkce jeho název a vlastnosti.

Vyhledávací pole v horní části stránky vám umožňuje filtrovat typy funkcí podle názvu. Přepnutím přepínače *Zobrazit zděděné vlastnosti* zobrazíte další zděděné vlastnosti pro každý typ funkce. Přepnutím přepínače *Zobrazit rozdíl* zobrazíte typy funkcí, které jsou profilem rozšířeny.

Pro každou vlastnost v typu prvku je uveden název a typ dat. Kliknutím na tlačítko » zobrazíte další informace o vlastnosti, například omezení, která jsou na ní definována. <img src={require("/images/help/cs/Screenshot_2018-10-23 Profile details.png").default} alt="" title="Podrobnosti profilu" class="img-responsive img-inline-help"/>

### Nastavení omezení na úrovni typu

Chcete-li, aby byl jeden typ prvku povinný, přepněte přepínač v hlavičce typu prvku. Typ povinného prvku se musí v každém dokumentu vyskytovat alespoň jednou. Obzvláště užitečné je to v GML Feature Collections, chcete-li určit, které typy objektů musí být přítomny.
<img src={require("/images/help/cs/typeLevel.png").default} alt="" title="Nastavení omezení na úrovni typu" class="img-responsive img-inline-help"/>

### Nastavení omezení na úrovni vlastností

Klikněte na ikonu «Upravit» vedle názvu typu prvku a přidejte omezení na úrovni vlastnosti.

Na úrovni vlastnosti lze definovat povinná pole, hodnoty rozsahu, mohutnost a označené hodnoty. Kliknutím na tlačítko » vedle typu dat vlastnosti rozbalte panel.<img src={require("/images/help/cs/allowedValues.png").default} alt="" title="Nastavení omezení na úrovni vlastnictví" class="img-responsive img -inline-help"/>

**Vyžaduje se obsah** Kliknutím na rozbalovací nabídku nastavte vlastnost jako volitelnou nebo povinnou. To je možné jen tehdy, pokud nemovitost dříve nebyla povinná.

**Povolené hodnoty** Tuto funkci lze použít k omezení hodnot, které mohou být přítomny v datech. Toto omezení může zúžit již existující omezení nebo definovat nové omezení. Typickým případem použití je situace, kdy má být v kontextu profilu povolena pouze jedna hodnota seznamu kódů.

Chcete-li zadat platné hodnoty pro libovolný řetězec, zadejte je do textového pole oddělené čárkou.

Chcete-li vybrat platné hodnoty pro pole s číselníkem nebo enumerací, vyberte je ze seznamu možností.

Chcete-li nastavit rozsah hodnot pro číselné pole, zadejte horní a dolní limit. Musí být užší než stávající omezení na úrovni schématu.

**Minimální a maximální počet** Mohutnost může být omezena na úrovni vlastnictví, například od [1..n] do [1..1]. Do textových polí zadejte minimální a maximální hodnoty. Povoleny jsou pouze užší hodnoty, než hodnoty definované na úrovni schématu.

**Označené hodnoty** Tuto funkci lze využít k identifikaci prvků profilu, které se použijí pro generování testovacích sad a vzorových souborů. Chcete-li zadat hodnotu označení, vyberte z rozbalovací nabídky název značky. Do příslušného textového pole zadejte hodnotu. Není možné použít více hodnot označených pro týž název značky.

Existuje několik různých označených hodnot:

1. Označení testovacího případu (ATS-Titel): Vyhrazenou značku „ATS-Titel“ lze použít k označení testovacího případu v testovací sadě ETF.
2. Popis testovacího případu (ATS-Beschreibung): Vyhrazenou značku `ATS-Beschreibung` lze použít k popsání testovacího případu v testovací sadě ETF nebo k popisu manuální kontroly potřebné po přidání značky `Manuelle Prüfung`.
3. Module-id: Vyhrazenou značku `module-id` lze použít k označení, že testovací případ patří do modulu nebo skupiny testů, které jsou seskupeny v souboru ETS.
4. Příklad: Vyhrazenou značku `example` lze použít k uvedení příkladu platné hodnoty prvku.
5. Příklad XML: Vyhrazená značka `example-xml` umožňuje uživatelům uvést fragment XML jako vzorovou hodnotu ve vzorovém exportu dokumentu XML. Značka `example-xml` je dostupná pro jakýkoli typ funkce a jakoukoli vlastnost. Nejprve přidejte označenou hodnotu a vyberte značku `example-xml` z dostupných možností v rozbalovacím seznamu. Potom do upravitelného pole zadejte platný blok kódu XML. Fragmenty musí být platné analyzovatelné XML. Pokud fragment obsahuje jmenné prostory, musí být jmenné prostory definovány ve fragmentu.
6. Manuální kontrola (Manuelle Prüfung): Vyhrazená značka `Manuelle Prüfung` umožňuje uživatelům vyžadovat manuální kontrolu výsledků testů. Soubory ETS, které obsahují testy označené značkou `Manuelle Prüfung`, se po spuštění zobrazí žlutě. Popis manuální kontroly vyžadované koncovými uživateli lze uvést v tagu Testcase-description (ATS-Beschreibung).

Příklady platných fragmentů:

  `<gco:CharacterString xmlns:gco="http://www.isotc211.org/2005/gco">Example-text</gco:CharacterString>`

  `<CharacterString>Example-text</CharacterString>`

Příklad neplatného fragmentu:

  `<gco:CharacterString>Example-text</gco:CharacterString>`

V tomto příkladu se značka `example-xml` používá k uvedení hodnoty řetězce znaků v prvku `gmd:language`.

  <img src={require("/images/help/cs/exampleTag.png").default} alt="" title="Používání vzorové značky" class="img-responsive img-inline-help"/>

Níže uvedený soubor je vzorový export dokumentu XML, který obsahuje hodnotu řetězce znaků uvedenou ve značce `example-xml`.

      <?xml version="1.0" encoding="UTF-8" standalone="no"?>
      <gmd:MD_Metadata xmlns:gmd="http://www.isotc211.org/2005/gmd" xmlns:gco="http://www.isotc211.org/2005/gco" xmlns:gml="http://www.opengis.net/gml/3.2" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.isotc211.org/2005/gmd http://schemas.opengis.net/csw/2.0.2/profiles/apiso/1.0.0/apiso.xsd">
        <gmd:language>
          <gco:CharacterString>ger</gco:CharacterString>
        </gmd:language>
        <gmd:contact>
          <gmd:CI_ResponsibleParty>
            <gmd:role>
              <gmd:CI_RoleCode codeList="http://schemas.opengis.net/iso/19139/20070417/resources/codelist/ML_gmxCodelists.xml#CI_RoleCode" codeListValue="custodian"/>
            </gmd:role>
          </gmd:CI_ResponsibleParty>
        </gmd:contact>
        <gmd:dateStamp>
          <gco:DateTime>2018-05-30T09:00:00</gco:DateTime>
        </gmd:dateStamp>
        <gmd:identificationInfo>
          <gmd:MD_DataIdentification>
            <gmd:citation>
              <gmd:CI_Citation>
                <gmd:title>
                  <gco:CharacterString>example string</gco:CharacterString>
                </gmd:title>
                <gmd:date>
                  <gmd:CI_Date>
                    <gmd:date>
                      <gco:DateTime>2018-05-30T09:00:00</gco:DateTime>
                    </gmd:date>
                    <gmd:dateType>
                      <gmd:CI_DateTypeCode codeList="http://schemas.opengis.net/iso/19139/20070417/resources/codelist/ML_gmxCodelists.xml#CI_DateTypeCode codeListValue="creation"/>
                    </gmd:dateType>
                  </gmd:CI_Date>
                </gmd:date>
              </gmd:CI_Citation>
            </gmd:citation>
            <gmd:abstract>
              <gco:CharacterString>example string</gco:CharacterString>
            </gmd:abstract>
            <gmd:language>
              <gco:CharacterString>example string</gco:CharacterString>
            </gmd:language>
          </gmd:MD_DataIdentification>
        </gmd:identificationInfo>
      </gmd:MD_Metadata>

Po dokončení přidávání omezení k vybranému typu objektu klikněte na tlačítko &laquo;Aktualizovat&raquo;
