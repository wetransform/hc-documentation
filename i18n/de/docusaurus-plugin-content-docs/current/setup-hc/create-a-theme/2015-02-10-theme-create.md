---
title: "Thema anlegen"
categories:
- "help-page-category-setup-haleconnect"
- "help-page-subcategory-setup-haleconnect-themecreate"
layout: help-detail
language: de
---

Das Thema ist ein Konfigurationsobjekt, mit dem sämtliche Ressourcen verknüpft werden können, und für das Nutzende in der Rolle &laquo;Themenmanager&raquo; verantwortlich sind. Über das Thema lassen sich die Publikation von Diensten, die Eingabe von Metadaten, zugeordnete Schemas, die Ausführung von Transformationsprojekten sowie zahlreiche weitere Parameter konfigurieren.

Der Ablauf zur Erstellung eines Themas ist typischerweise:

1.	Schema anlegen,
2.	Transformationsprojekt anlegen,
3.	Thema anlegen,
4.	Thema anpassen.

Sind das Schema und das Transformationsprojekt angelegt, kann das Thema erstellt werden. Folgen sie in der Rolle &laquo;Superanwender&raquo; oder &laquo;Themenmanager&raquo; diesem Ablauf, um ein Thema anzulegen:

1.	Gehen sie auf &laquo;Themen&raquo;.
2.	Gehen sie auf &laquo;Neues Thema erstellen&raquo; unterhalb der Liste.
3.	Basisthema auswählen: Sie können das neue Thema aus der Konfiguration eines bestehenden Themas ableiten. Falls sie in diesem Schritt ein Thema auswählen, werden alle Konfigurationswerte aus diesem Thema übernommen – diese können aber beliebig angepasst werden. Klicken sie auf &laquo;Weiter&raquo;.
4.	Name und Typ bestimmen: Geben sie dem Thema einen Namen und ordnen sie ihm Thementyp, Version und Beschreibung zu. Sie können einen bestehenden, vorkonfigurierten Thementyp aus dem Aufklappmenü auswählen oder "Benutzerdefiniert" wählen, um Ihren eigenen Thementyp zu erstellen. Klicken sie auf &laquo;Weiter&raquo;.<img src={require("/images/help/de/create_theme.png").default} alt="" title="Thema erstellen" className="img-responsive img-inline-help"/>
5.	Objektarten hinzufügen: Klicken sie auf &laquo;Objektart hinzufügen&raquo; um dem Thema Objektarten zuzuordnen. Wählen sie den "»"-Knopf um das Schema auszuwählen, in dem die gewünschten Objektarten enthalten sind. Wählen sie den "»"-Knopf um einzelne Objektarten hinzuzufügen oder &laquo;Alle hinzufügen&raquo; um alle aufgelisteten Objektarten zu dem Thema hinzuzufügen. Klicken sie auf &laquo;Weiter&raquo;.
Sie können einem Thema beliebig viele Objektarten zuordnen. Eine Objektart kann mehreren Themen zugeordnet sein. Wenn sie die Zuordnung einer Objektart aufheben möchten, klicken sie auf das rote &laquo;Löschen&raquo;-Symbol in der rechten oberen Ecke der entsprechenden Objektart. Wenn sie die Zuordnung aller Objektarten zu einem Thema aufgeben möchten, klicken sie auf das rote &laquo;Löschen&raquo;-Symbol in der rechten oberen Ecke des Schemas. Wenn sie alle gewünschten Objektarten hinzugefügt haben, klicken sie auf &laquo;Weiter&raquo;.
6.	Anlegen bestätigen: Überprüfen sie die Angaben zu dem Thema und klicken sie &laquo;Anlegen&raquo; um dieses zu speichern.


:::caution

Bei einem abgeleiteten Thema werden spätere Änderungen des Eltern-Themas nicht auf die abgeleiteten Themen übertragen.

:::

:::danger

Wenn sie ein Thema löschen, werden dem Thema zugeordnete Datensätze nicht gelöscht. Es wird lediglich die Zuordnung aufgehoben.

:::
