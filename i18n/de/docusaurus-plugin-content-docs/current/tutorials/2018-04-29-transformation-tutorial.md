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
* ein Schema oder Schemas für Ihre Quell-Daten
* ein Schema oder Schemas für Ihre Ziel-Daten
* ein Quell-Thema
* ein Ziel-Thema
* ein Quell-Datensatz

*WICHTIG: Der Ziel-Datensatz wird während des Online-Transformations-Ablaufs automatisch generiert. Beim Ziel-Datensatz handelt es sich typischerweise um transformierte INSPIRE GML-Daten.*

### **Beispiel-Daten**

Die Installation von hale»studio und das Erzeugen von Abbildungen werden von diesem Tutorial nicht abgedeckt. Für mehr Informationen dazu, nutzen Sie bitte [hale»studio](https://www.wetransform.to/products/halestudio/).

Für dieses Tutorial werden wir die folgenden Dateien nutzen:

* Ein existierendes hale»studio Transformationsprojekt. Sie können dieses [hier](https://wetransform.box.com/s/1x3r10u04fug4a4k2hzmlocqidz4tga8) herunterladen.
* Zwei Shape-Dateien *Enthalten OS data © Crown copyright and database right 2018*. Sie können die Shape-Dateien [hier](https://wetransform.box.com/shared/static/4958zkqhmr8sqt10rk5bugktbk63pv3e.zip) herunterladen.

Das Transformationsprojekt enthält eine Abbildung von öffentlich verfügbaren britischen Fluss-Daten auf die INSPIRE-Objektarten WatercourseLink und HydroNode aus dem INSPIRE Hydro Network 4.0 Schema. Die Quell-Daten sind Shape-Dateien der britischen Verwaltung, die Fluss-Daten enthalten.

### **Ein Online-Transformationsprojekt veröffentlichen**

**Schritt 1: Ein Transformationsprojekt anlegen**

Der einfachste Weg ein Transformationsprojekt auf hale»connect anzulegen, ist ein direkter Export des Projekts aus hale»studio. hale»studio bietet die Möglichkeit ein Transformationsprojekt unter Nutzung eines Export-Assistenten als hale»connect project zu exportieren. Der Assistent fordert Sie auf, Ihre hale»connect-Login-Informationen einzugeben, die genutzt werden, um das Transformationsprojekt im entsprechenden Online-Konto anzulegen.

<a className="image-news text-center col-xs-12 mt mb">
<img src={require('/images/help/de/Tutorial_Export_wizard.png').default} alt="" title="Ein Transformationsprojekt nach hale»connect exportieren" className="img-responsive center-block"/>
</a>

Wenn Sie auf Ihrem Rechner hale»studio installiert haben, können Sie das Transformationsprojekt mit dem Namen "OpenRivers.halex", das in den Daten zum Tutorial enthalten ist, laden. Sie können das OpenRivers-Transformationsprojekt von dort direkt in Ihr hale»connect-Konto exportieren. Wenn Sie Hilfe benötigen, nutzen Sie bitte die hale»studio Hilfeseite [Share and update a transformation project on hale»connect](http://help.halestudio.org/latest/index.jsp?topic=%2Feu.esdihumboldt.hale.doc.user%2Fhtml%2Ftasks%2Fhaleconnect%2Fshareproject.html) für weitere Anweisungen.

Sie können ein Transformationsprojekt auch manuell hochladen.

Ein Transformationsprojekt ist ein [hale»studio](https://www.wetransform.to/products/halestudio/) Projekt in den Formaten \*.halex oder \*.halez, das auf hale»connect hochgeladen wurde. Das Projekt beinhaltet Referenzen zu Quell- und Ziel-Schemas, eine Abbildung, die über die Zuordnung von Elementen des Quell-Schemas zu Elementen des Ziel-Schemas die Transformation definiert, zusätzliche Konfigurationen für die geladenen Schemas und Konfigurationen für den gewünschten Output des Projekts.

Um ein neues Transformationsprojekt direkt auf hale»connect anzulegen ohne dieses von hale»studio hochzuladen, folgen Sie in der Rolle &laquo;Themenmanager&raquo; oder &laquo;Superanwender&raquo; diesem Ablauf:

*	Gehen Sie auf &laquo;Transformationsprojekte&raquo; im Hauptmenü.
*	Gehen Sie auf &laquo;+ Neues Transformationsprojekt anlegen&raquo; am Ende der Liste mit Transformationsprojekten <img src={require("/images/help/de/Tutorial_Transformation_overview.png").default} alt="" title="Ein Transformationsprojekt anlegen" className="img-responsive img-inline-help"/>
*	Laden Sie die OpenRivers.halez-Datei hoch, die im Tutorial-Ordner enthalten ist. Wenn die Datei hochgeladen ist, werden Ihnen eine .halex.styles.sld-Datei, eine .halex.alignment.xml-Datei und eine .halex-Datei angezeigt. Diese Dateien enthalten das Transformationsprojekt. <img src={require("/images/help/de/Tutorial_Upload_project.png").default} alt="" title="Ein Transformationsprojekt hochladen" className="img-responsive img-inline-help"/>
  *	Klicken Sie auf den &laquo;+ Datei(en) hochladen&raquo;-Knopf und navigieren Sie zur Projekt-Datei/den Projekt-Dateien.

    Die Versionskontrolle ist standardmäßig deaktiviert. Aktivieren Sie den Versionskontrolle-Schalter um Ihre stückweisen Änderungen zu dokumentieren. Sie können im &laquo;Verlauf&raquo;-Bereich Ihres Transformationsprojekt die Entwicklung des Transformationsprojektes einsehen.
    Wenn Sie fertig sind, klicken Sie auf &laquo;Weiter&raquo;.

*	Name, Autorin oder Autor und Beschreibung Ihres Transformationsprojekts werden nach dem Hochladen automatisch befüllt. Sie können die extrahierten Informationen bearbeiten, wenn Sie möchten.
Wenn Sie fertig sind, klicken Sie auf &laquo;Weiter&raquo;.

*	Kontrollieren Sie im letzten Schritt Ihr Transformationsprojekt und klicken Sie &laquo;Anlegen&raquo; um Ihr Projekt zu speichern.

**Schritt 2: Ein Quell-Schema anlegen**

Der nächste Schritt für die Erstellung eines Online-Transformationsprojekts ist das Anlegen eines oder mehrerer Quell-Schemas für Ihre Quell-Daten. Ihre Quell-Daten sind die Daten, die Sie in ein anderes Format, wie beispielsweise INSPIRE-GML, überführen möchten. hale»connect stellt verschiedene Möglichkeiten bereit, ein Schema anzulegen. Mehr Informationen zum Anlegen von Schemas finden Sie auf den folgenden Seiten der Dokumentation:

  * [Ein neues Schema über die Auswahl eines Presets erstellen](../setup-hc/create-a-schema/2018-01-28-schema-preset.md)
  * [Ein neues Schema über das Hochladen von Schemadateien erstellen](../setup-hc/create-a-schema/2018-01-28-schema-create-file.md)
  * [Ein neues Schema über Angabe einer Web-Adresse eines Schemas erstellen](../setup-hc/create-a-schema/2018-01-28-schema-create-external.md)
  * [Ein neues Schema auf Basis eines bestehenden Schemas erstellen](../setup-hc/create-a-schema/2018-01-28-schema-create-existing.md)

In diesem Tutorial werden wir die Option nutzen, ein neues Schema über das Hochladen einer Schema-Datei zu erstellen. Ihre Quell-Daten sind in Shape-Format und hale»connect ermöglicht das Erstellen eines Schemas aus einer vorliegenden Shape-Datei. hale»connect liest diese Shape-Datei automatisch und generiert Ihr Schema.

Um auf Basis einer Shape-Datei ein neues Schema anzulegen, folgen Sie in der Rolle &laquo;Themenmanager&raquo; oder &laquo;Superanwender&raquo; folgendem Ablauf:

*	Gehen Sie auf &laquo;Schemas&raquo; im Hauptmenü.
*	Gehen Sie auf &laquo;+ Neues Schema anlegen&raquo; am Ende der Schema-Liste.
*	Erstellungsmethode wählen. Wählen Sie im ersten Schritt &laquo;Schemadateien hochladen&raquo;. Klicken Sie auf &laquo;Weiter&raquo;.

*	Schema definieren. Definieren Sie als nächstes das Schema, das Sie nutzen wollen. Die Schemadefinition hängt von der Erstellungsmethode ab, die Sie im vorherigen Schritt ausgewählt haben.

    * Klicken Sie auf &laquo;Datei(en) auswählen&raquo; und navigieren Sie zu den Shape-Dateien, die sich im Ordner mit den Daten zu diesem Tutorial befinden. Fügen Sie die Shape-Dateien &laquo;HydroNode&raquo; und &laquo;WatercourseLink&raquo; hinzu. Sie können auch den Ordner, der die Shape-Dateien enthält, im zip-Format hochladen. Wenn Sie fertig sind, klicken Sie auf &laquo;Weiter&raquo;.<img src={require("/images/help/de/Tutorial_Upload_new_schema.png").default} alt="" title="Ein neues Schema anlegen" className="img-responsive img-inline-help"/>

    * Informationen ergänzen. Geben Sie den Namen der Autorin oder des Autors, den Typ und die Version Ihres Schemas an. Wenn Sie fertig sind, klicken Sie auf &laquo;Weiter&raquo;.

    * Anlegen bestätigen. Überprüfen Sie in einem abschließenden Schritt Ihr Schema. Sie haben die Option, Ihrem Schema ein Thema hinzuzufügen oder ein solches für Ihr Schema zu erstellen. Aktivieren Sie den Schalter um das Anlegen eines Themas zu ermöglichen. Wenn Sie fertig sind, klicken Sie auf &laquo;Anlegen&raquo; um Ihr Schema zu speichern und ein zugehöriges Thema anzulegen.

**Schritt 3: Ein Ziel-Schema anlegen**

Der nächste Schritt ist das Anlegen eines Schemas für die Ziel-Daten. Das Ziel der hier beschriebenen Arbeitsschritte ist es, INSPIRE-interoperable GML-Daten zu erzeugen, also müssen Sie das Schema anlegen, das vom Ziel-Datensatz genutzt wird, der durch die Online-Transformation erzeugt wird. Das Transformationsprojekt, mit dem Sie arbeiten, transformiert britische OpenRivers-Daten in INSPIRE HydroNode- und INSPIRE WatercourseLink-Objekte. Diese INSPIRE-Objektarten entstammen dem INSPIRE Hydro Network 4.0-Schema, sodass Sie dieses auf hale»connect anlegen müssen. hale»connect enthält eine große Zahl von Schema-Presets, darunter alle INSPIRE-Schemas.

Um ein neues Schema unter Nutzung eines Presets anzulegen, folgen Sie in der Rolle &laquo;Themenmanager&raquo; oder &laquo;Superanwender&raquo; diesem Ablauf:

*	Gehen Sie auf &laquo;Schemas&raquo; im Hauptmenü.
*	Gehen Sie auf &laquo;+ Neues Schema anlegen&raquo; am Ende der Schema-Liste.
*	Erstellungsmethode wählen. Wählen Sie im ersten Schritt &laquo;Ein Preset auswählen.&raquo;. Klicken Sie auf &laquo;Weiter&raquo;.
*	Schema definieren. Definieren Sie als nächstes das Schema, das Sie nutzen wollen. Die Schemadefinition hängt von der Erstellungsmethode ab, die Sie im vorherigen Schritt ausgewählt haben.

    * Wählen Sie das INSPIRE Hydro Network 4.0-Schema-Preset aus dem Aufklappmenü verfügbarer Presets aus.<img src={require("/images/help/de/Tutorial_Create_new_schema2.png").default} alt="" title="Ein neues Schema von einem Preset anlegen" className="img-responsive img-inline-help"/>

    * Informationen ergänzen. Geben Sie den Namen der Autorin oder des Autors, den Typ und die Version Ihres Schemas an. Stellen Sie sicher, dass Sie INSPIRE als Typ aus dem Aufklappmenü auswählen. Wenn Sie fertig sind, klicken Sie auf &laquo;Weiter&raquo;.

    * Anlegen bestätigen. Überprüfen Sie in einem abschließenden Schritt Ihr Schema. Sie haben die Option, Ihrem Schema ein Thema hinzuzufügen oder ein solches für Ihr Schema zu erstellen. Aktivieren Sie den Schalter um das Anlegen eines Themas zu ermöglichen. Wenn Sie fertig sind, klicken Sie auf &laquo;Anlegen&raquo; um Ihr Schema zu speichern und ein zugehöriges Thema anzulegen.

**Schritt 4: Ein Quell-Thema konfigurieren**

Ein Thema ist ein wiederverwendbares Konfigurationsobjekt, das verwendet wird, um allgemeine Einstellungen für Datensatz-Metadaten, Dienste-Bereitstellung und Transformationen zu definieren. Ein Thema besteht aus mehreren Elemente:

* Ein Schema, das durch die Verbindung zu Objektarten definiert wird.
* Anzeige-Einstellungen für die Attribute und Objektarten des Schemas, wie beispielsweise Alias und Darstellung.
* Eine Metadaten-Konfiguration, die festlegt, welche Metadaten-Felder bereitgestellt werden müssen und Standardwerte sowie automatische Füll-Regeln für eine stärkere Automatisierung festlegt.
* Verbindungen zu Transformationsprojekten, die Format-Konvertierungen und Schema-Transformationen erlauben.
* Eine Konfiguration für einen automatischen Ablauf, die dafür sorgt, dass die Dienste-Bereitstellung und die Daten-Transformation durch bestimmte Ereignisse, wie die Aktualisierung eines Datensatzes ausgelöst werden können.

*WICHTIG: Sie benötigen die Berechtigungen der Rollen &laquo;Themenmanager&raquo; oder &laquo;Superanwender&raquo; um ein Thema anzulegen und zu konfigurieren.*

In diesem Schritt werden wir das Quell-Thema so konfigurieren, dass eine Online-Transformation und eine Aktualisierung der veröffentlichten Dienste durchgeführt wird, wenn sich die Quell-Daten ändern.

Navigieren Sie zunächst zu dem Thema, das Sie während des Anlegen des Schemas in Schritt 2 angelegt haben.

* Gehen Sie auf &laquo;Themen&raquo; im Hauptmenü.
* Geben Sie den Namen Ihres Quell-Themas in die Suchleiste ein. Wenn Sie ein Thema während des Anlegens eines Schemas anlegen, erhält Ihr Thema automatisch den gleichen Namen wie Ihr Schema. Sie können auch das Aufklappmenü neben &laquo;Sortierung&raquo; nutzen. Wählen Sie &laquo;Aktualität&raquo; um Ihre zuletzt erstellten Themen anzeigen zu lassen.
* Wählen Sie Ihr Thema von der Liste der angezeigten Ressourcen aus.

Der erste Bereich, der hier näher betrachtet wird, ist der &laquo;Objektarten&raquo;-Bereich.

* Klicken Sie auf den Bereich namens &laquo;Objektarten&raquo;. <img src={require("/images/help/de/Tutorial_Theme_details.png").default} alt="" title="Objektarten" className="img-responsive img-inline-help"/>

Im &laquo;Objektarten&raquo;-Bereich werden alle Objektarten angezeigt, die in dem mit dem Thema verbundenen Schema enthalten sind. Stellen Sie sicher, dass Ihnen sowohl die Objektart WatercourseLink als auch die Objektart HydroNode angezeigt wird. Sie können auf eine Objektart klicken, um Alias für die Feldnamen hinzuzufügen.

Als nächstes werden wir dem Quell-Thema im &laquo;Transformation&raquo;-Bereich eine Transformations-Konfiguration hinzufügen.

Eine Transformations-Konfiguration ermöglicht es, ein Transformationsprojekt und ein Ziel-Thema mit Ihren Quell-Daten zu verbinden. Die Konfiguration stellt für hale»connect die Information bereit, was passieren soll, wenn Sie neue oder aktualisierte Daten hochladen. In diesem Tutorial beabsichtigen wir, dass hale»connect jedes Mal, wenn die Quell-Daten aktualisiert werden, eine Online-Transformation durchführt und die transformierten, INSPIRE-interoperablen GML-Daten veröffentlicht. Eine entsprechende Konfiguration wird mit Hilfe der folgenden Schritte erstellt:

* Klicken Sie auf den Bereich namens &laquo;Transformation&raquo;. <img src={require("/images/help/de/Tutorial_transformation_config.png").default} alt="" title="Transformations-Konfiguration" className="img-responsive img-inline-help"/>
* Klicken Sie auf &laquo;+ Neue Transformations-Konfiguration anlegen&raquo;.
* Klicken Sie auf &laquo;+Projekt auswählen&raquo; und navigieren Sie zu dem Transformationprojekt, das Sie auf hale»connect hochgeladen haben. Wenn Sie den Namen des Transformationsprojektes nicht bearbeiten haben, geben Sie dazu &laquo;OpenRivers&raquo; in der Suchleiste ein. Klicken Sie auf den “»”-Knopf um das Transformationsprojekt hinzuzufügen.
* Klicken Sie auf &laquo;+Ziel-Thema auswählen&raquo; und navigieren Sie zu dem Ziel-Thema, das Sie während des Anlegen des Schemas in Schritt 3 angelegt haben. Die Einstellungen zum Ziel-Thema stellen für hale»connect die Information bereit, dass die transformierten Daten veröffentlicht werden müssen.
* Klicken Sie auf &laquo;Konfiguration hinzufügen&raquo;.

Dem Quell-Thema wurde nun eine Transformations-Konfiguration hinzugefügt. Es können auch Automatisierungs-Regeln festgelegt werden, die angeben, wann hale»connect die Online-Transformation ausführt, die hinzugefügt wurde. Ein automatisierter Ablauf kann die Dienste-Bereitstellung und Daten-Transformation als Hintergrundprozess auslösen und benötigt keine aktive Handlung der Nutzenden. Der automatisierte Ablauf reagiert auf Ereignisse wie beispielsweise die Aktualisierung von Daten oder Konfigurationen und die Ausführung von Transformationen. Wenn diese Ereignisse auftreten, werden externe Daten oder Metadaten abgerufen, Dienste angelegt und veröffentlicht und Transformationsprojekte ausgeführt. Wir können solche Automatisierungs-Regeln im Bereich &laquo;Automatisierung&raquo; des Quellthemas angeben.

* Klicken Sie auf den Bereich namens &laquo;Automatisierung&raquo;. <img src={require("/images/help/de/Tutorial_transformation_automation.png").default} alt="" title="Transformation automatisieren" className="img-responsive img-inline-help"/>
* Klicken Sie auf das Aufklappmenü und wählen Sie aus, wann die Ausführung stattfinden soll - manuell, sofort oder später.

Wenn Sie &laquo;später&raquo; ausgewählt haben, geben Sie an, wann genau die Transformation und die Bereitstellung ausgeführt werden sollen:
  * Täglich: Geben Sie an, zu welcher Uhrzeit die Transformation und Bereitstellung ausgeführt werden sollen.
  * Wöchentlich: Geben Sie an, an welchem Wochentag und um welche Uhrzeit die Transformation und Bereitstellung ausgeführt werden sollen.
  * Monatlich: Geben Sie an, an welchem Tag des Monats und zu welcher Uhrzeit die Transformation und Bereitstellung ausgeführt werden sollen.

**Schritt 5: Ein Ziel-Thema konfigurieren**

In diesem Schritt wird die Bereitstellung INSPIRE-interoperabler Darstellungs- und Downloaddienste konfiguriert. Das Ziel-Thema definiert, wie Ihre transformierten INSPIRE-GML-Daten veröffentlicht werden. Themen ermöglichen es Ihnen festzulegen, welche Dienste angeboten werden sollen (WFS, Predefined dataset, WMS), welche Koordinatenreferenzsysteme die Dienste nutzen sollen und vieles mehr. Auf einige der Optionen wird im Folgenden eingegangen.
Navigieren Sie zunächst zu dem Thema, das Sie während des Anlegens des Schemas in Schritt 3 angelegt haben.

* Gehen Sie auf &laquo;Themen&raquo; im Hauptmenü.
* Geben Sie den Namen Ihres Ziel-Themas in die Suchleiste ein. Wenn Sie ein Thema während des Anlegens eines Schemas anlegen, erhält Ihr Thema automatisch den gleichen Namen wie Ihr Schema. Sie können auch das Aufklappmenü neben &laquo;Sortierung&raquo; nutzen. Wählen Sie &laquo;Aktualität&raquo; um Ihre zuletzt erstellten Themen anzeigen zu lassen.
* Wählen Sie Ihr Thema von der Liste der angezeigten Ressourcen aus.

Als nächstes erfolgt die Konfiguration der Darstellungs-Dienst-Einstellungen.
* Klicken Sie auf den Bereich namens &laquo;Darstellungs-Dienste&raquo;. <img src={require("/images/help/de/Tutorial_view_services.png").default} alt="" title="Darstellungs-Dienste konfigurieren" className="img-responsive img-inline-help"/>
* Klicken Sie auf den “+”-Knopf unterhalb des Standard-Koordinatenreferenzsystems um ein zusätzliches Koordinatenreferenzsystem hinzuzufügen.
    * Fügen Sie das INSPIRE-konforme Koordinatenreferenzsystem EPSG:4258 hinzu. Sie können das Standard-Koordinatenreferenzsystem bearbeiten und so viele Koordinatenreferenzsysteme hinzufügen, wie Sie möchten. Ihre Darstellungs-Dienste werden in den Koordinatenreferenzsystemen zur Verfügung stehen, die Sie in dieser Einstellung angeben.
* Klicken Sie auf das Aufklappmenü neben &laquo;GetFeatureInfo&raquo;. Das Aktivieren von &laquo;GetFeatureInfo&raquo; macht Ihren WMS abfragbar.

Als nächstes erfolgt die Konfiguration der Download-Dienst-Einstellungen.

* Klicken Sie auf den Bereich namens &laquo;Download-Dienste&raquo;. <img src={require("/images/help/de/Tutorial_download_services.png").default} alt="" title="Download-Dienste konfigurieren" className="img-responsive img-inline-help"/>
* Klicken Sie auf den “+”-Knopf unter &laquo;Predefined Dataset&raquo; um einen zusätzlichen Dienste-Typ hinzuzufügen.
    * Wählen Sie &laquo;WFS&raquo; aus dem Aufklappmenü aus. Die Download-Dienste werden dann sowohl als ATOM feed (Predefined Dataset) als auch in Form eines WFS bereitstehen.
    * Wählen Sie &laquo;OGC API - Features&raquo; aus dem Aufklappmenü aus. Die Download-Dienste werden dann sowohl als ATOM feed (Predefined Dataset) als auch in Form von OGC API - Features bereitstehen.
* Klicken Sie auf den “+”-Knopf unter &laquo;Shapefile 1.0&raquo; um ein zusätzliches Datenformat hinzuzufügen.
    * Wählen Sie &laquo;GML&raquo; aus dem Aufklappmenü aus. Das Predefined Dataset kann nun als Shape-Datei oder als GML-Datei heruntergeladen werden. Die Downloads werden in allen Koordinatenreferenzsystemen zur Verfügung stehen, die Sie in den Download-Service-Einstellungen angeben.

Zuletzt wird das Ziel-Thema so konfiguriert, dass automatisch INSPIRE-Dienste neu veröffentlicht werden, wenn die transformierte GML-Datei aktualisiert oder verändert wird.

* Klicken Sie auf den Bereich namens &laquo;Automatisierung&raquo;.
* Klicken Sie auf das Aufklappmenü und wählen Sie &laquo;Sofort&raquo;.

Diese Einstellung stellt sicher, dass Ihre veröffentlichten Dienste sofort alle Änderungen an Ihren transformierten Daten wiederspiegeln werden. Solche Änderungen können als Ergebnis einer erneuten Ausführung des Online-Transformationsprojektes auftreten.

**Schritt 6: Einen Quell-Datensatz anlegen**

Im letzten Schritt wird ein Quell-Datensatz angelegt und der Online-Transformations-Ablauf ausgeführt, der im Rahmen dieses Tutorials konfiguriert wurde. Durch die Konfiguration des Quell- und des Ziel-Themas, können mit nur wenigen Klicks Daten hochgeladen, eine Online-Transformation durchgeführt und INSPIRE Darstellungs- und Download-Dienste veröffentlicht werden.

* Gehen Sie auf &laquo;Daten&raquo; im Hauptmenü.
* Gehen Sie auf &laquo;Neuen Datensatz anlegen&raquo; am Ende der Datensatz-Liste.
* Wählen Sie Ihr Quell-Thema aus, um es mit dem Datensatz zu verbinden.
* Klicken Sie &laquo;Datei(en) auswählen&raquo; und navigieren Sie zu den Tutorial-Daten namens [OpenRivers.zip](https://wetransform.box.com/shared/static/4958zkqhmr8sqt10rk5bugktbk63pv3e.zip). Wenn Sie mit Shape-Dateien arbeiten, empfehlen wir den Upload in Form einer .zip-Datei.
* Geben Sie Ihrem Datensatz einen Namen. Dieser Name sollte es Ihnen ermöglichen, den Datensatz schnell und sicher im System zu identifizieren.
* Geben Sie Metadaten für Ihren Datensatz an. Es gibt verschiedene Möglichkeiten, einem Datensatz Metadatan hinzuzufügen. Mehr Informationen dazu finden sich auf unseren Hilfe-Seiten.
* Der Schritt «Projektvariablen eingeben» wird angezeigt, wenn Ihr Thema eine Transformationskonfiguration hat und Sie Ihrem Transformationsprojekt in hale»studio Projektvariablen hinzugefügt haben. hale»connect bietet Benutzenden die Möglichkeit, die Projektvariablen des Transformationsprojekts in diesem optionalen Schritt zu bearbeiten.  
* In einem letzten Schritt können Sie die Schritte des Veröffentlichungs- und Transformations-Ablaufes überprüfen, die Sie für das Thema konfiguriert haben. Ihnen werden fünf Schalter angezeigt, mit denen Sie Darstellungs- und Download-Dienste für Ihren Quell-Datensatz anlegen können, den Datensatz transformieren können sowie Darstellungs- und Download-Dienste für Ihren transformierten Datensatz anlegen können. Aktivieren Sie alle Schalter und klicken Sie auf &laquo;Weiter&raquo;.

hale»connect führt nun den Online-Transformations-Ablauf durch und Sie automatisch zu Ihrem frisch veröffentlichten Quell-Datensatz weiterleiten. Es ist wichtig zu verstehen, dass Ihre Quell-Daten auch in INSPIRE-GML transformiert und auch diese Daten veröffentlicht wurden. Um Ihren transformierten Datensatz anzeigen zu lassen, folgen Sie bitte diesen Schritten:

* Klicken Sie auf den Bereich namens &laquo;Abgeleitete Daten&raquo;.
* Klicken Sie auf das aufgelistete Transformationsprojekt.
* Klicken Sie auf den Link unter &laquo;Ziel-Datensatz&raquo; um sich Ihre INSPIRE Darstellungs- und Download-Dienste für Ihre transformierten GML-Daten anzeigen zu lassen. <img src={require("/images/help/de/Tutorial_transformed_data.png").default} alt="" title="Abgeleitete Daten" className="img-responsive img-inline-help"/>
* Klicken Sie auf den &laquo;Darstellungs-Dienste&raquo;-Bereich Ihres transformierten Datensatzes.
* Klicken Sie &laquo;Kartenansicht&raquo; um Ihren neuen transformierten Datensatz zu entdecken.

In diesem Tutorial wurde ein Online-Transformations-Ablauf konfiguriert, der von verschiedenen Nutzern aller Rollen so oft wiederverwendet kann, wie nötig. Nachdem er einmal konfiguriert wurde, kann er leicht bearbeitet und aktualisiert werden, um benötigte Änderungen vorzunehmen. Sie können Ihr existierendes hale»connect-Transformationsprojekt direkt aus hale»studio aktualisieren und Ihre bestehenden Quell- und Zielthemen anpassen, wenn Sie Änderungen benötigen. Online-Transformations-Abläufe sind ideal für Nutzende mit Quell-Daten, die häufig aktualisiert werden, da es das wiederholte Durchführen manueller Transformationen ersetzt. Wenn sich Ihre Quell-Daten ändern, wird der Online-Transformations-Ablauf automatisch die Transformation erneut ausführen und Ihre INSPIRE-Dienste erneut veröffentlichen, um Ihren Nutzern die aktuellste Version der Daten bereitzustellen.
