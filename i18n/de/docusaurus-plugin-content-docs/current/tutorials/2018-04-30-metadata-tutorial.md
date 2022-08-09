---
title: "Metadaten auf hale»connect konfigurieren"
categories:
- "help-page-category-tutorials"
- "help-page-subcategory-tutorials"
layout: help-detail
language: de

---

Das Erstellen von Metadaten ist häufig ein aufwendiges, langwieriges und fehleranfälliges Unterfangen. Die hale»connect Plattform kann so konfiguriert werden, dass automatisch ISO-, INSPIRE-, und GDI-DE-konforme Metadaten für Datensätze sowie Darstellungs- und Download-Dienste generiert werden. hale»connect sammelt dazu Informationen aus Datensätzen, aus Umgebungsvariablen wie beispielsweise den Nutzerprofildaten und aus nutzerdefinierten eigenen Metadaten-Feldern, um automatisch Metadaten zu generieren, die zu diversen Metadaten-Standards konform sind. Die Standard-Metadaten, die von hale»connect generiert werden, können durch Nutzende mit der Rolle &laquo;Themenmanager&raquo; oder &laquo;Supernutzer&raquo; im Metadaten-Bereich eines Themas konfiguriert werden. Diese Metadaten-Konfiguration muss lediglich ein Mal durchgeführt werden. Das Thema, das die Metadaten-Konfiguration enthält kann von allen Nutzenden der Organisation für jeden Datensatz innerhalb der Organisation wiederverwendet werden.

Dieses Tutorial führt durch die Schritte, die notwendig sind um Metadaten mit dem Metadaten-Editor-Werkzeug von hale»connect zu konfigurieren. Außerdem wird auf die Validierungen, die hale»connect ausführt, um die Konformität der Metadaten zu ISO, INSPIRE und der GDI-DE zu gewährleisten, eingegangen. Bevor wir beginnen, ein kurzer Überblick über die für das Tutorial benötigten hale»connect-Ressourcen:

* hale»connect-Nutzerprofil mit der Rolle &laquo;Themenmanager&raquo; oder &laquo;Supernutzer&raquo;
* Datensatz
* Schema(s) für den Datensatz
* Thema

*WICHTIG: Standard-Metadaten für Datensätze und Web-Dienste werden von hale»connect automatisch angelegt. Die Konfiguration von Metadaten ist optional.*

### **Beispiel-Daten**

Für dieses Tutorial nutzen wir:

