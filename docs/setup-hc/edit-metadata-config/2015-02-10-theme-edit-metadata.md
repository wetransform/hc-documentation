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
      <img src={require("/images/help/en/generate_metadata.png").default} alt="" title="Generate metadata using hale»connect" className="img-responsive img-inline-help"/>
      * Republish existing metadata- Select this option to upload your existing metadata file during data set creation. Please note that the elements gml:TimePeriod and gmd:MD_RestrictionCode are currently not supported in existing metadata.
      When you choose to republish dataset metadata, hale»connect generates dataset metadata based on a copy of the URL or file upload provided.
      <img src={require("/images/help/en/copy_metadata.png").default} alt="" title="Copy metadata" className="img-responsive img-inline-help"/>
      * Link to existing metadata- Select this option to provide a link to your metadata file during data set creation.
      When you choose to provide a link to existing metadata, hale»connect generates dataset metadata by accessing the remote URL provided. Please note that the elements gml:TimePeriod and gmd:MD_RestrictionCode are currently not supported in existing metadata.
      <img src={require("/images/help/en/remote_url_metadata.png").default} alt="" title="Link to a remote url" className="img-responsive img-inline-help"/>

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
*	**visibility:** Set to ```true``` to display the value to the data manager.
*	**editable:** Set to```true``` when the data manager should be able to edit the value in this field.
*	**minOccurs:** Defines the minimum count of valid values for this input.
*	**maxOccurs:** Defines the maximum count of valid values for this input.
* **openValue** The field is based on an enumeration but allows other values.
* **enumValues** The field contains the values that can be entered via a dropdown menu for that metadata field.
*	**targets:** This is a list with mapping rules to external services, such as metadata catalogues. By default, there should always be at least a ```bsp``` target defined. ```bsp``` is what hale»connect needs in order to publish services

The following paths can be used for the ```name``` and ```target``` fields. The xpaths to the metadata elements are provided here for reference:

<details>
<summary>XPath references</summary>

*	md-dataset.citation.title
   <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:citation/gmd:CI_Citation/gmd:title/gco:CharacterString
*  *md-dataset.identification.\**
    *	md-dataset.identification.abstract
      <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:abstract/gco:CharacterString
    *	md-dataset.identification.keyword_inspire
      <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:descriptiveKeywords/gmd:MD_Keywords/gmd:keyword/gmx:Anchor
    * md-dataset.identification.priorityDatasetDescriptiveKeyword
      <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:descriptiveKeywords/gmd:MD_Keywords/gmd:keyword/gmx:Anchor
    * md-dataset.identification.spatialScopeDescriptiveKeyword
      <br/>XPATH  /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:descriptiveKeywords/gmd:MD_Keywords/gmd:keyword/gmx:Anchor
    *	md-dataset.identification.keyword_simple
      <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:descriptiveKeywords/gmd:MD_Keywords/gmd:keyword/gco:CharacterString
    *	md-dataset.identification.topicCategory
      <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:topicCategory/gmd:MD_TopicCategoryCode
    * md-dataset.dataQualityLineage
      <br/>XPATH /gmd:MD_Metadata/gmd:dataQualityInfo/gmd:DQ_DataQuality/gmd:lineage/gmd:LI_Lineage/gmd:statement/gco:CharacterString
    *	md-dataset.identification.geographicExtent.eastBoundLongitude
      <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:extent/gmd:EX_Extent/gmd:geographicElement/gmd:EX_GeographicBoundingBox/gmd:northBoundLatitude/gco:Decimal
    * md-dataset.identification.scale
      <br/>XPATH /gmd:spatialResolution/gmd:MD_Resolution/gmd:equivalentScale/gmd:MD_RepresentativeFraction/gmd:denominator/gco:Integer
    *	md-dataset.identification.geographicExtent.northBoundLatitude
      <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:extent/gmd:EX_Extent/gmd:geographicElement/gmd:EX_GeographicBoundingBox/gmd:northBoundLatitude/gco:Decimal
    *	md-dataset.identification.geographicExtent.southBoundLatitude
      <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:extent/gmd:EX_Extent/gmd:geographicElement/gmd:EX_GeographicBoundingBox/gmd:southBoundLatitude/gco:Decimal
    *	md-dataset.identification.geographicExtent.westBoundLongitude
      <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:extent/gmd:EX_Extent/gmd:geographicElement/gmd:EX_GeographicBoundingBox/gmd:westBoundLongitude/gco:Decimal
    * md-dataset.identification.geographicExtent.geographicDescriptionIdentifier
      <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:extent/gmd:EX_Extent/gmd:geographicElement/gmd:EX_GeographicDescription/gmd:geographicIdentifier/gmd:MD_Identifier/gmd:code/gmx:Anchor
    * md-dataset.identification.temporalExtent.beginPosition
      <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:extent/gmd:EX_Extent/gmd:temporalElement/gmd:EX_TemporalExtent/gmd:extent/gml:TimePeriod/gml:beginPosition
    * md-dataset.identification.temporalExtent.endPosition
      <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:extent/gmd:EX_Extent/gmd:temporalElement/gmd:EX_TemporalExtent/gmd:extent/gml:TimePeriod/gml:endPosition
    * md-dataset.identification.resourceMaintenance.maintenanceAndUpdateFrequency
      <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:resourceMaintenance/gmd:MD_MaintenanceInformation/gmd:maintenanceAndUpdateFrequency/gmd:MD_MaintenanceFrequencyCode
    * md-dataset.identification.resourceMaintenance.userDefinedFrequency
      <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:resourceMaintenance/gmd:MD_MaintenanceInformation/gmd:userDefinedMaintenanceFrequency/gts:TM_PeriodDuration
    * md-dataset.identification.resourceMaintenance.maintenanceNote
      <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:resourceMaintenance/gmd:MD_MaintenanceInformation/gmd:maintenanceNote/gco:CharacterString
    * md-dataset.identification.purpose
      <br/>XPATH  /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:purpose/gco:CharacterString
    * md-dataset.identification.characterSetCode
      <br/>XPATH  /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:characterSet/gmd:MD_CharacterSetCode
    * md-dataset.citation.otherCitationDetails
      <br/>XPATH  /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:citation/gmd:CI_Citation/gmd:otherCitationDetails/gmx:Anchor
    *	md-dataset.identification.constraints.useLimitations
      <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:resourceConstraints/gmd:MD_LegalConstraints/gmd:useLimitation/gco:CharacterString
    *	md-dataset.identification.constraints.useConstraints
      <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:resourceConstraints/gmd:MD_LegalConstraints/gmd:otherConstraints/gmx:Anchor
    *	md-dataset.identification.constraints.accessContraints
      <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:resourceConstraints/gmd:MD_LegalConstraints/gmd:otherConstraints/gmx:Anchor
    *	*md-dataset.identification.contactForResource.\**
        *	md-dataset.identification.contactForResource.individualName
          <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:individualName/gco:CharacterString
        *	md-dataset.identification.contactForResource.authorityUrl
          <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:onlineResource/gmd:CI_OnlineResource/gmd:linkage/gmd:URL
        *	md-dataset.identification.contactForResource.organisationName
          <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:organisationName/gco:CharacterString
        *	md-dataset.identification.contactForResource.positionName
          <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:positionName/gco:CharacterString
        *	md-dataset.identification.contactForResource.roleCode
          <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:role/gmd:CI_RoleCode
        *	md-dataset.identification.contactForResource.email
          <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:address/gmd:CI_Address/gmd:electronicMailAddress/gco:CharacterString
        *	md-dataset.identification.contactForResource.deliveryPoint
          <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:address/gmd:CI_Address/gmd:deliveryPoint/gmx:Anchor
        *	md-dataset.identification.contactForResource.postalCode
          <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:address/gmd:CI_Address/gmd:postalCode/gco:CharacterString
        *	md-dataset.identification.contactForResource.city
          <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:address/gmd:CI_Address/gmd:city/gco:CharacterString
        *	md-dataset.identification.contactForResource.administrativeArea
          <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:address/gmd:CI_Address/gmd:administrativeArea/gco:CharacterString
        *	md-dataset.identification.contactForResource.country
          <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:address/gmd:CI_Address/gmd:country/gco:CharacterString
        *	md-dataset.identification.contactForResource.voicePhone
          <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:phone/gmd:CI_Telephone/gmd:voice/gco:CharacterString
        *	md-dataset.identification.contactForResource.facsimile
          <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:phone/gmd:CI_Telephone/gmd:facsimile/gco:CharacterString
*	*md-dataset.contactForMetadata.\**
    *	md-dataset.contactForMetadata.individualName
      <br/>XPATH /gmd:MD_Metadata/gmd:contact/gmd:CI_ResponsibleParty/gmd:individualName/gco:CharacterString
    *	md-dataset.contactForMetadata.authorityUrl
      <br/>XPATH /gmd:MD_Metadata/gmd:contact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:onlineResource/gmd:CI_OnlineResource/gmd:linkage/gmd:URL
    *	md-dataset.contactForMetadata.organisationName
      <br/>XPATH /gmd:MD_Metadata/gmd:contact/gmd:CI_ResponsibleParty/gmd:organisationName/gco:CharacterString
    *	md-dataset.contactForMetadata.positionName
      <br/>XPATH /gmd:MD_Metadata/gmd:contact/gmd:CI_ResponsibleParty/gmd:positionName/gco:CharacterString
    *	md-dataset.contactForMetadata.roleCode
      <br/>XPATH /gmd:MD_Metadata/gmd:contact/gmd:CI_ResponsibleParty/gmd:role/gmd:CI_RoleCode
    *	md-dataset.contactForMetadata.email
      <br/>XPATH /gmd:MD_Metadata/gmd:contact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:address/gmd:CI_Address/gmd:electronicMailAddress/gco:CharacterString
    *	md-dataset.contactForMetadata.deliveryPoint
      <br/>XPATH /gmd:MD_Metadata/gmd:contact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:address/gmd:CI_Address/gmd:deliveryPoint/gmx:Anchor
    *	md-dataset.contactForMetadata.postalCode
      <br/>XPATH /gmd:MD_Metadata/gmd:contact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:address/gmd:CI_Address/gmd:postalCode/gco:CharacterString
    *	md-dataset.contactForMetadata.city
      <br/>XPATH /gmd:MD_Metadata/gmd:contact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:address/gmd:CI_Address/gmd:city/gco:CharacterString
    *	md-dataset.contactForMetadata.administrativeArea
      <br/>XPATH /gmd:MD_Metadata/gmd:contact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:address/gmd:CI_Address/gmd:administrativeArea/gco:CharacterString
    *	md-dataset.contactForMetadata.country
      <br/>XPATH /gmd:MD_Metadata/gmd:contact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:address/gmd:CI_Address/gmd:country/gco:CharacterString
    *	md-dataset.contactForMetadata.voicePhone
      <br/>XPATH /gmd:MD_Metadata/gmd:contact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:phone/gmd:CI_Telephone/gmd:voice/gco:CharacterString
    *	md-dataset.contactForMetadata.facsimile
      <br/>XPATH /gmd:MD_Metadata/gmd:contact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:phone/gmd:CI_Telephone/gmd:facsimile/gco:CharacterString
*  md-dataset.transferOptionsProtocol
  <br/>XPATH /gmd:MD_Metadata/gmd:distributionInfo/gmd:MD_Distribution/gmd:transferOptions/gmd:MD_DigitalTransferOptions/gmd:onLine/gmd:CI_OnlineResource/gmd:protocol/gmx:Anchor
* md-dataset.transferOptionsDescription
  <br/>XPATH /gmd:MD_Metadata/gmd:distributionInfo/gmd:MD_Distribution/gmd:transferOptions/gmd:MD_DigitalTransferOptions/gmd:onLine/gmd:CI_OnlineResource/gmd:description/gco:CharacterString
* md-dataset.formatName
  <br/>XPATH  /gmd:MD_Metadata/gmd:distributionInfo/gmd:MD_Distribution/gmd:distributionFormat/gmd:MD_Format/gmd:name/gco:CharacterString
* md-dataset.formatVersion
  <br/>XPATH  /gmd:MD_Metadata/gmd:distributionInfo/gmd:MD_Distribution/gmd:distributionFormat/gmd:MD_Format/gmd:version/gco:CharacterString
* md-dataset.formatSpecification
  <br/>XPATH  /gmd:MD_Metadata/gmd:distributionInfo/gmd:MD_Distribution/gmd:distributionFormat/gmd:MD_Format/gmd:specification/gmx:Anchor
*	md-dataset.fileidentifier
*	md-dataset.mdIdentifierLocalId
  <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:citation/gmd:CI_Citation/gmd:identifier/gmd:MD_Identifier/gmd:code/gmx:Anchor
*	md-dataset.mdIdentifierNamespace
  <br/>XPATH /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:citation/gmd:CI_Citation/gmd:identifier/gmd:MD_Identifier/gmd:code/gmx:Anchor@xlink:href
