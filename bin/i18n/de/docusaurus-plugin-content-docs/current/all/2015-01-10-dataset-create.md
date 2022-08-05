---
title: "Datensatz anlegen"
categories:
- "help-page-category-datasetworkflow"
- "help-page-subcategory-datasetworkflowcreatedataset"
layout: help-detail
language: de
---

## Unterstützte Formate ##

hale»connect unterstützt unterschiedliche Raster- und Vektordatenformate sowie nicht-räumliche Datenformate (Encodings) für das Laden und Speichern von Datensätzen. 
Dabei liegt die Größenbeschränkung für das Hochladen einzelner Dateien je Datei bei 2 GB. 
Ein hale»connect Datensatz kann aus mehreren Einzeldateien zusammengesetzt werden.6

Die Größenbeschränkung für Anhänge auf haleconnect.com liegt bei 750 MB. 

### Die unterstützten Datenformate im Überblick ###

**Vektor-Datenformate**
  * hale»connect unterstützt \*.gml, \*gpkg und \*.shp.
  * Es können mehrere \*.shp-Dateien hochgeladen werden, um einen Datensatz anzulegen.
  * Die Publikation von \*.shp-Dateien, deren erstes Objekt keine Geometrie hat, wird derzeit nicht unterstützt.
  * Es können mehrere \*.gml-Dateien hochgeladen werden, um einen Datensatz anzulegen.
    * Die Standards INSPIRE, 3A, CityGML, XPlanung und ISYBAU werden vollständig unterstützt.
  * \*.gml-Dateien, die ein gml:GenericMetaData-Element, ein leeres gml:boundedBy-Element oder Arc-Geometrien enthalten, werden derzeit nicht unterstüzt.
  * Es können mehrere \*.gpkg-Dateien hochgeladen werden, um einen Datensatz anzulegen.
      * GeoPackages werden als Quell- und Zieldaten zur Verwendung in hale»connect Transformationsprojekten unterstützt.
      * \*.gpkg-Schemas können aus hale»studio als \*.json.hsd-Dateien zur Verwendung in hale»connect exportiert werden.
  * Die Publikation von 3D-Dateien wird unterstützt.

**Nicht-räumliche Daten**
  * Das unterstützte Daten-Format ist \*.xml.

**Raster-Datenformate**
  * Die unterstützten Formate sind \*.png, und \*.GeoTIFF.
  * Derzeit wird das Hochladen einer Rasterdatenquelle pro Datensatz unterstützt.
  * Das Veröffentlichen von Rasterdaten ohne Vektordaten wird nicht unterstützt. Für solche Fälle muss eine sogenannte "Dummy-Vektordatei" erzeugt werden.
  * In den Darstellungs- und Downloaddiensten wird ein separater Rasterlayer veröffentlicht.

