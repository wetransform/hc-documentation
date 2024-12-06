---
title: "Transformed data"
categories:
- "help-page-category-reference"
- "help-page-subcategory-reference-data"
layout: help-detail
language: en
sidebar_position: 8

---

The Transformed data section displays transformation projects associated with this data set. Click the project name or the chevron to view general properties and the current status of the transformation.

<img src={require("/images/help/en/dataset_transformed_data.png").default} alt="" title="The Transformed data section " className="img-responsive img-inline-help"/>

The page provides links to the transformation project and to the transformed dataset ("Target dataset"). The result of the last transformation run is shown near the bottom, together with a link to show the log output of the transformation run. "The Transformed types" table lists the number of occurrences of each type in the source data and the number of occurrences of each type in the target data.

In case the transformation project contains variables, the "Project variables:" section gives access to these. The values of the variables can be changed here so that subsequent transformation runs (which can be triggered via the "Start transformation" button) will use the new values.

By clicking the button next to the input fields, an Autofill assistant can be opened. It can be used to insert special placeholders into the project variable that will be replaced by their specific value before being passed to the transformation engine. For example can the placeholder `{{dataset.name}}` be used to pass the name of the dataset to the transformation engine.

Another practical example for this feature is to pass the hale»connect dataset ID placholder `{{dataset.id}}` to the variable `DATASET_ID` of a XPlanung to INSPIRE transformation which is used to generate unique identifiers for `OfficialDocumentation` elements if the project variable `FORCE_UNIQUE_OFFICIALDOCUMENTATION_ID` is set to `true`.