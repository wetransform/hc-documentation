---
title: "Darstellungs-Dienste"
categories:
- "help-page-category-reference"
- "help-page-subcategory-reference-data"
layout: help-detail
language: de
sidebar_position: 3

---

Im &laquo;Darstellungs-Dienste&raquo;-Bereich können sie den Status ihrer veröffentlichten Darstellungs-Dienste einsehen. Sie können ihre Dienste mit Hilfe des Schalters in der oberen linken Ecke aktivieren und deaktivieren, Nach der Aktivierung starten sie die Veröffentlichung der Dienste manuell über den &laquo;Dienste publizieren&raquo;-Knopf in der oberen rechten Ecke.

Im &laquo;Darstellungs-Dienst&raquo;-Feld wird eine Liste der veröffentlichten Darstellungs-Dienste angezeigt. Klicken sie auf &laquo;Capabilities-URL&raquo;, um diese im Browser aufzurufen. Klicken sie auf &laquo;Kartenansicht&raquo;, um eine Vorschau ihres veröffentlichten Darstellungs-Dienstes in einem einfachen Online-Darstellungs-Client angezeigt zu bekommen. Klicken sie auf das <a className="btn btn-default" title="Link kopieren"><span className="glyphicon glyphicon-copy"></span></a>-Icon um den Link zum Service in die Zwischenablage zu kopieren. Weitere Informationen zum Feature-Explorer-Werkzeug finden Sie unter [Verwenden des Feature-Explorer-Werkzeugs](https://www.wetransform.to/help/en/help-page-category-datasetworkflow/help-page-subcategory-datasetworkflowpublishservices/2015/01/02/dataset-feature-explorer/).

Im &laquo;Metadaten&raquo;-Feld wird eine Liste der veröffentlichten Metadaten angezeigt. Klicken sie auf &laquo;Metadaten (Datensatz)&raquo; oder &laquo;Metadaten (Darstellungsdienst/WFS)&raquo; um die entsprechende XML-Datei direkt im Browser anzeigen zu lassen. Klicken sie auf das <a className="btn btn-default" title="Link kopieren"><span className="glyphicon glyphicon-copy"></span></a>-Icon um den Link zu den entsprechenden Metadaten in die Zwischenablage zu kopieren.

Im &laquo;Testreports&raquo;-Feld wird eine Liste von PDF-Dateien angezeigt, die die Ergebnisse verschiedener Tests enthalten, die auf die veröffentlichten Metadaten und Dienste angewandt wurden. Klicken sie auf die gewünschte PDF-Datei um diese zu öffnen und die Testergebnisse direkt einsehen zu können. Tests prüfen die ISO-, GDI-DE- und INSPIRE-Konformität, abhängig von der Sprache des Themas. Englische Themen werden gegen das ISO-Schema validiert. Deutsche Themen werden gegen die Konformitätsklasse "Konventionen der GDI-DE für INSPIRE-relevante Metadaten" validiert.

Metadaten-Tests werden auf Datensatz-Metadaten sowie Dienste-Metadaten angewandt. Die Tests prüfen ISO-, GDI-DE- und INSPIRE-Konformität.
Folgende Tests werden auf Metadaten angewandt:

<table>
    <th colspan="2">Test</th>
    <th colspan="2">Conformity Level</th>
    <th colspan="2">Resource</th>
    <th>Kommentare</th>
  <tr>
    <td># internal identifier</td>
    <td>Titel</td>
    <td>GDI-DE</td>
    <td>INSPIRE</td>
    <td>Datensatz-Metadaten</td>
    <td>Service-Metadaten</td>
    <td></td>
  </tr>
  <tr>
    <td>md_gdi</td>
    <td>Metadaten | Metadata: ISO and GDI-DE</td>
    <td>X</td>
    <td></td>
    <td>X</td>
    <td>X</td>
    <td>für Dienste mit eingeschränktem Zugang nicht ausgeführt</td>
  </tr>
  <tr>
    <td>md_inspire</td>
    <td>Metadaten | Metadata: INSPIRE</td>
    <td></td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td></td>
  </tr>
</table>

<br/>

Im &laquo;Diensteinstellungen&raquo;-Feld können sie mit Hilfe des Schalters die Koordinatenachsen ihres Datensatzes tauschen. Wenn ihr Datensatz mit vertauschten Koordinaten angezeigt wird, verändern sie die Position des Schalters, um die Darstellung zu berichtigen.

 Mit dem Schalter *Dateien für Publikation aufteilen* und dem zugehörigen Zahlenfeld kann für Datensätze festgelegt werden, dass ein \*.gml oder \.gpkg Datensatz während der Publikation in mehrere Dateien aufgeteilt werden soll und wie viele Objekte maximal in einer der aufgeteilten Dateien sein dürfen. Diese Funktionalität kann verwendet werden, um die Veröffentlichung großer Dateien zu ermöglichen. Die standardmäßige maximale Anzahl von Objekten pro Datei ist 10.000. Die Funktionalität zum Aufteilen von Dateien während der Publikation funktioniert für die meisten Datentypen nicht, wenn für das Thema ein Atom Feed konfiguriert ist. Einzige Ausnahme sind *.gpkg-Datensätze.

Die Einstellungen zur Optimierung des Renderings sind abhängig von den Systemeinstellungen standardmäßig aktiviert oder deaktiviert. Ob sie bei Aktivierung tatsächlich auf den Datensatz angewandt werden können, ist aber abhängig von der jeweiligen Struktur der Daten sowie der Konfiguration der Darstellungsregeln. Mit dem Schalter *Generalisierung von Geometrien erlauben* ist es möglich, Features bei einem kleinerem Zoom-Level zu generalisieren. Der Schalter kann deaktiviert werden, falls bei der Generalisierung die Features zu stark vereinfacht werden. Mit dem Aktivieren von *Beschränkung der maximalen Anzahl von Features* wird die Anzahl der Features in jeder Kartenkachel begrenzt. Der Schalter kann deaktiviert werden, wenn die unterdrückten Features zu einem Problem bei der Visualisierung führen. Die Leistung des Darstellungsdienstes kann dadurch beeinträchtigt werden.

Im &laquo;Statusmeldungen&raquo;-Feld wird ein Transaktions-Report angezeigt, der die auf ihren Datensatz angewandten Prozesse sowie alle gegebenenfalls bei der Veröffentlichung auftretenden Fehler beschreibt. Die Statusmeldungen werden durch den service publisher generiert.
