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
      <img src={require("/images/help/de/generate_metadata.PNG").default} alt="" title="Generieren von Metadaten mit haleconnect" className="img-responsive img-inline-help"/>
      * Existierende Metadaten neu publizieren: Wählen sie diese Option, um während der Datensatz-Erstellung eine bestehende Metadaten-Datei hochzuladen.
		Wenn sie sich dafür entscheiden, existierende Metadaten neu zu publizieren, generiert haleconnect Datensatz-Metadaten basierend auf einer Kopie der Daten, die über eine URL oder einen Daten-Upload bereitgestellt werden. Bitte beachten sie, dass die Elemente gml:TimePeriod und gmd:MD_RestrictionCode in existierenden Metadaten derzeit nicht unterstüzt werden.
      <img src={require("/images/help/de/copy_metadata.PNG").default} alt="" title="Metadaten kopieren" className="img-responsive img-inline-help"/>
      * Existierende Metadaten verlinken: Wählen sie diese Option, um während der Datensatz-Erstellung einen Link zu einer bestehende Metadaten-Datei anzugeben.
		Wenn sie sich dafür entscheiden, einen Link zu existierenden Metadaten anzugeben, generiert haleconnect Datensatz-Metadaten über einen Zugriff auf die angegebene URL. Bitte beachten sie, dass die Elemente gml:TimePeriod und gmd:MD_RestrictionCode in existierenden Metadaten derzeit nicht unterstüzt werden.
      <img src={require("/images/help/de/remote_url_metadata.PNG").default} alt="" title="Existierende Metadaten verlinken" className="img-responsive img-inline-help"/>

6.	Wählen sie die Metadaten-Sprache aus dem Aufklappmenü aus. Alle europäischen Sprachen werden unterstützt.

7.	Der &laquo;Editor bei Datensatz-Erstellung anzeigen&raquo;-Schalter ermöglicht ihnen zu steuern, an welcher Stelle Metadaten eingegeben werden:
    *	Auswahl aktiv: Der Metadaten-Editor wird während der Erstellung des Datensatzes angezeigt.
    *	Auswahl inaktiv: Der Metadaten-Editor wird während der Erstellung des Datensatzes nicht angezeigt. Nutzer haben dann während der initialen Erstellung eines Datensatzes keine Kontrolle über die Metadaten, können diese aber nach Erstellung des Datensatzes unter &laquo;Daten&raquo; -> &laquo;Metadaten&raquo; bearbeiten.
8.	Wenn sie &laquo;Metadaten-Editor verwenden&raquo; gewählt haben, verändern sie die Metadaten-Konfiguration im Editor gemäß nachfolgender Beschreibung. Klicken sie &laquo;Speichern&raquo;.

Die Konfiguration der Metadateneingabe für ein Thema erfolgt über einen Texteditor, der in die Anwendung eingebettet ist. Mit diesem Editor wird direkt die in JSON (JavaScript Object Notation) formatierte Konfigurationsdatei bearbeitet. Der Editor prüft Syntax sowie Schema und stellt einen Assistenten für die Autofill-Regeln bereit.

:::caution

Hinweis: Im JSON-Format werden Objekte durch geschweifte Klammern {}, Listen durch eckige Klammern [], sowie Zeichenketten durch Anführungszeichen ““ markiert. All diese Zeichen müssen stets paarweise und in der richtigen Reihenfolge angegeben werden, ansonsten wird ein Fehler <em>Ungültiges JSON</em> angezeigt.

:::

Bei der Konfiguration handelt es sich um eine Liste. Die Objekte direkt in dieser Liste sind Kategorien. Kategorien werden verwendet, um Eingabefelder, die einen inhaltlichen Bezug haben, in der Benutzeroberfläche als Gruppe anzuzeigen.

Jeder Kategorie wird eine Liste an Feldern (fields) zugeordnet. Jedes Feld-Objekt beschreibt, wie die Eingabe in der Benutzeroberfläche aussehen soll, wie der Inhalt formatiert werden soll und was für Standardwerte eingetragen werden sollen. Die folgenden Eigenschaften eines Feldes können definiert werden:

