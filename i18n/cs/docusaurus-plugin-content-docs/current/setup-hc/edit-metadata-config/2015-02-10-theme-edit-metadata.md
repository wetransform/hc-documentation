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

:::warning[Caution]

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

Pro pole ```name``` a ```target``` lze použít následující cesty. Pro referenci jsou zde uvedeny cesty xpath k prvkům metadat:

<details>
<summary>XPath references</summary>

*	md-dataset.citation.title
   <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:citation/gmd:CI_Citation/gmd:title/gco:CharacterString
*  *md-dataset.identification.\**
    *	md-dataset.identification.abstract
      <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:abstract/gco:CharacterString
    *	md-dataset.identification.keyword_inspire
      <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:descriptiveKeywords/gmd:MD_Keywords/gmd:keyword/gmx:Anchor
    * md-dataset.identification.priorityDatasetDescriptiveKeyword
      <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:descriptiveKeywords/gmd:MD_Keywords/gmd:keyword/gmx:Anchor
    * md-dataset.identification.spatialScopeDescriptiveKeyword
      <br/>XPATH  /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:descriptiveKeywords/gmd:MD_Keywords/gmd:keyword/gmx:Anchor
    *	md-dataset.identification.keyword_simple
      <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:descriptiveKeywords/gmd:MD_Keywords/gmd:keyword/gco:CharacterString
    *	md-dataset.identification.topicCategory
      <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:topicCategory/gmd:MD_TopicCategoryCode
    * md-dataset.dataQualityLineage
      <br/>XPATH /gmd:MD_Metadata/gmd:dataQualityInfo/gmd:DQ_DataQuality/gmd:lineage/gmd:LI_Lineage/gmd:statement/gco:CharacterString
    *	md-dataset.identification.geographicExtent.eastBoundLongitude
      <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:extent/gmd:EX_Extent/gmd:geographicElement/gmd:EX_GeographicBoundingBox/gmd:northBoundLatitude/gco:Decimal
    * md-dataset.identification.scale
      <br/>XPATH /gmd:spatialResolution/gmd:MD_Resolution/gmd:equivalentScale/gmd:MD_RepresentativeFraction/gmd:denominator/gco:Integer
    *	md-dataset.identification.geographicExtent.northBoundLatitude
      <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:extent/gmd:EX_Extent/gmd:geographicElement/gmd:EX_GeographicBoundingBox/gmd:northBoundLatitude/gco:Decimal
    *	md-dataset.identification.geographicExtent.southBoundLatitude
      <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:extent/gmd:EX_Extent/gmd:geographicElement/gmd:EX_GeographicBoundingBox/gmd:southBoundLatitude/gco:Decimal
    *	md-dataset.identification.geographicExtent.westBoundLongitude
      <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:extent/gmd:EX_Extent/gmd:geographicElement/gmd:EX_GeographicBoundingBox/gmd:westBoundLongitude/gco:Decimal
    * md-dataset.identification.geographicExtent.geographicDescriptionIdentifier
      <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:extent/gmd:EX_Extent/gmd:geographicElement/gmd:EX_GeographicDescription/gmd:geographicIdentifier/gmd:MD_Identifier/gmd:code/gmx:Anchor
    * md-dataset.identification.temporalExtent.beginPosition
      <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:extent/gmd:EX_Extent/gmd:temporalElement/gmd:EX_TemporalExtent/gmd:extent/gml:TimePeriod/gml:beginPosition
    * md-dataset.identification.temporalExtent.endPosition
      <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:extent/gmd:EX_Extent/gmd:temporalElement/gmd:EX_TemporalExtent/gmd:extent/gml:TimePeriod/gml:endPosition
    * md-dataset.identification.resourceMaintenance.maintenanceAndUpdateFrequency
      <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:resourceMaintenance/gmd:MD_MaintenanceInformation/gmd:maintenanceAndUpdateFrequency/gmd:MD_MaintenanceFrequencyCode
    * md-dataset.identification.resourceMaintenance.userDefinedFrequency
      <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:resourceMaintenance/gmd:MD_MaintenanceInformation/gmd:userDefinedMaintenanceFrequency/gts:TM_PeriodDuration
    * md-dataset.identification.resourceMaintenance.maintenanceNote
      <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:resourceMaintenance/gmd:MD_MaintenanceInformation/gmd:maintenanceNote/gco:CharacterString
    * md-dataset.identification.purpose
      <br/>XPATH  /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:purpose/gco:CharacterString
    * md-dataset.identification.characterSetCode
      <br/>XPATH  /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:characterSet/gmd:MD_CharacterSetCode
    * md-dataset.citation.otherCitationDetails
      <br/>XPATH  /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:citation/gmd:CI_Citation/gmd:otherCitationDetails/gmx:Anchor
    *	md-dataset.identification.constraints.useLimitations
      <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:resourceConstraints/gmd:MD_LegalConstraints/gmd:useLimitation/gco:CharacterString
    *	md-dataset.identification.constraints.useConstraints
      <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:resourceConstraints/gmd:MD_LegalConstraints/gmd:otherConstraints/gmx:Anchor
    *	md-dataset.identification.constraints.accessContraints
      <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:resourceConstraints/gmd:MD_LegalConstraints/gmd:otherConstraints/gmx:Anchor
    *	*md-dataset.identification.contactForResource.\**
        *	md-dataset.identification.contactForResource.individualName
          <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:individualName/gco:CharacterString
        *	md-dataset.identification.contactForResource.authorityUrl
          <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:onlineResource/gmd:CI_OnlineResource/gmd:linkage/gmd:URL
        *	md-dataset.identification.contactForResource.organisationName
          <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:organisationName/gco:CharacterString
        *	md-dataset.identification.contactForResource.positionName
          <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:positionName/gco:CharacterString
        *	md-dataset.identification.contactForResource.roleCode
          <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:role/gmd:CI_RoleCode
        *	md-dataset.identification.contactForResource.email
          <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:address/gmd:CI_Address/gmd:electronicMailAddress/gco:CharacterString
        *	md-dataset.identification.contactForResource.deliveryPoint
          <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:address/gmd:CI_Address/gmd:deliveryPoint/gmx:Anchor
        *	md-dataset.identification.contactForResource.postalCode
          <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:address/gmd:CI_Address/gmd:postalCode/gco:CharacterString
        *	md-dataset.identification.contactForResource.city
          <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:address/gmd:CI_Address/gmd:city/gco:CharacterString
        *	md-dataset.identification.contactForResource.administrativeArea
          <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:address/gmd:CI_Address/gmd:administrativeArea/gco:CharacterString
        *	md-dataset.identification.contactForResource.country
          <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:address/gmd:CI_Address/gmd:country/gco:CharacterString
        *	md-dataset.identification.contactForResource.voicePhone
          <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:phone/gmd:CI_Telephone/gmd:voice/gco:CharacterString
        *	md-dataset.identification.contactForResource.facsimile
          <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:phone/gmd:CI_Telephone/gmd:facsimile/gco:CharacterString
*	*md-dataset.contactForMetadata.\**
    *	md-dataset.contactForMetadata.individualName
      <br/>XPATH /gmd:MD_Metadata/gmd:contact/gmd:CI_ResponsibleParty/gmd:individualName/gco:CharacterString
    *	md-dataset.contactForMetadata.authorityUrl
      <br/>XPATH /gmd:MD_Metadata/gmd:contact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:onlineResource/gmd:CI_OnlineResource/gmd:linkage/gmd:URL
    *	md-dataset.contactForMetadata.organisationName
      <br/>XPATH /gmd:MD_Metadata/gmd:contact/gmd:CI_ResponsibleParty/gmd:organisationName/gco:CharacterString
    *	md-dataset.contactForMetadata.positionName
      <br/>XPATH /gmd:MD_Metadata/gmd:contact/gmd:CI_ResponsibleParty/gmd:positionName/gco:CharacterString
    *	md-dataset.contactForMetadata.roleCode
      <br/>XPATH /gmd:MD_Metadata/gmd:contact/gmd:CI_ResponsibleParty/gmd:role/gmd:CI_RoleCode
    *	md-dataset.contactForMetadata.email
      <br/>XPATH /gmd:MD_Metadata/gmd:contact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:address/gmd:CI_Address/gmd:electronicMailAddress/gco:CharacterString
    *	md-dataset.contactForMetadata.deliveryPoint
      <br/>XPATH /gmd:MD_Metadata/gmd:contact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:address/gmd:CI_Address/gmd:deliveryPoint/gmx:Anchor
    *	md-dataset.contactForMetadata.postalCode
      <br/>XPATH /gmd:MD_Metadata/gmd:contact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:address/gmd:CI_Address/gmd:postalCode/gco:CharacterString
    *	md-dataset.contactForMetadata.city
      <br/>XPATH /gmd:MD_Metadata/gmd:contact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:address/gmd:CI_Address/gmd:city/gco:CharacterString
    *	md-dataset.contactForMetadata.administrativeArea
      <br/>XPATH /gmd:MD_Metadata/gmd:contact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:address/gmd:CI_Address/gmd:administrativeArea/gco:CharacterString
    *	md-dataset.contactForMetadata.country
      <br/>XPATH /gmd:MD_Metadata/gmd:contact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:address/gmd:CI_Address/gmd:country/gco:CharacterString
    *	md-dataset.contactForMetadata.voicePhone
      <br/>XPATH /gmd:MD_Metadata/gmd:contact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:phone/gmd:CI_Telephone/gmd:voice/gco:CharacterString
    *	md-dataset.contactForMetadata.facsimile
      <br/>XPATH /gmd:MD_Metadata/gmd:contact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:phone/gmd:CI_Telephone/gmd:facsimile/gco:CharacterString
*  md-dataset.transferOptionsProtocol
  <br/>XPATH /gmd:MD_Metadata/gmd:distributionInfo/gmd:MD_Distribution/gmd:transferOptions/gmd:MD_DigitalTransferOptions/gmd:onLine/gmd:CI_OnlineResource/gmd:protocol/gmx:Anchor
* md-dataset.transferOptionsDescription
  <br/>XPATH /gmd:MD_Metadata/gmd:distributionInfo/gmd:MD_Distribution/gmd:transferOptions/gmd:MD_DigitalTransferOptions/gmd:onLine/gmd:CI_OnlineResource/gmd:description/gco:CharacterString
* md-dataset.formatName
  <br/>XPATH  /gmd:MD_Metadata/gmd:distributionInfo/gmd:MD_Distribution/gmd:distributionFormat/gmd:MD_Format/gmd:name/gco:CharacterString
* md-dataset.formatVersion
  <br/>XPATH  /gmd:MD_Metadata/gmd:distributionInfo/gmd:MD_Distribution/gmd:distributionFormat/gmd:MD_Format/gmd:version/gco:CharacterString
* md-dataset.formatSpecification
  <br/>XPATH  /gmd:MD_Metadata/gmd:distributionInfo/gmd:MD_Distribution/gmd:distributionFormat/gmd:MD_Format/gmd:specification/gmx:Anchor
*	md-dataset.fileidentifier
*	md-dataset.mdIdentifierLocalId
  <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:citation/gmd:CI_Citation/gmd:identifier/gmd:MD_Identifier/gmd:code/gmx:Anchor
