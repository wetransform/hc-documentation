---
title: "Configure Roles and Privileges"
categories:
- "help-page-category-users"
- "help-page-subcategory-users-general"
layout: help-detail
language: en

---

Roles and Privileges cannot be configured via the application's web interface. Instead, they can only be edited via a JSON file that is accessible to the system administrator. The settings cannot be changed for public cloud instances. For **Private Cloud** instances, please request the change you would like to make by [contacting support](mailto:support@wetransform.to). As a system administrator for an **On Premise** instance, follow the steps explained below to make changes to roles and privileges.

### Resource permissions

Resource permissions are permissions granted on individual resources or on types of resources. To check a resource permission, the resource type name (e.g. 'User') is needed, and often also a concrete resource object or ID that can be used for checking the permission conditions.

There are four default resource permissions for each resource type that can be extended with other custom permissions if needed. The four default permissions are:
 
* **read:** Resource may be read and viewed
* **edit:** Resource may be edited
* **delete:** Resource may be deleted
* **create:** Resource of a type may be created

The system manages different resource types, depending on which services are part of it. A resource type is usually managed by a specific service. By convention, resource types start with an uppercase character. The following are the resource types currently available in hale-connect:

* **User:** A registered user
* **Organisation:** A registered organisation
* **Bucket:** A data set consisting of files and metadata
* **Theme:** A theme which defines common settings for data sets
* **Schema:** A data model which can be referenced from themes
* **TransformationProject:** A hale&raquo;studio transformation project

### Conditions

When a user requests access to a resource or functionality of the system, at least one access condition must be met. The system supports the following condition checks:

* **owner:** - The user is the owner of the resource (not an organisation)
* **organisation:** - The resource is owned by the role organisation or is the role organisation itself
* **suborganisations:** - The resource is owned by a suborganisation or is a suborganisation of the role organisation
* **parentOrg:** The resource is owned by a parent organisation or is a parent organisation of the role organisation
* **public:** The resource is marked as public
* **shared:** The resource is shared with the user (usually read access)
* **collaborator:** The user is a collaborator on the resource (usually edit access)

### Example roles.json

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
