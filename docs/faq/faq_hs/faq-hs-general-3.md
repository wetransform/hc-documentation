---
title: "Questions and answers on hale»studio"
categories:
- "help-page-category-faq"
- "help-page-subcategory-faq"
layout: help-detail
language: en
---

<h2>How can I install the pro plugins?</h2>

**License Installation**

To make the license available to hale»studio or other hale-based applications or plugins, place the file plugin.lic 
contained in the ZIP archive in one of the following locations:

- In the .hale folder in your user home directory (on Windows: <code>%USERPROFILE%/.hale</code>; on Linux: <code>~/.hale</code>; 
on Mac: find hale»studio in <code>Applications</code>, right-click on the app and go to the Contents directory). 
In Windows and Linux you likely have to create the folder first. Note to Windows users: folders starting with a . cannot be created in Windows Explorer,
you have to create them via the Command Prompt:

```
C:\>cd %USERPROFILE%
C:\Users\Mustermann>mkdir .hale
```

- In the working directory (for hale»studio this is usually the location of the executable)

**Installation via update-site**

If internet access is available without the need to use a proxy, the hale»studio pro plugins can be installed via the 
<a href="http://help.halestudio.org/latest/index.jsp?topic=%2Feu.esdihumboldt.hale.doc.user%2Fhtml%2Fgetting_started%2Finstall_plugins.html&cp%3D0_2_3">online update site</a>.
The update site for hale»studio pro plugins and the required password for the access are provided by the <a href="https://wetransform.atlassian.net/servicedesk/customer/portal/1">Service Desk</a> upon request.


**Download the hale»studio pro Plugins**

In case the installation via the online update site is not possible (e.g. due to a proxy) it can instead be downloaded as a ZIP archive <a href="https://wetransform.app.box.com/v/hale-pro-plugins">here</a>.
The required password for the access is provided by the <a href="https://wetransform.atlassian.net/servicedesk/customer/portal/1">Service Desk</a> upon request.

**Installation of hale plugins for versions < 3.5.0**

If not otherwise documented, hale plugins can be installed by extracting the ZIP archive and placing the 
folder content in the hale studio installation directory. The folder may contain multiple plugins. 
When doing an upgrade, the earlier version of a specific plugin should be removed beforehand. 
When starting hale»studio the next time the plugin should be available. 
You can check the availability of plugins in hale»studio in <code>About >> Installation details</code>. 
Check the Error Log view if you experience any problems.
