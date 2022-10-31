---
title: "Úprava konfigurace metadat"
categories:
- "help-page-category-setup-haleconnect"
- "help-page-subcategory-setup-haleconnect-thememetadata"
layout: help-detail
language: cs

---

Konfigurace metadat definuje, kteří správci metadat musí pro všechny zajistit datové sady spojené s tématem. Konfigurace metadat obsahuje pravidla automatického doplňování a předvolené hodnoty, které můžete použít pro téměř úplnou automatizaci zadávání metadat. Když vytvoříte téma, je k dispozici předvolená konfigurace metadat. Tuto předvolenou konfiguraci může upravit pouze správce systému a nelze ji změnit u nasazení ve veřejném cloudu. Používáte-li instanci privátního cloudu, za účelem provedení jakýchkoli změn kontaktujte [podporu](mailto:support@wetransform.to).

Chcete-li upravit konfiguraci metadat, proveďte tyto kroky, jste-li přihlášen jako správce tématu nebo superuživatel organizace:

1. Přejděte na &laquo;Témata&raquo;
1. Vyberte téma, pro které chcete upravit konfiguraci metadat
1. Přejděte na &laquo;Metadata&raquo; Zobrazí se rozšiřitelné panely pro datovou sadu a metadata služby. Vyberte metadata, která chcete konfigurovat, a rozbalte panel.
<img src={require("/images/help/cs/metadata1.png").default} alt="" title="Editor metadat" class="img-responsive img-inline-help"/>
1. Pole «Vzor názvu datové sady» vám pro název datové sady umožňuje definovat pravidlo automatického doplňování. Pravidla automatického doplňování umožňují automatické generování metadat pomocí proměnných. Chcete-li vytvořit pravidlo automatického doplňování, klikněte na pole «Vzor názvu datové sady». Asistent automatického doplňování se zobrazí v pravém horním rohu. Kliknutím na hodnotu v Asistentovi automatického doplňování vložíte pravidlo automatického doplňování. Můžete například chtít automaticky přiřadit hodnotu v atributu datové sady jako název datové sady. V Asistentovi automatického doplňování přejděte na položku Analýza souborů a poté na položku Hodnoty atributů. Vyberte atribut, který obsahuje název datové sady ve vaší datové sadě. Při vytváření datové sady se název datové sady automaticky vyplní hodnotou v datové sadě.
1. V rozbalovací nabídce vyberte zdroj metadat. Dostupné možnosti zahrnují:
      * Použít editor metadat – Tuto možnost vyberte, chcete-li, aby metadata vygenerovalo spojení Hale Connect. Pro definování toho, jak má hale connect generovat metadata, systém poskytuje speciální textový editor. Přednastavená konfigurace metadat zobrazuje prvky metadat vyhovující INSPIRE.
      Rozhodnete-li se použít editor metadat, hale»connect vygeneruje metadata datové sady a služeb na základě vstupu dodaného uživatelem. Pro některá pole, například *Klíčová slova*, hale»connect automaticky aplikuje hodnoty zadané pro metadata datové sady na metadata služby. Chcete-li v metadatech služby použít jiná *Klíčová slova*, zadejte hodnoty do příslušného textového pole.
      <img src={require("/images/help/cs/generate_metadata.png").default} alt="" title="Generovat metadata pomocí hale»connect" class="img-responsive img-inline-help"/>
      * Znovu zveřejnit stávající metadata – Tuto možnost vyberte, chcete-li nahrát svůj stávající soubor metadat při vytváření datové sady. Upozorňujeme, že prvky gml:TimePeriod a gmd:MD_RestrictionCode nejsou momentálně ve stávajících metadatech podporovány.
      Rozhodnete-li se znovu zveřejnit metadata datové sady, hale»connect vygeneruje metadata datové sady na základě kopie uvedené URL adresy nebo souboru.
      <img src={require("/images/help/cs/copy_metadata.png").default} alt="" title="Kopírovat metadata" class="img-responsive img-inline-help"/>
      * Odkaz na stávající metadata – tuto možnost vyberte, chcete-li při vytváření datové sady uvést odkaz na svůj soubor metadat.
      Rozhodnete-li se uvést odkaz na existující metadata, hale»connect vygeneruje metadata datové sady přístupem na uvedenou vzdálenou URL adresu. Upozorňujeme, že prvky gml:TimePeriod a gmd:MD_RestrictionCode nejsou momentálně ve stávajících metadatech podporovány.
      <img src={require("/images/help/cs/remote_url_metadata.png").default} alt="" title="Odkaz na vzdálenou url" class="img-responsive img-inline-help"/>

