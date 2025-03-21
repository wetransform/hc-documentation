---
title: "Auf den Harvesting-Knoten zugreifen"
categories:
- "help-page-category-users"
- "help-page-subcategory-users-metadata"
layout: help-detail
language: de

---

Haleconnect stellt einen Knoten für Katalog-Dienste bereit, die Metadaten-Harvesting von der Plattform betreiben möchten. Die Harvesting-URL kann nach dem folgenden Muster gebildet werden:

```
    https://haleconnect.com/services/bsp/metadata/org/<ihre org num>
```

Katalog-Dienste erhalten eine zip-Datei, die alle Metadaten für die Organisation aus der Harvesting-URL enthält.

Als System-Administrator haben sie Zugang zu einer Vorschau-Seite, auf welcher die Metadaten dargestellt werden, die für den Harvesting-Knoten zugänglich sind. Die URL dieser Harvesting-Vorschau-Seite kann nach dem folgenden  Muster gebildet werden: 

```
    https://haleconnect.com/services/bsp/metadata/org/<ihre org num>?preview=true
```

:::caution

Um die Nummer ihrer Organisation zu ermitteln, navigieren sie zu der Nutzerkonto-Seite ihrer Organisation in den Einstellungen (Zahnrad-Symbol). Die Nummer ihrere Organisation wird in der im Browser angezeigten URL dargestellt. Zum Beispiel: https://haleconnect.com/#/organisation/1 gibt an, dass die Nummer ihrer Organisation 1 ist.

:::

Auf der Harvesting-Vorschau-Seite werden die Harvesting-URL, die URL der Harvesting-Vorschau-Seite und die Anzahl der Ressourcen auf dem Knoten angezeigt. Es gibt auch die Möglichkeit, unter Nutzung der vorhandenen Schalter-Links entfernte Metadaten-Ressourcen und Schlüsselwort-Filter einzubinden. Der &laquo;includeremote&raquo;-Schalter-Link ermöglicht es ihnen, entfernte Metadaten in den Knoten einzubinden. Der &laquo;keyword&raquo;-Schalter-Link erlaubt es ihnen, die Liste der Metadaten-Ressourcen nach denjenigen Datensätzen zu filtern, die das Schlüsselwort &laquo;inspireidentifiziert&raquo; enthalten. Sie können zusätzliche Schlüsselworte hinzufügen, indem sie dieserin der URL der Vorschau-Seite hinter dem &laquo;keywords&raquo;-Parameter mit Kommata getrennt einfügen.

Um beispielsweise nach dem Schlüsselwort &laquo;infoFeatureAccessService&raquo; zu filtern, setzen sie die URL wie folgt zusammen:

```
    https://haleconnect.com/services/bsp/metadata/org/1?preview=true&keywords=infoFeatureAccessService
```

Die Harvesting-Vorschau-Seite listet die Metadaten-Ressourcen am Ende der Seite in tabellarischer Form auf. Jede Metadaten-Ressource wird in einer Reihe mit den folgenden Spalten aufgeführt:

* Type: Der Typ des Services
* Titel: Der Titel des Services
* Simple Keywords: Die Schlüsselwörter, die dem Schlüssekwort-Feld der Metadaten-Datei entnommen werden
* Fileidentifier: Die fileIdentifier-Nummer
* Filename: Der Name der Metadaten-Datei
* Link: Der Hyperlink zur Metadaten-Datei