* md-dataset.hierarchyLevelName
  <br/>XPATH  /gmd:MD_Metadata/gmd:hierarchyLevelName/gmx:Anchor
* md-dataset.customParentIdentifier
  <br/>XPATH  /gmd:MD_Metadata/gmd:parentIdentifier/gco:CharacterString
* md-dataset.isInspireDataset
  <br/>XPATH /gmd:MD_Metadata/gmd:dataQualityInfo/gmd:DQ_DataQuality/gmd:report/gmd:DQ_DomainConsistency/gmd:result/gmd:DQ_ConformanceResult/gmd:pass/gco:Boolean
* md-dataset.referenceSystemInfoCode
  <br/>XPATH /gmd:MD_Metadata/gmd:referenceSystemInfo/gmd:MD_ReferenceSystem/gmd:referenceSystemIdentifier/gmd:RS_Identifier/gmd:code/gco:CharacterString

</details>

<details>
<summary>Example configuration excerpt</summary>

```json

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

```

</details>

<details>
<summary>Example configuration (detailed)</summary>

```json
    [
           {
              "categoryName": "dataset_general",
              "title": "Data set - General",
              "name": "dataset_general",
              "expand": false,
              "fields": [
                 {
                    "name": "md-dataset.citation.title",
                    "required": true,
                    "minOccurs": 1,
                    "maxOccurs": 1,
                    "comment": "ISO 3.2.1 #360",
                    "label": "Title",
                    "description": "Name by which the cited resource is known.",
                    "type": "string",
                    "schema": null,
                    "defaultValue": null,
                    "autofillRule": "{% verbatim %}{{dataset.name}}{% endverbatim %}",
                    "visibility": true,
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
                    "comment": "ISO B2.2.1 #25",
                    "label": "Abstract Dataset",
                    "description": "Brief narrative summary of the content of the resource(s).",
                    "type": "string",
                    "schema": null,
                    "defaultValue": null,
                    "autofillRule": "{% verbatim %}{{dataset.name}}{% endverbatim %}",
                    "visibility": true,
                    "editable": true,
                    "targets": {
                       "bsp": "md-dataset.identification.abstract"
                    }
                 },
                 {
                    "name": "md-dataset.identification.keyword_inspire",
                    "required": true,
                    "minOccurs": 1,
                    "maxOccurs": -1,
                    "comment": "keyword_inspire",
                    "label": "INSPIRE Theme",
                    "description": null,
                    "type": "enum",
                    "schema": null,
                    "defaultValue": null,
                    "autofillRule": null,
                    "visibility": true,
                    "editable": true,
                    "enumValues": [
                       {
                          "label": "Coordinate reference systems",
                          "value": "Annex_1_01_RS"
                       },
                       {
                          "label": "Geographical grid systems",
                          "value": "Annex_1_02_GG"
                       },
                       {
                          "label": "Geographical names",
                          "value": "Annex_1_03_GN"
                       },
                       {
                          "label": "Administrative units",
                          "value": "Annex_1_04_AU"
                       },
                       {
                          "label": "Addresses",
                          "value": "Annex_1_05_AD"
                       },
                       {
                          "label": "Cadastral parcels",
                          "value": "Annex_1_06_CP"
                       },
                       {
                          "label": "Transport networks",
                          "value": "Annex_1_07_TN"
                       },
                       {
                          "label": "Hydrography",
                          "value": "Annex_1_08_HY"
                       },
                       {
                          "label": "Protected sites",
                          "value": "Annex_1_09_PS"
                       },
                       {
                          "label": "Elevation",
                          "value": "Annex_2_01_EL"
                       },
                       {
                          "label": "Land cover",
                          "value": "Annex_2_02_LC"
                       },
                       {
                          "label": "Orthoimagery",
                          "value": "Annex_2_03_OI"
                       },
                       {
                          "label": "Geology",
                          "value": "Annex_2_04_GE"
                       },
                       {
                          "label": "Statistical units",
                          "value": "Annex_3_01_SU"
                       },
                       {
                          "label": "Buildings",
                          "value": "Annex_3_02_BU"
                       },
                       {
                          "label": "Soil",
                          "value": "Annex_3_03_SO"
                       },
                       {
                          "label": "Land use",
                          "value": "Annex_3_04_LU"
                       },
                       {
                          "label": "Human health and safety",
                          "value": "Annex_3_05_HH"
                       },
                       {
                          "label": "Utility and governmental services",
                          "value": "Annex_3_06_US"
                       },
                       {
                          "label": "Environmental monitoring facilities",
                          "value": "Annex_3_07_EF"
                       },
                       {
                          "label": "Production and industrial facilities",
                          "value": "Annex_3_08_PF"
                       },
                       {
                          "label": "Agricultural and aquaculture facilities",
                          "value": "Annex_3_09_AF"
                       },
                       {
                          "label": "Population distribution - demography",
                          "value": "Annex_3_10_PD"
                       },
                       {
                          "label": "Area management/restriction/regulation zones and reporting units",
                          "value": "Annex_3_11_AM"
                       },
                       {
                          "label": "Natural risk zones",
                          "value": "Annex_3_12_NZ"
                       },
                       {
                          "label": "Atmospheric conditions",
                          "value": "Annex_3_13_AC"
                       },
                       {
                          "label": "Meteorological geographical features",
                          "value": "Annex_3_14_MF"
                       },
                       {
                          "label": "Oceanographic geographical features",
                          "value": "Annex_3_15_OF"
                       },
                       {
                          "label": "Sea regions",
                          "value": "Annex_3_16_SR"
                       },
                       {
                          "label": "Bio-geographical regions",
                          "value": "Annex_3_17_BR"
                       },
                       {
                          "label": "Habitats and biotopes",
                          "value": "Annex_3_18_HB"
                       },
                       {
                          "label": "Species distribution",
                          "value": "Annex_3_19_SD"
                       },
                       {
                          "label": "Energy resources",
                          "value": "Annex_3_20_ER"
                       },
                       {
                          "label": "Mineral resources",
                          "value": "Annex_3_21_MR"
                       }
                    ],
                    "targets": {
                       "bsp": "md-dataset.identification.keyword_inspire"
                    }
                 },
                 {
                    "name": "md-dataset.identification.priorityDatasetDescriptiveKeyword",
                    "required": false,
                    "minOccurs": 0,
                    "maxOccurs": -1,
                    "comment": "priorityDatasetDescriptiveKeyword",
                    "label": "INSPIRE priority datasets",
                    "description": null,
                    "type": "enum",
                    "schema": null,
                    "defaultValue": null,
                    "autofillRule": null,
                    "visibility": true,
                    "editable": true,
                    "enumValues": [
                       {
                          "label": "Agglomerations (Noise Directive)",
                          "value": "[Agglomerations (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Agglomerations-dir-2002-49)"
                       },
                       {
                          "label": "Population (Noise Directive)",
                          "value": "[Population (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Population-dir-2002-49)"
                       },
                       {
                          "label": "Areas of Potential significant flood risk (Floods Directive)",
                          "value": "[Areas of Potential significant flood risk (Floods Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/AreasOfPotentialSignificantFloodRisk-dir-2007-60)"
                       },
                       {
                          "label": "Flooded areas (Floods Directive)",
                          "value": "[Flooded areas (Floods Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/FloodedAreas-dir-2007-60)"
                       },
                       {
                          "label": "Flood risk zones (Floods Directive)",
                          "value": "[Flood risk zones (Floods Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/FloodRiskZones-dir-2007-60)"
                       },
                       {
                          "label": "Monitoring stations (Marine Strategy Framework Directive)",
                          "value": "[Monitoring stations (Marine Strategy Framework Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/MonitoringStations-dir-2008-56)"
                       },
                       {
                          "label": "Sensitive areas, less sensitive areas and catchments (Urban Waste-Water Treatment\nDirective)",
                          "value": "[Sensitive areas, less sensitive areas and catchments (Urban Waste-Water\nTreatment Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/SensitiveAreasLessSensitiveAreasAndCatchments-dir-1991-271)"
                       },
                       {
                          "label": "Nitrates vulnerable zones (Nitrates Directive)",
                          "value": "[Nitrates vulnerable zones (Nitrates Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/NitratesVulnerableZones-dir-1991-676)"
                       },
                       {
                          "label": "Directive 2000/60/EC",
                          "value": "[Directive 2000/60/EC](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/dir-2000-60)"
                       },
                       {
                          "label": "River basin districts (Water Framework Directive)",
                          "value": "[River basin districts (Water Framework Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/RiverBasinDistricts-dir-2000-60)"
                       },
                       {
                          "label": "River basin districts sub-units (Water Framework Directive)",
                          "value": "[River basin districts sub-units (Water Framework Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/RiverBasinDistrictsSubUnits-dir-2000-60)"
                       },
                       {
                          "label": "Water bodies (Water Framework Directive)",
                          "value": "[Water bodies (Water Framework Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/WaterBodies-dir-2000-60)"
                       },
                       {
                          "label": "Surface water bodies (Water Framework Directive)",
                          "value": "[Surface water bodies (Water Framework Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/SurfaceWaterBodies-dir-2000-60)"
                       },
                       {
                          "label": "Lakes (Water Framework Directive)",
                          "value": "[Lakes (Water Framework Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Lakes-dir-2000-60)"
                       },
                       {
                          "label": "Rivers (Water Framework Directive)",
                          "value": "[Rivers (Water Framework Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Rivers-dir-2000-60)"
                       },
                       {
                          "label": "Transitional waters (Water Framework Directive)",
                          "value": "[Transitional waters (Water Framework Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/TransitionalWaters-dir-2000-60)"
                       },
                       {
                          "label": "Coastal waters (Water Framework Directive)",
                          "value": "[Coastal waters (Water Framework Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/CoastalWaters-dir-2000-60)"
                       },
                       {
                          "label": "Groundwater bodies (Water Framework Directive)",
                          "value": "[Groundwater bodies (Water Framework Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/GroundwaterBodies-dir-2000-60)"
                       },
                       {
                          "label": "River network (Water Framework Directive)",
                          "value": "[River network (Water Framework Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/RiverNetwork-dir-2000-60)"
                       },
                       {
                          "label": "Protected areas (Water Framework Directive)",
                          "value": "[Protected areas (Water Framework Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/ProtectedAreas-dir-2000-60)"
                       },
                       {
                          "label": "Nitrate vulnerable zones - nutrient sensitive areas (Water Framework Directive)",
                          "value": "[Nitrate vulnerable zones - nutrient sensitive areas (Water Framework Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/NitrateVulnerableZones-NutrientSensitiveAreas-dir-2000-60)"
                       },
                       {
                          "label": "Urban waste water sensitive areas - nutrient sensitive areas (Water Framework\nDirective)",
                          "value": "[Urban waste water sensitive areas - nutrient sensitive areas (Water Framework\nDirective)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/UrbanWasteWaterSensitiveAreas-NutrientSensitiveAreas-dir-2000-60)"
                       },
                       {
                          "label": "Bathing waters - recreational waters (Water Framework Directive)",
                          "value": "[Bathing waters - recreational waters (Water Framework Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/BathingWaters-RecreationalWaters-dir-2000-60)"
                       },
                       {
                          "label": "Drinking water protection areas (Water Framework Directive)",
                          "value": "[Drinking water protection areas (Water Framework Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/DrinkingWaterProtectionAreas-dir-2000-60)"
                       },
                       {
                          "label": "Water dependent Natura 2000 sites (Water Framework Directive)",
                          "value": "[Water dependent Natura 2000 sites (Water Framework Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/WaterDependentNatura2000Sites-dir-2000-60)"
                       },
                       {
                          "label": "Designated waters (Water Framework Directive)",
                          "value": "[Designated waters (Water Framework Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/DesignatedWaters-dir-2000-60)"
                       },
                       {
                          "label": "Protection of economically significant aquatic species - shellfish designated\nwaters (Water Framework Directive)",
                          "value": "[Protection of economically significant aquatic species - shellfish designated\nwaters (Water Framework Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/ProtectionOfEconomicallySignificantAquaticSpecies-ShellfishDesignatedWaters-dir-2000-60)"
                       },
                       {
                          "label": "Protection of economically significant aquatic species - freshwater fish\ndesignated waters (Water Framework Directive)",
                          "value": "[Protection of economically significant aquatic species - freshwater fish\ndesignated waters (Water Framework Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/ProtectionOfEconomicallySignificantAquaticSpecies-FreshwaterFishDesignatedWaters-dir-2000-60)"
                       },
                       {
                          "label": "Other protected areas (Water Framework Directive)",
                          "value": "[Other protected areas (Water Framework Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/OtherProtectedAreas-dir-2000-60)"
                       },
                       {
                          "label": "Monitoring stations (Water Framework Directive)",
                          "value": "[Monitoring stations (Water Framework Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/MonitoringStations-dir-2000-60)"
                       },
                       {
                          "label": "Directive 2002/49/EC",
                          "value": "[Directive 2002/49/EC](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/dir-2002-49)"
                       },
                       {
                          "label": "Major roads, railways and air transport network (Noise Directive)",
                          "value": "[Major roads, railways and air transport network (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/MajorRoadsRailwaysAndAirTransportNetwork-dir-2002-49)"
                       },
                       {
                          "label": "Major roads (Noise Directive)",
                          "value": "[Major roads (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/MajorRoads-dir-2002-49)"
                       },
                       {
                          "label": "Major railways (Noise Directive)",
                          "value": "[Major railways (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/MajorRailways-dir-2002-49)"
                       },
                       {
                          "label": "Major air transport (Noise Directive)",
                          "value": "[Major air transport (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/MajorAirTransport-dir-2002-49)"
                       },
                       {
                          "label": "Agglomerations - population (Noise Directive)",
                          "value": "[Agglomerations - population (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Agglomerations-Population-dir-2002-49)"
                       },
                       {
                          "label": "Population - densely populated built-up areas (Noise Directive)",
                          "value": "[Population - densely populated built-up areas (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Population-DenselyPopulatedBuiltUpAreas-dir-2002-49)"
                       },
                       {
                          "label": "Environmental noise exposure (Noise Directive)",
                          "value": "[Environmental noise exposure (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/EnvironmentalNoiseExposure-dir-2002-49)"
                       },
                       {
                          "label": "Major roads noise exposure delineation (Noise Directive)",
                          "value": "[Major roads noise exposure delineation (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/MajorRoadsNoiseExposureDelineation-dir-2002-49)"
                       },
                       {
                          "label": "Major roads noise exposure delineation day-evening-night (Noise Directive)",
                          "value": "[Major roads noise exposure delineation day-evening-night (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/MajorRoadsNoiseExposureDelineationDEN-dir-2002-49)"
                       },
                       {
                          "label": "Major roads noise exposure delineation - night (Noise Directive)",
                          "value": "[Major roads noise exposure delineation - night (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/MajorRoadsNoiseExposureDelineationNight-dir-2002-49)"
                       },
                       {
                          "label": "Major railways noise exposure delineation (Noise Directive)",
                          "value": "[Major railways noise exposure delineation (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/MajorRailwaysNoiseExposureDelineation-dir-2002-49)"
                       },
                       {
                          "label": "Major railways noise exposure delineation day-evening-night (Noise Directive)",
                          "value": "[Major railways noise exposure delineation day-evening-night (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/MajorRailwaysNoiseExposureDelineationDEN-dir-2002-49)"
                       },
                       {
                          "label": "Major railways noise exposure delineation - night (Noise Directive)",
                          "value": "[Major railways noise exposure delineation - night (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/MajorRailwaysNoiseExposureDelineationNight-dir-2002-49)"
                       },
                       {
                          "label": "Major airports noise exposure delineation (Noise Directive)",
                          "value": "[Major airports noise exposure delineation (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/MajorAirportsNoiseExposureDelineation-dir-2002-49)"
                       },
                       {
                          "label": "Major airports noise exposure delineation day-evening-night (Noise Directive)",
                          "value": "[Major airports noise exposure delineation day-evening-night (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/MajorAirportsNoiseExposureDelineationDEN-dir-2002-49)"
                       },
                       {
                          "label": "Major airports noise exposure delineation - night (Noise Directive)",
                          "value": "[Major airports noise exposure delineation - night (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/MajorAirportsNoiseExposureDelineationNight-dir-2002-49)"
                       },
                       {
                          "label": "Agglomerations - roads noise exposure delineation (Noise Directive)",
                          "value": "[Agglomerations - roads noise exposure delineation (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Agglomerations-RoadsNoiseExposureDelineation-dir-2002-49)"
                       },
                       {
                          "label": "Agglomerations - roads noise exposure delineation day-evening-night (Noise\nDirective)",
                          "value": "[Agglomerations - roads noise exposure delineation day-evening-night (Noise\nDirective)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Agglomerations-RoadsNoiseExposureDelineationDEN-dir-2002-49)"
                       },
                       {
                          "label": "Agglomerations - roads noise exposure delineation - night (Noise Directive)",
                          "value": "[Agglomerations - roads noise exposure delineation - night (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Agglomerations-RoadsNoiseExposureDelineationNight-dir-2002-49)"
                       },
                       {
                          "label": "Agglomerations - railways noise exposure delineation (Noise Directive)",
                          "value": "[Agglomerations - railways noise exposure delineation (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Agglomerations-RailwaysNoiseExposureDelineation-dir-2002-49)"
                       },
                       {
                          "label": "Agglomerations - railways noise exposure delineation day-evening-night (Noise\nDirective)",
                          "value": "[Agglomerations - railways noise exposure delineation day-evening-night\n(Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Agglomerations-RailwaysNoiseExposureDelineationDEN-dir-2002-49)"
                       },
                       {
                          "label": "Agglomerations - railways noise exposure delineation - night (Noise Directive)",
                          "value": "[Agglomerations - railways noise exposure delineation - night (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Agglomerations-RailwaysNoiseExposureDelineationNight-dir-2002-49)"
                       },
                       {
                          "label": "Agglomerations - aircraft noise exposure delineation (Noise Directive)",
                          "value": "[Agglomerations - aircraft noise exposure delineation (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Agglomerations-AircraftNoiseExposureDelineation-dir-2002-49)"
                       },
                       {
                          "label": "Agglomerations - aircraft noise exposure delineation day-evening-night (Noise\nDirective)",
                          "value": "[Agglomerations - aircraft noise exposure delineation day-evening-night\n(Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Agglomerations-AircraftNoiseExposureDelineationDEN-dir-2002-49)"
                       },
                       {
                          "label": "Agglomerations - aircraft noise exposure delineation - night (Noise Directive)",
                          "value": "[Agglomerations - aircraft noise exposure delineation - night (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Agglomerations-AircraftNoiseExposureDelineationNight-dir-2002-49)"
                       },
                       {
                          "label": "Agglomerations - industrial noise exposure delineation (Noise Directive)",
                          "value": "[Agglomerations - industrial noise exposure delineation (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Agglomerations-IndustrialNoiseExposureDelineation-dir-2002-49)"
                       },
                       {
                          "label": "Agglomerations - industrial noise exposure delineation day-evening-night\n(Noise Directive)",
                          "value": "[Agglomerations - industrial noise exposure delineation day-evening-night\n(Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Agglomerations-IndustrialNoiseExposureDelineationDEN-dir-2002-49)"
                       },
                       {
                          "label": "Agglomerations – industrial noise exposure delineation - night (Noise Directive)",
                          "value": "[Agglomerations – industrial noise exposure delineation - night (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Agglomerations-IndustrialNoiseExposureDelineationNight-dir-2002-49)"
                       },
                       {
                          "label": "Agglomerations - noise exposure delineation (Noise Directive)",
                          "value": "[Agglomerations - noise exposure delineation (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Agglomerations-NoiseExposureDelineation-dir-2002-49)"
                       },
                       {
                          "label": "Agglomerations - noise exposure delineation day-evening-night (Noise Directive)",
                          "value": "[Agglomerations - noise exposure delineation day-evening-night (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Agglomerations-NoiseExposureDelineationDEN-dir-2002-49)"
                       },
                       {
                          "label": "Agglomerations - noise exposure delineation - night (Noise Directive)",
                          "value": "[Agglomerations - noise exposure delineation - night (Noise Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Agglomerations-NoiseExposureDelineationNight-dir-2002-49)"
                       },
                       {
                          "label": "Directive 2006/21/EC",
                          "value": "[Directive 2006/21/EC](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/dir-2006-21)"
                       },
                       {
                          "label": "Facilities for managing extractive waste (Extractive Waste Directive)",
                          "value": "[Facilities for managing extractive waste (Extractive Waste Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/FacilitiesForManagingExtractiveWaste-dir-2006-21)"
                       },
                       {
                          "label": "Directive 2006/7/EC",
                          "value": "[Directive 2006/7/EC](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/dir-2006-7)"
                       },
                       {
                          "label": "Bathing water sites (Bathing Water Directive)",
                          "value": "[Bathing water sites (Bathing Water Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/BathingWaterSites-dir-2006-7)"
                       },
                       {
                          "label": "Directive 2007/60/EC",
                          "value": "[Directive 2007/60/EC](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/dir-2007-60)"
                       },
                       {
                          "label": "Preliminary flood risk assessment (Floods Directive)",
                          "value": "[Preliminary flood risk assessment (Floods Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/PreliminaryFloodRiskAssessment-dir-2007-60)"
                       },
                       {
                          "label": "Preliminary flood risk assessment - observed events (Floods Directive)",
                          "value": "[Preliminary flood risk assessment - observed events (Floods Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/PreliminaryFloodRiskAssessment-ObservedEvents-dir-2007-60)"
                       },
                       {
                          "label": "Preliminary flood risk assessment - potential future events (Floods Directive)",
                          "value": "[Preliminary flood risk assessment - potential future events (Floods Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/PreliminaryFloodRiskAssessment-PotentialFutureEvents-dir-2007-60)"
                       },
                       {
                          "label": "Flood hazard areas low probability scenario (Floods Directive)",
                          "value": "[Flood hazard areas low probability scenario (Floods Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/FloodHazardAreasLowProbabilityScenario-dir-2007-60)"
                       },
                       {
                          "label": "Flood hazard areas medium probability scenario (Floods Directive)",
                          "value": "[Flood hazard areas medium probability scenario (Floods Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/FloodHazardAreasMediumProbabilityScenario-dir-2007-60)"
                       },
                       {
                          "label": "Flood hazard areas high probability scenario (Floods Directive)",
                          "value": "[Flood hazard areas high probability scenario (Floods Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/FloodHazardAreasHighProbabilityScenario-dir-2007-60)"
                       },
                       {
                          "label": "Flood risk zones low probability scenario (Floods Directive)",
                          "value": "[Flood risk zones low probability scenario (Floods Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/FloodRiskZonesLowProbabilityScenario-dir-2007-60)"
                       },
                       {
                          "label": "Flood risk zones medium probability scenario (Floods Directive)",
                          "value": "[Flood risk zones medium probability scenario (Floods Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/FloodRiskZonesMediumProbabilityScenario-dir-2007-60)"
                       },
                       {
                          "label": "Flood risk zones high probability scenario (Floods Directive)",
                          "value": "[Flood risk zones high probability scenario (Floods Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/FloodRiskZonesHighProbabilityScenario-dir-2007-60)"
                       },
                       {
                          "label": "Management units (Floods Directive)",
                          "value": "[Management units (Floods Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/ManagementUnits-dir-2007-60)"
                       },
                       {
                          "label": "Directive 2008/50/EC",
                          "value": "[Directive 2008/50/EC](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/dir-2008-50)"
                       },
                       {
                          "label": "Management zones and agglomerations (Air Quality Directive)",
                          "value": "[Management zones and agglomerations (Air Quality Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/ManagementZonesAndAgglomerations-dir-2008-50)"
                       },
                       {
                          "label": "Management zones (Air Quality Directive)",
                          "value": "[Management zones (Air Quality Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/ManagementZones-dir-2008-50)"
                       },
                       {
                          "label": "Agglomerations (Air Quality Directive)",
                          "value": "[Agglomerations (Air Quality Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Agglomerations-dir-2008-50)"
                       },
                       {
                          "label": "Model areas (Air Quality Directive)",
                          "value": "[Model areas (Air Quality Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/ModelAreas-dir-2008-50)"
                       },
                       {
                          "label": "Monitoring stations (Air Quality Directive)",
                          "value": "[Monitoring stations (Air Quality Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/MonitoringStations-dir-2008-50)"
                       },
                       {
                          "label": "Measurement and modelling data (Air Quality Directive)",
                          "value": "[Measurement and modelling data (Air Quality Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/MeasurementAndModellingData-dir-2008-50)"
                       },
                       {
                          "label": "Directive 2008/56/EC",
                          "value": "[Directive 2008/56/EC](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/dir-2008-56)"
                       },
                       {
                          "label": "Marine regions and units (Marine Strategy Framework Directive)",
                          "value": "[Marine regions and units (Marine Strategy Framework Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/MarineRegionsAndUnits-dir-2008-56)"
                       },
                       {
                          "label": "Marine sub-regions (Marine Strategy Framework Directive)",
                          "value": "[Marine sub-regions (Marine Strategy Framework Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/MarineSubRegions-dir-2008-56)"
                       },
                       {
                          "label": "Marine assessment units (Marine Strategy Framework Directive)",
                          "value": "[Marine assessment units (Marine Strategy Framework Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/MarineAssessmentUnits-dir-2008-56)"
                       },
                       {
                          "label": "Directive 2009/147/EC",
                          "value": "[Directive 2009/147/EC](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/dir-2009-147)"
                       },
                       {
                          "label": "Pan-European biogeographical regions (Birds Directive)",
                          "value": "[Pan-European biogeographical regions (Birds Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/PanEuropeanBiogeographicalRegions-dir-2009-147)"
                       },
                       {
                          "label": "Bird species distribution and range (Birds Directive)",
                          "value": "[Bird species distribution and range (Birds Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/BirdSpeciesDistributionAndRange-dir-2009-147)"
                       },
                       {
                          "label": "Bird species distribution (Birds Directive)",
                          "value": "[Bird species distribution (Birds Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/BirdSpeciesDistribution-dir-2009-147)"
                       },
                       {
                          "label": "Bird species distribution - sensitive (Birds Directive)",
                          "value": "[Bird species distribution - sensitive (Birds Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/BirdSpeciesDistribution-Sensitive-dir-2009-147)"
                       },
                       {
                          "label": "Birds range (Birds Directive)",
                          "value": "[Birds range (Birds Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/BirdsRange-dir-2009-147)"
                       },
                       {
                          "label": "Birds range - sensitive (Birds Directive)",
                          "value": "[Birds range - sensitive (Birds Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/BirdsRange-Sensitive-dir-2009-147)"
                       },
                       {
                          "label": "Natura 2000 sites (Birds Directive)",
                          "value": "[Natura 2000 sites (Birds Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Natura2000Sites-dir-2009-147)"
                       },
                       {
                          "label": "Directive 2010/75/EU",
                          "value": "[Directive 2010/75/EU](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/dir-2010-75)"
                       },
                       {
                          "label": "Industrial sites - EU Registry (Industrial Emissions Directive)",
                          "value": "[Industrial sites - EU Registry (Industrial Emissions Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/IndustrialSites-EURegistry-dir-2010-75)"
                       },
                       {
                          "label": "Installations (Industrial Emissions Directive)",
                          "value": "[Installations (Industrial Emissions Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Installations-dir-2010-75)"
                       },
                       {
                          "label": "Large combustion plants (Industrial Emissions Directive)",
                          "value": "[Large combustion plants (Industrial Emissions Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/LargeCombustionPlants-dir-2010-75)"
                       },
                       {
                          "label": "Emissions (Industrial Emissions Directive)",
                          "value": "[Emissions (Industrial Emissions Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Emissions-dir-2010-75)"
                       },
                       {
                          "label": "Directive 2012/18/EU",
                          "value": "[Directive 2012/18/EU](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/dir-2012-18)"
                       },
                       {
                          "label": "Establishments involving dangerous substances (SEVESO III Directive)",
                          "value": "[Establishments involving dangerous substances (SEVESO III Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/EstablishmentsInvolvingDangerousSubstances-dir-2012-18)"
                       },
                       {
                          "label": "Directive 86/278/EEC",
                          "value": "[Directive 86/278/EEC](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/dir-1986-278)"
                       },
                       {
                          "label": "Agricultural facilities receiving sludge (Sewage Sludge Directive)",
                          "value": "[Agricultural facilities receiving sludge (Sewage Sludge Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/AgriculturalFacilitiesReceivingSludge-dir-1986-278)"
                       },
                       {
                          "label": "Agricultural sites where sludge is deposited (Sewage Sludge Directive)",
                          "value": "[Agricultural sites where sludge is deposited (Sewage Sludge Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/AgriculturalSitesWhereSludgeIsDeposited-dir-1986-278)"
                       },
                       {
                          "label": "Directive 91/271/EEC",
                          "value": "[Directive 91/271/EEC](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/dir-1991-271)"
                       },
                       {
                          "label": "Agglomerations (Urban Waste Water Treatment Directive)",
                          "value": "[Agglomerations (Urban Waste Water Treatment Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Agglomerations-dir-1991-271)"
                       },
                       {
                          "label": "Urban waste-water treatment plants (Urban Waste Water Treatment Directive)",
                          "value": "[Urban waste-water treatment plants (Urban Waste Water Treatment Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/UrbanWasteWaterTreatmentPlants-dir-1991-271)"
                       },
                       {
                          "label": "Discharge points to receiving waters (Urban Waste Water Treatment Directive)",
                          "value": "[Discharge points to receiving waters (Urban Waste Water Treatment Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/DischargePointsToReceivingWaters-dir-1991-271)"
                       },
                       {
                          "label": "Sensitive areas (Urban Waste-Water Treatment Directive)",
                          "value": "[Sensitive areas (Urban Waste-Water Treatment Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/SensitiveAreas-dir-1991-271)"
                       },
                       {
                          "label": "Less sensitive areas (Urban Waste-Water Treatment Directive)",
                          "value": "[Less sensitive areas (Urban Waste-Water Treatment Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/LessSensitiveAreas-dir-1991-271)"
                       },
                       {
                          "label": "Sensitive area catchments (Urban Waste-Water Treatment Directive)",
                          "value": "[Sensitive area catchments (Urban Waste-Water Treatment Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/SensitiveAreaCatchments-dir-1991-271)"
                       },
                       {
                          "label": "Directive 91/676/EEC",
                          "value": "[Directive 91/676/EEC](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/dir-1991-676)"
                       },
                       {
                          "label": "Directive 92/43/EEC",
                          "value": "[Directive 92/43/EEC](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/dir-1992-43)"
                       },
                       {
                          "label": "Pan-European biogeographical regions (Habitats Directive)",
                          "value": "[Pan-European biogeographical regions (Habitats Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Pan-EuropeanBiogeographicalRegions-dir-1992-43)"
                       },
                       {
                          "label": "Habitat types and species distribution and range (Habitats Directive)",
                          "value": "[Habitat types and species distribution and range (Habitats Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/HabitatTypesAndSpeciesDistributionAndRange-dir-1992-43)"
                       },
                       {
                          "label": "Habitat types distribution (Habitats Directive)",
                          "value": "[Habitat types distribution (Habitats Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/HabitatTypesDistribution-dir-1992-43)"
                       },
                       {
                          "label": "Habitat types distribution - sensitive (Habitats Directive)",
                          "value": "[Habitat types distribution - sensitive (Habitats Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/HabitatTypesDistributionSensitive-dir-1992-43)"
                       },
                       {
                          "label": "Habitat types range (Habitats Directive)",
                          "value": "[Habitat types range (Habitats Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/HabitatTypesRange-dir-1992-43)"
                       },
                       {
                          "label": "Species distribution (Habitats Directive)",
                          "value": "[Species distribution (Habitats Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/SpeciesDistribution-dir-1992-43)"
                       },
                       {
                          "label": "Species distribution sensitive (Habitats Directive)",
                          "value": "[Species distribution sensitive (Habitats Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/SpeciesTypesDistributionSensitive-dir-1992-43)"
                       },
                       {
                          "label": "Species range (Habitats Directive)",
                          "value": "[Species range (Habitats Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/SpeciesRange-dir-1992-43)"
                       },
                       {
                          "label": "Natura 2000 sites (Habitats Directive)",
                          "value": "[Natura 2000 sites (Habitats Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Natura2000Sites-dir-1992-43)"
                       },
                       {
                          "label": "Directive 98/83/EC",
                          "value": "[Directive 98/83/EC](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/dir-1998-83)"
                       },
                       {
                          "label": "Drinking water supply zones (Drinking Water Directive)",
                          "value": "[Drinking water supply zones (Drinking Water Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/DrinkingWaterSupplyZones-dir-1998-83)"
                       },
                       {
                          "label": "Large water supply zones (Drinking Water Directive)",
                          "value": "[Large water supply zones (Drinking Water Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/LargeWaterSupplyZones-dir-1998-83)"
                       },
                       {
                          "label": "Small water supply zones (Drinking Water Directive)",
                          "value": "[Small water supply zones (Drinking Water Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/SmallWaterSupplyZones-dir-1998-83)"
                       },
                       {
                          "label": "Drinking water abstraction points (Drinking Water Directive)",
                          "value": "[Drinking water abstraction points (Drinking Water Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/DrinkingWaterAbstractionPoints-dir-1998-83)"
                       },
                       {
                          "label": "EEA Annual Work Programme",
                          "value": "[EEA Annual Work Programme](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/EEA-AWP)"
                       },
                       {
                          "label": "Nationally designated areas - CDDA",
                          "value": "[Nationally designated areas - CDDA](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/NationallyDesignatedAreasCDDA)"
                       },
                       {
                          "label": "National legislation",
                          "value": "[National legislation](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/national-legislation)"
                       },
                       {
                          "label": "National biogeographical regions",
                          "value": "[National biogeographical regions](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/NationalBiogeographicalRegions)"
                       },
                       {
                          "label": "National biogeographical regions (Habitats Directive)",
                          "value": "[National biogeographical regions (Habitats Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/NationalBiogeographicalRegions-dir-1992-43)"
                       },
                       {
                          "label": "National biogeographical regions (Birds Directive)",
                          "value": "[National biogeographical regions (Birds Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/NationalBiogeographicalRegions-dir-2009-147)"
                       },
                       {
                          "label": "Recommendation 2014/70/EU",
                          "value": "[Recommendation 2014/70/EU](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/reco-2014-70)"
                       },
                       {
                          "label": "Boreholes (Recommendation on hydraulic fracturing)",
                          "value": "[Boreholes (Recommendation on hydraulic fracturing)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/Boreholes-reco-2014-70)"
                       },
                       {
                          "label": "Boreholes for hydraulic fracturing (Recommendation on hydraulic fracturing)",
                          "value": "[Boreholes for hydraulic fracturing (Recommendation on hydraulic fracturing)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/BoreholesForHydraulicFracturing-reco-2014-70)"
                       },
                       {
                          "label": "Regulation (EU) 2017/852",
                          "value": "[Regulation (EU) 2017/852](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/reg-2017-852)"
                       },
                       {
                          "label": "Mercury storage facilities (Mercury Regulation)",
                          "value": "[Mercury storage facilities (Mercury Regulation)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/MercuryStorageFacilities-reg-2017-852)"
                       },
                       {
                          "label": "Regulation (EC) 166/2006",
                          "value": "[Regulation (EC) 166/2006](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/reg-2006-166)"
                       },
                       {
                          "label": "Industrial sites - EU Registry (European Pollutant Release and Transfer Register)",
                          "value": "[Industrial sites - EU Registry (European Pollutant Release and Transfer\nRegister)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/IndustrialSites-EURegistry-reg-2006-166)"
                       },
                       {
                          "label": "Sites and facilities (European Pollutant Release and Transfer Register)",
                          "value": "[Sites and facilities (European Pollutant Release and Transfer Register)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/SitesAndFacilities-reg-2006-166)"
                       },
                       {
                          "label": "Actual pollutant releases (European Pollutant Release and Transfer Register)",
                          "value": "[Actual pollutant releases (European Pollutant Release and Transfer Register)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/ActualPollutantReleases-reg-2006-166)"
                       },
                       {
                          "label": "Regulation (EU) 1143/2014",
                          "value": "[Regulation (EU) 1143/2014](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/reg-2014-1143)"
                       },
                       {
                          "label": "Invasive alien species distribution (Invasive Alien Species Directive)",
                          "value": "[Invasive alien species distribution (Invasive Alien Species Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/InvasiveAlienSpeciesDistribution-reg-2014-1143)"
                       },
                       {
                          "label": "Monitoring stations (Nitrates Directive)",
                          "value": "[Monitoring stations (Nitrates Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/MonitoringStations-dir-1991-676)"
                       },
                       {
                          "label": "Marine regions (Marine Strategy Framework Directive)",
                          "value": "[Marine regions (Marine Strategy Framework Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/MarineRegions-dir-2008-56)"
                       },
                       {
                          "label": "Marine reporting units (Marine Strategy Framework Directive)",
                          "value": "[Marine reporting units (Marine Strategy Framework Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/MSFDReportingUnits-dir-2008-56)"
                       },
                       {
                          "label": "Directive 1999/31/EC",
                          "value": "[Directive 1999/31/EC](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/dir-1999-31)"
                       },
                       {
                          "label": "Exempted islands and isolated settlements (Landfill of Waste Directive)",
                          "value": "[Exempted islands and isolated settlements (Landfill of Waste Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/ExemptedIslandsAndIsolatedSettlements-dir-1999-31)"
                       },
                       {
                          "label": "Landfill of waste sites (Landfill of Waste Directive)",
                          "value": "[Landfill of waste sites (Landfill of Waste Directive)](http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/LandfillOfWasteSites-dir-1999-31)"
                       }
                    ]
                 },
                 {
                    "name": "md-dataset.identification.spatialScopeDescriptiveKeyword",
                    "required": false,
                    "minOccurs": 0,
                    "maxOccurs": 1,
                    "comment": "spatialScopeDescriptiveKeyword",
                    "label": "Spatial scope",
                    "description": null,
                    "type": "enum",
                    "schema": null,
                    "defaultValue": null,
                    "autofillRule": null,
                    "visibility": true,
                    "editable": true,
                    "enumValues": [
                       {
                          "label": "National",
                          "value": "[National](http://inspire.ec.europa.eu/metadata-codelist/SpatialScope/national)"
                       },
                       {
                          "label": "Regional",
                          "value": "[Regional](http://inspire.ec.europa.eu/metadata-codelist/SpatialScope/regional)"
                       },
                       {
                          "label": "Local",
                          "value": "[Local](http://inspire.ec.europa.eu/metadata-codelist/SpatialScope/local)"
                       },
                       {
                          "label": "Global",
                          "value": "[Global](http://inspire.ec.europa.eu/metadata-codelist/SpatialScope/global)"
                       },
                       {
                          "label": "European",
                          "value": "[European](http://inspire.ec.europa.eu/metadata-codelist/SpatialScope/european)"
                       }
                    ]
                 },
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
                    "defaultValue": null,
                    "autofillRule": null,
                    "visibility": true,
                    "editable": true,
                    "targets": {
                       "bsp": "md-dataset.identification.keyword_simple"
                    }
                 },
                 {
                    "name": "md-dataset.identification.topicCategory",
                    "required": true,
                    "minOccurs": 1,
                    "maxOccurs": -1,
                    "comment": "ISO B.5.27 topicCategory",
                    "label": "Thematic Classification",
                    "description": "Topic categories in accordance with EN ISO 19115.",
                    "type": "enum",
                    "schema": null,
                    "defaultValue": null,
                    "autofillRule": null,
                    "visibility": true,
                    "editable": true,
                    "enumValues": [
                       {
                          "label": "Biota",
                          "value": "BIOTA"
                       },
                       {
                          "label": "Boundaries",
                          "value": "BOUNDARIES"
                       },
                       {
                          "label": "Climatology Meteorology Atmosphere",
                          "value": "CLIMATOLOGY_METEOROLOGY_ATMOSPHERE"
                       },
                       {
                          "label": "Economy",
                          "value": "ECONOMY"
                       },
                       {
                          "label": "Elevation",
                          "value": "ELEVATION"
                       },
                       {
                          "label": "Environment",
                          "value": "ENVIRONMENT"
                       },
                       {
                          "label": "Farming",
                          "value": "FARMING"
                       },
                       {
                          "label": "Geosciences",
                          "value": "GEOSCIENTIFIC_INFORMATION"
                       },
                       {
                          "label": "Health",
                          "value": "HEALTH"
                       },
                       {
                          "label": "Imagery",
                          "value": "IMAGERY_BASE_MAPS_EARTH_COVER"
                       },
                       {
                          "label": "Inland Waters",
                          "value": "INLAND_WATERS"
                       },
                       {
                          "label": "Intelligence and Military",
                          "value": "INTELLIGENCE_MILITARY"
                       },
                       {
                          "label": "Location",
                          "value": "LOCATION"
                       },
                       {
                          "label": "Oceans",
                          "value": "OCEANS"
                       },
                       {
                          "label": "Planning, Cadastre",
                          "value": "PLANNING_CADASTRE"
                       },
                       {
                          "label": "Society",
                          "value": "SOCIETY"
                       },
                       {
                          "label": "Structures",
                          "value": "STRUCTURE"
                       },
                       {
                          "label": "Transportation",
                          "value": "TRANSPORTATION"
                       },
                       {
                          "label": "Utilities and communication",
                          "value": "UTILITIES_COMMUNICATION"
                       }
                    ],
                    "targets": {
                       "bsp": "md-dataset.identification.topicCategory"
                    }
                 },
                 {
                    "name": "md-dataset.dataQualityLineage",
                    "required": true,
                    "minOccurs": 1,
                    "maxOccurs": 1,
                    "comment": "dataQualityLineage",
                    "label": "Data Lineage",
                    "description": "The history of a data set, and the life cycle from collection and acquisition through compilation and derivation to its current form, in accordance with EN ISO 19101.",
                    "type": "string",
                    "schema": null,
                    "defaultValue": null,
                    "autofillRule": null,
                    "visibility": true,
                    "editable": true,
                    "targets": {
                       "bsp": "md-dataset.dataQualityLineage"
                    }
                 },
                 {
                    "name": "md-dataset.identification.scale",
                    "required": false,
                    "minOccurs": 0,
                    "maxOccurs": 1,
                    "comment": "spatial resolution",
                    "label": "Scale 1:X",
                    "description": "Scale denominator",
                    "type": "string",
                    "schema": null,
                    "defaultValue": null,
                    "autofillRule": null,
                    "visibility": true,
                    "editable": true,
                    "targets": {
                       "bsp": "md-dataset.identification.scale"
                    }
                 },
                 {
                    "name": "md-dataset.isInspireDataset",
                    "required": true,
                    "minOccurs": 1,
                    "maxOccurs": 1,
                    "comment": "generates keyword inspireidentifieziert if enabled, should be preset\nby theme-manager.",
                    "label": "INSPIRE Data set",
                    "description": "When selected, the dataset is published as INSPIRE identified.",
                    "type": "boolean",
                    "schema": null,
                    "defaultValue": true,
                    "autofillRule": null,
                    "visibility": true,
                    "editable": false,
                    "targets": {
                       "bsp": "md-dataset.isInspireDataset"
                    }
                 }
              ]
           },
           {
              "categoryName": "dataset_geographicExtent",
              "title": "Data set - Geographic extent",
              "name": "dataset_geographicExtent",
              "expand": false,
              "fields": [
                 {
                    "name": "md-dataset.identification.geographicExtent.eastBoundLongitude",
                    "required": true,
                    "minOccurs": 1,
                    "maxOccurs": 1,
                    "comment": "eastBoundLongitude",
                    "label": "eastBoundLongitude",
                    "description": null,
                    "type": "float",
                    "schema": null,
                    "defaultValue": null,
                    "autofillRule": "{% verbatim %}{{dataset.eastBoundLongitude}}{% endverbatim %}",
                    "visibility": true,
                    "editable": true,
                    "targets": {
                       "bsp": "md-dataset.identification.geographicExtent.eastBoundLongitude"
                    }
                 },
                 {
                    "name": "md-dataset.identification.geographicExtent.northBoundLatitude",
                    "required": true,
                    "minOccurs": 1,
                    "maxOccurs": 1,
                    "comment": "northBoundLatitude",
                    "label": "northBoundLatitude",
                    "description": null,
                    "type": "float",
                    "schema": null,
                    "defaultValue": null,
                    "autofillRule": "{% verbatim %}{{dataset.northBoundLatitude}}{% endverbatim %}",
                    "visibility": true,
                    "editable": true,
                    "targets": {
                       "bsp": "md-dataset.identification.geographicExtent.northBoundLatitude"
                    }
                 },
                 {
                    "name": "md-dataset.identification.geographicExtent.southBoundLatitude",
                    "required": true,
                    "minOccurs": 1,
                    "maxOccurs": 1,
                    "comment": "southBoundLatitude",
                    "label": "southBoundLatitude",
                    "description": null,
                    "type": "float",
                    "schema": null,
                    "defaultValue": null,
                    "autofillRule": "{% verbatim %}{{dataset.southBoundLatitude}}{% endverbatim %}",
                    "visibility": true,
                    "editable": true,
                    "targets": {
                       "bsp": "md-dataset.identification.geographicExtent.southBoundLatitude"
                    }
                 },
                 {
                    "name": "md-dataset.identification.geographicExtent.westBoundLongitude",
                    "required": true,
                    "minOccurs": 1,
                    "maxOccurs": 1,
                    "comment": "westBoundLongitude",
                    "label": "westBoundLongitude",
                    "description": null,
                    "type": "float",
                    "schema": null,
                    "defaultValue": null,
                    "autofillRule": "{% verbatim %}{{dataset.westBoundLongitude}}{% endverbatim %}",
                    "visibility": true,
                    "editable": true,
                    "targets": {
                       "bsp": "md-dataset.identification.geographicExtent.westBoundLongitude"
                    }
                 },
                 {
                    "name": "md-dataset.identification.geographicExtent.geographicDescriptionIdentifier",
                    "required": false,
                    "minOccurs": 0,
                    "maxOccurs": 1,
                    "comment": "md-dataset.identification.geographicExtent.geographicDescriptionIdentifier",
                    "label": "Geographic identifier",
                    "description": "",
                    "type": "string",
                    "schema": null,
                    "defaultValue": null,
                    "autofillRule": null,
                    "visibility": true,
                    "editable": true,
                    "targets": {
                       "bsp": "md-dataset.identification.geographicExtent.geographicDescriptionIdentifier"
                    }
                 }
              ]
           },
           {
              "categoryName": "dataset_temportalExtent",
              "title": "Time range",
              "name": "dataset_temportalExtent",
              "expand": false,
              "fields": [
                 {
                    "name": "md-dataset.identification.temporalExtent.beginPosition",
                    "required": false,
                    "minOccurs": 0,
                    "maxOccurs": -1,
                    "comment": "beginPosition",
                    "label": "Start date",
                    "description": "The time range defines the time period that the content of the resource covers.",
                    "type": "date",
                    "schema": null,
                    "defaultValue": null,
                    "autofillRule": null,
                    "visibility": true,
                    "editable": true,
                    "targets": {
                       "bsp": "md-dataset.identification.temporalExtent.beginPosition"
                    }
                 },
                 {
                    "name": "md-dataset.identification.temporalExtent.endPosition",
                    "required": false,
                    "minOccurs": 0,
                    "maxOccurs": -1,
                    "comment": "endPosition",
                    "label": "End date",
                    "description": "The time range defines the time period that the content of the resource covers.",
                    "type": "date",
                    "schema": null,
                    "defaultValue": null,
                    "autofillRule": null,
                    "visibility": true,
                    "editable": true,
                    "targets": {
                       "bsp": "md-dataset.identification.temporalExtent.endPosition"
                    }
                 },
                 {
                    "name": "md-dataset.referenceSystemInfoCode",
                    "required": false,
                    "minOccurs": 0,
                    "maxOccurs": -1,
                    "comment": "md-dataset.referenceSystemInfoCode",
                    "label": "Time reference system",
                    "description": "Identification of the time reference system(s) used in the dataset.",
                    "type": "string",
                    "schema": null,
                    "defaultValue": null,
                    "autofillRule": null,
                    "visibility": true,
                    "editable": true,
                    "targets": {
                       "bsp": "md-dataset.referenceSystemInfoCode"
                    }
                 }
              ]
           },
           {
              "categoryName": "dataset_contactForMetadata",
              "title": "Data set - Contact for metadata",
              "name": "dataset_contactForMetadata",
              "expand": false,
              "fields": [
                 {
                    "name": "md-dataset.contactForMetadata.individualName",
                    "required": true,
                    "minOccurs": 1,
                    "maxOccurs": 1,
                    "comment": "ISO B.3.2.2 - individualName",
                    "label": "Name",
                    "description": null,
                    "type": "string",
                    "schema": null,
                    "defaultValue": null,
                    "autofillRule": "{% verbatim %}{{user.fullName}}{% endverbatim %}",
                    "visibility": true,
                    "editable": true,
                    "targets": {
                       "bsp": "md-dataset.contactForMetadata.individualName"
                    }
                 },
                 {
                    "name": "md-dataset.contactForMetadata.authorityUrl",
                    "required": true,
                    "minOccurs": 1,
                    "maxOccurs": 1,
                    "comment": "authorityUrl für INSPIRE-Extended-Capabilities",
                    "label": "Namespace (Authority URL)",
                    "description": null,
                    "type": "string",
                    "schema": null,
                    "defaultValue": null,
                    "autofillRule": "{% verbatim %}{{organisation.web}}{% endverbatim %}",
                    "visibility": true,
                    "editable": true,
                    "targets": {
                       "bsp": "md-dataset.contactForMetadata.authorityUrl"
                    }
                 },
                 {
                    "name": "md-dataset.contactForMetadata.organisationName",
                    "required": true,
                    "minOccurs": 1,
                    "maxOccurs": 1,
                    "comment": "ISO B.3.2.2 - organisationName",
                    "label": "Organisation Name",
                    "description": null,
                    "type": "string",
                    "schema": null,
                    "defaultValue": null,
                    "autofillRule": "{% verbatim %}{{organisation.name}}{% endverbatim %}",
                    "visibility": true,
                    "editable": true,
                    "targets": {
                       "bsp": "md-dataset.contactForMetadata.organisationName"
                    }
                 },
                 {
                    "name": "md-dataset.contactForMetadata.positionName",
                    "required": false,
                    "minOccurs": 0,
                    "maxOccurs": 1,
                    "comment": "positionName",
                    "label": "Position",
                    "description": null,
                    "type": "string",
                    "schema": null,
                    "defaultValue": null,
                    "autofillRule": null,
                    "visibility": true,
                    "editable": true,
                    "targets": {
                       "bsp": "md-dataset.contactForMetadata.positionName"
                    }
                 },
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
                 },
                 {
                    "name": "md-dataset.contactForMetadata.email",
                    "required": true,
                    "minOccurs": 1,
                    "maxOccurs": 1,
                    "comment": "email",
                    "label": "Email",
                    "description": null,
                    "type": "string",
                    "schema": "email",
                    "defaultValue": null,
                    "autofillRule": "{% verbatim %}{{user.email}}{% endverbatim %}",
                    "visibility": true,
                    "editable": true,
                    "targets": {
                       "bsp": "md-dataset.contactForMetadata.email"
                    }
                 },
                 {
                    "name": "md-dataset.contactForMetadata.deliveryPoint",
                    "required": false,
                    "minOccurs": 0,
                    "maxOccurs": 1,
                    "comment": "ISO B.3.2.2 deliveryPoint",
                    "label": "Street",
                    "description": null,
                    "type": "string",
                    "schema": null,
                    "defaultValue": null,
                    "autofillRule": "{% verbatim %}{{organisation.street}}{% endverbatim %}",
                    "visibility": true,
                    "editable": true,
                    "targets": {
                       "bsp": "md-dataset.contactForMetadata.deliveryPoint"
                    }
                 },
                 {
                    "name": "md-dataset.contactForMetadata.postalCode",
                    "required": false,
                    "minOccurs": 0,
                    "maxOccurs": 1,
                    "comment": "ISO B.3.2.2 - postalcode",
                    "label": "Post code",
                    "description": null,
                    "type": "string",
                    "schema": null,
                    "defaultValue": null,
                    "autofillRule": "{% verbatim %}{{organisation.zip}}{% endverbatim %}",
                    "visibility": true,
                    "editable": true,
                    "targets": {
                       "bsp": "md-dataset.contactForMetadata.postalCode"
                    }
                 },
                 {
                    "name": "md-dataset.contactForMetadata.city",
                    "required": false,
                    "minOccurs": 0,
                    "maxOccurs": 1,
                    "comment": "ISO B.3.2.2##382 city",
                    "label": "City",
                    "description": null,
                    "type": "string",
                    "schema": null,
                    "defaultValue": null,
                    "autofillRule": "{% verbatim %}{{organisation.city}}{% endverbatim %}",
                    "visibility": true,
                    "editable": true,
                    "targets": {
                       "bsp": "md-dataset.contactForMetadata.city"
                    }
                 },
                 {
                    "name": "md-dataset.contactForMetadata.administrativeArea",
                    "required": false,
                    "minOccurs": 0,
                    "maxOccurs": 1,
                    "comment": "ISO B.3.2.2##383 administrativeArea",
                    "label": "Administrative Area",
                    "description": "",
                    "type": "string",
                    "schema": null,
                    "defaultValue": null,
                    "autofillRule": "{% verbatim %}{{organisation.state}}{% endverbatim %}",
                    "visibility": true,
                    "editable": true,
                    "targets": {
                       "bsp": "md-dataset.contactForMetadata.administrativeArea"
                    }
                 },
                 {
                    "name": "md-dataset.contactForMetadata.country",
                    "required": false,
                    "minOccurs": 0,
                    "maxOccurs": 1,
                    "comment": "country",
                    "label": "Country",
                    "description": null,
                    "type": "string",
                    "schema": null,
                    "defaultValue": null,
                    "autofillRule": "{% verbatim %}{{organisation.country}}{% endverbatim %}",
                    "visibility": true,
                    "editable": true,
                    "targets": {
                       "bsp": "md-dataset.contactForMetadata.country"
                    }
                 },
                 {
                    "name": "md-dataset.contactForMetadata.voicePhone",
                    "required": false,
                    "minOccurs": 0,
                    "maxOccurs": 1,
                    "comment": "ISO B.3.2.3 - voicePhone",
                    "label": "Phone",
                    "description": null,
                    "type": "string",
                    "schema": null,
                    "defaultValue": null,
                    "autofillRule": "{% verbatim %}{{user.phone}}{% endverbatim %}",
                    "visibility": true,
                    "editable": true,
                    "targets": {
                       "bsp": "md-dataset.contactForMetadata.voicePhone"
                    }
                 },
                 {
                    "name": "md-dataset.contactForMetadata.facsimile",
                    "required": false,
                    "minOccurs": 0,
                    "maxOccurs": 1,
                    "comment": "ISO B.3.2.2 facsimile",
                    "label": "Facsimile",
                    "description": null,
                    "type": "string",
                    "schema": null,
                    "defaultValue": null,
                    "autofillRule": null,
                    "visibility": true,
                    "editable": true,
                    "targets": {
                       "bsp": "md-dataset.contactForMetadata.facsimile"
                    }
                 }
              ]
           },
           {
              "categoryName": "dataset_contactForResource",
              "title": "Data set - Contact for Data set",
              "name": "dataset_contactForResource",
              "expand": false,
              "fields": [
                 {
                    "name": "md-dataset.identification.contactForResource.individualName",
                    "required": true,
                    "minOccurs": 1,
                    "maxOccurs": 1,
                    "comment": "ISO B.3.2.2 - individualName",
                    "label": "Name",
                    "description": null,
                    "type": "string",
                    "schema": null,
                    "defaultValue": null,
                    "autofillRule": "{% verbatim %}{{user.fullName}}{% endverbatim %}",
                    "visibility": true,
                    "editable": true,
                    "targets": {
                       "bsp": "md-dataset.identification.contactForResource.individualName"
                    }
                 },
                 {
                    "name": "md-dataset.identification.contactForResource.authorityUrl",
                    "required": true,
                    "minOccurs": 1,
                    "maxOccurs": 1,
                    "comment": "authorityUrl für INSPIRE-Extended-Capabilities",
                    "label": "Namespace (Authority URL)",
                    "description": null,
                    "type": "string",
                    "schema": null,
                    "defaultValue": null,
                    "autofillRule": "{% verbatim %}{{organisation.web}}{% endverbatim %}",
                    "visibility": true,
                    "editable": true,
                    "targets": {
                       "bsp": "md-dataset.identification.contactForResource.authorityUrl"
                    }
                 },
                 {
                    "name": "md-dataset.identification.contactForResource.organisationName",
                    "required": true,
                    "minOccurs": 1,
                    "maxOccurs": 1,
                    "comment": "ISO B.3.2.2 - organisationName",
                    "label": "Organisation name",
                    "description": null,
                    "type": "string",
                    "schema": null,
                    "defaultValue": null,
                    "autofillRule": "{% verbatim %}{{organisation.name}}{% endverbatim %}",
                    "visibility": true,
                    "editable": true,
                    "targets": {
                       "bsp": "md-dataset.identification.contactForResource.organisationName"
                    }
                 },
                 {
                    "name": "md-dataset.identification.contactForResource.positionName",
                    "required": false,
                    "minOccurs": 0,
                    "maxOccurs": 1,
                    "comment": "positionName",
                    "label": "Position",
                    "description": "Position or function of the responsible person",
                    "type": "string",
                    "schema": null,
                    "defaultValue": null,
                    "autofillRule": null,
                    "visibility": true,
                    "editable": true,
                    "targets": {
                       "bsp": "md-dataset.identification.contactForResource.positionName"
                    }
                 },
                 {
                    "name": "md-dataset.identification.contactForResource.roleCode",
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
                       "bsp": "md-dataset.identification.contactForResource.roleCode"
                    }
                 },
                 {
                    "name": "md-dataset.identification.contactForResource.email",
                    "required": true,
                    "minOccurs": 1,
                    "maxOccurs": 1,
                    "comment": "email",
                    "label": "Email",
                    "description": null,
                    "type": "string",
                    "schema": "email",
                    "defaultValue": null,
                    "autofillRule": "{% verbatim %}{{user.email}}{% endverbatim %}",
                    "visibility": true,
                    "editable": true,
                    "targets": {
                       "bsp": "md-dataset.identification.contactForResource.email"
                    }
                 },
                 {
                    "name": "md-dataset.identification.contactForResource.deliveryPoint",
                    "required": false,
                    "minOccurs": 0,
                    "maxOccurs": 1,
                    "comment": "ISO B.3.2.2 deliveryPoint",
                    "label": "Street",
                    "description": null,
                    "type": "string",
                    "schema": null,
                    "defaultValue": null,
                    "autofillRule": "{% verbatim %}{{organisation.street}}{% endverbatim %}",
                    "visibility": true,
                    "editable": true,
                    "targets": {
                       "bsp": "md-dataset.identification.contactForResource.deliveryPoint"
                    }
                 },
                 {
                    "name": "md-dataset.identification.contactForResource.postalCode",
                    "required": false,
                    "minOccurs": 0,
                    "maxOccurs": 1,
                    "comment": "ISO B.3.2.2 - postalcode",
                    "label": "Postal code",
                    "description": null,
                    "type": "string",
                    "schema": null,
                    "defaultValue": null,
                    "autofillRule": "{% verbatim %}{{organisation.zip}}{% endverbatim %}",
                    "visibility": true,
                    "editable": true,
                    "targets": {
                       "bsp": "md-dataset.identification.contactForResource.postalCode"
                    }
                 },
                 {
                    "name": "md-dataset.identification.contactForResource.city",
                    "required": false,
                    "minOccurs": 0,
                    "maxOccurs": 1,
                    "comment": "ISO B.3.2.2##382 city",
                    "label": "City",
                    "description": null,
                    "type": "string",
                    "schema": null,
                    "defaultValue": null,
                    "autofillRule": "{% verbatim %}{{organisation.city}}{% endverbatim %}",
                    "visibility": true,
                    "editable": true,
                    "targets": {
                       "bsp": "md-dataset.identification.contactForResource.city"
                    }
                 },
                 {
                    "name": "md-dataset.identification.contactForResource.administrativeArea",
                    "required": false,
                    "minOccurs": 0,
                    "maxOccurs": 1,
                    "comment": "ISO B.3.2.2##383 administrativeArea",
                    "label": "Administrative Area",
                    "description": null,
                    "type": "string",
                    "schema": null,
                    "defaultValue": null,
                    "autofillRule": "{% verbatim %}{{organisation.state}}{% endverbatim %}",
                    "visibility": true,
                    "editable": true,
                    "targets": {
                       "bsp": "md-dataset.identification.contactForResource.administrativeArea"
                    }
                 },
                 {
                    "name": "md-dataset.identification.contactForResource.country",
                    "required": false,
                    "minOccurs": 0,
                    "maxOccurs": 1,
                    "comment": "country",
                    "label": "Country",
                    "description": null,
                    "type": "string",
                    "schema": null,
                    "defaultValue": null,
                    "autofillRule": "{% verbatim %}{{organisation.country}}{% endverbatim %}",
                    "visibility": true,
                    "editable": true,
                    "targets": {
                       "bsp": "md-dataset.identification.contactForResource.country"
                    }
                 },
                 {
                    "name": "md-dataset.identification.contactForResource.voicePhone",
                    "required": false,
                    "minOccurs": 0,
                    "maxOccurs": 1,
                    "comment": "ISO B.3.2.3 - voicePhone",
                    "label": "Phone",
                    "description": null,
                    "type": "string",
                    "schema": null,
                    "defaultValue": null,
                    "autofillRule": "{% verbatim %}{{user.phone}}{% endverbatim %}",
                    "visibility": true,
                    "editable": true,
                    "targets": {
                       "bsp": "md-dataset.identification.contactForResource.voicePhone"
                    }
                 },
                 {
                    "name": "md-dataset.identification.contactForResource.facsimile",
                    "required": false,
                    "minOccurs": 0,
                    "maxOccurs": 1,
                    "comment": "ISO B.3.2.2 facsimile",
                    "label": "Facsimile",
                    "description": null,
                    "type": "string",
                    "schema": null,
                    "defaultValue": null,
                    "autofillRule": null,
                    "visibility": true,
                    "editable": true,
                    "targets": {
                       "bsp": "md-dataset.identification.contactForResource.facsimile"
                    }
                 }
              ]
           },
           {
              "categoryName": "dataset_resourceMaintenance",
              "title": "Maintenance and updates",
              "name": "dataset_resourceMaintenance",
              "expand": false,
              "fields": [
                 {
                    "name": "md-dataset.identification.resourceMaintenance.maintenanceAndUpdateFrequency",
                    "required": true,
                    "minOccurs": 1,
                    "maxOccurs": 1,
                    "comment": "maintenanceAndUpdateFrequency",
                    "label": "Frequency of maintenance and updates",
                    "description": "Information about the frequency of updates.",
                    "type": "enum",
                    "schema": null,
                    "defaultValue": null,
                    "autofillRule": null,
                    "visibility": true,
                    "editable": true,
                    "enumValues": [
                       {
                          "label": "Continual",
                          "value": "continual"
                       },
                       {
                          "label": "Daily",
                          "value": "daily"
                       },
                       {
                          "label": "Weekly",
                          "value": "weekly"
                       },
                       {
                          "label": "Fortnightly",
                          "value": "fortnightly"
                       },
                       {
                          "label": "Monthly",
                          "value": "monthly"
                       },
                       {
                          "label": "Quarterly",
                          "value": "quarterly"
                       },
                       {
                          "label": "Biannually",
                          "value": "biannually"
                       },
                       {
                          "label": "Annually",
                          "value": "annually"
                       },
                       {
                          "label": "As Needed",
                          "value": "asNeeded"
                       },
                       {
                          "label": "Irregular",
                          "value": "irregular"
                       },
                       {
                          "label": "Not Planned",
                          "value": "notPlanned"
                       },
                       {
                          "label": "Unknown",
                          "value": "unknown"
                       }
                    ],
                    "targets": {
                       "bsp": "md-dataset.identification.resourceMaintenance.maintenanceAndUpdateFrequency"
                    }
                 },
                 {
                    "name": "md-dataset.identification.resourceMaintenance.userDefinedFrequency",
                    "required": false,
                    "minOccurs": 0,
                    "maxOccurs": 1,
                    "comment": "userDefinedFrequency",
                    "label": "User defined frequency",
                    "description": "User defined maintenance frequency (must be a valid notation for the XML duration type)",
                    "type": "string",
                    "schema": null,
                    "defaultValue": null,
                    "autofillRule": null,
                    "visibility": true,
                    "editable": true,
                    "targets": {
                       "bsp": "md-dataset.identification.resourceMaintenance.userDefinedFrequency"
                    }
                 },
                 {
                    "name": "md-dataset.identification.resourceMaintenance.maintenanceNote",
                    "required": false,
                    "minOccurs": 0,
                    "maxOccurs": -1,
                    "comment": "maintenanceNote",
                    "label": "Maintenance and update note",
                    "description": "Information regarding special resource maintenance requirements.",
                    "type": "string",
                    "schema": null,
                    "defaultValue": null,
                    "autofillRule": null,
                    "visibility": true,
                    "editable": true,
                    "targets": {
                       "bsp": "md-dataset.identification.resourceMaintenance.maintenanceNote"
                    }
                 }
              ]
           },
           {
              "categoryName": "dataset_more",
              "title": "Data set - More information",
              "name": "dataset_more",
              "expand": false,
              "fields": [
                 {
                    "name": "md-dataset.mdIdentifierLocalId",
                    "required": false,
                    "minOccurs": 0,
                    "maxOccurs": 1,
                    "comment": "MDIdentifier.code.localId",
                    "label": "Dataset Identifier (MDIdentifier.code.localId)",
                    "description": "",
                    "type": "string",
                    "schema": null,
                    "defaultValue": null,
                    "autofillRule": null,
                    "visibility": true,
                    "editable": false,
                    "targets": {
                       "bsp": "md-dataset.mdIdentifierLocalId"
                    }
                 },
                 {
                    "name": "md-dataset.mdIdentifierNamespace",
                    "required": true,
                    "minOccurs": 1,
                    "maxOccurs": 1,
                    "comment": "MDIdentifier.code.namespace",
                    "label": "Dataset Identifier (namespace)",
                    "description": null,
                    "type": "string",
                    "schema": null,
                    "defaultValue": "haleconnect.com",
                    "autofillRule": null,
                    "visibility": true,
                    "editable": true,
                    "targets": {
                       "bsp": "md-dataset.mdIdentifierNamespace"
                    }
                 },
                 {
                    "name": "md-dataset.customParentIdentifier",
                    "required": false,
                    "minOccurs": 0,
                    "maxOccurs": 1,
                    "comment": "Handle with care because this interferes with parent identifiers for series",
                    "label": "The identifier of the parent metadata record",
                    "description": "Unique identifier of the parent metadata record. For example, if I describe a dataset, the identifier of the parent metadata record is the UUID of the metadata record of the dataset to which the dataset belongs.",
                    "type": "string",
                    "schema": null,
                    "defaultValue": null,
                    "autofillRule": null,
                    "visibility": true,
                    "editable": true,
                    "targets": {
                       "bsp": "md-dataset.customParentIdentifier"
                    }
                 },
                 {
                    "name": "md-dataset.identification.purpose",
                    "required": false,
                    "minOccurs": 0,
                    "maxOccurs": 1,
                    "comment": "md-dataset.identification.purpose",
                    "label": "Purpose",
                    "description": "A summary of the intentions with which the resource(s) were created.",
                    "type": "string",
                    "schema": null,
                    "defaultValue": null,
                    "autofillRule": null,
                    "visibility": true,
                    "editable": true,
                    "targets": {
                       "bsp": "md-dataset.identification.purpose"
                    }
                 },
                 {
                    "name": "md-dataset.hierarchyLevelName",
                    "required": false,
                    "minOccurs": 0,
                    "maxOccurs": -1,
                    "comment": "md-dataset.hierarchyLevelName",
                    "label": "Harvest to the EU geoportal",
                    "description": "The record will be harvested on the European INSPIRE geoportal.",
                    "type": "string",
                    "schema": null,
                    "defaultValue": null,
                    "autofillRule": null,
                    "visibility": true,
                    "editable": true,
                    "targets": {
                       "bsp": "md-dataset.hierarchyLevelName"
                    }
                 },
                 {
                    "name": "md-dataset.identification.characterSetCode",
                    "required": false,
                    "minOccurs": 0,
                    "maxOccurs": -1,
                    "comment": "md-dataset.identification.characterSetCode",
                    "label": "Character encoding",
                    "description": "The character encoding used in the dataset.",
                    "type": "enum",
                    "schema": null,
                    "defaultValue": null,
                    "autofillRule": null,
                    "visibility": true,
                    "editable": true,
                    "enumValues": [
                       {
                          "label": "ucs2",
                          "value": "ucs2"
                       },
                       {
                          "label": "ucs4",
                          "value": "ucs4"
                       },
                       {
                          "label": "utf7",
                          "value": "utf7,"
                       },
                       {
                          "label": "utf8",
                          "value": "utf8"
                       },
                       {
                          "label": "utf16",
                          "value": "utf16"
                       },
                       {
                          "label": "8859part1",
                          "value": "8859part1"
                       },
                       {
                          "label": "8859part2",
                          "value": "8859part2"
                       },
                       {
                          "label": "8859part3",
                          "value": "8859part3"
                       },
                       {
                          "label": "8859part4",
                          "value": "8859part4"
                       },
                       {
                          "label": "8859part5",
                          "value": "8859part5"
                       },
                       {
                          "label": "8859part6",
                          "value": "8859part6"
                       },
                       {
                          "label": "8859part7",
                          "value": "8859part7"
                       },
                       {
                          "label": "8859part8",
                          "value": "8859part8"
                       },
                       {
                          "label": "8859part9",
                          "value": "8859part9"
                       },
                       {
                          "label": "8859part10",
                          "value": "8859part10"
                       },
                       {
                          "label": "8859part11",
                          "value": "8859part11"
                       },
                       {
                          "label": "8859part13",
                          "value": "8859part13"
                       },
                       {
                          "label": "8859part14",
                          "value": "8859part14"
                       },
                       {
                          "label": "8859part15",
                          "value": "8859part15"
                       },
                       {
                          "label": "8859part16",
                          "value": "8859part16"
                       },
                       {
                          "label": "jis",
                          "value": "jis"
                       },
                       {
                          "label": "shiftJIS",
                          "value": "shiftJIS"
                       },
                       {
                          "label": "eucJP",
                          "value": "eucJP"
                       },
                       {
                          "label": "usAscii",
                          "value": "usAscii"
                       },
                       {
                          "label": "ebcdic",
                          "value": "ebcdic"
                       },
                       {
                          "label": "eucKR",
                          "value": "eucKR"
                       },
                       {
                          "label": "big5",
                          "value": "big5"
                       },
                       {
                          "label": "GB2312",
                          "value": "GB2312"
                       }
                    ],
                    "targets": {
                       "bsp": "md-dataset.identification.characterSetCode"
                    }
                 },
                 {
                    "name": "md-dataset.citation.otherCitationDetails",
                    "required": false,
                    "minOccurs": 1,
                    "maxOccurs": 1,
                    "comment": "md-dataset.citation.otherCitationDetails",
                    "label": "Identification of mandatory INSPIRE entities",
                    "description": "Identification of the roles of mandatory entities within INSPIRE who are responsible for national INSPIRE datasets.",
                    "type": "enum",
                    "schema": null,
                    "defaultValue": null,
                    "autofillRule": null,
                    "visibility": true,
                    "editable": true,
                    "enumValues": null,
                    "targets": {
                       "bsp": "md-dataset.citation.otherCitationDetails"
                    }
                 },
                 {
                    "name": "md-dataset.transferOptionsProtocol",
                    "required": false,
                    "minOccurs": 0,
                    "maxOccurs": 1,
                    "comment": "Service transfer options protocol",
                    "label": "Service type",
                    "description": "Differentiating the type of service",
                    "type": "string",
                    "schema": null,
                    "defaultValue": null,
                    "autofillRule": null,
                    "visibility": true,
                    "editable": true,
                    "targets": {
                       "bsp": "md-dataset.transferOptionsProtocol"
                    }
                 },
                 {
                    "name": "md-dataset.transferOptionsDescription",
                    "required": false,
                    "minOccurs": 0,
                    "maxOccurs": 1,
                    "comment": "Service transfer options description",
                    "label": "Format of downloaded data",
                    "description": null,
                    "type": "string",
                    "schema": null,
                    "defaultValue": null,
                    "autofillRule": null,
                    "visibility": true,
                    "editable": true,
                    "enumValues": null,
                    "targets": {
                       "bsp": "md-dataset.transferOptionsDescription"
                    }
                 },
                 {
                    "name": "md-dataset.formatName",
                    "required": true,
                    "minOccurs": 1,
                    "maxOccurs": 1,
                    "comment": "md-dataset.formatName",
                    "label": "Format name",
                    "description": "",
                    "type": "string",
                    "schema": null,
                    "defaultValue": null,
                    "autofillRule": null,
                    "visibility": true,
                    "editable": true,
                    "targets": {
                       "bsp": "md-dataset.formatName"
                    }
                 },
                 {
                    "name": "md-dataset.formatVersion",
                    "required": true,
                    "minOccurs": 1,
                    "maxOccurs": 1,
                    "comment": "md-dataset.formatVersion",
                    "label": "Format version",
                    "description": "",
                    "type": "string",
                    "schema": null,
                    "defaultValue": "3.0",
                    "autofillRule": null,
                    "visibility": true,
                    "editable": true,
                    "targets": {
                       "bsp": "md-dataset.formatVersion"
                    }
                 },
                 {
                    "name": "md-dataset.formatSpecification",
                    "required": true,
                    "minOccurs": 1,
                    "maxOccurs": 1,
                    "comment": "md-dataset.formatSpecification",
                    "label": "Encoding - Format specification",
                    "description": null,
                    "type": "enum",
                    "schema": null,
                    "defaultValue": null,
                    "autofillRule": null,
                    "visibility": true,
                    "editable": true,
                    "enumValues": null,
                    "targets": {
                       "bsp": "md-dataset.formatSpecification"
                    }
                 }
              ]
           },
           {
              "categoryName": "dataset_legalConstraints",
              "title": "Data set - Legal constraints",
              "name": "dataset_legalConstraints",
              "expand": false,
              "fields": [
                 {
                    "name": "md-dataset.identification.constraints.useLimitations",
                    "required": false,
                    "minOccurs": 0,
                    "maxOccurs": 1,
                    "comment": "MD_Metadata/identificationInfo//resourceConstraints//useLimitation",
                    "label": "Use limitations",
                    "description": "Restrictions on the access and use of a resource or metadata.",
                    "type": "string",
                    "schema": null,
                    "defaultValue": null,
                    "autofillRule": null,
                    "visibility": true,
                    "editable": true,
                    "targets": {
                       "bsp": "md-dataset.identification.constraints.useLimitations"
                    }
                 },
                 {
                    "name": "md-dataset.identification.constraints.useConstraints",
                    "required": false,
                    "minOccurs": 0,
                    "maxOccurs": -1,
                    "comment": "MD_Metadata/identificationInfo//resourceConstraints//useConstraints",
                    "label": "Use constraints",
                    "description": "Access constraints applied to assure the protection of privacy or intellectual property, and any special restrictions\nor limitations on obtaining the resource.",
                    "type": "enum",
                    "schema": null,
                    "defaultValue": "conditionsUnknown",
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
                 },
                 {
                    "name": "md-dataset.identification.constraints.accessContraints",
                    "required": false,
                    "minOccurs": 0,
                    "maxOccurs": 1,
                    "comment": "accessContraints",
                    "label": "Access Constraints",
                    "description": "Access constraints applied to assure the protection of privacy or intellectual property, and any special restrictions\nor limitations on obtaining the resource.",
                    "type": "enum",
                    "schema": null,
                    "defaultValue": "noLimitations",
                    "autofillRule": null,
                    "visibility": true,
                    "editable": true,
                    "enumValues": [
                       {
                          "label": "No limitations to public access",
                          "value": "noLimitations"
                       },
                       {
                          "label": "Public access limited according to Article 13(1)(a) of the INSPIRE Directive",
                          "value": "INSPIRE_Directive_Article13_1a"
                       },
                       {
                          "label": "Public access limited according to Article 13(1)(b) of the INSPIRE Directive",
                          "value": "INSPIRE_Directive_Article13_1b"
                       },
                       {
                          "label": "Public access limited according to Article 13(1)(c) of the INSPIRE Directive",
                          "value": "INSPIRE_Directive_Article13_1c"
                       },
                       {
                          "label": "Public access limited according to Article 13(1)(d) of the INSPIRE Directive",
                          "value": "INSPIRE_Directive_Article13_1d"
                       },
                       {
                          "label": "Public access limited according to Article 13(1)(e) of the INSPIRE Directive",
                          "value": "INSPIRE_Directive_Article13_1e"
                       },
                       {
                          "label": "Public access limited according to Article 13(1)(f) of the INSPIRE Directive",
                          "value": "INSPIRE_Directive_Article13_1f"
                       },
                       {
                          "label": "Public access limited according to Article 13(1)(g) of the INSPIRE Directive",
                          "value": "INSPIRE_Directive_Article13_1g"
                       },
                       {
                          "label": "Public access limited according to Article 13(1)(h) of the INSPIRE Directive",
                          "value": "INSPIRE_Directive_Article13_1h"
                       }
                    ],
                    "targets": {
                       "bsp": "md-dataset.identification.constraints.accessContraints"
                    }
                 }
              ]
           }
    ]
```
</details>


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
            "autofillRule": "{{fileAnalysis.attributeValues.SchoolDistrict.SchoolDistrictFeatures.NAME}}",
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

