---
title: "Vorbereiten von ESRI-Shapefiles für die Nutzung in einer Online-Transformation"
categories:
- "help-page-category-tutorials"
- "help-page-subcategory-tutorials"
layout: help-detail
language: de

---

### **ESRI-Shapefile-Format**

ESRI Shapefile ist ein Speicherformat für Vektor-Geodaten, welches auf dem DataBaseFiles (DBF)-Format aufbaut. Ein Shapefile besteht aus mindestens drei Dateien mit gleichem Namen, aber unterschiedlichen Dateiendungen.
  * shp: enthält die Geometrie in Form einer Liste von Stützpunkten
  * shx: enthält einen Index der Geometrie um schnelle, index-basierte Suchen zu ermöglichen
  * dbf: dBase-Datei, die zur Speicherung von Attribut-Informationen dient

Zu einem Shapefile können weitere Dateien gehören - beispielsweise `.prj`-Dateien, welche Informationen zum Koordinatensystem für ArcGIS enthalten oder `.cpg`-Dateien, welche den verwendeten Zeichensatz spezifizieren. Shapefiles enthalten Vektor-Geodaten. Die meisten geographischen Informationssysteme, darunter beispielsweise ArcGIS von ESRI, speichern räumliche Daten im Vektor-Format. Andere übliche Datenformate sind beispielsweise Raster oder TIN.
Für mehr Informationen können sie [ESRI Shapefile Technical Description: An ESRI White Paper-July 1988](www.esri.com/library/whitepapers/pdfs/shapefile.pdf) lesen.

**ESRI prj-Dateien und WKT-Dateien**

