---
title: "Mit dem hale»connect Profil-Management-Werkzeug ein Profil anlegen"
categories:
- "help-page-category-tutorials"
- "help-page-subcategory-tutorials"
layout: help-detail
language: de

---

### **hale»connect Profile Management Tool (PMT)**

Profile können dabei helfen, beispielsweise Metadaten-Standards wie ISO 19115 umzusetzen. Jedoch sind sie häufig sehr komplex und erfordern hohen Arbeitsaufwand für Erstellung und Pflege. Nicht selten werden Profile in Excel-Tabellen oder ähnlichen Werkzeugen mit hunderten Einträgen verwaltet. Das Eintragen und Pflegen der Daten, die Konformität zu Validatoren und regelmäßiges Testen kann schnell zu schwer handhabbaren Aufwand führen. Das hale»connect Profil-Management- Werkzeug (PMT) ernöglicht es, Profile einfach zu definieren und zu managen. Mit geringem Aufwand können unter der Nutzung von Editoren und Validatoren Profile entworfen werden, um sicherzustellen, dass beispielsweise Metadaten dauerhaft konform zu, sich möglicherweise verändernden, Anforderungen sind.

### **Profile**

In hale»connect beschreibt ein Profil die engere Restriktion eines Schemas durch die Definition von Regeln, die auf Elemente des Datenmodells angewandt werden. Ein Profil wird über Konsistenz-Bedingungen und Tags definiert, die auf Elemente des Schemas angewandt werden.

Ein Profil enthält dabei die folgenden Arten von Informationen:

  **Verpflichtung für Objektarten**
   Die Verpflichtung für Objektarten ermöglicht Nutzenden zu bestimmen, ob eine Objektart in einem Datensatz vorkommen muss. Profile können zusätzliche oder strengere Regeln enthalten als das ursprüngliche Schema. <img src={require("/images/help/de/pmt_tutorial_type.png").default} alt="Setting type obligation" title="Objektarten-Verpflichtungen festlegen" className="img-responsive img-inline-help"/>

  **Verpflichtung für Attribute**
   Die Verpflichtung für Attribute ermöglicht Nutzenden festzulegen, ob ein Attribut in einem Datensatz vorkommen muss. Im Folgenden finden sich einige Beispiele:

  Inhalt für ein Attribut verpflichtend machen (vgl. nillable flag) <img src={require("/images/help/de/pmt_tutorial_content.png").default} alt="Requiring content in an attribute" title="Inhalt für ein Attribut verpflichtend machen" className="img-responsive img-inline-help"/>

  Erlaubte Kardinalität festlegen - beipsielweise von unbegrenzt im Schema zu genau einem Vorkommen <img src={require("/images/help/de/pmt_tutorial_cardinality.png").default} alt="Setting allowed maximum and minimum cardinality" title="Kardinalität festlegen" className="img-responsive img-inline-help"/>

  **Bedingungen für Wertebereich**  
    Bedingungen für den Wertebereich ermöglichen es Nutzenden, Codelisten für ein Attribut zu verwalten oder Codelisten-Werte zu entfernen, falls notwendig. Bedingungen für den Wertebereich können auch genutzt werden, um alle erlaubten Werte aufzuzählen. <img src={require("/images/help/de/pmt_tutorial_domain.png").default} alt="Domain restrictions" title="Bedingungen für Wertebereiche" className="img-responsive img-inline-help"/>

  **Bedingungen für Datentypen**  
    Bedingungen für Typen können genutzt werden, um einen bestimmten Datentyp erforderlich zu machen, wo im Schema mehrere Datentypen erlaubt sind, beispielsweise eine Einschränkung bei Vorkommen von choice oder anyType. 
  <img src={require("/images/help/de/pmt_tutorial_typeres.png").default} alt="Restricting property types" title="Bedingungen für Datentypen" className="img-responsive img-inline-help"/>

  **Konsistenz-Bedingungen**  
    Konsistenz-Bedingungen können genutzt werden, um über mehrere Elemente hinweg zu testen.
      Werte-Abhängigkeiten für Profil-Elementen können definiert werden, beispielsweise &laquo;Wenn Element A den Wert X hat, muss Element B den Wert Y haben&raquo;.
      Existenz-Abhängigkeiten können für Profil-Elemente definiert werden, beispielsweise &laquo;Wenn Element A existiert, darf Element B nicht existieren&raquo;.
      Kombinationen von Werte- und Existenz-Bedingungen können ebenfalls definiert werden, beispielsweise &laquo;Wenn Element A den Wert X hat, darf Element B nicht existieren&raquo;. <img src={require("/images/help/de/pmt_tutorial_consistency.png").default} alt="Applying consistency constraints" title="Konsistenz-Bedingungen festlegen" className="img-responsive img-inline-help"/>

