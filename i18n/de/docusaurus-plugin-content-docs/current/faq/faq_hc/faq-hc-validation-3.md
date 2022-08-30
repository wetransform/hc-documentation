---
title: "Fragen und Antworten für hale»connect"
categories:
- "help-page-category-faq"
- "help-page-subcategory-faq"
layout: help-detail
language: de
---

<h2>Der INSPIRE Validator gibt bei der Validierung eines WFS die Meldung <code>Severity: ERROR Message: TargetNamespace.1: Expecting namespace '[...]', 
but the target namespace of the schema document is '[...]</code> aus. Wieso?</h2>

Der INSPIRE Validator akzeptiert keine Objekte aus verschiedenen Namensräumen auf oberster Ebene. 
Entsprechende Informationen finden sich in diesem <a target="_blank" href="https://github.com/opengeospatial/ets-wfs20/issues/217">Issue</a>.

