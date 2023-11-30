---
title: "hale»connect API"
categories:
- "help-page-category-reference"
- "help-page-subcategory-reference-API"
layout: help-detail
language: de

---

Der Zugriff auf die hale»connect-Plattform ist über eine API möglich. Die hale»connect API ermöglicht es Benutzenden, Workflows automatisch auszuführen, Konfigurationseinstellungen zu ändern, Organisationen und Benutzende zu verwalten und viele andere Aufgaben zu erledigen. Eine Reihe von Zugriffs-URLs ermöglicht den Zugriff auf verschiedene Plattformfunktionen, die über die API bereitgestellt werden. Um die hale»connect-API in Swagger zu nutzen, müssen Sie sich mit Ihrem hale»connect-Benutzernamen und Passwort anmelden.

Geben sie diese URL in Ihren Browser ein: https://haleconnect.com/swagger/

Für On-Premise-Kunden muss die URL wie folgt angepasst werden: https://[yourdomain]/swagger/

Auf Wunsch ermöglicht wetransform die Nutzung der hale»connect-API für On-Premise-Kunden.

Wählen sie „Anmelden“ und geben sie ihren hale»connect-Benutzernamen und ihr Passwort ein, um ein Authentifizierungstoken zu erhalten. Wenn der Anmeldeendpunkt nicht sichtbar ist, geben sie https://haleconnect.com/accounts/swagger.yaml in das URL-Eingabefeld oben auf der Seite ein und klicken sie auf &laquo;Explore&raquo;. Klicken sie auf das Feld „Modellschema“ auf der rechten Seite, um die Codevorlage in den Textkörper zu kopieren.

<img src={require('@site/static/images/help/de/swaggerUI.png').default} alt="" title="Swagger UI" className="img-responsive img-inline-help"/ >

Um Aufgaben über die API auszuführen und auf zusätzliche hale»connect-API-URLs zuzugreifen, ist ein gültiges Authentifizierungstoken erforderlich. Klicken sie auf die Schaltfläche &laquo;Try it out!&raquo; und kopieren sie das generierte Token in den Antworttext. Fügen sie oben auf der Seite das Token in das Feld ein, das den Text **api_key** enthält. Das Feld befindet sich neben der hale»connect-API-URL. Sobald sie sich angemeldet und ein gültiges Authentifizierungstoken angegeben haben, können sie die hale»connect API zum Ausführen von Aufgaben verwenden.

Die für jeden Endpunkt verfügbaren HTTP-Vorgänge werden aufgelistet. Die Operationen [GET](https://datatracker.ietf.org/doc/html/rfc9110#name-get), [POST](https://datatracker.ietf.org/doc/html/rfc9110#name-post ), [PUT](https://datatracker.ietf.org/doc/html/rfc9110#name-put) und [DELETE](https://datatracker.ietf.org/doc/html/rfc9110#name-delete ) sind unterstützt.

Die GET-Operation fordert den Abruf von Daten an.

Die POST-Operation fordert einen Server auf, die in der Anfrage enthaltenen Daten zu akzeptieren.

Die PUT-Operation fordert eine Ressource auf, ihren Status zu erstellen oder zu aktualisieren.

Die DELETE-Operation fordert das Löschen eines Status oder einer Ressource an.

Bei der Arbeit in Swagger empfiehlt wetransform, für jeden Eintrag den Endpunkt, den HTTP-Vorgang und die schriftliche Beschreibung des Endpunkts zu untersuchen.

### User service
user_service: https://haleconnect.com/accounts/swagger.yaml

Zu den im Benutzerdienst bereitgestellten Aktionen gehören hale»connect Login, Organisations- und Benutzerverwaltung, Passwörter, Berechtigungen und Registrierung.

### Bucket service
bucket_service:

  Bucket: https://haleconnect.com/store/data/swagger.yaml

  Schema: https://haleconnect.com/store/schemas/swagger.yaml

  TransformationProject: https://haleconnect.com/store/projects/swagger.yaml

  Metadata: https://haleconnect.com/store/metadata/swagger.yaml

  Attachment: https://haleconnect.com/store/attachments/swagger.yaml

Ein Bucket ist ein Container für im Dateispeicher gespeicherte Objekte. Die hale»connect Bucket-Service-APIs bieten Zugriff auf Dateien und Datensätze, die jedem Ressourcentyp zugeordnet sind. Für einige Bucket-Service-Endpunkte ist die Angabe einer Bucket-ID und einer Organisationsnummer erforderlich. Die Bucket-ID und die Organisations-ID finden Sie in den Ressourcenlinks von hale»connect.

In der folgenden Beispiel-URL lautet die Bucket-ID **abe0849a-5110-43a5-81e4-5880fce3f398** und die Organisations-ID ist **599**.

Beispiel-URL: https://test.haleconnect.de/#/dataset/org/599/abe0849a-5110-43a5-81e4-5880fce3f398/files

### Interaction service
interaction_service: https://haleconnect.com/interactions/swagger.yaml

Der Interaktionsdienst bietet Zugriff auf Kommentare, Aufgaben und Notizen zu einer bestimmten Ressource sowie zum Forum.

### Schema service
schema_service: https://haleconnect.com/schemas/swagger.yaml

Der Schema-Dienst gewährt Zugriff auf Schemas und Profile und ermöglicht Benutzenden die Durchführung von Aktionen im Zusammenhang mit Schema-Speicherorten, Namespaces und Feature-Typen.

### Project service
project_service: https://haleconnect.com/projects/swagger.yaml

Der Projektdienst ermöglicht Benutzenden den Zugriff auf Transformationsprojekte, Alignments und Mapping-Zellen.

### Workflow manager
workflow_manager: https://haleconnect.com/workflows/swagger.yaml

Der Workflow-Manager-Dienst verwaltet die meisten Aufgaben auf der Plattform, einschließlich Transformationen, Validierung und Statusaktualisierungen. Der Workflow-Manager-Dienst ermöglicht Benutzenden außerdem den Zugriff auf Informationen zum ETF-Validator und zur Spatineo-Überwachung.

### Resources
resources: https://haleconnect.com/resources/swagger.yaml

Der Ressourcendienst ermöglicht den Zugriff auf Organisationseinstellungen wie Nutzungskapazität und CSW-Konfiguration.

### Reports
reports: https://haleconnect.com/reports/swagger.yaml

Der Berichtsdienst bietet Zugriff auf Validierungsergebnisse und Nutzungsinformationen für Datensätze und Dienste auf hale»connect.

### Actions
actions: https://haleconnect.com/actions/swagger.yaml

Mit dem Aktionsdienst können Benutzende eine Organisation löschen und die Standardgrundkarte einer Organisation abrufen.
