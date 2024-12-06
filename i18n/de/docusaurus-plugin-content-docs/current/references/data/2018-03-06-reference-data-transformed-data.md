---
title: "Abgeleitete Daten"
categories:
- "help-page-category-reference"
- "help-page-subcategory-reference-data"
layout: help-detail
language: de
sidebar_position: 8

---

Der Bereich Transformierte Daten zeigt die Transformationsprojekte an, die mit diesem Datensatz verbunden sind. Klicken Sie auf den Projektnamen, um allgemeine Eigenschaften und den aktuellen Status der Transformation anzuzeigen.

<img src={require("/images/help/de/dataset_transformed_data.png").default} alt="" title="The Transformed data section " className="img-responsive img-inline-help"/>

Die Seite enthält Links zum Transformationsprojekt und zum transformierten Datensatz ("Ziel-Datensatz"). Das Ergebnis des letzten Transformationslaufs wird im unteren Bereich angezeigt, zusammen mit einem Link zur Anzeige der Protokollausgabe des Transformationslaufs. Die Tabelle "Transformierte Typen" listet die Anzahl der Vorkommen jedes Typs in den Quelldaten und die Anzahl der Vorkommen jedes Typs in den Zieldaten auf.

Falls das Transformationsprojekt Projektvariablen enthält, können im Abschnitt "Projektvariablen" die zu verwendenden Werte gesetzt werden, so dass nachfolgende Transformationsläufe (die über die Schaltfläche "Transformation starten" ausgelöst werden können) diese Werte verwenden.

Durch Anklicken der Schaltfläche neben den Eingabefeldern kann ein Autofill-Assistent geöffnet werden. Mit diesem Assistenten können spezielle Platzhalter in die Eingabefelder für Projektvariablen eingefügt werden, die vor der Übergabe an die Transformation durch ihren tatsächlichen Wert ersetzt werden. Beispielsweise kann der Platzhalter `{{dataset.name}}` verwendet werden, um den Namen des Datensatzes an die Transformation zu übergeben.

Ein weiteres praktisches Beispiel für diese Funktion ist die Übergabe des Platzhalters für die Datensatz-ID `{{dataset.id}}` an die Projektvariable `DATASET_ID` einer XPlanung-nach-INSPIRE-Transformation, die zur Erzeugung eindeutiger Bezeichner für `OfficialDocumentation`-Elemente verwendet wird, wenn die Projektvariable `FORCE_UNIQUE_OFFICIALDOCUMENTATION_ID` auf `true` gesetzt ist.
