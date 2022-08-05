---
title: "Konsistenz-Bedingungen für ein Profil definieren"
categories:
- "help-page-category-profileworkflow"
- "help-page-subcategory-profileworkflow-cc"
layout: help-detail
language: de

---

Der &laquo;Konsistenz-Bedingungen&raquo;-Bereich bietet die Möglichkeit, Bedingungen zu Elementen des Profils zu definieren.Denn nicht alle Bedingungen lassen sich direkt auf einer Eigenschaft oder Objektart definieren. Oft definiert ein Profil Konsistenzbedingungen, die z.B. festlegen, ob eine bestimmte Eigenschaft einen Wert hat, der an Werte einer anderen Eigenschaft gekoppelt ist.

**Werte-Abhängigkeiten** können auf Elementen des Profils definiert werden, zum Beispiel: 'Wenn Element A den Wert X hat, muss Element B den Wert Y haben'.

**Existenz-Abhängigkeiten** können auf Elementen des Profils definiert werden, zum Beispiel: 'Wenn Element A existiert, darf Element B nicht existieren'.

**Kombinationen von Werte- und Existenz-Abhängigkeiten** können ebenso definiert werden, zum Beispiel: 'Wenn Element A den Wert X hat, darf Element B nicht existieren'.

Es können mehrere Konsistenz-Bedingungen erstellt werden. <img src="/images/help/de/Screenshot_2018-10-23 Create condition.png" alt="" title="Eine Konsistenz-Bedingung erstellen" class="img-responsive img-inline-help">

Um eine neue Konsistenz-Bedingung zu erstellen, melden sie sich in der Rolle &laquo;Superanwender&raquo; oder &laquo;Themenmanager&raquo; an und folgen sie diesem Ablauf:

1. Klicken sie auf &laquo;+Konsistenz-Bedingung hinzufügen&raquo;.
2. Wählen sie einen booleschen Operator aus dem Aufklappmenü aus.
3. Klicken sie auf &laquo;+Bedingung erstellen&raquo;.
4. Wählen sie die Objektart aus, auf welche sich die Bedingung beziehen soll.
5. Klicken sie auf eine Eigenschaft, um die verfügbaren Bedingungen anzeigen zu lassen. Wählen sie aus dem Aufklappmenü die Bedingung aus, die sie anwenden möchten. Diese wird als Voraussetzung für die Prüfung der Bedingung als &laquo;Wenn (If)&raquo;-Formulierung verwendet.<img src="/images/help/de/Screenshot_2018-10-23 Create condition(3).png" alt="" title="Einen booleschen Operator auswählen" class="img-responsive img-inline-help">
Wählen sie eine zweite Eigenschaft aus und wiederholen sie den Prozess, um eine &laquo;Dann (Then)&raquo;-Formulierung für den zweiten Teil der Bedingung hinzuzufügen. Um den Ausdruck der Konsistenz-Bedingung, die sie gerade erzeugt haben, zu sehen, scrollen sie zum unteren Ende des Dialogs.<img src="/images/help/de/Screenshot_2018-10-23 Create condition(4)2.png" alt="" title="Konsistenz-Bedingung" class="img-responsive img-inline-help">
6. Wenn sie fertig sind, klicken sie auf &laquo;Bestätigen&raquo;.
7. Im letzten Schritt können sie der Konsistenz-Bedingung einen Namen und eine Beschreibung hinzufügen. Bitte beachten sie, dass bei der Namensgebung keine Sonderzeichen (z.B. &, %, ?, #) oder Leerzeichen erlaubt sind und dass sie Großbuchstaben und Unterstriche bzw. Bindestriche anstatt Punkte, Leerzeichen oder Schrägstriche verwenden. Für die Beschreibung gibt es keine Beschränkungen. 
<img src="/images/help/de/Screenshot_2018-10-23 Create condition(5).png" alt="" title="Eine Konsistenz-Bedingung erstellen" class="img-responsive img-inline-help"> Um der Bedingung ein Tag/Wert-Paar hinzuzufügen, klicken sie auf &laquo;+ Tag/Wert-Paar hinzufügen&raquo;. Wählen sie einen Tag-Namen aus dem Aufklappmenü aus. Geben sie den zugehörigen Wert in dem dafür vorgesehenen Textfeld ein. Zu einem Tag-Namen können nicht mehrere Tag/Wert-Paare existieren. Wenn sie fertig sind, klicken sie auf &laquo;Anlegen&raquo;.
