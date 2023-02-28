---
title: "Configure validation"
categories:
- "help-page-category-setup-haleconnect"
- "help-page-subcategory-setup-haleconnect-themecreate"
layout: help-detail
language: en

---

The validation configuration defines the conformance classes that will be executed for all data sets associated with a theme. A conformance class is a set of requirements defined in a standard, which are tested using an executable test suite (ETS). All INSPIRE conformance classes that are applicable to hale»connect resources, are available for selection. The validation configuration is pre-populated with the standard set of conformance classes that are used to test INSPIRE resources. When you create a theme, a default validation configuration is provided. Theme managers and superusers can add and remove conformance classes from the validation configuration. Click on the «Clear list» button to remove all conformance classes. Click on the «Add defaults» button to return to the default configuration. Deactivate the toggle to disable validation.

To edit the validation configuration, follow these steps as a logged in theme manager or organisation superuser:

1. Go to &laquo;Themes&raquo;
1. Pick the theme you'd like to edit the validation configuration for
1. Go to &laquo;Validation&raquo;. Dropdown menus for dataset metadata, service metadata, services and data are displayed. Select or deselect the conformance classes you are interested in for each category. All available conformance classes used for testing resources belonging to each category are available in the dropdown menus. Users are not able to add the same test, in the same category, twice. Direct download WFS service testing is not currently supported.
<img src={require("/images/help/en/metadata1.png").default} alt="" title="The metadata editor" className="img-responsive img-inline-help"/>
