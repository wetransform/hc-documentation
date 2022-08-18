---
title: "Questions and answers on hale»connect"
categories:
- "help-page-category-faq"
- "help-page-subcategory-faq"
layout: help-detail
language: de
---

<h2>Mapping Elemente vom Typ AnyType</h2>

Der XML-Schematyp `anyType` erlaubt es, dass der Inhalt des Elements buchstäblich alles sein kann.
Dies ist ein Problem für hale, da es nicht weiß, welche Art von Wert oder Struktur dort erwartet wird.
Außerdem ist es nicht wirklich plausibel, einfach irgendeinen möglichen Wert oder Typ als Inhalt anzubieten.

Für die Anpassung müssen Sie die zugrundeliegende hale Projektdatei manuell anpassen.
Und zwar wird die Konfigurationseinstellung `customTypeContent` als Element zu den Einstellungen des XML Schema Reader hinzugefügt (XML-Format, zum Bearbeiten als .halex speichern).

Im folgenden ein Beispiel für die Konfiguration des Schema Reader in einem bestehenden Projekt:

```<resource action-id="eu.esdihumboldt.hale.io.schema.read.target" provider-id="eu.esdihumboldt.hale.io.xsd.reader">
    <complex-setting name="customTypeContent">
        <xsd:typeContentConfig xmlns:xsd="http://www.esdi-humboldt.eu/hale/io/xsd">
            <core:list xmlns:core="http://www.esdi-humboldt.eu/hale/core">
                <core:entry>
                    <xsd:association>
                        <xsd:property>
                            <core:list>
                                <core:entry>
                                    <core:name namespace="http://www.opengis.net/om/2.0">OM_ObservationType</core:name>
                                </core:entry>
                                <core:entry>
                                    <core:name namespace="http://www.opengis.net/om/2.0">result</core:name>
                                </core:entry>
                            </core:list>
                        </xsd:property>
                        <xsd:config>
                            <xsd:typeContent mode="elements">
                                <xsd:elements>
                                    <core:list>
                                        <core:entry>
                                            <core:name namespace="http://www.opengis.net/swe/2.0">Quantity</core:name>
                                        </core:entry>
                                    </core:list>
                                </xsd:elements>
                            </xsd:typeContent>
                        </xsd:config>
                    </xsd:association>
                </core:entry>
            </core:list>
        </xsd:typeContentConfig>
    </complex-setting>
    <setting name="resourceId">110e79da-ba08-4759-8cea-8102b0850dc0</setting>
    <setting name="source">resource1/EF_OF_4.xsd</setting>
    <setting name="charset">UTF-8</setting>
    <setting name="contentType">eu.esdihumboldt.hale.io.xsd</setting>
</resource>
```

In diesem Beispiel ist die Eigenschaft `result` vom Typ `ObservationType` so konfiguriert, dass sie das Element `Quantity` enthalten darf.