1. V rozbalovací nabídce vyberte jazyk metadat. Podporovány jsou všechny evropské jazyky.

1. Přepínač Zobrazit editor metadat při vytváření datové sady vám umožňuje řídit, kam se metadata zadávají:
      * Přepínač je aktivní: Zobrazte editor metadat během vytváření datové sady.
      * Přepínač je deaktivován: Během vytváření datové sady editor metadat nezobrazujte. Deaktivace editoru znamená, že uživatelé nemají žádnou kontrolu nad metadaty při počátečním vytváření datové sady, ale přesto mohou později přejít do sekce datové sady -> metadata a vygenerovaná metadata upravit.

1. Jestliže jste se rozhodli použít editor metadat, upravte konfiguraci v textovém editoru dle popisu níže. Po skončení klikněte na položku &laquo;Uložit&raquo;.

Konfiguraci metadat definujete úpravou objektu [JSON](https://en.wikipedia.org/wiki/JSON) ve vloženém textovém editoru pro speciální účely. Tento editor automaticky zkontroluje, zda jsou syntaxe a schéma vašeho konfiguračního souboru platné, a nabízí nápovědu pro pravidla *automatického doplňování*.

:::caution

Ve formátu JSON jsou objekty definované pomocí složených závorek {}, seznamy pomocí hranatých závorek [] a řetězce jsou odděleny pomocí dvojitých uvozovek &quot;&quot;. Všechny tyto znaky se objevují ve dvojicích na začátku a na konci substruktury a musí být zadány ve správném pořadí. Není-li tomu tak, editor zobrazí chybu <em>Invalid JSON</em> error.

:::


Na nejvyšší úrovni je konfigurací metadat seznam objektů kategorie. Objekty kategorie používáme ke strukturování vstupů, které patří k souvisejícím vlastnostem metadat, do skupin v uživatelském rozhraní.

Každá kategorie má seznam objektů pole. Každé objekt pole popisuje, jak by měl vstup vypadat a jak by se měl chovat v uživatelském rozhraní, jaký druh obsahu je povolen a zda se mají vkládat přednastavené hodnoty nebo odvozené hodnoty. Upravte objekt s cílem nastavit následující vlastnosti:

*   **název:** Jedinečný název pole, které musí být v souladu s interním modelem domény (viz níže).
*   **štítek:** Štítek, který se má uživateli zobrazit vedle vstupního pole.
*   **popis:** Delší vysvětlující text pro pole, který se zobrazí po umístění kurzoru myši nad štítek.
*   **typ:** Primitivní typ dat, které toto pole očekává. Jeden z řetězců, objektů, pole, celého čísla a desetinného čísla.
*   **schéma:** Schéma nebo formát hodnoty, která se má vložit. Jeden z e-mailů, enum, geojson, json, wkt a csv. Další informace o polích enumerace naleznete v části [Práce s poli enumerace](#enumerationvalues)
*   **defaultValue:** Pevná přednastavená hodnota, která bude vždy přiřazena k poli.
*	**autofillRule:** Dynamická přednastavená hodnota, která bude vždy přiřazena k poli. Tato hodnota se vypočítá z aktuálních proměnných prostředí, jako je uživatel, kontext organizace, datová sada a téma. Kliknete-li do řádku pomocí klíče vlastnosti ```autofillRule```, v pravém horním rohu editoru se zobrazí nápověda pro výběr hodnoty. Další informace o pravidlech automatického doplňování naleznete v části [Práce s pravidly automatického doplňování](#autofill)
*	**povinné:** Nastavte na hodnotu ```pravda```, pokud je třeba zadat hodnotu v souladu s typem a schématem.
*   **upravitelné:** Nastavte na hodnotu ```pravda```, jestliže by správce dat měl mít možnost upravit hodnotu v tomto poli.
*   **minOccurs:** Definuje minimální počet platných hodnot pro tento vstup.
*   **maxOccurs:** Definuje maximální počet platných hodnot pro tento vstup.
*	**cíle:** Jedná se o seznam s pravidly pro mapování na externí služby, například katalogy metadat. Ve výchozím nastavení by měl být vždy definován alespoň cíl ````bsp``` . ```bsp``` hale»connect potřebuje k publikování služeb.

Pro pole ```name``` a ```target``` lze použít následující cesty:

*	md-dataset.citation.title
* *md-dataset.identification.\**
    *	md-dataset.identification.abstract
    *	md-dataset.identification.keyword_inspire
    * md-dataset.identification.priorityDatasetDescriptiveKeyword
    * md-dataset.identification.spatialScopeDescriptiveKeyword
    *	md-dataset.identification.keyword_simple
    *	md-dataset.identification.topicCategory
    * md-dataset.dataQualityLineage
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

#### Příklad konfigurace

    [
        {
            "categoryName": "general",
            "title": "Allgemeine Angaben",
            "name": "general",
            "fields": [
                {
                    "name": "md-dataset.citation.title",
                    "required": true,
                    "minOccurs": 1,
                    "maxOccurs": 1,
                    "comment": "ISO 3.2.1 #360",
                    "label": "Datensatz-Titel",
                    "description": "Bezeichnung, unter der der Datensatz bekannt ist",
                    "type": "string",
                    "schema": null,
                    "defaultValue": null,
                    "autofillRule": "{{dataset.name}}",
                    "editable": true,
                    "targets": {
                        "bsp": "md-dataset.citation.title"
                    }
                },
                {
                    "name": "md-dataset.identification.abstract",
                    "required": true,
                    "minOccurs": 1,
                    "maxOccurs": 1,
                    "comment": "ISO B2.2.1 #24",
                    "label": "Kurzbeschreibung Datensatz",
                    "description": "kurze, beschreibende Zusammenfassung des Datensatzes",
                    "type": "string",
                    "schema": null,
                    "defaultValue": null,
                    "autofillRule": null,
                    "editable": true,
                    "targets": {
                        "bsp": "md-dataset.identification.abstract"
                    }
                }
            ]
        }
    ]


### Práce s poli enumerace
{:#enumerationvalues}
Pole enumerace umožňují vytvářet rozbalovací nabídky v polích. Rozbalovací nabídky omezují koncovým uživatelům možnosti zadávání dat pro množinu předdefinovaných hodnot, díky čemuž je zadávání metadat jednodušší a méně náchylné k chybám. Chcete-li pole enumerace použít, zadejte do pole schématu „enum“. Dále na konci objektu kategorie vytvořte nové pole s názvem "enumValues“. Hodnoty jsou uvedeny v hranatých závorkách []. Každá dvojice štítek/hodnota se nachází ve složených závorkách {}. Zkopírujte vzor pole „enumValues“ v bloku kódu níže s cílem vytvořit pole enumerace v objektu kategorie dle svého výběru. Nahraďte hodnoty za dvojtečkami ve dvojicích štítek/hodnota svými vlastními daty.

        {
            "name": "md-dataset.contactForMetadata.roleCode",
            "required": true,
            "minOccurs": 1,
            "maxOccurs": 1,
            "comment": "roleCode",
            "label": "Role",
            "description": null,
            "type": "enum",
            "schema": null,
            "defaultValue": "pointOfContact",
            "autofillRule": null,
            "visibility": true,
            "editable": true,
            "enumValues": [
                  {
                      "label": "author",
                      "value": "author"
                  },
                  {
                      "label": "custodian",
                      "value": "custodian"
                  },
                  {
                      "label": "distributor",
                      "value": "distributor"
                  },
                  {
                      "label": "originator",
                      "value": "originator"
                  },
                  {
                      "label": "owner",
                      "value": "owner"
                  },
                  {
                      "label": "pointOfContact",
                      "value": "pointOfContact"
                  },
                  {
                      "label": "principalInvestigator",
                      "value": "principalInvestigator"
                  },
                  {
                      "label": "processor",
                      "value": "processor"
                  },
                  {
                      "label": "publisher",
                      "value": "publisher"
                  },
                  {
                      "label": "resourceProvider",
                      "value": "resourceProvider"
                  },
                  {
                      "label": "user",
                      "value": "user"
                  }
                  ],
                  "targets": {
                      "bsp": "md-dataset.contactForMetadata.roleCode"
                  }
        }

**Metadata nakonfigurovaná pro používání pole enumerace**

Obrázek níže zobrazuje nakonfigurované pole enumerace. Rozbalovací nabídka je implementována v poli "Role" a je vyplněna hodnotami zadanými uživatelem.
<img src={require("/images/help/cs/enumerationValues.png").default} alt="" title="Hodnoty vyčíslení" class="img-responsive img-inline-help"/>

### Práce s pravidly automatického doplňování
Pravidla automatického doplňování umožňují automatické generování metadat pomocí proměnných. hale»connect umožňuje použít data, která jste předtím uvedli, k vyplnění polí metadat. Několik příkladů těchto dat zahrnuje kontaktní data vaší organizace, název vaší datové sady nebo data atributů spojená s typy funkcí vaší datové sady. Kromě toho existují pravidla automatického doplňování pro přístup k publikovaným službám datové sady. Nerealizují se při vyplňování metadat datové sady, ale až po zveřejnění. Jsou dostupné v části „publikace“ v Asistentovi automatického doplňování. Pravidla automatického doplňování nelze použít pro schémata, která obsahují ve svém názvu speciální znaky. Chcete-li vytvořit pravidlo automatického doplňování, klikněte na hodnotu vedle klíče vlastnosti ```autofillRule```. Asistent automatického doplňování se zobrazí v pravém horním rohu editoru metadat. Kliknete-li na hodnotu v Asistentovi automatického doplňování, pravidlo automatického doplňování se vloží na pozici kurzoru.
<img src={require("/images/help/cs/autofillAssistant1.png").default} alt="" title="Autofill assistant" class="img-responsive img-inline-help"/>
Asistent automatického doplňování má přístup k datům z celé platformy pro použití v metadatech. Data jsou uspořádána do několika kategorií:

* Uživatel
   * Kategorie uživatele zajišťuje přístup ke kontaktním údajům zadaným na stránce profilu uživatele. Vlastní pole, která přidáte do svého uživatelského profilu, jsou dostupná v Asistentovi automatického doplňování. Definujete-li ve svém uživatelském profilu vlastní pole, klikněte na „Uživatel“ v Asistentovi automatického doplňování a pro zobrazení svých polí přejděte na „Vlastní pole“. Vlastní pole umožňují vytvořit si vlastní dvojice klíč, hodnota pro použití v metadatech. Další informace o vlastních polích naleznete na stránce [Přidat uživatele](../../users-roles-orgs/registration/2015-03-05-users-add.md) a [Vytvořit organizaci](../../users-roles-orgs/manage-orgs/2015-03-04-users-add-organisation.md v sekci naší nápovědy.

* Organizace
   * Kategorie uživatele zajišťuje přístup ke kontaktním údajům zadaným na stránce profilu organizace. Vlastní pole, která přidáte do svých organizací, jsou k dispozici v Asistentovi automatického doplňování. Definujete-li ve své organizaci vlastní pole, klikněte na „Organizace“ v Asistentovi automatického doplňování a pro zobrazení svých polí přejděte na „Vlastní pole“. Vlastní pole umožňují vytvořit si vlastní dvojice klíč, hodnota pro použití v metadatech. Další informace o vlastních polích naleznete na stránce [Přidat uživatele](../../users-roles-orgs/registration/2015-03-05-users-add.md) a [Vytvorit organizaci](../../users-roles-orgs/manage-orgs/2015-03-04-users-add-organisation.md) v sekci naší nápovědy.

* Datová sada
   * Kategorie datové sady umožňuje přístup k názvu datové sady a geografickému ohraničení.

* Téma
   * Kategorie tématu umožňuje přístup k podrobnostem tématu včetně názvu, popisu, typu a verze.

* Analýza souborů
   * Kategorie analýzy souborů umožňuje přístup k hodnotám atributů ve zdrojových datech a bude se lišit v závislosti na atributech dostupných ve zdrojových datech.

* Publikace
   * Kategorie publikace umožňuje uživatelům popsat různé typy služeb. Pravidlo automatického doplňování ```{{publication.service.type.title.short}}``` přidáva výraz ```WMS``` nebo ```WFS``` v závislosti na typu publikované služby.

* Kopírovat ze zdrojové datové sady
  * Kopie z kategorie zdrojové datové sady umožňuje uživatelům přidat hodnoty metadat obsažené ve zdrojových metadatech do transformovaných metadat.

**Vyplnění pole klíčových slov pomocí dat atributů**

Asistent automatického doplňování nabízí několik možností, ze kterých si můžete vybrat. Chcete-li vyplnit pole klíčových slov pomocí hodnot atributů z datové sady, v Asistentovi automatického doplňování vyberte položku "Analýza souborů". Dále vyberte "Hodnoty atributů". Měl by se vám zobrazit název vaší datové sady. Vyberte svou datovou sadu a typ funkce, který obsahuje hodnoty atributů, které chcete přidat jako klíčová slova. Nakonec vyberte pole atributu, které obsahuje vaše klíčová slova. Pravidlo automatického doplňování níže je příkladem pole klíčových slov vyplněného daty atributů.


        {
            "name": "md-dataset.identification.keyword_simple",
            "required": false,
            "minOccurs": 0,
            "maxOccurs": -1,
            "comment": "keyword_simple",
            "label": "Keywords",
            "description": "Search terms under which the record should be found.",
            "type": "string",
            "schema": null,
            "defaultValue": null,
            "autofillRule":  {% raw %}"{{fileAnalysis.attributeValues.SchoolDistrict.SchoolDistrictFeatures.NAME}}"{% endraw %},
            "visibility": true,
            "editable": true,
            "targets": {
                "bsp": "md-dataset.identification.keyword_simple"
            }
        }


**Metadata nakonfigurovaná pro používání hodnot atributů typu funkce jako klíčových slov**

Obrázek níže zobrazuje nakonfigurované pole klíčových slov tak, jak se zobrazuje v metadatech datové sady. Pole se vyplní hodnotami atributů vybranými v Editoru metadat, názvy školních obvodů.

<img src={require("/images/help/cs/AttributeValues.png").default} alt="" title="Hodnoty atributů jako klíčová slova" class="img-responsive img-inline-help"/>

### Přidání několika předvolených hodnot pro jedno pole metadat

hale»connect umožňuje uživatelům uvést více předvolených hodnot v konfiguraci metadat tématu. V hranatých závorkách lze přidat několik hodnot oddělených čárkou. V níže uvedeném příkladu jsou klíčová slova „INSPIRE“ a „životní prostředí“ přidána k samostatným prvkům „descriptiveKeyword“ v metadatech datové sady.

              {
               "name": "md-dataset.identification.keyword_simple",
               "required": false,
               "minOccurs": 0,
               "maxOccurs": -1,
               "comment": "keyword_simple",
               "label": "Keywords",
               "description": "Search terms which help narrow a full text search and allow for structured keyword search.",
               "type": "string",
               "schema": null,
               "defaultValue": [
                   "INSPIRE",
                   "environment"
                   ],
               "autofillRule": null,
               "visibility": true,
               "editable": true,
               "targets": {
                   "bsp": "md-dataset.identification.keyword_simple"
               }
           }

### Přidání několika pravidel automatického doplňování pro jedno pole metadat

hale»connect uživatelům umožňuje uvést několik pravidel automatického doplňování v konfiguraci metadat tématu. Lze přidat několik pravidel automatického doplňování v hranatých závorkách oddělených čárkami. V níže uvedeném příkladu jsou klíčová slova „NAME“ a „NUMBER“ přidaná k samostatným prvkům ´´´descriptiveKeyword´´´metadatech datové sady.

            {
             "name": "md-dataset.identification.keyword_simple",
             "required": false,
             "minOccurs": 0,
             "maxOccurs": -1,
             "comment": "keyword_simple",
             "label": "Keywords",
             "description": "Search terms which help narrow a full text search and allow for structured keyword search.",
             "type": "string",
             "schema": null,
             "defaultValue": null
             "autofillRule": [
                 {% raw %}"{{fileAnalysis.attributeValues.SchoolDistrict.SchoolDistrictFeatures.NAME}}"{% endraw %},
                 {% raw %}"{{fileAnalysis.attributeValues.SchoolDistrict.SchoolDistrictFeatures.NUMBER}}"{% endraw %}
                 ],
             "visibility": true,
             "editable": true,
             "targets": {
                 "bsp": "md-dataset.identification.keyword_simple"
             }
          }

### Přidání přeložených hodnot nebo volného textu k podmínkám přístupu a používání

Požadavek TG C.18 v [Technické příručce pro implementaci datové sady a metadat služby INSPIRE na základě normy ISO/TS 19139:2007](https://inspire.ec.europa.eu/id/document/tg/metadata-iso19139 ) vyžaduje, aby implementátoři popsali podmínky přístupu a používání popsaného zdroje. Musí se vybrat hodnota ze seznamu kódů INSPIRE [ConditionsApplyingToAccessAndUse](https://inspire.ec.europa.eu/metadata-codelist/ConditionsApplyingToAccessAndUse/noConditionsApply), případně se musí zadat volný text. hale»connect poskytuje uživatelům možnost vybrat si hodnotu z číselníku INSPIRE, vybrat hodnotu z číselníku INSPIRE a zadat přeloženou hodnotu nebo volný text.

**Metadata nakonfigurovaná pro používání hodnoty ze seznamu kódů INSPIRE [ConditionsApplyingToAccessAndUse](https://inspire.ec.europa.eu/metadata-codelist/ConditionsApplyingToAccessAndUse/noConditionsApply)**

Pole ``defaultValue`` musí být vyplněno textem z pole ``value`` enumerace, aby se hodnota kódového seznamu INSPIRE nastavila jako výchozí.

            {
                "name": "md-dataset.identification.constraints.useConstraints",
                "required": false,
                "minOccurs": 0,
                "maxOccurs": -1,
                "comment": "MD_Metadata/identificationInfo//resourceConstraints//useConstraints",
                "label": "Use constraints",
                "description": "Access constraints applied to assure the protection of privacy or intellectual property, and any special restrictions or limitations on obtaining the resource.",
                "type": "enum",
                "schema": null,
                "defaultValue": "noConditionsApply",
                "autofillRule": null,
                "visibility": true,
                "editable": true,
                "openValue": true,
                "enumValues": [
                    {
                        "label": "No conditions apply to access and use",
                        "value": "noConditionsApply"
                    },
                    {
                        "label": "The conditions applying to access and use are unknown",
                        "value": "conditionsUnknown"
                    }
                ],
                "targets": {
                    "bsp": "md-dataset.identification.constraints.useConstraints"
                }
            }

**Metadata nakonfigurovaná tak, aby používala hodnotu ze seznamu kódů INSPIRE [ConditionsApplyingToAccessAndUse](https://inspire.ec.europa.eu/metadata-codelist/ConditionsApplyingToAccessAndUse/noConditionsApply) a přeloženou hodnotu**

Pole ``defaultValue`` musí být vyplněno textem z pole ``value`` enumerace, aby se hodnota kódového seznamu INSPIRE nastavila jako výchozí. Přeloženou hodnotu lze vložit pomocí následujícího vzoru: ``<enumeration value>:<translated value>``.

            {
                "name": "md-dataset.identification.constraints.useConstraints",
                "required": false,
                "minOccurs": 0,
                "maxOccurs": -1,
                "comment": "MD_Metadata/identificationInfo//resourceConstraints//useConstraints",
                "label": "Use constraints",
                "description": "Access constraints applied to assure the protection of privacy or intellectual property, and any special restrictions or limitations on obtaining the resource.",
                "type": "enum",
                "schema": null,
                "defaultValue": "noConditionsApply:Es gelten keine Bedingungen",
                "autofillRule": null,
                "visibility": true,
                "editable": true,
                "openValue": true,
                "enumValues": [
                    {
                        "label": "No conditions apply to access and use",
                        "value": "noConditionsApply"
                    },
                    {
                        "label": "The conditions applying to access and use are unknown",
                        "value": "conditionsUnknown"
                    }
                ],
                "targets": {
                    "bsp": "md-dataset.identification.constraints.useConstraints"
                }
            }

**Metadata nakonfigurovaná pro používání volné textové hodnoty**

Pole ``defaultValue`` lze vyplnit volným textem v uvozovkách.

            {
                "name": "md-dataset.identification.constraints.useConstraints",
                "required": false,
                "minOccurs": 0,
                "maxOccurs": -1,
                "comment": "MD_Metadata/identificationInfo//resourceConstraints//useConstraints",
                "label": "Use constraints",
                "description": "Access constraints applied to assure the protection of privacy or intellectual property, and any special restrictions or limitations on obtaining the resource.",
                "type": "enum",
                "schema": null,
                "defaultValue": "my own custom free text value",
                "autofillRule": null,
                "visibility": true,
                "editable": true,
                "openValue": true,
                "enumValues": [
                    {
                        "label": "No conditions apply to access and use",
                        "value": "noConditionsApply"
                    },
                    {
                        "label": "The conditions applying to access and use are unknown",
                        "value": "conditionsUnknown"
                    }
                ],
                "targets": {
                    "bsp": "md-dataset.identification.constraints.useConstraints"
                }
            }