*	md-dataset.mdIdentifierNamespace
  <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:citation/gmd:CI_Citation/gmd:identifier/gmd:MD_Identifier/gmd:code/gmx:Anchor@xlink:href
* md-dataset.hierarchyLevelName
  <br/>XPATH  /gmd:MD_Metadata/gmd:hierarchyLevelName/gmx:Anchor
* md-dataset.customParentIdentifier
  <br/>XPATH  /gmd:MD_Metadata/gmd:parentIdentifier/gco:CharacterString
* md-dataset.isInspireDataset
  <br/>XPATH /gmd:MD_Metadata/gmd:dataQualityInfo/gmd:DQ_DataQuality/gmd:report/gmd:DQ_DomainConsistency/gmd:result/gmd:DQ_ConformanceResult/gmd:pass/gco:Boolean
* md-dataset.referenceSystemInfoCode
  <br/>XPATH /gmd:MD_Metadata/gmd:referenceSystemInfo/gmd:MD_ReferenceSystem/gmd:referenceSystemIdentifier/gmd:RS_Identifier/gmd:code/gco:CharacterString

</details>


<details>
<summary>Příklad konfigurace</summary>

```json
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
```

</details>

<details>
<summary>Příklad konfigurace (podrobné)</summary>

```json
[
  {
    "categoryName": "dataset_general",
    "title": "Data set - General",
    "name": "dataset_general",
    "expand": false,
    "fields": [
      {
        "name": "md-dataset.citation.title",
        "required": true,
        "minOccurs": 1,
        "maxOccurs": 1,
        "comment": "ISO 3.2.1 #360",
        "label": "Title",
        "description": "Name by which the cited resource is known.",
        "type": "string",
        "schema": null,
        "defaultValue": null,
        "autofillRule": "{% verbatim %}{{dataset.name}}{% endverbatim %}",
        "visibility": true,
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
        "comment": "ISO B2.2.1 #25",
        "label": "Abstract Dataset",
        "description": "Brief narrative summary of the content of the resource(s).",
        "type": "string",
        "schema": null,
        "defaultValue": null,
        "autofillRule": "{% verbatim %}{{dataset.name}}{% endverbatim %}",
        "visibility": true,
        "editable": true,
        "targets": {
          "bsp": "md-dataset.identification.abstract"
        }
      },
      {
        "name": "md-dataset.identification.keyword_inspire",
        "required": true,
        "minOccurs": 1,
        "maxOccurs": -1,
        "comment": "keyword_inspire",
        "label": "INSPIRE Theme",
        "description": null,
        "type": "enum",
        "schema": null,
        "defaultValue": null,
        "autofillRule": null,
        "visibility": true,
        "editable": true,
        "enumValues": [
          {
            "label": "Coordinate reference systems",
            "value": "Annex_1_01_RS"
          },
          {
            "label": "Geographical grid systems",
            "value": "Annex_1_02_GG"
          },
          {
            "label": "Geographical names",
            "value": "Annex_1_03_GN"
          },
          {
            "label": "Administrative units",
            "value": "Annex_1_04_AU"
          },
          {
            "label": "Addresses",
            "value": "Annex_1_05_AD"
          },
          {
            "label": "Cadastral parcels",
            "value": "Annex_1_06_CP"
          },
          {
            "label": "Transport networks",
            "value": "Annex_1_07_TN"
          },
          {
            "label": "Hydrography",
            "value": "Annex_1_08_HY"
          },
          {
            "label": "Protected sites",
            "value": "Annex_1_09_PS"
          },
          {
            "label": "Elevation",
            "value": "Annex_2_01_EL"
          },
          {
            "label": "Land cover",
            "value": "Annex_2_02_LC"
          },
          {
            "label": "Orthoimagery",
            "value": "Annex_2_03_OI"
          },
          {
            "label": "Geology",
            "value": "Annex_2_04_GE"
          },
          {
            "label": "Statistical units",
            "value": "Annex_3_01_SU"
          },
          {
            "label": "Buildings",
            "value": "Annex_3_02_BU"
          },
          {
            "label": "Soil",
            "value": "Annex_3_03_SO"
          },
          {
            "label": "Land use",
            "value": "Annex_3_04_LU"
          },
          {
            "label": "Human health and safety",
            "value": "Annex_3_05_HH"
          },
          {
            "label": "Utility and governmental services",
            "value": "Annex_3_06_US"
          },
          {
            "label": "Environmental monitoring facilities",
            "value": "Annex_3_07_EF"
          },
          {
            "label": "Production and industrial facilities",
            "value": "Annex_3_08_PF"
          },
          {
            "label": "Agricultural and aquaculture facilities",
            "value": "Annex_3_09_AF"
          },
          {
            "label": "Population distribution - demography",
            "value": "Annex_3_10_PD"
          },
          {
            "label": "Area management/restriction/regulation zones and reporting units",
            "value": "Annex_3_11_AM"
          },
          {
            "label": "Natural risk zones",
            "value": "Annex_3_12_NZ"
          },
          {
            "label": "Atmospheric conditions",
            "value": "Annex_3_13_AC"
          },
          {
            "label": "Meteorological geographical features",
            "value": "Annex_3_14_MF"
          },
          {
            "label": "Oceanographic geographical features",
            "value": "Annex_3_15_OF"
          },
          {
            "label": "Sea regions",
            "value": "Annex_3_16_SR"
          },
          {
            "label": "Bio-geographical regions",
            "value": "Annex_3_17_BR"
          },
          {
            "label": "Habitats and biotopes",
            "value": "Annex_3_18_HB"
          },
          {
            "label": "Species distribution",
            "value": "Annex_3_19_SD"
          },
          {
            "label": "Energy resources",
            "value": "Annex_3_20_ER"
          },
          {
            "label": "Mineral resources",
            "value": "Annex_3_21_MR"
          }
        ],
        "targets": {
          "bsp": "md-dataset.identification.keyword_inspire"
        }
      },
      {
        "name": "md-dataset.identification.priorityDatasetDescriptiveKeyword",
        "required": false,
        "minOccurs": 0,
        "maxOccurs": -1,
        "comment": "priorityDatasetDescriptiveKeyword",
        "label": "INSPIRE priority datasets",
        "description": null,
        "type": "enum",
        "schema": null,
        "defaultValue": null,
        "autofillRule": null,
        "visibility": true,
        "editable": true,
        "enumValues": [
          {
            "label": "Agglomerations (Noise Directive)",
            "value": "[Agglomerations (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Agglomerations-dir-2002-49)"
          },
          {
            "label": "Population (Noise Directive)",
            "value": "[Population (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Population-dir-2002-49)"
          },
          {
            "label": "Areas of Potential significant flood risk (Floods Directive)",
            "value": "[Areas of Potential significant flood risk (Floods Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/AreasOfPotentialSignificantFloodRisk-dir-2007-60)"
          },
          {
            "label": "Flooded areas (Floods Directive)",
            "value": "[Flooded areas (Floods Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/FloodedAreas-dir-2007-60)"
          },
          {
            "label": "Flood risk zones (Floods Directive)",
            "value": "[Flood risk zones (Floods Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/FloodRiskZones-dir-2007-60)"
          },
          {
            "label": "Monitoring stations (Marine Strategy Framework Directive)",
            "value": "[Monitoring stations (Marine Strategy Framework Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/MonitoringStations-dir-2008-56)"
          },
          {
            "label": "Sensitive areas, less sensitive areas and catchments (Urban Waste-Water Treatment\nDirective)",
            "value": "[Sensitive areas, less sensitive areas and catchments (Urban Waste-Water\nTreatment Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/SensitiveAreasLessSensitiveAreasAndCatchments-dir-1991-271)"
          },
          {
            "label": "Nitrates vulnerable zones (Nitrates Directive)",
            "value": "[Nitrates vulnerable zones (Nitrates Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/NitratesVulnerableZones-dir-1991-676)"
          },
          {
            "label": "Directive 2000/60/EC",
            "value": "[Directive 2000/60/EC](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/dir-2000-60)"
          },
          {
            "label": "River basin districts (Water Framework Directive)",
            "value": "[River basin districts (Water Framework Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/RiverBasinDistricts-dir-2000-60)"
          },
          {
            "label": "River basin districts sub-units (Water Framework Directive)",
            "value": "[River basin districts sub-units (Water Framework Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/RiverBasinDistrictsSubUnits-dir-2000-60)"
          },
          {
            "label": "Water bodies (Water Framework Directive)",
            "value": "[Water bodies (Water Framework Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/WaterBodies-dir-2000-60)"
          },
          {
            "label": "Surface water bodies (Water Framework Directive)",
            "value": "[Surface water bodies (Water Framework Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/SurfaceWaterBodies-dir-2000-60)"
          },
          {
            "label": "Lakes (Water Framework Directive)",
            "value": "[Lakes (Water Framework Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Lakes-dir-2000-60)"
          },
          {
            "label": "Rivers (Water Framework Directive)",
            "value": "[Rivers (Water Framework Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Rivers-dir-2000-60)"
          },
          {
            "label": "Transitional waters (Water Framework Directive)",
            "value": "[Transitional waters (Water Framework Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/TransitionalWaters-dir-2000-60)"
          },
          {
            "label": "Coastal waters (Water Framework Directive)",
            "value": "[Coastal waters (Water Framework Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/CoastalWaters-dir-2000-60)"
          },
          {
            "label": "Groundwater bodies (Water Framework Directive)",
            "value": "[Groundwater bodies (Water Framework Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/GroundwaterBodies-dir-2000-60)"
          },
          {
            "label": "River network (Water Framework Directive)",
            "value": "[River network (Water Framework Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/RiverNetwork-dir-2000-60)"
          },
          {
            "label": "Protected areas (Water Framework Directive)",
            "value": "[Protected areas (Water Framework Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/ProtectedAreas-dir-2000-60)"
          },
          {
            "label": "Nitrate vulnerable zones - nutrient sensitive areas (Water Framework Directive)",
            "value": "[Nitrate vulnerable zones - nutrient sensitive areas (Water Framework Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/NitrateVulnerableZones-NutrientSensitiveAreas-dir-2000-60)"
          },
          {
            "label": "Urban waste water sensitive areas - nutrient sensitive areas (Water Framework\nDirective)",
            "value": "[Urban waste water sensitive areas - nutrient sensitive areas (Water Framework\nDirective)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/UrbanWasteWaterSensitiveAreas-NutrientSensitiveAreas-dir-2000-60)"
          },
          {
            "label": "Bathing waters - recreational waters (Water Framework Directive)",
            "value": "[Bathing waters - recreational waters (Water Framework Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/BathingWaters-RecreationalWaters-dir-2000-60)"
          },
          {
            "label": "Drinking water protection areas (Water Framework Directive)",
            "value": "[Drinking water protection areas (Water Framework Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/DrinkingWaterProtectionAreas-dir-2000-60)"
          },
          {
            "label": "Water dependent Natura 2000 sites (Water Framework Directive)",
            "value": "[Water dependent Natura 2000 sites (Water Framework Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/WaterDependentNatura2000Sites-dir-2000-60)"
          },
          {
            "label": "Designated waters (Water Framework Directive)",
            "value": "[Designated waters (Water Framework Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/DesignatedWaters-dir-2000-60)"
          },
          {
            "label": "Protection of economically significant aquatic species - shellfish designated\nwaters (Water Framework Directive)",
            "value": "[Protection of economically significant aquatic species - shellfish designated\nwaters (Water Framework Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/ProtectionOfEconomicallySignificantAquaticSpecies-ShellfishDesignatedWaters-dir-2000-60)"
          },
          {
            "label": "Protection of economically significant aquatic species - freshwater fish\ndesignated waters (Water Framework Directive)",
            "value": "[Protection of economically significant aquatic species - freshwater fish\ndesignated waters (Water Framework Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/ProtectionOfEconomicallySignificantAquaticSpecies-FreshwaterFishDesignatedWaters-dir-2000-60)"
          },
          {
            "label": "Other protected areas (Water Framework Directive)",
            "value": "[Other protected areas (Water Framework Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/OtherProtectedAreas-dir-2000-60)"
          },
          {
            "label": "Monitoring stations (Water Framework Directive)",
            "value": "[Monitoring stations (Water Framework Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/MonitoringStations-dir-2000-60)"
          },
          {
            "label": "Directive 2002/49/EC",
            "value": "[Directive 2002/49/EC](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/dir-2002-49)"
          },
          {
            "label": "Major roads, railways and air transport network (Noise Directive)",
            "value": "[Major roads, railways and air transport network (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/MajorRoadsRailwaysAndAirTransportNetwork-dir-2002-49)"
          },
          {
            "label": "Major roads (Noise Directive)",
            "value": "[Major roads (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/MajorRoads-dir-2002-49)"
          },
          {
            "label": "Major railways (Noise Directive)",
            "value": "[Major railways (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/MajorRailways-dir-2002-49)"
          },
          {
            "label": "Major air transport (Noise Directive)",
            "value": "[Major air transport (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/MajorAirTransport-dir-2002-49)"
          },
          {
            "label": "Agglomerations - population (Noise Directive)",
            "value": "[Agglomerations - population (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Agglomerations-Population-dir-2002-49)"
          },
          {
            "label": "Population - densely populated built-up areas (Noise Directive)",
            "value": "[Population - densely populated built-up areas (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Population-DenselyPopulatedBuiltUpAreas-dir-2002-49)"
          },
          {
            "label": "Environmental noise exposure (Noise Directive)",
            "value": "[Environmental noise exposure (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/EnvironmentalNoiseExposure-dir-2002-49)"
          },
          {
            "label": "Major roads noise exposure delineation (Noise Directive)",
            "value": "[Major roads noise exposure delineation (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/MajorRoadsNoiseExposureDelineation-dir-2002-49)"
          },
          {
            "label": "Major roads noise exposure delineation day-evening-night (Noise Directive)",
            "value": "[Major roads noise exposure delineation day-evening-night (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/MajorRoadsNoiseExposureDelineationDEN-dir-2002-49)"
          },
          {
            "label": "Major roads noise exposure delineation - night (Noise Directive)",
            "value": "[Major roads noise exposure delineation - night (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/MajorRoadsNoiseExposureDelineationNight-dir-2002-49)"
          },
          {
            "label": "Major railways noise exposure delineation (Noise Directive)",
            "value": "[Major railways noise exposure delineation (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/MajorRailwaysNoiseExposureDelineation-dir-2002-49)"
          },
          {
            "label": "Major railways noise exposure delineation day-evening-night (Noise Directive)",
            "value": "[Major railways noise exposure delineation day-evening-night (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/MajorRailwaysNoiseExposureDelineationDEN-dir-2002-49)"
          },
          {
            "label": "Major railways noise exposure delineation - night (Noise Directive)",
            "value": "[Major railways noise exposure delineation - night (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/MajorRailwaysNoiseExposureDelineationNight-dir-2002-49)"
          },
          {
            "label": "Major airports noise exposure delineation (Noise Directive)",
            "value": "[Major airports noise exposure delineation (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/MajorAirportsNoiseExposureDelineation-dir-2002-49)"
          },
          {
            "label": "Major airports noise exposure delineation day-evening-night (Noise Directive)",
            "value": "[Major airports noise exposure delineation day-evening-night (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/MajorAirportsNoiseExposureDelineationDEN-dir-2002-49)"
          },
          {
            "label": "Major airports noise exposure delineation - night (Noise Directive)",
            "value": "[Major airports noise exposure delineation - night (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/MajorAirportsNoiseExposureDelineationNight-dir-2002-49)"
          },
          {
            "label": "Agglomerations - roads noise exposure delineation (Noise Directive)",
            "value": "[Agglomerations - roads noise exposure delineation (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Agglomerations-RoadsNoiseExposureDelineation-dir-2002-49)"
          },
          {
            "label": "Agglomerations - roads noise exposure delineation day-evening-night (Noise\nDirective)",
            "value": "[Agglomerations - roads noise exposure delineation day-evening-night (Noise\nDirective)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Agglomerations-RoadsNoiseExposureDelineationDEN-dir-2002-49)"
          },
          {
            "label": "Agglomerations - roads noise exposure delineation - night (Noise Directive)",
            "value": "[Agglomerations - roads noise exposure delineation - night (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Agglomerations-RoadsNoiseExposureDelineationNight-dir-2002-49)"
          },
          {
            "label": "Agglomerations - railways noise exposure delineation (Noise Directive)",
            "value": "[Agglomerations - railways noise exposure delineation (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Agglomerations-RailwaysNoiseExposureDelineation-dir-2002-49)"
          },
          {
            "label": "Agglomerations - railways noise exposure delineation day-evening-night (Noise\nDirective)",
            "value": "[Agglomerations - railways noise exposure delineation day-evening-night\n(Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Agglomerations-RailwaysNoiseExposureDelineationDEN-dir-2002-49)"
          },
          {
            "label": "Agglomerations - railways noise exposure delineation - night (Noise Directive)",
            "value": "[Agglomerations - railways noise exposure delineation - night (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Agglomerations-RailwaysNoiseExposureDelineationNight-dir-2002-49)"
          },
          {
            "label": "Agglomerations - aircraft noise exposure delineation (Noise Directive)",
            "value": "[Agglomerations - aircraft noise exposure delineation (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Agglomerations-AircraftNoiseExposureDelineation-dir-2002-49)"
          },
          {
            "label": "Agglomerations - aircraft noise exposure delineation day-evening-night (Noise\nDirective)",
            "value": "[Agglomerations - aircraft noise exposure delineation day-evening-night\n(Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Agglomerations-AircraftNoiseExposureDelineationDEN-dir-2002-49)"
          },
          {
            "label": "Agglomerations - aircraft noise exposure delineation - night (Noise Directive)",
            "value": "[Agglomerations - aircraft noise exposure delineation - night (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Agglomerations-AircraftNoiseExposureDelineationNight-dir-2002-49)"
          },
          {
            "label": "Agglomerations - industrial noise exposure delineation (Noise Directive)",
            "value": "[Agglomerations - industrial noise exposure delineation (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Agglomerations-IndustrialNoiseExposureDelineation-dir-2002-49)"
          },
          {
            "label": "Agglomerations - industrial noise exposure delineation day-evening-night\n(Noise Directive)",
            "value": "[Agglomerations - industrial noise exposure delineation day-evening-night\n(Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Agglomerations-IndustrialNoiseExposureDelineationDEN-dir-2002-49)"
          },
          {
            "label": "Agglomerations – industrial noise exposure delineation - night (Noise Directive)",
            "value": "[Agglomerations – industrial noise exposure delineation - night (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Agglomerations-IndustrialNoiseExposureDelineationNight-dir-2002-49)"
          },
          {
            "label": "Agglomerations - noise exposure delineation (Noise Directive)",
            "value": "[Agglomerations - noise exposure delineation (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Agglomerations-NoiseExposureDelineation-dir-2002-49)"
          },
          {
            "label": "Agglomerations - noise exposure delineation day-evening-night (Noise Directive)",
            "value": "[Agglomerations - noise exposure delineation day-evening-night (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Agglomerations-NoiseExposureDelineationDEN-dir-2002-49)"
          },
          {
            "label": "Agglomerations - noise exposure delineation - night (Noise Directive)",
            "value": "[Agglomerations - noise exposure delineation - night (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Agglomerations-NoiseExposureDelineationNight-dir-2002-49)"
          },
          {
            "label": "Directive 2006/21/EC",
            "value": "[Directive 2006/21/EC](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/dir-2006-21)"
          },
          {
            "label": "Facilities for managing extractive waste (Extractive Waste Directive)",
            "value": "[Facilities for managing extractive waste (Extractive Waste Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/FacilitiesForManagingExtractiveWaste-dir-2006-21)"
          },
          {
            "label": "Directive 2006/7/EC",
            "value": "[Directive 2006/7/EC](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/dir-2006-7)"
          },
          {
            "label": "Bathing water sites (Bathing Water Directive)",
            "value": "[Bathing water sites (Bathing Water Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/BathingWaterSites-dir-2006-7)"
          },
          {
            "label": "Directive 2007/60/EC",
            "value": "[Directive 2007/60/EC](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/dir-2007-60)"
          },
          {
            "label": "Preliminary flood risk assessment (Floods Directive)",
            "value": "[Preliminary flood risk assessment (Floods Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/PreliminaryFloodRiskAssessment-dir-2007-60)"
          },
          {
            "label": "Preliminary flood risk assessment - observed events (Floods Directive)",
            "value": "[Preliminary flood risk assessment - observed events (Floods Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/PreliminaryFloodRiskAssessment-ObservedEvents-dir-2007-60)"
          },
          {
            "label": "Preliminary flood risk assessment - potential future events (Floods Directive)",
            "value": "[Preliminary flood risk assessment - potential future events (Floods Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/PreliminaryFloodRiskAssessment-PotentialFutureEvents-dir-2007-60)"
          },
          {
            "label": "Flood hazard areas low probability scenario (Floods Directive)",
            "value": "[Flood hazard areas low probability scenario (Floods Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/FloodHazardAreasLowProbabilityScenario-dir-2007-60)"
          },
          {
            "label": "Flood hazard areas medium probability scenario (Floods Directive)",
            "value": "[Flood hazard areas medium probability scenario (Floods Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/FloodHazardAreasMediumProbabilityScenario-dir-2007-60)"
          },
          {
            "label": "Flood hazard areas high probability scenario (Floods Directive)",
            "value": "[Flood hazard areas high probability scenario (Floods Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/FloodHazardAreasHighProbabilityScenario-dir-2007-60)"
          },
          {
            "label": "Flood risk zones low probability scenario (Floods Directive)",
            "value": "[Flood risk zones low probability scenario (Floods Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/FloodRiskZonesLowProbabilityScenario-dir-2007-60)"
          },
          {
            "label": "Flood risk zones medium probability scenario (Floods Directive)",
            "value": "[Flood risk zones medium probability scenario (Floods Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/FloodRiskZonesMediumProbabilityScenario-dir-2007-60)"
          },
          {
            "label": "Flood risk zones high probability scenario (Floods Directive)",
            "value": "[Flood risk zones high probability scenario (Floods Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/FloodRiskZonesHighProbabilityScenario-dir-2007-60)"
          },
          {
            "label": "Management units (Floods Directive)",
            "value": "[Management units (Floods Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/ManagementUnits-dir-2007-60)"
          },
          {
            "label": "Directive 2008/50/EC",
            "value": "[Directive 2008/50/EC](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/dir-2008-50)"
          },
          {
            "label": "Management zones and agglomerations (Air Quality Directive)",
            "value": "[Management zones and agglomerations (Air Quality Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/ManagementZonesAndAgglomerations-dir-2008-50)"
          },
          {
            "label": "Management zones (Air Quality Directive)",
            "value": "[Management zones (Air Quality Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/ManagementZones-dir-2008-50)"
          },
          {
            "label": "Agglomerations (Air Quality Directive)",
            "value": "[Agglomerations (Air Quality Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Agglomerations-dir-2008-50)"
          },
          {
            "label": "Model areas (Air Quality Directive)",
            "value": "[Model areas (Air Quality Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/ModelAreas-dir-2008-50)"
          },
          {
            "label": "Monitoring stations (Air Quality Directive)",
            "value": "[Monitoring stations (Air Quality Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/MonitoringStations-dir-2008-50)"
          },
          {
            "label": "Measurement and modelling data (Air Quality Directive)",
            "value": "[Measurement and modelling data (Air Quality Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/MeasurementAndModellingData-dir-2008-50)"
          },
          {
            "label": "Directive 2008/56/EC",
            "value": "[Directive 2008/56/EC](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/dir-2008-56)"
          },
          {
            "label": "Marine regions and units (Marine Strategy Framework Directive)",
            "value": "[Marine regions and units (Marine Strategy Framework Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/MarineRegionsAndUnits-dir-2008-56)"
          },
          {
            "label": "Marine sub-regions (Marine Strategy Framework Directive)",
            "value": "[Marine sub-regions (Marine Strategy Framework Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/MarineSubRegions-dir-2008-56)"
          },
          {
            "label": "Marine assessment units (Marine Strategy Framework Directive)",
            "value": "[Marine assessment units (Marine Strategy Framework Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/MarineAssessmentUnits-dir-2008-56)"
          },
          {
            "label": "Directive 2009/147/EC",
            "value": "[Directive 2009/147/EC](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/dir-2009-147)"
          },
          {
            "label": "Pan-European biogeographical regions (Birds Directive)",
            "value": "[Pan-European biogeographical regions (Birds Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/PanEuropeanBiogeographicalRegions-dir-2009-147)"
          },
          {
            "label": "Bird species distribution and range (Birds Directive)",
            "value": "[Bird species distribution and range (Birds Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/BirdSpeciesDistributionAndRange-dir-2009-147)"
          },
          {
            "label": "Bird species distribution (Birds Directive)",
            "value": "[Bird species distribution (Birds Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/BirdSpeciesDistribution-dir-2009-147)"
          },
          {
            "label": "Bird species distribution - sensitive (Birds Directive)",
            "value": "[Bird species distribution - sensitive (Birds Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/BirdSpeciesDistribution-Sensitive-dir-2009-147)"
          },
          {
            "label": "Birds range (Birds Directive)",
            "value": "[Birds range (Birds Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/BirdsRange-dir-2009-147)"
          },
          {
            "label": "Birds range - sensitive (Birds Directive)",
            "value": "[Birds range - sensitive (Birds Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/BirdsRange-Sensitive-dir-2009-147)"
          },
          {
            "label": "Natura 2000 sites (Birds Directive)",
            "value": "[Natura 2000 sites (Birds Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Natura2000Sites-dir-2009-147)"
          },
          {
            "label": "Directive 2010/75/EU",
            "value": "[Directive 2010/75/EU](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/dir-2010-75)"
          },
          {
            "label": "Industrial sites - EU Registry (Industrial Emissions Directive)",
            "value": "[Industrial sites - EU Registry (Industrial Emissions Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/IndustrialSites-EURegistry-dir-2010-75)"
          },
          {
            "label": "Installations (Industrial Emissions Directive)",
            "value": "[Installations (Industrial Emissions Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Installations-dir-2010-75)"
          },
          {
            "label": "Large combustion plants (Industrial Emissions Directive)",
            "value": "[Large combustion plants (Industrial Emissions Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/LargeCombustionPlants-dir-2010-75)"
          },
          {
            "label": "Emissions (Industrial Emissions Directive)",
            "value": "[Emissions (Industrial Emissions Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Emissions-dir-2010-75)"
          },
          {
            "label": "Directive 2012/18/EU",
            "value": "[Directive 2012/18/EU](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/dir-2012-18)"
          },
          {
            "label": "Establishments involving dangerous substances (SEVESO III Directive)",
            "value": "[Establishments involving dangerous substances (SEVESO III Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/EstablishmentsInvolvingDangerousSubstances-dir-2012-18)"
          },
          {
            "label": "Directive 86/278/EEC",
            "value": "[Directive 86/278/EEC](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/dir-1986-278)"
          },
          {
            "label": "Agricultural facilities receiving sludge (Sewage Sludge Directive)",
            "value": "[Agricultural facilities receiving sludge (Sewage Sludge Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/AgriculturalFacilitiesReceivingSludge-dir-1986-278)"
          },
          {
            "label": "Agricultural sites where sludge is deposited (Sewage Sludge Directive)",
            "value": "[Agricultural sites where sludge is deposited (Sewage Sludge Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/AgriculturalSitesWhereSludgeIsDeposited-dir-1986-278)"
          },
          {
            "label": "Directive 91/271/EEC",
            "value": "[Directive 91/271/EEC](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/dir-1991-271)"
          },
          {
            "label": "Agglomerations (Urban Waste Water Treatment Directive)",
            "value": "[Agglomerations (Urban Waste Water Treatment Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Agglomerations-dir-1991-271)"
          },
          {
            "label": "Urban waste-water treatment plants (Urban Waste Water Treatment Directive)",
            "value": "[Urban waste-water treatment plants (Urban Waste Water Treatment Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/UrbanWasteWaterTreatmentPlants-dir-1991-271)"
          },
          {
            "label": "Discharge points to receiving waters (Urban Waste Water Treatment Directive)",
            "value": "[Discharge points to receiving waters (Urban Waste Water Treatment Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/DischargePointsToReceivingWaters-dir-1991-271)"
          },
          {
            "label": "Sensitive areas (Urban Waste-Water Treatment Directive)",
            "value": "[Sensitive areas (Urban Waste-Water Treatment Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/SensitiveAreas-dir-1991-271)"
          },
          {
            "label": "Less sensitive areas (Urban Waste-Water Treatment Directive)",
            "value": "[Less sensitive areas (Urban Waste-Water Treatment Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/LessSensitiveAreas-dir-1991-271)"
          },
          {
            "label": "Sensitive area catchments (Urban Waste-Water Treatment Directive)",
            "value": "[Sensitive area catchments (Urban Waste-Water Treatment Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/SensitiveAreaCatchments-dir-1991-271)"
          },
          {
            "label": "Directive 91/676/EEC",
            "value": "[Directive 91/676/EEC](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/dir-1991-676)"
          },
          {
            "label": "Directive 92/43/EEC",
            "value": "[Directive 92/43/EEC](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/dir-1992-43)"
          },
          {
            "label": "Pan-European biogeographical regions (Habitats Directive)",
            "value": "[Pan-European biogeographical regions (Habitats Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Pan-EuropeanBiogeographicalRegions-dir-1992-43)"
          },
          {
            "label": "Habitat types and species distribution and range (Habitats Directive)",
            "value": "[Habitat types and species distribution and range (Habitats Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/HabitatTypesAndSpeciesDistributionAndRange-dir-1992-43)"
          },
          {
            "label": "Habitat types distribution (Habitats Directive)",
            "value": "[Habitat types distribution (Habitats Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/HabitatTypesDistribution-dir-1992-43)"
          },
          {
            "label": "Habitat types distribution - sensitive (Habitats Directive)",
            "value": "[Habitat types distribution - sensitive (Habitats Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/HabitatTypesDistributionSensitive-dir-1992-43)"
          },
          {
            "label": "Habitat types range (Habitats Directive)",
            "value": "[Habitat types range (Habitats Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/HabitatTypesRange-dir-1992-43)"
          },
          {
            "label": "Species distribution (Habitats Directive)",
            "value": "[Species distribution (Habitats Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/SpeciesDistribution-dir-1992-43)"
          },
          {
            "label": "Species distribution sensitive (Habitats Directive)",
            "value": "[Species distribution sensitive (Habitats Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/SpeciesTypesDistributionSensitive-dir-1992-43)"
          },
          {
            "label": "Species range (Habitats Directive)",
            "value": "[Species range (Habitats Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/SpeciesRange-dir-1992-43)"
          },
          {
            "label": "Natura 2000 sites (Habitats Directive)",
            "value": "[Natura 2000 sites (Habitats Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Natura2000Sites-dir-1992-43)"
          },
          {
            "label": "Directive 98/83/EC",
            "value": "[Directive 98/83/EC](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/dir-1998-83)"
          },
          {
            "label": "Drinking water supply zones (Drinking Water Directive)",
            "value": "[Drinking water supply zones (Drinking Water Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/DrinkingWaterSupplyZones-dir-1998-83)"
          },
          {
            "label": "Large water supply zones (Drinking Water Directive)",
            "value": "[Large water supply zones (Drinking Water Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/LargeWaterSupplyZones-dir-1998-83)"
          },
          {
            "label": "Small water supply zones (Drinking Water Directive)",
            "value": "[Small water supply zones (Drinking Water Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/SmallWaterSupplyZones-dir-1998-83)"
          },
          {
            "label": "Drinking water abstraction points (Drinking Water Directive)",
            "value": "[Drinking water abstraction points (Drinking Water Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/DrinkingWaterAbstractionPoints-dir-1998-83)"
          },
          {
            "label": "EEA Annual Work Programme",
            "value": "[EEA Annual Work Programme](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/EEA-AWP)"
          },
          {
            "label": "Nationally designated areas - CDDA",
            "value": "[Nationally designated areas - CDDA](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/NationallyDesignatedAreasCDDA)"
          },
          {
            "label": "National legislation",
            "value": "[National legislation](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/national-legislation)"
          },
          {
            "label": "National biogeographical regions",
            "value": "[National biogeographical regions](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/NationalBiogeographicalRegions)"
          },
          {
            "label": "National biogeographical regions (Habitats Directive)",
            "value": "[National biogeographical regions (Habitats Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/NationalBiogeographicalRegions-dir-1992-43)"
          },
          {
            "label": "National biogeographical regions (Birds Directive)",
            "value": "[National biogeographical regions (Birds Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/NationalBiogeographicalRegions-dir-2009-147)"
          },
          {
            "label": "Recommendation 2014/70/EU",
            "value": "[Recommendation 2014/70/EU](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/reco-2014-70)"
          },
          {
            "label": "Boreholes (Recommendation on hydraulic fracturing)",
            "value": "[Boreholes (Recommendation on hydraulic fracturing)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Boreholes-reco-2014-70)"
          },
          {
            "label": "Boreholes for hydraulic fracturing (Recommendation on hydraulic fracturing)",
            "value": "[Boreholes for hydraulic fracturing (Recommendation on hydraulic fracturing)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/BoreholesForHydraulicFracturing-reco-2014-70)"
          },
          {
            "label": "Regulation (EU) 2017/852",
            "value": "[Regulation (EU) 2017/852](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/reg-2017-852)"
          },
          {
            "label": "Mercury storage facilities (Mercury Regulation)",
            "value": "[Mercury storage facilities (Mercury Regulation)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/MercuryStorageFacilities-reg-2017-852)"
          },
          {
            "label": "Regulation (EC) 166/2006",
            "value": "[Regulation (EC) 166/2006](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/reg-2006-166)"
          },
          {
            "label": "Industrial sites - EU Registry (European Pollutant Release and Transfer Register)",
            "value": "[Industrial sites - EU Registry (European Pollutant Release and Transfer\nRegister)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/IndustrialSites-EURegistry-reg-2006-166)"
          },
          {
            "label": "Sites and facilities (European Pollutant Release and Transfer Register)",
            "value": "[Sites and facilities (European Pollutant Release and Transfer Register)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/SitesAndFacilities-reg-2006-166)"
          },
          {
            "label": "Actual pollutant releases (European Pollutant Release and Transfer Register)",
            "value": "[Actual pollutant releases (European Pollutant Release and Transfer Register)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/ActualPollutantReleases-reg-2006-166)"
          },
          {
            "label": "Regulation (EU) 1143/2014",
            "value": "[Regulation (EU) 1143/2014](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/reg-2014-1143)"
          },
          {
            "label": "Invasive alien species distribution (Invasive Alien Species Directive)",
            "value": "[Invasive alien species distribution (Invasive Alien Species Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/InvasiveAlienSpeciesDistribution-reg-2014-1143)"
          },
          {
            "label": "Monitoring stations (Nitrates Directive)",
            "value": "[Monitoring stations (Nitrates Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/MonitoringStations-dir-1991-676)"
          },
          {
            "label": "Marine regions (Marine Strategy Framework Directive)",
            "value": "[Marine regions (Marine Strategy Framework Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/MarineRegions-dir-2008-56)"
          },
          {
            "label": "Marine reporting units (Marine Strategy Framework Directive)",
            "value": "[Marine reporting units (Marine Strategy Framework Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/MSFDReportingUnits-dir-2008-56)"
          },
          {
            "label": "Directive 1999/31/EC",
            "value": "[Directive 1999/31/EC](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/dir-1999-31)"
          },
          {
            "label": "Exempted islands and isolated settlements (Landfill of Waste Directive)",
            "value": "[Exempted islands and isolated settlements (Landfill of Waste Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/ExemptedIslandsAndIsolatedSettlements-dir-1999-31)"
          },
          {
            "label": "Landfill of waste sites (Landfill of Waste Directive)",
            "value": "[Landfill of waste sites (Landfill of Waste Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/LandfillOfWasteSites-dir-1999-31)"
          }
        ]
      },
      {
        "name": "md-dataset.identification.spatialScopeDescriptiveKeyword",
        "required": false,
        "minOccurs": 0,
        "maxOccurs": 1,
        "comment": "spatialScopeDescriptiveKeyword",
        "label": "Spatial scope",
        "description": null,
        "type": "enum",
        "schema": null,
        "defaultValue": null,
        "autofillRule": null,
        "visibility": true,
        "editable": true,
        "enumValues": [
          {
            "label": "National",
            "value": "[National](http://inspire.ec.europa.eu/metadata-codelist/SpatialScope/national)"
          },
          {
            "label": "Regional",
            "value": "[Regional](http://inspire.ec.europa.eu/metadata-codelist/SpatialScope/regional)"
          },
          {
            "label": "Local",
            "value": "[Local](http://inspire.ec.europa.eu/metadata-codelist/SpatialScope/local)"
          },
          {
            "label": "Global",
            "value": "[Global](http://inspire.ec.europa.eu/metadata-codelist/SpatialScope/global)"
          },
          {
            "label": "European",
            "value": "[European](http://inspire.ec.europa.eu/metadata-codelist/SpatialScope/european)"
          }
        ]
      },
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
        "defaultValue": null,
        "autofillRule": null,
        "visibility": true,
        "editable": true,
        "targets": {
          "bsp": "md-dataset.identification.keyword_simple"
        }
      },
      {
        "name": "md-dataset.identification.topicCategory",
        "required": true,
        "minOccurs": 1,
        "maxOccurs": -1,
        "comment": "ISO B.5.27 topicCategory",
        "label": "Thematic Classification",
        "description": "Topic categories in accordance with EN ISO 19115.",
        "type": "enum",
        "schema": null,
        "defaultValue": null,
        "autofillRule": null,
        "visibility": true,
        "editable": true,
        "enumValues": [
          {
            "label": "Biota",
            "value": "BIOTA"
          },
          {
            "label": "Boundaries",
            "value": "BOUNDARIES"
          },
          {
            "label": "Climatology Meteorology Atmosphere",
            "value": "CLIMATOLOGY_METEOROLOGY_ATMOSPHERE"
          },
          {
            "label": "Economy",
            "value": "ECONOMY"
          },
          {
            "label": "Elevation",
            "value": "ELEVATION"
          },
          {
            "label": "Environment",
            "value": "ENVIRONMENT"
          },
          {
            "label": "Farming",
            "value": "FARMING"
          },
          {
            "label": "Geosciences",
            "value": "GEOSCIENTIFIC_INFORMATION"
          },
          {
            "label": "Health",
            "value": "HEALTH"
          },
          {
            "label": "Imagery",
            "value": "IMAGERY_BASE_MAPS_EARTH_COVER"
          },
          {
            "label": "Inland Waters",
            "value": "INLAND_WATERS"
          },
          {
            "label": "Intelligence and Military",
            "value": "INTELLIGENCE_MILITARY"
          },
          {
            "label": "Location",
            "value": "LOCATION"
          },
          {
            "label": "Oceans",
            "value": "OCEANS"
          },
          {
            "label": "Planning, Cadastre",
            "value": "PLANNING_CADASTRE"
          },
          {
            "label": "Society",
            "value": "SOCIETY"
          },
          {
            "label": "Structures",
            "value": "STRUCTURE"
          },
          {
            "label": "Transportation",
            "value": "TRANSPORTATION"
          },
          {
            "label": "Utilities and communication",
            "value": "UTILITIES_COMMUNICATION"
          }
        ],
        "targets": {
          "bsp": "md-dataset.identification.topicCategory"
        }
      },
      {
        "name": "md-dataset.dataQualityLineage",
        "required": true,
        "minOccurs": 1,
        "maxOccurs": 1,
        "comment": "dataQualityLineage",
        "label": "Data Lineage",
        "description": "The history of a data set, and the life cycle from collection and acquisition through compilation and derivation to its current form, in accordance with EN ISO 19101.",
        "type": "string",
        "schema": null,
        "defaultValue": null,
        "autofillRule": null,
        "visibility": true,
        "editable": true,
        "targets": {
          "bsp": "md-dataset.dataQualityLineage"
        }
      },
      {
        "name": "md-dataset.identification.scale",
        "required": false,
        "minOccurs": 0,
        "maxOccurs": 1,
        "comment": "spatial resolution",
        "label": "Scale 1:X",
        "description": "Scale denominator",
        "type": "string",
        "schema": null,
        "defaultValue": null,
        "autofillRule": null,
        "visibility": true,
        "editable": true,
        "targets": {
          "bsp": "md-dataset.identification.scale"
        }
      },
      {
        "name": "md-dataset.isInspireDataset",
        "required": true,
        "minOccurs": 1,
        "maxOccurs": 1,
        "comment": "generates keyword inspireidentifieziert if enabled, should be preset\nby theme-manager.",
        "label": "INSPIRE Data set",
        "description": "When selected, the dataset is published as INSPIRE identified.",
        "type": "boolean",
        "schema": null,
        "defaultValue": true,
        "autofillRule": null,
        "visibility": true,
        "editable": false,
        "targets": {
          "bsp": "md-dataset.isInspireDataset"
        }
      }
    ]
  },
  {
    "categoryName": "dataset_geographicExtent",
    "title": "Data set - Geographic extent",
    "name": "dataset_geographicExtent",
    "expand": false,
    "fields": [
      {
        "name": "md-dataset.identification.geographicExtent.eastBoundLongitude",
        "required": true,
        "minOccurs": 1,
        "maxOccurs": 1,
        "comment": "eastBoundLongitude",
        "label": "eastBoundLongitude",
        "description": null,
        "type": "float",
        "schema": null,
        "defaultValue": null,
        "autofillRule": "{% verbatim %}{{dataset.eastBoundLongitude}}{% endverbatim %}",
        "visibility": true,
        "editable": true,
        "targets": {
          "bsp": "md-dataset.identification.geographicExtent.eastBoundLongitude"
        }
      },
      {
        "name": "md-dataset.identification.geographicExtent.northBoundLatitude",
        "required": true,
        "minOccurs": 1,
        "maxOccurs": 1,
        "comment": "northBoundLatitude",
        "label": "northBoundLatitude",
        "description": null,
        "type": "float",
        "schema": null,
        "defaultValue": null,
        "autofillRule": "{% verbatim %}{{dataset.northBoundLatitude}}{% endverbatim %}",
        "visibility": true,
        "editable": true,
        "targets": {
          "bsp": "md-dataset.identification.geographicExtent.northBoundLatitude"
        }
      },
      {
        "name": "md-dataset.identification.geographicExtent.southBoundLatitude",
        "required": true,
        "minOccurs": 1,
        "maxOccurs": 1,
        "comment": "southBoundLatitude",
        "label": "southBoundLatitude",
        "description": null,
        "type": "float",
        "schema": null,
        "defaultValue": null,
        "autofillRule": "{% verbatim %}{{dataset.southBoundLatitude}}{% endverbatim %}",
        "visibility": true,
        "editable": true,
        "targets": {
          "bsp": "md-dataset.identification.geographicExtent.southBoundLatitude"
        }
      },
      {
        "name": "md-dataset.identification.geographicExtent.westBoundLongitude",
        "required": true,
        "minOccurs": 1,
        "maxOccurs": 1,
        "comment": "westBoundLongitude",
        "label": "westBoundLongitude",
        "description": null,
        "type": "float",
        "schema": null,
        "defaultValue": null,
        "autofillRule": "{% verbatim %}{{dataset.westBoundLongitude}}{% endverbatim %}",
        "visibility": true,
        "editable": true,
        "targets": {
          "bsp": "md-dataset.identification.geographicExtent.westBoundLongitude"
        }
      },
      {
        "name": "md-dataset.identification.geographicExtent.geographicDescriptionIdentifier",
        "required": false,
        "minOccurs": 0,
        "maxOccurs": 1,
        "comment": "md-dataset.identification.geographicExtent.geographicDescriptionIdentifier",
        "label": "Geographic identifier",
        "description": "",
        "type": "string",
        "schema": null,
        "defaultValue": null,
        "autofillRule": null,
        "visibility": true,
        "editable": true,
        "targets": {
          "bsp": "md-dataset.identification.geographicExtent.geographicDescriptionIdentifier"
        }
      }
    ]
  },
  {
    "categoryName": "dataset_temportalExtent",
    "title": "Time range",
    "name": "dataset_temportalExtent",
    "expand": false,
    "fields": [
      {
        "name": "md-dataset.identification.temporalExtent.beginPosition",
        "required": false,
        "minOccurs": 0,
        "maxOccurs": -1,
        "comment": "beginPosition",
        "label": "Start date",
        "description": "The time range defines the time period that the content of the resource covers.",
        "type": "date",
        "schema": null,
        "defaultValue": null,
        "autofillRule": null,
        "visibility": true,
        "editable": true,
        "targets": {
          "bsp": "md-dataset.identification.temporalExtent.beginPosition"
        }
      },
      {
        "name": "md-dataset.identification.temporalExtent.endPosition",
        "required": false,
        "minOccurs": 0,
        "maxOccurs": -1,
        "comment": "endPosition",
        "label": "End date",
        "description": "The time range defines the time period that the content of the resource covers.",
        "type": "date",
        "schema": null,
        "defaultValue": null,
        "autofillRule": null,
        "visibility": true,
        "editable": true,
        "targets": {
          "bsp": "md-dataset.identification.temporalExtent.endPosition"
        }
      },
      {
        "name": "md-dataset.referenceSystemInfoCode",
        "required": false,
        "minOccurs": 0,
        "maxOccurs": -1,
        "comment": "md-dataset.referenceSystemInfoCode",
        "label": "Time reference system",
        "description": "Identification of the time reference system(s) used in the dataset.",
        "type": "string",
        "schema": null,
        "defaultValue": null,
        "autofillRule": null,
        "visibility": true,
        "editable": true,
        "targets": {
          "bsp": "md-dataset.referenceSystemInfoCode"
        }
      }
    ]
  },
  {
    "categoryName": "dataset_contactForMetadata",
    "title": "Data set - Contact for metadata",
    "name": "dataset_contactForMetadata",
    "expand": false,
    "fields": [
      {
        "name": "md-dataset.contactForMetadata.individualName",
        "required": true,
        "minOccurs": 1,
        "maxOccurs": 1,
        "comment": "ISO B.3.2.2 - individualName",
        "label": "Name",
        "description": null,
        "type": "string",
        "schema": null,
        "defaultValue": null,
        "autofillRule": "{% verbatim %}{{user.fullName}}{% endverbatim %}",
        "visibility": true,
        "editable": true,
        "targets": {
          "bsp": "md-dataset.contactForMetadata.individualName"
        }
      },
      {
        "name": "md-dataset.contactForMetadata.authorityUrl",
        "required": true,
        "minOccurs": 1,
        "maxOccurs": 1,
        "comment": "authorityUrl für INSPIRE-Extended-Capabilities",
        "label": "Namespace (Authority URL)",
        "description": null,
        "type": "string",
        "schema": null,
        "defaultValue": null,
        "autofillRule": "{% verbatim %}{{organisation.web}}{% endverbatim %}",
        "visibility": true,
        "editable": true,
        "targets": {
          "bsp": "md-dataset.contactForMetadata.authorityUrl"
        }
      },
      {
        "name": "md-dataset.contactForMetadata.organisationName",
        "required": true,
        "minOccurs": 1,
        "maxOccurs": 1,
        "comment": "ISO B.3.2.2 - organisationName",
        "label": "Organisation Name",
        "description": null,
        "type": "string",
        "schema": null,
        "defaultValue": null,
        "autofillRule": "{% verbatim %}{{organisation.name}}{% endverbatim %}",
        "visibility": true,
        "editable": true,
        "targets": {
          "bsp": "md-dataset.contactForMetadata.organisationName"
        }
      },
      {
        "name": "md-dataset.contactForMetadata.positionName",
        "required": false,
        "minOccurs": 0,
        "maxOccurs": 1,
        "comment": "positionName",
        "label": "Position",
        "description": null,
        "type": "string",
        "schema": null,
        "defaultValue": null,
        "autofillRule": null,
        "visibility": true,
        "editable": true,
        "targets": {
          "bsp": "md-dataset.contactForMetadata.positionName"
        }
      },
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
      },
      {
        "name": "md-dataset.contactForMetadata.email",
        "required": true,
        "minOccurs": 1,
        "maxOccurs": 1,
        "comment": "email",
        "label": "Email",
        "description": null,
        "type": "string",
        "schema": "email",
        "defaultValue": null,
        "autofillRule": "{% verbatim %}{{user.email}}{% endverbatim %}",
        "visibility": true,
        "editable": true,
        "targets": {
          "bsp": "md-dataset.contactForMetadata.email"
        }
      },
      {
        "name": "md-dataset.contactForMetadata.deliveryPoint",
        "required": false,
        "minOccurs": 0,
        "maxOccurs": 1,
        "comment": "ISO B.3.2.2 deliveryPoint",
        "label": "Street",
        "description": null,
        "type": "string",
        "schema": null,
        "defaultValue": null,
        "autofillRule": "{% verbatim %}{{organisation.street}}{% endverbatim %}",
        "visibility": true,
        "editable": true,
        "targets": {
          "bsp": "md-dataset.contactForMetadata.deliveryPoint"
        }
      },
      {
        "name": "md-dataset.contactForMetadata.postalCode",
        "required": false,
        "minOccurs": 0,
        "maxOccurs": 1,
        "comment": "ISO B.3.2.2 - postalcode",
        "label": "Post code",
        "description": null,
        "type": "string",
        "schema": null,
        "defaultValue": null,
        "autofillRule": "{% verbatim %}{{organisation.zip}}{% endverbatim %}",
        "visibility": true,
        "editable": true,
        "targets": {
          "bsp": "md-dataset.contactForMetadata.postalCode"
        }
      },
      {
        "name": "md-dataset.contactForMetadata.city",
        "required": false,
        "minOccurs": 0,
        "maxOccurs": 1,
        "comment": "ISO B.3.2.2##382 city",
        "label": "City",
        "description": null,
        "type": "string",
        "schema": null,
        "defaultValue": null,
        "autofillRule": "{% verbatim %}{{organisation.city}}{% endverbatim %}",
        "visibility": true,
        "editable": true,
        "targets": {
          "bsp": "md-dataset.contactForMetadata.city"
        }
      },
      {
        "name": "md-dataset.contactForMetadata.administrativeArea",
        "required": false,
        "minOccurs": 0,
        "maxOccurs": 1,
        "comment": "ISO B.3.2.2##383 administrativeArea",
        "label": "Administrative Area",
        "description": "",
        "type": "string",
        "schema": null,
        "defaultValue": null,
        "autofillRule": "{% verbatim %}{{organisation.state}}{% endverbatim %}",
        "visibility": true,
        "editable": true,
        "targets": {
          "bsp": "md-dataset.contactForMetadata.administrativeArea"
        }
      },
      {
        "name": "md-dataset.contactForMetadata.country",
        "required": false,
        "minOccurs": 0,
        "maxOccurs": 1,
        "comment": "country",
        "label": "Country",
        "description": null,
        "type": "string",
        "schema": null,
        "defaultValue": null,
        "autofillRule": "{% verbatim %}{{organisation.country}}{% endverbatim %}",
        "visibility": true,
        "editable": true,
        "targets": {
          "bsp": "md-dataset.contactForMetadata.country"
        }
      },
      {
        "name": "md-dataset.contactForMetadata.voicePhone",
        "required": false,
        "minOccurs": 0,
        "maxOccurs": 1,
        "comment": "ISO B.3.2.3 - voicePhone",
        "label": "Phone",
        "description": null,
        "type": "string",
        "schema": null,
        "defaultValue": null,
        "autofillRule": "{% verbatim %}{{user.phone}}{% endverbatim %}",
        "visibility": true,
        "editable": true,
        "targets": {
          "bsp": "md-dataset.contactForMetadata.voicePhone"
        }
      },
      {
        "name": "md-dataset.contactForMetadata.facsimile",
        "required": false,
        "minOccurs": 0,
        "maxOccurs": 1,
        "comment": "ISO B.3.2.2 facsimile",
        "label": "Facsimile",
        "description": null,
        "type": "string",
        "schema": null,
        "defaultValue": null,
        "autofillRule": null,
        "visibility": true,
        "editable": true,
        "targets": {
          "bsp": "md-dataset.contactForMetadata.facsimile"
        }
      }
    ]
  },
  {
    "categoryName": "dataset_contactForResource",
    "title": "Data set - Contact for Data set",
    "name": "dataset_contactForResource",
    "expand": false,
    "fields": [
      {
        "name": "md-dataset.identification.contactForResource.individualName",
        "required": true,
        "minOccurs": 1,
        "maxOccurs": 1,
        "comment": "ISO B.3.2.2 - individualName",
        "label": "Name",
        "description": null,
        "type": "string",
        "schema": null,
        "defaultValue": null,
        "autofillRule": "{% verbatim %}{{user.fullName}}{% endverbatim %}",
        "visibility": true,
        "editable": true,
        "targets": {
          "bsp": "md-dataset.identification.contactForResource.individualName"
        }
      },
      {
        "name": "md-dataset.identification.contactForResource.authorityUrl",
        "required": true,
        "minOccurs": 1,
        "maxOccurs": 1,
        "comment": "authorityUrl für INSPIRE-Extended-Capabilities",
        "label": "Namespace (Authority URL)",
        "description": null,
        "type": "string",
        "schema": null,
        "defaultValue": null,
        "autofillRule": "{% verbatim %}{{organisation.web}}{% endverbatim %}",
        "visibility": true,
        "editable": true,
        "targets": {
          "bsp": "md-dataset.identification.contactForResource.authorityUrl"
        }
      },
      {
        "name": "md-dataset.identification.contactForResource.organisationName",
        "required": true,
        "minOccurs": 1,
        "maxOccurs": 1,
        "comment": "ISO B.3.2.2 - organisationName",
        "label": "Organisation name",
        "description": null,
        "type": "string",
        "schema": null,
        "defaultValue": null,
        "autofillRule": "{% verbatim %}{{organisation.name}}{% endverbatim %}",
        "visibility": true,
        "editable": true,
        "targets": {
          "bsp": "md-dataset.identification.contactForResource.organisationName"
        }
      },
      {
        "name": "md-dataset.identification.contactForResource.positionName",
        "required": false,
        "minOccurs": 0,
        "maxOccurs": 1,
        "comment": "positionName",
        "label": "Position",
        "description": "Position or function of the responsible person",
        "type": "string",
        "schema": null,
        "defaultValue": null,
        "autofillRule": null,
        "visibility": true,
        "editable": true,
        "targets": {
          "bsp": "md-dataset.identification.contactForResource.positionName"
        }
      },
      {
        "name": "md-dataset.identification.contactForResource.roleCode",
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
          "bsp": "md-dataset.identification.contactForResource.roleCode"
        }
      },
      {
        "name": "md-dataset.identification.contactForResource.email",
        "required": true,
        "minOccurs": 1,
        "maxOccurs": 1,
        "comment": "email",
        "label": "Email",
        "description": null,
        "type": "string",
        "schema": "email",
        "defaultValue": null,
        "autofillRule": "{% verbatim %}{{user.email}}{% endverbatim %}",
        "visibility": true,
        "editable": true,
        "targets": {
          "bsp": "md-dataset.identification.contactForResource.email"
        }
      },
      {
        "name": "md-dataset.identification.contactForResource.deliveryPoint",
        "required": false,
        "minOccurs": 0,
        "maxOccurs": 1,
        "comment": "ISO B.3.2.2 deliveryPoint",
        "label": "Street",
        "description": null,
        "type": "string",
        "schema": null,
        "defaultValue": null,
        "autofillRule": "{% verbatim %}{{organisation.street}}{% endverbatim %}",
        "visibility": true,
        "editable": true,
        "targets": {
          "bsp": "md-dataset.identification.contactForResource.deliveryPoint"
        }
      },
      {
        "name": "md-dataset.identification.contactForResource.postalCode",
        "required": false,
        "minOccurs": 0,
        "maxOccurs": 1,
        "comment": "ISO B.3.2.2 - postalcode",
        "label": "Postal code",
        "description": null,
        "type": "string",
        "schema": null,
        "defaultValue": null,
        "autofillRule": "{% verbatim %}{{organisation.zip}}{% endverbatim %}",
        "visibility": true,
        "editable": true,
        "targets": {
          "bsp": "md-dataset.identification.contactForResource.postalCode"
        }
      },
      {
        "name": "md-dataset.identification.contactForResource.city",
        "required": false,
        "minOccurs": 0,
        "maxOccurs": 1,
        "comment": "ISO B.3.2.2##382 city",
        "label": "City",
        "description": null,
        "type": "string",
        "schema": null,
        "defaultValue": null,
        "autofillRule": "{% verbatim %}{{organisation.city}}{% endverbatim %}",
        "visibility": true,
        "editable": true,
        "targets": {
          "bsp": "md-dataset.identification.contactForResource.city"
        }
      },
      {
        "name": "md-dataset.identification.contactForResource.administrativeArea",
        "required": false,
        "minOccurs": 0,
        "maxOccurs": 1,
        "comment": "ISO B.3.2.2##383 administrativeArea",
        "label": "Administrative Area",
        "description": null,
        "type": "string",
        "schema": null,
        "defaultValue": null,
        "autofillRule": "{% verbatim %}{{organisation.state}}{% endverbatim %}",
        "visibility": true,
        "editable": true,
        "targets": {
          "bsp": "md-dataset.identification.contactForResource.administrativeArea"
        }
      },
      {
        "name": "md-dataset.identification.contactForResource.country",
        "required": false,
        "minOccurs": 0,
        "maxOccurs": 1,
        "comment": "country",
        "label": "Country",
        "description": null,
        "type": "string",
        "schema": null,
        "defaultValue": null,
        "autofillRule": "{% verbatim %}{{organisation.country}}{% endverbatim %}",
        "visibility": true,
        "editable": true,
        "targets": {
          "bsp": "md-dataset.identification.contactForResource.country"
        }
      },
      {
        "name": "md-dataset.identification.contactForResource.voicePhone",
        "required": false,
        "minOccurs": 0,
        "maxOccurs": 1,
        "comment": "ISO B.3.2.3 - voicePhone",
        "label": "Phone",
        "description": null,
        "type": "string",
        "schema": null,
        "defaultValue": null,
        "autofillRule": "{% verbatim %}{{user.phone}}{% endverbatim %}",
        "visibility": true,
        "editable": true,
        "targets": {
          "bsp": "md-dataset.identification.contactForResource.voicePhone"
        }
      },
      {
        "name": "md-dataset.identification.contactForResource.facsimile",
        "required": false,
        "minOccurs": 0,
        "maxOccurs": 1,
        "comment": "ISO B.3.2.2 facsimile",
        "label": "Facsimile",
        "description": null,
        "type": "string",
        "schema": null,
        "defaultValue": null,
        "autofillRule": null,
        "visibility": true,
        "editable": true,
        "targets": {
          "bsp": "md-dataset.identification.contactForResource.facsimile"
        }
      }
    ]
  },
  {
    "categoryName": "dataset_resourceMaintenance",
    "title": "Maintenance and updates",
    "name": "dataset_resourceMaintenance",
    "expand": false,
    "fields": [
      {
        "name": "md-dataset.identification.resourceMaintenance.maintenanceAndUpdateFrequency",
        "required": true,
        "minOccurs": 1,
        "maxOccurs": 1,
        "comment": "maintenanceAndUpdateFrequency",
        "label": "Frequency of maintenance and updates",
        "description": "Information about the frequency of updates.",
        "type": "enum",
        "schema": null,
        "defaultValue": null,
        "autofillRule": null,
        "visibility": true,
        "editable": true,
        "enumValues": [
          {
            "label": "Continual",
            "value": "continual"
          },
          {
            "label": "Daily",
            "value": "daily"
          },
          {
            "label": "Weekly",
            "value": "weekly"
          },
          {
            "label": "Fortnightly",
            "value": "fortnightly"
          },
          {
            "label": "Monthly",
            "value": "monthly"
          },
          {
            "label": "Quarterly",
            "value": "quarterly"
          },
          {
            "label": "Biannually",
            "value": "biannually"
          },
          {
            "label": "Annually",
            "value": "annually"
          },
          {
            "label": "As Needed",
            "value": "asNeeded"
          },
          {
            "label": "Irregular",
            "value": "irregular"
          },
          {
            "label": "Not Planned",
            "value": "notPlanned"
          },
          {
            "label": "Unknown",
            "value": "unknown"
          }
        ],
        "targets": {
          "bsp": "md-dataset.identification.resourceMaintenance.maintenanceAndUpdateFrequency"
        }
      },
      {
        "name": "md-dataset.identification.resourceMaintenance.userDefinedFrequency",
        "required": false,
        "minOccurs": 0,
        "maxOccurs": 1,
        "comment": "userDefinedFrequency",
        "label": "User defined frequency",
        "description": "User defined maintenance frequency (must be a valid notation for the XML duration type)",
        "type": "string",
        "schema": null,
        "defaultValue": null,
        "autofillRule": null,
        "visibility": true,
        "editable": true,
        "targets": {
          "bsp": "md-dataset.identification.resourceMaintenance.userDefinedFrequency"
        }
      },
      {
        "name": "md-dataset.identification.resourceMaintenance.maintenanceNote",
        "required": false,
        "minOccurs": 0,
        "maxOccurs": -1,
        "comment": "maintenanceNote",
        "label": "Maintenance and update note",
        "description": "Information regarding special resource maintenance requirements.",
        "type": "string",
        "schema": null,
        "defaultValue": null,
        "autofillRule": null,
        "visibility": true,
        "editable": true,
        "targets": {
          "bsp": "md-dataset.identification.resourceMaintenance.maintenanceNote"
        }
      }
    ]
  },
  {
    "categoryName": "dataset_more",
    "title": "Data set - More information",
    "name": "dataset_more",
    "expand": false,
    "fields": [
      {
        "name": "md-dataset.mdIdentifierLocalId",
        "required": false,
        "minOccurs": 0,
        "maxOccurs": 1,
        "comment": "MDIdentifier.code.localId",
        "label": "Dataset Identifier (MDIdentifier.code.localId)",
        "description": "",
        "type": "string",
        "schema": null,
        "defaultValue": null,
        "autofillRule": null,
        "visibility": true,
        "editable": false,
        "targets": {
          "bsp": "md-dataset.mdIdentifierLocalId"
        }
      },
      {
        "name": "md-dataset.mdIdentifierNamespace",
        "required": true,
        "minOccurs": 1,
        "maxOccurs": 1,
        "comment": "MDIdentifier.code.namespace",
        "label": "Dataset Identifier (namespace)",
        "description": null,
        "type": "string",
        "schema": null,
        "defaultValue": "haleconnect.com",
        "autofillRule": null,
        "visibility": true,
        "editable": true,
        "targets": {
          "bsp": "md-dataset.mdIdentifierNamespace"
        }
      },
      {
        "name": "md-dataset.customParentIdentifier",
        "required": false,
        "minOccurs": 0,
        "maxOccurs": 1,
        "comment": "Handle with care because this interferes with parent identifiers for series",
        "label": "The identifier of the parent metadata record",
        "description": "Unique identifier of the parent metadata record. For example, if I describe a dataset, the identifier of the parent metadata record is the UUID of the metadata record of the dataset to which the dataset belongs.",
        "type": "string",
        "schema": null,
        "defaultValue": null,
        "autofillRule": null,
        "visibility": true,
        "editable": true,
        "targets": {
          "bsp": "md-dataset.customParentIdentifier"
        }
      },
      {
        "name": "md-dataset.identification.purpose",
        "required": false,
        "minOccurs": 0,
        "maxOccurs": 1,
        "comment": "md-dataset.identification.purpose",
        "label": "Purpose",
        "description": "A summary of the intentions with which the resource(s) were created.",
        "type": "string",
        "schema": null,
        "defaultValue": null,
        "autofillRule": null,
        "visibility": true,
        "editable": true,
        "targets": {
          "bsp": "md-dataset.identification.purpose"
        }
      },
      {
        "name": "md-dataset.hierarchyLevelName",
        "required": false,
        "minOccurs": 0,
        "maxOccurs": -1,
        "comment": "md-dataset.hierarchyLevelName",
        "label": "Harvest to the EU geoportal",
        "description": "The record will be harvested on the European INSPIRE geoportal.",
        "type": "string",
        "schema": null,
        "defaultValue": null,
        "autofillRule": null,
        "visibility": true,
        "editable": true,
        "targets": {
          "bsp": "md-dataset.hierarchyLevelName"
        }
      },
      {
        "name": "md-dataset.identification.characterSetCode",
        "required": false,
        "minOccurs": 0,
        "maxOccurs": -1,
        "comment": "md-dataset.identification.characterSetCode",
        "label": "Character encoding",
        "description": "The character encoding used in the dataset.",
        "type": "enum",
        "schema": null,
        "defaultValue": null,
        "autofillRule": null,
        "visibility": true,
        "editable": true,
        "enumValues": [
          {
            "label": "ucs2",
            "value": "ucs2"
          },
          {
            "label": "ucs4",
            "value": "ucs4"
          },
          {
            "label": "utf7",
            "value": "utf7,"
          },
          {
            "label": "utf8",
            "value": "utf8"
          },
          {
            "label": "utf16",
            "value": "utf16"
          },
          {
            "label": "8859part1",
            "value": "8859part1"
          },
          {
            "label": "8859part2",
            "value": "8859part2"
          },
          {
            "label": "8859part3",
            "value": "8859part3"
          },
          {
            "label": "8859part4",
            "value": "8859part4"
          },
          {
            "label": "8859part5",
            "value": "8859part5"
          },
          {
            "label": "8859part6",
            "value": "8859part6"
          },
          {
            "label": "8859part7",
            "value": "8859part7"
          },
          {
            "label": "8859part8",
            "value": "8859part8"
          },
          {
            "label": "8859part9",
            "value": "8859part9"
          },
          {
            "label": "8859part10",
            "value": "8859part10"
          },
          {
            "label": "8859part11",
            "value": "8859part11"
          },
          {
            "label": "8859part13",
            "value": "8859part13"
          },
          {
            "label": "8859part14",
            "value": "8859part14"
          },
          {
            "label": "8859part15",
            "value": "8859part15"
          },
          {
            "label": "8859part16",
            "value": "8859part16"
          },
          {
            "label": "jis",
            "value": "jis"
          },
          {
            "label": "shiftJIS",
            "value": "shiftJIS"
          },
          {
            "label": "eucJP",
            "value": "eucJP"
          },
          {
            "label": "usAscii",
            "value": "usAscii"
          },
          {
            "label": "ebcdic",
            "value": "ebcdic"
          },
          {
            "label": "eucKR",
            "value": "eucKR"
          },
          {
            "label": "big5",
            "value": "big5"
          },
          {
            "label": "GB2312",
            "value": "GB2312"
          }
        ],
        "targets": {
          "bsp": "md-dataset.identification.characterSetCode"
        }
      },
      {
        "name": "md-dataset.citation.otherCitationDetails",
        "required": false,
        "minOccurs": 1,
        "maxOccurs": 1,
        "comment": "md-dataset.citation.otherCitationDetails",
        "label": "Identification of mandatory INSPIRE entities",
        "description": "Identification of the roles of mandatory entities within INSPIRE who are responsible for national INSPIRE datasets.",
        "type": "enum",
        "schema": null,
        "defaultValue": null,
        "autofillRule": null,
        "visibility": true,
        "editable": true,
        "enumValues": null,
        "targets": {
          "bsp": "md-dataset.citation.otherCitationDetails"
        }
      },
      {
        "name": "md-dataset.transferOptionsProtocol",
        "required": false,
        "minOccurs": 0,
        "maxOccurs": 1,
        "comment": "Service transfer options protocol",
        "label": "Service type",
        "description": "Differentiating the type of service",
        "type": "string",
        "schema": null,
        "defaultValue": null,
        "autofillRule": null,
        "visibility": true,
        "editable": true,
        "targets": {
          "bsp": "md-dataset.transferOptionsProtocol"
        }
      },
      {
        "name": "md-dataset.transferOptionsDescription",
        "required": false,
        "minOccurs": 0,
        "maxOccurs": 1,
        "comment": "Service transfer options description",
        "label": "Format of downloaded data",
        "description": null,
        "type": "string",
        "schema": null,
        "defaultValue": null,
        "autofillRule": null,
        "visibility": true,
        "editable": true,
        "enumValues": null,
        "targets": {
          "bsp": "md-dataset.transferOptionsDescription"
        }
      },
      {
        "name": "md-dataset.formatName",
        "required": true,
        "minOccurs": 1,
        "maxOccurs": 1,
        "comment": "md-dataset.formatName",
        "label": "Format name",
        "description": "",
        "type": "string",
        "schema": null,
        "defaultValue": null,
        "autofillRule": null,
        "visibility": true,
        "editable": true,
        "targets": {
          "bsp": "md-dataset.formatName"
        }
      },
      {
        "name": "md-dataset.formatVersion",
        "required": true,
        "minOccurs": 1,
        "maxOccurs": 1,
        "comment": "md-dataset.formatVersion",
        "label": "Format version",
        "description": "",
        "type": "string",
        "schema": null,
        "defaultValue": "3.0",
        "autofillRule": null,
        "visibility": true,
        "editable": true,
        "targets": {
          "bsp": "md-dataset.formatVersion"
        }
      },
      {
        "name": "md-dataset.formatSpecification",
        "required": true,
        "minOccurs": 1,
        "maxOccurs": 1,
        "comment": "md-dataset.formatSpecification",
        "label": "Encoding - Format specification",
        "description": null,
        "type": "enum",
        "schema": null,
        "defaultValue": null,
        "autofillRule": null,
        "visibility": true,
        "editable": true,
        "enumValues": null,
        "targets": {
          "bsp": "md-dataset.formatSpecification"
        }
      }
    ]
  },
  {
    "categoryName": "dataset_legalConstraints",
    "title": "Data set - Legal constraints",
    "name": "dataset_legalConstraints",
    "expand": false,
    "fields": [
      {
        "name": "md-dataset.identification.constraints.useLimitations",
        "required": false,
        "minOccurs": 0,
        "maxOccurs": 1,
        "comment": "MD_Metadata/identificationInfo//resourceConstraints//useLimitation",
        "label": "Use limitations",
        "description": "Restrictions on the access and use of a resource or metadata.",
        "type": "string",
        "schema": null,
        "defaultValue": null,
        "autofillRule": null,
        "visibility": true,
        "editable": true,
        "targets": {
          "bsp": "md-dataset.identification.constraints.useLimitations"
        }
      },
      {
        "name": "md-dataset.identification.constraints.useConstraints",
        "required": false,
        "minOccurs": 0,
        "maxOccurs": -1,
        "comment": "MD_Metadata/identificationInfo//resourceConstraints//useConstraints",
        "label": "Use constraints",
        "description": "Access constraints applied to assure the protection of privacy or intellectual property, and any special restrictions\nor limitations on obtaining the resource.",
        "type": "enum",
        "schema": null,
        "defaultValue": "conditionsUnknown",
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
      },
      {
        "name": "md-dataset.identification.constraints.accessContraints",
        "required": false,
        "minOccurs": 0,
        "maxOccurs": 1,
        "comment": "accessContraints",
        "label": "Access Constraints",
        "description": "Access constraints applied to assure the protection of privacy or intellectual property, and any special restrictions\nor limitations on obtaining the resource.",
        "type": "enum",
        "schema": null,
        "defaultValue": "noLimitations",
        "autofillRule": null,
        "visibility": true,
        "editable": true,
        "enumValues": [
          {
            "label": "No limitations to public access",
            "value": "noLimitations"
          },
          {
            "label": "Public access limited according to Article 13(1)(a) of the INSPIRE Directive",
            "value": "INSPIRE_Directive_Article13_1a"
          },
          {
            "label": "Public access limited according to Article 13(1)(b) of the INSPIRE Directive",
            "value": "INSPIRE_Directive_Article13_1b"
          },
          {
            "label": "Public access limited according to Article 13(1)(c) of the INSPIRE Directive",
            "value": "INSPIRE_Directive_Article13_1c"
          },
          {
            "label": "Public access limited according to Article 13(1)(d) of the INSPIRE Directive",
            "value": "INSPIRE_Directive_Article13_1d"
          },
          {
            "label": "Public access limited according to Article 13(1)(e) of the INSPIRE Directive",
            "value": "INSPIRE_Directive_Article13_1e"
          },
          {
            "label": "Public access limited according to Article 13(1)(f) of the INSPIRE Directive",
            "value": "INSPIRE_Directive_Article13_1f"
          },
          {
            "label": "Public access limited according to Article 13(1)(g) of the INSPIRE Directive",
            "value": "INSPIRE_Directive_Article13_1g"
          },
          {
            "label": "Public access limited according to Article 13(1)(h) of the INSPIRE Directive",
            "value": "INSPIRE_Directive_Article13_1h"
          }
        ],
        "targets": {
          "bsp": "md-dataset.identification.constraints.accessContraints"
        }
      }
    ]
  }
]
```
</details>


