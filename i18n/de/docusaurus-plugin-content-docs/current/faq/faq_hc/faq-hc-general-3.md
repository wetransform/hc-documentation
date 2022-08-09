---
title: "Fragen und Antworten für hale»connect"
categories:
- "help-page-category-faq"
- "help-page-subcategory-faq"
layout: help-detail
language: de
---

<h2>Wieso sind in einem Thema, das zusammen mit einem Schema angelegt wurde, keine Objektarten enthalten?</h2>

Insbesondere bei großen Schemata kommt es vor, dass der Workflow zum Anlegen des Schemas in ein Timeout läuft. In solchen Fällen wird zwar das Thema, das zusammen mit dem Schema erstellt werden sollte, angelegt, die automatische Zuordnung der Objektarten funktioniert aber nicht. 

Sie können das im 'Objektarten'-Bereich ihres Themas prüfen. Wenn dort keine Objektarten angezeigt werden, hat das Anlegen nicht wie erwartet funktioniert. 

Um die gewünschte Konfiguration zu erhalten, können sie den '+ Objektart hinzufügen'-Knopf nutzen und alle Objektarten des angelegten Schemas hinzufügen.

<img src={require("/images/help/de/FAQ-hc-9.png").default} alt="" title="Objektarten hinzufügen" className="img-responsive img-inline-help"/>

Um das beschriebene Verhalten zu verhindern, wird empfohlen, große Schemata, für die auch ein Thema angelegt werden soll, mit Google Chrome anzulegen. 
