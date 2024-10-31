---
title: "Komplexe Nutzungsbedingungen konfigurieren"
categories:
- "help-page-category-setup-haleconnect"
- "help-page-subcategory-setup-haleconnect-thememetadata"
layout: help-detail
language: de
---

Im Pfad &laquo;md-dataset.identification.constraints.mdConstraintPredefined&raquo; können komplexe Nutzungsbedingungen vordefiniert werden, die Nutzenden in der Rolle &laquo;Datenmanager&raquo; dann zur Auswahl stehen. Hier können auch open-data-Lizenzen hinterlegen werden.

Die Hinterlegung der Nutzungsbedingungen erfolgt als Auswahlliste (enum). Im Feld ‚label‘ wird jeweils ein Bezeichner hinterlegt und im Feld ‚value‘ die Nutzungsbedingungen in einem vorgegebenen Textformat. Das Textformat benötigt folgende Grammatik:

```
    ('constraint' '['
      ('useLimitation='<TEXT>)?
       (
         ('useConstraint=' <TEXT>)
         |('accessConstraint=' iso:RestrictionCode)
         |('otherConstraint=' <TEXT>)
         |('otherConstraint-opendata='
           '['  
               'id=' <TEXT>
               'name=' <TEXT>
               'source=' <TEXT>
               'url=' <TEXT>
           ']'
       )*
    ']')*
```

Erläuterung der verwendeten Syntax:

* `'abc'`:  Schlüsselworte, Eingabe ohne Anführungszeichen.
* `( inhalt )?`: Optional, der Inhalt kann bei der Eingabe weggelassen werden.
* `( inhalt )*`: Mehrfach, der Inhalt kann mehrfach eingegeben werden.
* `(inhalt-1 | inhalt-2)`: Oder, entweder Inhalt-1 oder Inhalt-2.
* `<TEXT>`: Texteingabe, ohne die spitzen Klammern, 

Erlaubte Zeichen sind alle Buchstaben und Ziffern sowie folgende Sonderzeichen: `'+'|':'|'-'|','|'.'|';'|'?'|'!'|'„'|'ö'|'ä'|'ü'|'Ö'|'Ä'|'Ü'|'ß'|'“'|'('|')'|'@'|'/'|'#'|'{'|'}'|'©'`, jedoch keine Anführungszeichen. 

Die Angabe im Feld ‚value‘ erfolgt ohne Zeilenumbruch. Es empfiehlt sich daher, den Inhalt zunächst in einem Texteditor vorzubereiten und dann ohne Zeilenumbrüche in die Konfiguration zu übertragen.