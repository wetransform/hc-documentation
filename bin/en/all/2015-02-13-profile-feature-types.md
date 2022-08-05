---
title: "Profile feature types"
categories:
- "help-page-category-profileworkflow"
- "help-page-subcategory-profileworkflow-ft"
layout: help-detail
language: en

---

The Feature types section displays the feature types contained in the profile's schema. For each feature type, hale»connect displays its name and properties.

The search box at the top of the page allows you to filter feature types by name. Toggle the *Show inherited properties* switch to view additional, inherited properties for each feature type. Toggle the *Show diff* switch to view the feature types that are extended by the profile.

For each property in a feature type, the name and data type are listed. Click the » button to view additional information on the property, such as constraints defined on it. <img src="/images/help/en/Screenshot_2018-10-23 Profile details.png" alt="" title="Profile details" class="img-responsive img-inline-help"/>

### Setting type level constraints

To make a single feature type mandatory, toggle the switch in the feature type header. A mandatory feature type has to occur at least once in any document. This is particularly useful in GML Feature Collections, when you want to state which types of objects have to be present.
<img src="/images/help/en/typeLevel.png" alt="" title="Setting type level constraints" class="img-responsive img-inline-help"/>

### Setting property level constraints

Click the «Edit» icon next to the name of the feature type to add property level constraints.

Required fields, range values, cardinality and tagged values can each be defined on the property level. Click the » button next to the property's data type to expand the panel.<img src="/images/help/en/allowedValues.png" alt="" title="Setting property level constraints" class="img-responsive img-inline-help"/>

**Content required** Click the drop down menu to make the property optional or mandatory. This is only possible if the property was not previously mandatory.

**Allowed values** This function can be used to restrict which values ​​may be present in the data. This restriction can narrow down an already existing restriction or define a new restriction. A typical use case is when only one code list value in the context of the profile should be allowed.

To specify valid values ​​for any string, enter them in the text box, separated by a comma.

To select valid values ​​for a field with a code list or enumeration, select them from the list of options.

To set a value range for a numeric field, enter an upper and a lower limit. This must be narrower than existing limitations at the schema level.

**Minimum and Maximum count** The cardinality can be restricted on the property level, e.g. from [1..n] to [1..1]. Enter the minimum and maximum values in the text boxes. Only narrower values ​​are allowed than defined at the schema level.

**Tagged values** This function can be used to identify profile elements that will be used to generate test suites and example files. To specify a tagged value, select a tag name from the drop down menu. Enter the value in the text box provided. Multiple tagged values for the same tag name are not possible.

There are a number of different tagged values:

1. Testcase-label (ATS-Titel): The reserved tag `ATS-Titel` can be used to label the test case in the ETF test suite.
2. Testcase-description (ATS-Beschreibung): The reserved tag `ATS-Beschreibung` can be used to describe the test case in the ETF test suite, or to describe the manual check required when a `Manuelle Prüfung` tag is added.
3. Module-id: The reserved tag `module-id` can be used to signify that a test case belongs to a module, or group of tests, that are grouped together in the ETS file.
4. Example: The reserved tag `example` can be used to provide an example of a valid value for the element.
5. Example XML: The reserved tag `example-xml` enables users to provide an XML fragment as an example value in the example XML document export. The `example-xml` tag is available for any feature type and any property. First, add a tagged value and select the `example-xml` tag from the available options in the dropdown list. Next, enter a valid XML code block in the editable field. Fragments must be valid, parsable XML. If the fragment includes namespaces, the namespaces must be defined in the fragment.
6. Manual check (Manuelle Prüfung): The reserved tag `Manuelle Prüfung` enables users to require a manual check of test results. ETS files which contain tests labeled with the `Manuelle Prüfung` tag are displayed in yellow when executed. A description of the manual check required by end-users can be provided in a Testcase-description (ATS-Beschreibung) tag.

Examples of valid fragments:

  `<gco:CharacterString xmlns:gco="http://www.isotc211.org/2005/gco">Example-text</gco:CharacterString>`

  `<CharacterString>Example-text</CharacterString>`

Example of an invalid fragment:

  `<gco:CharacterString>Example-text</gco:CharacterString>`

In this example, the `example-xml` tag is used to provide a character string value in the `gmd:language` element.

  <img src="/images/help/en/exampleTag.png" alt="" title="Using the example tag" class="img-responsive img-inline-help"/>

The file below is the example XML document export which contains the character string value provided in the `example-xml` tag.

      <?xml version="1.0" encoding="UTF-8" standalone="no"?>
      <gmd:MD_Metadata xmlns:gmd="http://www.isotc211.org/2005/gmd" xmlns:gco="http://www.isotc211.org/2005/gco" xmlns:gml="http://www.opengis.net/gml/3.2" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.isotc211.org/2005/gmd http://schemas.opengis.net/csw/2.0.2/profiles/apiso/1.0.0/apiso.xsd">
        <gmd:language>
          <gco:CharacterString>ger</gco:CharacterString>
        </gmd:language>
        <gmd:contact>
          <gmd:CI_ResponsibleParty>
            <gmd:role>
              <gmd:CI_RoleCode codeList="http://schemas.opengis.net/iso/19139/20070417/resources/codelist/ML_gmxCodelists.xml#CI_RoleCode" codeListValue="custodian"/>
            </gmd:role>
          </gmd:CI_ResponsibleParty>
        </gmd:contact>
        <gmd:dateStamp>
          <gco:DateTime>2018-05-30T09:00:00</gco:DateTime>
        </gmd:dateStamp>
        <gmd:identificationInfo>
          <gmd:MD_DataIdentification>
            <gmd:citation>
              <gmd:CI_Citation>
                <gmd:title>
                  <gco:CharacterString>example string</gco:CharacterString>
                </gmd:title>
                <gmd:date>
                  <gmd:CI_Date>
                    <gmd:date>
                      <gco:DateTime>2018-05-30T09:00:00</gco:DateTime>
                    </gmd:date>
                    <gmd:dateType>
                      <gmd:CI_DateTypeCode codeList="http://schemas.opengis.net/iso/19139/20070417/resources/codelist/ML_gmxCodelists.xml#CI_DateTypeCode codeListValue="creation"/>
                    </gmd:dateType>
                  </gmd:CI_Date>
                </gmd:date>
              </gmd:CI_Citation>
            </gmd:citation>
            <gmd:abstract>
              <gco:CharacterString>example string</gco:CharacterString>
            </gmd:abstract>
            <gmd:language>
              <gco:CharacterString>example string</gco:CharacterString>
            </gmd:language>
          </gmd:MD_DataIdentification>
        </gmd:identificationInfo>
      </gmd:MD_Metadata>

When you are finished adding constraints to the selected feature type, click &laquo;Update&raquo;
