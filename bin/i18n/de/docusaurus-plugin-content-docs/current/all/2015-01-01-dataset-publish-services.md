---
title: "Darstellungs- und Download-Dienste publizieren"
categories:
- "help-page-category-datasetworkflow"
- "help-page-subcategory-datasetworkflowpublishservices"
layout: help-detail
language: de
---

Wenn ein Datensatz einem Thema zugeordnet ist und zu diesem Thema eine gültige Dienstekonfiguration vorliegt, können sie Darstellungs- und Download-Dienste publizieren. Dies erfolgt entweder über den automatischen Ablauf nach Anlage des Datensatzes oder später durch manuelle Auslösung. Es werden immer alle Arten von konfigurierten Diensten erstellt; sind also beispielsweise ein Predefined Dataset Download-Dienst und ein WMS konfiguriert, werden beim Anlegen beide gleichzeitig erzeugt. Der Grund liegt in den Metadaten, die jeweils auf den anderen Dienst zeigen.

Um Dienste zu publizieren, melden sie sich in der Rolle &laquo;Datenmanager&raquo; oder &laquo;Themenmanager&raquo; an und folgen sie diesem Ablauf:

1.	Gehen sie auf &laquo;Daten&raquo;.
2.	Wählen sie den Datensatz aus, zu dem sie Dienste publizieren wollen.
3.	Gehen sie auf &laquo;Darstellungs-Dienst“ oder &laquo;Download-Dienst&raquo;.
4.  Aktivieren sie den Dienst mit Hilfe des Schalters.
5.	Klicken sie auf den Button &laquo;Dienste publizieren&raquo; um den Dienst zu erstellen und zu starten.
    *	Sobald ein Dienst erstellt ist, beginnt im Hintergrund die Testreport-Erstellung, auch bei Neustart. Es erscheint ein Fortschrittsbalken, der den Status für die Erstellung, das Testen und das Veröffentlichen der Dienste anzeigt. Sie erhalten außerdem eine Email mit Infomationen über den Erfolg oder Misserfolg, wenn die Publikation abgeschlossen ist. Für Publikationen, die länger als eine Stunde dauern, nimmt die Plattform an, dass sie fehlgeschlagen sind und sie erhalten eine entsprechende Email, auch wenn die Publikation noch läuft. <img src="/images/help/de/publish_services.png" alt="" title="Darstellungs-Dienste publizieren" class="img-responsive img-inline-help">
6.	Wenn der Dienst erfolgreich angelegt wurde, erhalten sie diverse Informationen zu dem jeweiligen Dienst auf der entsprechenden Seite (&laquo;Darstellungs-Dienst&raquo; oder &laquo;Download-Dienst&raquo;):
    *	Web-Adressen für Datensatz-Metadaten und Dienste-Metadaten
    *	Web-Adresse Vorschau (nur bei &laquo;Darstellungs-Dienst&raquo;)
    * 	Test-Ergebnisse
    * Dienst-Einstellungen
    * Dienst-log <img src="/images/help/de/publish_services_testing.png" alt="" title="Darstellungs-Dienste publizieren" class="img-responsive img-inline-help">
7.	Um den Dienst zu stoppen, deaktivieren sie den Schalter und wählen sie &laquo;Dienste löschen&raquo;.
