---
title: "Fragen und Antworten für hale»connect"
categories:
- "help-page-category-faq"
- "help-page-subcategory-faq"
layout: help-detail
language: de
---

<h2>Wie kann der verfügbare Arbeitsspeicher für speicherintensive Transformationen erhöht werden?</h2>

Der maximal zu verwendende Arbeitsspeicher kann in der Datei <code>HALE.ini</code> konfiguriert werden.

hale»studio nutzt Java, wobei eine maximal zu verwendende Menge Speicher reserviert werden muss. 
Abhängig von der Komplexität einer Transformation und der Größe des Datensatzes kann hale»studio Probleme 
mit ungenügendem Speicher haben, die zu einem <code>OutOfMemoryError</code> führen können.

Um den verfügbaren Speicher zu erhöhen kann eine Änderung in der Konfigurationsdatei <code>HALE.ini</code> vorgenommen werden. 
Diese befindet sich entweder im Installationsverzeichnis oder in dem Verzeichnis, in dem das hale»studio-Archiv entpackt wurde. 
Auf MacOS ist sie mit einem Rechtsklick auf <code>Anwendungen >> hale studio</code> unter <code>Show Package Content</code> einzusehen.

Wenn die Datei bearbeitet wird, findet sich eine Zeile, die mit <code>-Xmx</code> startet, 
Beispielsweise <code>-Xmx2g</code>. Der Wert hinter <code>-Xmx</code> gibt an, wieviel Speicher maximal für hale»studio 
zur Verfügung steht. Mit dem Suffix <code>g</code> (z.B. <code>-Xmx4g</code>) kann eine Speichergröße in GiB angegeben werden. 
Mit dem Suffix <code>m</code> (z.B. <code>-Xmx4096m</code>) in MiB usw. Ein Beispiel einer editierten HALE.ini-Datei, 
bei der der verfügbare Speicher auf 4GiB erhöht wurde (Zeile 17):

```
-startup
plugins/org.eclipse.equinox.launcher_1.5.700.v20200207-2156.jar
--launcher.library
plugins/org.eclipse.equinox.launcher.win32.win32.x86_64_1.1.1100.v20190907-0426
-clean
-name
hale studio
--launcher.defaultAction
openFile
-vmargs
-Dsun.net.client.defaultConnectTimeout=10000
-Dsun.net.client.defaultReadTimeout=20000
-Dcache.level1.enabled=false
-Dcache.level1.size=0
-Dcache.level2.enabled=false
-Dcache.level2.size=0
-Xmx4g
```
