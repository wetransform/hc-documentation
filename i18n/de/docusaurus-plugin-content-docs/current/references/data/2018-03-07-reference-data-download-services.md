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

Im &laquo;Download-Dienst&raquo;-Feld wird eine Liste der veröffentlichten Download-Dienste angezeigt. Klicken sie auf die Bezeichnung eines Dienstes, um diesen im Browser aufzurufen. Klicken sie auf das <a className="btn btn-default" title="Link kopieren"><span className="glyphicon glyphicon-copy"></span></a>-Icon um den Link zum Service in die Zwischenablage zu kopieren. Bei &laquo;URL (Download-Dienst/ATOM)&raquo; handelt es sich um den Link zu einem ATOM Feed. Diese lassen sich am besten unter Nutzung von Firefox oder eines ATOM feed-Clients betrachten. IE11, Chrome und Edge haben verfügen nicht automatisch über ATOM feed-Clients, entsprechende Plug-ins sind jedoch verfügbar.

Im &laquo;Metadaten&raquo;-Feld wird eine Liste der veröffentlichten Metadaten angezeigt. Klicken sie auf &laquo;Metadaten (Datensatz)&raquo;, &laquo;Metadaten (Download-Dienst/ATOM)&raquo; oder &laquo;Metadaten (Download-Dienst/WFS)&raquo; um die entsprechende XML-Datei direkt im Browser anzeigen zu lassen. Klicken sie auf das <a className="btn btn-default" title="Link kopieren"><span className="glyphicon glyphicon-copy"></span></a>-Icon um den Link zu den entsprechenden Metadaten in die Zwischenablage zu kopieren.

## Validierungsberichte ##

Das &laquo;Validierungsberichte&raquo;-Feld enthält eine Ergebnisliste für eine Reihe von Tests, die für veröffentlichte Metadaten und Dienste ausgeführt wurden.
Klicken Sie auf das Download-Symbol, um den Validierungsbericht direkt herunterzuladen. Grüne Häkchen zeigen an, dass der Validierungsbericht (ETF-Bericht) gültig ist. Rote Xs weisen auf Fehler oder einen nicht ausgeführten Test hin.

Benutzer können die Validierungsprüfung (ETF-Tests) für alle aufgelisteten Ressourcen erneut ausführen, indem sie auf die Schaltfläche «Alle Tests ausführen» klicken. Alternativ können Benutzer einen einzelnen Test erneut ausführen, indem sie auf das kreisförmige Pfeilsymbol neben dem Download-Symbol klicken.
Das gelbe Warnsymbol wird für Ressourcen mit Konformitätsklassen angezeigt, die manuelle Überprüfungen erfordern.

Eine Reihe von standardmäßigen Konformitätsklassen wird auf Dataset-Metadaten ausgeführt, Service-Metadaten und Services heruntergeladen und angezeigt und kann im Design konfiguriert werden. Tests prüfen die INSPIRE-Konformität. Die Anzahl und Art der Tests, die an Ihren Metadaten und Diensten durchgeführt werden, spiegeln Ihre Compliance-Anforderungen wider. Weitere Informationen finden Sie unter [Validierung konfigurieren](../../setup-hc/config-validation/2015-02-10-validation.md). WFS-Diensttests mit direktem Download werden derzeit nicht unterstützt.

## Auf Metadaten und Download-Diensten ausgeführte Tests: ##

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
      <td>Konformitätsklasse „Download Service Pre-defined Atom“</td>
      <td>X</td>
      <td></td>
      <td></td>
      <td>X</td>
    </tr>
  </table>

  <br/>

Im &laquo;Diensteinstellungen&raquo;-Feld können sie mit Hilfe des Schalters «Koordinatenreihenfolge tauschen»- die Koordinatenachsen ihres Datensatzes tauschen.

Diese Funktion ist sinnvoll, wenn ihr Datensatz mit vertauschten Koordinaten angezeigt wird und führt dazu, das die Darstellung in der Kartenanzeige korrigiert wird.

Im &laquo;Statusmeldungen&raquo;-Feld wird ein Transaktions-Report angezeigt, der die auf ihren Datensatz angewandten Prozesse sowie alle gegebenenfalls bei der Veröffentlichung auftretenden Fehler beschreibt. Die Statusmeldungen werden durch den service publisher generiert.