hale»connect enables users to provide multiple default values in a theme's metadata configuration. Multiple, comma-separated values can be added within square brackets to any element with a maximum cardinality greater than 1 and where enumeration values are used for ```defaultValue```.  In the example below, the keywords "INSPIRE" and "environment" are added to separate ´´´descriptiveKeyword´´´ elements in the dataset metadata.

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

In the example shown below, an array of three, comma-separated string values creates three separate ```otherConstraints``` elements.

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
             "defaultValue": [
                   "Es gelten die Lizenzbedingungen „Datenlizenz Deutschland - Namensnennung - Version 2.0" bzw. „dl-de/by-2-0" (https://www.govdata.de/dl-de/by-2-0) mit den dort geforderten Angaben zum Quellenvermerk. Als Rechteinhaber und Bereitsteller ist „Stadt Hildesheim", sowie das Jahr des Datenbezugs in Klammern anzugeben. Beispiel für Quellenvermerk: Stadt Hildesheim (2023) Datenlizenz Deutschland - Namensnennung - Version 2.0 (www.govdata.de/dl-de/by-2-0).",
                   "{\"id\":\"dl-de-zero-2.0\",\"name\":\"Datenlizenz Deutschland - Zero - Version 2.0\",\"url\":\"https://www.govdata.de/dl-de/zero-2-0\",\"quelle\":\"Quelle: Stadt Hildesheim\"}",
                   "Die Daten können den Lizenzbedingungen entsprechend genutzt werden. Die Stadt Hildesheim übernimmt keine Gewähr für die Fehlerfreiheit ihrer Produkte, die Richtigkeit und Vollständigkeit der Daten. Es wird jede Haftung für Schäden ausgeschlossen, die bei Nutzern direkt oder indirekt durch die Geodatennutzung entstehen."
               ],
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
                     "value": "[Datenlizenz Deutschland - Zero - Version 2.0](https://www.govdata.de/dl-de/zero-2-0)"
                 }
             ],

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
                 "{{fileAnalysis.attributeValues.SchoolDistrict.SchoolDistrictFeatures.NAME}}",
                 "{{fileAnalysis.attributeValues.SchoolDistrict.SchoolDistrictFeatures.NUMBER}}"
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

