---
title: "Download-Dienste"
categories:
- "help-page-category-reference"
- "help-page-subcategory-reference-data"
layout: help-detail
language: de
sidebar_position: 4

---

Im &laquo;Download-Dienste&raquo;-Bereich können sie den Status ihrer veröffentlichten Download-Dienste einsehen. Sie können ihre Dienste mit Hilfe des Schalters in der oberen linken Ecke aktivieren und deaktivieren, Nach der Aktivierung starten sie die Veröffentlichung der Dienste manuell über den &laquo;Dienste publizieren&raquo;-Knopf in der oberen rechten Ecke.

Im &laquo;Download-Dienst&raquo;-Feld wird eine Liste der veröffentlichten Download-Dienste angezeigt. Klicken sie auf die Bezeichnung eines Dienstes, um diesen im Browser aufzurufen. Klicken sie auf das <a class="btn btn-default" title="Link kopieren"><span class="glyphicon glyphicon-copy"></span></a>-Icon um den Link zum Service in die Zwischenablage zu kopieren. Bei &laquo;URL (Download-Dienst/ATOM)&raquo; handelt es sich um den Link zu einem ATOM Feed. Diese lassen sich am besten unter Nutzung von Firefox oder eines ATOM feed-Clients betrachten. IE11, Chrome und Edge haben verfügen nicht automatisch über ATOM feed-Clients, entsprechende Plug-ins sind jedoch verfügbar.

Im &laquo;Metadaten&raquo;-Feld wird eine Liste der veröffentlichten Metadaten angezeigt. Klicken sie auf &laquo;Metadaten (Datensatz)&raquo;, &laquo;Metadaten (Download-Dienst/ATOM)&raquo; oder &laquo;Metadaten (Download-Dienst/WFS)&raquo; um die entsprechende XML-Datei direkt im Browser anzeigen zu lassen. Klicken sie auf das <a class="btn btn-default" title="Link kopieren"><span class="glyphicon glyphicon-copy"></span></a>-Icon um den Link zu den entsprechenden Metadaten in die Zwischenablage zu kopieren.

Im &laquo;Testreports&raquo;-Feld wird eine Liste von PDF-Dateien angezeigt, die die Ergebnisse verschiedener Tests enthalten, die auf die veröffentlichten Metadaten und Dienste angewandt wurden. Klicken sie auf die gewünschte PDF-Datei um diese zu öffnen und die Testergebnisse direkt einsehen zu können. Die Anzahl und Art der Tests, die auf ihre Metadaten und ihre Dienste angewandt wird hängt von ihren Konformitätsanforderungen an die Metadaten und Dienste ab.

Metadaten-Tests werden auf Datensatz-Metadaten sowie Dienste-Metadaten angewandt. Die Tests prüfen ISO-, GDI-DE- und INSPIRE-Konformität.
Folgende Tests werden auf Metadaten angewandt:

<table>
    <th colspan="2">Test</th>
    <th colspan="2">Konformitätslevel</th>
    <th colspan="2">Ressource</th>
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

Im &laquo;Statusmeldungen&raquo;-Feld wird ein Transaktions-Report angezeigt, der die auf ihren Datensatz angewandten Prozesse sowie alle gegebenenfalls bei der Veröffentlichung auftretenden Fehler beschreibt. Die Statusmeldungen werden durch den service publisher generiert.