### **Ein Profil unter Nutzung des hale»connect Profil-Management-Werzeugs (PMT) anlegen**

In diesem Tutorial wird ein auf dem CSW 2.0.2 Metadata Application-Schema basierendes Profil erstellt. Melden sie sich dazu in der Rolle &laquo;Superanwender&raquo; oder &laquo;Themenmanager&raquo; an und folgen sie diesem Ablauf:

1.	Gehen sie auf &laquo;Schemas&raquo;.
2.	Klicken sie auf &laquo;+ Neues Schema anlegen&raquo; am Ende der Schema-Liste, wählen sie &laquo;Profil erstellen&raquo; und klicken sie &laquo;Weiter&raquo;.
<img src={require("/images/help/de/Screenshot_2018-10-23 Create new schema.png").default} alt="" title="Profil erstellen" className="img-responsive img-inline-help"/>
3.	&laquo;Profil-Informationen ergänzen&raquo; Geben sie Name, Autorin oder Autor, Version und Beschreibung ihres Profils an. Wenn sie fertig sind, klicken sie auf &laquo;Weiter&raquo;.
4.  &laquo;Schema auswählen&raquo; Wählen sie das Schema, auf dem ihr Profil basieren soll. Klicken sie auf &laquo;+Schema auswählen&raquo; und navigieren sie zum CSW 2.0.2 Metadata Application-Schema auf hale>>connect. Klicken sie auf das „»“-Symbol, um es auszuwählen. Wenn sie fertig sind, klicken sie auf &laquo;Weiter&raquo;.
<img src={require("/images/help/de/Screenshot_2018-10-23 Create new schema_1.png").default} alt="" title="Profil anlegen" className="img-responsive img-inline-help"/>
5. &laquo;Anlegen bestätigen&raquo; Überprüfen sie in einem letzten Schritt ihr Profil. Sie können für ihr Profil ein Thema hinzufügen oder anlegen. Wenn sie fertig sind, klicken sie auf &laquo;Anlegen&raquo;.

Sobald ihr Profil angelegt ist, können sie diesem Verpflichtungen für Objektarten und Attribute, Bedingungen für Wertebereiche und Datentypen sowie Konsistenz-Bedingungen hinzufügen.

**Verpflichtung für eine Objektart hinzufügen**

Navigieren sie zu ihrem Profil und öffnen sie den &laquo;Objektarten&raquo;-Bereich. Geben sie in die Suchleiste &laquo;CI_ResponsibleParty&raquo; ein. Scrollen sie durch die Ergebnis-Liste und aktivieren sie den Schalter neben dem &laquo;Bearbeiten&raquo;-Symbol, um die Objektart als verpflichtend zu kennzeichnen. <img src={require("/images/help/de/pmt_tutorial_typeob.png").default} alt="Adding a type obligation" title="Verpflichtung für eine Objektart hinzufügen" className="img-responsive img-inline-help"/>

**Verpflichtung für ein Attribut hinzufügen**

Um eine Verpflichtung für ein Attribut zur Objektart &laquo;CI_ResponsibleParty&raquo; hinzuzufügen, klicken sie auf das &laquo;Bearbeiten&raquo;-Symbol. Klicken sie auf &laquo;mehr&raquo;, um die vollständige Liste der vorhandenen Attribute einzusehen. Klicken sie auf den Pfeil neben &laquo;organisationName&raquo;, um die Liste von Optionen für dieses Attribut angezeigt zu bekommen. Um die Kardinalität des Attributs zu ändern, ändern sie den Wert für &laquo;Minimale Anzahl&raquo; und/oder &laquo;Maximale Anzahl&raquo;, indem sie eine Nummer eingeben. Um Inhalt in dem Attribut verpflichtend zu machen, öffnen sie das Aufklappmenü neben der Bezeichnung &laquo;Inhalt verpflichtend&raquo; und wählen sie einen Wert aus. <img src={require("/images/help/de/pmt_tutorial_attob.png").default} alt="Adding an attribute obligation" title="Verpflichtung für ein Attribut hinzufügen" className="img-responsive img-inline-help"/>

**Bedingung für einen Wertebereich festlegen**

