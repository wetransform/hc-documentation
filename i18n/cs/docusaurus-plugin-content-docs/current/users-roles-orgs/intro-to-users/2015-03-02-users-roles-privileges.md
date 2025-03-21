---
title: "Konfigurování rolí a oprávnění"
categories:
- "help-page-category-users"
- "help-page-subcategory-users-general"
layout: help-detail
language: cs

---

Role a oprávnění nelze konfigurovat přes webové rozhraní aplikace. Namísto toho je lze upravovat pouze prostřednictvím souboru JSON, který je přístupný správci systému. Nastavení pro instance veřejného cloudu nelze změnit. V případě instancí **Private Cloud** požádejte o změnu, kterou chcete provést, [kontaktováním podpory] (mailto:support@wetransform.to). Jako správce systému pro instanci **On Premise** proveďte změny v rolích a oprávněních podle níže popsaných kroků.

### Oprávnění ke zdrojům

Oprávnění ke zdrojům jsou oprávnění udělená pro jednotlivé zdroje nebo typy zdrojů. Pro kontrolu oprávnění ke zdroji je potřebný název typu zdroje (např. 'Uživatel') a často i konkrétní objekt zdroje nebo ID, které lze použít ke kontrole podmínek oprávnění.

Pro každý typ zdroje existují čtyři předvolená oprávnění, která lze v případě potřeby rozšířit o další vlastní oprávnění. Čtyři předvolená oprávnění jsou:
 
* **číst:** Zdroj si lze číst a prohlížet
* **editovat:** Zdroj lze upravit
* **vymazat:** Zdroj lze vymazt
* **vytvořit:** Je možné vytvořit zdroj určitého typu

Systém spravuje různé typy zdrojů v závislosti na tom, které služby jsou jeho součástí. Typ zdroje je obvykle řízen specifickou službou. Typy zdrojů začínají podle konvence velkým písmenem. Momentálně jsou v hale-connect dostupné tyto typy zdrojů:

* **Uživatel:** Registrovaný uživatel
* **Organizace:** Registrovaná organizace
* **Segment:** Datová sada sestávající ze souborů a metadat
* **Téma:** Téma, které definuje běžná nastavení pro datové sady
* **Schéma:** Datový model, na který lze odkazovat z témat
* **Projekt transformace:** Transformační projekt studia hale&raquo;

### Podmínky

Požaduje-li uživatel přístup ke zdroji nebo funkcím systému, musí být splněna alespoň jedna podmínka přístupu. Systém podporuje tyto kontroly stavu:

* **vlastník:** – Uživatel je vlastníkem zdroje (nikoli organizace)
* **organizace:** – Zdroj vlastní organizace role nebo jde o samotnou organizaci role
* **podorganizace:** – Zdroj vlastní podorganizace nebo je podorganizací organizace role
* **parentOrg:** Zdroj vlastní nadřazená organizace nebo je nadřazenou organizací organizace role
* **veřejný:** Zdroj je označen jako veřejný
* **sdílený:** Zdroj je sdílen s uživatelem (obvykle přístup ke čtení)
* **spolupracovník:** Uživatel je spolupracovníkem zdroje (obvykle přístup k úpravám)

### Example roles.json

```json
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
```
