---
title: "Questions and answers on hale»connect"
categories:
- "help-page-category-faq"
- "help-page-subcategory-faq"
layout: help-detail
language: de
---

<h2>Die URL der Schemadatei hat sich geändert. Was muss ich tun, damit bei der Validierung auf das neue Schema bzw. die Veränderte URL des Schemas zugegriffen werden kann ?</h2>

Bei der Validierung der Datensätze in hale»connect wird gegen die Schema-Lokation der Objektarten, die im Schema referenziert sind, validiert. 
Als Validierungsgrundlage wird dabei das Schema, das mit dem Thema verbunden ist, herangezogen und nicht das Schema, welches im GML-Datensatz hinterlegt worden ist. 
Wenn die Lokation eines Schemas verändert wurde, führt dies zu einem Fehler bei der Validierung der Datensätze. 

Dieser Fehler kann durch folgende Schritte behoben werden: 

1. Ein neues Schema mit neuer Schema-Lokation anlegen 
2. Objektarten in den jeweiligen Themen austauschen; dabei auf neues Schema zugreifen

Danach sollten die Datensätze wieder validieren 
Eine Neupublizierung der Dienste ist nur dann erforderlich, wenn Daten ausgetauscht werden
