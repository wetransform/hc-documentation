---
title: "Validation"
categories:
- "help-page-category-reference"
- "help-page-subcategory-reference-themes"
layout: help-detail
language: en
sidebar_position: 7

---

The Validation section allows you to configure the conformance classes that are used to test your published resources. A conformance class is a set of requirements defined in a standard, which are tested using an executable test suite (ETS). All INSPIRE conformance classes that are applicable to hale»connect resources, are available for selection.

<img src={require("/images/help/en/configure_validation.png").default} alt="" title="Publishing view services" className="img-responsive img-inline-help"/>

Dropdown menus for dataset metadata, service metadata, services, and data categories are displayed. Select or deselect the conformance classes you are interested in for each category. All available conformance classes used for testing resources belonging to each category are available in the dropdown menus. Users are not able to add the same test, in the same category, twice. Direct download WFS service testing is not currently supported.

Deactivate the toggle to disable conformance class testing entirely. Click on the «Clear list» button to remove all pre-configured conformance classes. Click on the «Add defaults» button to return to the default configuration.
