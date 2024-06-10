---
title: "Schema-Updates auf hale»studio und auf hale»connect"
categories:
- "help-page-category-tutorials"
- "help-page-subcategory-tutorials"
layout: help-detail
language: de

---

Im Februar 2024 wurden mehrere INSPIRE GML-Anwendungsschemata aktualisiert. Daten, die mit v4.0-Schemata harmonisiert wurden, für die derzeit eine Version 5.0 verfügbar ist, müssen mit einem aktualisierten Transformationsprojekt neu transformiert werden, um mit der neuesten Version des Schemas kompatibel zu sein. Auch an v4.0-Schemata wurden bahnbrechende Änderungen vorgenommen, obwohl keine größeren Versionsänderungen vorgenommen wurden. Automatisierte Online-Transformationsworkflows, die auf der hale»connect-Plattform konfiguriert sind, können problemlos aktualisiert werden, um eine neue Schemaversion zu verwenden, um Datensätze und Dienste innerhalb von Minuten zu veröffentlichen, zu transformieren und zu validieren.

In diesem Tutorial werden die Schritte erläutert, die zum Aktualisieren des in automatisierten Online-Transformationsworkflows verwendeten Schemas erforderlich sind. Das Aktualisieren eines Online-Transformationsworkflows erfordert die Aktualisierung mehrerer Ressourcen und muss von einem Benutzer mit Theme-Manager- oder Superuser-Berechtigungen durchgeführt werden. Bevor wir beginnen, sehen wir uns eine Liste der benötigten Ressourcen an:

* ein Transformationsprojekt von hale»studio
* ein Schema für Ihre Zieldaten
* ein Zielthema

### **Beispiel-Daten**

