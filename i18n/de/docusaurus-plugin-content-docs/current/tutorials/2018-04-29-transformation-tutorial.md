---
title: "Online-Transformationen auf hale»connect konfigurieren"
categories:
- "help-page-category-tutorials"
- "help-page-subcategory-tutorials"
layout: help-detail
language: de

---

Die hale»connect Plattform kann so konfiguriert werden, dass es Nutzenden ermöglicht wird Datensätze, Metadaten und Dienste innerhalb weniger Minuten zu veröffentlichen, zu transformieren und zu validieren. Automatisierte Abläufe müssen dafür nur einmalig von jemandem mit der Rolle &laquo;Themenmanager&raquo; oder &laquo;Superanwender&raquo; konfiguriert werden und können dann von allen Nutzenden einer Organisation immer wieder verwendet werden. Für Nutzende, deren Daten häufig aktualisiert werden, erleichtern automatisierte Transformations-Abläufe das Aktualisieren und Wiederveröffentlichen von Darstellungs- und Download-Diensten. hale»connect kann im Falle von Änderungen in den Quell-Daten die Transformationen schnell und automatisch erneut durchführen und die Dienste und zugehörigen Metadaten veröffentlichen.

Dieses Tutorial beschäftigt sich mit den Schritten, die für die Konfiguration eines Online-Transformations-Ablaufs notwendig sind. Die Veröffentlichung einer Online-Transformation erfordert die Konfiguration verschiedener Ressourcen und muss von einem Nutzenden mit der Rolle &laquo;Themenmanager&raquo; oder &laquo;Superanwender&raquo; vorgenommen werden. Hier eine Liste der Ressourcen, die benötigt werden:

* ein hale»studio Transformationsprojekt
* ein Schema oder Schemas für ihre Quell-Daten
* ein Schema oder Schemas für ihre Ziel-Daten
* ein Quell-Thema
* ein Ziel-Thema
* ein Quell-Datensatz

*WICHTIG: Der Ziel-Datensatz wird während des Online-Transformations-Ablaufs automatisch generiert. Beim Ziel-Datensatz handelt es sich typischerweise um transformierte INSPIRE GML-Daten.*

### **Beispiel-Daten**

