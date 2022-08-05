---
title: "Rollen und Zugriffsrechte konfigurieren"
categories:
- "help-page-category-users"
- "help-page-subcategory-users-general"
layout: help-detail
language: de
---

Rollen und Zugriffsrechte können nicht über die Weboberfläche konfiguriert werden. Sie werden über eine nur für die Systemadministration zugängliche JSON-Datei konfiguriert. Diese Datei kann auf [Anfrage](mailto:support@wetransform.to) für **Private-Cloud- und On-Premise-Instanzen** angepasst werden. 

### Zugriff auf Ressourcen

Die Konfiguration, welche Zugriffsrechte mit einer Rolle verbunden sind, erfolgt über die Zuordung von Schlüsseln zu jeder Art des Zugriffs auf vom System verwaltete Ressourcen. Die Zugriffsarten sind:
 
* **read:** Ressource darf gelesen werden.
* **edit:** Ressoruce darf bearbeitet werden.
* **delete:** Ressource darf gelöscht werden.
* **create:** Ressource des Typs darf erstellt werden.

Das System verwaltet viele verschiedene Arten von Ressourcen. Jeder Ressourcentyp wird von einem eigenen Dienst verwaltet. Die folgenden Ressourcen-Arten sind standardmäßig im System konfiguriert:

* **User:** Eine Anwenderin, ein Anwender
* **Organisation:** Eine Organisation
* **Bucket:** Ein Datensatz mit dazugehörigen Metadaten und Dateien
* **Theme:** Ein Datenthema, dem Datensätze zugeordnet werden
* **Schema:** Ein Datenmodell, aus dem Objektarten einem Thema zugeordnet werden
* **TransformationProject:** Ein hale studio-Transformationsprojekt

### Bedingungen

Wenn eine Benutzerin oder ein Benutzer Zugriff auf eine Ressource anfragt, muss mindestens eine definierte Zugriffsbedingung für die Art des Zugriffs auf diese Ressource erfüllt sein. Das System unterstützt die folgenden Bedingungstypen:

* **owner:** - Die Benutzerin oder der Benutzer ist der Besitzer der Ressource (keine Organsation).
* **organisation:** - Die Ressource ist im Besitz der Rolle &laquo;Organisation&raquo; oder ist die Rolle &laquo;Organisation&raquo; selbst.
* **suborganisations:** - Die Ressource ist im Besitz einer Unterorganisation oder ist eine Unterorganisation der Rolle &laquo;Organisation&raquo;.
* **parentOrg:** Die Ressource ist im Besitz einer Eltern-Organisation oder ist eine Eltern-Organsation der Rolle &laquo;Organisation&raquo;.
* **public:** Die Ressource ist als öffentlich gekennzeichnet.
* **shared:** Die Ressource wurde mit der Benutzerin oder dem Benutzer geteilt (in der Regel Leserechte).
* **collaborator:** Die Benutzerin oder der Benutzer arbeitet an der Ressource mit (in der Regel Schreibrechte).

### Beispiel roles.json

    {
      "anonymous": {
        "resource": {
          "Bucket": {
            "comment": {
              "requires": "read"
            },
            "createNote": {
              "requires": "read"
            },
            "editMetadata": {
              "requires": "edit"
            }
          },
          "Schema": {
            "comment": {
              "requires": "read"
            },
            "createNote": {
              "requires": "read"
            }
          },
          "Theme": {
            "comment": {
              "requires": "read"
            },
            "createNote": {
              "requires": "read"
            },
            "editMetadata": {
              "requires": "edit"
            }
          },
          "TransformationProject": {
            "comment": {
              "requires": "read"
            },
            "createNote": {
              "requires": "read"
            },
            "createTask": {
              "requires": "edit"
            },
            "replyToTask": {
              "requires": "read"
            }
          }
        },
        "application": {
          "awsGrantAccess": false
        }
      },
      "user": {
        "extends": "anonymous",
        "label": {
          "en": "Registered user",
          "de": "Standardnutzer"
        },
        "resources": {
          "User": {
            "read": true,
            "edit": ["self"]
          },
          "Organisation": {
            "read": true
          }
        }
      },
      "dataManager": {
        "extends": "user",
        "label": {
          "en": "Data manager",
          "de": "Daten-Manager"
        },
        "resources": {
          "Bucket": {
            "create": ["organisation"],
            "read": ["organisation"],
            "edit": ["organisation"],
            "delete": ["organisation"]
          },
          "Theme": {
            "read": ["organisation", "parentOrg"]
          },
          "Schema": {
            "read": ["organisation", "parentOrg"]
          },
          "TransformationProject": {
            "read": ["organisation", "parentOrg"]
          }
        }
      },
      "themeManager": {
        "extends": "dataManager",
        "label": {
          "en": "Theme manager",
          "de": "Themen-Manager"
        },
        "resources": {
          "Theme": {
            "create": ["organisation"],
            "edit": ["organisation"],
            "delete": ["organisation"],
            "view": {
              "requires": "read"
            }
          },
          "Schema": {
            "create": ["organisation"],
            "edit": ["organisation"],
            "delete": ["organisation"],
            "view": {
              "requires": "read"
            }
          },
          "TransformationProject": {
            "create": ["organisation"],
            "edit": ["organisation"],
            "delete": ["organisation"],
            "view": {
              "requires": "read"
            }
          }
        }
      },
      "orgAdmin": {
        "extends": "themeManager",
        "label": {
          "en": "Superuser",
          "de": "Superanwender"
        },
        "resources": {
          "User": {
            "create": true,
            "delete": ["organisation", "suborganisations"],
            "disable": ["organisation", "suborganisations"],
            "accessDisabled": true,
            "accessNotActivated": true
          },
          "Organisation": {
            "create": ["organisation", "suborganisations"],
            "edit": ["organisation", "suborganisations"],
            "delete": ["organisation", "suborganisations"],
            "assignRole": ["organisation", "suborganisations"]
          },
          "Bucket": {
            "create": ["suborganisations"],
            "read": ["suborganisations"],
            "edit": ["suborganisations"],
            "delete": ["suborganisations"]
          },
          "Theme": {
            "create": ["suborganisations"],
            "edit": ["suborganisations"],
            "delete": ["suborganisations"]
          },
          "Schema": {
            "create": ["suborganisations"],
            "edit": ["suborganisations"],
            "delete": ["suborganisations"]
          },
          "TransformationProject": {
            "create": ["suborganisations"],
            "read": ["suborganisations"],
            "edit": ["suborganisations"],
            "delete": ["suborganisations"]
          }
        },
        "application": {
          "viewSystemInfo": true
        }
      }
    }
