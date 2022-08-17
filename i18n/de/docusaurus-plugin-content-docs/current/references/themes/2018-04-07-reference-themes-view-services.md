---
title: "Darstellungs-Dienste"
categories:
- "help-page-category-reference"
- "help-page-subcategory-reference-themes"
layout: help-detail
language: de
sidebar_position: 3

---

Im &laquo;Darstellungs-Dienste&raquo;-Bereich werden diverse Konfigurationsoptionen für ihre veröffentlichten Darstellungs-Dienste angezeigt.

Sie können die &laquo;Dienstart&raquo; ihrer Darstellungs-Dienste festlegen. Derzeit werden &laquo;WMS (1.1.1)&raquo; und &laquo;WMS (1.3.0)&raquo; unterstützt. Ein Kachel-Cache wird immer generiert, auf diesen kann aber nicht zugegriffen werden. Klicken sie den &laquo;+&raquo;-Knopf um eine weitere Dienstart hinzuzufügen. Um eine Dienstart zu entfernen, klicken sie das rote &laquo;-&raquo;-Symbol, das rechts von dieser angezeigt wird.

Sie können &laquo;Räumliche Bezugssysteme&raquo; festlegen, die von ihren Darstellungs-Diensten unterstützt werden sollen. Bei der Nutzung ihres Dienstes kann zwischen den räumlichen Bezugssystemen gewählt werden, die sie festlegen. Klicken sie den &laquo;+&raquo;-Knopf um ein weiteres räumliches Bezugssystem hinzuzufügen. Um ein räumliches Bezugssystem zu entfernen, klicken sie das rote &laquo;-&raquo;-Symbol, das rechts von diesem angezeigt wird.

**Bemerkung: Um die Liste der wählbaren räumlichen Bezugssysteme zu erweitern, wenden sie sich an jemanden, der für ihre Organisation die Rolle &laquo;Administrator&raquo; innehat.**

Sie können &laquo;GetFeatureInfo&raquo; für ihren WMS mit Hilfe des Aufklappmenüs aktivieren oder deaktivieren. GetFeatureInfo ist eine optionale Funktion, die es bei der Nutzungs des WMS ermöglicht, thematische Anfragen zu den Inhalten des WMS zu stellen. GetFeautreInfo wird nur von Layern unterstützt, die für das Attribut &laquo;queryable&raquo; den Wert &laquo;1&raquo; (true) haben.

Für die Darstellung der Daten wird eine Standard-Visualisierung erstellt. Die Dienste enthalten derzeit alle Layer, für die ein Style definiert ist - unabhängig davon, ob entsprechende Objekte in den Daten enthalten sind. Auf der Plattform sind für die meisten INSPIRE-Layer Standard-Styles definiert. Daher werden diese Layer alle erzeugt, auch wenn sie leer sind. Wenn sie eine andere Darstellung ihrer Daten wünschen und verhindern möchten, dass alle Layer angelegt werden, laden sie eine &laquo;Styled Layer Descriptor (SLD)&raquo;-Datei hoch. Um diese ihrem Thema zuzuordnen, klicken sie auf &laquo;Datei(en) auswählen&raquo; und navigieren sie zu einer XML SLD-Datei. Bitte beachten sie, dass es derzeit nicht möglich ist, die für eine Reihenpublikation verwendete SLD auszutauschen, wenn diese einmal publiziert wurde.

Aktivieren sie den &laquo;Zusätzliche Ebenen aus Raster-Quellen erlauben&raquo;-Schalter um das Hochladen von Raster-Daten während des Anlegens eines Datensatzes zu ermöglichen. Das Aktivieren des Schalters ermöglicht es Nutzenden, Raster-Daten im PNG- oder GeoTIFF-Format während des Anlegens eines Datensatzes hochzuladen und zu veröffentlichen. Die Raster-Daten werden in einem separaten Raster-Layer veröffentlicht.