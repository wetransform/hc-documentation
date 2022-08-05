---
title: "Automatischer Ablauf bei Neuanlage und Änderungen"
categories:
- "help-page-category-setup-haleconnect"
- "help-page-subcategory-setup-haleconnect-themetransformation-automation"
layout: help-detail
language: de
---

Der automatische Ablauf ermöglicht es, Dienstepublikation und Datentransformation ohne Eingreifen durch Nutzende automatisch als Hintergrund-Prozess auszuführen. Diese werden ausgelöst, wenn bestimmte Aktionen, wie beispielsweise Service-Updates oder Transformationen, durchgeführt werden. So können Dienste zum gerade bearbeiteten Datensatz publiziert, abgeleitete Datensätze mittels Transformation erzeugt und zu diesen wiederum Dienste publiziert werden. Ein typischer Ablauf sieht wie folgt aus:

1. Anlegen eines Datensatzes mit lokalen, nicht-INSPIRE konformen Daten,
1. Publikation von Diensten zum lokalen Datensatz,
1. Transformation der Daten zu INSPIRE GML,
1. Publikation von INSPIRE-Diensten auf Basis des INSPIRE GML.

Folgen sie in der Rolle &laquo;Superanwender&raquo; oder &laquo;Administrator&raquo; diesem Ablauf, um die automatische Ausführung zu diesem Thema zu konfigurieren:

1.	Gehen sie auf &laquo;Themen&raquo;.
2.	Wählen sie das Thema aus, das sie bearbeiten wollen.
3.	Gehen sie auf &laquo;Automatisierung&raquo;.
4.	Legen sie die Ausführungsregeln für Service-Updates und Transformationen fest. Bestimmen Sie, wann das Projekt ausgeführt werden soll, sowohl bei Neuanlage eines Datensatzes als auch bei Aktualisierung. Wir empfehlen eine sofortige Ausführung bei Neuanlage sowie eine manuelle Ausführung bei Aktualisierung.
8.	Haben sie bei einer der beiden Optionen &laquo;Später&raquo; ausgewählt, können sie nun festlegen, wann genau das Transformationsprojekt ausgeführt werden soll. Sie haben die folgenden Optionen zur Verfügung:
  * **Täglich:** Wählen sie die Uhrzeit aus, zu welcher die Transformation durchgeführt werden soll.
  * **Wöchentlich:** Bestimmen sie den Wochentag und die Uhrzeit, zu welcher die Transformation durchgeführt werden soll.
  * **Monatlich:** Bestimmen sie das Datum und die Uhrzeit, zu welcher die Transformation durchgeführt werden soll.
  <br/>
  <img src="/images/help/de/automated_publishing.png" alt="" title="Automating publishing" class="img-responsive img-inline-help">
