---
title: "Neue Datensatz-Reihe anlegen"
categories:
- "help-page-category-datasetworkflow"
- "help-page-subcategory-datasetworkflowcreatedatasetseries"
layout: help-detail
language: de
---


Eine Datensatz-Reihe ist eine Sammlung von Datensätzen, denen dieselbe Spezifikation zugrunde liegt [ISO 19115]. Alle Dateien innerhalb einer Datensatz-Reihe nutzen das gleiche Schema und das gleiche räumliche Bezugssystem. Es ist auch möglich, unter Nutzung von Transformationsprojekten abgeleitete Datensatz-Reihen zu erzeugen. Eine Datensatz-Reihe hat ihre eigenen INSPIRE-, ISO- oder nationalen Metadaten.

hale»connect unterstützt das Anlegen von Datensatz-Reihen und ermöglicht es Nutzenden, mit Hilfe des Massen-Uploads mehrere Datensätze gleichzeitig hochzuladen.

*Die Unterstützung von Datensatz-Reihen kann für jede Organisation einzeln aktiviert werden. Bitte kontaktieren sie uns für mehr Informationen zu Datensatz-Reihen unter info@wetransform.to.*

Um eine Datensatz-Reihe anzulegen, können verschiedene Daten-Formate genutzt werden. Eine Datensatz-Reihe kann die folgenden Formate enthalten:

### Vektordaten ###
  * Die unterstützten Vektordaten-Formate sind \*.gml und \*.shp.
  * Für das Anlegen eines Datensatzes können mehrere \*.shp-Dateien hochgeladen werden.
  * Das Publizieren von Reihen mit \*.shp-Dateien wird derzeit nicht unterstützt. Solche Reihen können genutzt werden, um Daten in \*.gml-Reihen zu transformieren, die publiziert werden können.
  * Derzeit wird das Hochladen einer \*.gml-Datei pro Datensatz unterstützt.
    * INSPIRE, 3A, CityGML, XPlanung und ISYBAU werden vollumfänglich unterstützt.
  * \*.gml-Dateien, die ein gml:GenericMetaData-Element, ein leeres gml:boundedBy-Element oder Arc-Geometrien enthalten, werden derzeit nicht unterstüzt.

### Nicht-raumbezogene Daten ###
  * Als Datenformat wird \*.xml unterstützt.

### Rasterdaten ###
  * Die unterstützten Rasterdaten-Formate sind \*.png, und \*.GeoTIFF.
  * Derzeit wird das Hochladen einer Rasterdaten-Quelle pro Datensatz unterstützt.
  * Das Veröffentlichen von Rasterdaten ohne Vektordaten wird nicht unterstützt. Für solche Fälle muss eine Dummy-Vektor-Datei erzeugt werden.
  * In den Darstellungs- und Download-Diensten wird ein separater Raster-Layer veröffentlicht.

