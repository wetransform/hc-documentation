---
title: "Anzeigeeigenschaften bearbeiten"
categories:
- "help-page-category-setup-haleconnect"
- "help-page-subcategory-setup-haleconnect-themecreate"
layout: help-detail
language: de
---

Oft sind Feld- und Klassennamen im Schema nur schwierig zu verstehen, beispielweise wenn sie in einer Fremdsprache definiert sind oder aufgrund von Beschränkungen stark abgekürzt wurden. Um trotzdem nützliche Darstellungsdienste bereitstellen zu können, können sie die Anzeigeeigenschaften für dem Thema zugeordnete Objektarten bearbeiten. Diese werden dann beispielsweise für die Legenden und für GetFeatureInfo-Popups genutzt. hale»connect unterstützt die Konfiguration von Aliasen für Objektarten-Namen und Attribute von Objektarten.

Um diese anzupassen, gehen sie in der Rolle &laquo;Themenmanager&raquo; oder &laquo;Superanwender&raquo; wie folgt vor:

1.	Gehen sie auf &laquo;Themen&raquo;.
2.	Wählen sie das Thema aus, das sie bearbeiten wollen.
3.	Gehen sie auf &laquo;Objektarten&raquo;.
4.	Klicken sie auf die Objektart, deren Anzeigeeigenschaften sie bearbeiten wollen .
5.	Bestimmen sie in der nun sichtbaren Tabelle für jedes Feld, ob dieses in einem Darstellungsdienst sichtbar sein soll, und wenn ja, mit welchem Alias (Beschriftung).<img src={require("/images/help/de/property_editing.png").default} alt="" title="Objektarteneigenschaften bearbeiten" className="img-responsive img-inline-help"/>
6.	Speichern sie die Änderungen unterhalb der Tabelle.

# Anzeigewerte formatieren #

Mit dem Renderer können Nutzende die Formatierung der im Feature Explorer angezeigten Werte steuern. Nutzende haben die Möglichkeit, einen der folgenden Renderer auszuwählen:

* Standard (kein Renderer)
* Formatierte Zahl (geben sie ein Zahlenformat ein, z. B. ###.##)
* Formatiertes Datum (wählen sie eine Option für das Datumsformat)
* Codelisten-Beschriftungen (Werte zum Ersetzen von Codes können in einer Mappingtabelle bereitgestellt werden.)

     * Durch Semikolons getrennte CSV- oder gültige JSON-Werte können bereitgestellt werden
     * Die erste Spalte muss in den Daten gefundene Werte enthalten und die zweite Spalte muss die Anzeigewerte enthalten

Hier ist ein Beispiel dafür, wie codierte Werte mithilfe von Beschriftungen ersetzt werden, die über eine Mappingtabelle bereitgestellt werden:
<img src={require("/images/help/de/renderer.png").default} alt="" title="Codierte Werte durch Labels ersetzen" className="img-responsive img-inline-help"/>

Um angewendete Renderer zu bearbeiten, klicken sie auf das Zahnradsymbol.