Als nächstes wird dem Attribut &laquo;role&raquo; eine Beschränkung für den Wertebereich hinzugefügt. Scrollen sie an das Ende der Anzeige für &laquo;CI_ResponsibleParty&raquo; und klicken sie auf den Pfeil neben &laquo;role&raquo;. Klicken sie auf den Codelisten-Wert &laquo;author&raquo;, um diesen von der Liste der erlaubten Werte zu entfernen. <img src={require("/images/help/de/pmt_tutorial_domres.png").default} alt="Removing a codelist value" title="Einen Codelisten-Wert entfernen" className="img-responsive img-inline-help"/>

Klicken sie auf &laquo;Update&raquo;, um ihre Änderungen an &laquo;CI_ResponsibleParty&raquo; zu speichern.

**Eine Konsistenz-Bedingung hinzufügen**

Die INSPIRE Technical Guidelines erfordern die Existenz von entweder &laquo;MD_LegalConstraint&raquo; oder &laquo;MD_SecurityConstraint&raquo; für die korrekte Angabe von Metadaten. Dem Profil wird nun eine Konsistenz-Bedingung hinzugefügt, um diese Anforderung umzusetzen.
Navigieren sie zum &laquo;Konsistenz-Bedingungen&raquo;-Bereich ihres Profils. Klicken sie auf &laquo;+Konsistenz-Bedingung hinzufügen&raquo;.
Wählen sie im ersten Schritt einen oder mehrere Operatoren aus dem Aufklappmenü mit Operatoren aus. Wählen sie hier den &laquo;OR&raquo;-Operator. Klicken sie dann auf &laquo;+Bedingung erstellen&raquo;. Geben sie &laquo;MD_Metadata&raquo; in das erste Feld ein und navigieren sie durch das Schema, um das folgende Attribut auszuwählen: MD_Metadata.identificationInfo.MD_DataIdentification.resourceConstraints.MD_LegalConstraints
Klicken sie auf das Attribut &laquo;MD_LegalConstraints&raquo; und wählen sie &laquo;EXISTS&raquo; aus dem erscheinenden Aufklappmenü aus. Scrollen sie zum Ende des Dialogfensters und klicken sie auf &laquo;Bestätigen&raquo;, um die Konsistenz-Bedingung hinzuzufügen. <img src={require("/images/help/de/pmt_tutorial_createcond.png").default} alt="Creating a condition" title="Konsistenz-Bedingung anlegen" className="img-responsive img-inline-help"/>
Wiederholen sie den beschriebenen Schritt, um der Konsistenz-Bedingung eine zweite Bedingung hinzuzufügen. Geben sie &laquo;MD_Metadata&raquo; in das erste Feld ein und navigieren sie durch das Schema, um das folgende Attribut auszuwählen: MD_Metadata.identificationInfo.MD_DataIdentification.resourceConstraints.MD_SecurityConstraints und fügen sie die &laquo;EXISTS&raquo;-Bedingung hinzu.
Wenn sie fertig sind, scrollen sie zum Ende des Dialogs und klicken sie auf &laquo;Bestätigen&raquo;.

### **[Executable test framework](http://etf-validator.net/) und [Executable test suite](https://docs.etf-validator.net/v2.0/Developer_manuals/Developing_Executable_Test_Suites.html)**

