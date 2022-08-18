---
title: "Verwenden des Feature-Explorer-Werkzeugs"
categories:
- "help-page-category-datasetworkflow"
- "help-page-subcategory-datasetworkflowfeatureExplorer"
layout: help-detail
language: de
---

**Das Feature Explorer Werkzeug**

Der Feature Explorer ermöglicht eine einfache Navigation durch verschachtelte Strukturen komplexer GML-Dateien und eine Betrachtung komplexer GML-Attribute. GML-Attribute, die Links zu verknüpften Objekten, Codelisten oder angehängten Dateien enthalten, können mit Hilfe des Werkzeuges betrachtet werden.

Auf das Feature-Explorer-Werkzeug kann über die Schaltfläche «Details anzeigen» in der HTML-GetFeatureInfo-Antwort der WMS-Dienste bei hale»connect zugegriffen werden.
<img src={require("/images/help/de/Feature Explorer.png").default} alt="" title="Zugriff auf das Feature-Explorer-Tool über die Schaltfläche Details anzeigen" className="img-responsive img-inline-help"/>

Um das Werkzeug nutzen zu können, aktivieren sie zunächst &laquo;GetFeatureInfo&raquo; für ihr Thema.
  * Gehen sie auf &laquo;Themen&raquo;.
  * Wählen sie den &laquo;Darstellungs-Dienste&raquo;-Bereich aus.
  * Wählen sie im Aufklappmenü neben &laquo;GetFeatureInfo&raquo; &laquo;Aktiviert&raquo; aus.

GetFeatureInfo ist eine optionale Operation, die es bei der Nutzung ihrer Darstellungs-Dienste erlaubt, Informationen von den Schichten ihres WMS abzufragen. Der GetFeatureInfo-Client ist nur für Schichten von WMS verfügbar, für die sie die Unterstützung der GetFeatureInfo-Operation aktiviert haben.

Der nächste Schritt ist die Erstellung eines Datensatzes und dessen Veröffentlichung mit Hilfe von Darstellungsdiensten.

Um das Feature Explorer Werzeug aufzurufen, klicken sie auf den &laquo;Kartenansicht&raquo;-Link im &laquo;Darstellungs-Dienste&raquo;-Bereich ihres Datensatzes:
  * Gehen sie auf &laquo;Daten&raquo;.
  * Wählen sie den &laquo;Darstellungs-Dienste&raquo;-Bereich aus.
  * Klicken sie auf &laquo;Kartenansicht&raquo;, um eine Demoseite für den WMS aufzurufen.
  * Wählen sie über einen Klick in die Kartenanzeige auf der Demoseite ein Objekt aus.
  * Klicken sie auf den &laquo;Details anzeigen&raquo;-Knopf in der HTML-Ansicht des GetFeatureInfo-Clients.

Der Feature Explorer öffnet sich in einer neuen Registerkarte, auf der die zum ausgewählten Objekt gehörigen Attribute angezeigt werden. Klicken sie auf die vorhandenen Links, um die Attribute und verknüpften Objekte detaillierter anzeigen zu lassen. Klicken sie auf den &laquo;+&raquo;-Knopf rechts von den aufgeführten Attributen um weitere Ebenen verschachtelter Attribute anzeigen zu lassen.
