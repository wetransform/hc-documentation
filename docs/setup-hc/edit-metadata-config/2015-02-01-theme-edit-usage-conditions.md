---
title: "Define complex usage conditions"
categories:
- "help-page-category-setup-haleconnect"
- "help-page-subcategory-setup-haleconnect-thememetadata"
layout: help-detail
language: en

---

In some cases, it might be necessary to formally define complex usage rights on a data set. The system provides a specific syntax for expressing such licenses.

Such complex licenses can be used in the path „md-dataset.identification.constraints.mdConstraintPredefined“. As a theme manager or organisation superuser, you provide such licenses to the data managers, who can then pick the appropriate license from a select field. You define these licenses as an enumeration, for which you provide a ```label``` and a license definition in the field ```value```.

The license definition needs to be built using the following grammar:

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

Explanation of the syntax:

* `'abc'`:  Keywords, provided without quotes.
* `( content )?`: optional content, content can be skipped when entering
* `( content )*`: high-cardinality content, content can be entered multiple times
* `(content-1 | content-2)`: logical or, value needs to be either ```content-1``` or ```content-2```
* `<TEXT>`: Text placeholders, insert text without angle brackets

The following characters are permitted in TEXT: `'+'|':'|'-'|','|'.'|';'|'?'|'!'|'„'|'ö'|'ä'|'ü'|'Ö'|'Ä'|'Ü'|'ß'|'“'|'('|')'|'@'|'/'|'#'|'{'|'}'|'©'`

Note that no new lines or breaks are permitted in the license definition. We thus recommend creating the license in a text editor first, then to compact it and then to copy it into the metadata editor.