Das Executable Test Framework (ETF) ist ein Open-source Test-Rahmenwerk, um Geodaten, Metadaten und Web-Dienste in Geodateninfrastrukturen (GDI) zu testen. Für mehr Informationen besuchen sie bitte den folgenden Link: [Über ETF](http://etf-validator.net/).

Der &laquo;Dateien&raquo;-Bereich eines Profils enthält Optionen zum Herunterladen eines Testsuite- und eines Beispiel-XML-Dokuments, die beide auf dem definierten Profil basieren.

Ein Profil muss für alle verpflichtenden Objektarten und Attribute gültige Beispiel-Werte enthalten, um die Generierung einer Beispiel-XML-Datei zu ermöglichen. Es muss ein Profil mit mindestens einer Bedingung existieren um den Download einer Test Suite zu ermöglichen. Das Format der Test Suite ist aufgrund der geforderten Kompatibilität mit den AdV- und GDI-DE-Test Suites (derzeit in Entwicklung) sowie mit dem INSPIRE Reference Validator ETF / BaseX. Um eine ETF Test Suite zu nutzen, muss diese exportiert und in einer ETF-Installation aufgesetzt werden.

Im hale»connect Profil-Management-Werkzeug (PMT), können Tag/Wert-Paare genutzt werden, um Profil-Elemente festzulegen, die für die Generierung der Test Suites und der Beispiel-XML-Dateien genutzt werden.

Es gibt folgende reservierte Tags für Tag/Wert-Paare:

1. Testcase-label (ATS-Titel): Der reservierte Tag `testcase-label` kann genutzt werden, um den Test Case in der ETF Test Suite zu benennen.
2. Testcase-description (ATS-Beschreibung): Der reservierte Tag `testcase-description` kann genutzt werden, um den Test Case in der ETF Test Suite zu beschreiben.
3. Module-id: Der reservierte Tag `module-id` kann genutzt werden, um zu signalisieren, dass ein Test Case zu einem bestimmten Modul (einer Gruppe von Tests) gehört, die in der ETS-Datei gemeinsam aufgeführt wird.
3. Example: Der reservierte Tag `example` kann genutzt werden, um ein Beispiel für einen zulässigen Wert für das Attribut anzugeben.
4. Example XML: Der reservierte Tag-Name `example-xml` ermöglicht es Nutzenden, ein XML-Fragment als Wert für das Beispiel-XML-Dokument anzugeben. Der `example-xml`-Tag steht für jede Objektart und jede Eigenschaft zur Verfügung. Fügen sie zunächst ein Tag/Wert-Paar hinzu und wählen sie dann den `example-xml`-Tag aus den verfügbaren Optionen im Aufklappmenü. Geben sie als nächstes ein gültiges XML-Code-Fragment in das Textfeld ein. Wenn es Namensräume enthält, müssen diese im Fragment definiert werden.

Beispiel für ein valides Fragment:

  <gco:CharacterString xmlns:gco="http://www.isotc211.org/2005/gco">Example-text</gco:CharacterString>

5. Frei definierbare Tags.


### **Beispiel-XML-Dateien und Test Suite-Dateien generieren**

Es wird eine Test Suite erzeugt, die auf dem angelegten Profile basiert und eine Beispiel-XML-Datei, welche die Angaben in den entsprechenden Tag/Wert-Paaren nutzt. Tag/Wert-Paare können für mehrere Zwecke genutzt werden:

1. Tag/Wert-Paare können genutzt werden, um Beispiel-Werte anzugeben, die in eine Beispiel-XML-Datei eingefügt werden, welche zum Download bereitsteht.
2. Tag/Wert-Paare können genutzt werden, um die Struktur der erzeugten ETS-Datei festzulegen.

Es wird ein Tag/Wert-Paar angelegt, um einen Wert anzugeben, der in der Beispiel-XML-Datei verwendet wird.

Navigieren sie zu dem im Rahmen des Tutorials angelegten Profil und klicken sie auf den &laquo;Objektarten&raquo;-Bereich. Geben sie in der Suchleiste &laquo;CI_ResponsibleParty&raquo; ein und kehren sie zu der Objektart zurück, mit der bereits zuvor gearbeitet wurde. Um der Objektart &laquo;CI_ResponsibleParty&raquo; ein Tag/Wert-Paar hinzuzufügen, klicken sie auf das &laquo;Bearbeiten&raquo;-Symbol. Navigieren sie zu dem &laquo;CI_ResponsibleParty&raquo;-Attribut &laquo;organisationName&raquo;, erweitern sie dessen Ansicht unter Nutzung des Pfeil-Symbols und wählen sie &laquo;+Tag/Wert-Paar hinzufügen&raquo;. Wählen sie den Tag-Namen &laquo;example&raquo; aus dem Aufklappmenü aus. Geben sie im Textfeld den Wert &laquo;wetransform&raquo; ein.

Wenn sie fertig sind, klicken sie &laquo;Update&raquo;, um das Tag/Wert-Paar hinzuzufügen. Es ist nicht möglich, mehrere Tag/Wert-Paare mit demselben Tag-Namen hinzuzufügen.

Navigieren sie zum &laquo;Dateien&raquo;-Bereich ihres Profils. Klicken sie auf &laquo;Download as Test-Suite&raquo;, um eine ETS-Datei herunterzuladen und klicken sie auf &laquo;Beispiel-XML-Dokument&raquo;, um eine Beispiel-XML-Datei herunterzuladen, die genutzt werden kann, um ihr Profil zu testen und ein valides Beispiel bereitzustellen, das mit den Anforderungen des Profils übereinstimmt. Öffnen sie die heruntergeladene Beispiel-XML-Datei in einem XML-Editor, um das &laquo;CI_ResponsibleParty&raquo;-Objekt und den dafür angegebenen Wert &laquo;wetransform&raquo; einzusehen.

Sie müssen eine laufende Instanz des ETF aufsetzen, um ihre ETS-Datei zu nutzen. Besuchen sie für mehr Informationen die [ETF GitHub-Seite](https://github.com/interactive-instruments/etf-webapp).