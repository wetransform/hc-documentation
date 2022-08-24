---
title: "Fragen und Antworten für hale»connect"
categories:
- "help-page-category-faq"
- "help-page-subcategory-faq"
layout: help-detail
language: de
---

<h2>Ein WMS enthält mehr Layer als erwartet. Wieso werden leere Layer erzeugt?</h2>

Dienste von hale»connect enthalten alle Layer, für die ein Style definiert ist - unabhängig davon, 
ob entsprechende Objekte in den Daten vorhanden sind oder nicht. Da für die meisten INSPIRE-Layer 
Standard-Styles auf der Plattform hinterlegt sind, werden diese alle angelegt. Dieses Verhalten 
kann umgangen werden, indem eine nutzerspezifische SLD-Datei für das Thema genutzt wird, 
in dem nur Styles für Layer definiert sind, die erzeugt werden sollen. 
Entsprechende Informationen finden sich in der <a href="https://www.wetransform.to/help/en/help-page-category-reference/help-page-subcategory-reference-themes/2018/04/07/reference-themes-view-services/.">Dokumentation</a>.