### Working with gmx:Anchor elements in string fields

hale»connect supports the use of gmx:Anchor encoding for gco:CharacterString elements that exist in hale»connect generated metadata. Markdown style notation can be used to specify a text value and URL. A gmx:Anchor encoded element can be generated using the pattern: \[<text\>\](<link\>)

There are some exceptions where this will not work as expected due to special handling. The ``Namespace (Authority URL)`` string field in the contact for metadata cannot be encoded as gmx:Anchor.

In the following example, a gmx:Anchor is added as ``defaultValue`` and it is added to the ``enumValues`` field.

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
              "defaultValue": "[Datenlizenz Deutschland - Zero - Version 2.0](https://www.govdata.de/dl-de/zero-2-0)",
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
                      "value": "[Datenlizenz Deutschland - Zero - Version 2.0](https://www.govdata.de/dl-de/zero-2-0)"
                  }
              ],


### Adding JSON values in string fields

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

### Metadata configured to use one or more profiles

hale»connect metadata profiles provide options for adding and removing additional metadata elements in the hale»connect auto-generated metadata. Metadata profiles are available in the dataset and service metadata configurations, as some options affect both dataset and service metadata. Metadata profiles are not mandatory and more than one metadata profile can be applied. The metadata elements that can be added to metadata are described below:

