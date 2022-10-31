---
title: "Vytvoření nové série datových sad"
categories:
- "help-page-category-datasetworkflow"
- "help-page-subcategory-datasetworkflowcreatedatasetseries"
layout: help-detail
language: cs
---


Série datových sad jsou souborem datových sad sdílejících stejnou specifikaci produktu [ISO 19115]. Všechny soubory v sériích datových sad mají stejné schéma a stejný prostorový souřadnicový referenční systém. Pomocí transformačních projektů lze rovněž vytvářet odvozené série datových sad. Série datových sad mají své vlastní INSPIRE, ISO, nebo národní metadata.

hale»connect podporuje vytváření sérií datových sad a umožňuje zákazníkům jednoduše nahrávat větší počet datových sad pomocí dávkového nahrávání.

*Série datových sad jsou povoleny pro jednotlivé organizace. Chcete-li získat další informace o sérii datových sad, kontaktujte nás na adrese info@wetransform.to.*

K vytvoření sérií datových sad lze použít celou řadu formátů souborů. Série datových sad může obsahovat:

### Vektorová data ###
  * Podporované formáty vektorových dat zahrnují \*.gml a \*.shp
  * Multiple \*.shp soubory lze nahrát k vytvoření datové sady
  * Série, které používají soubory \*.shp, mohou být vytvořeny na hale»connect a použity k transformaci dat do série \*.gml, které lze publikovat. Série, které používají soubory \*.shp nelze publikovat.
  * V současnosti je podporováno nahrávání jednoho souboru \*.gml na datovou sadu
    * INSPIRE, 3A, CityGML, XPlanung a ISYBAU jsou plně podporované
  * \*.gml soubory obsahující prvek gml:GenericMetaData, prázdný prvek gml:boundedBy nebo obloukové geometrie momentálně nejsou podporovány

### Neprostorová data ###
  * Mezi podporované datové formáty patří \*.xml 

### Rastrová data ###
  * Podporované formáty zahrnují \*.png a \*.GeoTIFF
  * V současnosti je podporováno nahrávání jednoho zdroje rastrových dat na datovou sadu
  * Publikování rastrových zdrojů bez vektorových zdrojů není podporováno. V tomto případě je třeba přidat fiktivní vektorový soubor
  * Ve službách prohlížení a stahování je zveřejněna samostatná rastrová vrstva

### Přílohy ###
  * Podporované formáty příloh zahrnují \*.pdf, \*.png, \*.GeoTIFF nebo dokonce textury pro 3D data
  * Přílohy s tečkami v názvu souboru nejsou podporovány.
  * Existuje několik způsobů, jak nahrát a přiřadit přílohy k vaší datové sadě
  * Přílohy nahrané při vytváření datové sady se automaticky přidávají do sekce příloh.
  * Soubory příloh nahrané do hale»connect obsahují veřejně dostupný odkaz na soubor přílohy. Odkazy na soubory s přílohou mohou být zahrnuty ve vaší službě stahování předdefinovaných datových sad. Odkazy na soubory příloh a externí URL adresy lze zobrazit také v nástroji Feature Explorer Tool.
  * Pro soubory příloh se nevytváří samostatné vrstvy služeb.
  * Navštivte naši stránku nápovědy, kde naleznete [více informací o práci s přílohami](../../references/data/2018-03-10-reference-data-files.md)

### Kombinace těchto datových zdrojů ###
  * Datové sady mohou obsahovat \*.gml, rastrové a přílohové datové zdroje. Služby prohlížení a stahování vektorových a rastrových dat jsou publikovány jako samostatné vrstvy.
  * V současnosti není podporováno nahrávání \*.shp s kombinovanými datovými zdroji

### **Vytvoření nových sérií datových sad** ###

Chcete-li publikovat série datových sad, dodržujte tento pracovní postup, jestliže jste přihlášeni jako správce témat nebo superuživatel:

1. Vytvořte schéma založené na vašich zdrojových datech a přepnutím přepínače vytvořte téma.
2. Přejděte na své nově vytvořené téma a klikněte na sekci sérií datových sad.
3. V sekci sérií datových sad vašeho tématu přepněte přepínač na *Publikovat souhrnné služby pro všechny datové sady pomocí tohoto tématu*.
4. Ujistěte se, že jste aktivovali WFS v sekci stahovacích služeb vašeho tématu, protože v současné době není možné publikovat série, pokud není nakonfigurováno žádné WFS.
5. Plánujete-li přidat data do série pomocí hromadného nahrávání, klikněte na sekci metadat v tématu a přidejte vzor názvu datové sady pomocí asistenta automatického doplňování, abyste datovým sadám zajistili předem nakonfigurované názvy. Tento krok je volitelný a doporučuje se pro hromadné nahrávání, jestliže potřebujete speciální vzor pojmenování pro své datové sady.

Po nakonfigurování tématu může každý uživatel patřící do vaší organizace nebo podorganizace vaší organizace vytvořit a zveřejnit série datových sad.

