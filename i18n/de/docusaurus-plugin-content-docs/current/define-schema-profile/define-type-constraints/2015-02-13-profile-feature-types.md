---
title: "Objektarten eines Profils"
categories:
- "help-page-category-profileworkflow"
- "help-page-subcategory-profileworkflow-ft"
layout: help-detail
language: de

---

Im &laquo;Objektarten&raquo;-Bereich werden die Objektarten angezeigt, die im Schema des Profils enthalten sind. Für jede Objektart werden Name und Eigenschaften dargestellt.

Die Suchfunktion am oberen Ende der Seite ermöglicht es, die Objektarten nach ihrem Namen zu filtern. Aktivieren sie den &laquo;Geerbte Eigenschaften anzeigen&raquo;-Schalter, um zusätzlich die geerbten Eigenschaften der Objektarten angezeigt zu bekommen. Aktivieren sie den &laquo;Nur Änderungen anzeigen&raquo;-Schalter, um nur die Objektarten angezeigt zu bekommen, die durch das Profil erweitert werden.

Für jede Eigenschaft einer Objektart werden der Name und der Datentyp angezeigt. Klicken sie auf das Pfeil-Symbol, um zusätzliche Informationen zu einer Eigenschaft, wie beispielsweise dazu definierte Bedingungen, anzeigen zu lassen. 
<img src={require("/images/help/de/Screenshot_2018-10-23 Profile details.png").default} alt="" title="Profildetails" className="img-responsive img-inline-help"/>

### Einschränkungen für Objektarten definieren

Um eine Objektart verpflichtend zu machen, aktivieren sie den Schalter auf der obersten Ebene der Objektart. Eine verpflichtende Objektart muss in jedem Dokument auf Grundlage dieses Profils mindestens einmal vorkommen. Das ist insbesondere bei der Verwendung von GML Feature Collections nützlich, wenn sie festlegen möchten,  welche Objektarten vorkommen müssen.
<img src={require("/images/help/de/typeLevel.png").default} alt="" title="Einschränkungen für Objektarten definieren" className="img-responsive img-inline-help"/>

### Einschränkungen für Eigenschaften definieren

Klicken sie auf das Stift-Symbol neben dem Namen einer Objektart, um dieser eine Einschränkung für eine ihrer Eigenschaften hinzuzufügen.

Verpflichtende Inhalte, zugelassene Werte, Kardinalität und Tag/Wert-Paare können auf der Eigenschaften-Ebene definiert werden. Klicken sie auf das Pfeil-Symbol neben dem Datentyp der entsprechenden Eigenschaft, um das Eingabefeld zu erweitern.
<img src={require("/images/help/de/allowedValues.png").default} alt="" title="Einschränkungen für Eigenschaften definieren" className="img-responsive img-inline-help"/>

**Inhalt verpflichtend** In einem Profil wird gelegentlich strenger gefasst, ob eine Eigenschaft in jedem Fall einen Inhalt haben muss, oder nicht. Erlaubt das Schema, die Eigenschaft auch leerzulassen, kann ein gültiger Inhalt im Profil unter Nutzung des Aufklappmenüs verpflichtend gemacht werden. Diese Auswahl ist nur dann möglich, wenn die Eigenschaft nicht von vornherein verpflichtend war. Der Verpflichtungsgrad von Choices kann nicht verändert werden, da das Konstrukt Choice bedeutet, dass aus einer Liste von Optionen genau ein Element gewählt werden muss. Soll der Inhalt sichergestellt werden, muss dies auf der referenzierenden Eigenschaft festgelegt werden. Die Prüfung, ob diese Bedingung erfüllt wird, steht auch in der hale connect-Dateianalyse zur Verfügung.

**Zugelassene Werte** Diese Funktionalität kann genutzt werden, um einzuschränken, welche Werte in den Daten vorkommen dürfen. Die hier definierte Einschränkung kann eine bereits existierende Einschränkung weiter verschärfen oder eine neue Einschränkung festlegen. Ein klassischer Anwendungsfall ist, wenn innerhalb des Profils nur ein Wert aus einer bereits einschränkenden Codeliste erlaubt sein soll.

Um zugelassene Werte für String-Eigenschaften hinzuzufügen, geben sie diese getrennt durch Kommata in das dafür vorgesehene Textfeld ein.

Um zugelessane Werte für eine Eigenschaft mit einer Codeliste oder einer Enumeration festzulegen, wählen sie diese aus der aufgeführten Liste der Optionen aus. 

Um einen Wertebereich für ein Zahlenfeld festzulegen, geben sie eine obere und eine untere Grenze an. Diese müssen enger sein, als existierende Einschränkungen auf Schema-Ebene.

**Minimale und Maximale Anzahl** Die Kardinalität kann auf der Eigenschaften-Ebene eingeschränkt werden, beispielsweise von [1..n] auf [1..1]. Geben sie die minimale und die maximale Anzahl in den dafür vorgesehenen Textfeldern ein. Nur engere Werte als diejenigen auf Schema-Ebene sind erlaubt.

**Tag/Wert-Paare** Diese Funktionalität ermöglicht es, Profilelemente zu kennzeichnen, die für die Generierung von Test Suites und Beispiel-Dateien genutzt werden sollen. Um ein Tag/Wert-Paar festzulegen, wählen sie einen Tag-Namen aus dem Aufklappmenü aus. Geben sie den zugehörigen Wert in dem dafür vorgesehenen Textfeld ein. Zu einem Tag-Namen können nicht mehrere Tag/Wert-Paare existieren.

