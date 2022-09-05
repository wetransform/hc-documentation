---
title: "Neuen Datensatz mit mehreren Ressourcen-Typen anlegen"
categories:
- "help-page-category-datasetworkflow"
- "help-page-subcategory-datasetworkflowcreatedataset"
layout: help-detail
language: de
---

## Unterstützte Formate ##

hale»connect unterstützt derzeit verschiedene Daten-Formate, die genutzt werden können, um Datensätze anzulegen. Die Größenbeschränkung für das Hochladen einzelner Dateien für den Datensatz ist 2 GB. Die Größenbeschränkung für Anhänge auf haleconnect.com ist 750 MiB. Ein Datensatz kann folgende Daten enthalten:

**Vektor-Daten**
  * Die unterstützten Vektor-Daten-Formaten sind \*.gml und \*.shp.
  * Es können mehrere \*.shp-Dateien hochgeladen werden, um einen Datensatz anzulegen.
  * Die Publikation von \*.shp-Dateien, deren erstes Objekt keine Geometrie hat, wird derzeit nicht unterstützt.
  * Es können mehrere \*.gml-Dateien hochgeladen werden, um einen Datensatz anzulegen.
    * INSPIRE, 3A, CityGML, XPlanung und ISYBAU werden vollständig unterstützt.
  * \*.gml-Dateien, die ein gml:GenericMetaData-Element, ein leeres gml:boundedBy-Element oder Arc-Geometrien enthalten, werden derzeit nicht unterstüzt.
  * GeoPackages werden als Quelldaten zur Verwendung in Online-Transformationsprojekten unterstützt.
      * URL-Link zu einem GeoPackage in einem Zip-Ordner wird derzeit unterstützt.
      * GeoPackage-Quelldesigns sind leer und enthalten keine Feature-Typen.

**Nicht-räumliche Daten**
  * Das unterstützte Daten-Format ist \*.xml.

**Raster-Daten**
  * Die unterstützten Formate sind \*.png, und \*.GeoTIFF.
  * Derzeit wird das Hochladen einer Raster-Daten-Ressource pro Datensatz unterstützt.
  * Das Veröffentlichen von Rasterdaten ohne Vektordaten wird nicht unterstützt. Für solche Fälle muss eine Dummy-Vektor-Datei erzeugt werden.
  * In den Darstellungs- und Download-Diensten wird ein separater Raster-Layer veröffentlicht.

**Anhänge**
  * Unterstützte Anhang-Datei-Formate sind \*.pdf, \*.png, \*.GeoTIFF und Texturen für 3D-Daten.
  * Anhänge mit Punkten im Dateinamen werden nicht unterstüzt.
  * Es gibt verschiedene Wege, Anhänge zu ihrem Datensatz hochzuladen und mit diesem in Verbindung zu bringen.
  * Anhänge, die während des Anlegens eines Datensatzes hochgeladen werden, werden automatisch zum &laquo;Anhang&raquo;-Fenster im &laquo;Dateien&raquo;-Bereich hinzugefügt.
  * Für die Anhang-Dateien, die auf hale»connect hochgeladen werden, gibt es öffentlich zugängliche Links. Die Links zu Anhang-Dateien können in ihren *Predefined Data*-Download-Dienst eingebunden werden. Die Links zu den Anhang-Dateien und externen URLs können auch im Feature Explorer-Werkzeug betrachtet werden.
  * Für Anhang-Dateien werden keine separaten Dienste-Layer erstellt.
  * Besuchen sie unsere Hilfe-Seite für [mehr Informationen zum Arbeiten mit Anhängen](../../references/data/2018-03-10-reference-data-files.md)

**Kombination der verschiedenen Daten-Formate**
  * Datensätze können sowohl \*.gml- als auch Raster- und Anhang-Ressourcen enthalten. In Darstellungs- und Download-Diensten werden Vektor- und Raster-Daten in separaten Layern veröffentlicht.
  * Das Hochladen von \*.shp-Dateien mit kombinierten Daten-Ressourcen wir derzeit nicht unterstützt.

## Erstellen sie einen Datensatz ##

Um einen neuen Datensatz mit verschiedenen Daten-Formaten anzulegen, folgen sie als &laquo;Daten-Manager&raquo; oder &laquo;Themen-Manager&raquo; folgendem Ablauf:

1. Gehen sie im Hauptmenü auf &laquo;Daten&raquo;.
2. Gehen sie auf &laquo;+ Neuen Datensatz anlegen&raquo; am Ende der Datensatz-Liste.
3. Wählen sie ein Thema aus, dem ihr Datensatz zugeordnet werden soll. Das Thema muss so konfiguriert sein, dass zusätzliche Layer aus Raster-Quellen erlaubt sind.
    * Sie können den Datensatz auch anlegen, ohne ihn einem Thema zuzuordnen. In diesem Fall können sie für diesen Datensatz jedoch keine Dienste veröffentlichen und keine Transformationsprojekte ausführen.
