---
title: "Q&A 22"
categories:
- "help-page-category-faq"
- "help-page-subcategory-faq"
layout: help-detail
language: en
displayed_sidebar: tutorialSidebar
---

<h2>The INSPIRE Validator is returning a <code>Severity: ERROR Message: TargetNamespace.1: Expecting namespace '[...]', but the target namespace of the schema document is '[...]'" error for a WFS validation</code>. Why?</h2>

This happens because the INSPIRE Validator does not accept features from multiple schemas on top level.
See the <a target="_blank" href="https://github.com/opengeospatial/ets-wfs20/issues/217">discussion</a> about this issue.
 