Ein Shapefile enthält üblicherweise eine `.prj`-Datei, welche eine Well known text (WKT)-Zeichenfolge enthält, in der Angaben zum geographischen Referenzsystem enthalten sind. WKT ist eine Markup-Sprache zur Repräsentation von Vektorgeometrie-Objekten auf einer Karte. Das WKT-Format wurde ursprünglich durch das Open Geospatial Consortium (OGC) definiert und in dessen Simple Feature Access-Spezifikation beschrieben, zu der auch ESRI beigetragen hat. Die [aktuelle Version des WKT-Standards](https://www.opengeospatial.org/standards/wkt-crs) wurde am 13. August 2019 veröffentlicht.

Nicht alle `.prj`-Dateien enthalten die gleichen Parameter. Außerdem gibt es syntaktische Unterschiede zwischen ESRI-WKT-Dateien und OGC-WKT-Dateien. Beispiele für verschiedene WKT-Dateien finden sich auf der Webseite [EPSG.io](https://epsg.io/). Exemplarisch werden im folgenden verschiedene WKT-Dateien für EPSG:25832 aufgeführt:

***WKT-Beispiel in HTML***

  ```
  PROJCS["ETRS89 / UTM zone 32N",
    GEOGCS["ETRS89",
      DATUM["European_Terrestrial_Reference_System_1989",
          SPHEROID["GRS 1980",6378137,298.257222101,
              AUTHORITY["EPSG","7019"]],
          TOWGS84[0,0,0,0,0,0,0],
          AUTHORITY["EPSG","6258"]],
      PRIMEM["Greenwich",0,
          AUTHORITY["EPSG","8901"]],
      UNIT["degree",0.0174532925199433,
          AUTHORITY["EPSG","9122"]],
      AUTHORITY["EPSG","4258"]],
  PROJECTION["Transverse_Mercator"],
  PARAMETER["latitude_of_origin",0],
  PARAMETER["central_meridian",9],
  PARAMETER["scale_factor",0.9996],
  PARAMETER["false_easting",500000],
  PARAMETER["false_northing",0],
  UNIT["metre",1,
    AUTHORITY["EPSG","9001"]],
  AXIS["Easting",EAST],
  AXIS["Northing",NORTH],
  AUTHORITY["EPSG","25832"]]
  ```

***OGC-WKT-Beispiel***

  ```
  PROJCS["ETRS89 / UTM zone 32N",
    GEOGCS["ETRS89",
      DATUM["European_Terrestrial_Reference_System_1989",
        SPHEROID["GRS 1980",6378137,298.257222101,AUTHORITY["EPSG","7019"]],
	         TOWGS84[0,0,0,0,0,0,0],
	         AUTHORITY["EPSG","6258"]],
	       PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],
	       UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],
    AUTHORITY["EPSG","4258"]],
  PROJECTION["Transverse_Mercator"],
  PARAMETER["latitude_of_origin",0],
  PARAMETER["central_meridian",9],
  PARAMETER["scale_factor",0.9996],
  PARAMETER["false_easting",500000],
  PARAMETER["false_northing",0],
  UNIT["metre",1,AUTHORITY["EPSG","9001"]],
  AXIS["Easting",EAST],
  AXIS["Northing",NORTH],
  AUTHORITY["EPSG","25832"]]
  ```

***ESRI-WKT-Beispiel***

  ```
  PROJCS["ETRS89_UTM_zone_32N",
    GEOGCS["GCS_ETRS_1989",
      DATUM["D_ETRS_1989",
	       SPHEROID["GRS_1980",6378137,298.257222101]],
	      PRIMEM["Greenwich",0],
	      UNIT["Degree",0.017453292519943295]],
  PROJECTION["Transverse_Mercator"],
  PARAMETER["latitude_of_origin",0],
  PARAMETER["central_meridian",9],
  PARAMETER["scale_factor",0.9996],
  PARAMETER["false_easting",500000],
  PARAMETER["false_northing",0],
  UNIT["Meter",1]]
  ```

### **Datumstransformationen**

Datumstransformationen sind notwendig, wenn bei ihrer Reprojektion von einem in ein anderes Koordinatensystem eines der beiden ein geographisches Koordinatensystem ist. Datumstransformationen sollten stets mit Vorsicht vorgenommen werden, da sie in signifikante Datenverschiebungen um einen Meter oder sogar mehr resultieren können. Es gibt verschiedene Methoden um Datumstransformationen durchzuführen - eine davon ist das Bursa-Wolf-Modell.

Der WKT-Parameter `TOWGS84` wird genutzt, um eine Transformation vom horizontalen Datum in das WGS84-Datum anzunähern.
In der ursprünglichen WKT-Simple Features-Spezifikation wird `TOWGS84` nicht als gültiges Schlüsselwort definiert. ESRI unterstützt den `TOWGS84`-Parameter in WKT nicht. Anstatt eine vorgeschriebene Transformation zu verwenden, werden Nutzende von ESRI-Software oder QGIS wenn notwendig gebeten, eine geeignete Transformations-Methode zu wählen.

Die aktuelle WKT-Version hat keine Rückwärtskompatibilität zu `TOWGS84`. WKT-Beschreibungen geodätischer Daten, die zur OGC 01-009-Spezifikation erstellt werden, können von Implementierungen zur aktuellen WKT-Spezifikation nicht gelesen werden, wenn der optionale `TOWGS84`-Parameter enthalten ist.

### **Identifikation von Koordinatenreferenzsystemen in hale»connect**

hale»connect nutzt das open source Java GIS-Werkzeug GeoTools für die Prozessierung räumlicher Daten. GeoTools wiederum enthält eine Kopie der [EPSG-Registry](https://www.epsg-registry.org/). Wenn ein Shapefile auf die Plattform hochgeladen wird, versucht hale»connect unter Nutzung der GeoTools-Bibliothek die in der `.prj`-Datei enthaltene WKT-Definition einem räumlichen Bezugssystem aus der EPSG-Registry zuzuordnen. Wenn eine Übereinstimmung gefunden wird, werden die Daten anschließend unter Nutzung des passenden EPSG-CRS-Codes prozessiert.

Es kann vorkommen, dass GeoTools auf Grundlage der WKT-Informationen nicht das entsprechende räumliche Bezugssystem ermitteln kann. Um GeoTools bei der Bestimmung der korrekten Zuordnung zu unterstützen, können Nutzende der WKT-Datei als letzten Parameter einen `AUTHORITY`- Parameter hinzufügen. GeoTools verwendet dann den EPSG-Code aus dem `AUTHORITY`-Parameter für die Festlegung des zu verwendenden räumlichen Bezugssystems und verwendet dessen Definition aus der EPSG-Registry. Diese Definitionen enthalten auch die Bursa-Wolf-Parameter, die für eine Datumstransformation benötigt werden, aus der EPSG-Registry.

### **Manuell den AUTHORITY-Parameter zu einer ESRI-prj-Datei hinzufügen**

Sie können eine ESRI-`.prj`-Datei manuell bearbeiten, um den optionalen `AUTHORITY`-Parameter hinzuzufügen. Der Parameter muss der Datei als letzter Parameter unter Nutzung des folgenden Musters hinzugefügt werden: `AUTHORITY["EPSG","25832"]`. Der `AUTHORITY`-Parameter ist in der aktuellen WKT-Version zwar als veraltet gekennzeichnet, wird aber aus Gründen der Rückwärtskompatibilität weiterhin unterstützt.

In der aktuellen WKT-Version wurde `AUTHORITY` durch `ID` ersetzt. Dieser Parameter ist weniger eng definiert, als es `AUTHORITY` in den vorhergehenden Versionen war.

### **Achsentausch** ###

Viele Probleme mit vertauschten Achsen entstehen durch Abweichungen bei der Festlegung der Achsenreihenfolge in der prj-Datei einer Shapedatei. So ist beispielsweise bei WGS84 = EPSG:4326 die Achsenreihenfolge in der EPSG-Datenbank Breite (Northing) /Länge (Easting) definiert, während die Achsenreihenfolge im Shapefile Länge (Easting) /Breite (Northing) ist.

Das ist problematisch, wenn keine EPSG-Definition für das Koordinaten-Referenzsystem mit der Achsen-Reihenfolge, wie sie im Shapefile genutzt wird, existiert. Denn dann kann kein passender Code für den `AUTHORITY`-Parameter angegeben werden. In diesen Fällen ist es notwendig, den auf hale»connect bereitgestellten Schalter &laquo;Koordinatenreihenfolge tauschen&raquo; zu nutzen, um die Achsen-Reihenfolge zu tauschen, wenn das Shapefile publiziert wird.

Der einzige Weg, die Achsen-Reihenfolge richtig zu handhaben ist, die Achsen-Reihenfolge der Shapefile-Geometrien zu analysieren und zu prüfen, ob die Achsen-Reihenfolge mit derjenigen in der Koordinaten-Referenzsystem-Definition in der `.prj`-Datei übereinstimmt und entsprechend zu agieren. Also entweder einen `AUTHORITY`-Parameter zur `.prj`-Datei hinzuzufügen oder den &laquo;Koordinatenreihenfolge tauschen&raquo;-Schalter zu nutzen.