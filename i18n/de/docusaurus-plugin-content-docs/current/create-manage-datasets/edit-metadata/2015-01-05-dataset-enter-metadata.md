---
title: "Metadaten zu Datensatz bearbeiten"
categories:
- "help-page-category-datasetworkflow"
- "help-page-subcategory-datasetworkfloweditmetadata"
layout: help-detail
language: de
---

Die Eingabe von Metadaten kann ein mühsamer und komplexer Prozess sein, weswegen ein Großteil der Felder automatisch befüllt wird. Nichtsdestotrotz müssen oft noch einige Felder manuell ausgefüllt werden. Dabei sind die folgenden Hinweise zu beachten:

* Die Eingabe muss im korrekten Format erfolgen. Manche Felder erlauben die Eingabe von beliebigem Text, in anderen sind Zahlen, Web-Adressen, E-Mail-Adressen, JSON-Objekte oder Well-Known-Text-Objekte zugelassen. Welche Art von Eingabeformat erwartet wird, ist durch das Symbol links vom Eingabefeld erkennbar. Gehen sie mit der Maus über das Symbol, um weitere Informationen zu erhalten.
* Manche Felder dürfen mehrfach gesetzt werden. Um ein Feld wie z.B. Keywords mehrfach zu setzen, klicken sie auf den &laquo;+&raquo;-Button unterhalb des Eingabefeldes. Um ein Feld zu löschen, klicken sie auf den &laquo;-&raquo;-Button rechts neben dem Eingabefeld.

Zur Eingabe von Metadaten gehen sie wie folgt vor:

1. Gehen sie auf &laquo;Daten&raquo;.
1. Wählen sie den Datensatz aus, für den sie die Metadaten bearbeiten möchten.
1. Gehen sie auf &laquo;Metadaten&raquo;.
1. Geben Sie verpflichtende und optionale Metadaten für ihren Datensatz bzw. ihren Dienst ein. Öffnen sie eine der Metadaten-Kategorien, indem sie auf deren Namen oder das Pfeilsymbol klicken. <img src={require("/images/help/de/dataset_edit_metadata.png").default} alt="" title="Datensatz-Metadaten bearbeiten" class="img-responsive img-inline-help"/>
1. Geben sie mindestens für jedes Feld, das mit einem roten Symbol markiert ist, einen Wert an. Alternativ können sie bestehende Werte verändern.
    * Die Anzeige neben dem Feld wechselt bei einer gültigen Eingabe auf grün, außerdem wird die rot hinterlegte Anzahl der noch auszufüllenden Felder aktualisiert.
1. Schlie&szlig;en sie die Kategorie und bearbeiten sie die nächste Kategorie.
1. Mit der Schaltfläche «Automatisch befüllen» werden die Werte in den Metadaten aktualisiert, wenn Werte, auf die durch Regeln für das automatische Ausfüllen verwiesen wird, geändert oder aktualisiert werden.
Beispiel: Sie aktualisieren die Adresse ihrer Organisation in den Organisationsprofileinstellungen. Sie haben in einer Autofill-Regel auf die Organisationsadresse verwiesen und möchten, dass die aktualisierte Adresse in ihren Metadaten angezeigt wird. Mit der Schaltfläche «Automatisch befüllen» können sie die Metadatenfelder aktualisieren.

Dienste müssen erneut veröffentlicht werden, um die aktualisierten Werte in den Metadaten anzuzeigen.

Hinweise zum Abschnitt zu &laquo;rechtlichen Angaben&raquo;:

*	Nuzenden in der Rolle &laquo;Datenmanager&raquo; stehen vorkonfigurierte komplexe Nutzungsbedingungen zur Auswahl. Zur Auswahl können auch open-data-Lizenzen hinterlegt sein.
*	Nutzende in der Rolle &laquo;Datenmanager&raquo; können selbst zusätzlich einfache Bedingungen in den Feldern &laquo;Nutzungseinschränkungen&raquo;, &laquo;Nutzungsbedingungen&raquo; und &laquo;Zugriffseinschränkungen&raquo; als Text erfassen.
*	Werden keine &laquo;Nutzungseinschränkungen&raquo;, &laquo;Nutzungsbedingungen&raquo; oder &laquo;Zugriffseinschränkungen&raquo; durch Vorauswahl oder einfache Erfassung eingegeben, so wird in den Metadaten &laquo;Bedingungen unbekannt&raquo; publiziert.
