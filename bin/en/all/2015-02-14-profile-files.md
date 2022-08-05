---
title: "Download a profile as a test suite or an example XML document"
categories:
- "help-page-category-profileworkflow"
- "help-page-subcategory-profileworkflow-files"
layout: help-detail
language: en

---

The Files section contains options to download a test suite and an example XML document based on the profile definition.

**Download as Test Suite**

 A profile with at least one condition must exist to enable the download of a test suite. The format of the test suite is ETF / BaseX due to the desired compatibility with the AdV and GDI-DE test suites (under development) and the INSPIRE Reference Validator. To use an ETF test suite, it must be exported and set up in an ETF installation.

**Example XML Document**

A profile must contain valid sample values ​​for all mandatory feature types and properties to enable the generation of an example XML file. For each profile, it should be possible to easily generate test data. Example XML documents are based on the schema and profile definitions and on the example values ​​entered using tagged values.

To export an example XML file:
* Specify the key of the tagged values ​​from which the example file is to be generated.
* Specify whether all optional elements should be generated in addition to the mandatory elements.
