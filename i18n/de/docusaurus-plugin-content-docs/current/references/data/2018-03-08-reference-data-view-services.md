---
title: "Darstellungs-Dienste"
categories:
- "help-page-category-reference"
- "help-page-subcategory-reference-data"
layout: help-detail
language: de
sidebar_position: 4

---

Im &laquo;Darstellungs-Dienste&raquo;-Bereich können sie den Status ihrer veröffentlichten Darstellungs-Dienste einsehen. Sie können ihre Dienste mit Hilfe des Schalters in der oberen linken Ecke aktivieren und deaktivieren, Nach der Aktivierung starten sie die Veröffentlichung der Dienste manuell über den &laquo;Dienste publizieren&raquo;-Knopf in der oberen rechten Ecke.

Im &laquo;Darstellungs-Dienst&raquo;-Feld wird eine Liste der veröffentlichten Darstellungs-Dienste angezeigt. Klicken sie auf &laquo;Capabilities-URL&raquo;, um diese im Browser aufzurufen. Klicken sie auf &laquo;Kartenansicht&raquo;, um eine Vorschau ihres veröffentlichten Darstellungs-Dienstes in einem einfachen Online-Darstellungs-Client angezeigt zu bekommen. Klicken sie auf das <a className="btn btn-default" title="Link kopieren"><span className="glyphicon glyphicon-copy"></span></a>-Icon um den Link zum Service in die Zwischenablage zu kopieren. Weitere Informationen zum Feature-Explorer-Werkzeug finden Sie unter [Verwenden des Feature-Explorer-Werkzeugs](../../create-manage-datasets/feature-explorer/2015-01-02-dataset-feature-explorer.md).

Im &laquo;Metadaten&raquo;-Feld wird eine Liste der veröffentlichten Metadaten angezeigt. Klicken sie auf &laquo;Metadaten (Datensatz)&raquo; oder &laquo;Metadaten (Darstellungsdienst/WFS)&raquo; um die entsprechende XML-Datei direkt im Browser anzeigen zu lassen. Klicken sie auf das <a className="btn btn-default" title="Link kopieren"><span className="glyphicon glyphicon-copy"></span></a>-Icon um den Link zu den entsprechenden Metadaten in die Zwischenablage zu kopieren.

Im &laquo;Validierungsberichte&raquo;-Feld enthält eine Ergebnisliste für eine Reihe von Tests, die für veröffentlichte Metadaten und Dienste ausgeführt wurden. Klicken Sie auf das Download-Symbol, um das Testergebnis direkt herunterzuladen. Grüne Häkchen zeigen an, dass der ETF-Bericht gültig ist. Rote Xs weisen auf Fehler oder einen nicht ausgeführten Test hin. Benutzer können die ETF-Tests für alle aufgelisteten Ressourcen erneut ausführen, indem sie auf die Schaltfläche «Alle Tests ausführen» klicken. Alternativ können Benutzer einen einzelnen Test erneut ausführen, indem sie auf das kreisförmige Pfeilsymbol neben dem Download-Symbol klicken. Das gelbe Warnsymbol wird für Ressourcen mit Konformitätsklassen angezeigt, die manuelle Überprüfungen erfordern.

## Konfiguration der Validierungstests ##

Die Metadaten werden basierend auf standardisierten Konformitätsklassen validiert. Welche das sind, kann im «Thema» im Bereich «Validierung» konfiguriert werden. Die Tests prüfen die INSPIRE-Konformität Ihrer Datensätze und Dienste.
Die Anzahl und Art der Tests, die auf Ihre Metadaten und Dienste angewendet werden, spiegeln Ihre Compliance-Anforderungen wieder.
Weitere Informationen finden Sie unter [Validierung konfigurieren](../../setup-hc/config-validation/2015-02-10-validation.md).

## Auf Metadaten und Darstellungs-Diensten ausgeführte Validierungstests: ##

