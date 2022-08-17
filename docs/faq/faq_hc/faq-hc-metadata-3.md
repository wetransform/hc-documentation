---
title: "Questions and answers on hale»connect"
categories:
- "help-page-category-faq"
- "help-page-subcategory-faq"
layout: help-detail
language: en
---

<h2>According to the INSPIRE Technical Guidelines for Metadata version 2.0 a gmx:Anchor has to be applied for legal constraints. Is this implemented in hale»connect? </h2>

The ***gmx:Anchor*** elements can be configured for the ***legal constraints*** elements ***accessConstraints*** as well as ***useConstraints*** on hale»connect. 
It can **not** be configured for the element *useLimitations* that was mandatory in INSPIRE metadata 1.3 (deprecated), but it is not mandatory in INSPIRE metadata version 2.0 (current) any longer. 
It is now optional and users can include it if they want.
If a user has filled in all required elements on hale»connect then the metadata is INSPIRE conform and should pass the INSPIRE validator. 
