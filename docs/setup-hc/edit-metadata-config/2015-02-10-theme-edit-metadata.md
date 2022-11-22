---
title: "Edit metadata configuration"
categories:
- "help-page-category-setup-haleconnect"
- "help-page-subcategory-setup-haleconnect-thememetadata"
layout: help-detail
language: en

---

The metadata configuration defines which metadata data managers need to provide for all data sets associated with a theme. The metadata configuration contains autofill rules and default values, which you can use to automate metadata entry almost entirely. When you create a theme, a default metadata configuration is provided. Only the system administrator can modify this default configuration, and it cannot be changed for public cloud deployments. If you use a private cloud instance, contact [support](mailto:support@wetransform.to) for any desired changes.

To edit the metadata configuration, follow these steps as a logged in theme manager or organisation superuser:

1. Go to &laquo;Themes&raquo;
1. Pick the theme you'd like to edit the metadata configuration for
1. Go to &laquo;Metadata&raquo;. Expandable panels for dataset and service metadata are displayed. Select the metadata you are interested in configuring and expand the panel.
<img src={require("/images/help/en/metadata1.png").default} alt="" title="The metadata editor" className="img-responsive img-inline-help"/>
1. The «Dataset name pattern» field allows you to define an autofill rule for the dataset name. Autofill rules enable the automatic generation of metadata through the use of variables. To create an autofill rule, click in the «Dataset name pattern» field. The Autofill assistant appears in the top right corner. Click on a value in the Autofill assistant to insert the autofill rule. For example, you may want to automatically assign the value in a dataset attribute as the dataset name. In the Autofill Assistant, navigate to File Analysis, and next, to Attribute Values. Select the attribute that contains the dataset name in your dataset. During dataset creation, the dataset name is automatically populated by the value in the dataset.
1. Select the metadata source in the dropdown menu. Available options include:
      * Use metadata editor- Select this option to let hale»connect generate the metadata. To define how hale»connect should generate the metadata, the system provides a special-purpose text editor. The default metadata configuration displays INSPIRE compliant metadata elements.
      When you choose to use the metadata editor, hale»connect generates dataset and service metadata based on the user-supplied input. For some fields, such as *Keywords*, hale»connect automatically applies the values entered for dataset metadata to the service metadata. If you want to use different *Keywords* in your service metadata, enter the values in the text field provided.
      <img src={require("/images/help/en/generate_metadata.PNG").default} alt="" title="Generate metadata using hale»connect" className="img-responsive img-inline-help"/>
      * Republish existing metadata- Select this option to upload your existing metadata file during data set creation. Please note that the elements gml:TimePeriod and gmd:MD_RestrictionCode are currently not supported in existing metadata.
      When you choose to republish dataset metadata, hale»connect generates dataset metadata based on a copy of the URL or file upload provided.
      <img src={require("/images/help/en/copy_metadata.PNG").default} alt="" title="Copy metadata" className="img-responsive img-inline-help"/>
      * Link to existing metadata- Select this option to provide a link to your metadata file during data set creation.
      When you choose to provide a link to existing metadata, hale»connect generates dataset metadata by accessing the remote URL provided. Please note that the elements gml:TimePeriod and gmd:MD_RestrictionCode are currently not supported in existing metadata.
      <img src={require("/images/help/en/remote_url_metadata.PNG").default} alt="" title="Link to a remote url" className="img-responsive img-inline-help"/>

1. Select the metadata language in the dropdown menu. All European languages are supported.

1. The Show metadata editor on data set creation toggle switch enables you to control where metadata is entered:
      * Toggle switch is active: Display the metadata editor during data set creation.
      * Toggle switch is deactivated: Don’t display the metadata editor during data set creation. Deactivating the editor means that users don’t have any control over metadata in the initial dataset creation, but can still later on go to the data set -> metadata section to edit the generated metadata.

1. If you have chosen to use the metadata editor, modify the configuration in the text editor as described below. Click &laquo;Save&raquo; when you are finished.

