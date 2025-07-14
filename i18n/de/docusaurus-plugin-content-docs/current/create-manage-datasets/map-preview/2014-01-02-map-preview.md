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

Die vertikale Schaltflächenreihe in der oberen linken Ecke der Kartenvorschau ermöglicht Nutzenden Folgendes:
  * Vergrößern und Verkleinern
  * Generieren eines Permalinks mit der aktuell ausgewählten Ausdehnung, Ebenenkonfiguration und Zoomstufe, der geteilt werden kann
  * Drucken der aktuellen Kartenausdehnung oder Generieren einer PDF-Datei

Die Karte kann als PNG heruntergeladen oder als PDF im Hoch- und Querformat ausgedruckt werden. Bitte beachten Sie, dass der Ausdruck nur auf Bildschirmen mit einer Auflösung von 1920x1080 (Full HD) und 2560x1440 (QHD) einwandfrei funktioniert.

## Das Layer-Widget ##

Das Layer-Widget enthält

  * Legendeninformationen,
  * die Option, externe WMS-Layer hinzuzufügen und
  * die Option zum Ein- und Ausschalten von Layern und
  * die Option zum Filtern von Raster-Datensätzen für die Anzeige innerhalb einer Datensatzserie.

# Auswahl von Einzeldatensätzen einer Datensatzserie #

Klicken sie für veröffentlichte Datensatzseriendienste auf das Filtersymbol im Layer-Widget, um den Datensatzauswahldialog aufzurufen und Teildatensätze für die Anzeige auszuwählen. <img src={require("/images/help/de/series.png").default} alt="Ausgewählte Sub-Datensätze im Layer-Widget" title="Ausgewählte Sub-Datensätze im Layer-Widget" className="img-responsive img-inline-help"/>

# Externen WMS-Layer hinzufügen #

Das Layer-Widget unterstützt die Option, externe WMS-Layer zur Kartenvorschau hinzuzufügen, sodass externe Layer zusammen mit den hale»connect-Diensten angezeigt werden können. Es können auch weitere hale»connect-Dienste hinzugefügt werden. Klicken sie im Layer-Feld auf das Pluszeichen, um ihren WMS hinzuzufügen. Sie können die Reihenfolge der Layer in der Layer-Liste ändern, um die Anzeige der Layer in der Kartenvorschau zu konfigurieren.

# Benutzerdefinierten WMS als Hintergrundkarte hinzufügen #

Das Layer-Widget bietet auch die Möglichkeit, eine benutzerdefinierte Hintergrundkarte per URL bereitzustellen. Klicken sie im Basemap-Bereich auf das Pluszeichen, um ihre URL hinzuzufügen. Für mehr Informationen zum Hinzufügen einer Hintergrundkarte zu ihrer Organisation, lesen sie  [diesen Abschnitt der Dokumentation](../../users-roles-orgs/manage-orgs/2015-03-04-users-add-organisation.md).

# Externen WMS als Hintergrundkarte hinzufügen #

Darüber hinaus unterstützt das Layer-Widget die Option, externe WMS-Dienste zur Kartenvorschau hinzuzufügen, sodass neben den hale»connect-Diensten auch externe Dienste angezeigt werden können. Die Konfiguration erfolgt in den Einstellungen zur Organisation unter Angabe eines WMS im Bereich «Karten-Konfiguration».


Die Kartenansicht enthält ein sich anpassendes Maßstabs-Widget und eine Koordinatenanzeige für den Mauszeiger. Koordinaten können eingegeben werden, um die Ausdehnung der Karte zu aktualisieren und auf einen bestimmten Ort zu zoomen.