**Anhänge**
  * Folgende Datenformate werden als Anhang unterstützt: \*.pdf, \*.png, \*.GeoTIFF und Texturen für 3D-Daten.
  * Sonderzeichen im Dateinamen sollten vermieden werden. Anhänge mit Punkten im Dateinamen werden nicht unterstüzt.
  * Es gibt verschiedene Wege, Anhänge zu ihrem Datensatz hochzuladen und mit diesem zu verknüpfen:
    * Anhänge, die während des Anlegens eines Datensatzes hochgeladen werden, werden automatisch zum &laquo;Anhang&raquo;-Fenster im &laquo;Dateien&raquo;-Bereich hinzugefügt.
    * Für die Anhang-Dateien, die auf hale»connect hochgeladen werden, gibt es öffentlich zugängliche Links. Die Links zu Anhang-Dateien können in ihren *Predefined Data*-Download-Dienst eingebunden werden. Die Links zu den Anhang-Dateien und externen URLs können auch im Feature Explorer-Werkzeug betrachtet werden.
  * Für Anhang-Dateien werden keine separaten Dienste-Layer erstellt.
  * Besuchen Sie unsere Hilfe-Seite für [mehr Informationen zum Arbeiten mit Anhängen](https://www.wetransform.to/help/de/help-page-category-reference/help-page-subcategory-reference-data/2018/03/10/reference-data-files/)

**Kombination der verschiedenen Datenformate**
  * Datensätze können sowohl \*.gml- als auch Raster- und Anhang-Ressourcen enthalten. In Darstellungs- und Download-Diensten werden Vektor- und Rasterdaten in separaten Layern veröffentlicht.
  * Das Hochladen von \*.shp-Dateien mit kombinierten Daten-Ressourcen wir derzeit nicht unterstützt.

## Erstellen Sie einen Datensatz ##

Um einen Datensatz anzulegen, melden Sie sich in der Rolle &laquo;Datenmanager&raquo; oder &laquo;Themenmanager&raquo; an und folgen sie diesem Ablauf:

1. Gehen Sie auf &laquo;Daten&raquo;.
2. Gehen Sie auf &laquo;Neuen Datensatz anlegen&raquo;.
3. Bestimmen Sie, welchem Thema der Datensatz zugeordnet werden soll.
    * Ein Datensatz kann auch ohne Themenzuordnung erstellt werden, kann dann aber nicht als Dienst publiziert werden.
    * Nutzende mit der Rolle &laquo;Superanwender&raquo;, die mehr als einer Organisation angehören, können auswählen, in welcher dieser Organisationen der Datensatz angelegt werden soll. Das Aufklappmenü mit den verfügbaren Organisationen ermöglicht es Nutzenden mit der Rolle &laquo;Superanwender&raquo Datensätze für Organisationen anzulegen, in denen sie derzeit nicht angemeldet sind.
4.	Laden Sie die zum Datensatz gehörigen Dateien hoch. Dafür gibt es mehrere Wege:
    * Klicken Sie auf &laquo;Datei(en) auswählen&raquo; und navigieren Sie zum gewünschten Datensatz.
    * Klicken Sie auf &laquo;URL(s) eingeben&raquo; und fügen Sie die gewünschte URL oder WFS GetFeature-Anfrage hinzu. Fügen Sie den API-Schlüssel in das Feld Autorisierung ein, wenn Sie einen API-Schlüssel im Autorisierungsheader der HTTP-Anfrage zum Herunterladen von Daten über die API übergeben möchten.
    * Ziehen Sie einen Datensatz auf &laquo;Datei(en) hierher ziehen&raquo;.
    
    Die Größenbeschränkung für das Hochladen einzelner Dateien für den Datensatz ist 2 GB.

    <br/>
    Tipp: Wir empfehlen, die Daten als Zip-Datei hochzuladen, um die Upload-Zeit zu reduzieren und um sicherzustellen, dass keine Datei verloren geht. Bei Shape-Dateien sollten sie alle einzelnen Dateien (\*.shp, \*.dbf, \*.prj, \*.shx, …) vor dem Hochladen in einem Zip-Archiv zusammenfassen. Bei XML-Dateien wie GML und ISYBAU ist es ebenfalls empfehlenswert, diese als Zip-Archiv hochzuladen.

	<br/>
	Um Daten aus einer Datenbank hochzuladen, klicken Sie &laquo;Mit Datenbank verbinden&raquo; und geben Sie die folgenden Informationen ein:
    * Datenbank-Typ (derzeit werden MS SQL, PostgreSQL und PostGIS unterstützt)
    * Host (:Port)
    * Datenbank (Geben sie den Namen der Datenbank an)
    * Benutzername
    * Passwort
    <br/>
    <img src="/images/help/de/upload_from_database.png" alt="" title="Daten aus einer Datenbank hochladen" class="img-responsive img-inline-help">


5.	Bestimmen Sie einen Namen für den Datensatz. Dieser Name soll es Ihnen ermöglichen, den Datensatz im System schnell und eindeutig zu identifizieren. Der Name wird aber nur bei entsprechender Metadatenkonfiguration veröffentlicht.
6.	Geben Sie nun zumindest die erforderlichen Metadaten ein.
	Wenn das zugehörige Thema &laquo;Metadaten-Editor verwenden&raquo; vorsieht:
	* Geben Sie erforderliche und zusätzliche Metadaten für ihren Datensatz oder ihren Dienst ein.
	* In den Überschriften der Metadaten-Kategorien sind rote Zahlen dargestellt, die die Anzahl der fehlenden erforderlichen Metadaten-Elemente angeben. Klicken Sie auf das Pfeilsymbol, um sich die entsprechende Metadaten-Kategorie anzeigen zu lassen.
	* Erforderliche Metadaten sind durch rote Symbole vor den Eingabefeldern markiert. Optionale Metadaten sind durch orange Symbole vor den Eingabefeldern markiert.
	* Metadaten-Kategorien erhalten einen grünen Haken, wenn sie alle erforderlichen Metadaten-Felder in diesen befüllt haben.
  * Klicken Sie auf «Automatisch befüllen», wenn Sie versehentlich vorausgefüllte Werte löschen oder überschreiben und Sie möchten, dass die ursprünglich konfigurierten Werte wieder abgerufen werden.
	* Klicken Sie &laquo;Weiter&raquo; um die Metadaten zu speichern. <img src="/images/help/de/create-dataset-metadata.png" alt="" title="Metadaten-Editor" class="img-responsive img-inline-help">

	<br/>
	Wenn das zugehörige Thema &laquo;Existierende Metadaten neu publizieren&raquo; vorsieht:

	* Laden Sie Ihre bestehende Metadaten-Datei hoch. <img src="/images/help/de/create-dataset-metadata_2.png" alt="" title="Metadaten-Editor" class="img-responsive img-inline-help">

	Wenn das zugehörige Thema &laquo;Existierende Metadaten verlinken&raquo; vorsieht:

	* Geben Sie einen Link zu Ihrer Metadaten-Datei an. <img src="/images/help/de/create-dataset-metadata_3.png" alt="" title="Metadaten-Editor" class="img-responsive img-inline-help">
       <br/>
7. Der Schritt «Projektvariablen eingeben» wird angezeigt, wenn Ihr Thema eine Transformationskonfiguration hat und Sie Ihrem Transformationsprojekt in hale»studio Projektvariablen hinzugefügt haben. hale»connect bietet Benutzenden die Möglichkeit, die Projektvariablen des Transformationsprojekts in diesem optionalen Schritt zu bearbeiten.	Speichern Sie die Metadaten und bestätigen Sie die Anlage des Datensatzes, indem Sie auf &laquo;Anlegen&raquo; klicken. Falls im Thema konfiguriert, können Sie nun mit Hilfe der Ausführungsregeln außerdem die Publikation von Diensten für die verwendeten Daten, die transformierten Daten sowie die Ausführung des Transformationsprojekts auslösen. Wenn der Datensatz noch nicht für die Veröffentlichung bereit ist, sollte die Publikation der Dienste deaktiviert werden.

<div class="alert alert-warning important-info">
  <table>
    <tr>
        <td style="width:3em">
          <div class="important-info-icon">
            <span class="glyphicon glyphicon-exclamation-sign" style="font-size:2em"></span>
          </div>
        </td>
        <td>Falls sie während des Anlegens eines Datensatzes den Browser schließen oder auf einen anderen Link klicken, haben Sie die Möglichkeit, den Datensatz zu speichern oder zu verwerfen. Wenn Sie ihn speichern, können Sie ihn später jederzeit weiterbearbeiten.</td>
    </tr>
  </table>
</div>
