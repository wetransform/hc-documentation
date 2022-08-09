---
title: "Fragen und Antworten für hale»studio"
categories:
- "help-page-category-faq"
- "help-page-subcategory-faq"
layout: help-detail
language: de
---

<h2>Gibt es eine Möglichkeit, nur die Instanzen eines ausgewählten Feature Types im Map view anzeigen zu lassen?</h2>

Derzeit nicht, aber es gibt verschiedene Workarounds.

Im Schema explorer kann eine Eigenschaft, die keine Geometrie enthält, als "default geometry" festgelegt werden. 
Die "default geometry" kann über einen Rechtsklick auf die entsprechende Eigenschaft festgelegt werden.

Es ist außerdem möglich, <code>Edit Style</code> im Feature Type-Kontext-Menü zu nutzen, um einen Feature Typen auszublenden, 
indem man die Deckfähigkeit ("opacity") auf 0 setzt.
