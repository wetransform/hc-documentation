---
title: "Organisations-Profile bearbeiten und löschen"
categories:
- "help-page-category-users"
- "help-page-subcategory-users-orgs"
layout: help-detail
language: de
---

Nutzende in den Rollen &laquo;Administrator&raquo; oder &laquo;Superanwender&raquo; können die Profil-Seite ihrer Organisation bearbeiten. Um auf die Profil-Seite ihrer Organisation zuzugreifen:
1.	Gehen sie auf &laquo;Einstellungen&raquo; (Zahnrad-Symbol).
2.	Gehen sie auf &laquo;Organisationen&raquo;.
3.	Wählen sie aus der Liste ihre Organisation aus.

Alternativ können sie in ihrem Nutzenden-Profil auf den Namen der Organisation klicken.

Auf der Profil-Seite der Organisation sind diverse Konfigurierungs-Optionen verfügbar, zu denen sie über die Tabs unter der Organisationsbeschreibung navigieren können. 
:::note
Je nach Rolle und Konfiguration ihrer Organisation stehen eventuell nicht alle Tabs und Features zu Verfügung.
:::

-	**Profilbild:** Klicken sie auf das Profilbild, um das Logo ihrer Organisation oder ein anderes Anzeigebild hochzuladen. Als Datenformat werden JPEG und PNG akzeptiert.
-	**Name der juristischen Person:** Dieses optionale Feld ermöglicht es Nutzenden, den Namen der juristischen Person anzugeben.
-	**Beschreibung:** Dieses optionale Feld ermöglicht es Nutzenden, eine Beschreibung ihrer Organisation anzugeben.
-	**Kontaktdaten:** Die Standard-Kontaktdaten-Felder helfen anderen Nutzenden, sie zu kontaktieren und können für Metadaten-Autofill-Regeln verwendet werden. Sie finden diese unter dem Tab &laquo;Kontaktdaten&raquo; welcher standardmäßig beim Laden der Seite angezeigt wird.
-	**Karten-Konfiguration:** Dieses Feld ermöglicht es Anwendern, eine URL zu einem WMS für eine Hintergrundkarte anzugeben, eine Standard-Hintergrund-Ebene zu definieren, und optional eine Urheberrechtsangabe bereitzustellen, die in der Kartenansicht angezeigt wird (siehe Abbildung unten).  
<img src={require("/images/help/en/organisation/de/karten-konfiguration.png").default} alt="" title="Karten Konfiguration" className="img-responsive img-inline-help"/>  
Das Feld für die Urheberrechtsangabe unterstützt HTML-Links, z. B. `&copy; GeoBasis-DE / <a href="https://www.bkg.bund.de/">BKG</a> 2025 CC BY 4.0`. <br/>In den Rollen &laquo;Superuser&raquo; oder &laquo;Administrator&raquo; können sie die Standard-Hintergrundkarte für die Kartenansicht in den Darstellungsdiensten ihres Datensatzes konfigurieren. <br/>Wenn Mitglieder ihrer Organisation Darstellungs-Dienste auf der Plattform veröffentlichen, werden die Daten mit dem angegebenen WMS als Hintergrundkarte dargestellt. <br/>Als Anwender haben sie die zusätzliche Möglichkeit über die Benutzeroberfläche der Kartenansicht eine eigene WMS Hintergrundkarte hochzuladen.
<img src={require("/images/help/en/copyright_attribution.png").default} alt="" title="Basemap copyright attribution" className="img-responsive img-inline-help"/>   

Beim Verwenden von OGC API Features können sie selbst eine Standard-Hintergrundkarte und dazugehörige Standard-Hintergrund-Ebenen für die Kartenansicht der OGC-API-Features-Darstellungsdienste definieren. Derzeit wird nur WMS-Version 1.3.0 für die Standard-Hintergundkarte unterstützt. Sie können eine oder mehrere Standard-Hintergrund-Ebenen in Form einer komma-separierten Liste im Feld `Default base layer` angeben. Beachten sie für OGC API Features, dass um eine Standard-Hintergrundkarte korrekt zu konfigurieren, *mindestens eine* Standard-Hintergrund-Ebene angegeben werden muss. Wenn sie eine eigene Standard-Hintergrundkarte aber keine eigene Standard-Hintergrund-Ebene angeben, wird für die OGC-API-Features-Darstellungsdienste eine Standard-Hintergrundkarte verwendet.
Für die Kartenansicht der Darstellungsdienste, wird die definierte Standard-Hintergrundkarte mit der ersten gefundenen Ebene verwendet, wenn sie keine Standard-Hintergrund-Ebene definiert haben.

