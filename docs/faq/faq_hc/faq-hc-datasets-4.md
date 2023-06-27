---
title: "Q&A 4"
categories:
- "help-page-category-faq"
- "help-page-subcategory-faq"
layout: help-detail
language: en
displayed_sidebar: tutorialSidebar
---

<h2>Are pyramids used when working with raster data?</h2>

hale»connect converts raster data internally, whereby no image pyramids are generated. 

The system always creates a 32-bit image file with four channels (RGB + Alpha for transparency, 8-bit per channel) in the background (using GDAL). To date, no problems have been encountered when working with rater data (even if they are PNGs). NoData is supported if detected by GDAL. In each case, there is a transition to an alpha channel.