### Práce s poli enumerace {#enumerationvalues}
Pole enumerace umožňují vytvářet rozbalovací nabídky v polích. Rozbalovací nabídky omezují koncovým uživatelům možnosti zadávání dat pro množinu předdefinovaných hodnot, díky čemuž je zadávání metadat jednodušší a méně náchylné k chybám. Chcete-li pole enumerace použít, zadejte do pole schématu „enum“. Dále na konci objektu kategorie vytvořte nové pole s názvem "enumValues“. Hodnoty jsou uvedeny v hranatých závorkách []. Každá dvojice štítek/hodnota se nachází ve složených závorkách {}. Zkopírujte vzor pole „enumValues“ v bloku kódu níže s cílem vytvořit pole enumerace v objektu kategorie dle svého výběru. Nahraďte hodnoty za dvojtečkami ve dvojicích štítek/hodnota svými vlastními daty.

```json
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
```

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

```json
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
   "autofillRule": {% raw %}"{{fileAnalysis.attributeValues.SchoolDistrict.SchoolDistrictFeatures.NAME}}"{% endraw %},
   "visibility": true,
   "editable": true,
   "targets": {
      "bsp": "md-dataset.identification.keyword_simple"
   }
}
```

**Metadata nakonfigurovaná pro používání hodnot atributů typu funkce jako klíčových slov**