- **Ereignisse:** Aktivieren sie den &laquo;Abonniert&raquo;-Schalter, um Email-Benachrichtigungen zu automatisierten Workflows zu erhalten. Diese benachrichtigen sie bei jeder Ausführung über den Erfolg oder Misserfolg von Online-Transformationen und Dienste-Bereitstellungen. Den Schalter finden sie unter dem Tab &laquo;Andere&raquo;.
<img src={require("/images/help/en/organisation/de/andere.png").default} alt="" title="Andere" className="img-responsive img-inline-help"/>

- **CSW-INSPIRE-Metadaten:** Diese Felder beinhalten die unterstützte Sprachen, die Standardsprache, das Datum, die Gemet-Schlüsselwörter, Informationen zur Dienstekonformität sowie zur Zeitlichkeit und ermöglichen Nutzenden mit der Rolle Administrator von Organisationen mit aktiviertem organisationsspezifischen CSW-Endpunkt das CSW-GetCapabilities-Dokument zu konfigurieren. Standardwerte werden automatisch in das CSW-GetCapabilities-Dokument eingegeben, wenn keine Werte in den Feldern vorhanden sind. Die eingegebenen Werte werden nach dem nächtlichen CSW-Update angezeigt. Sie finden die Felder unter dem Tab &laquo;CSW Einstellungen&raquo;.
- **Eigene Profilfelder:** Diese Felder können genutzt werden, um nutzerdefinierte Werte für Metadaten-Autofill-Regeln zu speichern. Sie und ihre Organisation sollten sich auf Schlüssel für eigene Profilfelder einigen, damit diese in den Autofill-Regeln effektiv genutzt werden können. Sie finden sie unter dem Tab &laquo;Eigene Profilfelder&raquo;.

- **Organisationszugriff teilen:** Sofern sie die nötigen Berechtigungen haben, können sie den Zugriff für ihre Organisation sowie ihre Unterorganisationen mit anderen Organisationen teilen. Navigieren sie dazu zu dem Tab &laquo;Geteilte Organisationen&raquo;, wo sie eine Liste aller Organisationen sehen können für die sie ihre Organisation aktuell freigegeben haben. Dort finden sie auch die Option, die Freigabe wieder aufzuheben indem sie auf das rote Minus neben dem entsprechenden Organisationsnamen klicken. Um ihre Organisation mit einer neuen Organisation zu teilen, klicken sie auf ihren Organisationsnamen in der rechten oberen Ecke des Tabs und wählen sie die entsprechende Organisation aus dem sich öffnenden Drop-down Menü aus. Sie wird dann ebenfalls in der Liste auftauchen.
<img src={require("/images/help/en/organisation/de/geteilte-organisationen.png").default} alt="" title="Geteilte Organisationen" className="img-responsive img-inline-help"/>

- **Geometrien hochladen**: Unter dem Tab &laquo;Geometrie&raquo;, können sie eine Geometrie für ihre Organisation hochladen. Initial, ist keine Geometrie für ihre Organisation hinterlegt (siehe Abbildung).  
<div style={{ textAlign: "center" }}>
<img src={require("/images/help/en/organisation/de/geometrie-leer.png").default} alt="" title="Geometrie" className="img-responsive img-inline-help"/>
</div>
Wenn sie auf &laquo;Geometrien hochladen&raquo; klicken, öffnet sich ein Pop-Up Fenster, in dem sie eine Geometriedatei aus ihrem Dateisystem hochladen können. Die akzeptieren Dateiformate sind Shapefile, GML und GeoJSON.
<div style={{ textAlign: "center" }}>
<img src={require("/images/help/en/organisation/de/geometrie-upload.png").default} alt="" title="Geometrie hochladen" className="img-responsive img-inline-help"/>
</div>  
Des Weiteren können sie einen Namen für ihre Geometrie angeben, welcher später über der Kartenansicht angezeigt wird. Nachdem sie auf &laquo;Bestätigen&raquo; geklickt haben, kann es einige Momente dauern bis sich das Fenster schließt, da erst geprüft wird, ob es sich bei der hochgeladenen Datei um eine korrekt konvertierbare Geometrie handelt. Das Fenster schließt sich dann von selbst oder sie erhalten die Fehlermeldung &laquo;Konvertierung fehlgeschlagen&raquo;.
Wenn die Datei eine valide Geometrie beschreibt und erfolgreich konvertiert werden konnte, wird die Geometrie in der Kartenansicht angezeigt.
Sie können die Geometrie über die Schaltfläche mit dem Mülleimer-Symbol entfernen, über die Schaltfläche mit dem blauen Download-Symbol herunterladen, oder die Geometrie ersetzen, indem sie über &laquo;Geometrien hochladen&raquo; eine neue Datei hochladen.
<div style={{ textAlign: "center" }}>
<img src={require("/images/help/en/organisation/de/geometrie-karte-groß.png").default} alt="" title="Geometrie Kartenansicht" className="img-responsive img-inline-help"/>
</div>



