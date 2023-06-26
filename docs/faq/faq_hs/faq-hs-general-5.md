---
title: "Questions and answers on hale»studio"
categories:
- "help-page-category-faq"
- "help-page-subcategory-faq"
layout: help-detail
language: en
displayed_sidebar: tutorialSidebar
---

<h2>How can I use the File GeoDataBase (FGDB) reader with the command line?</h2>

The provider ID for the FGDB instance reader is <code>eu.esdihumboldt.hale.gdal.fgdb.instance.reader</code> and can be used after the <code>-source</code> parameter. 
An example of a command line transformation is:

```
"C:\Program Files\wetransform\HALE\HALE.exe" -nosplash -console -application hale.transform -project "C:\temp\buildings_fgdb.hale" -source "D:\FGDB\INSPIRE.gdb\a00000001.gdbtable" -providerId eu.esdihumboldt.hale.gdal.fgdb.instance.reader -Scharset UTF-8 -target "buildings.gml.gz" -providerId eu.esdihumboldt.hale.io.gml.writer -gml.geometry.simplify TRUE -contentType eu.esdihumboldt.hale.io.gml.gzip -reportsOut "C:\temp\buildings_fgdb.log" –stacktrace
```
