---
title: "Q&A 21"
categories:
- "help-page-category-faq"
- "help-page-subcategory-faq"
layout: help-detail
language: en
displayed_sidebar: tutorialSidebar
---

<h2>The INSPIRE Validator is returning multiple <code>NullPointerExceptions</code> for a WFS validation. Why?</h2>

This happens because indirectly imported schemas are not accepted.
See the <a target="_blank" href="https://github.com/opengeospatial/ets-wfs20/issues/207">discussion</a> about this issue.
