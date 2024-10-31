---
title: "Definování komplexních uživatelských práv"
categories:
- "help-page-category-setup-haleconnect"
- "help-page-subcategory-setup-haleconnect-thememetadata"
layout: help-detail
language: cs

---

V některých případech může být nutné formálně definovat složitá uživatelská práva k datové sadě. Systém poskytuje k vyjádření takových licencí specifickou syntaxi.

Takové komplexní licence lze použít v cestě „md-dataset.identification.constraints.mdConstraintPredefined“. Jako správce tématu nebo superuživatel organizace takové licence poskytujete správcům dat, kteří si pak mohou vybrat příslušnou licenci z vybraného pole. Tyto licence definujete jako enumeraci, pro kterou uvedete ```štítek``` a definici licence v poli ```hodnota```.

Definice licence musí být vytvořena pomocí následující gramatiky:

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

Vysvětlení syntaxe:

* `'abc'`: Klíčová slova bez uvozovek.
* `( obsah )?`: volitelný obsah, obsah lze při zadávání přeskočit
* `( obsah )*`: obsah vysoké kardinality, obsah lze zadat vícekrát
* `(obsah-1 | obsah-2)`: logické, nebo hodnota musí být buď ```obsah-1``` nebo ```obsah-2```
* `<TEXT>`: Textové zástupné symboly, vložit text bez lomených závorek

V TEXTU jsou povoleny následující znaky: `'+'|':'|'-'|','|'.'|';'|'?'|'!'|'„'|'ö'|' ä'|'ü'|'Ö'|'Ä'|'Ü'|'ß'|'“'|'('|')'|'@'|'/'|'#'|'{' |'}'|'©'`

Všimněte si, že v definici licence nejsou povoleny žádné nové řádky ani zlomy. Doporučujeme proto licenci nejprve vytvořit v textovém editoru, poté ji zhutnit a následně zkopírovat do editoru metadat.