Es gibt folgende reservierte Tags für Tag/Wert-Paare:

1. Testcase-label (ATS-Titel): Der reservierte Tag-Name `ATS-Label` kann genutzt werden, um den Test Case in der ETF Test Suite zu benennen.
2. Testcase-description (ATS-Beschreibung): Der reservierte Tag-Name `ATS-Beschreibung` kann genutzt werden, um den Test Case in der ETF Test Suite oder  die manuelle Prüfung zu beschreiben, wenn der Tag-Name `Manuelle Prüfung` gesetzt wurde.
3. Module-id: Der reservierte Tag-Name `module-id` kann genutzt werden, um zu signalisieren, dass ein Test Case zu einem bestimmten Modul (einer Gruppe von Tests) gehört, die in der ETS-Datei gemeinsam aufgeführt wird.
4. Example: Der reservierte Tag-Name `example` kann genutzt werden, um ein Beispiel für einen zulässigen Wert für das Attribut anzugeben.
5. Example XML: Der reservierte Tag-Name `example-xml` ermöglicht es Nutzenden, ein XML-Fragment als Wert für das Beispiel-XML-Dokument anzugeben. Der `example-xml`-Tag steht für jede Objektart und jede Eigenschaft zur Verfügung. Fügen sie zunächst ein Tag/Wert-Paar hinzu und wählen sie dann den `example-xml`-Tag aus den verfügbaren Optionen im Aufklappmenü. Geben sie als nächstes ein gültiges XML-Code-Fragment in das Textfeld ein. Wenn es Namensräume enthält, müssen diese im Fragment definiert werden.
6. Manual check (Manuelle Prüfung): Der reservierte Tag `Manuelle Prüfung` ermöglicht es Nutzenden eine manuelle Prüfung der Testergebnisse zu verlangen. Tests, welche mit dem Tag `Manuelle Prüfung` versehen sind, werden bei der Ausführung in gelb dargestellt. Eine Beschreibung der manuellen Prüfung kann in der Testcase-description (ATS-Beschreibung) angegeben werden. 

Beispiele für valide Fragmente:

  `<gco:CharacterString xmlns:gco="http://www.isotc211.org/2005/gco">Beispiel-Text</gco:CharacterString>`

  `<CharacterString>Beispiel-Text</CharacterString>`

Beispiel für ein invalides Fragment:

  `<gco:CharacterString>Beispiel-Text</gco:CharacterString>`
  
In diesem Beispiel wird der `example-xml`-Tag genutzt, um ein CharacterString-Beispiel für das `gmd:language`-Element festzulegen.

  <img src={require("/images/help/en/exampleTag.png").default} alt="" title="Nutzung des `example-xml`-Tags" className="img-responsive img-inline-help"/>

Die folgende XML-Datei ist das Beispiel-XML-Dokument zu diesem Profil und enthält den im `example-xml`-Tag angegebenen CharacterString-Wert.

```xml
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<gmd:MD_Metadata xmlns:gmd="http://www.isotc211.org/2005/gmd" xmlns:gco="http://www.isotc211.org/2005/gco" xmlns:gml="http://www.opengis.net/gml/3.2" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.isotc211.org/2005/gmd http://schemas.opengis.net/csw/2.0.2/profiles/apiso/1.0.0/apiso.xsd">
  <gmd:language>
    <gco:CharacterString>ger</gco:CharacterString>
  </gmd:language>
  <gmd:contact>
    <gmd:CI_ResponsibleParty>
      <gmd:role>
        <gmd:CI_RoleCode codeList="http://schemas.opengis.net/iso/19139/20070417/resources/codelist/ML_gmxCodelists.xml#CI_RoleCode" codeListValue="custodian"/>
      </gmd:role>
    </gmd:CI_ResponsibleParty>
  </gmd:contact>
  <gmd:dateStamp>
    <gco:DateTime>2018-05-30T09:00:00</gco:DateTime>
  </gmd:dateStamp>
  <gmd:identificationInfo>
    <gmd:MD_DataIdentification>
      <gmd:citation>
        <gmd:CI_Citation>
          <gmd:title>
            <gco:CharacterString>example string</gco:CharacterString>
          </gmd:title>
          <gmd:date>
            <gmd:CI_Date>
              <gmd:date>
                <gco:DateTime>2018-05-30T09:00:00</gco:DateTime>
              </gmd:date>
              <gmd:dateType>
                <gmd:CI_DateTypeCode codeList="http://schemas.opengis.net/iso/19139/20070417/resources/codelist/ML_gmxCodelists.xml#CI_DateTypeCode codeListValue="creation"/>
              </gmd:dateType>
            </gmd:CI_Date>
          </gmd:date>
        </gmd:CI_Citation>
      </gmd:citation>
      <gmd:abstract>
        <gco:CharacterString>example string</gco:CharacterString>
      </gmd:abstract>
      <gmd:language>
        <gco:CharacterString>example string</gco:CharacterString>
      </gmd:language>
    </gmd:MD_DataIdentification>
  </gmd:identificationInfo>
</gmd:MD_Metadata>
```

Wenn sie mit dem Hinzufügen von Einschränkungen für die ausgewählte Objektart fertig sind, klicken sie auf &laquo;Aktualisieren&raquo;.