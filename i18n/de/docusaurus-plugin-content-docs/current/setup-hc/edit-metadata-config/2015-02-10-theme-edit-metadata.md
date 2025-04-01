---
title: "Metadatenkonfiguration bearbeiten"
categories:
- "help-page-category-setup-haleconnect"
- "help-page-subcategory-setup-haleconnect-thememetadata"
layout: help-detail
language: de
---

Die Metadatenkonfiguration definiert, welche Metadaten zu Datensätzen eines Themas einzugeben sind. Sie enthält Autofill-Regeln, mit denen dieser Vorgang weitgehend automatisiert werden kann.

In der Rolle &laquo;Themenmanager&raquo; oder &laquo;Superanwender&raquo; können sie die Metadateneingabe konfigurieren, indem sie wie folgt vorgehen:

1.	Gehen sie auf &laquo;Themen&raquo;.
2.	Wählen sie das Thema aus, das sie bearbeiten wollen.
3.	Gehen sie auf &laquo;Metadaten&raquo;. Erweiterbare Bedienfelder für Datensatz- und Dienste-Metadaten werden angezeigt. Wählen sie die Metadaten aus, die sie konfigurieren möchten, und erweitern sie das Bedienfeld.
<img src={require("/images/help/de/metadata1.png").default} alt="" title="Metadateneditor" className="img-responsive img-inline-help"/>
4.  Im Feld «Muster des Datensatznamens» können Sie eine Autofill-Regel für den Datensatz-Namen definieren. Autofill-Regeln ermöglichen die automatische Generierung von Metadaten mithilfe von Variablen. Um eine Autofill-Regel zu erstellen, klicken sie auf das Feld «Muster des Datensatznamens». Der Autofill-Assistent wird in der oberen rechten Ecke angezeigt. Klicken sie im Autofill-Assistenten auf einen Wert, um eine Autofill-Regel einzufügen. Beispielsweise kann automatisch der Wert aus einem Datensatz-Attribut als Datensatz-Name zugewiesen werden. Navigieren sie im Autofill-Assistenten zu «Dateianalyse» und dann zu «Attributwerte». Wählen sie das Attribut in ihrer Datei aus, das den Datensatz-Namen enthält. Während der Datensatz-Erstellung wird der Datensatz-Name automatisch mit dem Wert aus ihrer Datei gefüllt.
5.  Wählen sie die Metadaten-Quelle aus dem Aufklappmenü aus. Verfügbare Optionen sind:
      * Metadaten-Editor verwenden: Wählen sie diese Option, wenn die Metadaten vom System generiert werden sollen. Es steht ein spezieller Text-Editor zur Verfügung, mit dem die Generierung der Metadaten durch das System konfiguriert werden kann. Die vorgegebene Metadaten-Konfiguration zeigt INSPIRE-konforme Metadaten-Elemente an.
		Wenn sie sich dafür entscheiden, den Metadateneditor zu verwenden, generiert haleconnect Datensatz- und Dienste-Metadaten basierend auf dem Input der oder des Nutzenden. Für einige Felder, wie beispielsweise *Keywords*, übernimmt haleconnect automatisch den für die Datensatz-Metadaten angegebenen Wert für die Dienste-Metadaten. Wenn sie in ihren Dienste-Metadaten abweichende *Keywords* verwenden möchten, geben sie die Werte in das dafür vorgesehene Textfeld ein.
      <img src={require("/images/help/de/generate_metadata.png").default} alt="" title="Generieren von Metadaten mit haleconnect" className="img-responsive img-inline-help"/>
      * Existierende Metadaten neu publizieren: Wählen sie diese Option, um während der Datensatz-Erstellung eine bestehende Metadaten-Datei hochzuladen.
		Wenn sie sich dafür entscheiden, existierende Metadaten neu zu publizieren, generiert haleconnect Datensatz-Metadaten basierend auf einer Kopie der Daten, die über eine URL oder einen Daten-Upload bereitgestellt werden. Bitte beachten sie, dass die Elemente gml:TimePeriod und gmd:MD_RestrictionCode in existierenden Metadaten derzeit nicht unterstüzt werden.
      <img src={require("/images/help/de/copy_metadata.png").default} alt="" title="Metadaten kopieren" className="img-responsive img-inline-help"/>
      * Existierende Metadaten verlinken: Wählen sie diese Option, um während der Datensatz-Erstellung einen Link zu einer bestehende Metadaten-Datei anzugeben.
		Wenn sie sich dafür entscheiden, einen Link zu existierenden Metadaten anzugeben, generiert haleconnect Datensatz-Metadaten über einen Zugriff auf die angegebene URL. Bitte beachten sie, dass die Elemente gml:TimePeriod und gmd:MD_RestrictionCode in existierenden Metadaten derzeit nicht unterstüzt werden.
      <img src={require("/images/help/de/remote_url_metadata.png").default} alt="" title="Existierende Metadaten verlinken" className="img-responsive img-inline-help"/>

6.	Wählen sie die Metadaten-Sprache aus dem Aufklappmenü aus. Alle europäischen Sprachen werden unterstützt.

7.	Der &laquo;Editor bei Datensatz-Erstellung anzeigen&raquo;-Schalter ermöglicht ihnen zu steuern, an welcher Stelle Metadaten eingegeben werden:
    *	Auswahl aktiv: Der Metadaten-Editor wird während der Erstellung des Datensatzes angezeigt.
    *	Auswahl inaktiv: Der Metadaten-Editor wird während der Erstellung des Datensatzes nicht angezeigt. Nutzer haben dann während der initialen Erstellung eines Datensatzes keine Kontrolle über die Metadaten, können diese aber nach Erstellung des Datensatzes unter &laquo;Daten&raquo; -> &laquo;Metadaten&raquo; bearbeiten.
8.	Wenn sie &laquo;Metadaten-Editor verwenden&raquo; gewählt haben, verändern sie die Metadaten-Konfiguration im Editor gemäß nachfolgender Beschreibung. Klicken sie &laquo;Speichern&raquo;.

Die Konfiguration der Metadateneingabe für ein Thema erfolgt über einen Texteditor, der in die Anwendung eingebettet ist. Mit diesem Editor wird direkt die in JSON (JavaScript Object Notation) formatierte Konfigurationsdatei bearbeitet. Der Editor prüft Syntax sowie Schema und stellt einen Assistenten für die Autofill-Regeln bereit.

:::warning[Caution]

Hinweis: Im JSON-Format werden Objekte durch geschweifte Klammern {}, Listen durch eckige Klammern [], sowie Zeichenketten durch Anführungszeichen ““ markiert. All diese Zeichen müssen stets paarweise und in der richtigen Reihenfolge angegeben werden, ansonsten wird ein Fehler <em>Ungültiges JSON</em> angezeigt.

:::

Bei der Konfiguration handelt es sich um eine Liste. Die Objekte direkt in dieser Liste sind Kategorien. Kategorien werden verwendet, um Eingabefelder, die einen inhaltlichen Bezug haben, in der Benutzeroberfläche als Gruppe anzuzeigen.

Jeder Kategorie wird eine Liste an Feldern (fields) zugeordnet. Jedes Feld-Objekt beschreibt, wie die Eingabe in der Benutzeroberfläche aussehen soll, wie der Inhalt formatiert werden soll und was für Standardwerte eingetragen werden sollen. Die folgenden Eigenschaften eines Feldes können definiert werden:

*	**name:** Ein eindeutiger Name des Feldes, der dem Pfad im internen Domänenmodel entsprechen muss.
*	**label:** Die Bezeichnung, die neben dem Eingabefeld in der Metadatenmaske angezeigt werden soll.
*	**description:** Ein erläuternder Text zu dem Eingabefeld.
*	**type:** Die Datenart des Feldes. Zulässig sind string, object, array, integer und float.
*	**schema:** Die Struktur des Wertes, der eingetragen werden soll. Zulässig sind email, enum, geojson, json, wkt und csv. Für weitere Informationen zu Aufzählungsfeldern, siehe auch [Mit Aufzählungsfeldern arbeiten](#mit-aufzählungsfeldern-arbeiten).
*	**defaultValue:** Ein festgeschriebener Standard-Wert, der dem Feld zugewiesen wird, wenn dieses noch keinen Wert enthält. Bei Datensätzen, die aus Online-Transformationen entstehen, werden die Metadaten-Werte des Quell-Datensatzes kopiert und werden in diesem Fall nicht von einem konfigurierten Standard-Wert überschrieben. Für On-Premise-Installationen kann dieses Verhalten für den Zieldatensatz geändert werden, indem das Feature-Toggle `TRANSFORMATION_AUTOFILL_REPLACE_DEFAULTS` auf `true` gesetzt wird.
*	**autofillRule:** Ein dynamischer Standard-Wert, der dem Feld zugewiesen werden soll. Der Wert wird aus den aktuellen Umgebungsvariablen (Benutzerin oder Benutzer, Organisation, Datensatz, Thema, Dienst) abgeleitet. Wenn sie in eine Zeile mit dem Schlüsselwort autofillRule klicken, erscheint in der oberen rechten Ecke des Editors der Autofill Assistent. Für mehr Informationen zu Autofill-Regeln, sieht auch [Mit Autofill-Regeln arbeiten](#mit-autofill-regeln-arbeiten).
*	**required:** wird auf true gesetzt, wenn in jedem Fall ein typ- und schemakonformer Wert einzutragen ist.
*	**visibility:** wird auf true gesetzt, wenn Nutzende mit der Rolle Datenmanager dieses Feld im GUI sehen können sollen.
*	**editable:** wird auf true gesetzt, wenn der Datenmanager dieses Feld editieren können soll.
*	**minOccurs:** Gibt an, wie viele Felder dieses Typs minimal auszufüllen sind.
*	**maxOccurs:** Gibt an, wie viele Felder dieses Typs maximal auszufüllen sind.
* **openValue** Das Feld basiert auf einer Enumeration, lässt aber andere Werte zu.
* **enumValues** Das Feld enthält die Werte, die im GUI für dieses Metadaten-Feld in einem Dropdown-Menü verfügbar sind.
*	**targets:** Abbildungsregeln für externe Dienste. Für die interne Publikation ist stets der folgende Wert einzugeben: <br />`"bsp": "{{name}}"`<br />`{{name}}` ist durch den Namen des Feldes zu ersetzen.

Die verfügbaren Pfade für `name` und `target` und die Abbildungen auf ihre korrespondierenden Metadaten-Elemente werden im Folgenden als Referenz aufgeführt:

<details>
<summary>Abbildungen der Metadaten-Feldnamen auf die zugehörigen ISO-Metadaten-Elemente</summary>

| md&#8209;dataset.* | XPath-Ausdruck |
|-------------|---------------------------|
| `customParentIdentifier` | `/gmd:MD_Metadata/gmd:parentIdentifier/gco:CharacterString` |
| `dataQualityLineage` | `/gmd:MD_Metadata/gmd:dataQualityInfo/gmd:DQ_DataQuality/gmd:lineage/gmd:LI_Lineage/gmd:statement/gco:CharacterString` |
| `formatName` | `/gmd:MD_Metadata/gmd:distributionInfo/gmd:MD_Distribution/gmd:distributionFormat/gmd:MD_Format/gmd:name/gco:CharacterString` |
| `formatSpecification` | `/gmd:MD_Metadata/gmd:distributionInfo/gmd:MD_Distribution/gmd:distributionFormat/gmd:MD_Format/gmd:specification/gmx:Anchor` |
| `formatVersion` | `/gmd:MD_Metadata/gmd:distributionInfo/gmd:MD_Distribution/gmd:distributionFormat/gmd:MD_Format/gmd:version/gco:CharacterString` |
| `hierarchyLevelName` | `/gmd:MD_Metadata/gmd:hierarchyLevelName/gmx:Anchor` |
| `isInspireDataset` | `/gmd:MD_Metadata/gmd:dataQualityInfo/gmd:DQ_DataQuality/gmd:report/gmd:DQ_DomainConsistency/gmd:result/gmd:DQ_ConformanceResult/gmd:pass/gco:Boolean` |
| `mdIdentifierLocalId` | `/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:citation/gmd:CI_Citation/gmd:identifier/gmd:MD_Identifier/gmd:code/gmx:Anchor` |
| `mdIdentifierNamespace` | `/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:citation/gmd:CI_Citation/gmd:identifier/gmd:MD_Identifier/gmd:code/gmx:Anchor@xlink:href` |
| `referenceSystemInfoCode` | `/gmd:MD_Metadata/gmd:referenceSystemInfo/gmd:MD_ReferenceSystem/gmd:referenceSystemIdentifier/gmd:RS_Identifier/gmd:code/gco:CharacterString` |
| `transferOptionsDescription` | `/gmd:MD_Metadata/gmd:distributionInfo/gmd:MD_Distribution/gmd:transferOptions/gmd:MD_DigitalTransferOptions/gmd:onLine/gmd:CI_OnlineResource/gmd:description/gco:CharacterString` |
| `transferOptionsProtocol` | `/gmd:MD_Metadata/gmd:distributionInfo/gmd:MD_Distribution/gmd:transferOptions/gmd:MD_DigitalTransferOptions/gmd:onLine/gmd:CI_OnlineResource/gmd:protocol/gmx:Anchor` |

| md&#8209;dataset.citation.* | XPath-Ausdruck |
|-------------|---------------------------|
| `otherCitationDetails` | `/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:citation/gmd:CI_Citation/gmd:otherCitationDetails/gmx:Anchor` |
| `title` | `/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:citation/gmd:CI_Citation/gmd:title/gco:CharacterString` |

| md&#8209;dataset.identification.* | XPath-Ausdruck |
|-------------|---------------------------|
| `abstract` | `/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:abstract/gco:CharacterString` |
| `characterSetCode` | `/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:characterSet/gmd:MD_CharacterSetCode` |
| `keyword_inspire` | `/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:descriptiveKeywords/gmd:MD_Keywords/gmd:keyword/gmx:Anchor` |
| `keyword_simple` | `/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:descriptiveKeywords/gmd:MD_Keywords/gmd:keyword/gco:CharacterString` |
| `priorityDatasetDescriptiveKeyword` | `/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:descriptiveKeywords/gmd:MD_Keywords/gmd:keyword/gmx:Anchor` |
| `purpose` | `/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:purpose/gco:CharacterString` |
| `scale` | `/gmd:spatialResolution/gmd:MD_Resolution/gmd:equivalentScale/gmd:MD_RepresentativeFraction/gmd:denominator/gco:Integer` |
| `spatialScopeDescriptiveKeyword` | `/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:descriptiveKeywords/gmd:MD_Keywords/gmd:keyword/gmx:Anchor` |
| `topicCategory` | `/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:topicCategory/gmd:MD_TopicCategoryCode` |

| md&#8209;dataset.identification.<br/>constraints.* | XPath-Ausdruck |
|-------------|---------------------------|
| `accessContraints` | `/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:resourceConstraints/gmd:MD_LegalConstraints/gmd:otherConstraints/gmx:Anchor` |
| `useConstraints` | `/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:resourceConstraints/gmd:MD_LegalConstraints/gmd:otherConstraints/gmx:Anchor` |
| `useLimitations` | `/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:resourceConstraints/gmd:MD_LegalConstraints/gmd:useLimitation/gco:CharacterString` |

| md&#8209;dataset.identification.<br/>geographicExtent.* | XPath-Ausdruck |
|-------------|---------------------------|
| `geographicDescriptionIdentifier` | `/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:extent/gmd:EX_Extent/gmd:geographicElement/gmd:EX_GeographicDescription/gmd:geographicIdentifier/gmd:MD_Identifier/gmd:code/gmx:Anchor` |
| `eastBoundLongitude` | `/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:extent/gmd:EX_Extent/gmd:geographicElement/gmd:EX_GeographicBoundingBox/gmd:northBoundLatitude/gco:Decimal` |
| `westBoundLongitude` | `/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:extent/gmd:EX_Extent/gmd:geographicElement/gmd:EX_GeographicBoundingBox/gmd:westBoundLongitude/gco:Decimal` |
| `northBoundLatitude` | `/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:extent/gmd:EX_Extent/gmd:geographicElement/gmd:EX_GeographicBoundingBox/gmd:northBoundLatitude/gco:Decimal` |
| `southBoundLatitude` | `/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:extent/gmd:EX_Extent/gmd:geographicElement/gmd:EX_GeographicBoundingBox/gmd:southBoundLatitude/gco:Decimal` |

| md&#8209;dataset.identification.<br/>contactForResource.\* <br/>md&#8209;dataset.identification.<br/>contactForResource2.\*  | XPath-Ausdruck |
|-------------|---------------------------|
| `individualName` | `/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:individualName/gco:CharacterString` |
| `authorityUrl` | `/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:onlineResource/gmd:CI_OnlineResource/gmd:linkage/gmd:URL` |
| `organisationName` | `/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:organisationName/gco:CharacterString` |
| `positionName` | `/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:positionName/gco:CharacterString` |
| `roleCode` | `/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:role/gmd:CI_RoleCode` |
| `email` | `/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:address/gmd:CI_Address/gmd:electronicMailAddress/gco:CharacterString` |
| `deliveryPoint` | `/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:address/gmd:CI_Address/gmd:deliveryPoint/gmx:Anchor` |
| `postalCode` | `/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:address/gmd:CI_Address/gmd:postalCode/gco:CharacterString` |
| `city` | `/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:address/gmd:CI_Address/gmd:city/gco:CharacterString` |
| `administrativeArea` | `/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:address/gmd:CI_Address/gmd:administrativeArea/gco:CharacterString` |
| `country` | `/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:address/gmd:CI_Address/gmd:country/gco:CharacterString` |
| `voicePhone` | `/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:phone/gmd:CI_Telephone/gmd:voice/gco:CharacterString` |
| `facsimile` | `/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:phone/gmd:CI_Telephone/gmd:facsimile/gco:CharacterString` |

| md&#8209;dataset.identification.<br/>resourceMaintenance.* | XPath-Ausdruck |
|-------------|---------------------------|
| `maintenanceAndUpdateFrequency` | `/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:resourceMaintenance/gmd:MD_MaintenanceInformation/gmd:maintenanceAndUpdateFrequency/gmd:MD_MaintenanceFrequencyCode` |
| `maintenanceNote` | `/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:resourceMaintenance/gmd:MD_MaintenanceInformation/gmd:maintenanceNote/gco:CharacterString` |
| `userDefinedFrequency` | `/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:resourceMaintenance/gmd:MD_MaintenanceInformation/gmd:userDefinedMaintenanceFrequency/gts:TM_PeriodDuration` |

| md&#8209;dataset.identification.<br/>temporalExtent.* | XPath-Ausdruck |
|-------------|---------------------------|
| `beginPosition` | `/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:extent/gmd:EX_Extent/gmd:temporalElement/gmd:EX_TemporalExtent/gmd:extent/gml:TimePeriod/gml:beginPosition` |
| `endPosition` | `/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:extent/gmd:EX_Extent/gmd:temporalElement/gmd:EX_TemporalExtent/gmd:extent/gml:TimePeriod/gml:endPosition` |

| md&#8209;dataset.contactForMetadata.\* <br/>md&#8209;dataset.contactForMetadata2.\* | XPath-Ausdruck |
|-------------|---------------------------|
| `administrativeArea` | `/gmd:MD_Metadata/gmd:contact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:address/gmd:CI_Address/gmd:administrativeArea/gco:CharacterString` |
| `authorityUrl`  | `/gmd:MD_Metadata/gmd:contact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:onlineResource/gmd:CI_OnlineResource/gmd:linkage/gmd:URL` |
| `city` | `/gmd:MD_Metadata/gmd:contact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:address/gmd:CI_Address/gmd:city/gco:CharacterString` |
| `country` | `/gmd:MD_Metadata/gmd:contact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:address/gmd:CI_Address/gmd:country/gco:CharacterString` |
| `deliveryPoint` | `/gmd:MD_Metadata/gmd:contact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:address/gmd:CI_Address/gmd:deliveryPoint/gmx:Anchor` |
| `email` | `/gmd:MD_Metadata/gmd:contact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:address/gmd:CI_Address/gmd:electronicMailAddress/gco:CharacterString` |
| `facsimile` | `/gmd:MD_Metadata/gmd:contact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:phone/gmd:CI_Telephone/gmd:facsimile/gco:CharacterString` |
| `individualName` | `/gmd:MD_Metadata/gmd:contact/gmd:CI_ResponsibleParty/gmd:individualName/gco:CharacterString` |
| `organisationName` | `/gmd:MD_Metadata/gmd:contact/gmd:CI_ResponsibleParty/gmd:organisationName/gco:CharacterString` |
| `positionName` | `/gmd:MD_Metadata/gmd:contact/gmd:CI_ResponsibleParty/gmd:positionName/gco:CharacterString` |
| `postalCode` | `/gmd:MD_Metadata/gmd:contact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:address/gmd:CI_Address/gmd:postalCode/gco:CharacterString` |
| `roleCode` | `/gmd:MD_Metadata/gmd:contact/gmd:CI_ResponsibleParty/gmd:role/gmd:CI_RoleCode` |
| `voicePhone` | `/gmd:MD_Metadata/gmd:contact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:phone/gmd:CI_Telephone/gmd:voice/gco:CharacterString` |

</details>

<details>
<summary>Beispielkonfigurationsauszug</summary>

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
<summary>Beispielkonfiguration (detailliert)</summary>

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

### Mit Aufzählungsfeldern arbeiten
Aufzählungsfelder ermöglichen das Anlegen von Aufklappmenüs für Felder. Aufklappmenüs schränken die möglichen Auswahloptionen der oder des Endnutzenden auf vordefinierte Werte ein, wodurch das Eintragen von Metadaten einfacher und weniger fehleranfällig wird. Um ein Aufzählungsfeld zu nutzen, geben sie &laquo;enum&raquo; in das Schemafeld ein. Legen sie dann ein Feld mit dem Namen &laquo;enumValues&raquo; am Ende des Kategorie-Objekts an. Die Werte werden in eckigen Klammern [] angegeben. Jedes label/value-Paar wird in geschweiften Klammern angegeben {}. Kopieren sie das Muster des &laquo;enumValues&raquo;-Feldes in den folgenden Code-Block um ein Aufzählungsfeld im Kategorie-Objekt ihrer Wahl anzulegen. Ersetzen sie in den label/value-Paaren die Werte nach den Doppelpunkten mit ihren eigenen Daten.

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

**Metadatenkonfiguration für die Nutzung eines Aufzählungsfeldes**

In der folgenden Abbildung wird das konfigurierte Aufzählungsfeld dargestellt. Das Aufklappmenü wird zu dem Feld &laquo;Role&raquo; angelegt und ist mit den nutzerspezifischen Werten belegt.
<img src={require("/images/help/de/enumerationValues.png").default} alt="" title="Aufzählungswerte" className="img-responsive img-inline-help"/>

### Mit Autofill-Regeln arbeiten
Autofill-Regeln ermöglichen durch die Nutzung von Variablen die automatische Genierung von Metadaten. hale»connect ermöglicht die Nutzung von zuvor bereitgestellten Metadaten für die Füllung von Metadaten-Feldern. Darunter sind beispielsweise die Kontaktdetails ihrer Organisation, der Name ihres Datensatzes und Informationen zu Attributen, die zu den Objektarten ihres Datensatzes gehören. Außerdem Autofill-Regeln, die auf die Publikation zugreifen und somit nicht beim Füllen der Metadaten-Felder des Datensatzes greifen, sondern erst bei der Publizierung der zugehörigen Dienste. Diese sind im Autofill Assistenten unter "Publication" zugänglich. Autofill-Regeln funktionieren nicht für Schemata, die Sonderzeichen in ihren Namen verwenden. Um eine Autofill-Regel zu erstellen, klicken sie auf auf den Wert neben dem ```autofillRule```-Schlüsselwort. Der Autofill Assistent erscheint in der rechten oberen Ecke des Metadaten-Editors. Wenn sie auf einen Wert im Autofill Assistent klicken, wird die Autofill-Regel an der Position eingefügt, an der sich gerade der Cursor befindet.
<img src={require("/images/help/de/autofillAssistant1.png").default} alt="" title="Autofill Assistent" className="img-responsive img-inline-help"/>
Der Autofill-Assistent greift auf Daten aus der gesamten Plattform zu, um sie in Metadaten zu verwenden. Die Daten sind in mehrere Kategorien unterteilt:

* Benutzer
  * Die Benutzerkategorie bietet Zugriff auf die auf der Benutzerprofilseite eingegebenen Kontaktdaten. Benutzerdefinierte Felder, die sie ihrem Benutzerprofil hinzufügen, sind im Autofill-Assistenten verfügbar. Wenn sie in Ihrem Benutzerprofil benutzerdefinierte Felder definieren, klicken sie im Autofill-Assistenten auf «Benutzer» und navigieren sie zu «Eigene Profilfelder», um ihre Felder anzuzeigen. Mit benutzerdefinierten Feldern können sie ihre eigenen Schlüssel/Wert-Paare zur Nutzung in Metadaten anlegen. Weitere Informationen zu benutzerdefinierten Feldern finden sie in den [Benutzer anlegen](../../users-roles-orgs/registration/2015-03-05-users-add.md) und [Eine Organisation anlegen](../../users-roles-orgs/manage-orgs/2015-03-04-users-add-organisation.md) Abschnitten unserer Hilfe.

* Organisation
  * Die Organisationskategorie bietet Zugriff auf die auf der Organisationsprofilseite eingegebenen Kontaktdaten. Benutzerdefinierte Felder, die sie ihren Organisationen hinzufügen, sind im Autofill-Assistenten verfügbar. Wenn sie in ihrer Organisation benutzerdefinierte Felder definieren, klicken sie im Autofill-Assistenten auf «Organisation» und navigieren sie zu «Eigene Profilfelder», um ihre Felder anzuzeigen. Mit benutzerdefinierten Feldern können sie ihre eigenen Schlüssel/Wert-Paare zur Nutzung in Metadaten anlegen. Weitere Informationen zu benutzerdefinierten Feldern finden sie in den [Benutzer anlegen](../../users-roles-orgs/registration/2015-03-05-users-add.md) und [Eine Organisation anlegen](../../users-roles-orgs/manage-orgs/2015-03-04-users-add-organisation.md) Abschnitten unserer Hilfe.

* Datensatz
  * Die Datensatzkategorie bietet Zugriff auf den Datensatznamen und die geografische Ausdehnung.

* Thema
  * Die Themenkategorie bietet Zugriff auf Themendetails wie Name, Beschreibung, Typ und Version.

* Datei-Analyse
  * Die Kategorie Dateianalyse bietet Zugriff auf Attributwerte in den Quelldaten und variiert je nach den in den Quelldaten verfügbaren Attributen.

* Publikation
  * Die Publikationskategorie ermöglicht es Benutzenden, verschiedene Servicetypen zu beschreiben. Die Autofill-Regel  ```{{publication.service.type.title.short}}``` fügt je nach Typ des veröffentlichten Dienstes den Begriff  ```WMS``` oder ```WFS``` hinzu.

* Aus Quelldatensatz kopieren
  * Die Kopie aus der Quell-Datensatz-Kategorie ermöglicht es Benutzenden, den transformierten Metadaten Metadatenwerte hinzuzufügen, die in den Quellmetadaten bereitgestellt werden.

**Schlüsselwort-Felder mit Attribut-Daten belegen**

Der Autofill Assistent bietet ihnen mehrere Optionen an, zwischen denen sie wählen können. Um ein Schlüsselwort-Feld mit Attributwerten aus ihrem Datensatz zu füllen, wählen sie im Autofill Assistent &laquo;Datei-Analyse&raquo; aus. Wählen sie dann &laquo;Attributwerte&raquo; aus, woraufhin der Name ihres Datensatzes angezeigt wird. Wählen sie ihren Datensatz und anschließend die Objektart aus, deren Attributwerte sie als Schlüsselwerte hinzufügen möchten. Wählen sie zuletzt das Attribut aus, in dem ihre Schlüsselwörter enthalten sind. Die folgende Autofill-Regel zeigt ein Beispiel, bei dem das Schlüsselwort-Feld mit Attribut-Daten gefüllt wurde.

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
  "autofillRule": "{{fileAnalysis.attributeValues.SchoolDistrict.SchoolDistrictFeatures.NAME}}",
  "visibility": true,
  "editable": true,
  "targets": {
    "bsp": "md-dataset.identification.keyword_simple"
  }
}
```

**Metadatenkonfiguration für die Nutzung von Attributwerten einzelner Objektarten als Schlüsselwörter**

IIn der folgenden Abbildung wird das konfigurierte Schlüsselwörter-Feld dargestellt, wie es in den Datensatz-Metadaten erscheint. Das Feld ist mit den Attributwerten belegt, die im Metadaten-Editor ausgewählt wurden - in diesem Fall handelt es sich um Schulbezirksnamen.

<img src={require("/images/help/de/AttributeValues.png").default} alt="" title="Attributwerte als Schlüsselwörter" className="img-responsive img-inline-help"/>

### Hinzufügen mehrerer Standardwerte für ein Metadatenfeld

Mit hale»connect können Benutzende mehrere Standardwerte in der Metadatenkonfiguration eines Themas angeben. Mehrere durch Kommas getrennte Werte können in eckigen Klammern zu jedem Element hinzugefügt werden, dessen maximale Kardinalität größer als 1 ist und bei dem Aufzählungswerte für „defaultValue“ verwendet werden. Im folgenden Beispiel werden die Schlüsselwörter "INSPIRE" und "Umwelt" zu separaten Keyword-Elementen in den Datensatz-Metadaten hinzugefügt.

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
    "Umwelt"
  ],
  "autofillRule": null,
  "visibility": true,
  "editable": true,
  "targets": {
    "bsp": "md-dataset.identification.keyword_simple"
  }
}
```

Im unten gezeigten Beispiel erstellt ein Array aus drei durch Kommas getrennten Zeichenfolgenwerten drei separate „otherConstraints“-Elemente.

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
  "defaultValue": [
    "Es gelten die Lizenzbedingungen „Datenlizenz Deutschland - Namensnennung - Version 2.0" bzw. „dl-de/by-2-0" (https://www.govdata.de/dl-de/by-2-0) mit den dort geforderten Angaben zum Quellenvermerk. Als Rechteinhaber und Bereitsteller ist „Stadt Hildesheim", sowie das Jahr des Datenbezugs in Klammern anzugeben. Beispiel für Quellenvermerk: Stadt Hildesheim (2023) Datenlizenz Deutschland - Namensnennung - Version 2.0 (www.govdata.de/dl-de/by-2-0).",
    "{\"id\":\"dl-de-zero-2.0\",\"name\":\"Datenlizenz Deutschland - Zero - Version 2.0\",\"url\":\"https://www.govdata.de/dl-de/zero-2-0\",\"quelle\":\"Quelle: Stadt Hildesheim\"}",
    "Die Daten können den Lizenzbedingungen entsprechend genutzt werden. Die Stadt Hildesheim übernimmt keine Gewähr für die Fehlerfreiheit ihrer Produkte, die Richtigkeit und Vollständigkeit der Daten. Es wird jede Haftung für Schäden ausgeschlossen, die bei Nutzern direkt oder indirekt durch die Geodatennutzung entstehen."
  ],
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
    },
    {
      "label": "Datenlizenz Deutschland - Zero - Version 2.0",
      "value": "[Datenlizenz Deutschland - Zero - Version 2.0](https://www.govdata.de/dl-de/zero-2-0)"
    }
  ]
}
```

**Metadatenkonfiguration für die Nutzung von Attributwerten einzelner Objektarten als Schlüsselwörter**

In der folgenden Abbildung wird das konfigurierte Schlüsselwörter-Feld dargestellt, wie es in den Datensatz-Metadaten erscheint. Das Feld ist mit den Attributwerten belegt, die im Metadaten-Editor ausgewählt wurden - in diesem Fall handelt es sich um Schulbezirksnamen.

<img src={require("/images/help/de/AttributeValues.png").default} alt="" title="Attributwerte als Schlüsselwörter" className="img-responsive img-inline-help"/>

### Hinzufügen mehrerer Autofill-Regeln für ein Metadatenfeld

Mit hale»connect können Benutzende mehrere Autofill-Regeln in der Metadatenkonfiguration eines Themas angeben. In eckigen Klammern können mehrere durch Kommas getrennte Autofill-Regeln hinzugefügt werden. Im folgenden Beispiel werden die Schlüsselwörter "NAME" und "NUMBER" zu separaten Keyword-Elementen in den Datensatz-Metadaten hinzugefügt.

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
  "defaultValue": null,
  "autofillRule": [
    "{{fileAnalysis.attributeValues.SchoolDistrict.SchoolDistrictFeatures.NAME}}",
    "{{fileAnalysis.attributeValues.SchoolDistrict.SchoolDistrictFeatures.NUMBER}}"
  ],
  "visibility": true,
  "editable": true,
  "targets": {
    "bsp": "md-dataset.identification.keyword_simple"
  }
}
```