Obrázek níže zobrazuje nakonfigurované pole klíčových slov tak, jak se zobrazuje v metadatech datové sady. Pole se vyplní hodnotami atributů vybranými v Editoru metadat, názvy školních obvodů.

<img src={require("/images/help/cs/AttributeValues.png").default} alt="" title="Hodnoty atributů jako klíčová slova" class="img-responsive img-inline-help"/>

### Přidání několika předvolených hodnot pro jedno pole metadat

hale»connect umožňuje uživatelům uvést více předvolených hodnot v konfiguraci metadat tématu. V hranatých závorkách lze přidat několik hodnot oddělených čárkou. V níže uvedeném příkladu jsou klíčová slova „INSPIRE“ a „životní prostředí“ přidána k samostatným prvkům „descriptiveKeyword“ v metadatech datové sady.

```json
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
```

### Přidání několika pravidel automatického doplňování pro jedno pole metadat

hale»connect uživatelům umožňuje uvést několik pravidel automatického doplňování v konfiguraci metadat tématu. Lze přidat několik pravidel automatického doplňování v hranatých závorkách oddělených čárkami. V níže uvedeném příkladu jsou klíčová slova „NAME“ a „NUMBER“ přidaná k samostatným prvkům ´´´descriptiveKeyword´´´metadatech datové sady.

