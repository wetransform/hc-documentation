---
title: "Fragen und Antworten für hale»connect"
categories:
- "help-page-category-faq"
- "help-page-subcategory-faq"
layout: help-detail
language: de
---

<h2>Mein XML-Datensatz lässt sich nicht veröffentlichen. Ich erhalte die Meldung "Conversion failed". Was kann ich tun?</h2>

Die hale»connect Plattform unterstützt derzeit keine leeren <code>boundedBy</code>-Elemente und keine Arc-Geometrien (Bögen). 

Prüfen sie bitte, ob solche Elemente oder Geometrien in ihrer XML-Datei enthalten sind und entfernen oder ersetzen sie diese gegebenenfalls.
Detailierte Informationen finden sie in der <a href="https://www.wetransform.to/help/en/help-page-category-datasetworkflow/help-page-subcategory-datasetworkflowcreatedataset/2015/01/10/dataset-create/">hale»connect Dokumentation.</a>