### Hinzufügen von übersetzten Werten oder freiem Text zu Nutzungsbedienungen

TG-Anforderung C.18 in der [Technical Guidance for the implementation of INSPIRE dataset and service metadata based on ISO/TS 19139:2007](https://inspire.ec.europa.eu/id/document/tg/metadata-iso19139) erfordert, dass Implementierende die Bedingungen für den Zugriff und die Verwendung einer Ressource beschreiben. Ein Wert aus der INSPIRE-Codeliste [ConditionsApplyingToAccessAndUse](https://inspire.ec.europa.eu/metadata-codelist/ConditionsApplyingToAccessAndUse/noConditionsApply) muss ausgewählt sein oder alternativ muss ein Freitext bereitgestellt werden. hale»connect bietet Benutzendem die Möglichkeit, einen Wert aus der INSPIRE-Codeliste auszuwählen, einen Wert aus der INSPIRE-Codeliste auszuwählen und einen übersetzten Wert bereitzustellen oder einen freien Text bereitzustellen.  

**Metadaten, die für die Verwendung eines Werts aus der INSPIRE-Codeliste [ConditionsApplyingToAccessAndUse](https://inspire.ec.europa.eu/metadata-codelist/ConditionsApplyingToAccessAndUse/noConditionsApply) konfiguriert sind**

Das Feld `` defaultValue`` muss mit dem Text aus dem Feld `` value`` der Aufzählung gefüllt werden, um den INSPIRE-Codelistenwert als Standard festzulegen.

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

**Metadaten, die einen Wert aus der INSPIRE-Codeliste [ConditionsApplyingToAccessAndUse](https://inspire.ec.europa.eu/metadata-codelist/ConditionsApplyingToAccessAndUse/noConditionsApply) und einen übersetzten Wert verwenden**

Das Feld `` defaultValue`` muss mit dem Text aus dem Feld `` value`` der Aufzählung gefüllt werden, um den INSPIRE-Codelistenwert als Standard festzulegen. Ein übersetzter Wert kann unter Verwendung des folgenden Musters bereitgestellt werden: `` <Aufzählungswert>: <übersetzter Wert> ``.

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

**Metadaten, die für die Verwendung eines Freitextwerts konfiguriert sind**

Das Feld `` defaultValue`` kann mit freiem Text in doppelten Anführungszeichen gefüllt werden.

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
  "defaultValue": "Mein Schlüsselwort",
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

### Mit gmx:Anchor-Elementen in String-Feldern arbeiten

hale»connect unterstützt die Erzeugung von `gmx:Anchor`-Elementen anstelle von `gco:CharacterString`-Elementen, die in von hale»connect generierten Metadaten vorhanden sind. Die folgende Notation im Markdown-Stil kann verwendet werden, um einen Textwert und eine URL für das `gmx:Anchor`-Element anzugeben: `[link text](https://target.url)`

Es gibt einige Ausnahmen, bei denen dies aufgrund einer besonderen Behandlung nicht funktioniert. Der Wert des Textfeldes ``Webadresse der Organisation (Namensraum)`` im Kontakt für Metadaten kann nicht als `gmx:Anchor`-Element erzeugt werden.

Im folgenden Beispiel wird ein `gmx:Anchor` als ``defaultValue`` und dem Feld ``enumValues`` hinzugefügt.

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
  "defaultValue": "[Datenlizenz Deutschland - Zero - Version 2.0](https://www.govdata.de/dl-de/zero-2-0)",
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
    },
    {
      "label": "Datenlizenz Deutschland - Zero - Version 2.0",
      "value": "[Datenlizenz Deutschland - Zero - Version 2.0](https://www.govdata.de/dl-de/zero-2-0)"
    }
  ]
}
```

### Hinzufügen von JSON-Werten in String-Feldern

JSON-Werte können im Metadaten-Editor zu String-Feldern hinzugefügt werden. Die JSON-Werte müssen maskiert werden, bevor sie der Metadatenkonfiguration hinzugefügt werden. Im folgenden Beispiel wird ein JSON-Wert als ``defaultValue`` und dem Feld ``enumValues`` hinzugefügt.

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
  "defaultValue": "{\"id\":\"geoNutz/20130319\",\"name\":\"Nutzungsbestimmungen für die Bereitstellung von Geo-daten des Bundes\",\"url\":\"https://sg.geodatenzent-rum.de/web_public/gdz/lizenz/geonutzv.pdf\",\"quelle\":\"Quelle: © GeoBasis-DE / BKG (Jahr des letzten Datenbezugs)\"}",
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
    },
    {
        "label": "Nutzungsbestimmungen für die Bereitstellung von Geo-daten des Bundes",
        "value": "{\"id\":\"geoNutz/20130319\",\"name\":\"Nutzungsbestimmungen für die Bereitstellung von Geo-daten des Bundes\",\"url\":\"https://sg.geodatenzent-rum.de/web_public/gdz/lizenz/geonutzv.pdf\",\"quelle\":\"Quelle: © GeoBasis-DE / BKG (Jahr des letzten Datenbezugs)\"}"
    }
  ]
}
```

