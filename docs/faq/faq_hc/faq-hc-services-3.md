---
title: "Q&A 17"
categories:
- "help-page-category-faq"
- "help-page-subcategory-faq"
layout: help-detail
language: en
displayed_sidebar: tutorialSidebar
---

<h2>Why is my data displayed with flipped coordinates?</h2>

There are several factors that can cause issues with the axis order of spatial data:

1) Some GIS products use the axis order specified in the <a target="_blank" href="https://epsg.org/home.html">EPSG Registry</a> for all CRS while others are deviating from it for some CRS. Depending on which software the data was produced with, the hale»connect platform may expect a different axis order.

2) hale»connect uses deegree to publish services. Depending on how the CRS definition is indicated in a request to a deegree wiki service, it can return the data in different axis orders. It will return the data in East North order if the CRS is indicated using "EPSG:XXXX" and it will return the data in the order specified in the <a target="_blank" href="https://epsg.org/home.html">EPSG Registry</a>  if the CRS is indicated using urn notation. For more documentation see this <a target="_blank" href="https://github.com/deegree/deegree3/wiki/Axis-order-handling">deegree entry </a>.

In hale»connect there is a toggle switch that enables users to flip the coordinates of their data if the services do not behave as expected.

<img src={require("/images/help/en/faq-hc-4.png").default} alt="" title="Toggle Switch" className="img-responsive img-inline-help"/>

More information is available in the <a href="../../references/data/2018-03-08-reference-data-view-services">hale»connect documentation</a>.
