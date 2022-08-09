---
title: "Fragen und Antworten für hale»connect"
categories:
- "help-page-category-faq"
- "help-page-subcategory-faq"
layout: help-detail
language: de
---

<h2>Wie können die pro plugins installiert werden?</h2>

**Installation der Lizenz**

Um die Lizenz in hale»studio oder einer anderen hale-basierten Anwendung verfügbar zu machen, 
legen sie bitte die Datei plugin.lic aus dem ZIP-Archiv an einem der folgenden Orte ab:

- Im Ordner .hale in ihrem Benutzerverzeichnis (Windows: %USERPROFILE%/.hale; Linux: ~/.hale; 
Mac: suchen sie hale»studio in <code>Applications</code>, Rechtsklick und Contents-Ordner auswählen). 
Falls nötig, legen sie den Ordner an. Hinweis für Windows-Nutzer: Ordner, deren Namen mit einem <code>.</code> beginnen, 
können nicht mit dem Explorer angelegt werden, sondern müssen über die Eingabeaufforderung angelegt werden:

```
C:\>cd %USERPROFILE%
C:\Users\Mustermann>mkdir .hale
```

- Im Arbeitsverzeichnis der Anwendung (für hale»studio ist dies üblicherweise der Ort, an dem auch die Datei HALE.exe zu finden ist)

**Installation über update-site**

Wenn für die Verbindung ins Internet kein Proxy erforderlich ist, 
können die hale»studio pro Plugins über den 
<a href="http://help.halestudio.org/latest/index.jsp?topic=%2Feu.esdihumboldt.hale.doc.user%2Fhtml%2Fgetting_started%2Finstall_plugins.html&cp%3D0_2_3">eingebauten Installationsmechanismus</a> installiert werden.
Die Adresse der Update-Site für hale-pro-Plugins und das Passwort für den Zugriff können über das <a href="https://wetransform.atlassian.net/servicedesk/customer/portal/1">Service Desk</a> angefragt werden.

**Download der hale»studio pro Plugins**

Wenn die Installation über die Update-Site z. B. wegen eines Proxys nicht verwendet werden kann, 
kann die Update-Site als ZIP-Archiv unter <a href="https://wetransform.app.box.com/v/hale-pro-plugins">dieser Adresse</a> heruntergeladen werden.
Das Passwort für den Zugriff kann über das <a href="https://wetransform.atlassian.net/servicedesk/customer/portal/1">Service Desk</a> angefragt werden.
Das heruntergeladene Archiv kann dann als Update-Site eingebunden werden (<a href="http://help.halestudio.org/latest/index.jsp?topic=%2Feu.esdihumboldt.hale.doc.user%2Fhtml%2Fgetting_started%2Finstall_plugins.html&cp%3D0_2_3">Anleitung</a>).


**Installation von Plugins für hale»studio-Versionen < 3.5.0**

Falls nicht anders angegeben, lassen sich hale Plugins installieren indem man das entsprechende Zip-Archiv entpackt und den enthaltenen Ordner 
im hale»studio Installationsverzeichnis ablegt. Der Ordner kann mehrere Plugins enthalten. 
Falls sie eine Aktualisierung eines Plugins vornehmen, sollten sie die alte Version innerhalb des Ordners löschen.
Wenn sie hale»studio das nächste Mal starten sollte das Plugin verfügbar sein. 
Sie können die Verfügbarkeit von Plugins in hale»studio über die Installation details in <code>About >> Installation details</code> prüfen. 
Den About-Dialog finden sie im Menü Help. Falls sie Probleme haben das Plugin zu verwenden, gibt ggf. ein Blick in die Ansicht Error Log Aufschluss über die Ursachen.