**Use gmx:Anchor for coordinate reference system code in reference system information**

This option satisfies TG Recommendation 2.1.1: metadata/2.0/rec/isdss/crs-id of the Technical Guidance for the implementation of INSPIRE dataset and service metadata based on ISO/TS 19139:2007, Version 2.2.0. The following example displays the metadata elements added to dataset and service metadata when the option is enabled.

Example:

```
<gmd:referenceSystemInfo>
  <gmd:MD_ReferenceSystem>
    <gmd:referenceSystemIdentifier>
      <gmd:RS_Identifier>
        <gmd:code>
          <gmx:Anchor xlink:href="http://www.opengis.net/def/crs/EPSG/0/25832">ETRS89 / UTM zone 32N</gmx:Anchor>
        </gmd:code>
      </gmd:RS_Identifier>
    </gmd:referenceSystemIdentifier>
  </gmd:MD_ReferenceSystem>
</gmd:referenceSystemInfo>
```

**Use \"information\" as online function code for WFS (GDI-DE convention)**

This option enables use of the term ```information``` in the ```transferOptions``` element in the WFS GetCapabilities document.  The term ```information``` is found in the code list ```CI_OnLineFunctionCode```. The German Metadata conventions, v.2.1.1, Chapter 4.3.1, recommends use of the term ```information``` and users seeking to comply with GDI-DE metadata conventions receive a warning if alternate terms are used.
In the Technical Guidance for the implementation of INSPIRE dataset and service metadata based on ISO/TS 19139:2007, Version 2.2.0, TG Recommendation 3.5: metadata/2.0/rec/sds/resource-type-url-target, an example is given in which the WFS GetCapabilities uses the value ```download```. The hale»connect default value is ```download```, however the default value can be overridden through use of this profile.