<table className="tb">
     <th colspan="2">Test</th>
     <th colspan="2">Konformitätsstufe</th>
     <th colspan="2">Ressource</th>
     <tr>
       <td>Titel</td>
       <td>INSPIRIERT</td>
       <td>Datensatz-Metadaten</td>
       <td>Service-Metadaten</td>
       <td>Dienst</td>
     </tr>
   <tr>
     <td>Allgemeine Anforderungen für ISO/TC 19139:2007-basierte INSPIRE-Metadatensätze</td>
     <td>X</td>
     <td>X</td>
     <td>X</td>
     <td></td>
   </tr>
   <tr>
     <td>Konformitätsklasse 1: 'Baseline-Metadaten für Datensätze und Datensatzserien</td>
     <td>X</td>
     <td>X</td>
     <td></td>
     <td></td>
   </tr>
   <tr>
     <td>Konformitätsklasse 2: „Interoperabilitätsmetadaten von INSPIRE-Datensätzen und Datensatzreihen“</td>
     <td>X</td>
     <td>X</td>
     <td></td>
     <td></td>
   </tr>
   <tr>
     <td>Konformitätsklasse 2b: „INSPIRE-Datensätze und Datensatzserien-Metadaten für die Überwachung“</td>
     <td>X</td>
     <td>X</td>
     <td></td>
     <td></td>
   </tr>
   <tr>
     <td>Konformitätsklasse 3: 'INSPIRE Spatial Data Service Baseline Metadata'</td>
     <td>X</td>
     <td></td>
     <td>X</td>
     <td></td>
   </tr>
   <tr>
     <td>Konformitätsklasse 4: „INSPIRE Network Services“</td>
     <td>X</td>
     <td></td>
     <td>X</td>
     <td></td>
   </tr>
   <tr>
     <td>Konformitätsklasse „View Service WMS“</td>
     <td>X</td>
     <td></td>
     <td></td>
     <td>X</td>
   </tr>
</table>

<br/>

Im &laquo;Diensteinstellungen&raquo;-Feld können sie mit Hilfe des Schalters die Koordinatenachsen ihres Datensatzes tauschen. Wenn ihr Datensatz mit vertauschten Koordinaten angezeigt wird, verändern sie die Position des Schalters, um die Darstellung zu berichtigen.

 Mit dem Schalter *Dateien für Publikation aufteilen* und dem zugehörigen Zahlenfeld kann für Datensätze festgelegt werden, dass ein \*.gml oder \.gpkg Datensatz während der Publikation in mehrere Dateien aufgeteilt werden soll und wie viele Objekte maximal in einer der aufgeteilten Dateien sein dürfen. Diese Funktionalität kann verwendet werden, um die Veröffentlichung großer Dateien zu ermöglichen. Die standardmäßige maximale Anzahl von Objekten pro Datei ist 10.000. Die Funktionalität zum Aufteilen von Dateien während der Publikation funktioniert für die meisten Datentypen nicht, wenn für das Thema ein Atom Feed konfiguriert ist. Einzige Ausnahme sind *.gpkg-Datensätze.

Die Einstellungen zur Optimierung des Renderings sind abhängig von den Systemeinstellungen standardmäßig aktiviert oder deaktiviert. Ob sie bei Aktivierung tatsächlich auf den Datensatz angewandt werden können, ist aber abhängig von der jeweiligen Struktur der Daten sowie der Konfiguration der Darstellungsregeln. Mit dem Schalter *Generalisierung von Geometrien erlauben* ist es möglich, Features bei einem kleinerem Zoom-Level zu generalisieren. Der Schalter kann deaktiviert werden, falls bei der Generalisierung die Features zu stark vereinfacht werden. Mit dem Aktivieren von *Beschränkung der maximalen Anzahl von Features* wird die Anzahl der Features in jeder Kartenkachel begrenzt. Der Schalter kann deaktiviert werden, wenn die unterdrückten Features zu einem Problem bei der Visualisierung führen. Die Leistung des Darstellungsdienstes kann dadurch beeinträchtigt werden.

Im &laquo;Statusmeldungen&raquo;-Feld wird ein Transaktions-Report angezeigt, der die auf ihren Datensatz angewandten Prozesse sowie alle gegebenenfalls bei der Veröffentlichung auftretenden Fehler beschreibt. Die Statusmeldungen werden durch den service publisher generiert.
