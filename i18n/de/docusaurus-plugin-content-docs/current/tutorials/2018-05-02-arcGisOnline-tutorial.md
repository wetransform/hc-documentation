---
title: "Verwenden von hale»connect-Ressourcen in ArcGIS Online"
categories:
- "help-page-category-tutorials"
- "help-page-subcategory-tutorials"
layout: help-detail
language: de

---

Sowohl Open-Source- als auch proprietäre Geoinformationssysteme (GIS) unterstützen derzeit nur in begrenztem Rahmen die Nutzung von komplexen GML-Daten. Für vertiefende Informationen zur Unterstützung von komplexen GML-Daten in GIS-Software, besuchen sie das [CanIUse INSPIRE github repository](https://github.com/INSPIRE-MIF/caniuse). Harmonisierte INSPIRE-Daten liegen als komplexe GML-Daten vor. In diesem Tutorial lernen sie, wie hale»connect WMS-Dienste in ArcGIS Online dargestellt werden können.

***Die Esri WFS-Implementierung in ArcGIS Online unterstützt nur OGC WFS auf dem Level von simple features-Definitionen.***

Dieses Tutorial verwendet:

* die aktuelle Versio von ArcGIS Online (April 2019). Sie benötigen ein gültiges Esri-Konto, um sich bei ArcGIS Online anzumelden. Ein solches Konto können sie auf der Esri-Homepage kostenlos anlegen.

### **Einen WMS darstellen**

Um ihren hale»connect WMS in ArcGIS Online darzustellen, benötigen sie die URL zum Capabilities-Dokument ihres Services. Sie können auf die Capabilites-Dokumente für WMS 1.1.1 und 1.3.0 direkt aus dem &laquo;Darstellungs-Dienste&raquo;-Bereich ihres Datensatzes zugreifen. Um eine URL in die Zwischenablage zu kopieren, klicken sie auf das <a className="btn btn-default" title="URL kopieren"><span className="glyphicon glyphicon-copy"></span></a>-Symbol rechts von der URL.

Melden sie sich bei ArcGIS Online an und navigieren sie zu &laquo;My Map&raquo;. Klicken sie auf den &laquo;Add&raquo;-Reiter oben links in der Anwendung.

<img src={require("/images/help/en/Tutorial_arcLogin.png").default} alt="" title="Einen WMS zu ArcGIS Online hinzufügen" className="img-responsive img-inline-help"/>

Wählen sie im &laquo;Layer&raquo;-Menü &laquo;Add layer from the Web&raquo; aus. Wählen sie im &laquo;Add layer from the Web&raquo;-Dialog &laquo;WMS-OGC-Web-Service&raquo; als &laquo;service type&raquo; aus dem Aufklappmenü und geben sie die URL ihres WMS-Capabilities-Dokumentes ein. Klicken sie auf &laquo;Add Layer&raquo;.

Ihr WMS-Layer sollte nun in der &laquo;Layer&raquo;-Ansicht auf der linken Seite erscheinen. Klicken sie mit der linken Maustaste auf die drei Punkte, die unter dem WMS-Namen erscheinen, um das &laquo;options&raquo;-Menü anzeigen zu lassen. Das Menü umfasst diverse Optionen, wie beispielsweise Zoom, Transparenz, Umbenennung und die Option, ihre OGC WMS-Abfrage-Parameter enger zu definieren.

<img src={require("/images/help/en/Tutorial_arcLayerOptions.png").default} alt="" title="WMS-Optionen in ArcGIS Online" className="img-responsive img-inline-help"/>

Klicken sie als nächstes auf den schwarzen Pfeil neben dem WMS-Namen. Ihr WMS-Layer sollte angezeigt werden. Klicken sie mit der linken Maustaste auf die drei Punkte, die unter dem Layernamen angezeigt werden, um Dialogfenster zu aktivieren.

<img src={require("/images/help/en/Tutorial_arcPopUp.png").default} alt="" title="Dialogfenster in ArcGIS Online" className="img-responsive img-inline-help"/>

Nachdem sie Dialogfenster für ihren Layer aktiviert haben, wird die Antwort auf GetFeatureInfo-Anfragen für jedes Objekt, auf das sie klicken, im Dialogfenster angezeigt. Wenn sie auf einen Bereich mit überlappenden Objekten klicken, werden die Ergebnisse für jedes Objekt aufgelistet. Mit hale»connect- Diensten haben sie die einzigartige Funktion, komplexe GML-Dateien über den hale»connect-FeatureExplorer zu erkunden. Klicken sie dazu im Dialogfensterin ArcGIS Online auf den &laquo;Details anzeigen&raquo;-Knopf des Objektes von Interesse.

<img src={require("/images/help/en/Tutorial_arcPopUpDialog.png").default} alt="" title="Dialogfenster in ArcGIS Online" className="img-responsive img-inline-help"/>

Der hale»connect-FeatureExplorer wird sich in einem neuen Tab ihres Internet-Browsers öffnen. Er ermöglicht es ihnen, durch die verschiedenen Ebenen verschachtelter, komplexer GML-Daten zu navigieren, um referenzierte Ressourcen, Objekte, Codelisten oder Attribute, an denen sie interessiert sind, näher zu untersuchen.

<img src={require("/images/help/en/Tutorial_arcFeatureExplorer.png").default} alt="" title="FeatureExplorer in ArcGIS Online" className="img-responsive img-inline-help"/>

### **Mehr erfahren**

Für mehr Informationen zu ArcGIS Online, besuchen sie [die Esri Homepage](https://www.arcgis.com/index.html).

ArcGIS Online führt eigene Seiten zu seinen Ressourcen. Für mehr Informationen zur Nutzung vpn OGC-Diensten in ArcGIS Online, besuchen sie [die ArcGIS Online OGC Hilfe-Seiten](https://doc.arcgis.com/en/arcgis-online/reference/ogc.htm).
