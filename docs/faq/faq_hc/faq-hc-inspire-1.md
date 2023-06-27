---
title: "Q&A 10"
categories:
- "help-page-category-faq"
- "help-page-subcategory-faq"
layout: help-detail
language: en
displayed_sidebar: tutorialSidebar
---

<h2>According to the INSPIRE Technical Guidelines for Metadata version 2.0 a <code>gmx:Anchor</code> element has to be applied for <code>LegalConstraints</code>. Is this implemented in hale»connect?</h2>

The <code>gmx:Anchor</code> elements can be configured for the legal constraints elements <code>accessConstraints</code> as well as <code>useConstraints</code> on hale»connect. It cannot be configured for the element <code>useLimitations</code> that was mandatory in INSPIRE metadata 1.3 (deprecated), but it is not mandatory in INSPIRE metadata version 2.0 (current) any longer. It is now optional and users can include it if they want.

If a user has filled in all required elements on hale»connect then the metadata is INSPIRE comformant and should pass the INSPIRE validator. 
