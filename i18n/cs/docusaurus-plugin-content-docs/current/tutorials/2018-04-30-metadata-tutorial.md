---
title: "Konfigurace metadat na hale»connect"
categories:
- "help-page-category-tutorials"
- "help-page-subcategory-tutorials"
layout: help-detail
language: cs

---

Vytváření metadat je často práce časově náročná, únavná a náchylná k chybám. Platformu hale»connect lze nakonfigurovat tak, aby automaticky generovala metadata vyhovující ISO, INSPIRE a GDI-DE pro datové sady a zobrazování a stahování síťových služeb. hale»connect shromažďuje informace z datových sad, proměnných prostředí, jako jsou data o uživatelském profilu a uživatelsky definovaná pole vlastních metadat, aby se automaticky generovala metadata v souladu s mnoha standardy metadat. Předvolená metadata, která generuje hale»connect, mohou konfigurovat Správci témat a Superuživatelé v sekci metadat tématu. Konfiguraci metadat je třeba nakonfigurovat pouze jednou. Téma obsahující konfiguraci metadat může každý uživatel opakovaně použít pro jakoukoli datovou sadu v organizaci.

Tento tutoriál obsahuje přehled kroků potřebných pro konfiguraci metadat pomocí nástroje pro úpravu metadat hale»connect. Diskutuje se rovněž o ověřovacích testech, které provádí hale»connect, aby se zajistila shoda s metadaty ISO, INSPIRE a GDI-DE. Než začneme, znovu si projděme seznam zdrojů hale»connect, které potřebujeme:

* Správce témat nebo profil Superuživatele hale»connect
* datová sada
* schéma(ta) pro vaši datovou sadu
* téma

*DŮLEŽITÉ: Předvolená metadata se automaticky generují pomocí hale»connect pro datové sady a síťové služby. Konfigurace metadat je volitelná.*

### **Vstupy**

Pro tento tutoriál použijeme:

