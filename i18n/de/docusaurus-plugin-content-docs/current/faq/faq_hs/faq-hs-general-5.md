---
title: "Fragen und Antworten für hale»studio"
categories:
- "help-page-category-faq"
- "help-page-subcategory-faq"
layout: help-detail
language: de
---


<h2>Wie kann der FileGeoDataBase (FGDB)-Reader über die Kommandozeile genutzt werden?</h2>

Die provider id für den FGDB-Daten-Reader ist <code>eu.esdihumboldt.hale.gdal.fgdb.instance.reader</code> und kann nach dem
<code>source</code> Parameter genutzt werden. Ein Beispiel für eine Kommandozeilentransformation ist:

```
"C:\Program Files\wetransform\HALE\HALE.exe" -nosplash -console -application hale.transform -project "C:\temp\buildings_fgdb.hale" -source "D:\FGDB\INSPIRE.gdb\a00000001.gdbtable" -providerId eu.esdihumboldt.hale.gdal.fgdb.instance.reader -Scharset UTF-8 -target "buildings.gml.gz" -providerId eu.esdihumboldt.hale.io.gml.writer -gml.geometry.simplify TRUE -contentType eu.esdihumboldt.hale.io.gml.gzip -reportsOut "C:\temp\buildings_fgdb.log" –stacktrace
```