This profile is included in the metadata profile entitled: "Conventions of GDI-DE (implicitly includes specific other profiles)".

Example:

```
<gmd:function>
  <gmd:CI_OnLineFunctionCode codeList="https://standards.iso.org/iso/19139/resources/gmxCodelists.xml#CI_OnLineFunctionCode" codeListValue="information">information</gmd:CI_OnLineFunctionCode>
</gmd:function>
```

**Use gmx:Anchor for spatial data service category keyword**

This option applies ```gmx:Anchor``` encoding for thesaurus name and the service type keyword for ```SpatialDataServiceCategory``` and fulfils TG Recommendation 3.2: metadata/2.0/rec/sds/sds-category-cv in the Technical Guidance for the implementation of INSPIRE dataset and service metadata based on ISO/TS 19139:2007, Version 2.2.0. The following example displays the encoding applied to the keyword in the service metadata with this option enabled:

Example:

```
<gmd:descriptiveKeywords>
  <gmd:MD_Keywords>
    <gmd:keyword>
      <gmx:Anchor xlink:href="http://inspire.ec.europa.eu/metadata-codelist/SpatialDataServiceCategory/infoMapAccessService">infoMapAccessService</gmx:Anchor>
    </gmd:keyword>
    <gmd:thesaurusName>
      <gmd:CI_Citation>
        <gmd:title>
          <gmx:Anchor xlink:href="http://data.europa.eu/eli/reg/2008/1205">
          COMMISSION REGULATION (EC) No 1205/2008 of 3 December 2008 implementing Directive 2007/2/EC of the European Parliament and of the Council as regards metadata, Part D 4, Classification of Spatial Data Services
          </gmx:Anchor>
        </gmd:title>
        <gmd:date>
          <gmd:CI_Date>
            <gmd:date>
              <gco:Date>2008-12-03</gco:Date>
            </gmd:date>
            <gmd:dateType>
              <gmd:CI_DateTypeCode codeList="https://standards.iso.org/iso/19139/resources/gmxCodelists.xml#CI_DateTypeCode"  codeListValue="publication">publication</gmd:CI_DateTypeCode>
            </gmd:dateType>
          </gmd:CI_Date>
        </gmd:date>
      </gmd:CI_Citation>
    </gmd:thesaurusName>
  </gmd:MD_Keywords>
</gmd:descriptiveKeywords>
```

