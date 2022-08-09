---
title: "Ein neues Schema auf Basis eines bestehenden Schemas erstellen"
categories:
- "help-page-category-setup-haleconnect"
- "help-page-subcategory-setup-haleconnect-schema-create"
layout: help-detail
language: de

---

Ein *Schema* beschreibt die Struktur eines Datensatzes durch die Definition von Typen und deren Eigenschaften. Schemas können aus diversen Datenquellen, wie Datenbanken, XML Schema-Dateien oder Shape-Dateien, importiert werden. Sie können unter Nutzung des enthaltenen Modellierungswerkzeuges auch direkt in hale connect erstellt werden.

Um ein neues Schema mit Hilfe des Modellierungswerkzeuges zu erstellen, gehen sie in der Rolle &laquo;Themenmanager&raquo; oder &laquo;Superanwender&raquo; wie folgt vor:

1. Gehen sie auf &laquo;Schemas&raquo;.
2. Klicken sie auf &laquo;+ Neues Schema anlegen&raquo;.
3. &laquo;Erstellungsmethode wählen&raquo;: Wählen sie &laquo;Auf Basis eines bestehenden Schemas erstellen&raquo; und klicken sie auf &laquo;Weiter&raquo;.
4. Definieren sie in den folgenden Schritten das Schema. Die Schemadefinition wird durch die Erstellungsmethode bestimmt.

    * &laquo;Informationen ergänzen&raquo;: Geben sie Name, Namensraum, Abkürzung, Autor oder Autorin, Version und Beschreibung ihres Schemas an. Wenn sie fertig sind, klicken sie auf &laquo;Weiter&raquo;.

    * &laquo;Objektart hinzufügen&raquo;: Geben sie Name und Beschreibung der Objektart an. Klicken sie auf &laquo;Weiter&raquo;.

    * &laquo;Beziehungen herstellen&raquo;: Die neue Objektart kann optional Beziehungen zu einer bestehenden Objektart erhalten. Wenn sie die neue Objektart mit einer bestehenden verknüpfen wollen, klicken sie auf die gestrichelte Box, in der der gewünschte Beziehungstyp aufgeführt ist. Es kann aus vier Beziehungstypen ausgewählt werden:

		a.	[Aggregieren](http://inspire-extensions.wetransform.to/patterns/aggregation.html)

		b.	[Erben](http://inspire-extensions.wetransform.to/patterns/inheritance.html)

		c.	[Referenzieren](http://inspire-extensions.wetransform.to/patterns/association.html)

		d.	[Zusammensetzen](http://inspire-extensions.wetransform.to/patterns/composition.html)

		Anschließend müssen sie die Objektart auswählen, zu der eine Beziehung hergestellt werden soll, indem sie zunächst ein Schema und anschließend die Objektart selbst auswählen.
      
		Wenn sie nicht sicher sind, welcher Beziehungstyp zu nutzen ist, klicken sie auf &laquo;Ich brauche eine Empfehlung&raquo;. Klicken sie auf den » Knopf, um ein Schema auszuwählen, das die Objektart enthält, zu der ihre neue Objektart eine Beziehung bekommen soll. Klicken sie anschließend auf den » Knopf um die zu verknüpfende Objektart auszuwählen.
      
		Klicken sie auf das Pfeilsymbol neben jeder Frage und geben sie eine Antwort an. Auf Grundlage ihrer Antworten wird ein Vorschlag für eine Beziehung angegeben. Wenn es mehrere Möglichkeiten gibt, erscheint ein grüner Statusbalken unter den anwendbaren Beziehungstypen. Der am weitesten ausgefüllte Statusbalken stellt die am besten passende Wahl dar. Klicken sie auf einen Beziehungstypen, um diesen auszuwählen.
      
		Wenn sie fertig sind, klicken sie auf &laquo;Weiter&raquo;.
      
    * &laquo;Eigenschaften definieren&raquo;: Klicken sie auf das &laquo;+&raquo;-Symbol, um ihrer Objektart zusätzliche Eigenschaften zuzuweisen. Klicken sie auf &laquo;Name&raquo;, um einen Namen einzugeben. Klicken sie auf &laquo;Eigenschaft konfigurieren&raquo;, um den Typ und die Bedingungen der Eigenschaft zu bearbeiten. Nutzen sie das &laquo;Beschreibung&raquo;-Feld für die Bereitstellung aller relevanten Informationen. Wenn sie mit der Eingabe fertig sind, klicken sie &laquo;Weiter&raquo;.
    
    * &laquo;Anlegen bestätigen&raquo;: Klicken sie &laquo;Anlegen&raquo; um das Schema zu speichern.