### Hinzufügen von Schlüsselwörtern mit Thesaurusangabe

Schlüsselwörter mit Angabe eines Thesaurus können den Metadaten zugefügt werden, indem eine entsprechende Autofill-Regel (`autofillRule`) oder ein Default-Wert (`defaultValue`) in der Metadaten-Konfiguration des Themas definiert wird. Die Regel kann in Form eines JSON-Strings hinzugefügt werden, wobei Sonderzeichen mit einen Backslash (`\`) maskiert werden müssen. Nach Ausführen des Autofill-Workflows für einen zugehörigen Datensatz muss eventuell die Seite im Browser neu geladen werden, damit die Änderungen in der Oberfläche sichtbar sind. Das Vorgehen kann analog auch für `defaultValue` angewendet werden.

```json
{
      "name": "md-dataset.identification.keyword_thesaurus",
      "required": false,
      "minOccurs": 0,
      "maxOccurs": -1,
      "comment": "keyword_thesaurus",
      "label": "Suchbegriffe Thesaurus",
      "description": "Begriffe, unter denen der Datensatz gefunden werden soll.",
      "type": "string",
      "schema": null,
      "defaultValue": null,
      "autofillRule": "{ \"date\": \"2023-09-27\", \"datetype\": \"publication\", \"keywords\": [{\"keyword\": \"Erdbeobachtung und Umwelt\", \"keywordLink\": \"http://data.europa.eu/bna/c_dd313021\"}], \"title\": \"High-value dataset categories\", \"url\": \"http://data.europa.eu/bna/asd487ae75\"}",
      "visibility": true,
      "editable": true,
      "targets": {
         "bsp": "md-dataset.identification.keyword_thesaurus"
      }
}
```

Für den Fall, dass mehrere Schlüsselwörter definiert werden sollen, müssen eckige Klammern um die JSON-Strings gesetzt werden (siehe [Hinzufügen mehrerer Autofill-Regeln für ein Metadatenfeld](#hinzuf%C3%BCgen-mehrerer-autofill-regeln-f%C3%BCr-ein-metadatenfeld)).

### Metadaten, die für die Verwendung eines oder mehrerer Profile konfiguriert sind

hale»connect-Metadatenprofile bieten Optionen für das Hinzufügen und Entfernen zusätzlicher Metadatenelemente in den von hale»connect automatisch generierten Metadaten. Metadatenprofile sind in den Konfigurationen für Datensatz- und Dienst-Metadaten verfügbar, da einige Optionen sowohl Datensatz- als auch Dienst-Metadaten betreffen. Metadatenprofile sind nicht obligatorisch, und es kann mehr als ein Metadatenprofil angewendet werden. Die Metadatenelemente, die zu Metadaten hinzugefügt werden können, werden im Folgenden beschrieben:

**`gmx:Anchor`-Element für CRS-Code in Koordinatenreferenzsystem-Information verwenden**

Diese Option erfüllt die TG-Empfehlung 2.1.1: metadata/2.0/rec/isdss/crs-id des [Technischen Leitfadens für die Implementierung von INSPIRE-Metadaten für Datensätze und Dienste auf der Grundlage von ISO/TS 19139:2007](https://knowledge-base.inspire.ec.europa.eu/publications/technical-guidance-implementation-inspire-dataset-and-service-metadata-based-isots-191392007_en), Version 2.2.0. Das folgende Beispiel zeigt die Metadatenelemente, die den Metadaten für Datensätze und Dienste hinzugefügt werden, wenn die Option aktiviert ist:

```xml
<gmd:referenceSystemInfo>
  <gmd:MD_ReferenceSystem>
    <gmd:referenceSystemIdentifier>
      <gmd:RS_Identifier>
        <gmd:code>
          <gmx:Anchor xlink:href="http://www.opengis.net/def/crs/EPSG/0/25832">ETRS89 / UTM zone 32N</gmx:Anchor>
        </gmd:code>
      </gmd:RS_Identifier>
    </gmd:referenceSystemIdentifier>
  </gmd:MD_ReferenceSystem>
</gmd:referenceSystemInfo>
```

**Wert "information" als OnlineFunctionCode für WFS verwenden (GDI-DE-Konvention)**

Diese Option ermöglicht die Verwendung des Wertes `information` im Element `transferOptions` im WFS-Capabilities-Dokument. Der Wert "information" ist Teil der Codeliste `CI_OnLineFunctionCode`. Im Abschnitt 4.3.1 der ["Konventionen zu Metadaten" der GDI-DE](https://www.gdi-de.org/download/AK_Metadaten_Konventionen_zu_Metadaten.pdf) (v2.2.1) wird die Verwendung des Wertes `information` empfohlen, und Benutzer, die die Einhaltung der GDI-DE-Metadatenkonventionen mit Hilfe der GDI-DE-Testsuite prüfen, erhalten eine Warnung, falls ein anderer Wert verwendet wird. Im Technischen Leitfaden für die Implementierung von Metadaten für INSPIRE-Datensätze und -Dienste auf der Grundlage von ISO/TS 19139:2007, Version 2.2.0, TG Recommendation 3.5: metadata/2.0/rec/sds/resource-type-url-target wird ein Beispiel angeführt, in dem der WFS GetCapabilities den Wert download verwendet. Der Standardwert von hale "connect ist download, der Standardwert kann jedoch durch die Verwendung dieses Profils überschrieben werden.

Dieses Profil ist im Metadatenprofil mit dem Titel "Konventionen der GDI-DE (beinhaltet mehrere andere Profile-Konfigurationen)" enthalten.

Beispiel:

```xml
<gmd:function>
  <gmd:CI_OnLineFunctionCode codeList="https://standards.iso.org/iso/19139/resources/gmxCodelists.xml#CI_OnLineFunctionCode" codeListValue="information">information</gmd:CI_OnLineFunctionCode>
</gmd:function>
```

**`gmx:Anchor`-Element für `SpatialDataServiceCategory`-Schlüsselwort verwenden**

Dieses Profil aktiviert die Verwendung eines `gmx:Anchor`-Elements für die Quellenreferenz im Element `gmd:thesaurusName` und für die Referenzierung des Diensttyp-Schlüsselworts aus der Codelist `SpatialDataServiceCategory` an. Es erfüllt die TG-Empfehlung 3.2: metadata/2.0/rec/sds/sds-category-cv im Technischen Leitfaden für die Implementierung von INSPIRE-Datensatz- und Dienstmetadaten auf der Grundlage von ISO/TS 19139:2007, Version 2.2.0. Das folgende Beispiel zeigt die Kodierung, die auf das Schlüsselwort in den Dienst-Metadaten angewendet wird, wenn das Profil aktiviert ist:

```xml
<gmd:descriptiveKeywords>
  <gmd:MD_Keywords>
    <gmd:keyword>
      <gmx:Anchor xlink:href="http://inspire.ec.europa.eu/metadata-codelist/SpatialDataServiceCategory/infoMapAccessService">infoMapAccessService</gmx:Anchor>
    </gmd:keyword>
    <gmd:thesaurusName>
      <gmd:CI_Citation>
        <gmd:title>
          <gmx:Anchor xlink:href="http://data.europa.eu/eli/reg/2008/1205">
          COMMISSION REGULATION (EC) No 1205/2008 of 3 December 2008 implementing Directive 2007/2/EC of the European Parliament and of the Council as regards metadata, Part D 4, Classification of Spatial Data Services
          </gmx:Anchor>
        </gmd:title>
        <gmd:date>
          <gmd:CI_Date>
            <gmd:date>
              <gco:Date>2008-12-03</gco:Date>
            </gmd:date>
            <gmd:dateType>
              <gmd:CI_DateTypeCode codeList="https://standards.iso.org/iso/19139/resources/gmxCodelists.xml#CI_DateTypeCode" codeListValue="publication">publication</gmd:CI_DateTypeCode>
            </gmd:dateType>
          </gmd:CI_Date>
        </gmd:date>
      </gmd:CI_Citation>
    </gmd:thesaurusName>
  </gmd:MD_Keywords>
</gmd:descriptiveKeywords>
```

**`MD_Identifier`-Code für `operatesOn` verwenden (GDI-DE-Konvention)**

Dieses Profil bezieht sich auf die TG-Anforderung 3.6: metadata/2.0/req/sds/coupled-resource im Technischen Leitfaden für die Implementierung von INSPIRE-Metadaten für Datensätze und Dienste auf der Grundlage von ISO/TS 19139:2007, Version 2.2.0. Es gibt mehrere gültige Ansätze für die Bereitstellung des erforderlichen Links zu Metadaten. Die Aktivierung dieses Profils entspricht der GDI-DE-Konvention, die erwartet, dass der Verweis auf die Metadaten des Datensatzes im Element `operatesOn` in den Metadaten des Dienstes mit dem Identifizierungscode der Metadaten des Datensatzes übereinstimmt. Der Identifizierungscode für Datensatz-Metadaten besteht aus einem Namensraum und einer ID, die gemeinsam eine auflösbare URL zur GDI-DE-Registry bilden. Standardmäßig befüllt hale»connect den gekoppelten Ressourcen-Link im Element `operatesOn` mit einer URL, die einen Fragment-Identifikator enthält, der auf das Element `gmd:MD_DataIdentification` im referenzierten Metadatendokument verweist. Der Standardansatz kann durch Aktivierung dieses Profils außer Kraft gesetzt werden.

Dieses Profil ist im Metadatenprofil mit dem Titel "Konventionen der GDI-DE (beinhaltet mehrere andere Profile-Konfigurationen)" enthalten.

Beispiel:

```xml
<srv:operatesOn xlink:href="https://registry.gdi-de.org/id/de.ni.lk.ni.csw/6857805e-ccfd-488f-93bc-c2bb41f6062d" uuidref="ce78d145-bc82-4278-8ae2-a484d68c7eb1"/>
```

**Konventionen der GDI-DE (beinhaltet mehrere andere Profile-Konfigurationen)**

Dieses Profil beinhaltet folgende Metadatenprofile:

- *Wert "information" als OnlineFunctionCode für WFS verwenden (GDI-DE-Konvention)*
- *`MD_Identifier`-Code für `operatesOn` verwenden (GDI-DE-Konvention)*.

Der Zweck dieses Metadatenprofils ist es, Benutzern, die GDI-DE-konforme Metadaten erzeugen möchten, die Möglichkeit zu geben, dies mit Hilfe eines einzigen Profils zu tun. Es wird in diesem Fall empfohlen, das Profil sowohl in den Metadaten des Datensatzes als auch des Dienstes zu aktivieren.

Metadatenprofile können in den Abschnitten für Datensatz- und Dienstmetadaten eines Datensatzes über die Benutzeroberfläche ausgewählt werden.
Metadatenprofile können auch im JSON-Metadaten-Editor in den Abschnitten für Datensatz- und Dienst-Metadaten angezeigt und ausgewählt werden:

```json
{
    "name": "md-service.profiles",
    "required": false,
    "minOccurs": 0,
    "maxOccurs": -1,
    "comment": "Erlaubt Anpassung des Verhaltens bei der Metadaten-Generierung",
    "label": "Metadaten-Profile",
    "description": "Aktivieren oder Deaktivieren von Metadaten-Profilen",
    "type": "enum",
    "enumValues": [
        {
            "label": "gmx:Anchor-Element für CRS-Code in Koordinatenreferenzsystem-Information verwenden",
            "value": "crs-info-anchor"
        },
        {
            "label": "[Deaktivieren] gmx:Anchor-Element für CRS-Code in Koordinatenreferenzsystem-Information verwenden",
            "value": "!crs-info-anchor"
        },
        {
            "label": "Wert \"information\" als OnlineFunctionCode für WFS verwenden (GDI-DE-Konvention)",
            "value": "wfs-information"
        },
        {
            "label": "[Deaktivieren] Wert \"information\" als OnlineFunctionCode für WFS verwenden (GDI-DE-Konvention)",
            "value": "!wfs-information"
        },
        {
            "label": "[Deaktivieren] gmx:Anchor-Element für SpatialDataServiceCategory-Schlüsselwort verwenden",
            "value": "!service-types-keyword-anchor"
        },
        {
            "label": "MD_Identifier-Code für operatesOn verwenden (GDI-DE-Konvention)",
            "value": "operates-on-use-mdidentifier"
        },
        {
            "label": "[Deaktivieren] MD_Identifier-Code für operatesOn verwenden (GDI-DE-Konvention)",
            "value": "!operates-on-use-mdidentifier"
        },
        {
            "label": "Konventionen der GDI-DE (beinhaltet mehrere andere Profil-Konfigurationen)",
            "value": "gdi-de"
        }
    ],
    "schema": null,
    "defaultValue": null,
    "autofillRule": null,
    "visibility": true,
    "editable": true,
    "targets": {
        "bsp": "md-service.profiles"
    }
}
```


### Hinzufügen einer zweiten Ansprechperson
Sie können sowohl die Ansprechpersonen für die Datensätze, als auch die Dienste erweitern. Bei den Datensätzen können sie eine zweite Ansprechperson für die Datensatz Metadaten, sowie für den Datensatz anlegen. Bei den Diensten können sie eine zweite Ansprechperson für die Dienst-Metadaten, sowie für die Dienste anlegen. 
Sie können eine zweite Ansprechperson zu den Metadaten hinzufügen, indem sie die Metadaten-Konfiguration mit den folgenden Einträgen für die jeweils gewünschten zweiten Ansprechpersonen erweitern.

:::warning[Caution]

Beim Hinzufügen einer zweiten Ansprechperson werden die Felder `Webadresse der Organisation (Namensraum)`, `Name der Organisation` und `Email` nicht als erforderlich angezeigt. Sie müssen jedoch ausgefüllt werden, um Fehler beim Publizieren zu vermeiden.

:::

:::warning[Caution] 

Sie können nur *genau eine weitere* Ansprechperson pro Kontaktart erstellen. Mehrmaliges Einfügen der JSON-Inhalte für die Ansprechpersonen wird nicht funktionieren.

:::

Um eine zweite Ansprechperson für die Datensatz-Metadaten hinzuzufügen, fügen sie im Editor der Datensatz-Metadaten folgende JSON-Inhalte unter den Inhalten mit `categoryName` `dataset_contactForMetadata` ein.

<details>
<summary>Hinzufügen einer zweiten Ansprechperson für die Datensatz-Metadaten</summary>

```json
   {
        "categoryName": "dataset_contactForMetadata2",
        "title": "Datensatz - Zweite Ansprechperson Metadaten",
        "name": "dataset_contactForMetadata2",
        "expand": false,
        "fields": [
            {
                "name": "md-dataset.contactForMetadata2.individualName",
                "required": false,
                "minOccurs": 0,
                "maxOccurs": 1,
                "comment": "ISO B.3.2.2 - individualName",
                "label": "Name",
                "description": null,
                "type": "string",
                "schema": null,
                "defaultValue": null,
                "autofillRule": null,
                "visibility": true,
                "editable": true,
                "targets": {
                    "bsp": "md-dataset.contactForMetadata2.individualName"
                }
            },
            {
                "name": "md-dataset.contactForMetadata2.authorityUrl",
                "required": false,
                "minOccurs": 0,
                "maxOccurs": 1,
                "comment": "authorityUrl für INSPIRE-Extended-Capabilities",
                "label": "Webadresse der Organisation (Namensraum)",
                "description": null,
                "type": "string",
                "schema": null,
                "defaultValue": null,
                "autofillRule": null,
                "visibility": true,
                "editable": true,
                "targets": {
                    "bsp": "md-dataset.contactForMetadata2.authorityUrl"
                }
            },
            {
                "name": "md-dataset.contactForMetadata2.organisationName",
                "required": false,
                "minOccurs": 0,
                "maxOccurs": 1,
                "comment": "ISO B.3.2.2 - organisationName",
                "label": "Name der Organisation",
                "description": null,
                "type": "string",
                "schema": null,
                "defaultValue": null,
                "autofillRule": null,
                "visibility": true,
                "editable": true,
                "targets": {
                    "bsp": "md-dataset.contactForMetadata2.organisationName"
                }
            },
            {
                "name": "md-dataset.contactForMetadata2.positionName",
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
                    "bsp": "md-dataset.contactForMetadata2.positionName"
                }
            },
            {
                "name": "md-dataset.contactForMetadata2.roleCode",
                "required": false,
                "minOccurs": 0,
                "maxOccurs": 1,
                "comment": "roleCode",
                "label": "Rolle",
                "description": null,
                "type": "enum",
                "schema": null,
                "defaultValue": null,
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
                    "bsp": "md-dataset.contactForMetadata2.roleCode"
                }
            },
            {
                "name": "md-dataset.contactForMetadata2.email",
                "required": false,
                "minOccurs": 0,
                "maxOccurs": 1,
                "comment": "email",
                "label": "Email",
                "description": null,
                "type": "string",
                "schema": "email",
                "defaultValue": null,
                "autofillRule": null,
                "visibility": true,
                "editable": true,
                "targets": {
                    "bsp": "md-dataset.contactForMetadata2.email"
                }
            },
            {
                "name": "md-dataset.contactForMetadata2.deliveryPoint",
                "required": false,
                "minOccurs": 0,
                "maxOccurs": 1,
                "comment": "ISO B.3.2.2 deliveryPoint",
                "label": "Adresse",
                "description": null,
                "type": "string",
                "schema": null,
                "defaultValue": null,
                "autofillRule": null,
                "visibility": true,
                "editable": true,
                "targets": {
                    "bsp": "md-dataset.contactForMetadata2.deliveryPoint"
                }
            },
            {
                "name": "md-dataset.contactForMetadata2.postalCode",
                "required": false,
                "minOccurs": 0,
                "maxOccurs": 1,
                "comment": "ISO B.3.2.2 - postalcode",
                "label": "Postleitzahl",
                "description": null,
                "type": "string",
                "schema": null,
                "defaultValue": null,
                "autofillRule": null,
                "visibility": true,
                "editable": true,
                "targets": {
                    "bsp": "md-dataset.contactForMetadata2.postalCode"
                }
            },
            {
                "name": "md-dataset.contactForMetadata2.city",
                "required": false,
                "minOccurs": 0,
                "maxOccurs": 1,
                "comment": "ISO B.3.2.2##382 city",
                "label": "Ort",
                "description": null,
                "type": "string",
                "schema": null,
                "defaultValue": null,
                "autofillRule": null,
                "visibility": true,
                "editable": true,
                "targets": {
                    "bsp": "md-dataset.contactForMetadata2.city"
                }
            },
            {
                "name": "md-dataset.contactForMetadata2.administrativeArea",
                "required": false,
                "minOccurs": 0,
                "maxOccurs": 1,
                "comment": "ISO B.3.2.2##383 administrativeArea",
                "label": "Verwaltungseinheit",
                "description": "",
                "type": "string",
                "schema": null,
                "defaultValue": null,
                "autofillRule": null,
                "visibility": true,
                "editable": true,
                "targets": {
                    "bsp": "md-dataset.contactForMetadata2.administrativeArea"
                }
            },
            {
                "name": "md-dataset.contactForMetadata2.country",
                "required": false,
                "minOccurs": 0,
                "maxOccurs": 1,
                "comment": "country",
                "label": "Staat",
                "description": null,
                "type": "string",
                "schema": null,
                "defaultValue": null,
                "autofillRule": null,
                "visibility": true,
                "editable": true,
                "targets": {
                    "bsp": "md-dataset.contactForMetadata2.country"
                }
            },
            {
                "name": "md-dataset.contactForMetadata2.voicePhone",
                "required": false,
                "minOccurs": 0,
                "maxOccurs": 1,
                "comment": "ISO B.3.2.3 - voicePhone",
                "label": "Telefon",
                "description": null,
                "type": "string",
                "schema": null,
                "defaultValue": null,
                "autofillRule": null,
                "visibility": true,
                "editable": true,
                "targets": {
                    "bsp": "md-dataset.contactForMetadata2.voicePhone"
                }
            },
            {
                "name": "md-dataset.contactForMetadata2.facsimile",
                "required": false,
                "minOccurs": 0,
                "maxOccurs": 1,
                "comment": "ISO B.3.2.2 facsimile",
                "label": "FAX",
                "description": null,
                "type": "string",
                "schema": null,
                "defaultValue": null,
                "autofillRule": null,
                "visibility": true,
                "editable": true,
                "targets": {
                    "bsp": "md-dataset.contactForMetadata2.facsimile"
                }
            }
        ]
    },