*	**name:** Ein eindeutiger Name des Feldes, der dem Pfad im internen Domänenmodel entsprechen muss.
*	**label:** Die Bezeichnung, die neben dem Eingabefeld in der Metadatenmaske angezeigt werden soll.
*	**description:** Ein erläuternder Text zu dem Eingabefeld.
*	**type:** Die Datenart des Feldes. Zulässig sind string, object, array, integer und float.
*	**schema:** Die Struktur des Wertes, der eingetragen werden soll. Zulässig sind email, enum, geojson, json, wkt und csv. Für weitere Informationen zu Aufzählungsfeldern, siehe auch [Mit Aufzählungsfeldern arbeiten](#mit-aufzählungsfeldern-arbeiten).
*	**defaultValue:** Ein statischer Standard-Wert, der dem Feld zugewiesen werden soll.
*	**autofillRule:** Ein dynamischer Standard-Wert, der dem Feld zugewiesen werden soll. Der Wert wird aus den aktuellen Umgebungsvariablen (Benutzerin oder Benutzer, Organisation, Datensatz, Thema, Dienst) abgeleitet. Wenn sie in eine Zeile mit dem Schlüsselwort autofillRule klicken, erscheint in der oberen rechten Ecke des Editors der Autofill Assistent. Für mehr Informationen zu Autofill-Regeln, sieht auch [Mit Autofill-Regeln arbeiten](#mit-autofill-regeln-arbeiten).
*	**required:** wird auf true gesetzt, wenn in jedem Fall ein typ- und schemakonformer Wert einzutragen ist.
*	**visibility:** wird auf true gesetzt, wenn Nutzende mit der Rolle Datenmanager dieses Feld im GUI sehen können sollen.
*	**editable:** wird auf true gesetzt, wenn der Datenmanager dieses Feld editieren können soll.
*	**minOccurs:** Gibt an, wie viele Felder dieses Typs minimal auszufüllen sind.
*	**maxOccurs:** Gibt an, wie viele Felder dieses Typs maximal auszufüllen sind.
* **openValue** Das Feld basiert auf einer Enumeration, lässt aber andere Werte zu.
* **enumValues** Das Feld enthält die Werte, die im GUI für dieses Metadaten-Feld in einem Dropdown-Menü verfügbar sind.
*	**targets:** Abbildungsregeln für externe Dienste. Für die interne Publikation ist stets der folgende Wert einzugeben: <br />"bsp": "{{name}}"<br />{{name}} ist durch den Namen des Feldes zu ersetzen.

Die folgenden Pfade sind als targets verfügbar:

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

#### Beispielkonfiguration

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



### Mit Aufzählungsfeldern arbeiten
Aufzählungsfelder ermöglichen das Anlegen von Aufklappmenüs für Felder. Aufklappmenüs schränken die möglichen Auswahloptionen der oder des Endnutzenden auf vordefinierte Werte ein, wodurch das Eintragen von Metadaten einfacher und weniger fehleranfällig wird. Um ein Aufzählungsfeld zu nutzen, geben sie &laquo;enum&raquo; in das Schemafeld ein. Legen sie dann ein Feld mit dem Namen &laquo;enumValues&raquo; am Ende des Kategorie-Objekts an. Die Werte werden in eckigen Klammern [] angegeben. Jedes label/value-Paar wird in geschweiften Klammern angegeben {}. Kopieren sie das Muster des &laquo;enumValues&raquo;-Feldes in den folgenden Code-Block um ein Aufzählungsfeld im Kategorie-Objekt ihrer Wahl anzulegen. Ersetzen sie in den label/value-Paaren die Werte nach den Doppelpunkten mit ihren eigenen Daten.

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


**Metadatenkonfiguration für die Nutzung von Attributwerten einzelner Objektarten als Schlüsselwörter**

IIn der folgenden Abbildung wird das konfigurierte Schlüsselwörter-Feld dargestellt, wie es in den Datensatz-Metadaten erscheint. Das Feld ist mit den Attributwerten belegt, die im Metadaten-Editor ausgewählt wurden - in diesem Fall handelt es sich um Schulbezirksnamen.

<img src={require("/images/help/de/AttributeValues.png").default} alt="" title="Attributwerte als Schlüsselwörter" className="img-responsive img-inline-help"/>

### Hinzufügen mehrerer Standardwerte für ein Metadatenfeld

Mit hale»connect können Benutzende mehrere Standardwerte in der Metadatenkonfiguration eines Themas angeben. In eckigen Klammern können mehrere durch Kommas getrennte Werte hinzugefügt werden. Im folgenden Beispiel werden die Schlüsselwörter "INSPIRE" und "Umwelt" zu separaten Keyword-Elementen in den Datensatz-Metadaten hinzugefügt.

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
           **Metadatenkonfiguration für die Nutzung von Attributwerten einzelner Objektarten als Schlüsselwörter**

           In der folgenden Abbildung wird das konfigurierte Schlüsselwörter-Feld dargestellt, wie es in den Datensatz-Metadaten erscheint. Das Feld ist mit den Attributwerten belegt, die im Metadaten-Editor ausgewählt wurden - in diesem Fall handelt es sich um Schulbezirksnamen.

           <img src={require("/images/help/de/AttributeValues.png").default} alt="" title="Attributwerte als Schlüsselwörter" className="img-responsive img-inline-help"/>

### Hinzufügen mehrerer Autofill-Regeln für ein Metadatenfeld

Mit hale»connect können Benutzende mehrere Autofill-Regeln in der Metadatenkonfiguration eines Themas angeben. In eckigen Klammern können mehrere durch Kommas getrennte Autofill-Regeln hinzugefügt werden. Im folgenden Beispiel werden die Schlüsselwörter "NAME" und "NUMBER" zu separaten Keyword-Elementen in den Datensatz-Metadaten hinzugefügt.

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
              "autofillRule":[
                    {% raw %}"{{fileAnalysis.attributeValues.SchoolDistrict.SchoolDistrictFeatures.NAME}}"{% endraw %},
                    {% raw %}"{{fileAnalysis.attributeValues.SchoolDistrict.SchoolDistrictFeatures.NUMBER}}"{% endraw %}
                  ],
              "visibility": true,
              "editable": true,
              "targets": {
                  "bsp": "md-dataset.identification.keyword_simple"
              }
          }

### Hinzufügen von übersetzten Werten oder freiem Text zu Nutzungsbedienungen

TG-Anforderung C.18 in der [Technical Guidance for the implementation of INSPIRE dataset and service metadata based on ISO/TS 19139:2007](https://inspire.ec.europa.eu/id/document/tg/metadata-iso19139) erfordert, dass Implementierende die Bedingungen für den Zugriff und die Verwendung einer Ressource beschreiben. Ein Wert aus der INSPIRE-Codeliste [ConditionsApplyingToAccessAndUse](https://inspire.ec.europa.eu/metadata-codelist/ConditionsApplyingToAccessAndUse/noConditionsApply) muss ausgewählt sein oder alternativ muss ein Freitext bereitgestellt werden. hale»connect bietet Benutzendem die Möglichkeit, einen Wert aus der INSPIRE-Codeliste auszuwählen, einen Wert aus der INSPIRE-Codeliste auszuwählen und einen übersetzten Wert bereitzustellen oder einen freien Text bereitzustellen.  

**Metadaten, die für die Verwendung eines Werts aus der INSPIRE-Codeliste [ConditionsApplyingToAccessAndUse](https://inspire.ec.europa.eu/metadata-codelist/ConditionsApplyingToAccessAndUse/noConditionsApply) konfiguriert sind**

Das Feld `` defaultValue`` muss mit dem Text aus dem Feld `` value`` der Aufzählung gefüllt werden, um den INSPIRE-Codelistenwert als Standard festzulegen.

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

**Metadaten, die einen Wert aus der INSPIRE-Codeliste [ConditionsApplyingToAccessAndUse](https://inspire.ec.europa.eu/metadata-codelist/ConditionsApplyingToAccessAndUse/noConditionsApply) und einen übersetzten Wert verwenden**

Das Feld `` defaultValue`` muss mit dem Text aus dem Feld `` value`` der Aufzählung gefüllt werden, um den INSPIRE-Codelistenwert als Standard festzulegen. Ein übersetzter Wert kann unter Verwendung des folgenden Musters bereitgestellt werden: `` <Aufzählungswert>: <übersetzter Wert> ``.

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

**Metadaten, die für die Verwendung eines Freitextwerts konfiguriert sind**

Das Feld `` defaultValue`` kann mit freiem Text in doppelten Anführungszeichen gefüllt werden.

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

### Mit gmx:Anchor-Elementen in String-Feldern arbeiten

hale»connect unterstützt die Verwendung von gmx:Anchor-Codierung für gco:CharacterString-Elemente, die in von hale»connect generierten Metadaten vorhanden sind. Die Notation im Markdown-Stil kann verwendet werden, um einen Textwert und eine URL anzugeben. Ein gmx:Anchor-codiertes Element kann mit dem Muster generiert werden: \[<text\>\](<link\>)

Es gibt einige Ausnahmen, bei denen dies aufgrund einer besonderen Behandlung nicht funktioniert. Das CharacterString-Element ``Webadresse der Organisation (Namensraum)`` im Kontakt für Metadaten kann nicht als gmx:Anchor codiert werden.

Im folgenden Beispiel wird ein gmx:Anchor als ``defaultValue`` und dem Feld ``enumValues`` hinzugefügt.

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
              ],

#### Hinzufügen von JSON-Werten in String-Feldern

JSON-Werte können im Metadaten-Editor zu String-Feldern hinzugefügt werden. Die JSON-Werte müssen maskiert werden, bevor sie der Metadatenkonfiguration hinzugefügt werden. Im folgenden Beispiel wird ein JSON-Wert als ``defaultValue`` und dem Feld ``enumValues`` hinzugefügt.

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