Die Installation von hale»studio und die Erstellung von Abbildungen gehen über den Rahmen dieses Tutorials hinaus. Weitere Informationen finden sie unter [hale»studio](https://www.wetransform.to/products/halestudio/).

Für dieses Tutorial verwenden wir:

* Ein vorhandenes Transformationsprojekt von hale»studio. sie können das Transformationsprojekt [hier](https://test.haleconnect.de/#/transformation/org/740/fee5465b-52eb-4adf-9fec-3b59dffdee71/overview) herunterladen.
* Quelldaten. sie können das Shapefile [hier](https://wetransform.box.com/s/6m9ygbmzestcmq9gk6uwrbs9kcyp12v5) herunterladen.

Das Transformationsprojekt ordnet Daten deutscher geschützter Standorte dem INSPIRE-Featuretyp „ProtectedSite“ zu, der im INSPIRE Protected Sites 4.0-Schema zu finden ist.

### **Ein Transformationsprojekt aktualisieren**

**Schritt 1: Ein vorhandenes Transformationsprojekt in hale»studio öffenen**

Ein Transformationsprojekt ist ein [hale»studio](https://www.wetransform.to/products/halestudio/) Projekt in den Formaten \*.halex oder \*.halez, das auf hale»connect hochgeladen wurde. Das Projekt beinhaltet Referenzen zu Quell- und Ziel-Schemas, eine Abbildung, die über die Zuordnung von Elementen des Quell-Schemas zu Elementen des Ziel-Schemas die Transformation definiert, zusätzliche Konfigurationen für die geladenen Schemas und Konfigurationen für den gewünschten Output des Projekts.

Wenn sie hale»studio auf Ihrem Computer installiert haben, können sie das Transformationsprojekt mit dem Namen „INSPIRE_ProtectedSites.halex“ laden, das in den Beispiel-Daten enthalten ist.

**Schritt 2: Das vom Transformationsprojekt verwendete INSPIRE-Schema aktualisieren**

Der nächste Schritt besteht darin, das im Transformationsprojekt verwendete Schema zu aktualisieren, sodass es das INSPIRE Protected Sites-Schema Version 5.0 anstelle von 4.0 verwendet.

Navigieren sie in hale»studio zum Menü „Datei“ und wählen sie die Option „Schemata neu laden und aktualisieren“. Doppelklicken sie im angezeigten Dialogfeld auf die angezeigte Schema-URL, navigieren sie zu den INSPIRE-Presets und wählen sie das INSPIRE Protected Sites 5.0-Schema aus.
<a className="image-news text-center col-xs-12 mt mb"><img src={require("/images/help/de/update_schemas.png").default} alt="" title="Neues Schema auswählen" className="img-responsive center-block"/></a>

Klicken sie auf &laquo;OK&raquo;. Das im Transformationsprojekt verwendete INSPIRE-Schema wird auf v5.0 aktualisiert.

**Schritt 3: Quelldaten laden und Zellentitätsabgleich abschließen**

In diesem Schritt laden wir die Quelldaten und schließen die Schritte ab, die in den Zellentitätsabgleichsdialogen angezeigt werden, die in hale»studio erscheinen. Zellentitätsabgleichsdialoge werden angezeigt, wenn ein Schema geändert wird und hale»studio aufgrund geänderter Typnamen, Eigenschaftsnamen oder geänderter Namespaces nicht feststellen kann, wie die vorhandenen Zuordnungen aktualisiert werden sollen. In diesen Fällen muss der Endbenutzer hale»studio Informationen zur Aktualisierung der vorhandenen Zuordnungen basierend auf dem neuen Schema bereitstellen.

Es ist sinnvoll, die Änderungen zu überprüfen, die an dem zu aktualisierenden Schema vorgenommen wurden, um einen Überblick über die zu aktualisierenden Elemente zu erhalten. Die Änderungen werden als Kommentare in den INSPIRE \*.xsd-Schemadateien dokumentiert, die [hier](https://inspire.ec.europa.eu/schemas/index.html) verfügbar sind.

Laden sie zunächst die Quelldaten in hale»studio. Navigieren sie zum Menü Datei und wählen sie Importieren, anschließend wählen sie Quelldaten...

Sobald die Quelldaten geladen sind, werden nacheinander möglicherweise viele Dialoge zu Zellentitäten angezeigt, bis alle Elemente aktualisiert wurden, um das neue Schema widerzuspiegeln. Für eine vollständige Aktualisierung muss der Endbenutzer für jede aktualisierte Referenz das von hale»studio gesuchte Element im Elementbaum manuell auswählen. In einigen Fällen identifiziert hale»studio das passende Element im neuen Schema korrekt (z. B. wenn sich nur der Namespace geändert hat, aber Typ und Eigenschaftsname gleich bleiben), in anderen Fällen ist eine direkte Benutzereingabe erforderlich. Es ist möglich, eine oder mehrere Zuordnungen im Dialog zu überspringen, wenn die Handhabung nicht ganz klar ist. Durch das Überspringen einer Zuordnung kann der Endbenutzer mit automatisch zugewiesenen oder erkannten Zuordnungen fortfahren, ohne den gesamten Vorgang abbrechen zu müssen. Nicht verarbeitete Zuordnungen können anschließend in der hale»studio-Benutzeroberfläche bearbeitet werden.
<a className="image-news text-center col-xs-12 mt mb"><img src={require("/images/help/de/cell_entity_could_not_be_resolved.png").default} alt="" title="Cell entity matching" className="img-responsive center-block"/></a>

**Schritt 4: Validierung prüfen und Transformationsprojekt speichern**

Nachdem alle Cell entity matchings abgeschlossen sind, nehmen sie sich einen Moment Zeit, um die Validierung des aktualisierten Transformationsprojekts zu prüfen, um sicherzustellen, dass alle erforderlichen Schemaelemente ordnungsgemäß behandelt wurden. Öffnen sie in hale»studio das Fenster „Berichtsliste“, um den Status der Instanztransformation und der Instanzvalidierung anzuzeigen. Ein grünes Häkchen zeigt ein gültiges Projekt an. Eine gelbe Warnung zeigt an, dass das Projekt Zuordnungen mit Warnungen enthält, die im Eigenschaftenfenster überprüft werden können. Doppelklicken sie im Fenster „Berichtsliste“ auf die Instanztransformation und den Instanzvalidierungstext, um weitere Informationen zu Warnungen im Eigenschaftenfenster anzuzeigen.

Speichern sie Ihr Projekt, sobald Ihre Prüfung abgeschlossen ist.

sie können das Transformationsprojekt INSPIRE_ProtectedSites direkt in Ihr hale»connect-Konto exportieren, sobald sie mit der Aktualisierung des Projekts fertig sind. Wenn sie Hilfe benötigen, besuchen sie das Hilfethema [Freigeben und Aktualisieren eines Transformationsprojekts auf hale»connect](http://help.halestudio.org/latest/index.jsp?topic=%2Feu.esdihumboldt.hale.doc.user%2Fhtml%2Ftasks%2Fhaleconnect%2Fshareproject.html) im Benutzerhandbuch von hale»studio für weitere Anweisungen.

sie können ein Transformationsprojekt auch manuell hochladen.

### **Ein Online-Transformationsworkflows auf hale»connect aktualisieren**

**Schritt 1: Eine neue Schema erstellen**

Das aktualisierte Transformationsprojekt, mit dem sie arbeiten, transformiert deutsche Protected Sites-Daten in INSPIRE Protected Sites v5.0. Diese INSPIRE-Featuretypen befinden sich im Schema INSPIRE Protected Sites 5.0, daher erstellen sie dieses Schema auf hale»connect. hale»connect enthält eine große Anzahl von Schemavorgaben, darunter alle aktualisierten INSPIRE-Schemata.

Um ein neues Schema unter Nutzung eines Presets anzulegen, folgen sie in der Rolle &laquo;Themenmanager&raquo; oder &laquo;Superanwender&raquo; diesem Ablauf:

*	Gehen sie auf &laquo;Schemas&raquo; im Hauptmenü.
*	Gehen sie auf &laquo;+ Neues Schema anlegen&raquo; am Ende der Schema-Liste.
*	Erstellungsmethode wählen. Wählen sie im ersten Schritt &laquo;Ein Preset auswählen.&raquo;. Klicken sie auf &laquo;Weiter&raquo;.
*	Schema definieren. Definieren sie als nächstes das Schema, das sie nutzen wollen. Die Schemadefinition hängt von der Erstellungsmethode ab, die sie im vorherigen Schritt ausgewählt haben.

    * Wählen sie das INSPIRE Protected Sites 5.0-Schema-Preset aus dem Aufklappmenü verfügbarer Presets aus.<img src={require("/images/help/de/schema_5_de.png").default} alt="" title="Ein neues Schema von einem Preset anlegen" className="img-responsive img-inline-help"/>

    * Informationen ergänzen. Geben sie den Namen der Autorin oder des Autors, den Typ und die Version ihres Schemas an. Wenn sie fertig sind, klicken sie auf &laquo;Weiter&raquo;.

    * Anlegen bestätigen. Überprüfen sie in einem abschließenden Schritt ihr Schema. Sie haben die Option, Ihrem Schema ein Thema hinzuzufügen oder ein solches für ihr Schema zu erstellen. Wenn sie fertig sind, klicken sie auf &laquo;Anlegen&raquo; um ihr Schema zu speichern.


**Schritt 2: Featuretypen des Ziel-Themas aktualisieren**

Der nächste Schritt besteht darin, den Abschnitt „Featuretypen“ Ihres INSPIRE Protected Sites-Themas zu aktualisieren, um die Featuretypen aus dem INSPIRE Protected Sites 5.0-Schema zu verwenden.

Navigieren sie zunächst zu Ihrem vorhandenen Protected Sites-Thema auf hale»connect. Wählen sie den Abschnitt „Featuretypen“ aus.
<img src={require("/images/help/de/update_feature_types_de.png").default} alt="" title="Featuretypen aktualisieren" className="img-responsive img-inline-help"/>

Klicken sie auf das rote „x“, um die vorhandenen Featuretypen zu löschen, und klicken sie auf &laquo;+ Neuen Typ hinzufügen&raquo;. Navigieren sie im angezeigten Dialogfeld zum Schema INSPIRE Protected Sites 5.0 und wählen sie &laquo;Alle hinzufügen&raquo;. Ihr vorhandenes Thema ist jetzt aktualisiert und verwendet die Featuretypen aus dem Schema INSPIRE Protected Sites 5.0.

**Schritt 3: Das aktualisierte Transformationsprojekt auslösen und vorhandene Ressourcen erneut veröffentlichen**

Nachdem sie Ihr Transformationsprojekt aktualisiert und die Featuretypen in Ihrem vorhandenen Ziel-Thema aktualisiert haben, können sie die Online-Transformation erneut ausführen, um Ihre veröffentlichten Ressourcen auf hale»connect zu aktualisieren.
