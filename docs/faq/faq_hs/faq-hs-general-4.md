---
title: "Questions and answers on hale»studio"
categories:
- "help-page-category-faq"
- "help-page-subcategory-faq"
layout: help-detail
language: en
---

<h2>How can I increase the available memory for memory-intensive transformations?</h2>

The maximum amount of memory in use can be configured in the file <code>HALE.ini</code>. 

Hale»studio uses Java, which needs to reserve a maximum amount of memory to be used. 
Depending on the complexity of a transformation or the size of a data set, hale»studio 
may have problems with insufficient memory, surfacing in an <code>OutOfMemoryError</code>.

To increase the available memory, find the configuration file <code>HALE.ini</code>,
which sits either in your installation directory or in the directory where you unpacked the hale studio archive
(for Mac users go to <code>Applications >> hale studio</code>, right-click and <code>Show Package Content</code>).

Edit HALE.ini and look for a line starting with <code>-Xmx</code> (e.g. <code>-Xmx2g</code>). 
The value after <code>-Xmx</code> indicates the maximum amount of memory that is available to hale»studio. 
You can use the suffix <code>g</code> (e.g. <code>-Xmx4g</code>) to specify a memory size in GiB 
or the suffix <code>m</code> (e.g. <code>-Xmx4096m</code>) to specify a size in MiB.

An example of an edited HALE.ini file:

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

where the amount of available memory has been increased to 4 GiB (line 17).