4. Wählen sie die Daten-Quellen. Es gibt verschiedene Wege, die Dateien hochzuladen, die zu dem Datensatz gehören:
    * Klicken sie auf &laquo;Datei(en) auswählen&raquo; und navigieren sie zu den gewünschten Dateien.
    * Klicken sie auf &laquo;URL(s) eingeben&raquo; und fügen sie die gewünschte URL oder WFS GetFeature-Anfrage hinzu. Fügen sie den API-Schlüssel in das Feld Autorisierung ein, wenn sie einen API-Schlüssel im Autorisierungsheader der HTTP-Anfrage zum Herunterladen von Daten über die API übergeben möchten.
    * Ziehen sie einen Datensatz auf &laquo;Datei(en) hierher ziehen&raquo;.

    <br/>
    Fügen sie eine \*.gml-Datei, eine Raster-Datei und so viele zugehörige Anhang-Dateien hinzu wie notwendig.

   <br/>
   Tipp: Wir empfehlen, die Dateien in eine zip-Datei zu komprimieren, um die Dauer des Hochladens zu reduzieren und sicherzugehen, dass keine Dateien abhandenkommen. Um eine \*.png-Datei hochzuladen, sollten sie alle individuellen Dateien (\*.png, \*.pgw, …) in einem zip-Archiv zusammenfassen. Auch für das Hochladen von XML-Dateien, wie beispielsweise ALKIS, ISYBAU oder GML, empfehlen wir diese in einem zip-Archiv zu komprimieren.

5.	Geben sie ihrem Datensatz einen Namen. Dieser Name sollte es ihnen ermöglichen, ihren Datensatz schnell und eindeutig im System zu identifizieren. Wenn die Metadaten-Konfiguration des zugehörigen Themas so eingestellt ist, dass dieser Name für die Veröffentlichung genutzt werden soll, wird der eingegebene Name auch für die Datensatz-Metadaten verwendet
6.	Geben sie Metadaten für ihren Datensatz an. Der Eingabe-Modus für Metadaten wird von dem Thema vorgeschrieben, dem ihr Datensatz zugeordnet ist.

    Wenn in dem Thema der Metadaten-Editor genutzt wird, geben sie verpflichtende und optionale Metadaten für ihren Datensatz oder ihre Dienste ein:
      * Metadaten-Kategorien werden mit einer roten Markierung dargestellt, in der die Anzahl der fehlenden, verpflichtenden Metadaten-Elemente angezeigt wird. Klicken sie auf das Pfeil-Symbol am Ende einer Metadaten-Kategorie um diese aufzuklappen.
      * Verpflichtende Metadaten-Felder werden mit roten Symbolen gekennzeichnet. Optionale Metadaten-Felder werden mit orangen Symbolen gekennzeichnet.
      * Metadaten-Kategorien werden mit einem grünen Haken dargestellt, wenn alle erforderlichen Metadaten angegeben wurden.
      * Klicken sie auf «Automatisch befüllen», wenn sie versehentlich vorausgefüllte Werte löschen oder überschreiben und sie möchten, dass die ursprünglichen Werte wieder abgerufen werden.
      * Klicken sie auf &laquo;Weiter&raquo;, um die Metadaten zu speichern.<img src={require("/images/help/de/create-dataset-metadata.png").default} alt="" title="Der Metadaten-Editor" className="img-responsive img-inline-help"/>

      <br/>
    Wenn das Thema die Option &laquo;Existierende Metadaten neu publizieren&raquo; nutzt:

      * Laden sie ihre bestehende Metadaten-Datei hoch.<img src={require("/images/help/de/create-dataset-metadata_2.png").default} alt="" title="Existierende Metadaten hochladen" className="img-responsive img-inline-help"/>

    Wenn das Thema die Option &laquo;Existierende Metadaten verlinken&raquo; nutzt:

      * Geben sie einen Link zu Ihrer Metadaten-Datei an.<img src={require("/images/help/de/create-dataset-metadata_3.png").default} alt="" title="Existierende Metadaten verlinken" className="img-responsive img-inline-help"/>
       <br/>
7. Der Schritt «Projektvariablen eingeben» wird angezeigt, wenn ihr Thema eine Transformationskonfiguration hat und sie ihrem Transformationsprojekt in hale»studio Projektvariablen hinzugefügt haben. hale»connect bietet Benutzenden die Möglichkeit, die Projektvariablen des Transformationsprojekts in diesem optionalen Schritt zu bearbeiten.

8.	Im letzten Schritt können sie die für das Thema konfigurierten Ausführungsregeln überprüfen. Die Ausführungsregeln sind eine Liste aller möglichen Schritte im Veröffentlichungsprozess.  Standardmäßig werden sie bis zu fünf Schalter sehen, um Darstellungs- und Download-Dienste für ihren Datensatz zu veröffentlichen, um ihren neuen Datensatz zu transformieren und um Darstellungs- und Download-Dienste für den transformierten Datensatz zu veröffentlichen. Wenn sie bereits wissen, dass sie den Datensatz vor seiner Veröffentlichung noch bearbeiten müssen, deaktivieren sie die Dienste-Veröffentlichung.

:::caution

Wenn sie den Browser oder den Tab schließen oder einen anderen Link öffnen, werden sie gefragt, ob der derzeit bearbeitete Datensatz gespeichert oder gelöscht werden soll. Wenn sie speichern auswählen, können sie den Datensatz zu einem späteren Zeitpunkt weiter bearbeiten.

:::