---
title: "Define profile consistency conditions"
categories:
- "help-page-category-profileworkflow"
- "help-page-subcategory-profileworkflow-cc"
layout: help-detail
language: en

---

The Consistency conditions section supports the definition of logical conditions applied to profile elements using boolean operators.

**Value dependencies** can be defined on profile elements, e.g. When Element A has value X, Element B must have value Y.

**Existence dependencies** can be defined on profile elements, e.g. When Element A exists, Element B must not exist.

**Combinations of value and existence dependencies** can also be defined, e.g. When Element A has value X, Element B must not exist.

Multiple consistency conditions can be created. <img src={require("/images/help/en/Screenshot_2018-10-23 Create condition.png").default} alt="" title="Creating a consistency condition" class="img-responsive img-inline-help"/>

To create a new consistency condition, follow this workflow logged in as a Superuser or Theme Manager:

1.	Click &laquo;Add consistency condition&raquo;.
2.	Select a boolean operator from the dropdown menu.
3. Click &laquo;+Create condition&raquo;.
4. Select the feature type you would like to reference in the condition.
5. Click the property name to expose the available conditions. Select the condition you would like to apply from the drop down menu. It will be used as &laquo;If&raquo; statement for the condition.<img src={require("/images/help/en/Screenshot_2018-10-23 Create condition(3).png").default} alt="" title="Selecting a boolean operator" class="img-responsive img-inline-help"/>
Select a second property and repeat the process to add a &laquo;Then&raquo; statement as second part of the condition. To view the consistency condition expression you have created, scroll to the bottom of the dialog.<img src={require("/images/help/en/Screenshot_2018-10-23 Create condition(4)2.png").default} alt="" title="Consistency condition" class="img-responsive img-inline-help"/>
6. When you are finished, click &laquo;Confirm&raquo;
7. In the final step, add a name and description to the consistency condition. When providing a name, make sure to avoid special characters or spaces (e.g. &, %, ?, #) and to use capitals and underscores or hyphens instead of periods, spaces or slashes. No restrictions apply for the description.
<img src={require("/images/help/en/Screenshot_2018-10-23 Create condition(5).png").default} alt="" title="Creating a consistency condition" class="img-responsive img-inline-help"/> To add a tagged value to the condition, click &laquo;+Add tagged value&raquo;. Select a tag name from the drop down menu. Enter the value in the text box provided. Multiple tagged values for the same tag name are not possible. When you are finished, click &laquo;Create&raquo;.