```json
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
}```

### Přidání přeložených hodnot nebo volného textu k podmínkám přístupu a používání

Požadavek TG C.18 v [Technické příručce pro implementaci datové sady a metadat služby INSPIRE na základě normy ISO/TS 19139:2007](https://inspire.ec.europa.eu/id/document/tg/metadata-iso19139 ) vyžaduje, aby implementátoři popsali podmínky přístupu a používání popsaného zdroje. Musí se vybrat hodnota ze seznamu kódů INSPIRE [ConditionsApplyingToAccessAndUse](https://inspire.ec.europa.eu/metadata-codelist/ConditionsApplyingToAccessAndUse/noConditionsApply), případně se musí zadat volný text. hale»connect poskytuje uživatelům možnost vybrat si hodnotu z číselníku INSPIRE, vybrat hodnotu z číselníku INSPIRE a zadat přeloženou hodnotu nebo volný text.

**Metadata nakonfigurovaná pro používání hodnoty ze seznamu kódů INSPIRE [ConditionsApplyingToAccessAndUse](https://inspire.ec.europa.eu/metadata-codelist/ConditionsApplyingToAccessAndUse/noConditionsApply)**

Pole ``defaultValue`` musí být vyplněno textem z pole ``value`` enumerace, aby se hodnota kódového seznamu INSPIRE nastavila jako výchozí.

```json
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
```

**Metadata nakonfigurovaná tak, aby používala hodnotu ze seznamu kódů INSPIRE [ConditionsApplyingToAccessAndUse](https://inspire.ec.europa.eu/metadata-codelist/ConditionsApplyingToAccessAndUse/noConditionsApply) a přeloženou hodnotu**

Pole ``defaultValue`` musí být vyplněno textem z pole ``value`` enumerace, aby se hodnota kódového seznamu INSPIRE nastavila jako výchozí. Přeloženou hodnotu lze vložit pomocí následujícího vzoru: ``<enumeration value>:<translated value>``.

```json
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
```

**Metadata nakonfigurovaná pro používání volné textové hodnoty**

Pole ``defaultValue`` lze vyplnit volným textem v uvozovkách.

```json
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
```