You define the metadata configuration via editing of a [JSON](https://en.wikipedia.org/wiki/JSON) object in an embedded, special-purpose text editor. This editor will automatically check whether the syntax and schema of your configuration file are valid, and provides an assistant for *autofill* rules.


:::caution

In the JSON format, objects are defined by using curly braces {}, lists by using square brackets [], and strings are delimited by using double quotes &quot;&quot;. All these characters appear pairwise to start and end a substructure, and need to be provided in the correct order. If this is not the case, the editor will display an <em>Invalid JSON</em> error.

:::

At the top level, the metadata configuration is a list of category objects. We use category objects to structure inputs that belong to related metadata properties into groups in the user interface.

Every category has a list of field objects. Every field object describes how the input should look and behave in the user interface, what kind of content is allowed, and whether default values or derived values should be inserted. Edit the object to set the following properties:

*	**name:** A unique name for the field that needs to comply to the internal domain model (see below).
*	**label:** The label that should be displayed to the user next to the input field.
*	**description:** A longer, explanatory text for the fields that is displayed on hovering over the label.
*	**type:** The primitive type of data this field expects. One of string, object, array, integer and float.
*	**schema:** The schema or format of the value to be inserted. One of email, enum, geojson, json, wkt and csv. For more information about enumeration fields, see [Working with Enumeration Fields](#working-with-enumeration-fields)
*	**defaultValue:** A fixed default value that will always be assigned to the field.
*	**autofillRule:** A dynamic default value that will be assigned to the field. This value is calculated from the current environment variables such as the user, the organisation context, the data set and the theme. When you click into a row with an ```autofillRule``` property key, an assistant for choosing a value appears in the upper right corner of the editor. For more information about autofill rules, see [Working with Autofill Rules](#working-with-autofill-rules)
*	**required:** Set to ```true``` if a type and schema compliant value must be provided.
*	**editable:** Set to```true``` when the data manager should be able to edit the value in this field.
*	**minOccurs:** Defines the minimum count of valid values for this input.
*	**maxOccurs:** Defines the maximum count of valid values for this input.
*	**targets:** This is a list with mapping rules to external services, such as metadata catalogues. By default, there should always be at least a ```bsp``` target defined. ```bsp``` is what hale»connect needs in order to publish services

The following paths can be used for the ```name``` and ```target``` fields:

*	md-dataset.citation.title
* *md-dataset.identification.\**
    *	md-dataset.identification.abstract
    *	md-dataset.identification.keyword_inspire
    * md-dataset.identification.priorityDatasetDescriptiveKeyword
    * md-dataset.identification.spatialScopeDescriptiveKeyword
    *	md-dataset.identification.keyword_simple
    *	md-dataset.identification.topicCategory
    * md-dataset.dataQualityLineage
    *	md-dataset.identification.geographicExtent.eastBoundLongitude
    *	md-dataset.identification.geographicExtent.northBoundLatitude
    *	md-dataset.identification.geographicExtent.southBoundLatitude
    *	md-dataset.identification.geographicExtent.westBoundLongitude
    *	md-dataset.identification.topicCategory
    *	md-dataset.identification.constraints.useLimitations
    *	md-dataset.identification.constraints.useConstraints
    *	md-dataset.identification.constraints.accessContraints
    *	*md-dataset.identification.contactForResource.\**
        *	md-dataset.identification.contactForResource.individualName
        *	md-dataset.identification.contactForResource.authorityUrl
        *	md-dataset.identification.contactForResource.organisationName
        *	md-dataset.identification.contactForResource.positionName
        *	md-dataset.identification.contactForResource.roleCode
        *	md-dataset.identification.contactForResource.email
        *	md-dataset.identification.contactForResource.deliveryPoint
        *	md-dataset.identification.contactForResource.postalCode
        *	md-dataset.identification.contactForResource.city
        *	md-dataset.identification.contactForResource.administrativeArea
        *	md-dataset.identification.contactForResource.country
        *	md-dataset.identification.contactForResource.voicePhone
        *	md-dataset.identification.contactForResource.facsimile
*	*md-dataset.contactForMetadata.\**
    *	md-dataset.contactForMetadata.individualName
    *	md-dataset.contactForMetadata.authorityUrl
    *	md-dataset.contactForMetadata.organisationName
    *	md-dataset.contactForMetadata.positionName
    *	md-dataset.contactForMetadata.roleCode
    *	md-dataset.contactForMetadata.email
    *	md-dataset.contactForMetadata.deliveryPoint
    *	md-dataset.contactForMetadata.postalCode
    *	md-dataset.contactForMetadata.city
    *	md-dataset.contactForMetadata.administrativeArea
    *	md-dataset.contactForMetadata.country
    *	md-dataset.contactForMetadata.voicePhone
    *	md-dataset.contactForMetadata.facsimile
*	md-dataset.fileidentifier
*	md-dataset.mdIdentifierLocalId
*	md-dataset.mdIdentifierNamespace

#### Example configuration excerpt

    [
        {
            "categoryName": "general",
            "title": "Allgemeine Angaben",
            "name": "general",
            "fields": [
                {
                    "name": "md-dataset.citation.title",
                    "required": true,
                    "minOccurs": 1,
                    "maxOccurs": 1,
                    "comment": "ISO 3.2.1 #360",
                    "label": "Datensatz-Titel",
                    "description": "Bezeichnung, unter der der Datensatz bekannt ist",
                    "type": "string",
                    "schema": null,
                    "defaultValue": null,
                    "autofillRule": "{{dataset.name}}",
                    "editable": true,
                    "targets": {
                        "bsp": "md-dataset.citation.title"
                    }
                },
                {
                    "name": "md-dataset.identification.abstract",
                    "required": true,
                    "minOccurs": 1,
                    "maxOccurs": 1,
                    "comment": "ISO B2.2.1 #24",
                    "label": "Kurzbeschreibung Datensatz",
                    "description": "kurze, beschreibende Zusammenfassung des Datensatzes",
                    "type": "string",
                    "schema": null,
                    "defaultValue": null,
                    "autofillRule": null,
                    "editable": true,
                    "targets": {
                        "bsp": "md-dataset.identification.abstract"
                    }
                }
            ]
        }
    ]


### Working with Enumeration Fields
Enumeration fields enable you to create dropdown menus on fields. Dropdown menus limit the end-user's data entry options to a set of pre-defined values, making metadata entry easier and less error prone. To use an enumeration field, enter "enum" in the schema field. Next, create a new field named "enumValues" at the end of the category object. The values are contained within square brackets []. Each label/value pair is contained within curly brackets {}. Copy the pattern of the "enumValues" field in the code block below to create an enumeration field in the category object of your choice. Replace the values after the colons in the label/value pairs with your own data.

        {
            "name": "md-dataset.contactForMetadata.roleCode",
            "required": true,
            "minOccurs": 1,
            "maxOccurs": 1,
            "comment": "roleCode",
            "label": "Role",
            "description": null,
            "type": "enum",
            "schema": null,
            "defaultValue": "pointOfContact",
            "autofillRule": null,
            "visibility": true,
            "editable": true,
            "enumValues": [
                  {
                      "label": "author",
                      "value": "author"
                  },
                  {
                      "label": "custodian",
                      "value": "custodian"
                  },
                  {
                      "label": "distributor",
                      "value": "distributor"
                  },
                  {
                      "label": "originator",
                      "value": "originator"
                  },
                  {
                      "label": "owner",
                      "value": "owner"
                  },
                  {
                      "label": "pointOfContact",
                      "value": "pointOfContact"
                  },
                  {
                      "label": "principalInvestigator",
                      "value": "principalInvestigator"
                  },
                  {
                      "label": "processor",
                      "value": "processor"
                  },
                  {
                      "label": "publisher",
                      "value": "publisher"
                  },
                  {
                      "label": "resourceProvider",
                      "value": "resourceProvider"
                  },
                  {
                      "label": "user",
                      "value": "user"
                  }
                  ],
                  "targets": {
                      "bsp": "md-dataset.contactForMetadata.roleCode"
                  }
        }

**Metadata configured to use an enumeration field**

The image below displays the configured enumeration field. The dropdown menu is implemented on the "Role" field and it is populated with the user-provided values.

<img src={require("/images/help/en/enumerationValues.png").default} alt="" title="Enumeration values" className="img-responsive img-inline-help"/>

### Working with Autofill Rules
Autofill rules enable the automatic generation of metadata through the use of variables. hale»connect allows you to use data you have previously provided to populate metadata fields. A few examples of these data include the contact details of your organisation, the name of your dataset, or attribute data associated with your dataset's feature types. Additionally, there are autofill rules for accessing the published services of a dataset. They are not executed when filling the metadata of a dataset, but only after its publication. They can be accessed under "publication" in the Autofill assistant. Autofill rules cannot be used for schemas that contain special characters in their name. To create an autofill rule, click on the value next to the ```autofillRule``` property key. The Autofill assistant appears in the top right corner of the Metadata editor. When you click on a value in the Autofill assistant, the autofill rule is inserted at the cursor position.

<img src={require("/images/help/en/autofillAssistant1.png").default} alt="" title="Autofill assistant" className="img-responsive img-inline-help"/>

The Autofill assistant accesses data from across the platform for use in metadata. The data is organized into several categories:

* User
  * The user category provides access to the contact details entered on the user profile page. Custom fields that you add to your user profile are available in the Autofill assistant. If you define custom fields in your user profile, click on "User" in the Autofill assistant and navigate to "Custom fields" to view your fields. Custom fields enable you to create your own key, value pairs for use in metadata. For more information about custom fields, visit the [Add users](../../users-roles-orgs/registration/2015-03-05-users-add.md), and [Create an organisation](../../users-roles-orgs/manage-orgs/2015-03-04-users-add-organisation.md) sections of our help.

* Organisation
  * The organisation category provides access to the contact details entered on the organisaton profile page. Custom fields that you add to your organisations are available in the Autofill assistant. If you define custom fields in your organisation, click on "Organisation" in the Autofill assistant and navigate to "Custom fields" to view your fields. Custom fields enable you to create your own key, value pairs for use in metadata. For more information about custom fields, visit the [Add users](../../users-roles-orgs/registration/2015-03-05-users-add.md), and [Create an organisation](../../users-roles-orgs/manage-orgs/2015-03-04-users-add-organisation.md) sections of our help.

* Dataset
  * The dataset category provides access to the dataset name and geographic bounding box.

* Theme
  * The theme category provides access to theme details including name, description, type and version.

* File Analysis
  * The file analysis category provides access to attribute values in the source data and will vary depending on the attributes available in the source data.

* Publication
  * The publication category enables users to describe different service types. The autofill rule ```{{publication.service.type.title.short}}``` adds the term ```WMS``` or ```WFS``` depending on the type of the published service.

* Copy from source dataset
  * The copy from source dataset category enables users to add metadata values provided in the source metadata to the transformed metadata.

**Populating a keywords field using attribute data**

The Autofill assistant provides several options for you to choose from. To populate a Keywords field using attribute values from your dataset, select "File Analysis" in the Autofill assistant. Next, select "Attribute Values". You should see the name of your dataset appear. Select your dataset and the feature type that contains the attribute values you would like to add as keywords. Finally, select the attribute field that contains your keywords. The autofill rule below is an example of a keywords field populated with attribute data.


        {
            "name": "md-dataset.identification.keyword_simple",
            "required": false,
            "minOccurs": 0,
            "maxOccurs": -1,
            "comment": "keyword_simple",
            "label": "Keywords",
            "description": "Search terms under which the record should be found.",
            "type": "string",
            "schema": null,
            "defaultValue": null,
            "autofillRule":  {% raw %}"{{fileAnalysis.attributeValues.SchoolDistrict.SchoolDistrictFeatures.NAME}}"{% endraw %},
            "visibility": true,
            "editable": true,
            "targets": {
                "bsp": "md-dataset.identification.keyword_simple"
            }
        }


**Metadata configured to use feature type attribute values as keywords**

The image below displays the configured Keywords field as it appears in the dataset metadata. The field is populated with the attribute values selected in the Metadata editor, the school district names.

<img src={require("/images/help/en/AttributeValues.png").default} alt="" title="Attribute values as keywords" className="img-responsive img-inline-help"/>

### Adding multiple default values for one metadata field

hale»connect enables users to provide multiple default values in a theme's metadata configuration. Multiple, comma-separated values can be added within square brackets. In the example below, the keywords "INSPIRE" and "environment" are added to separate ´´´descriptiveKeyword´´´ elements in the dataset metadata.

              {
               "name": "md-dataset.identification.keyword_simple",
               "required": false,
               "minOccurs": 0,
               "maxOccurs": -1,
               "comment": "keyword_simple",
               "label": "Keywords",
               "description": "Search terms which help narrow a full text search and allow for structured keyword search.",
               "type": "string",
               "schema": null,
               "defaultValue": [
                   "INSPIRE",
                   "environment"
                   ],
               "autofillRule": null,
               "visibility": true,
               "editable": true,
               "targets": {
                   "bsp": "md-dataset.identification.keyword_simple"
               }
           }

### Adding multiple autofill rules for one metadata field

hale»connect enables users to provide multiple autofill rules in a theme's metadata configuration. Multiple, comma-separated autofill rules can be added within square brackets. In the example below, the keywords "NAME" and "NUMBER" are added to separate ´´´descriptiveKeyword´´´ elements in the dataset metadata.

            {
             "name": "md-dataset.identification.keyword_simple",
             "required": false,
             "minOccurs": 0,
             "maxOccurs": -1,
             "comment": "keyword_simple",
             "label": "Keywords",
             "description": "Search terms which help narrow a full text search and allow for structured keyword search.",
             "type": "string",
             "schema": null,
             "defaultValue": null
             "autofillRule": [
                 {% raw %}"{{fileAnalysis.attributeValues.SchoolDistrict.SchoolDistrictFeatures.NAME}}"{% endraw %},
                 {% raw %}"{{fileAnalysis.attributeValues.SchoolDistrict.SchoolDistrictFeatures.NUMBER}}"{% endraw %}
                 ],
             "visibility": true,
             "editable": true,
             "targets": {
                 "bsp": "md-dataset.identification.keyword_simple"
             }
          }

### Adding translated values or free text to conditions on access and use

TG Requirement C.18 in the [Technical Guidance for the implementation of INSPIRE dataset and service metadata based on ISO/TS 19139:2007](https://inspire.ec.europa.eu/id/document/tg/metadata-iso19139) requires implementers to describe the conditions for access and use of a described resource. A value from the INSPIRE codelist [ConditionsApplyingToAccessAndUse](https://inspire.ec.europa.eu/metadata-codelist/ConditionsApplyingToAccessAndUse/noConditionsApply) must be selected, or alternatively a free text must be provided. hale»connect provides users the option to select a value from the INSPIRE codelist, select a value from the INSPIRE codelist and provide a translated value, or provide a free text.  

**Metadata configured to use a value from the INSPIRE codelist [ConditionsApplyingToAccessAndUse](https://inspire.ec.europa.eu/metadata-codelist/ConditionsApplyingToAccessAndUse/noConditionsApply)**

The ``defaultValue`` field must be populated with the text from the ``value`` field of the enumeration to set the INSPIRE codelist value as default.

            {
                "name": "md-dataset.identification.constraints.useConstraints",
                "required": false,
                "minOccurs": 0,
                "maxOccurs": -1,
                "comment": "MD_Metadata/identificationInfo//resourceConstraints//useConstraints",
                "label": "Use constraints",
                "description": "Access constraints applied to assure the protection of privacy or intellectual property, and any special restrictions or limitations on obtaining the resource.",
                "type": "enum",
                "schema": null,
                "defaultValue": "noConditionsApply",
                "autofillRule": null,
                "visibility": true,
                "editable": true,
                "openValue": true,
                "enumValues": [
                    {
                        "label": "No conditions apply to access and use",
                        "value": "noConditionsApply"
                    },
                    {
                        "label": "The conditions applying to access and use are unknown",
                        "value": "conditionsUnknown"
                    }
                ],
                "targets": {
                    "bsp": "md-dataset.identification.constraints.useConstraints"
                }
            }

**Metadata configured to use a value from the INSPIRE codelist [ConditionsApplyingToAccessAndUse](https://inspire.ec.europa.eu/metadata-codelist/ConditionsApplyingToAccessAndUse/noConditionsApply) and a translated value**

The ``defaultValue`` field must be populated with the text from the ``value`` field of the enumeration to set the INSPIRE codelist value as default. A translated value can be provided using the following pattern: ``<enumeration value>:<translated value>``.

            {
                "name": "md-dataset.identification.constraints.useConstraints",
                "required": false,
                "minOccurs": 0,
                "maxOccurs": -1,
                "comment": "MD_Metadata/identificationInfo//resourceConstraints//useConstraints",
                "label": "Use constraints",
                "description": "Access constraints applied to assure the protection of privacy or intellectual property, and any special restrictions or limitations on obtaining the resource.",
                "type": "enum",
                "schema": null,
                "defaultValue": "noConditionsApply:Es gelten keine Bedingungen",
                "autofillRule": null,
                "visibility": true,
                "editable": true,
                "openValue": true,
                "enumValues": [
                    {
                        "label": "No conditions apply to access and use",
                        "value": "noConditionsApply"
                    },
                    {
                        "label": "The conditions applying to access and use are unknown",
                        "value": "conditionsUnknown"
                    }
                ],
                "targets": {
                    "bsp": "md-dataset.identification.constraints.useConstraints"
                }
            }

**Metadata configured to use a free text value**

The ``defaultValue`` field can be populated with free text, provided in double quotation marks.

            {
                "name": "md-dataset.identification.constraints.useConstraints",
                "required": false,
                "minOccurs": 0,
                "maxOccurs": -1,
                "comment": "MD_Metadata/identificationInfo//resourceConstraints//useConstraints",
                "label": "Use constraints",
                "description": "Access constraints applied to assure the protection of privacy or intellectual property, and any special restrictions or limitations on obtaining the resource.",
                "type": "enum",
                "schema": null,
                "defaultValue": "my own custom free text value",
                "autofillRule": null,
                "visibility": true,
                "editable": true,
                "openValue": true,
                "enumValues": [
                    {
                        "label": "No conditions apply to access and use",
                        "value": "noConditionsApply"
                    },
                    {
                        "label": "The conditions applying to access and use are unknown",
                        "value": "conditionsUnknown"
                    }
                ],
                "targets": {
                    "bsp": "md-dataset.identification.constraints.useConstraints"
                }
            }

### Working with gmx:anchor elements in string fields

hale»connect supports the use of gmx:anchor encoding for gco:CharacterString elements that exist in hale»connect generated metadata. Markdown style notation can be used to specify a text value and URL. A gmx:Anchor encoded element can be generated using the pattern: \[<text\>\](<link\>)

There are some exceptions where this will not work as expected due to special handling. The ``Namespace (Authority URL)`` string field in the contact for metadata cannot be encoded as gmx:anchor.

In the following example, a gmx:anchor is added as ``defaultValue`` and it is added to the ``enumValues`` field.

            {
              "name": "md-dataset.identification.constraints.useConstraints",
              "required": false,
              "minOccurs": 0,
              "maxOccurs": -1,
              "comment": "MD_Metadata/identificationInfo//resourceConstraints//useConstraints",
              "label": "Use constraints",
              "description": "Access constraints applied to assure the protection of privacy or intellectual property, and any special restrictions or limitations on obtaining the resource.",
              "type": "enum",
              "schema": null,
              "defaultValue": "\[Datenlizenz Deutschland - Zero - Version 2.0\](https://www.govdata.de/dl-de/zero-2-0)",
              "autofillRule": null,
              "visibility": true,
              "editable": true,
              "openValue": true,
              "enumValues": [
                  {
                      "label": "No conditions apply to access and use",
                      "value": "noConditionsApply"
                  },
                  {
                      "label": "The conditions applying to access and use are unknown",
                      "value": "conditionsUnknown"
                  },
                  {
                      "label": "Datenlizenz Deutschland - Zero - Version 2.0",
                      "value": "\[Datenlizenz Deutschland - Zero - Version 2.0\](https://www.govdata.de/dl-de/zero-2-0)"
                  }
              ],



#### Adding JSON values in string fields

JSON values can be added to string fields in the metadata editor. The JSON values must be escaped before they are added to the metadata configuration. In the example below, a JSON value is added as ``defaultValue`` and it is added to the ``enumValues`` field.

            {
               "name": "md-dataset.identification.constraints.useConstraints",
               "required": false,
               "minOccurs": 0,
               "maxOccurs": -1,
               "comment": "MD_Metadata/identificationInfo//resourceConstraints//useConstraints",
               "label": "Use constraints",
               "description": "Access constraints applied to assure the protection of privacy or intellectual property, and any special restrictions or limitations on obtaining the resource.",
               "type": "enum",
               "schema": null,
               "defaultValue": "{\"id\":\"geoNutz/20130319\",\"name\":\"Nutzungsbestimmungen für die Bereitstellung von Geo-daten des Bundes\",\"url\":\"https://sg.geodatenzent-rum.de/web_public/gdz/lizenz/geonutzv.pdf\",\"quelle\":\"Quelle: © GeoBasis-DE / BKG (Jahr des letzten Datenbezugs)\"}",
               "autofillRule": null,
               "visibility": true,
               "editable": true,
               "openValue": true,
               "enumValues": [
                   {
                       "label": "No conditions apply to access and use",
                       "value": "noConditionsApply"
                   },
                   {
                       "label": "The conditions applying to access and use are unknown",
                       "value": "conditionsUnknown"
                   },
                   {
                       "label": "Nutzungsbestimmungen für die Bereitstellung von Geo-daten des Bundes",
                       "value": "{\"id\":\"geoNutz/20130319\",\"name\":\"Nutzungsbestimmungen für die Bereitstellung von Geo-daten des Bundes\",\"url\":\"https://sg.geodatenzent-rum.de/web_public/gdz/lizenz/geonutzv.pdf\",\"quelle\":\"Quelle: © GeoBasis-DE / BKG (Jahr des letzten Datenbezugs)\"}"
                   }
