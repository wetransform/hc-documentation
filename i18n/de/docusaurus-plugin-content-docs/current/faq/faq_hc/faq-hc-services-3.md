---
title: "Fragen und Antworten für hale»connect"
categories:
- "help-page-category-faq"
- "help-page-subcategory-faq"
layout: help-detail
language: de
---

<h2>Wieso werden meine Daten mit vertauschten Koordinaten dargestellt?</h2>

Verschiedene Gegebenheiten können Probleme mit der Achsenreihenfolge geographischer Daten verursachen:

1) Manche GIS-Produkte nutzen die Achsenreihenfolge, die in der <a href="https://epsg.org/home.html">EPSG Registry</a> für Koordinatenreferenzsysteme (CRS) festgelegt wird, während andere für manche CRS davon abweichen. Abhängig davon, mit welchem Produkt Daten erzeugt wurden, ist es also möglich, dass die Achsenreihenfolge eine andere ist, als von der Plattform erwartet.

2) hale»connect nutzt deegree zur Publikation von Diensten. Abhängig davon, wie das CRS bei der Abfrage der deegree-Dienste definiert wird, können die Daten in unterschiedlicher Achsenreihenfolge zurückgegeben werden. Die Daten werden in der Reihenfolge Ost-Nord zurückgegeben, wenn das CRS in der Form "EPSG:XXXX" angegeben wird. Die Daten werden in der Reihenfolge zurückgegeben, die in der <a href="https://epsg.org/home.html">EPSG Registry</a> festgelegt ist, wenn das CRS unter Nutzung der urn-Notation angegeben wird. Weitere Informationen hierzu finden sich in diesem <a href="https://github.com/deegree/deegree3/wiki/Axis-order-handling">deegree Wiki-Eintrag. </a>.

In hale»connect gibt es einen Schalter, der es Nutzenden ermöglicht, die Koordinatenreihenfolge der Daten zu tauschen, wenn sich der Dienst nicht erwartungsgemäß verhält

<img src={require("/images/help/de/FAQ-hc-4.png").default} alt="" title="Toggle Switch" className="img-responsive img-inline-help"/>

Detailierte Informationen finden sie in der <a href="https://www.wetransform.to/help/de/help-page-category-reference/help-page-subcategory-reference-data/2018/03/08/reference-data-view-services/">hale»connect Dokumentation. </a>.