```

</details>

Um eine zweite Ansprechperson für den Datensatz hinzuzufügen, fügen sie im Editor der Datensatz-Metadaten folgende JSON-Inhalte unter den Inhalten mit `categoryName` `dataset_contactForResource` ein.
<details>
<summary>Hinzufügen einer zweiten Ansprechperson für den Datensatz</summary>

```json
{
        "categoryName": "dataset_contactForResource2",
        "title": "Datensatz - Zweite Ansprechperson Datensatz",
        "name": "dataset_contactForResource2",
        "expand": false,
        "fields": [
            {
                "name": "md-dataset.identification.contactForResource2.individualName",
                "required": false,
                "minOccurs": 0,
                "maxOccurs": 1,
                "comment": "ISO B.3.2.2 - individualName",
                "label": "Name",
                "description": null,
                "type": "string",
                "schema": null,
                "defaultValue": null,
                "autofillRule": null,
                "visibility": true,
                "editable": true,
                "targets": {
                    "bsp": "md-dataset.identification.contactForResource2.individualName"
                }
            },
            {
                "name": "md-dataset.identification.contactForResource2.authorityUrl",
                "required": false,
                "minOccurs": 0,
                "maxOccurs": 1,
                "comment": "authorityUrl für INSPIRE-Extended-Capabilities",
                "label": "Webadresse der Organisation (Namensraum)",
                "description": null,
                "type": "string",
                "schema": null,
                "defaultValue": null,
                "autofillRule": null,
                "visibility": true,
                "editable": true,
                "targets": {
                    "bsp": "md-dataset.identification.contactForResource2.authorityUrl"
                }
            },
            {
                "name": "md-dataset.identification.contactForResource2.organisationName",
                "required": false,
                "minOccurs": 0,
                "maxOccurs": 1,
                "comment": "ISO B.3.2.2 - organisationName",
                "label": "Name der Organisation",
                "description": null,
                "type": "string",
                "schema": null,
                "defaultValue": null,
                "autofillRule": null,
                "visibility": true,
                "editable": true,
                "targets": {
                    "bsp": "md-dataset.identification.contactForResource2.organisationName"
                }
            },
            {
                "name": "md-dataset.identification.contactForResource2.positionName",
                "required": false,
                "minOccurs": 0,
                "maxOccurs": 1,
                "comment": "positionName",
                "label": "Position",
                "description": "Position oder Funktion der zuständigen Person",
                "type": "string",
                "schema": null,
                "defaultValue": null,
                "autofillRule": null,
                "visibility": true,
                "editable": true,
                "targets": {
                    "bsp": "md-dataset.identification.contactForResource2.positionName"
                }
            },
            {
                "name": "md-dataset.identification.contactForResource2.roleCode",
                "required": false,
                "minOccurs": 0,
                "maxOccurs": 1,
                "comment": "roleCode",
                "label": "Rolle",
                "description": null,
                "type": "enum",
                "schema": null,
                "defaultValue": null,
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
                    "bsp": "md-dataset.identification.contactForResource2.roleCode"
                }
            },
            {
                "name": "md-dataset.identification.contactForResource2.email",
                "required": false,
                "minOccurs": 0,
                "maxOccurs": 1,
                "comment": "email",
                "label": "Email",
                "description": null,
                "type": "string",
                "schema": "email",
                "defaultValue": null,
                "autofillRule": null,
                "visibility": true,
                "editable": true,
                "targets": {
                    "bsp": "md-dataset.identification.contactForResource2.email"
                }
            },
            {
                "name": "md-dataset.identification.contactForResource2.deliveryPoint",
                "required": false,
                "minOccurs": 0,
                "maxOccurs": 1,
                "comment": "ISO B.3.2.2 deliveryPoint",
                "label": "Adresse",
                "description": null,
                "type": "string",
                "schema": null,
                "defaultValue": null,
                "autofillRule": null,
                "visibility": true,
                "editable": true,
                "targets": {
                    "bsp": "md-dataset.identification.contactForResource2.deliveryPoint"
                }
            },
            {
                "name": "md-dataset.identification.contactForResource2.postalCode",
                "required": false,
                "minOccurs": 0,
                "maxOccurs": 1,
                "comment": "ISO B.3.2.2 - postalcode",
                "label": "Postleitzahl",
                "description": null,
                "type": "string",
                "schema": null,
                "defaultValue": null,
                "autofillRule": null,
                "visibility": true,
                "editable": true,
                "targets": {
                    "bsp": "md-dataset.identification.contactForResource2.postalCode"
                }
            },
            {
                "name": "md-dataset.identification.contactForResource2.city",
                "required": false,
                "minOccurs": 0,
                "maxOccurs": 1,
                "comment": "ISO B.3.2.2##382 city",
                "label": "Ort",
                "description": null,
                "type": "string",
                "schema": null,
                "defaultValue": null,
                "autofillRule": null,
                "visibility": true,
                "editable": true,
                "targets": {
                    "bsp": "md-dataset.identification.contactForResource2.city"
                }
            },
            {
                "name": "md-dataset.identification.contactForResource2.administrativeArea",
                "required": false,
                "minOccurs": 0,
                "maxOccurs": 1,
                "comment": "ISO B.3.2.2##383 administrativeArea",
                "label": "Verwaltungseinheit",
                "description": null,
                "type": "string",
                "schema": null,
                "defaultValue": null,
                "autofillRule": null,
                "visibility": true,
                "editable": true,
                "targets": {
                    "bsp": "md-dataset.identification.contactForResource2.administrativeArea"
                }
            },
            {
                "name": "md-dataset.identification.contactForResource2.country",
                "required": false,
                "minOccurs": 0,
                "maxOccurs": 1,
                "comment": "country",
                "label": "Staat",
                "description": null,
                "type": "string",
                "schema": null,
                "defaultValue": null,
                "autofillRule": null,
                "visibility": true,
                "editable": true,
                "targets": {
                    "bsp": "md-dataset.identification.contactForResource2.country"
                }
            },
            {
                "name": "md-dataset.identification.contactForResource2.voicePhone",
                "required": false,
                "minOccurs": 0,
                "maxOccurs": 1,
                "comment": "ISO B.3.2.3 - voicePhone",
                "label": "Telefon",
                "description": null,
                "type": "string",
                "schema": null,
                "defaultValue": null,
                "autofillRule": null,
                "visibility": true,
                "editable": true,
                "targets": {
                    "bsp": "md-dataset.identification.contactForResource2.voicePhone"
                }
            },
            {
                "name": "md-dataset.identification.contactForResource2.facsimile",
                "required": false,
                "minOccurs": 0,
                "maxOccurs": 1,
                "comment": "ISO B.3.2.2 facsimile",
                "label": "FAX",
                "description": null,
                "type": "string",
                "schema": null,
                "defaultValue": null,
                "autofillRule": null,
                "visibility": true,
                "editable": true,
                "targets": {
                    "bsp": "md-dataset.identification.contactForResource2.facsimile"
                }
            }
        ]
    },