Die Installation von hale»studio und das Erzeugen von Abbildungen werden von diesem Tutorial nicht abgedeckt. Für mehr Informationen dazu, nutzen sie bitte [hale»studio](https://www.wetransform.to/products/halestudio/).

Für dieses Tutorial werden wir die folgenden Dateien nutzen:

* Ein existierendes hale»studio Transformationsprojekt. Sie können dieses [hier](https://wetransform.box.com/s/1x3r10u04fug4a4k2hzmlocqidz4tga8) herunterladen.
* Zwei Shape-Dateien *Enthalten OS data © Crown copyright and database right 2018*. Sie können die Shape-Dateien [hier](https://wetransform.box.com/shared/static/4958zkqhmr8sqt10rk5bugktbk63pv3e.zip) herunterladen.

Das Transformationsprojekt enthält eine Abbildung von öffentlich verfügbaren britischen Fluss-Daten auf die INSPIRE-Objektarten WatercourseLink und HydroNode aus dem INSPIRE Hydro Network 4.0 Schema. Die Quell-Daten sind Shape-Dateien der britischen Verwaltung, die Fluss-Daten enthalten.

### **Ein Online-Transformationsprojekt veröffentlichen**

**Schritt 1: Ein Transformationsprojekt anlegen**

Der einfachste Weg ein Transformationsprojekt auf hale»connect anzulegen, ist ein direkter Export des Projekts aus hale»studio. hale»studio bietet die Möglichkeit ein Transformationsprojekt unter Nutzung eines Export-Assistenten als hale»connect project zu exportieren. Der Assistent fordert sie auf, ihre hale»connect-Login-Informationen einzugeben, die genutzt werden, um das Transformationsprojekt im entsprechenden Online-Konto anzulegen.

<a className="image-news text-center col-xs-12 mt mb">
<img src={require('/images/help/de/Tutorial_Export_wizard.png').default} alt="" title="Ein Transformationsprojekt nach hale»connect exportieren" className="img-responsive center-block"/>
</a>

Wenn sie auf ihrem Rechner hale»studio installiert haben, können sie das Transformationsprojekt mit dem Namen "OpenRivers.halex", das in den Daten zum Tutorial enthalten ist, laden. Sie können das OpenRivers-Transformationsprojekt von dort direkt in ihr hale»connect-Konto exportieren. Wenn sie Hilfe benötigen, nutzen sie bitte die hale»studio Hilfeseite [Share and update a transformation project on hale»connect](http://help.halestudio.org/latest/index.jsp?topic=%2Feu.esdihumboldt.hale.doc.user%2Fhtml%2Ftasks%2Fhaleconnect%2Fshareproject.html) für weitere Anweisungen.

Sie können ein Transformationsprojekt auch manuell hochladen.

Ein Transformationsprojekt ist ein [hale»studio](https://www.wetransform.to/products/halestudio/) Projekt in den Formaten \*.halex oder \*.halez, das auf hale»connect hochgeladen wurde. Das Projekt beinhaltet Referenzen zu Quell- und Ziel-Schemas, eine Abbildung, die über die Zuordnung von Elementen des Quell-Schemas zu Elementen des Ziel-Schemas die Transformation definiert, zusätzliche Konfigurationen für die geladenen Schemas und Konfigurationen für den gewünschten Output des Projekts.

Um ein neues Transformationsprojekt direkt auf hale»connect anzulegen ohne dieses von hale»studio hochzuladen, folgen sie in der Rolle &laquo;Themenmanager&raquo; oder &laquo;Superanwender&raquo; diesem Ablauf:

*	Gehen sie auf &laquo;Transformationsprojekte&raquo; im Hauptmenü.
*	Gehen sie auf &laquo;+ Neues Transformationsprojekt anlegen&raquo; am Ende der Liste mit Transformationsprojekten <img src={require("/images/help/de/Tutorial_Transformation_overview.png").default} alt="" title="Ein Transformationsprojekt anlegen" className="img-responsive img-inline-help"/>
*	Laden sie die OpenRivers.halez-Datei hoch, die im Tutorial-Ordner enthalten ist. Wenn die Datei hochgeladen ist, werden ihnen eine .halex.styles.sld-Datei, eine .halex.alignment.xml-Datei und eine .halex-Datei angezeigt. Diese Dateien enthalten das Transformationsprojekt. <img src={require("/images/help/de/Tutorial_Upload_project.png").default} alt="" title="Ein Transformationsprojekt hochladen" className="img-responsive img-inline-help"/>
  *	Klicken sie auf den &laquo;+ Datei(en) hochladen&raquo;-Knopf und navigieren sie zur Projekt-Datei/den Projekt-Dateien.

    Die Versionskontrolle ist standardmäßig deaktiviert. Aktivieren sie den Versionskontrolle-Schalter um ihre stückweisen Änderungen zu dokumentieren. Sie können im &laquo;Verlauf&raquo;-Bereich ihres Transformationsprojekt die Entwicklung des Transformationsprojektes einsehen.
    Wenn sie fertig sind, klicken sie auf &laquo;Weiter&raquo;.

*	Name, Autorin oder Autor und Beschreibung ihres Transformationsprojekts werden nach dem Hochladen automatisch befüllt. Sie können die extrahierten Informationen bearbeiten, wenn sie möchten.
Wenn sie fertig sind, klicken sie auf &laquo;Weiter&raquo;.

*	Kontrollieren sie im letzten Schritt ihr Transformationsprojekt und klicken sie &laquo;Anlegen&raquo; um ihr Projekt zu speichern.

**Schritt 2: Ein Quell-Schema anlegen**

Der nächste Schritt für die Erstellung eines Online-Transformationsprojekts ist das Anlegen eines oder mehrerer Quell-Schemas für ihre Quell-Daten. Ihre Quell-Daten sind die Daten, die sie in ein anderes Format, wie beispielsweise INSPIRE-GML, überführen möchten. hale»connect stellt verschiedene Möglichkeiten bereit, ein Schema anzulegen. Mehr Informationen zum Anlegen von Schemas finden sie auf den folgenden Seiten der Dokumentation:

  * [Ein neues Schema über die Auswahl eines Presets erstellen](../setup-hc/create-a-schema/2018-01-28-schema-preset.md)
  * [Ein neues Schema über das Hochladen von Schemadateien erstellen](../setup-hc/create-a-schema/2018-01-28-schema-create-file.md)
  * [Ein neues Schema über Angabe einer Web-Adresse eines Schemas erstellen](../setup-hc/create-a-schema/2018-01-28-schema-create-external.md)
  * [Ein neues Schema auf Basis eines bestehenden Schemas erstellen](../setup-hc/create-a-schema/2018-01-28-schema-create-existing.md)

In diesem Tutorial werden wir die Option nutzen, ein neues Schema über das Hochladen einer Schema-Datei zu erstellen. Ihre Quell-Daten sind in Shape-Format und hale»connect ermöglicht das Erstellen eines Schemas aus einer vorliegenden Shape-Datei. hale»connect liest diese Shape-Datei automatisch und generiert ihr Schema.

Um auf Basis einer Shape-Datei ein neues Schema anzulegen, folgen sie in der Rolle &laquo;Themenmanager&raquo; oder &laquo;Superanwender&raquo; folgendem Ablauf:

*	Gehen sie auf &laquo;Schemas&raquo; im Hauptmenü.
*	Gehen sie auf &laquo;+ Neues Schema anlegen&raquo; am Ende der Schema-Liste.
*	Erstellungsmethode wählen. Wählen sie im ersten Schritt &laquo;Schemadateien hochladen&raquo;. Klicken sie auf &laquo;Weiter&raquo;.

*	Schema definieren. Definieren sie als nächstes das Schema, das sie nutzen wollen. Die Schemadefinition hängt von der Erstellungsmethode ab, die sie im vorherigen Schritt ausgewählt haben.

    * Klicken sie auf &laquo;Datei(en) auswählen&raquo; und navigieren sie zu den Shape-Dateien, die sich im Ordner mit den Daten zu diesem Tutorial befinden. Fügen sie die Shape-Dateien &laquo;HydroNode&raquo; und &laquo;WatercourseLink&raquo; hinzu. Sie können auch den Ordner, der die Shape-Dateien enthält, im zip-Format hochladen. Wenn sie fertig sind, klicken sie auf &laquo;Weiter&raquo;.<img src={require("/images/help/de/Tutorial_Upload_new_schema.png").default} alt="" title="Ein neues Schema anlegen" className="img-responsive img-inline-help"/>

    * Informationen ergänzen. Geben sie den Namen der Autorin oder des Autors, den Typ und die Version ihres Schemas an. Wenn sie fertig sind, klicken sie auf &laquo;Weiter&raquo;.

    * Anlegen bestätigen. Überprüfen sie in einem abschließenden Schritt ihr Schema. Sie haben die Option, ihrem Schema ein Thema hinzuzufügen oder ein solches für ihr Schema zu erstellen. Aktivieren sie den Schalter um das Anlegen eines Themas zu ermöglichen. Wenn sie fertig sind, klicken sie auf &laquo;Anlegen&raquo; um ihr Schema zu speichern und ein zugehöriges Thema anzulegen.

**Schritt 3: Ein Ziel-Schema anlegen**

Der nächste Schritt ist das Anlegen eines Schemas für die Ziel-Daten. Das Ziel der hier beschriebenen Arbeitsschritte ist es, INSPIRE-interoperable GML-Daten zu erzeugen, also müssen sie das Schema anlegen, das vom Ziel-Datensatz genutzt wird, der durch die Online-Transformation erzeugt wird. Das Transformationsprojekt, mit dem sie arbeiten, transformiert britische OpenRivers-Daten in INSPIRE HydroNode- und INSPIRE WatercourseLink-Objekte. Diese INSPIRE-Objektarten entstammen dem INSPIRE Hydro Network 4.0-Schema, sodass sie dieses auf hale»connect anlegen müssen. hale»connect enthält eine große Zahl von Schema-Presets, darunter alle INSPIRE-Schemas.

Um ein neues Schema unter Nutzung eines Presets anzulegen, folgen sie in der Rolle &laquo;Themenmanager&raquo; oder &laquo;Superanwender&raquo; diesem Ablauf:

*	Gehen sie auf &laquo;Schemas&raquo; im Hauptmenü.
*	Gehen sie auf &laquo;+ Neues Schema anlegen&raquo; am Ende der Schema-Liste.
*	Erstellungsmethode wählen. Wählen sie im ersten Schritt &laquo;Ein Preset auswählen.&raquo;. Klicken sie auf &laquo;Weiter&raquo;.
*	Schema definieren. Definieren sie als nächstes das Schema, das sie nutzen wollen. Die Schemadefinition hängt von der Erstellungsmethode ab, die sie im vorherigen Schritt ausgewählt haben.

    * Wählen sie das INSPIRE Hydro Network 4.0-Schema-Preset aus dem Aufklappmenü verfügbarer Presets aus.<img src={require("/images/help/de/Tutorial_Create_new_schema2.png").default} alt="" title="Ein neues Schema von einem Preset anlegen" className="img-responsive img-inline-help"/>

    * Informationen ergänzen. Geben sie den Namen der Autorin oder des Autors, den Typ und die Version ihres Schemas an. Stellen sie sicher, dass sie INSPIRE als Typ aus dem Aufklappmenü auswählen. Wenn sie fertig sind, klicken sie auf &laquo;Weiter&raquo;.

    * Anlegen bestätigen. Überprüfen sie in einem abschließenden Schritt ihr Schema. Sie haben die Option, ihrem Schema ein Thema hinzuzufügen oder ein solches für ihr Schema zu erstellen. Aktivieren sie den Schalter um das Anlegen eines Themas zu ermöglichen. Wenn sie fertig sind, klicken sie auf &laquo;Anlegen&raquo; um ihr Schema zu speichern und ein zugehöriges Thema anzulegen.

**Schritt 4: Ein Quell-Thema konfigurieren**

Ein Thema ist ein wiederverwendbares Konfigurationsobjekt, das verwendet wird, um allgemeine Einstellungen für Datensatz-Metadaten, Dienste-Bereitstellung und Transformationen zu definieren. Ein Thema besteht aus mehreren Elemente:

* Ein Schema, das durch die Verbindung zu Objektarten definiert wird.
* Anzeige-Einstellungen für die Attribute und Objektarten des Schemas, wie beispielsweise Alias und Darstellung.
* Eine Metadaten-Konfiguration, die festlegt, welche Metadaten-Felder bereitgestellt werden müssen und Standardwerte sowie automatische Füll-Regeln für eine stärkere Automatisierung festlegt.
* Verbindungen zu Transformationsprojekten, die Format-Konvertierungen und Schema-Transformationen erlauben.
* Eine Konfiguration für einen automatischen Ablauf, die dafür sorgt, dass die Dienste-Bereitstellung und die Daten-Transformation durch bestimmte Ereignisse, wie die Aktualisierung eines Datensatzes ausgelöst werden können.

*WICHTIG: Sie benötigen die Berechtigungen der Rollen &laquo;Themenmanager&raquo; oder &laquo;Superanwender&raquo; um ein Thema anzulegen und zu konfigurieren.*

In diesem Schritt werden wir das Quell-Thema so konfigurieren, dass eine Online-Transformation und eine Aktualisierung der veröffentlichten Dienste durchgeführt wird, wenn sich die Quell-Daten ändern.

Navigieren sie zunächst zu dem Thema, das sie während des Anlegen des Schemas in Schritt 2 angelegt haben.

* Gehen sie auf &laquo;Themen&raquo; im Hauptmenü.
* Geben sie den Namen ihres Quell-Themas in die Suchleiste ein. Wenn sie ein Thema während des Anlegens eines Schemas anlegen, erhält ihr Thema automatisch den gleichen Namen wie ihr Schema. Sie können auch das Aufklappmenü neben &laquo;Sortierung&raquo; nutzen. Wählen sie &laquo;Aktualität&raquo; um ihre zuletzt erstellten Themen anzeigen zu lassen.
* Wählen sie ihr Thema von der Liste der angezeigten Ressourcen aus.

Der erste Bereich, der hier näher betrachtet wird, ist der &laquo;Objektarten&raquo;-Bereich.

* Klicken sie auf den Bereich namens &laquo;Objektarten&raquo;. <img src={require("/images/help/de/Tutorial_Theme_details.png").default} alt="" title="Objektarten" className="img-responsive img-inline-help"/>

Im &laquo;Objektarten&raquo;-Bereich werden alle Objektarten angezeigt, die in dem mit dem Thema verbundenen Schema enthalten sind. Stellen sie sicher, dass ihnen sowohl die Objektart WatercourseLink als auch die Objektart HydroNode angezeigt wird. Sie können auf eine Objektart klicken, um Alias für die Feldnamen hinzuzufügen.

Als nächstes werden wir dem Quell-Thema im &laquo;Transformation&raquo;-Bereich eine Transformations-Konfiguration hinzufügen.

Eine Transformations-Konfiguration ermöglicht es, ein Transformationsprojekt und ein Ziel-Thema mit ihren Quell-Daten zu verbinden. Die Konfiguration stellt für hale»connect die Information bereit, was passieren soll, wenn sie neue oder aktualisierte Daten hochladen. In diesem Tutorial beabsichtigen wir, dass hale»connect jedes Mal, wenn die Quell-Daten aktualisiert werden, eine Online-Transformation durchführt und die transformierten, INSPIRE-interoperablen GML-Daten veröffentlicht. Eine entsprechende Konfiguration wird mit Hilfe der folgenden Schritte erstellt:

* Klicken sie auf den Bereich namens &laquo;Transformation&raquo;. <img src={require("/images/help/de/Tutorial_transformation_config.png").default} alt="" title="Transformations-Konfiguration" className="img-responsive img-inline-help"/>
* Klicken sie auf &laquo;+ Neue Transformations-Konfiguration anlegen&raquo;.
* Klicken sie auf &laquo;+Projekt auswählen&raquo; und navigieren sie zu dem Transformationprojekt, das sie auf hale»connect hochgeladen haben. Wenn sie den Namen des Transformationsprojektes nicht bearbeiten haben, geben sie dazu &laquo;OpenRivers&raquo; in der Suchleiste ein. Klicken sie auf den “»”-Knopf um das Transformationsprojekt hinzuzufügen.
* Klicken sie auf &laquo;+Ziel-Thema auswählen&raquo; und navigieren sie zu dem Ziel-Thema, das sie während des Anlegen des Schemas in Schritt 3 angelegt haben. Die Einstellungen zum Ziel-Thema stellen für hale»connect die Information bereit, dass die transformierten Daten veröffentlicht werden müssen.
* Klicken sie auf &laquo;Konfiguration hinzufügen&raquo;.

Dem Quell-Thema wurde nun eine Transformations-Konfiguration hinzugefügt. Es können auch Automatisierungs-Regeln festgelegt werden, die angeben, wann hale»connect die Online-Transformation ausführt, die hinzugefügt wurde. Ein automatisierter Ablauf kann die Dienste-Bereitstellung und Daten-Transformation als Hintergrundprozess auslösen und benötigt keine aktive Handlung der Nutzenden. Der automatisierte Ablauf reagiert auf Ereignisse wie beispielsweise die Aktualisierung von Daten oder Konfigurationen und die Ausführung von Transformationen. Wenn diese Ereignisse auftreten, werden externe Daten oder Metadaten abgerufen, Dienste angelegt und veröffentlicht und Transformationsprojekte ausgeführt. Wir können solche Automatisierungs-Regeln im Bereich &laquo;Automatisierung&raquo; des Quellthemas angeben.

* Klicken sie auf den Bereich namens &laquo;Automatisierung&raquo;. <img src={require("/images/help/de/Tutorial_transformation_automation.png").default} alt="" title="Transformation automatisieren" className="img-responsive img-inline-help"/>
* Klicken sie auf das Aufklappmenü und wählen sie aus, wann die Ausführung stattfinden soll - manuell, sofort oder später.

Wenn sie &laquo;später&raquo; ausgewählt haben, geben sie an, wann genau die Transformation und die Bereitstellung ausgeführt werden sollen:
  * Täglich: Geben sie an, zu welcher Uhrzeit die Transformation und Bereitstellung ausgeführt werden sollen.
  * Wöchentlich: Geben sie an, an welchem Wochentag und um welche Uhrzeit die Transformation und Bereitstellung ausgeführt werden sollen.
  * Monatlich: Geben sie an, an welchem Tag des Monats und zu welcher Uhrzeit die Transformation und Bereitstellung ausgeführt werden sollen.

**Schritt 5: Ein Ziel-Thema konfigurieren**

In diesem Schritt wird die Bereitstellung INSPIRE-interoperabler Darstellungs- und Downloaddienste konfiguriert. Das Ziel-Thema definiert, wie ihre transformierten INSPIRE-GML-Daten veröffentlicht werden. Themen ermöglichen es ihnen festzulegen, welche Dienste angeboten werden sollen (WFS, Predefined dataset, WMS), welche Koordinatenreferenzsysteme die Dienste nutzen sollen und vieles mehr. Auf einige der Optionen wird im Folgenden eingegangen.
Navigieren sie zunächst zu dem Thema, das sie während des Anlegens des Schemas in Schritt 3 angelegt haben.

* Gehen sie auf &laquo;Themen&raquo; im Hauptmenü.
* Geben sie den Namen ihres Ziel-Themas in die Suchleiste ein. Wenn sie ein Thema während des Anlegens eines Schemas anlegen, erhält ihr Thema automatisch den gleichen Namen wie ihr Schema. Sie können auch das Aufklappmenü neben &laquo;Sortierung&raquo; nutzen. Wählen sie &laquo;Aktualität&raquo; um ihre zuletzt erstellten Themen anzeigen zu lassen.
* Wählen sie ihr Thema von der Liste der angezeigten Ressourcen aus.

Als nächstes erfolgt die Konfiguration der Darstellungs-Dienst-Einstellungen.
* Klicken sie auf den Bereich namens &laquo;Darstellungs-Dienste&raquo;. <img src={require("/images/help/de/Tutorial_view_services.png").default} alt="" title="Darstellungs-Dienste konfigurieren" className="img-responsive img-inline-help"/>
* Klicken sie auf den “+”-Knopf unterhalb des Standard-Koordinatenreferenzsystems um ein zusätzliches Koordinatenreferenzsystem hinzuzufügen.
    * Fügen sie das INSPIRE-konforme Koordinatenreferenzsystem EPSG:4258 hinzu. Sie können das Standard-Koordinatenreferenzsystem bearbeiten und so viele Koordinatenreferenzsysteme hinzufügen, wie sie möchten. Ihre Darstellungs-Dienste werden in den Koordinatenreferenzsystemen zur Verfügung stehen, die sie in dieser Einstellung angeben.
* Klicken sie auf das Aufklappmenü neben &laquo;GetFeatureInfo&raquo;. Das Aktivieren von &laquo;GetFeatureInfo&raquo; macht ihren WMS abfragbar.

Als nächstes erfolgt die Konfiguration der Download-Dienst-Einstellungen.

* Klicken sie auf den Bereich namens &laquo;Download-Dienste&raquo;. <img src={require("/images/help/de/Tutorial_download_services.png").default} alt="" title="Download-Dienste konfigurieren" className="img-responsive img-inline-help"/>
* Klicken sie auf den “+”-Knopf unter &laquo;Predefined Dataset&raquo; um einen zusätzlichen Dienste-Typ hinzuzufügen.
    * Wählen sie &laquo;WFS&raquo; aus dem Aufklappmenü aus. Die Download-Dienste werden dann sowohl als ATOM feed (Predefined Dataset) als auch in Form eines WFS bereitstehen.
    * Wählen Sie &laquo;OGC-API&raquo; aus dem Aufklappmenü aus. Die Download-Dienste werden dann sowohl als ATOM feed (Predefined Dataset) als auch in Form eienr OGC-API bereitstehen.
* Klicken sie auf den “+”-Knopf unter &laquo;Shapefile 1.0&raquo; um ein zusätzliches Datenformat hinzuzufügen.
    * Wählen sie &laquo;GML&raquo; aus dem Aufklappmenü aus. Das Predefined Dataset kann nun als Shape-Datei oder als GML-Datei heruntergeladen werden. Die Downloads werden in allen Koordinatenreferenzsystemen zur Verfügung stehen, die sie in den Download-Service-Einstellungen angeben.

Zuletzt wird das Ziel-Thema so konfiguriert, dass automatisch INSPIRE-Dienste neu veröffentlicht werden, wenn die transformierte GML-Datei aktualisiert oder verändert wird.

* Klicken sie auf den Bereich namens &laquo;Automatisierung&raquo;.
* Klicken sie auf das Aufklappmenü und wählen sie &laquo;Sofort&raquo;.

Diese Einstellung stellt sicher, dass ihre veröffentlichten Dienste sofort alle Änderungen an ihren transformierten Daten wiederspiegeln werden. Solche Änderungen können als Ergebnis einer erneuten Ausführung des Online-Transformationsprojektes auftreten.

**Schritt 6: Einen Quell-Datensatz anlegen**

Im letzten Schritt wird ein Quell-Datensatz angelegt und der Online-Transformations-Ablauf ausgeführt, der im Rahmen dieses Tutorials konfiguriert wurde. Durch die Konfiguration des Quell- und des Ziel-Themas, können mit nur wenigen Klicks Daten hochgeladen, eine Online-Transformation durchgeführt und INSPIRE Darstellungs- und Download-Dienste veröffentlicht werden.

* Gehen sie auf &laquo;Daten&raquo; im Hauptmenü.
* Gehen sie auf &laquo;Neuen Datensatz anlegen&raquo; am Ende der Datensatz-Liste.
* Wählen sie ihr Quell-Thema aus, um es mit dem Datensatz zu verbinden.
* Klicken sie &laquo;Datei(en) auswählen&raquo; und navigieren sie zu den Tutorial-Daten namens [OpenRivers.zip](https://wetransform.box.com/shared/static/4958zkqhmr8sqt10rk5bugktbk63pv3e.zip). Wenn sie mit Shape-Dateien arbeiten, empfehlen wir den Upload in Form einer .zip-Datei.
* Geben sie ihrem Datensatz einen Namen. Dieser Name sollte es ihnen ermöglichen, den Datensatz schnell und sicher im System zu identifizieren.
* Geben sie Metadaten für ihren Datensatz an. Es gibt verschiedene Möglichkeiten, einem Datensatz Metadatan hinzuzufügen. Mehr Informationen dazu finden sich auf unseren Hilfe-Seiten.
* Der Schritt «Projektvariablen eingeben» wird angezeigt, wenn ihr Thema eine Transformationskonfiguration hat und sie ihrem Transformationsprojekt in hale»studio Projektvariablen hinzugefügt haben. hale»connect bietet Benutzenden die Möglichkeit, die Projektvariablen des Transformationsprojekts in diesem optionalen Schritt zu bearbeiten.  
* In einem letzten Schritt können sie die Schritte des Veröffentlichungs- und Transformations-Ablaufes überprüfen, die sie für das Thema konfiguriert haben. Ihnen werden fünf Schalter angezeigt, mit denen sie Darstellungs- und Download-Dienste für ihren Quell-Datensatz anlegen können, den Datensatz transformieren können sowie Darstellungs- und Download-Dienste für ihren transformierten Datensatz anlegen können. Aktivieren sie alle Schalter und klicken sie auf &laquo;Weiter&raquo;.

hale»connect führt nun den Online-Transformations-Ablauf durch und sie automatisch zu ihrem frisch veröffentlichten Quell-Datensatz weiterleiten. Es ist wichtig zu verstehen, dass ihre Quell-Daten auch in INSPIRE-GML transformiert und auch diese Daten veröffentlicht wurden. Um ihren transformierten Datensatz anzeigen zu lassen, folgen sie bitte diesen Schritten:

* Klicken sie auf den Bereich namens &laquo;Abgeleitete Daten&raquo;.
* Klicken sie auf das aufgelistete Transformationsprojekt.
* Klicken sie auf den Link unter &laquo;Ziel-Datensatz&raquo; um sich ihre INSPIRE Darstellungs- und Download-Dienste für ihre transformierten GML-Daten anzeigen zu lassen. <img src={require("/images/help/de/Tutorial_transformed_data.png").default} alt="" title="Abgeleitete Daten" className="img-responsive img-inline-help"/>
* Klicken sie auf den &laquo;Darstellungs-Dienste&raquo;-Bereich ihres transformierten Datensatzes.
* Klicken sie &laquo;Kartenansicht&raquo; um ihren neuen transformierten Datensatz zu entdecken.

In diesem Tutorial wurde ein Online-Transformations-Ablauf konfiguriert, der von verschiedenen Nutzern aller Rollen so oft wiederverwendet kann, wie nötig. Nachdem er einmal konfiguriert wurde, kann er leicht bearbeitet und aktualisiert werden, um benötigte Änderungen vorzunehmen. Sie können ihr existierendes hale»connect-Transformationsprojekt direkt aus hale»studio aktualisieren und ihre bestehenden Quell- und Zielthemen anpassen, wenn sie Änderungen benötigen. Online-Transformations-Abläufe sind ideal für Nutzende mit Quell-Daten, die häufig aktualisiert werden, da es das wiederholte Durchführen manueller Transformationen ersetzt. Wenn sich ihre Quell-Daten ändern, wird der Online-Transformations-Ablauf automatisch die Transformation erneut ausführen und ihre INSPIRE-Dienste erneut veröffentlichen, um ihren Nutzern die aktuellste Version der Daten bereitzustellen.
