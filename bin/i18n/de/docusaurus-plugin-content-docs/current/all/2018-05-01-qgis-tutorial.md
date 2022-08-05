---
title: "Verwenden von hale»connect Ressourcen in QGIS"
categories:
- "help-page-category-tutorials"
- "help-page-subcategory-tutorials"
layout: help-detail
language: de

---

Sowohl Open-Source- als auch proprietäre Geoinformationssysteme (GIS) unterstützen derzeit nur in begrenztem Rahmen die Nutzung von komplexen GML-Daten. Die Darstellung von Vektorgeometrien und zugehörigen Attribut-Daten wird von manchen GIS, wie beispielsweise QGIS, unterstützt. Klassische Operationen zur Geoverarbeitung sowie räumliche Analysen werden jedoch für komplexe GML-Daten nicht unterstützt. Für vertiefende Informationen zur Unterstützung von komplexen GML-Daten in GIS-Software, besuchen sie das [CanIUse INSPIRE github repository](https://github.com/INSPIRE-MIF/caniuse). Harmonisierte INSPIRE-Daten liegen als komplexe GML-Daten vor. In diesem Tutorial lernen sie, wie hale»connect Darstellungs- und Download-Dienste in QGIS geladen werden können.

Dieses Tutorial verwendet:

* die aktuelle Version 3.6.1 &laquo;Noosa&raquo; von QGIS, welche am 22.03.2019 veröffentlicht wurde
* die aktuelle Version 1.2.0 des Plugins &laquo;QGIS GML Application Schema Toolbox&raquo;

### **Einen WMS darstellen**

Um ihren hale»connect WMS in QGIS darzustellen, benötigen sie die URL zum Capabilities-Dokument ihres Services. Sie können auf die Capabilites-Dokumente für WMS 1.1.1 und 1.3.0 direkt aus dem &laquo;Darstellungs-Dienste&raquo;-Bereich ihres Datensatzes zugreifen. Um eine URL in die Zwischenablage zu kopieren, klicken sie auf das <a class="btn btn-default" title="URL kopieren"><span class="glyphicon glyphicon-copy"></span></a>-Symbol rechts von der URL.

Öffnen sie QGIS und klicken sie auf das Layer-Menü. Wählen sie im &laquo;Layer&raquo;-Menü &laquo;Layer hinzufügen&raquo; und dann &laquo;WMS/WMTS-Layer hinzufügen...&raquo;.

<img src="/images/help/en/Tutorial_qgisAddLayer.PNG" alt="" title="Einen WMS-Layer zu QGIS hinzufügen" class="img-responsive img-inline-help">

Klicken sie im erscheinenden Dialog &laquo;Datenquellenverwaltung&raquo; auf den &laquo;Neu&raquo;-Knopf. Daraufhin öffnet sich ein Dialog, in welchem sie eine neue WMS-Verbindung anlegen können. Geben sie ihrer neuen Verbindung einen Namen und geben sie die URL zu ihrem hale»connect-Dienst in das &laquo;URL&raquo;-Feld ein. Klicken sie &laquo;OK&raquo;.

<img src="/images/help/en/Tutorial_qgisAddWMS.png" alt="" title="Einen WMS-Layer zu QGIS hinzufügen" class="img-responsive center-block">

Ihr neuer Layer sollte nun oben im Dialog &laquo;Datenquellenverwaltung&raquo; angezeigt werden. Klicken sie auf den &laquo;Verbinden&raquo;-Knopf um auf den Dienst zuzugreifen. Sie können einen oder mehrere Layer auswählen, die ihrer Karte hinzugefügt werden sollen. Klicken sie auf den &laquo;Layerreihenfolge&raquo;-Reiter im Dialog &laquo;Datenquellenverwaltung&raquo; um die Darstellungsreihenfolge ihrer Layer festzulegen. Wenn sie fertig sind, klicken sie auf den &laquo;Hinzufügen&raquo;-Knopf in der unteren rechten Ecke des Dialogs &laquo;Datenquellenverwaltung&raquo; um die Daten zu ihrer Karte hinzuzufügen.

<img src="/images/help/en/Tutorial_qgisAddWMS1.png" alt="" title="Einen WMS-Layer zu QGIS hinzufügen" class="img-responsive img-inline-help">

Die von ihnen ausgewählten Layer sollten in der &laquo;Layer&raquo;-Ansicht auf der linken Seite erscheinen. Die von QGIS dargestellte Legende wird aus der GetLegendGraphic-Abfrage an den WMS abgeleitet. Über einen Rechtsklick auf den Layer können sie unter &laquo;Eigenschaften...&raquo; mehr Informationen zu dem zugrundeliegenden Dienst einsehen.

<img src="/images/help/en/Tutorial_qgisMap.PNG" alt="" title="WMS-Layer in QGIS" class="img-responsive img-inline-help">

### **Objekte in einem WMS abfragen**

Nachdem sie ihre Darstellungs-Dienst-Layer zur Karte hinzugefügt haben, können sie diese unter Nutzung des &laquo;Objekte abfragen&raquo;-Knopfes erkunden.

<img src="/images/help/en/Tutorial_qgisIdentify.png" alt="" title="Ein Objekt in QGIS abfragen" class="img-responsive center-block">

Klicken sie auf den &laquo;Objekte abfragen&raquo;-Knopf. In einer Standard-QGIS-Installation befindet sich dieser in der obersten Werkzeugleiste. Er ist mit einem &laquo;info&raquo;-Symbol und einem weißen Pfeil gekennzeichnet. Klicken sie zunächst auf das &laquo;Objekte abfragen&raquo;-Symbol. Klicken sie anschließend in der &laquo;Layer&raquo;-Ansicht auf der linken Seite auf den Layer, dessen Daten sie erkunden möchten. Klicken sie dann auf ein Objekt in der Karte. Das Abfrageergebnis, das die Antwort des Dienstes auf eine GetFeatureInfo-Abfrage enthält, erscheint auf der rechten Seite. Wenn sie auf einen Bereich mit überlappenden Objekten klicken, werden die Ergebnisse für jedes Objekt aufgelistet. Mit hale»connect- Diensten haben sie die einzigartige Funktion, komplexe GML-Dateien über den hale»connect-FeatureExplorer zu erkunden. Klicken sie dazu im Dialog mit den Abfrageerebnissen für das Objekt von Interesse auf den &laquo;Details anzeigen&raquo;-Knopf. Der hale»connect-FeatureExplorer wird sich in einem neuen Dialog in QGIS öffnen. Er ermöglicht es ihnen, durch die verschiedenen Ebenen verschachtelter, komplexer GML-Daten zu navigieren, um referenzierte Ressourcen, Objekte, Codelisten oder Attribute, an denen sie interessiert sind, näher zu untersuchen.

<img src="/images/help/en/Tutorial_qgisFeatureExplorer.png" alt="" title="FeatureExplorer" class="img-responsive img-inline-help">

### **Einen WFS darstellen**

Um einen WFS, der auf komplexen GML-Dateien basiert, in QGIS darzustellen, müssen sie zunächst das Plugin &laquo;QGIS GML Application Schema Toolbox&raquo; installieren.

**Das GML Application Schema Toolbox-Plugin installieren**

Öffnen sie QGIS und klicken sie auf das &laquo;Erweiterungen&raquo;-Menü. Wählen sie im &laquo;Erweiterungen&raquo;-Menü &laquo;Erweiterungen verwalten und installieren...&raquo; aus. Der &laquo;Erweiterungen&raquo;-Dialog öffnet sich.

<img src="/images/help/en/Tutorial_qgisPlugins.png" alt="" title="QGIS Erweiterungen Dialog" class="img-responsive img-inline-help">

Geben sie &laquo;GML Application Schema Toolbox&raquo; in die Suchleiste ein. Wählen sie das Plugin aus und klicken sie auf &laquo;Erweiterung installieren&raquo; in der unteren rechten Ecke. Das QGIS-Plugin &laquo;GML Application Schema Toolbox&raquo; wird installiert.

Um auf das Plugin zuzugreifen, klicken sie auf das &laquo;Erweiterungen&raquo;-Menü in QGIS. Eine Option für den Zugriff auf das &laquo;QGIS GML Application Schema Toolbox&raquo; wurde dem &laquo;Erweiterungen&raquo;-Aufklappmenü hinzugefügt.

**Das GML Application Schema Toolbox-Plugin nutzen**

Um ihren hale»connect WFS in QGIS darstellen zu können, benötigen sie eine URL zu ihrem Download-Dienst. Sie können auf diese URL direkt aus dem &laquo;Download-Dienste&raquo;-Bereich ihres Datensatzes zugreifen. Um die URL in die Zwischenablage zu kopieren, klicken sie auf das <a class="btn btn-default" title="URL kopieren"><span class="glyphicon glyphicon-copy"></span></a>-Symbol rechts von der URL.

Öffnen sie QGIS und klicken sie auf das &laquo;Erweiterungen&raquo;-Menü. Wählen sie im &laquo;Erweiterungen&raquo;-Menü &laquo;QGIS GML Application Schema Toolbox&raquo; und dann &laquo;Load (wizard)&raquo;.

<img src="/images/help/en/Tutorial_qgisAppSchema.png" alt="" title="QGIS GML Application Schema Toolbox" class="img-responsive img-inline-help">

Wählen sie im Load wizard &laquo;WFS&raquo; aus und klicken sie auf &laquo;Weiter&raquo;.

<img src="/images/help/en/Tutorial_qgisLoad.png" alt="" title="QGIS GML Application Schema Toolbox" class="img-responsive center-block">

Klicken sie im &laquo;WFS Otions&raquo;-Menü auf den &laquo;New&raquo;-Knopf. Es öffnet sich ein Dialog, in welchem sie eine neue WFS-Verbindung hinzufügen können. Geben sie ihrer neuen Verbindung einen Namen und geben sie die URL zu ihrem hale»connect-Dienst in das &laquo;URL&raquo;-Feld ein. Klicken sie auf &laquo;OK&raquo;.

<img src="/images/help/en/Tutorial_qgisAddWFS.png" alt="" title="Einen WFS-Layer zu QGIS hinzufügen" class="img-responsive center-block">

Ihr neuer Layer sollte am oberen Ende des &laquo;WFS Options&raquo;-Menü erscheinen. Klicken sie auf den &laquo;Connect&raquo;-Knopf, um auf den Dienst zuzugreifen. Sie können eine oder mehrere Objektarten auswählen, die ihrer Karte hinzugefügt werden sollen. Sie können die Anzahl der abgefragten Objekte beschränken, indem sie die &laquo;Limit to&raquo;-Option anwählen. Wenn sie fertig sind, klicken sie auf den &laquo;Weiter&raquo;-Knopf. Wählen sie &laquo;Load in XML mode&raquo; und klicken sie auf den &laquo;Weiter&raquo;-Knopf.

<img src="/images/help/en/Tutorial_qgisMode.png" alt="" title="Lade-Optionen" class="img-responsive center-block">

Aktivieren sie im &laquo;XML options&raquo;-Menü &laquo;Swap X/Y axis&raquo;. Das Standard-Koordinatenreferenzsystem von hale»connect-Diensten ist EPSG:4326. hale»connect nutzt dabei die Definition der EPSG-Datenbank für EPSG:4326 (WGS 84), während QGIS die Proj4-Definition für EPSG:4326 (WGS 84) nutzt, wodurch der Tausch der Achsen notwendig wird. Sie können das verwendete Koordinatenreferenzsystem im Reiter &laquo;Quelle&raquo; der Layer-Eigenschaften ändern, nachdem sie den WFS geladen haben. Klicken sie auf den &laquo;Abschließen&raquo;-Knopf in der unteren rechten Ecke des Load Wizard-Dialoges, um die Daten ihrer Karte hinzuzufügen.

<img src="/images/help/en/Tutorial_qgisSwapAxis.png" alt="" title="Tauschen der X/Y-Achsen" class="img-responsive center-block">

Die Layer, die sie auswählen, sollten in der &laquo;Layer&raquo;-Ansicht auf der linken Seite erscheinen. Über einen Rechtsklick auf den Layer können sie unter &laquo;Eigenschaften...&raquo; mehr Informationen zu dem zugrundeliegenden Dienst einsehen.

### **Objekte in einem WFS abfragen**

Nachdem sie ihre Download Service-Layer zur Karte hinzugefügt haben, können sie diese unter Nutzung des &laquo;Objekte abfragen&raquo;-Knopfes erkunden.

<img src="/images/help/en/Tutorial_qgisIdentify.png" alt="" title="Ein Objekt in QGIS abfragen" class="img-responsive center-block">

Klicken sie auf den &laquo;Objekte abfragen&raquo;-Knopf. In einer Standard-QGIS-Installation befindet sich dieser in der obersten Werkzeugleiste. Er ist mit einem &laquo;info&raquo;-Symbol und einem weißen Pfeil gekennzeichnet. Klicken sie zunächst auf das &laquo;Objekte abfragen&raquo;-Symbol. Klicken sie anschließend in der &laquo;Layer&raquo;-Ansicht auf der linken Seite auf den Layer, dessen Daten sie erkunden möchten. Klicken sie dann auf ein Objekt in der Karte. Das Abfrageergebnis, das die Antwort des Dienstes auf eine GetFeatureInfo-Abfrage enthält, erscheint auf der rechten Seite. Klicken sie auf das &laquo;Objektformular anzeigen&raquo;-Symbol, um die Attribute der Objektart, an der sie interessiert sind, einsehen zu können..

<img src="/images/help/en/Tutorial_qgisViewFeatureForm.png" alt="" title="Ein Objekt in QGIS abfragen" class="img-responsive center-block">

Es öffnet sich ein neuer Dialog in QGIS, der es ihnen ermöglicht durch die verschiedenen Ebenen verschachtelter, komplexer GML-Daten zu navigieren, um referenzierte Ressourcen, Objekte, Codelisten oder Attribute, an denen sie interessiert sind, näher zu untersuchen.

### **Mehr erfahren**

QGIS führt eine eigene Dokumentation. Für mehr Information zur Nutzung von OGC-Diensten in QGIS, besuchen sie folgende Seite: [Working with OGC Data](https://docs.qgis.org/3.4/en/docs/user_manual/working_with_ogc/ogc_client_support.html#wms-wmts-client)
