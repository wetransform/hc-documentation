---
title: "Fragen und Antworten für hale»studio"
categories:
- "help-page-category-faq"
- "help-page-subcategory-faq"
layout: help-detail
language: de
---

<h2>Wie werden Geometrien korrekt abgebildet?</h2>

Abhängig vom Typ der Geometrie gibt es verschiedene Wege, Geometrien in hale»studio korrekt abzubilden.

**Quelldaten enthalten JTS (Java Topology Suite)-Geometrien (beispielsweise bei Shapefiles)**

- Es wird ein Wert in der Eigenschaft, die mit dem Geometrie-Symbol gekennzeichnet ist, angezeigt. 
Dieser dient jedoch lediglich der internen Repräsentation (er wäre in einer exportierten xml-Datei nicht vorhanden).
- JTS-Geometrien werden in hale»studio für alle geometriebezogenen Funktionen genutzt. Wenn es in den Quelldaten 
ein Geometrie-Objekt (gekennzeichnet mit dem Geometrie-Symbol) gibt, wird empfohlen, es für Mappings zu nutzen.
- Wenn eine JTS-Geometrie aus hale»studio exportiert wird, werden alle Informationen auf niedrigeren Ebenen der Eigenschaft ignoriert.

**Quelldaten enthalten Geometrien in xml-Struktur**
- Die Geometrie wird aus der xml-Datei geladen wie dort repräsentiert.
- Hale»studio versucht, eine JTS-Geometrie aus den Angaben abzuleiten.

**Komplexes Geometrie-Attribut im Quell-Schema (repräsentiert durch ein Symbol mit drei Punkten)**
- Es gibt keinen Geometrie-Wert auf dieser Ebene.
- Ein solches Attribut sollte nie für ein Mapping verwendet werden.

**Komplexes Attribut im Ziel-Schema**
- Kann für Abbildungen verwendet werden.
- Die JTS-Geometrie wird auf diesem Level abgelegt und kann im Map View dargestellt werden.
- Wenn die Daten exportiert werden wird nach dem besten Weg gesucht, die JTS-Geometrie in die unter dem komplexen Attribut verfügbare XML-Struktur zu schreiben.