```

</details>

Um eine zweite Ansprechperson für die Dienst-Metadaten hinzuzufügen, fügen sie im Editor der Dienst-Metadaten folgende JSON-Inhalte unter den Inhalten mit `categoryName` `dataset_contactForMetadata` ein.
<details>
<summary>Hinzufügen einer zweiten Ansprechperson für die Dienst-Metadaten</summary>

```json
{
        "categoryName": "service_contactForMetadata2",
        "title": "Dienste - Zweite Ansprechperson Metadaten",
        "name": "service_contactForMetadata2",
        "expand": false,
        "fields": [
            {
                "name": "md-service.contactForMetadata2.individualName",
                "required": false,
                "minOccurs": 0,
                "maxOccurs": 1,
                "comment": "ISO B.3.2.2 - individualName",
                "label": "Name",
                "description": null,
                "type": "string",
                "schema": null,
                "defaultValue": null,
                "autofillRule": null,
                "visibility": true,
                "editable": true,
                "targets": {
                    "bsp": "md-service.contactForMetadata2.individualName"
                }
            },
            {
                "name": "md-service.contactForMetadata2.authorityUrl",
                "required": false,
                "minOccurs": 0,
                "maxOccurs": 1,
                "comment": "authorityUrl für INSPIRE-Extended-Capabilities",
                "label": "Webadresse der Organisation (Namensraum)",
                "description": null,
                "type": "string",
                "schema": null,
                "defaultValue": null,
                "autofillRule": null,
                "visibility": true,
                "editable": true,
                "targets": {
                    "bsp": "md-service.contactForMetadata2.authorityUrl"
                }
            },
            {
                "name": "md-service.contactForMetadata2.organisationName",
                "required": false,
                "minOccurs": 0,
                "maxOccurs": 1,
                "comment": "ISO B.3.2.2 - organisationName",
                "label": "Name der Organisation",
                "description": null,
                "type": "string",
                "schema": null,
                "defaultValue": null,
                "autofillRule": null,
                "visibility": true,
                "editable": true,
                "targets": {
                    "bsp": "md-service.contactForMetadata2.organisationName"
                }
            },
            {
                "name": "md-service.contactForMetadata2.positionName",
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
                    "bsp": "md-service.contactForMetadata2.positionName"
                }
            },
            {
                "name": "md-service.contactForMetadata2.roleCode",
                "required": false,
                "minOccurs": 0,
                "maxOccurs": 1,
                "comment": "roleCode",
                "label": "Rolle",
                "description": null,
                "type": "enum",
                "schema": null,
                "defaultValue": null,
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
                    "bsp": "md-service.contactForMetadata2.roleCode"
                }
            },
            {
                "name": "md-service.contactForMetadata2.email",
                "required": false,
                "minOccurs": 0,
                "maxOccurs": 1,
                "comment": "email",
                "label": "Email",
                "description": null,
                "type": "string",
                "schema": "email",
                "defaultValue": null,
                "autofillRule": null,
                "visibility": true,
                "editable": true,
                "targets": {
                    "bsp": "md-service.contactForMetadata2.email"
                }
            },
            {
                "name": "md-service.contactForMetadata2.deliveryPoint",
                "required": false,
                "minOccurs": 0,
                "maxOccurs": 1,
                "comment": "ISO B.3.2.2 deliveryPoint",
                "label": "Adresse",
                "description": null,
                "type": "string",
                "schema": null,
                "defaultValue": null,
                "autofillRule": null,
                "visibility": true,
                "editable": true,
                "targets": {
                    "bsp": "md-service.contactForMetadata2.deliveryPoint"
                }
            },
            {
                "name": "md-service.contactForMetadata2.postalCode",
                "required": false,
                "minOccurs": 0,
                "maxOccurs": 1,
                "comment": "ISO B.3.2.2 - postalcode",
                "label": "Postleitzahl",
                "description": null,
                "type": "string",
                "schema": null,
                "defaultValue": null,
                "autofillRule": null,
                "visibility": true,
                "editable": true,
                "targets": {
                    "bsp": "md-service.contactForMetadata2.postalCode"
                }
            },
            {
                "name": "md-service.contactForMetadata2.city",
                "required": false,
                "minOccurs": 0,
                "maxOccurs": 1,
                "comment": "ISO B.3.2.2##382 city",
                "label": "Ort",
                "description": null,
                "type": "string",
                "schema": null,
                "defaultValue": null,
                "autofillRule": null,
                "visibility": true,
                "editable": true,
                "targets": {
                    "bsp": "md-service.contactForMetadata2.city"
                }
            },
            {
                "name": "md-service.contactForMetadata2.administrativeArea",
                "required": false,
                "minOccurs": 0,
                "maxOccurs": 1,
                "comment": "ISO B.3.2.2##383 administrativeArea",
                "label": "Verwaltungseinheit",
                "description": "",
                "type": "string",
                "schema": null,
                "defaultValue": null,
                "autofillRule": null,
                "visibility": true,
                "editable": true,
                "targets": {
                    "bsp": "md-service.contactForMetadata2.administrativeArea"
                }
            },
            {
                "name": "md-service.contactForMetadata2.country",
                "required": false,
                "minOccurs": 0,
                "maxOccurs": 1,
                "comment": "country",
                "label": "Staat",
                "description": null,
                "type": "string",
                "schema": null,
                "defaultValue": null,
                "autofillRule": null,
                "visibility": true,
                "editable": true,
                "targets": {
                    "bsp": "md-service.contactForMetadata2.country"
                }
            },
            {
                "name": "md-service.contactForMetadata2.voicePhone",
                "required": false,
                "minOccurs": 0,
                "maxOccurs": 1,
                "comment": "ISO B.3.2.3 - voicePhone",
                "label": "Telefon",
                "description": null,
                "type": "string",
                "schema": null,
                "defaultValue": null,
                "autofillRule": null,
                "visibility": true,
                "editable": true,
                "targets": {
                    "bsp": "md-service.contactForMetadata2.voicePhone"
                }
            },
            {
                "name": "md-service.contactForMetadata2.facsimile",
                "required": false,
                "minOccurs": 0,
                "maxOccurs": 1,
                "comment": "ISO B.3.2.2 facsimile",
                "label": "FAX",
                "description": null,
                "type": "string",
                "schema": null,
                "defaultValue": null,
                "autofillRule": null,
                "visibility": true,
                "editable": true,
                "targets": {
                    "bsp": "md-service.contactForMetadata2.facsimile"
                }
            }
        ]
    },
