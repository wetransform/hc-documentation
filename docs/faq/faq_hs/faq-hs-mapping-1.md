---
title: "Questions and answers on hale»studio"
categories:
- "help-page-category-faq"
- "help-page-subcategory-faq"
layout: help-detail
language: en
displayed_sidebar: tutorialSidebar
---

<h2>Map elements using <i>AnyType</i></h2>

The XML Schema type <i>anyType</i> allows the content of the element to be anything you want.
That is a problem for hale»studio, as it doesn't know which kind of value or structure is expected then.
We made this configurable for such cases. 
However, adapting a hale project for using <i>anyType</i> is a manual process, there is no support in the User Interface.

You need to add <i>customTypeContent</i> to the settings of the XML Schema Reader in the hale project file 
(XML format, save as .halex to edit).

The following is an example of the schema reader configuration:

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

In the above example the property result of the type <i>ObservationType</i> is configured so that it may contain the element <i>Quantity</i>.