**Use MD_Identifier code for operatesOn (GDI-DE convention)**

This option relates to TG Requirement 3.6: metadata/2.0/req/sds/coupled-resource in the Technical Guidance for the implementation of INSPIRE dataset and service metadata based on ISO/TS 19139:2007, Version 2.2.0. There are multiple, valid approaches to providing the required link to metadata. Activation of this option satisfies the GDI-DE convention, which expects that references to the dataset metadata in the ```operatesOn``` element in service metadata is the same as the dataset metadata identifier code. The dataset metadata identifier code consists of a namespace and ID forming a URL to the GDI-DE registry. By default, hale»connect populates the coupled resource link in the ```operatesOn``` element using a URL containing a fragment identifier pointing to the ```gmd:MD_DataIdentification``` element. The default approach can be overridden through activation of this option.

This profile is included in the metadata profile entitled: "Conventions of GDI-DE (implicitly includes specific other profiles)".

Example:

```
<srv:operatesOn xlink:href="https://registry.gdi-de.org/id/de.ni.lk.ni.csw/6857805e-ccfd-488f-93bc-c2bb41f6062d" uuidref="ce78d145-bc82-4278-8ae2-a484d68c7eb1"/>
```

**Conventions of GDI-DE (implicitly includes specific other profiles)**

