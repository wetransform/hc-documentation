---
title: "Fragen und Antworten für hale»connect"
categories:
- "help-page-category-faq"
- "help-page-subcategory-faq"
layout: help-detail
language: de
---

<h2>Wie kann ich die Automatisierungsregeln für die Metadaten-Generierung meines Themas ändern?</h2>

Die Metadatenkonfiguration definiert, welche Metadaten zu Datensätzen eines Themas einzugeben sind. Sie enthält Automatisierungsregeln, mit denen dieser Vorgang weitgehend automatisiert werden kann. Der Ablauf wird ohne Eingreifen durch Benutzende automatisch als Hintergrund-Prozess ausgeführt. Er wird ausgelöst, wenn bestimmte Aktionen, wie beispielsweise Service-Updates oder Transformationen, durchgeführt werden. Weitere Informationen sind in <a href="../../references/themes/2018-04-04-reference-themes-automation">diesem Abschnitt</a> unserer Dokumentation zu finden.

Auch nach der Erstellung eines Datensatzes ist es möglich, die Metadaten zu aktualisieren bzw. neu zu erzeugen. Wenn die Änderungen im Metadaten-Editor des entsprechenden Themas beendet sind, können diese unter Nutzung des "Automatisch befüllen"-Buttons im Metadaten-Bereich des Datensatzes übernommen werden.

Die Regeln dafür haben jedoch eine unterschiedliche Gewichtung: 
* Wird eine Autofill-Regel angepasst, so werden alle bisherigen Werte überschrieben.
* Wird eine default-Regel angepasst, werden die vorhandenen Werte nicht überschrieben, unabhängig davon ob diese aus einer älteren default-Regel kommen oder manuell eingetragen wurden. 
* Es wird ein neu konfigurierter default-Wert eingesetzt, wenn das Metadatenfeld bislang noch nicht gefüllt war.

Detailierte Informationen wie sie die Automatisierungsregeln für die Metadaten-Generierung eines Themas ändern können, finden sie in <a href="../../setup-hc/edit-metadata-config/2015-02-10-theme-edit-metadata">diesem Abschnitt</a> unserer Dokumentation.
