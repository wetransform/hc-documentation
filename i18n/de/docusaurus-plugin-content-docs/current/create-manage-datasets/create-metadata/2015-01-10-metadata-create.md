---
title: "Metadaten erstellen"
categories:
- "help-page-category-datasetworkflow"
- "help-page-subcategory-datasetworkflowcreatemetadata"
layout: help-detail
language: de
---


hale»connect unterstützt die Erstellung von Datensatz-Metadaten, ohne dass zugehörige Daten hochgeladen werden müssen. Der Workflow „Nur Metadaten“ ist nur für Datensatz-Metdaten verfügbar, nicht für Service-Metadaten.

## 'Nur-Metadaten'-Thema konfigurieren ##

Um ein 'Nur-Metadaten'-Thema zu erstellen, folgen Sie diesem Arbeitsablauf als angemeldeter Datenmanager oder Themenmanager:

1. Gehen Sie zu «Themen» auf der Hauptsymbolleiste
2. Gehen Sie zu «Neues Thema erstellen» am Ende der Themenliste
3. Wählen Sie im Schritt «Basisthema auswählen» „Nicht übernehmen“, um ein Thema zu erstellen, das nicht auf einem bereits existierenden Thema basiert.
     * Dadurch wird ein leeres Thema ohne zugeordnete Funktionstypen erstellt.
4. Geben Sie als Thementyp «Benutzerdefiniert» an und vergeben Sie einen Namen für Ihr Thema. Fügen Sie bei Bedarf eine Beschreibung und Versionsnummer hinzu.
5. Im nächsten Schritt «Objektart» hinzufügen, akzeptieren Sie die Standardeinstellung und klicken Sie auf «Weiter».
6. Klicken Sie im letzten Schritt auf «Anlegen».

Das neu erstellte Thema wird nun angezeigt. Der Toggle *Nur Metadaten veröffentlichen* auf der Themenübersichtsseite muss aktiviert sein.

Navigieren Sie zum Abschnitt Metadaten des Themas, um Metadaten zu konfigurieren. Weitere Informationen zum Konfigurieren von Metadaten finden Sie auf der Seite [Metadatenkonfiguration bearbeiten](../../setup-hc/edit-metadata-config/2015-02-10-theme-edit-metadata).

## Metadaten erstellen ##

Um Dataset-Metadaten zu erstellen, folgen Sie diesem Arbeitsablauf als angemeldeter Datenmanager oder Themenmanager:

1. Gehen Sie zu «Daten» auf der Hauptsymbolleiste
2. Gehen Sie zu «Neuen Datensatz anlegen» am Ende der Datensatzliste
3. Wählen Sie Ihr 'Nur-Metadaten'-Thema aus, um es als Basiskonfiguration für Ihren neuen Datensatz zu verwenden.
4. Geben Sie Ihrer Metadatendatei einen Namen. Dieser Name soll es Ihnen ermöglichen, die Metadaten im System schnell und eindeutig zu identifizieren.
5. Geben Sie im nächsten Schritt alle verbleibenden Metadatenwerte ein, die für die Veröffentlichung erforderlich sind oder geben Sie die URL an zur Ihrem bereits bestehenden Metadatensatz, den Sie verlinken möchten.
6. Erstellen und veröffentlichen Sie im letzten Schritt Ihre Metadaten.
