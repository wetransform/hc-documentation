---
title: "Allgemeines zu Benutzenden und Organisationen"
categories:
- "help-page-category-users"
- "help-page-subcategory-users-general"
layout: help-detail
language: de
sidebar_position: 0
---

Alle Benutzenden werden einer Organisation zugeordnet und haben für diese Organisation eine von fünf Benutzerrollen inne:

1.	**Benutzer (BE):** Eingeloggte Nutzende des Systems ohne besondere Rollenzuweisung, typischerweise mit lesendem Zugriff auf Ressourcen
2.	**Datenmanager (DM):** Eingeloggte Nutzende des Systems mit Verantwortung für das Hochladen und Aktualisieren von Datensätzen
3.	**Themenmanager (TM):** Eingeloggte Nutzende des Systems mit Verantwortung für die inhaltliche/thematische Konfiguration von Datensätzen und Diensten
4.	**Superanwender (SU):** Eingeloggte Nutzende mit Verantwortung für eine Organisation
5.	**Administrator (AD):** haben Zugriff auf sämtliche Funktionen des Systems und sind nicht durch die Organisationszugehörigkeit definiert.

Die Struktur der Organisationen ist hierarchisch, wobei es, wie in dieser Beispielstruktur, immer eine Wurzelorganisation gibt:

* GDI Südhessen
    * Kreis Bergstraße
        * Stadt Heppenheim
        * Gemeinde Biblis
    * Kreis Groß-Gerau
        * Stadt Groß-Gerau
        * Stadt Kelsterbach
        * Gemeinde Trebur

Alle Benutzenden haben innerhalb der Organisation, der sie angehören, genau eine Rolle inne. Rollen bestimmen, welche Funktionen Benutzende nutzen und auf welche Daten sie zugreifen können. Die Rollen sind aufeinander aufbauend ausgelegt; jede „höhere“ Rolle kann alle Funktionen nutzen, die einer der „niedrigeren“ Rollen zur Verfügung stehen. 

Beispiel: Gehört eine Benutzerin oder ein Benutzer der Organisation &laquo;Kreis Bergstraße&raquo; in der Rolle &laquo;Superanwender&raquo; an, hat sie oder er für alle Unterorganisationen ebenfalls die Rolle &laquo;Superanwender&raquo; inne. Ist dies nicht gewünscht, können Gemeinden auch direkt als Unterorganisationen der Wurzelorganisation (GDI Südhessen) angelegt werden. Die Ebene der Organisation wird lediglich als Metadatum gespeichert. Es kann beliebig viele Ebenen an Unterorganisationen geben.

:::warning[Caution]

Legen sie in der Rolle &laquo;Administrator&raquo; eine Benutzerin oder einen Benutzer an, werden die Zuordnung zu einer Organisation sowie die Vergabe einer Rolle erzwungen.

:::