* Eine Shape-Datei *Contains OS data © Crown copyright and database right 2018*. Sie können die Shape-Datei [hier](https://wetransform.box.com/s/2mnyp9xtjbbk3b5tbc1thg0jmxthgd0e) herunterladen.

### **Metadaten mit Hilfe des Metadaten-Editors konfigurieren**

**Schritt 1: Eigene Metadaten-Felder hinzufügen**

hale»connect ermöglicht es Nutzenden, eigene Metadaten-Felder im &laquo;Organisation&raquo;-Bereich der Einstellungen oder im Nutzerprofil hinzuzufügen. Eigene Metadaten-Felder enthalten Werte, die genutzt werden können, um Metadaten-Elemente zu befüllen. Um Metadaten automatisch erzeugen zu können, sammelt hale»connect Informationen von verschiedenen Stellen der Plattform, inklusive der von Nutzenden angegebenen Werte in den Nutzerprofilen und im &laquo;Organisation&raquo;-Bereich. In manchen Fällen ordnet hale»connect die dabei gesammelten Werten automatisch bestimmten Metadaten-Feldern zu.

Wenn sie ein eigenes Metadaten-Feld anlegen, fügt hale»connect das dabei entstandene Schlüssel-Wert-Paar dem Autofill-Assistenten im Metadaten-Editor hinzu. Der Autofill-Assistent wird an späterer Stelle genauer betrachtet. Zunächst fügen wir ein eigenes Metadaten-Feld hinzu.

Um im Profil ihrer Organisation ein neues eigenes Metadaten-Feld hinzuzufügen, folgen sie mit der Rolle &laquo;Themenmanager&raquo; oder &laquo;Supernutzer&raquo; diesem Ablauf:

* Klicken sie auf das &laquo;Einstellungen&raquo;-Symbol (Zahnrad-Symbol) oben rechts auf dem Bildschirm.
* Klicken sie auf den &laquo;Organisationen&raquo;-Bereich und wählen sie ihre Organisation aus der Liste aus.
<img src={require("/images/help/de/Tutorial_organisations.png").default} alt="" title="Organisations-Profil" className="img-responsive img-inline-help"/>
* Scrollen sie an das Ende der Organisations-Profil-Seite und klicken Sie auf &laquo;+Profilfeld hinzufügen&raquo; um ihr eigenes Schlüssel-Wert-Paar hinzuzufügen.
    * Das Schlüssel-Wert-Paar, das sie eingeben, wird ihnen während der Metadaten-Konfiguration im Autofill-Assistenten zur Verfügung stehen.
<img src={require("/images/help/de/Tutorial_custom_fields.png").default} alt="" title="Ein eigenes Metadaten-Feld anlegen" className="img-responsive img-inline-help"/>

Um ihrem Nutzerprofil ein eigenes Metadaten-Feld hinzuzufügen, folgen Sie mit der Rolle &laquo;Datenmanager&raquo;, &laquo;Themenmanager&raquo; oder &laquo;Supernutzer&raquo; diesem Ablauf:

* Klicken sie auf das &laquo;Profil&raquo;-Symbol (Person-Symbol) oben rechts auf dem Bildschirm.
* Scrollen sie an das Ende der Nutzerprofil-Seite und klicken sie auf &laquo;+Profilbild hinzufügen&raquo; um ihr Schlüssel-Wert-Paar anzulegen.
    * Das Schlüssel-Wert-Paar, das sie eingeben, wird ihnen während der Metadaten-Konfiguration im Autofill-Assistenten zur Verfügung stehen.
    * Alle Nutzende einer Organisation können eigene Metadaten-Felder zu ihren Nutzerprofilen hinzufügen. Nutzende mit den Rollen Themen-Manager oder Supernutzer, die Metadaten konfigurieren, sollten mit Nutzenden mit der Rolle Daten-Manager abstimmen, welche eigenen Metadaten-Felder angelegt werdne. Themen, die so konfiguriert sind, dass sie auf die eigenen Metadaten-Felder eines Nutzerprofils zugreifen, werden den Wert des Nutzerprofils verwenden, von dem aus ein Datensatz angelegt wird.

*WICHTIG: Eigene Metadaten-Felder sind optional.*

**Schritt 2: Ein Schema und ein Thema für ihren Datensatz anlegen**

Der nächste Schritt im Metadaten-Konfigurations-Ablauf ist, ein Schema und ein Thema für ihren Datensatz anzulegen. Ihr Datensatz besteht aus den Daten, für die sie Metadaten erzeugen möchten. hale»connect bietet verschiedene Möglichkeiten, ein Schema anzulegen. Mehr Informationen zu diesen finden sie in den folgenden Abschnitten der Dokumentation:

  * [Ein neues Schema über die Auswahl eines Presets erstellen](https://www.wetransform.to/help/de/help-page-category-setup-haleconnect/help-page-subcategory-setup-haleconnect-schema-create/2018/01/28/schema-preset/)
  * [Ein neues Schema über das Hochladen von Schemadateien erstellen](https://www.wetransform.to/help/de/help-page-category-setup-haleconnect/help-page-subcategory-setup-haleconnect-schema-create/2018/01/28/schema-create-file/)
  * [Ein neues Schema über Angabe einer Web-Adresse eines Schemas erstellen](https://www.wetransform.to/help/de/help-page-category-setup-haleconnect/help-page-subcategory-setup-haleconnect-schema-create/2018/01/28/schema-create-external/)
  * [Ein neues Schema auf Basis eines bestehenden Schemas erstellen](https://www.wetransform.to/help/de/help-page-category-setup-haleconnect/help-page-subcategory-setup-haleconnect-schema-create/2018/01/28/schema-create-existing/)

In diesem Tutorial werden wir die Option nutzen, ein neues Schema über das Hochladen einer Schema-Datei zu erstellen. Ihre Quell-Daten sind in Shape-Format und hale»connect ermöglicht das Erstellen eines Schemas aus einer vorliegenden Shape-Datei. Hale»connect liest diese Shape-Datei automatisch und generiert ihr Schema.

Um auf Basis einer Shape-Datei ein neues Schema anzulegen, folgen sie in der Rolle &laquo;Themenmanager&raquo; oder &laquo;Superanwender&raquo; folgendem Ablauf:

*	Gehen sie auf &laquo;Schemas&raquo; im Hauptmenü.
*	Gehen sie auf &laquo;+ Neues Schema anlegen&raquo; am Ende der Schema-Liste.
*	Erstellungsmethode wählen. Wählen sie im ersten Schritt &laquo;Schemadateien hochladen&raquo;. Klicken sie auf &laquo;Weiter&raquo;.

*	Schema definieren. Definieren sie als nächstes das Schema, das sie nutzen wollen. Die Schemadefinition hängt von der Erstellungsmethode ab, die sie im vorherigen Schritt ausgewählt haben.

    *Klicken sie auf &laquo;Datei(en) auswählen&raquo; und navigieren sie zu den Shape-Dateien, die sich im Ordner mit den Daten zu diesem Tutorial befinden. Fügen sie die Shape-Dateie &laquo;WatercourseLink&raquo; hinzu. Sie können auch den Ordner, der die Shape-Dateien enthält, im zip-Format hochladen. Wenn sie fertig sind, klicken sie auf &laquo;Weiter&raquo;.<img src={require("/images/help/de/Tutorial_Upload_schema.png").default} alt="" title="Ein neues Schema anlegen" className="img-responsive img-inline-help"/>

    * Informationen ergänzen. Geben sie den Namen der Autorin oder des Autors, den Typ und die Version ihres Schemas an. Wenn sie fertig sind, klicken sie auf &laquo;Weiter&raquo;.

    * Anlegen bestätigen. Überprüfen sie in einem abschließenden Schritt ihr Schema. Sie haben die Option, ihrem Schema ein Thema hinzuzufügen oder ein solches für ihr Schema zu erstellen. Aktivieren sie den Schalter um das Anlegen eines Themas zu ermöglichen. Wenn sie fertig sind, klicken sie auf &laquo;Anlegen&raquo; um ihr Schema zu speichern und ein zugehöriges Thema anzulegen.

**Schritt 3: Metadaten in ihrem Thema konfigurieren**

Ein Thema ist ein wiederverwendbares Konfigurationsobjekt, das verwendet wird, um allgemeine Einstellungen für Datensatz-Metadaten, Dienste-Bereitstellung und Transformationen zu definieren. Ein Thema besteht aus mehreren Elementen:

* Ein Schema, das durch die Verbindung zu Objektarten definiert wird.
* Anzeige-Einstellungen für die Attribute und Objektarten des Schemas, wie beispielsweise Alias und Darstellung.
* Eine Metadaten-Konfiguration, die festlegt, welche Metadaten-Felder bereitgestellt werden müssen und Standardwerte sowie automatische Füll-Regeln für eine stärkere Automatisierung festlegt.
* Verbindungen zu Transformationsprojekten, die Format-Konvertierungen und Schema-Transformationen erlauben.
* Eine Konfiguration für einen automatischen Ablauf, die dafür sorgt, dass die Dienste-Bereitstellung und die Daten-Transformation durch bestimmte Ereignisse, wie die Aktualisierung eines Datensatzes ausgelöst werden können.

Das Metadaten-Editor-Werkzeug befindet sich im &laquo;Metadaten&raquo;-Bereich ihres Themas. In diesem Schritt nutzen wir den Metadaten-Editor um eine wiederverwendbare Metadaten-Konfiguration zu erstellen, die eigene Metadaten-Felder, Autofill-Regeln und Enumerationen verwendet. Die Metadaten-Konfiguration wird für alle Datensätze verwendet, die ihr Thema nutzen. Wenn sie Metadaten haben, die sie wiederverwenden wollen, finden sie Informationen dazu im [Metadatenkonfiguration bearbeiten](https://www.wetransform.to/help/de/help-page-category-setup-haleconnect/help-page-subcategory-setup-haleconnect-thememetadata/2015/02/10/theme-edit-metadata/)-Bereich unserer Hilfe.

Navigieren sie zunächst zu dem Thema, das sie während des Anlegen des Schemas in Schritt 2 angelegt haben.

* Gehen sie auf &laquo;Themen&raquo; im Hauptmenü.
* Geben sie den Namen ihres Themas in die Suchleiste ein. Wenn sie ein Thema während des Anlegens eines Schemas anlegen, erhält ihr Thema automatisch den gleichen Namen wie ihr Schema. Sie können auch das Aufklappmenü neben &laquo;Sortierung&raquo; nutzen. Wählen sie &laquo;Aktualität&raquo; um ihre zuletzt erstellten Themen anzeigen zu lassen.
* Wählen sie ihr Thema von der Liste der angezeigten Ressourcen aus.
* Klicken sie auf den Bereich namens &laquo;Metadaten&raquo;. <img src={require("/images/help/de/Tutorial_metadata.png").default} alt="" title="Metadaten" className="img-responsive img-inline-help"/>

Der &laquo;Metadaten&raquo;-Bereich enthält Konfigurations-Optionen und einen editierbaren JSON Text-Editor, der es Nutzenden mit den Rollen &laquo;Themenmanager&raquo; oder &laquo;Superanwender&raquo; ermöglicht, die Standard-Metadaten-Vorlage anzupassen. Die Standard-Metadaten-Vorlage ist eine Liste von Kategorie-Objekten, mit deren Hilfe valide ISO-, INSPIRE- und GDI-DE-Metadaten-Dateien erzeugt werden. Jedes Kategorie-Objekt in Verbindung mit den darin enthaltenen Feldern liefert die Informationen, die benötigt werden, um Metadaten-Attribute in den unterstützten Metadaten-Profilen zu füllen. Die Metadaten-Vorlage wird intern genutzt um von Nutzenden bereitgestellte Metadaten auf die Metadaten-Profile abzubilden. Das &laquo;comment&raquo;-Feld in jedem Kategorie-Objekt gibt das dafür relevante Metadaten-Profil an. Beispielsweise ```"comment": "ISO 3.2.1 #360"``` gibt an, dass das Objekt die Anforderung der ISO 19115 Geographic information – Metadata profile, [Abschnitt B.3.2.1 Eintrag #360](https://www.geoportal.de/SharedDocs/Downloads/DE/GDI-DE/Deutsche_Uebersetzung_der_ISO-Felder.html) erfüllt.

Werfen wir einen Blick auf die Liste von Feldern in einem Kategorie-Objekt, denn diese wird für die Metadaten-Konfiguration benötigt.

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

Es können nur die folgenden Werte in das ```name```-Feld eingegeben werden:

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


Die ```required```-, ```minOccurs```- und ```maxOccurs```-Felder geben die Kardinalität eines Metadaten-Wertes an und sollten nicht verändert werden. Die weiteren Felder beschreiben, wie Einträge in der Nutzeroberfläche aussehen und sich verhalten sollen, welcher Inhalt erlaubt ist und ob sie mit Standard-Werten oder abgeleiteten Werten befüllt werden sollen.

*	**label:** Die Kennzeichnung, die Nutzenden neben dem Eingabefeld angezeigt werden soll.
*	**description:** Ein längerer, erklärender Text zu den Feldern, der angezeigt wird, wenn man die Maus über das &laquo;label&raquo; bewegt.
*	**type:** Der primitive Datentyp dieses Feldes. Dieser kann string, object, array, integer und float sein.
*	**schema:** Das Schema oder Format des einzugebenden Wertes. Dieses kann email, enum, geojson, json, wkt und csv sein.
*	**defaultValue:** Ein festgeschriebener Standard-Wert, der dem Feld immer zugewiesen wird.
*	**autofillRule:** Ein dynamischer Standard-Wert, der dem Feld zugewiesen wird. Dieser Wert wird aus den aktuellen Umgebungsvariablen, wie beispielsweise der Benutzerin oder dem Benutzer, dem Organisations-Kontext, den Daten oder dem Thema berechnet. Wenn sie in eine Reihe mit einem ```autofillRule```-Eigenschaften-Schlüssel klicken, erscheint ein Assistent zur Auswahl eines Wertes in der operen rechten Ecke des Editors.
*	**editable:** Wird auf ```true``` gesetzt, wenn Nutzende mit der Rolle &laquo;Datenmanager&raquo; in der Lage sein sollen, den Wert in diesem Feld zu verändern.
*	**targets:** Ist eine Liste mit Abbildungs-Regeln zu externen Diensten wie beispielsweise Metadaten-Katalogen. Standardmäßig sollte dort zumindest ein ```bsp```-Ziel definiert werden. ```bsp``` ist die Angabe, die hale»connect für die Veröffentlichung der Dienste benötigt.

In diesem Tutorial werden wir uns auf die folgenden Felder konzentrieren, die alle von Nutzenden konfiguriert werden können, um die automatische Erstellung von Metadaten in hale»connect zu unterstützen:

* ```type```
* ```defaultValue```
* ```autofillRule```
* ```visibility```
* ```editable```
* ```enumValues```

Das erste Kategorie-Objekt im Metadaten-Editor enthält den Namen des Datensatzes: ```"name": "md-dataset.citation.title"```. Im diesem ersten Beispiel setzen wir das ```editable```-Feld auf ```false```. Platzieren sie ihren Mauszeiger neben dem ```editable```-feld und geben sie &laquo;false&raquo; ein. Diese Option hindert andere Nutzende in ihrer Organisation daran, den automatisch eingefüllten Wert zu editieren.

Das zweite Kategorie-Objekt enthält eine kutze Zusammenfassung des Datensatzes: ```"name": "md-dataset.identification.abstract"```. In diesem Beispiel setzen wir das ```visibility```-Feld auf ```false```. Platzieren sie ihren Mauszeuger neben dem ```visibility```-Feld und geben sie &laquo;false&raquo; ein. Diese Option bestimmt die Anzahl der Felder, die Nutzende während der Datensatz-Erstellung betrachten müssen.<img src={require("/images/help/de/Tutorial_editconfig.png").default} alt="" title="Konfigurations-Felder editieren" className="img-responsive img-inline-help"/>

Das dritte Kategorie-Objekt enhält ein Beispiel für eine Enumeration: ```"name": "md-dataset.identification.keyword_inspire"```. Enumerationen-Felder ermöglichen es ihnen, Aufklappmenüs in der Nutzeroberfläche zur Metadaten-Erzeugung zu erzeugen. Die Label-Wert-Paare definieren die Kennzeichnung, die in der Nutzeroberfläche angezeigt werden und die Abbildungs-Werte, die intern verwendet werden. Sie können die Kennzeichnungen innerhalb einer Enumeration editieren, um die Bezeichner in der Nutzeroberfläche in einer anderen Sprache anzeigen zu lassen. Die zugeordneten Werte können sie nicht editieren, da diese in einer internen Abbildung verwendet werden.<img src={require("/images/help/de/Tutorial_enum.png").default} alt="" title="Eine Enumeration anlegen" className="img-responsive img-inline-help"/>

Das vierte Kategorie-Objekt enthält einfache Schlüsselwörter: ```"name": "md-dataset.identification.keyword_simple"```. In diesem Beipsiel setzen wir das ```defaultValue```-Feld auf 'INSPIRE', was dazu führt, dass das Feld immer mit diesem Wert belegt wird. Platzieren sie ihren Mauszeiger neben dem ```defaultValue```-Feld und geben sie  &laquo;INSPIRE&raquo; ein. Das Feld bleibt editierbar, so dass Nutzende den Wert anpassen können, wenn nötig.

Im letzten Beispiel nutzen wir eigene Metadaten-Felder um Autofill-Regeln anzulegen. In diesem Beispiel arbeiten wir mit dem Kategorie-Objekt: ```"name": "md-dataset.contactForMetadata.positionName"```. Platzieren sie ihren Mauszeiger neben dem ```autofillRule:```-Feld. Der Autofill-Assistent erscheint in der oberen rechten Ecke des Editors. Klicken sie im Autofill-Assistenten auf &laquo;Organisation&raquo; und scrollen sie zu &laquo;Eigene Felder&raquo;. Klicken sie im Autofill-Assistenten auf &laquo;Eigene Felder&raquo; und klicken sie auf den Schlüssel-Wert, den sie in Schritt 1 des Tutorials festgesetzt haben. Die Metadaten werden nun automatisch mit dem Wert befüllt, den sie für ihr neu angeleges eigenes Feld angegeben haben.<img src={require("/images/help/de/Tutorial_autofillAssistant.png").default} alt="" title="Autofill-Assistent" className="img-responsive img-inline-help"/>

Wenn sie die Vorlage im Editor konfiguriert haben, klicken sie auf den &laquo;Speichern&raquo;-Knopf am Ende der Seite.

**Schritt 4: Datensatz und Metadaten veröffentlichen und validieren**

Im letzten Schritt legen wir einen Datensatz an und prüfen die Metadaten, die wir im Laufe des Tutorials konfiguriert haben. Unter Nutzung des von und konfigurierten Themas können wir in wenigen einfachen Schritten Daten hochladen und Metadaten anlegen.

* Gehen sie auf &laquo;Daten&raquo; im Hauptmenü.
* Gehen sie auf &laquo;Neuen Datensatz anlegen&raquo; am Ende der Datensatz-Liste.
* Wählen sie ihr Thema aus, um es mit dem Datensatz zu verbinden.
* Klicken sie &laquo;Datei(en) auswählen&raquo; und navigieren sie zu den Tutorial-Daten namens [Metadata_TutorialData.zip](https://wetransform.box.com/s/2mnyp9xtjbbk3b5tbc1thg0jmxthgd0e). Wenn sie mit Shape-Dateien arbeiten, empfehlen wir den Upload in Form einer .zip-Datei.
*	Geben sie ihrem Datensatz einen Namen. Dieser Name sollte es ihnen ermöglichen, den Datensatz schnell und sicher im System zu identifizieren.
*	Geben sie Metadaten für ihren Datensatz an. In diesem Schritt werden wir die Ergebnisse unserer Metadaten-Konfiguration sehen. Ihnen wird eine Liste mehrerer aufklappbarer Felder angezeigt, die sowohl optionale als auch erforderliche Metadaten-Elemente enthalten.
    * Klappen sie das erste Feld &laquo;Datensatz - Allgemeine Angaben&raquo; auf, um folgende Festsetzungen zu prüfen:
        * Das &laquo;Datensatz-Titel&raquo;-Feld ist nicht editierbar.
        * Das &laquo;Kurzbeschreibung Datensatz&raquo;-Feld ist nicht sichtbar.
        * Klicken sie in das Aufklappmenü des &laquo;INSPIRE-Thema&raquo;-Feldes, um die Werte der Enumeration zu sehen.
    * Klappen sie das Feld &laquo;Datensatz - Ansprechperson Metadaten&raquo; auf um folgende Festsetzung zu prüfen:
        * Das &laquo;Position&raquo;-Feld ist mit dem Wert ihres eigenen Metadaten-Feldes belegt.

*	In einem letzten Schritt können sie die Schritte des Veröffentlichungs-Ablaufes überprüfen, die sie für das Thema konfiguriert haben. Ihnen werden zwei Schalter angezeigt, mit denen sie Darstellungs- und Download-Dienste für ihren Datensatz anlegen können. Aktivieren sie die Schalter und klicken sie auf &laquo;Weiter&raquo;.

hale»connect beginnt sofort, ihre Metadaten zu testen und zu validieren.

* Klicken sie auf den &laquo;Datstellungs-Dienste&raquo;-Bereich.
* Das Testberichte-Feld stellt eine Liste von PDF-Dateien zur Verfügung, welche die Ergebnisse einer Reihe von Tests enthalten, die mit den veröffentlichten Metadaten und Diensten durchgeführt werden. Die Tests überprüfen die Konformität zu ISO, GDI-DE und INSPIRE. Mehr Informationen darüber finden sie im [Darstellungs-Dienste](https://www.wetransform.to/help/de/help-page-category-reference/help-page-subcategory-reference-data/2018/03/08/reference-data-view-services/)-Bereich unserer Hilfe.
* Klicken sie auf einen der aufgelisteten Testberichte um die Ergebnisse anzusehen.

Die Konfiguration von Metadaten hilft Nutzenden Metadaten schnell und effizient zu erzeugen, während das Fehlerpotential deutlich reduziert wird. hale»connect sammelt Informationen von verschiedenen Stellen der PLattform um den Metadaten-Generierungs-Prozess zu automatisieren und valide sowie konforme Datensatz- und Dienste-Metadaten zu produzieren. In diesem Tutorial haben wir Metadaten in einem Thema konfiguriert, dass von verschiedenen Nutzern mit allen möglichen Rollen so oft wir nötig wiederverwendet werden kann, wodurch die Belastung durch Vorgaben zu Metadaten deutlich vermindert werden kann.
