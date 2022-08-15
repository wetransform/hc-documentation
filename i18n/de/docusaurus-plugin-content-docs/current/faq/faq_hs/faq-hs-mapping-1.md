---
title: "Fragen und Antworten für hale»studio"
categories:
- "help-page-category-faq"
- "help-page-subcategory-faq"
layout: help-detail
language: de
---

<h2>Elemente vom Typ <i>AnyType</i> abbilden</h2>

Der XML-Schematyp <i>anyType</i> erlaubt es, dass der Inhalt des Elements alles sein kann. 
Dies ist ein Problem für hale»studio, da es nicht weiß, welche Art von Wert oder Struktur dort erwartet wird.
Wir haben dies für solche Fälle konfigurierbar gemacht.
Das Anpassen eines hale»studio-Projekts für die Verwendung von <i>anyType</i> ist jedoch ein manueller Prozess, es gibt keine Unterstützung in der Benutzeroberfläche.

Sie müssen in der hale Projektdatei das Setting <i>customTypeContent</i> zu den Settings des XML Schema Reader hinzuzufügen (XML-Format, zum Bearbeiten als .halex speichern).
Im Folgenden ein Beispiel für die Konfiguration des Schema Reader:

```
<resource action-id="eu.esdihumboldt.hale.io.schema.read.target" provider-id="eu.esdihumboldt.hale.io.xsd.reader">
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

Im obigen Beispiel ist die Eigenschaft result vom Typ <i>ObservationType</i> so konfiguriert, 
dass sie das Element <i>Quantity</i> enthalten kann.