This option includes the metadata profiles entitled: *Use \"information\" as online function code for WFS (GDI-DE convention)* and *Use MDIdentifier code for operatesOn (GDI-DE convention)*. The purpose of this metadata profile is to provide users interested in generating GDI-DE compliant metadata the ability to do so using a single profile. It is recommended to enable the profile in both the dataset and service metadata.

**Configuring metadata profiles**

Metadata profiles can be selected in the dataset and service metadata sections of a published dataset via the UI.
Metadata profiles can also be viewed and selected in the JSON metadata editor in the dataset and service metadata sections:

            {
               "name": "md-service.profiles",
               "required": false,
               "minOccurs": 0,
               "maxOccurs": -1,
               "comment": "Allows adapting metadata generation behavior",
               "label": "Metadata profiles",
               "description": "Metadata profiles to enable or disable",
               "type": "enum",
               "enumValues": [
                   {
                       "label": "Use gmx:Anchor for coordinate reference system code in reference system information",
                       "value": "crs-info-anchor"
                   },
                   {
                       "label": "[Disable] Use gmx:Anchor for coordinate reference system code in reference system information",
                       "value": "!crs-info-anchor"
                   },
                   {
                       "label": "Use \"information\" as online function code for WFS (GDI-DE convention)",
                       "value": "wfs-information"
                   },
                   {
                       "label": "[Disable] Use \"information\" as online function code for WFS (GDI-DE convention)",
                       "value": "!wfs-information"
                   },
                   {
                       "label": "[Disable] Use gmx:Anchor for spatial data service category keyword",
                       "value": "!service-types-keyword-anchor"
                   },
                   {
                       "label": "Use MDIdentifier code for operatesOn (GDI-DE convention)",
                       "value": "operates-on-use-mdidentifier"
                   },
                   {
                       "label": "[Disable] Use MDIdentifier code for operatesOn (GDI-DE convention)",
                       "value": "!operates-on-use-mdidentifier"
                   },
                   {
                       "label": "Conventions of GDI-DE (implicitly includes specific other profiles)",
                       "value": "gdi-de"
                   }
               ],
               "schema": null,
               "defaultValue": null,
               "autofillRule": null,
               "visibility": true,
               "editable": true,
               "targets": {
                   "bsp": "md-service.profiles"
               }
             }
          ]
        }                