* Jeden soubor shapefile *Contains OS data © Crown copyright and database right 2018*. Soubor shapefile si můžete stáhnout [zde](https://wetransform.box.com/s/2mnyp9xtjbbk3b5tbc1thg0jmxthgd0e).

### **Konfigurace metadat pomocí Editoru metadat**

**Krok 1: Přidejte vlastní pole metadat**

hale»connect poskytuje uživatelům možnost přidat vlastní pole metadat do sekce Organizace, která se nachází v části Nastavení, a do profilu uživatele. Vlastní pole metadat obsahují hodnoty, které lze použít k předvyplnění prvků metadat. Pro automatické vyplnění metadat shromažďuje hale»connect informace napříč platformou včetně všech hodnot zadaných uživatelem v sekcích profilu uživatele a organizace. V některých případech hale»connect tyto shromážděné hodnoty automaticky aplikuje na pole metadat.

Vytvoříte-li vlastní pole metadat, hale»connect přidá klíč, párovou hodnotu (hodnoty), jež jsou asistentovi automatického doplňování k dispozici v editoru metadat. Dále se podívejme na asistenta automatického doplňování. Nejprve přidejte vlastní pole metadat.

Chcete-li vytvořit nové vlastní pole metadat ve svém organizačním profilu, postupujte podle tohoto pracovního postupu s přihlášením jako Správce témat nebo Superuživatel:

* Klikněte na ikonu Nastavení (symbol ozubeného kolečka) v pravé horní části obrazovky
* Klikněte na sekci Organizace a vyberte ze seznamu svou organizaci
<img src={require("/images/help/cs/Tutorial_organisations.png").default} alt="" title="Stránka profilu organizace" class="img-responsive img-inline-help"/>
* Přejděte do spodní části stránky profilu organizace a klikněte na &laquo;+Přidat pole&raquo; přidat svůj vlastní klíč, párovou hodnotu
    * Klíč a párovou hodnotu, které zadáte, budete mít k dispozici v asistentovi automatického doplňování během konfigurace metadat.
<img src={require("/images/help/cs/Tutorial_custom_fields.png").default} alt="" title="Vytvoření vlastního pole metadat" class="img-responsive img-inline-help"/>

Chcete-li do svého uživatelského profilu přidat vlastní pole, postupujte podle tohoto pracovního postupu a přihlaste se jako správce dat, správce témat nebo superuživatel:

* Klikněte na ikonu profilu uživatele (osoby) v pravém horním rohu obrazovky
* Přejděte do spodní části stránky profilu uživatele a klikněte na &laquo;+Přidat pole&raquo; přidat vlastní dvojici klíč a hodnota
    * Dvojici klíč a hodnota, které zadáte, budete mít k dispozici v asistentovi automatického doplňování během konfigurace metadat.
    * Všichni uživatelé organizace mohou do svých uživatelských profilů přidat vlastní pole metadat. Správci témat a superuživatelé, kteří konfigurují metadata, by se měli dohodnout se správci dat na vlastních polích metadat, která budou implementována. Témata nakonfigurovaná pro používání vlastních polí metadat v uživatelských profilech budou přistupovat k hodnotě z uživatelského profilu osoby, která vytváří sadu dat.

*DŮLEŽITÉ: Vlastní pole metadat jsou volitelná.*

**Krok 2: Vytvořte schéma a téma pro svá data**

Dalším krokem v pracovním postupu konfigurace metadat je vytvoření schématu a tématu pro vaši sadu dat. Vaše datová sada jsou data, pro která chcete vytvořit metadata. hale»connect nabízí několik možností pro vytvoření schématu. Můžete navštívit následující stránky dokumentace, kde se dozvíte více o vytváření schémat:

  * [Vytvořte schéma na základě přednastaveného schématu](../setup-hc/create-a-schema/2018-01-28-schema-preset.md)
  * [Vytvořte schéma nahráním souboru schématu](../setup-hc/create-a-schema/2018-01-28-schema-create-file.md)
  * [Vytvořte schéma pomocí webové adresy](../setup-hc/create-a-schema/2018-01-28-schema-create-external.md)
  * [Vytvořte nové schéma založené na stávajícím schématu](../setup-hc/create-a-schema/2018-01-28-schema-create-existing.md)

V tomto návodu budeme pracovat s možností vytvoření schématu nahráním souboru schématu. Vaše zdrojová data jsou ve formátu shapefile a možnost vytvořit schéma nahráním souboru schématu nám umožňuje jednoduše nahrát shapefile. hale»connect automaticky přečte soubor shapefile a schéma pro vás vygeneruje.

Chcete-li vytvořit nové schéma na základě souboru shapefile, postupujte podle tohoto pracovního postupu přihlášený jako Správce témat nebo Superuživatel:

* Přejděte na „Schémata“ na hlavním panelu nástrojů
*   Přejděte na „Vytvořit nové schéma“ ve spodní části seznamu schémat
*   Vyberte způsob vytvoření. V prvním kroku vyberte možnost „Nahrát soubor se schématem“. Klikněte na &laquo;Pokračovat&raquo;

*   Dále definujte schéma, které chcete použít. Definice schématu je určena metodou vytváření, kterou jste vybrali v předchozím kroku.

    * Klikněte na &laquo;Vybrat soubor(y)&raquo; a přejděte na soubor shapefile umístěný ve složce s daty výukového programu. Přidejte soubor shapefile s názvem WatercourseLink. Rovněž můžete nahrát zazipovanou složku, která obsahuje soubor shapefile. Po dokončení klikněte na tlačítko &laquo;Pokračovat&raquo;<img src={require("/images/help/cs/Tutorial_Upload_schema.png").default} alt="" title="Vytváří se nové schéma" class="img-responsive img-inline-help"/>

    * Doplňte informace. Uveďte název, autora, typ a verzi vašeho schématu. Po dokončení klikněte na &laquo;Pokračovat&raquo;

    * Potvrďte vytvoření. V posledním kroku své schéma zkontrolujte. Máte možnost přidat nebo vytvořit pro své schéma téma. Přepínačem povolíte vytvoření motivu. Po dokončení klikněte na tlačítko „Vytvořit“ pro uložení schématu a vytvoření souvisejícího tématu.

**Krok 3: Nakonfigurujte metadata ve svém tématu**

Téma je opětovně použitelný konfigurační objekt, který se používá k definování společných nastavení pro metadata datových sad, publikování služeb a transformaci. Téma má několik prvků:

* Schéma definované prostřednictvím spojení s množstvím typů funkcí
* Zobrazení vlastností pro pole a typy tohoto schématu, jako jsou aliasy a styly
* Konfigurace metadat, která definuje pole metadat, která je třeba uvést, jakož i přednastavené hodnoty a pravidla automatického doplňování pro vysoký stupeň automatizace
* Spojení s transformačním projektem, který umožňuje konverzi formátu a transformaci schémat
* Konfigurace pro automatizovaný pracovní tok, který lze nastavit tak, aby prováděl publikování služeb a transformaci dat při určitých událostech, jako je aktualizace datové sady

Nástroj pro úpravu metadat se nachází v sekci Metadata vašeho tématu. V tomto kroku použijeme editor metadat k vytvoření opětovně použitelné konfigurace metadat, která využívá vlastní pole, pravidla automatického doplňování a enumerace. Konfigurace metadat se použije pro všechny datové sady, které používají vaše téma. Máte-li metadata, která chcete znovu použít, navštivte stránku [Upravit konfiguraci metadat](../setup-hc/edit-metadata-config/2015-02-10-theme-edit-metadata/) v naší nápovědě, kde naleznete další informace.

Nejprve přejděte na téma, které jste vytvořili během vytváření schématu v kroku 2.

* Přejděte na „Témata“ na hlavním panelu nástrojů
* Do vyhledávacího panelu zadejte název svého tématu. Když vytvoříte téma během vytváření schématu, téma bude mít automaticky stejný název jako vaše schéma. Můžete také použít rozbalovací nabídku vedle položky „Seřadit pořadí“. Chcete-li zobrazit své nejnovější motivy, vyberte možnost „Naposledy upraveno“.
* Vyberte si téma ze seznamu zdrojů
* Klikněte na sekci s názvem Metadata <img src={require("/images/help/cs/Tutorial_metadata.png").default} alt="" title="Metadata" class="img-responsive img-inline-help"/>

Část Metadata obsahuje konfigurační nastavení a upravitelný textový editor JSON, který umožňuje správcům témat a superuživatelům přizpůsobit předvolenou šablonu metadat. Předvolená šablona metadat je seznam objektů kategorie, které se používají k vytváření platných souborů metadat ISO, INSPIRE a GDI-DE. Každý objekt kategorie a seznam polí v něm obsažených uvádí informace potřebné k vyplnění vlastností metadat v podporovaných profilech metadat. Šablona metadat se používá interně k mapování hodnot metadat uvedených uživatelem do profilů metadat. Pole komentáře v každém objektu kategorie identifikuje příslušný profil metadat. Například: ```"comment": "ISO 3.2.1 #360"``` znamená, že objekt splňuje požadavek normy ISO 19115 Geografická informace – profil metadat, [sekce B.3.2.1 položka #360]( https://www.geoportal.de/SharedDocs/Downloads/DE/GDI-DE/Deutsche_Uebersetzung_der_ISO-Felder.html).

Podívejme se na seznam polí v objektu kategorie, protože právě tohle musíte nakonfigurovat.

```json
{
  "name": "md-dataset.citation.title",
  "required": true,
  "minOccurs": 1,
  "maxOccurs": 1,
  "comment": "ISO 3.2.1 #360",
  "label": "Title",
  "description": "name by which the cited resource is known",
  "type": "string",
  "schema": null,
  "defaultValue": null,
  "autofillRule": "{{dataset.name}}",
  "visibility": true,
  "editable": true,
  "targets": {
    "bsp": "md-dataset.citation.title"
  }
}
```

Je důležité si uvědomit, že interní mapování je založeno na poli ``název`` každého objektu kategorie. Hodnoty zadané do pole ```název``` jsou omezeny na následující hodnoty:

*	md-dataset.citation.title
* *md-dataset.identification.\**
    *	md-dataset.identification.abstract
    *	md-dataset.identification.keyword_inspire
    *	md-dataset.identification.keyword_simple
    *	md-dataset.identification.topicCategory
    *	md-dataset.identification.geographicExtent.eastBoundLongitude
    *	md-dataset.identification.geographicExtent.northBoundLatitude
    *	md-dataset.identification.geographicExtent.southBoundLatitude
    *	md-dataset.identification.geographicExtent.westBoundLongitude
    *	md-dataset.identification.topicCategory
    *	md-dataset.identification.constraints.useLimitations
    *	md-dataset.identification.constraints.useConstraints
    *	md-dataset.identification.constraints.accessContraints
    *	*md-dataset.identification.contactForResource.\**
        *	md-dataset.identification.contactForResource.individualName
        *	md-dataset.identification.contactForResource.authorityUrl
        *	md-dataset.identification.contactForResource.organisationName
        *	md-dataset.identification.contactForResource.positionName
        *	md-dataset.identification.contactForResource.roleCode
        *	md-dataset.identification.contactForResource.email
        *	md-dataset.identification.contactForResource.deliveryPoint
        *	md-dataset.identification.contactForResource.postalCode
        *	md-dataset.identification.contactForResource.city
        *	md-dataset.identification.contactForResource.administrativeArea
        *	md-dataset.identification.contactForResource.country
        *	md-dataset.identification.contactForResource.voicePhone
        *	md-dataset.identification.contactForResource.facsimile
*	*md-dataset.contactForMetadata.\**
    *	md-dataset.contactForMetadata.individualName
    *	md-dataset.contactForMetadata.authorityUrl
    *	md-dataset.contactForMetadata.organisationName
    *	md-dataset.contactForMetadata.positionName
    *	md-dataset.contactForMetadata.roleCode
    *	md-dataset.contactForMetadata.email
    *	md-dataset.contactForMetadata.deliveryPoint
    *	md-dataset.contactForMetadata.postalCode
    *	md-dataset.contactForMetadata.city
    *	md-dataset.contactForMetadata.administrativeArea
    *	md-dataset.contactForMetadata.country
    *	md-dataset.contactForMetadata.voicePhone
    *	md-dataset.contactForMetadata.facsimile
*	md-dataset.fileidentifier
*	md-dataset.mdIdentifierLocalId
*	md-dataset.mdIdentifierNamespace


 Pole ```povinné``, ```minOccurs`` a ``maxOccurs`` vyjadřují mohutnost hodnoty metadat a neměla by se měnit. Každé další pole popisuje, jak by měl vstup vypadat a jak by se měl chovat v uživatelském rozhraní, jaký druh obsahu je povolen a zda se mají vložit přednastavené hodnoty nebo odvozené hodnoty.

*	**štítek:** Štítek, který se má uživateli zobrazit vedle vstupního pole.
*   **popis:** Delší vysvětlující text pro pole, který se zobrazí po umístění kurzoru myši nad štítek.
*   **typ:** Primitivní typ dat, které toto pole očekává. Jeden z řetězců, objektů, pole, celého čísla a float.
*   **schéma:** Schéma nebo formát hodnoty, která se má vložit. Jeden z e-mailů, enum, geojson, json, wkt a csv.
*   **defaultValue:** Pevná přednastavená hodnota, která bude vždy přiřazena k poli.
*   **autofillRule:** Dynamická přednastavená hodnota, která bude vždy přiřazena k poli. Tato hodnota se vypočítá z aktuálních proměnných prostředí, jako je uživatel, kontext organizace, datová sada a téma. Kliknete-li na řádek pomocí klíče vlastnosti ```autofillRule```, v pravém horním rohu editoru se zobrazí nápověda pro výběr hodnoty.
*   **upravitelné:** Nastavte na hodnotu ```pravda```, jestliže by správce dat měl mít možnost upravit hodnotu v tomto poli.
*   **cíle:** Jedná se o seznam s pravidly pro mapování pro externí služby, například katalogy metadat. Ve výchozím nastavení by měl být vždy definován alespoň cíl ````bsp```. Právě ```bsp``` hale»connect potřebuje k publikování služeb.

V tomto návodu se zaměříme na následující pole, z nichž každé může uživatel nakonfigurovat pro podporu automatického vytváření metadat v hale»connect:

* ```type```
* ```defaultValue```
* ```autofillRule```
* ```visibility```
* ```editable```
* ```enumValues```

První objekt kategorie v editoru metadat uvádí název datové sady: ```"name": "md-dataset.citation.title"```. V prvním příkladu nastavíme vlastnost ```editable``` na ```false```. Umístěte kurzor vedle vlastnosti ```editable``` a zadejte "false". Tato možnost brání ostatním uživatelům ve vaší organizaci upravovat hodnotu automatického vyplnění.

Objekt druhé kategorie uvádí krátké shrnutí souboru dat: ```"name": "md-dataset.identification.abstract"```. V tomto příkladu nastavíme vlastnost ```visibility``` na ```false```. Umístěte kurzor vedle vlastnosti ```viditelnost``` a zadejte "false". Tato možnost řídí počet polí, která musí uživatelé zobrazit při vytváření datové sady.<img src={require("/images/help/en/Tutorial_editconfig.png").default} alt="" title="Úprava konfiguračních polí " class="img-responsive img-inline -help" />

Objekt třetí kategorie uvádí příklad enumerace: ```"name": "md-dataset.identification.keyword_inspire"```. Pole enumerace vám umožňují vytvářet rozbalovací nabídky v uživatelském rozhraní pro zadávání metadat. Dvojice štítků a hodnot definují štítky zobrazené v uživatelském rozhraní a interně používané mapovací hodnoty. Štítky v enumeraci můžete upravit tak, aby se v uživatelském rozhraní štítky zobrazovaly v jiném jazyce. Přiřazené hodnoty nemůžete upravovat, protože se používají v interním mapování.<img src={require("/images/help/en/Tutorial_enum.png").default} alt="" title="Vytváření enumerace" class="img-responsive img- inline-help" />

Objekt čtvrté kategorie uvádí jednoduchá klíčová slova: ```"name": "md-dataset.identification.keyword_simple"```. V tomto příkladu nastavíme ````defaultValue``` na 'INSPIRE', takže pole bude vždy vyplněno touto hodnotou. Umístěte kurzor vedle vlastnosti ```defaultValue``` a napište "INSPIRE". Pole zůstává upravitelné, takže uživatelé mohou v případě potřeby hodnotu změnit.

V posledním příkladu použijeme vlastní pole metadat k vytvoření pravidel automatického doplňování. V tomto příkladu budeme pracovat s objektem kategorie: ```"name": "md-dataset.contactForMetadata.positionName"```. Umístěte kurzor vedle položky ```autofillRule:```. Asistent automatického doplňování se zobrazí v pravém horním rohu editoru. Klikněte na Organizace v asistentu automatického doplňování a přejděte na Vlastní pole. Klikněte na položku Vlastní pole v asistentovi a klikněte na hodnotu klíče, kterou jste nastavili v kroku 1 tohoto návodu. Metadata se nyní automaticky vyplní hodnotou, kterou jste zadali do svého nově vytvořeného vlastního pole.<img src={require("/images/help/en/Tutorial_autofillAssistant.png").default} alt="" title="Asistent automatického doplňování" class="img- responzivní img-inline-help"/>

Po nakonfigurování šablony v editoru klikněte na tlačítko &laquo;Uložit&raquo; tlačítko ve spodní části stránky.

**Krok 4: Zveřejněte a ověřte svou datovou sadu a metadata**

V posledním kroku vytvoříme datovou sadu a zobrazíme metadata, která jsme v tomto návodu nakonfigurovali. Pomocí našeho nakonfigurovaného tématu můžeme nahrát data a vytvořit metadata v několika jednoduchých krocích.

* Přejděte na &laquo;Data&raquo; na hlavním panelu nástrojů
* Přejděte na &laquo;Vytvořit novou datovou sadu&raquo; ve spodní části seznamu datových sad
* Vyberte svůj motiv, který chcete propojit se souborem dat.
* Klikněte na &laquo;Vybrat soubor(y)&raquo; a přejděte na data výukového programu s názvem [Metadata_TutorialData.zip](https://wetransform.box.com/s/2mnyp9xtjbbk3b5tbc1thg0jmxthgd0e). Pracujete-li s tvarovými soubory, doporučujeme vám, abyste je nahráli v souboru .zip.
*	Pojmenujte svůj soubor dat. Tento název by vám měl umožnit rychlou a jasnou identifikaci souboru dat v systému.
*   Uveďte metadata pro svůj soubor dat. V tomto kroku uvidíme výsledky naší konfigurace metadat. Existuje seznam několika rozšiřitelných panelů, které obsahují volitelné i požadované prvky metadat.
    * Rozbalte první panel „Datová sada – Všeobecné“ a zkontrolujte:
        * Pole Název nelze upravovat
        * Pole Abstract Dataset není viditelné
        * Umístěte kurzor do rozbalovací nabídky INSPIRE Theme, abyste viděli hodnoty enumerace
    * Rozbalte panel „Datová sada – Kontakt pro metadata“ a zkontrolujte:
        * Pole Pozice se vyplní hodnotou pole vlastních metadat

*	V posledním kroku si můžete prohlédnout kroky procesu publikování nakonfigurované pro téma. Uvidíte dva přepínače pro publikování stahování a zobrazování služeb pro vaši datovou sadu. Aktivujte přepínače a klikněte na tlačítko „Vytvořit“;

hale»connect začne okamžitě testovat a ověřovat vaše metadata.

* Klikněte na sekci s názvem Zobrazit služby
* Panel zpráv o testech uvádí seznam souborů PDF, které obsahují výsledky série testů provedených na publikovaných metadatech a službách. Testy kontrolují soulad s normami ISO, GDI-DE a INSPIRE. Další informace naleznete na naší stránce [Zobrazit služby](../references/data/2018-03-08-reference-data-view-services.md) v sekci nápovědy.
* Kliknutím na kteroukoli z uvedených testovacích zpráv zobrazíte výsledky

Konfigurace metadat pomáhá uživatelům vytvářet metadata rychle a efektivně, čímž se výrazně snižuje možnost chyby. Platforma hale»connect shromažďuje informace z celé platformy, aby automatizovala proces generování metadat a vytvářela platná a vyhovující metadata souboru dat a síťových služeb. V tomto návodu jsme konfigurovali metadata v tématu, které může opakovaně používat více uživatelů s libovolnou rolí, a to tak často, jak je potřeba, čímž se výrazně snižuje zátěž požadavků na metadata.
