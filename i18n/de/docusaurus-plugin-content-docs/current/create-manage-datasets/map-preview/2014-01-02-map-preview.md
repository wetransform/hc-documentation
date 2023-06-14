---
title: "Verwenden der Kartenansicht"
categories:
- "help-page-category-datasetworkflow"
- "help-page-subcategory-datasetworkflowmappreview"
layout: help-detail
language: de
---

**Die Kartenansicht**

Die Kartenansicht ist eine einfache Web-Anwendung, die die Anzeige von veröffentlichten WMS ermöglicht.
<img src={require("/images/help/de/map_preview.png").default} alt="Layer-Widget mit Legende" title="Layer-Widget mit Legende" className="img-responsive img-inline-help"/>

## Das Layer-Widget ##

Das Layer-Widget enthält

* Legendeninformationen,
* die Option zum Ein- und Ausschalten von Layern und
* die Option zum Filtern von Raster-Datensätzen für die Anzeige innerhalb einer Datensatzserie.

# Auswahl von Einzeldatensätzen einer Datensatzserie #

Klicken Sie für veröffentlichte Datensatzseriendienste auf das Filtersymbol im Layer-Widget, um den Datensatzauswahldialog aufzurufen und Teildatensätze für die Anzeige auszuwählen.

# Benutzerdefinierten WMS als Hintergrundkarte hinzufügen #

Das Layer-Widget bietet auch die Möglichkeit, eine benutzerdefinierte Hintergrundkarte per URL bereitzustellen. Für mehr Informationen zum Hinzufügen einer Hintergrundkarte zu ihrer Organisation, lesen sie  [diesen Abschnitt der Dokumentation](../../users-roles-orgs/manage-orgs/2015-03-04-users-add-organisation.md).

# Externen WMS als Hintergrundkarte hinzufügen #

Darüber hinaus unterstützt das Layer-Widget die Option, externe WMS-Dienste zur Kartenvorschau hinzuzufügen, sodass neben den hale»connect-Diensten auch externe Dienste angezeigt werden können. Die Konfiguration erfolgt in den Einstellungen zur Organisation unter Angabe eines WMS im Bereich «Karten-Konfiguration».

<img src={require("/images/help/de/series.png").default} alt="Ausgewählte Sub-Datensätze im Layer-Widget" title="Ausgewählte Sub-Datensätze im Layer-Widget" className="img-responsive img-inline-help"/>

Die Kartenansicht enthält ein sich anpassendes Maßstabs-Widget und eine Koordinatenanzeige für den Mauszeiger. Koordinaten können eingegeben werden, um die Ausdehnung der Karte zu aktualisieren und auf einen bestimmten Ort zu zoomen.

Die vertikale Schaltflächenreihe in der oberen linken Ecke der Kartenvorschau ermöglicht Nutzenden Folgendes:
  * Vergrößern und Verkleinern
  * Generieren eines Permalinks mit der aktuell ausgewählten Ausdehnung, Ebenenkonfiguration und Zoomstufe, der geteilt werden kann
  * Drucken der aktuellen Kartenausdehnung oder Generieren einer PDF-Datei
