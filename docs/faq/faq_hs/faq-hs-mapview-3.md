---
title: "Q&A 10"
categories:
- "help-page-category-faq"
- "help-page-subcategory-faq"
layout: help-detail
language: en
displayed_sidebar: tutorialSidebar
---

<h2>How do I correctly map geometries?</h2>

There are several ways of mapping geometries correctly in hale»studio, depending on the type of the geometry. 

**Source data contains JTS (Java Topology Suite) geometries (e.g. Shapefiles)**
- There is a value at the level of the attribute with the geometry icon but this value only serves internal geometry representation 
  (this does not occur in a xml file).
- JTS geometries are used for all geometry related operations in hale»studio.
- If there is a geometry object in the source data, it is recommended to use it for mapping purposes.
- If a JTS geometry is exported from hale»studio, all information on lower level attributes will be ignored.

**Source data contains geometry in xml structure**
- The geometry is loaded directly from the xml file.
- hale»studio tries to generate a JTS geometry from it.

**Complex geometry attribute in the source data (an icon with three dots is displayed beside the attribute)** 
- There will be no geometry value at this level. 
- It should never be used for mapping purposes.

**Complex geometry attribute in the target data** 
- It can be used for mapping purposes. 
- The JTS geometry exists on this level and can be displayed in the Map View.
- When exporting the data, hale»studio is looking for the best way to write the JTS geometry 
to the XML structure available under the attribute.