```

</details>

Um eine zweite Ansprechperson für die Dienste hinzuzufügen, fügen sie im Editor der Dienst-Metadaten folgende JSON-Inhalte unter den Inhalten mit `categoryName` `dataset_contactForResource` ein.
<details>
<summary>Hinzufügen einer zweiten Ansprechperson für die Dienste</summary>

```json
{
        "categoryName": "service_contactForResource2",
        "title": "Dienste - Zweite Ansprechperson Dienst",
        "name": "service_contactForResource2",
        "expand": false,
        "fields": [
            {
                "name": "md-service.identification.contactForResource2.individualName",
                "required": false,
                "minOccurs": 0,
                "maxOccurs": 1,
                "comment": "ISO B.3.2.2 - individualName",
                "label": "Name",
                "description": null,
                "type": "string",
                "schema": null,
                "defaultValue": null,
                "autofillRule": null,
                "visibility": true,
                "editable": true,
                "targets": {
                    "bsp": "md-service.identification.contactForResource2.individualName"
                }
            },
            {
                "name": "md-service.identification.contactForResource2.authorityUrl",
                "required": false,
                "minOccurs": 0,
                "maxOccurs": 1,
                "comment": "authorityUrl für INSPIRE-Extended-Capabilities",
                "label": "Webadresse der Organisation (Namensraum)",
                "description": null,
                "type": "string",
                "schema": null,
                "defaultValue": null,
                "autofillRule": null,
                "visibility": true,
                "editable": true,
                "targets": {
                    "bsp": "md-service.identification.contactForResource2.authorityUrl"
                }
            },
            {
                "name": "md-service.identification.contactForResource2.organisationName",
                "required": false,
                "minOccurs": 0,
                "maxOccurs": 1,
                "comment": "ISO B.3.2.2 - organisationName",
                "label": "Name der Organisation",
                "description": null,
                "type": "string",
                "schema": null,
                "defaultValue": null,
                "autofillRule": null,
                "visibility": true,
                "editable": true,
                "targets": {
                    "bsp": "md-service.identification.contactForResource2.organisationName"
                }
            },
            {
                "name": "md-service.identification.contactForResource2.positionName",
                "required": false,
                "minOccurs": 0,
                "maxOccurs": 1,
                "comment": "positionName",
                "label": "Position",
                "description": "Position oder Funktion der zuständigen Person",
                "type": "string",
                "schema": null,
                "defaultValue": null,
                "autofillRule": null,
                "visibility": true,
                "editable": true,
                "targets": {
                    "bsp": "md-service.identification.contactForResource2.positionName"
                }
            },
            {
                "name": "md-service.identification.contactForResource2.roleCode",
                "required": false,
                "minOccurs": 0,
                "maxOccurs": 1,
                "comment": "roleCode",
                "label": "Rolle",
                "description": null,
                "type": "enum",
                "schema": null,
                "defaultValue": null,
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
                    "bsp": "md-service.identification.contactForResource2.roleCode"
                }
            },
            {
                "name": "md-service.identification.contactForResource2.email",
                "required": false,
                "minOccurs": 0,
                "maxOccurs": 1,
                "comment": "email",
                "label": "Email",
                "description": null,
                "type": "string",
                "schema": "email",
                "defaultValue": null,
                "autofillRule": null,
                "visibility": true,
                "editable": true,
                "targets": {
                    "bsp": "md-service.identification.contactForResource2.email"
                }
            },
            {
                "name": "md-service.identification.contactForResource2.deliveryPoint",
                "required": false,
                "minOccurs": 0,
                "maxOccurs": 1,
                "comment": "ISO B.3.2.2 deliveryPoint",
                "label": "Adresse",
                "description": null,
                "type": "string",
                "schema": null,
                "defaultValue": null,
                "autofillRule": null,
                "visibility": true,
                "editable": true,
                "targets": {
                    "bsp": "md-service.identification.contactForResource2.deliveryPoint"
                }
            },
            {
                "name": "md-service.identification.contactForResource2.postalCode",
                "required": false,
                "minOccurs": 0,
                "maxOccurs": 1,
                "comment": "ISO B.3.2.2 - postalcode",
                "label": "Postleitzahl",
                "description": null,
                "type": "string",
                "schema": null,
                "defaultValue": null,
                "autofillRule": null,
                "visibility": true,
                "editable": true,
                "targets": {
                    "bsp": "md-service.identification.contactForResource2.postalCode"
                }
            },
            {
                "name": "md-service.identification.contactForResource2.city",
                "required": false,
                "minOccurs": 0,
                "maxOccurs": 1,
                "comment": "ISO B.3.2.2##382 city",
                "label": "Ort",
                "description": null,
                "type": "string",
                "schema": null,
                "defaultValue": null,
                "autofillRule": null,
                "visibility": true,
                "editable": true,
                "targets": {
                    "bsp": "md-service.identification.contactForResource2.city"
                }
            },
            {
                "name": "md-service.identification.contactForResource2.administrativeArea",
                "required": false,
                "minOccurs": 0,
                "maxOccurs": 1,
                "comment": "ISO B.3.2.2##383 administrativeArea",
                "label": "Verwaltungseinheit",
                "description": null,
                "type": "string",
                "schema": null,
                "defaultValue": null,
                "autofillRule": null,
                "visibility": true,
                "editable": true,
                "targets": {
                    "bsp": "md-service.identification.contactForResource2.administrativeArea"
                }
            },
            {
                "name": "md-service.identification.contactForResource2.country",
                "required": false,
                "minOccurs": 0,
                "maxOccurs": 1,
                "comment": "country",
                "label": "Staat",
                "description": null,
                "type": "string",
                "schema": null,
                "defaultValue": null,
                "autofillRule": null,
                "visibility": true,
                "editable": true,
                "targets": {
                    "bsp": "md-service.identification.contactForResource2.country"
                }
            },
            {
                "name": "md-service.identification.contactForResource2.voicePhone",
                "required": false,
                "minOccurs": 0,
                "maxOccurs": 1,
                "comment": "ISO B.3.2.3 - voicePhone",
                "label": "Telefon",
                "description": null,
                "type": "string",
                "schema": null,
                "defaultValue": null,
                "autofillRule": null,
                "visibility": true,
                "editable": true,
                "targets": {
                    "bsp": "md-service.identification.contactForResource2.voicePhone"
                }
            },
            {
                "name": "md-service.identification.contactForResource2.facsimile",
                "required": false,
                "minOccurs": 0,
                "maxOccurs": 1,
                "comment": "ISO B.3.2.2 facsimile",
                "label": "FAX",
                "description": null,
                "type": "string",
                "schema": null,
                "defaultValue": null,
                "autofillRule": null,
                "visibility": true,
                "editable": true,
                "targets": {
                    "bsp": "md-service.identification.contactForResource2.facsimile"
                }
            }
        ]
    },
```

</details>