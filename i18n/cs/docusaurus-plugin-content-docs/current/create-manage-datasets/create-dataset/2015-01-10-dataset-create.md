---
title: "Vytvoření nového souboru prostorových dat"
categories:
- "help-page-category-datasetworkflow"
- "help-page-subcategory-datasetworkflowcreatedataset"
layout: help-detail
language: cs
---

## Podporované formáty ##

V současné době podporuje platforma hale»connect celou řadu formátů souborů, které lze použít k vytváření datových sad. Limit velikosti pro jeden soubor je 2 GB. Limit velikosti pro přílohy na stránce haleconnect.com je 750 MiB. Datová sada může obsahovat:

**Vektorová data**
  * Podporované formáty vektorových dat zahrnují \*.gml, \*gpkg a \*.shp
  * Pro vytvoření datové sady lze nahrát několik souborů \*.shp
  * Publikování souborů \*.shp, ve kterých první objekt nemá geometrii, momentálně není podporováno
  * Je podporován jeden nebo více souborů \*.gml na datovou sadu
    * INSPIRE, 3A, CityGML, XPlanung a ISYBAU jsou plně podporované
  * \*.gml soubory obsahující prvek gml:GenericMetaData, prázdný prvek gml:boundedBy nebo obloukové geometrie momentálně nejsou podporovány
  * Je podporován jeden nebo více souborů \*.gml na datovou sadu
    Schémata * \*.gpkg lze z hale»studio exportovat jako soubory \*.json.hsd pro použití v hale»connect
    * \*.gpkg je podporován jako zdroj a cíl v online konfiguracích transformace
   * Publikování 3D dat je podporováno.

**Neprostorová data**
  * Mezi podporované datové formáty patří \*.xml

**Rastrová data**
  * Podporované formáty zahrnují \*.png a \*.GeoTIFF
  * V současnosti je podporováno nahrávání jednoho zdroje rastrových dat na datovou sadu
  * Publikování rastrových zdrojů bez vektorových zdrojů není podporováno. V tomto případě je třeba přidat fiktivní vektorový soubor
  * Ve službách prohlížení a stahování je zveřejněna samostatná rastrová vrstva

**Přílohy**
  * Podporované formáty příloh zahrnují \*.pdf, \*.png, \*.GeoTIFF nebo dokonce textury pro 3D data
  * Přílohy s tečkami v názvu souboru nejsou podporovány.
  * Existuje několik způsobů, jak nahrát a přiřadit přílohy k vaší datové sadě
  * Přílohy nahrané při vytváření datové sady se automaticky přidávají do sekce příloh.
  * Soubory příloh nahrané do hale»connect obsahují veřejně dostupný odkaz na soubor přílohy. Odkazy na soubory s přílohou můžete zahrnout do služby stahování Předdefinované datové sady. Odkazy na soubory příloh a externí URL adresy lze zobrazit také v nástroji Feature Explorer Tool.
  * Pro soubory příloh se nevytváří samostatné vrstvy služeb.
  * Navštivte naši stránku nápovědy, kde naleznete [více informací o práci s přílohami](../../references/data/2018-03-10-reference-data-files.md)

**Kombinace těchto datových zdrojů**
  * Datové sady mohou obsahovat \*.gml, rastrové a přílohové datové zdroje. Služby prohlížení a stahování vektorových a rastrových dat jsou publikovány jako samostatné vrstvy.
  * V současnosti není podporováno nahrávání \*.shp s kombinovanými datovými zdroji

## Vytvoření souboru prostorových dat ##

Chcete-li vytvořit novou datovou sadu, dodržujte tento pracovní postup, jste-li přihlášeni jako správce dat nebo správce témat:

1. Přejděte na položku &laquo;Data&raquo; na hlavním panelu nástrojů.
2. Přejděte na &laquo;Vytvořit novou datovou sadu&raquo; ve spodní části seznamu datových sad
3. Vyberte téma, které chcete propojit s vaší datovou sadou.
    * Superuživatelé, kteří patří do více než jedné organizace, si mohou vybrat organizaci, ve které se má datová sada vytvořit. Rozbalovací nabídka dostupných organizací umožňuje superuživatelům vytvářet datové sady pro organizace, do kterých momentálně nejsou přihlášeni.
