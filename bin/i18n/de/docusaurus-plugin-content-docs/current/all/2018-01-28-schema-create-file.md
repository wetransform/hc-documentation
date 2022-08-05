---
title: "Ein neues Schema über das Hochladen von Schemadateien erstellen"
categories:
- "help-page-category-setup-haleconnect"
- "help-page-subcategory-setup-haleconnect-schema-create"
layout: help-detail
language: en

---

Ein *Schema* beschreibt die Struktur eines Datensatzes durch die Definition von Typen und deren Eigenschaften. Schemas können aus diversen Datenquellen, wie Datenbanken, XML Schema-Dateien, \*.json.hsd Dateien oder Shape-Dateien, importiert werden. Sie können unter Nutzung des enthaltenen Modellierungswerkzeuges auch direkt in hale connect erstellt werden.

Um ein neues Schema zu erstellen, gehen sie in der Rolle &laquo;Themenmanager&raquo; oder &laquo;Superanwender&raquo; wie folgt vor:

1. Gehen sie auf &laquo;Schemas&raquo;.
2. Klicken sie auf &laquo;+ Neues Schema anlegen&raquo;.
3. &laquo;Erstellungsmethode wählen&raquo;: Wählen sie &laquo;Schemadateien hochladen (Shapefile, XSD,...)&raquo; und klicken sie auf &laquo;Weiter&raquo;.
4. Definieren sie in den folgenden Schritten das Schema. Die Schemadefinition wird durch die Erstellungsmethode bestimmt.

    * Klicken sie auf &laquo;+ Datei(en) auswählen&raquo; und navigieren sie zur gewünschten Schemadatei oder ziehen sie eine Datei auf &laquo;+ Datei(en) hierher ziehen&raquo;. Wenn sie ein Schema aus einer Shapefile-Datei erstellen möchten, laden sie dieses hoch und hale»connect extrahiert das Schema automatisch. Wenn sie ein Schema aus einer GeoPackage-Datei erstellen möchten, exportieren sie eine .json.hsd-Datei (Hale Schema Definition) aus hale»studio und laden sie diese hoch. Wenn sie fertig sind, klicken sie auf &laquo;Weiter&raquo;.

    *  &laquo;Informationen ergänzen&raquo;: Geben sie Name, Autor oder Autorin, Typ und Version ihres Schemas an. Wenn sie fertig sind, klicken sie auf &laquo;Weiter&raquo;.

    * &laquo;Anlegen bestätigen&raquo;: Überprüfen sie im letzten Schritt ihr Schema. Sie können zu ihrem Schema ein Thema anlegen oder hinzufügen. Klicken sie &laquo;Anlegen&raquo; um das Schema zu speichern.
