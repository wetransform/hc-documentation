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

Auf der Profil-Seite der Organisation sind diverse Konfigurierungs-Optionen verfügbar.

-	**Profilbild:** Klicken sie auf das Profilbild, um das Logo ihrer Organisation oder ein anderes Anzeigebild hochzuladen. Als Datenformat werden JPEG und PNG akzeptiert.
-	**Name der juristischen Person:** Dieses optionale Feld ermöglicht es Nutzenden, den Namen der juristischen Person anzugeben.
-	**Beschreibung:** Dieses optionale Feld ermöglicht es Nutzenden, eine Beschreibung ihrer Organisation anzugeben.
-	**Kontaktdaten:** Die Standard-Kontaktdaten-Felder helfen anderen Nutzenden, sie zu kontaktieren und können für Metadaten-Autofill-Regeln verwendet werden.
-	**Karten-Konfiguration:** Dieses Feld ermöglicht es Anwendern, eine URL zu einem WMS für eine Hintergrundkarte anzugeben und optional eine Urheberrechtsangabe bereitzustellen, die in der Kartenansicht angezeigt wird (siehe Abbildung unten). Das Feld für die Urheberrechtsangabe unterstützt HTML-Links, z. B. `&copy; GeoBasis-DE / <a href="https://www.bkg.bund.de/">BKG</a> 2025 CC BY 4.0`. <br/>In den Rollen &laquo;Superuser&raquo; oder &laquo;Administrator&raquo; können sie die Standard-Hintergrundkarte für die Kartenansicht in den Darstellungsdiensten ihres Datensatzes konfigurieren. <br/>Wenn Mitglieder ihrer Organisation Darstellungs-Dienste auf der Plattform veröffentlichen, werden die Daten mit dem angegebenen WMS als Hintergrundkarte dargestellt. <br/>Als Anwender haben sie die zusätzliche Möglichkeit über die Benutzeroberfläche der Kartenansicht eine eigene WMS Hintergrundkarte hochzuladen.
<img src={require("/images/help/en/copyright_attribution.png").default} alt="" title="Basemap copyright attribution" className="img-responsive img-inline-help"/>   

Beim Verwenden von OGC API Features können sie selbst eine Standard-Hintergrundkarte und dazugehörige Standard-Hintergrund-Ebenen für die Kartenansicht der OGC-API-Features-Darstellungsdienste definieren. Derzeit wird nur WMS-Version 1.3.0 für die Standard-Hintergundkarte unterstützt. Sie können eine oder mehrere Standard-Hintergrund-Ebenen in Form einer komma-separierten Liste im Feld `Default base layer` angeben. Beachten sie für OGC API Features, dass um eine Standard-Hintergrundkarte korrekt zu konfigurieren, *mindestens eine* Standard-Hintergrund-Ebene angegeben werden muss. Wenn sie eine eigene Standard-Hintergrundkarte aber keine eigene Standard-Hintergrund-Ebene angeben, wird für die OGC-API-Features-Darstellungsdienste eine Standard-Hintergrundkarte verwendet.
Für die Kartenansicht der Darstellungsdienste, wird die definierte Standard-Hintergrundkarte mit der ersten gefundenen Ebene verwendet, wenn sie keine Standard-Hintergrund-Ebene definiert haben.

- **Ereignisse** Aktivieren sie den &laquo;Abonniert&raquo;-Schalter, um Email-Benachrichtigungen zu automatisierten Workflows zu erhalten. Diese benachrichtigen sie bei jeder Ausführung über den Erfolg oder Misserfolg von Online-Transformationen und Dienste-Bereitstellungen.
- **CSW-INSPIRE-Metadaten** Diese Felder beinhalten die unterstützte Sprachen, die Standardsprache, das Datum, die Gemet-Schlüsselwörter, Informationen zur Dienstekonformität sowie zur Zeitlichkeit und ermöglichen Nutzenden mit der Rolle Administrator von Organisationen mit aktiviertem organisationsspezifischen CSW-Endpunkt das CSW-GetCapabilities-Dokument zu konfigurieren. Standardwerte werden automatisch in das CSW-GetCapabilities-Dokument eingegeben, wenn keine Werte in den Feldern vorhanden sind. Die eingegebenen Werte werden nach dem nächtlichen CSW-Update angezeigt.
- **Eigene Profilfelder:** Diese Felder können genutzt werden, um nutzerdefinierte Werte für Metadaten-Autofill-Regeln zu speichern. Sie und ihre Organisation sollten sich auf Schlüssel für eigene Profilfelder einigen, damit diese in den Autofill-Regeln effektiv genutzt werden können.

Nutzende in den Rollen &laquo;Administrator&raquo; oder &laquo;Superanwender&raquo; haben auf der Profil-Seite der Organisation auch die Möglichkeit Unterorganisationen anzulegen, Nutzende anzulegen, existierende Nutzerprofile zur Organisation hinzuzufügen oder die Organisation zu löschen.

:::warning[Caution]

Wird eine Organisation gelöscht, bleiben die zur Organisation gehörenden Benutzerkonten erhalten. Diese Benutzerkonten sind dann keiner Organisation oder Rolle mehr zugeordnet, haben also nur sehr geringe Zugriffsrechte, bis sie wieder einer Organisation zugeordnet werden.

:::

:::warning[Caution]

Der Name der Organisation kann im Nachhinein nicht bearbeitet werden

:::