4. Vyberte zdroj dat. Existuje několik způsobů, jak nahrát soubory patřící do vaší datové sady:
    * Klikněte na položku &laquo;Vybrat soubor(y)&raquo; a přejděte na požadovanou datovou sadu.
    * Klikněte na položku &laquo;Zadat URL adresu (adresy) &raquo; a přidejte požadovanou URL adresu nebo požadavek WFS GetFeature. Chcete-li zadat klíč API v záhlaví autorizace HTTP požadavku na stažení dat přes API, přidejte jej do pole Autorizace.
    * Přesuňte datovou sadu do &laquo;Sem přesuňte soubor(y)&raquo;

   Limit velikosti pro jeden soubor je 2 GB.

   <br/>
   Tip: Abyste zkrátili časy nahrávání a zajistili, že se žádné soubory neztratí, doporučujeme vám soubory komprimovat. Chcete-li nahrát soubor Shapefile, měli byste všechny jednotlivé soubory (\*.shp, \*.dbf, \*.prj, \*.shx, …) zabalit do archívu. Chcete-li nahrát soubor XML, jako například ALKIS, ISYBAU nebo GML, doporučujeme je nahrát jako archív zip.

   <br/>
   Chcete-li nahrát soubory z databáze, klikněte na položku &laquo;Připojit k databázi&raquo; a zadejte následující informace:
       * Typ databáze (v současnosti jsou podporovány MS SQL, PostgreSQL a PostGIS)
       * Hostitel (:Port)
       * Databáze (uveďte název databáze)
       * Uživatelské jméno
       * Heslo
    <br/>
    <img src={require("/images/help/en/upload_from_database.png").default} alt="" title="Nahrávání souborů z databáze" class="img-responsive img-inline-help"/>

5.	Pojmenujte svou datovou sadu. Tento název by vám měl umožnit rychlou a jasnou identifikaci datové sady v systému. Pokud je konfigurace metadat propojeného tématu nastavena na používání názvu při zveřejňování, název se použije také pro metadata množiny dat.
6.	Zadejte metadata pro svou datovou sadu. Zadávání metadat je určeno tématem spojeným s vaší datovou sadou.

    Pokud téma používá editor metadat, zadejte povinná a volitelná metadata pro vaši množinu dat nebo služby:
      * Kategorie metadat zobrazují červený znak s počtem chybějících požadovaných prvků metadat. Kliknutím na šipku na konci libovolné kategorie metadat ji rozbalíte.
      * Povinná vstupní pole jsou označena červenými symboly. Volitelná vstupní pole jsou označena oranžovými symboly.
      * Po zadání všech požadovaných metadat se v kategoriích metadat zobrazí zelená značka zaškrtnutí.
      * Jestliže omylem odstraníte nebo přepíšete předem vyplněné hodnoty a chcete získat původní hodnoty, klikněte na «Vyplnit automaticky».
      Pro uložení metadat klikněte na tlačítko &laquo;Pokračovat&raquo;.<img src={require("/images/help/cs/create-dataset-metadata.png").default} alt="" title="Editor metadat" class="img-responsive img-inline-help"/>

      <br/>
    Jestliže téma používá Znovu publikovat existující metadata:

      * Nahrajte svůj existující soubor metadat.<img src={require("/images/help/cs/create-dataset-metadata_2.png").default} alt="" title="Editor metadat" class="img-responsive img-inline-help"/>

    Jestliže téma používá propojení na existující metadata:

      * Uveďte odkaz na svůj soubor metadat.<img src={require("/images/help/cs/create-dataset-metadata_3.png").default} alt="" title="Editor metadat" class="img-responsive img-inline- nápověda"/>
       <br/>

7. Krok «Nastavit proměnné projektu» se zobrazí, má-li vaše téma konfiguraci transformace a do svého transformačního projektu jste v hale»studio přidali proměnné projektu. hale»connect nabízí uživatelům v tomto volitelném kroku možnost upravit proměnnou transformačního projektu.
8.	V posledním kroku si můžete prohlédnout prováděcí pravidla nakonfigurovaná pro téma. Prováděcí pravidla jsou seznamem všech možných kroků v procesu publikování. Ve výchozím nastavení uvidíte až pět přepínačů pro publikování služeb Stahování a Zobrazování, pro transformaci nové datové sady a pro publikování služeb pro transformovanou datovou sadu. Pokud víte, že musíte na datové sadě před zveřejněním pracovat, deaktivujte zveřejňování služby.

:::Pozor

Zavřete-li prohlížeč nebo kartu, případně kliknete na jiný odkaz, zobrazí se dotaz, zda se má datová sada v rozpracovaném stavu uložit nebo odstranit. Vyberete-li možnost Uložit, můžete v úpravě pokračovat později.

:::