1. Přejděte na položku &laquo;Data&raquo; na hlavním panelu nástrojů.
2. Přejděte na &laquo;Vytvořit novou datovou sadu&raquo; ve spodní části seznamu datových sad
3. Vyberte téma s povolenou sérií, které chcete propojit s vaší datovou sadou. Možnost použít hromadné nahrávání se zobrazí, když je vybrané téma povoleno pro sérii.
4. Uživatelé mají možnost vytvořit série datových sad, které obsahují jednu datovou sadu, nebo série datových sad, které obsahují libovolný počet datových sad. Série datových sad jsou automaticky pojmenovány podle následujícího vzoru: Organizace uživatele (název tématu).

    **Série datových sad s jednou datovou sadou:**  
      * Vyberte zdroje dat pro jednotlivou datovou sadu. Existuje několik způsobů, jak nahrát soubory patřící do vaší datové sady:
        * Klikněte na položku &laquo;Vybrat soubor(y)&raquo; a přejděte na požadovanou datovou sadu.
        * Klikněte na položku &laquo;Zadat URL adresu (adresy) &raquo; a přidejte požadovanou URL adresu nebo WFS.
        * Přesuňte datovou sadu do &laquo;Sem přesuňte soubor(y)&raquo;

      * Pojmenujte svou datovou sadu a zadejte všechny požadované prvky metadat. Zadávání metadat je určeno konfigurací metadat v tématu spojeným s vaší datovou sadou.

      * Když se vytvoří série datových sad pomocí jednotlivých souborů, zveřejní se série datových sad, datová sada patřící do série a série datových sad metadat a metadata datových sad. V posledním kroku vytváření sérií datových sad přepněte na *Vytvořit služby*, abyste zveřejnili služby sérií datových sad. Přejděte na datovou sadu obsaženou ve vaší sérii a zveřejněte služby jednotlivé (jednotlivých) datové (datových) sady(sad).

      * Jestliže vaše téma obsahuje konfiguraci transformace, v posledním kroku pracovního postupu se zobrazí pravidla provádění. Můžete aktivovat přepínače pro provedení transformace a vytvoření služeb pro cílové téma s povolenou sérií.


    **Série datových sad pomocí hromadného nahrávání:**
      * Hromadné nahrávání aktivujete přepnutím přepínače. Existuje jen jeden způsob nahrávání souborů pomocí hromadného nahrávání. Pro vytvoření série datových sad pomocí hromadného nahrávání je nutné nahrát soubor zip, který přímo obsahuje datové sady jako soubory zip. <img src={require("/images/help/cs/batch_upload.png").default} alt="batch upload" title="Série datových sad pomocí hromadného nahrávání" class="img-responsive img-inline-help"/>

      * Název datové sady a kroky metadat pro vytváření sérií datových sad pomocí hromadného nahrávání nejsou k dispozici. Doporučujeme vám nakonfigurovat [pravidlo automatického doplňování vzoru názvu datové sady](../../setup-hc/edit-metadata-config/2015-02-10-theme-edit-metadata.md) – ve vašem tématu automaticky pojmenovat datové sady patřící do sérií. Po vytvoření sérií můžete upravit metadata na základě jednotlivých datových sad.

      * Hromadné publikování služeb pro série datových sad pomocí hromadného nahrávání momentálně není podporováno. Když se vytvoří série datových sad pomocí hromadného nahrávání, zveřejní se série datových sad, datové sady patřící do sérií a datové sady sérií metadat a datové sady metadat. Po vytvoření sérií můžete přejít na zdroje pro publikování služeb.

      * Poslední krok v sériích dat pomocí pracovního postupu hromadného nahrávání zobrazuje seznam datových sad přidaných do sérií.

 5. Série datových sad lze zobrazit v seznamu zdrojů datových sad. Série datových sad jsou označena štítkem „Série“. Kliknutím na šipku vedle štítku „Série“ rozbalíte série a zobrazíte jednotlivé zdroje datové sady, které patří do sérií. Navštivte [Zobrazení datových sad v seznamu zdrojů](../../create-manage-datasets/create-dataset/2015-01-08-viewing-resource-list.md) na stránce dokumentace, kde naleznete další informace o práci se seznamem zdrojů a optimalizaci zobrazení polí tak, aby co nejlépe vyhovovaly vašim potřebám.

6. Kliknutím na sérii datové sady přejděte na zdroj. Série datové sady jsou uspořádány podobně jako datové sady. Panel přehledu série datové sady poskytuje souhrnný přehled zdroje včetně informací o vlastnictví a stavového panelu, který zobrazuje stav systému sérií metadat a služeb. Uživatelé mohou upravovat série metadat v sekci metadat a služby sérií v sekcích prohlížení a stahování služeb. Sekce sérií datových sad obsahuje seznam všech datových sad, které patří do sérií. Každá datová sada, která je zveřejněna pomocí tématu povoleného pro série, se přidá do stejných sérií datových sad.

7. Chcete-li odstranit série datových sad, přejděte na série a klepněte na tlačítko &laquo;Vymazat&raquo;. Série datové sady a všechny podmnožiny datových sad se vymažou.
