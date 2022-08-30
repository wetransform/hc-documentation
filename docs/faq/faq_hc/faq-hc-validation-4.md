---
title: "Questions and answers on hale»connect"
categories:
- "help-page-category-faq"
- "help-page-subcategory-faq"
layout: help-detail
language: en
---

<h2>Data validation is failing in the INSPIRE Validator with a 
<code>Error detected: Invalid polygon. Outer ring of polygon is clockwise within element Polygon</code> error. 
Why?</h2>

There is a bug concerning left-handed coordinate reference systems in the INSPIRE Validator 
that can lead to such an error message. See the <a target="_blank" href="https://github.com/inspire-eu-validation/ets-repository/issues/60">discussion</a> about this issue.