- **Tokens verwalten**: Unter dem Tab &laquo;Token-Verwaltung&raquo; können sie Tokens einsehen, generieren und entfernen. Um einen Token zu erstellen, klicken sie auf &laquo;Token generieren&raquo; und ein Pop-Up öffnet sich, in dem sie den Namen des Tokens definieren sowie die Gültigkeitsdauer festlegen können. Sie können den Token sofort kopieren und ihn in ihrem Browser speichern, sodass sie auch zu einem späteren Zeitpunkt noch die Möglichkeit haben den Token erneut zu kopieren. 
<div style={{ textAlign: "center" }}>
    <img src={require("/images/help/en/organisation/de/token-erstellen.png").default} alt="" title="Token Erstellen" className="img-responsive img-inline-help"/>
</div>
Eine Tabelle mit ihren aktuellen Tokens wird standardmäßig angezeigt.
<!--<div style={{ textAlign: "center" }}>
    <img src={require("/images/help/en/organisation/en/token_small.png").default} alt="" title="Basemap copyright attribution" className="img-responsive img-inline-help"/>
</div>-->
<div style={{ textAlign: "center" }}>
    <img src={require("/images/help/en/organisation/de/token-verwaltung.png").default} alt="" title="Token Tabellenansicht" className="img-responsive img-inline-help"/>
</div>
In der Tabelle können sie nach Organisations-ID und Verwendungszweck des Tokens filtern und suchen. Außerdem wird der aktuelle Status des Tokens, &laquo;Gültig&raquo;, &laquo;Abgelaufen&raquo; oder &laquo;Widerrufen&raquo; angezeigt. Links in der äußersten Spalte sehen sie einen roten Punkt sobald ihr Token abgelaufen ist, und einen grünen Punkt solange es gültig ist.
Weiterhin können sie einen Token inspizieren, indem sie auf das Augensymbol klicken, wodurch sich ein Pop-Up mit Tokeninformationen öffnet. 
<div style={{ textAlign: "center" }}>
    <img src={require("/images/help/en/organisation/de/token-info-valide.png").default} alt="" title="Token Information Pop-up" className="img-responsive img-inline-help"/>
</div>
Sie können einen Token auch neu generieren, indem sie auf die kreisförmigen Pfeile klicken, wodurch sich ein Pop-Up ähnlich dem der Token-Generierung öffnet.
<div style={{ textAlign: "center" }}>
    <img src={require("/images/help/en/organisation/de/token-erneuern-abgelaufen.png").default} alt="" title="Token Erneuerung" className="img-responsive img-inline-help"/>
</div>

Nutzende in den Rollen &laquo;Administrator&raquo; oder &laquo;Superanwender&raquo; haben auf der Profil-Seite der Organisation auch die Möglichkeit Unterorganisationen anzulegen, Nutzende anzulegen, existierende Nutzerprofile zur Organisation hinzuzufügen oder die Organisation zu löschen.

:::warning[Caution]

Wird eine Organisation gelöscht, bleiben die zur Organisation gehörenden Benutzerkonten erhalten. Diese Benutzerkonten sind dann keiner Organisation oder Rolle mehr zugeordnet, haben also nur sehr geringe Zugriffsrechte, bis sie wieder einer Organisation zugeordnet werden.

:::

:::warning[Caution]

Der Name der Organisation kann im Nachhinein nicht bearbeitet werden

:::