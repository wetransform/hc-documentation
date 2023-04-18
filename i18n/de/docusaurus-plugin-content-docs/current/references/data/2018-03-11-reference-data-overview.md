---
title: "Übersicht"
categories:
- "help-page-category-reference"
- "help-page-subcategory-reference-data"
layout: help-detail
language: de
sidebar_position: 0

---

Im &laquo;Übersicht&raquo;-Bereich werden allgemeine Eigenschaften und Einstellungen zum Datensatz angezeigt.

Der Name des Datensatzes kann verändert werden. Klicken sie auf den Namen um den Wert anzupassen. Das &laquo;Beschreibung&raquo;-Feld ist ein veränderbares Textfeld, in das Nutzende eine Beschreibung des Datensatzes eingeben können.

Das &laquo;Eigentümerschaft&raquo;-Feld gibt an,

    * für welche Organisation ein Datensatz angelegt wurde,
    * welche oder welcher Nutzende den Datensatz angelegt hat,
    * wann der Datensatz erstellt und
    * wann er zuletzt aktualisiert wurde.

Das &laquo;Inhalt&raquo;-Feld enthält folgende Angaben:

    * Datenvolumen der zum Datensatz gehörenden Dateien,
    * verwendete Kapazitätspunkte,
    * Anzahl der im Datensatz enthaltenen Objekte und
    * das dem Datensatz zugeordnete Thema.

Das &laquo;Status&raquo;-Feld bietet einen Überblick über alle Ressourcen, die zum Datensatz gehören:

    * Der Haken in grünem Kreis zeigt an, das die Ressource valide ist und regulär genutzt werden kann.
    * Das Ausrufezeichen in gelbem Kreis zeigt Validierungswarnungen an. Bei der Nutzung der Ressource im System können Fehler auftreten.
    * Das X in einem roten Kreis zeigt Validierungsfehler an. Die Ressource kann im System nicht planmäßig genutzt werden.
    * Ein Strich in einem grauen Kreis bedeutet, dass die entsprechende Ressource nicht veröffentlicht ist.

Die Spalte „Validierungsberichte“ enthält eine Reihe von herunterladbaren ETF-Testergebnissen und einen Dateianalysebericht der Quelldaten.

Im Bericht werden die Ergebnisse der Prüfung gegen die im Thema konfigurierten Datensatz-Konformitätsklassen dokumentiert. Des weiteren erfolgt eine Bewertung der Gültigkeit der Datei basierend auf der anfänglichen Dateianalyse, die während des Datenuploads durchgeführt wurde.
Alle während der ETF-Validierung oder Dateianalyse aufgetretenen Fehler werden im Bericht in der Spalte „Validierungsdetails“ aufgelistet.

Der Dateianalysebericht wird in der Sprache erstellt, die in den Spracheinstellungen der Website ausgewählt wurde.

## Details zum Status der Validierungsberichte ##

Klickt man auf die Dokumentsymbole wird ein kleiner Dialog geöffent, um zum einen den Validierungsbericht für die Ressource herunterzuladen und zum anderen diesen zu verwalten.
Grüne Häkchen zeigen an, dass der ETF-Bericht gültig ist.
Rote Xs weisen auf Fehler oder einen nicht ausgeführten Test hin.

Benutzer können die Validierungstests für eine bestimmte Ressource oder alle Ressourcen in einer Kategorie erneut ausführen, indem sie auf die Schaltfläche «Alle Tests ausführen» klicken. Alternativ können Benutzer einen einzelnen Test ausführen, indem sie auf das kreisförmige Pfeilsymbol neben dem Download-Symbol klicken.
Das gelbe Warnsymbol wird für Ressourcen mit Konformitätsklassen angezeigt, die manuelle Überprüfungen erfordern.

Die Schalter im &laquo;Einstellungen&raquo;-Feld geben Auskunft über die aktuellen Einstellungen zum Abonnieren und dem Schutz des Datensatzes. Aktivieren sie den *Abonniert*-Schalter um Email-Benachrichtigungen zu erhalten, wenn es zu einem Datensatz neue Kommentare oder Aufgaben gibt. Aktivieren sie den *Dienste schützen*-Schalter, um Darstellungs- und Download-Dienste zu diesem Datensatz mit einem Passwort zu schützen. Nach der Aktivierung erfordern alle Dienstanforderungen mit Ausnahme der GetCapabilities-Anforderung Autorisierungsinformationen.

wetransform kann für Organisationen, die tieferen Einblick in die Nutzung ihrer auf [hale»connect.com](https://haleconnect.com) veröffentlichten Dienste erhalten wollen, die Anzeige von Nutzungsstatistiken aktivieren. Bitte kontaktieren sie den [Support](https://www.wetransform.to/services/support/), um mehr Informationen zu erhalten. Wenn die Funktionalität aktiviert ist, enthält der Nutzungsstatistiken-Bereich Balkendiagramme, welche die Nutzungsstatistik für WMS und WFS anzeigen. Dabei kann zwischen der Anzeige der Ergebnisse aus dem letzten Jahr oder aus den letzten 30 Tagen gewählt werden. Das *Gesamtzugriffe nach Servicetyp*-Diagramm stellt die gesamte Service-Nutzung dar. Das *WMS capabilities-Anforderungen nach User Agent*-Diagramm stellt die prozentualen Anteile der Abfragen durch verschiedene User Agents, wie beispielsweise Browser (Firefox, Chrome...), QGIS oder hale»connect FeatureExplorer, dar. Das *WFS capabilities-Anforderungen nach User Agent*-Diagramm zeigt die gleichen Informationen für WFS an. Der &laquo;Als CSV exportieren&raquo;-Knopf ermöglicht es, Nutzerstatistiken auf Grundlage des ausgewählten Zeitraumes zu exportieren.
*Anmerkung: Diese Funktionalität steht nur Nutzenden mit advanced licence oder enterprise licence zur Verfügung. Für andere Lizenz-Typen kann die Funktionalität gegen Aufpreis aktiviert werden.*

Das &laquo;Anzahl Objekte pro Objektklasse&raquo;-Diagramm zeigt die Anzahl der enthaltenen Objekte für jede Objektart im Schema des Datensatzes an.