### Anhänge ###
  * Die unterstützten Daten-Formate für Anhänge sind \*.pdf, \*.png, \*.GeoTIFF und Texturen für 3D-Daten.
  * Anhänge mit Punkten im Dateinamen werden nicht unterstüzt.
  * Es gibt verschiedene Wege, Anhänge hochzuladen und ihrem Datensatz zuzuordnen.
  * Anhänge, die während des Anlegens eines Datensatzes hochgeladen werden, werden automatisch dem Anhang-Bereich des entsprechenden Datensatzes hinzugefügt.
  * Für Anhang-Dateien, die auf hale»connect hochgeladen wurden, gibt es einen frei abrufbaren Link, der auf die entsprechende Datei weist. Diese Links zu Anhang-Dateien können in ihre Download-Dienste vom Typ *Predefined Dataset* eingebunden werden. Links zu Anhang-Dateien und externen URLs werden auch im Feature Explorer-Werkzeug angezeigt.
  * Es werden keine separaten Service-Layer für Anhang-Dateien erzeugt.
  * Besuchen sie unsere Hilfe für [mehr Informationen zum Umgang mit Anhängen](https://www.wetransform.to/help/de/help-page-category-reference/help-page-subcategory-reference-data/2018/03/10/reference-data-files/)

### Kombination von Daten-Quellen ###
  * Datensätze können \*.gml-, Raster- und Anhang-Quellen enthalten. In Darstellungs- und Download-Diensten werden separate Layer für Vektor- und Raster-Daten veröffentlicht.
  * Derzeit wird für \*.shp-Dateien das kombinierte Hochladen mit anderen Daten-Quellen nicht unterstützt.

### **Eine neue Datensatz-Reihe anlegen** ###

Folgen sie mit der Rolle &laquo;Themen-Manager&raquo; oder &laquo;Superanwender&raquo; diesem Arbeitsablauf:

1. Legen Sie ein auf ihren Quelldaten basierendes Schema an und aktivieren sie den Schalter für das Anlegen eines Themas.
2. Navigieren sie zu ihrem neu angelegten Thema und gehen sie auf den &laquo;Datensatz-Reihe&raquo;-Bereich.
3. Aktivieren sie im &laquo;Datensatz-Reihe&raquo;-Bereich ihres Themas den Schalter *Publiziere aggregierte Dienste für alle Datensätze mit diesem Thema*.
4. Stellen sie sicher, dass im &laquo;Download-Dienste&raquo;-Bereich ihres Themas der WFS aktiviert ist. Es ist derzeit nicht möglich, Reihen zu veröffentlichen, für die kein WFS konfiguriert ist.
5. Wenn sie vorhaben, Daten zu ihrer Datensatz-Reihe über Massen-Upload hochzuladen, gehen sie in den &laquo;Metadaten&raquo;-Bereich ihres Themas und fügen sie unter Nutzung des Autofill-Assistenten ein Muster für den Datensatz-Namen hinzu, um ihre Datensätze mit vor-konfigurierten Namen zu versehen. Dieser Schritt ist optional, wird für die Nutzung des Massen-Uploads aber empfohlen, wenn die Benennung der Datensätze einem bestimmten Muster folgen soll.

Sobald das Thema entsprechend konfiguriert ist, können Nutzende, die ihrer Organisation oder einer Unter-Organisation ihrer Organisation angehören, Datensatz-Reihen anlegen und veröffentlichen.

1. Gehen sie auf &laquo;Daten&raquo;.
2. Klicken sie auf &laquo;+ Neuen Datensatz anlegen&raquo; am Ende der Datensatz-Liste.
3. Wählen sie für ihren Datensatz ein Thema aus, für welches das Anlegen von Datensatz-Reihen aktiviert ist. Die Option, Daten per Massen-Upload hochzuladen erscheint, sobald ein solches Thema ausgewählt ist.
4. Datensatz-Reihen können einen einzelnen oder beliebig viele Datensätze enthalten. Datensatz-Reihen werden automatisch gemäß des folgenden Musters benannt: &laquo;[Organisation des/der Nutzenden] ([Themen-Name])&raquo;.

    **Datensatz-Reihen mit einem einzelnen Datensatz:**  
      * Wählen sie die Daten-Quellen für ihren einzelnen Datensatz aus. Es gibt verschiedene Wege, die zu einem Datensatz gehörigen Dateien hochzuladen:
        *	Klicken sie auf &laquo;Datei(en) auswählen&raquo; und navigieren sie zum gewünschten Datensatz.
        * Klicken sie auf &laquo;URL(s) eingeben&raquo; und navigieren sie zur gewünschten URL oder WFS.
        * Ziehen sie einen Datensatz auf &laquo;Datei(en) hierher ziehen&raquo;.

      * Benennen sie ihren Datensatz und geben sie alle erforderlichen Metadaten-Elemente ein. Die automatischen Metadaten-Einträge werden von den Metadaten-Konfigurationen in dem Thema gesteuert, zu dem der Datensatz gehört.

      * Wenn eine Datensatz-Reihe über das Hochladen einzelner Dateien angelegt wird, werden die Datensatz-Reihe, der zu der Datensatz-Reihe gehörige Datensatz, die Metadaten der Datensatz-Reihe und die Metadaten der zu des zu der Datensatz-Reihe gehörenden Datensatzes angelegt. Aktivieren sie im letzten Schritt zum Anlegen des Datensatzes den *Dienste anlegen*-Schalter um Dienste zu veröffentlichen. Navigieren sie alternativ zu dem in ihrer Datensatz-Reihe enthaltenen Datensatz um die Dienste dieses Datensatzes zu veröffentlichen.

      * Ausführungsregeln werden im letzten Schritt des Workflows angezeigt, wenn ihr Thema eine Transformationskonfiguration enthält. Sie können den Schalter aktivieren, um die Transformation auszuführen und Dienste für ein reihenfähiges Zielthema zu erstellen. 



    **Datensatz-Reihen mit Massen-Upload:**
      * Aktivieren sie den Schalter für die Nutzung des Massen-Uploads. Für einen solchen Upload wird nur die folgende Datenhaltung unterstützt: Es muss eine zip-Datei hochgeladen werden, welche die Datensätze als zip-Dateien enthält.<img src={require("/images/help/de/batch_upload.png").default} alt="batch upload" title="Datensatz-Reihen mit Massen-Upload" class="img-responsive img-inline-help"/>

      * Die Schritte zur Angabe des Datensatz-Namens und von Metadaten sind beim Anlegen von Datensätzen über Massen-Upload nicht verfügbar. Wir empfehlen, in ihrem Thema eine [Autofill-Regel für den Datensatz-Namen](https://www.wetransform.to/help/de/help-page-category-setup-haleconnect/help-page-subcategory-setup-haleconnect-thememetadata/2015/02/10/theme-edit-metadata/) zu konfigurieren, um Datensätze, die zu einer Datensatz-Reihe gehören, automatisch zu benennen. Die Metadaten können sie nach dem Anlegen der Datensatz-Reihe für jeden enthaltenen Datensatz bearbeiten.

      * Derzeit wird keine Massen-Publikation von Diensten für Datensatz-Reihen, die über Massen-Upload erstellt werden, unterstützt. Wenn eine Datensatz-Reihe über Massen-Upload erzeugt wird, werden die Datensatz-Reihe, die zu der Datensatz-Reihe gehörigen Datensätze, die Metadaten der Datensatz-Reihe und die Metadaten der zur Datensatz-Reihe gehörigen Datensätze angelegt. Sie können nach dem Anlegen zu den einzelnen Ressourcen navigieren, um Dienste für diese zu veröffentlichen.

      * Im letzten Schritt beim Anlegen von Datensatz-Reihen über Massen-Upload wird eine Liste der Datensätze angezeigt, die der Datensatz-Reihe hinzugefügt wurden.

 5. Datensatz-Reihen können in der Datensatz-Ressourcen-Liste eingesehen werden. Datensatz-Reihen werden mit der Beschriftung *Reihe* gekennzeichnet. Klicken sie auf den Pfeil neben der *Reihe*-Kennzeichnung um die Anzeige der Datensatz-Reihe zu erweitern und die verschiedenen Datensätze einzusehen, die zu der Datensatz-Reihe gehören. Besuchen sie die Seite [Datensätze in der Ressourcen-Liste](https://www.wetransform.to/help/de/help-page-category-datasetworkflow/help-page-subcategory-datasetworkflowcreatedataset/2015/01/08/viewing-resource-list/) der Dokumentation, um mehr Informationen zum Arbeiten mit der Ressourcen-Liste und das Optimieren der Anzeige nach ihren Bedürfnissen zu erhalten.

6. Klicken sie auf die Datensatz-Reihe um zu der entsprechenden Ressource zu navigieren. Datensatz-Reihen werden ähnlich gehandhabt wie einzelne Datensätze. Der &laquo;Übersicht&raquo;-Bereich einer Datensatz-Reihe stellt einen Überblick über die Ressource dar und enthält beispielsweise Eigentums-Informationen und ein Status-Feld mit Informationen zum Status der Metadaten und der Dienste zu der Datensatz-Reihe. Nutzende können Reihen-Metadaten im &laquo;Metadaten&raquo;-Bereich sowie Reihen-Dienste im &laquo;Darstellungs-Dienste&raquo;- und &laquo;Download-Dienste&raquo;-Bereich bearbeiten. Der &laquo;Datensatz-Reihe&raquo;-Bereich enthält eine Liste aller Datensätze, die zu der Datensatz-Reihe gehören. Jeder Datensatz, der zu einem Thema angelegt wird, für welches das Anlegen von Datensatz-Reihen aktiviert ist, wird zu derselben Datensatz-Reihe hinzugefügt.

7. Um eine Datensatz-Reihe zu löschen, navigieren sie zu dieser und klicken sie &laquo;Löschen&raquo;. Die Datensatz-Reihe und alle darin enthaltenen Datensätze werden gelöscht.
