---
title: "Q&A 14"
categories:
- "help-page-category-faq"
- "help-page-subcategory-faq"
layout: help-detail
language: en
displayed_sidebar: tutorialSidebar
---

<h2>Map elements using AnyType</h2>

The XML Schema type `anyType` allows the content of the element to be literally anything.
That's a problem for hale, as it doesn't know which kind of value or structure is expected there.
Also, it is not really feasible to just offer any possible value or type as content.
We had this problem also in a project we were doing, thus we decided to make this configurable for such cases.
Sadly the efforts we could spend on that did not include any support in the User Interface, so adapting the hale project for that is a manual process.
What you need to do is to add a setting `customTypeContent` to the settings of the XML Schema Reader in the hale project file (XML format, save as `.halex` to edit).
Here is an example of the schema reader configuration in an existing project:

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

In the example the property `result` of the type `ObservationType` is configured that it may contain the element `Quantity`.
