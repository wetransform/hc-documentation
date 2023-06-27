---
title: "Validation konfigurieren"
categories:
- "help-page-category-setup-haleconnect"
- "help-page-subcategory-setup-haleconnect-themecreate"
layout: help-detail
language: de

---

Die Validierungskonfiguration definiert die Konformitätsklassen, die für alle Datensätze ausgeführt werden, die einem Thema zugeordnet sind.
Eine Konformitätsklasse besteht aus einer Reihe von Anforderungen, die in einem Standard definiert sind und mit einer ausführbaren Testsuite (ETS) getestet werden.
Alle INSPIRE-Konformitätsklassen, die für hale»connect-Ressourcen gelten, stehen zur Auswahl. Die Validierungskonfiguration ist mit dem Standardsatz von Konformitätsklassen vorbelegt, die zum Testen von INSPIRE-Ressourcen verwendet werden.
Wenn Sie ein neues Thema erstellen, wird eine Standardvalidierungskonfiguration bereitgestellt. Themenmanager und Superuser können Konformitätsklassen zur Validierungskonfiguration hinzufügen oder daraus entfernen.
Klicken Sie auf die Schaltfläche «Liste löschen», um alle Konformitätsklassen zu entfernen.
Klicken Sie auf die Schaltfläche «Standardeinstellungen hinzufügen», um zur Standardkonfiguration zurückzukehren. Deaktivieren Sie den Schalter, um die Validierung zu deaktivieren.

Um die Validierungskonfiguration zu bearbeiten, befolgen Sie diese Schritte als eingeloggter Themenmanager oder Organisations-Superuser:

1. Gehen Sie zu &laquo;Themen&raquo;
2. Wählen Sie das Thema aus, für das Sie die Validierungskonfiguration bearbeiten möchten
3. Gehen Sie zu &laquo;Validierung&raquo;. Dropdown-Menüs für Datensatz-Metadaten, Dienste-Metadaten, Dienste und Daten werden angezeigt. Aktivieren oder deaktivieren Sie die Konformitätsklassen, an denen Sie interessiert sind, für jede Kategorie. Alle verfügbaren Konformitätsklassen, die zum Testen von Ressourcen verwendet werden, die zu jeder Kategorie gehören, sind in den Dropdown-Menüs verfügbar. Benutzer können denselben Test nicht zweimal in derselben Kategorie hinzufügen. WFS-Diensttests mit direktem Download werden derzeit nicht unterstützt.
<img src={require("/images/help/de/configure_validation.png").default} alt="" title="Der Metadaten-Editor" className="img-responsive img-inline-help"/>
