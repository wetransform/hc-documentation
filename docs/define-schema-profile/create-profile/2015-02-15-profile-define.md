---
title: "Create a profile"
categories:
- "help-page-category-profileworkflow"
- "help-page-subcategory-profileworkflow-create"
layout: help-detail
language: en

---

A *profile* describes the extension of a schema through the definition of rules applied to data model elements. A profile is defined by consistency conditions and tag definitions which are applied to schema elements. A profile supports customized schema extension for domain-specific use. A data model can have multiple profiles, which can be combined and used together to achieve the desired result.

Profiles can also be created directly in hale connect using the built-in profile modelling tools. Before you can create a profile, you will need to create the schema that your profile is based on. Follow the steps described here to create a schema by uploading a [schema file](http://www.wetransform.to/help/en/help-page-category-setup-haleconnect/help-page-subcategory-setup-haleconnect-schema-create/2018/01/28/schema-create-file/), by providing a [web address](http://www.wetransform.to/help/en/help-page-category-setup-haleconnect/help-page-subcategory-setup-haleconnect-schema-create/2018/01/28/schema-create-external/) or by using a [schema preset](http://www.wetransform.to/help/en/help-page-category-setup-haleconnect/help-page-subcategory-setup-haleconnect-schema-create/2018/01/28/schema-preset/). There are presets for all INSPIRE models as well as for the ISO 19115/19139 metadata schema on haleconnect.

To create a new profile, follow this workflow logged in as a Superuser or Theme Manager:

1.	Go to “Schemas” on the main toolbar.
2.	Go to “Create new schema” at the bottom of the schema list, chose “Create profile” and click &laquo;Continue&raquo;.
<img src={require("/images/help/en/Screenshot_2018-10-23 Create new schema.png").default} alt="" title="Creating a profile" className="img-responsive img-inline-help"/>
3.	Add profile information. Next, provide the name, author, version and description of your profile. When you are finished, click &laquo;Continue&raquo;.
4.  Select the schema your profile will be based on. Click the &laquo;+Select Schema&raquo; button and navigate to the desired schema. Click the » to select it. When you are finished, click &laquo;Continue&raquo;.
<img src={require("/images/help/en/Screenshot_2018-10-23 Create new schema_1.png").default} alt="" title="Creating a profile" className="img-responsive img-inline-help"/>
5. Confirm creation. In the final step, review your profile. You have the option to add or create a theme for your profile. When you are finished, click &laquo;Create&raquo; to generate the profile.
