---
title: "Create a schema by uploading a schema file"
categories:
- "help-page-category-setup-haleconnect"
- "help-page-subcategory-setup-haleconnect-schema-create"
layout: help-detail
language: en

---

A *schema* describes the structure of a data set through the definition of types and their properties. Schemas can be imported from multiple types of data sources, such as databases, XML schema files, \*.json.hsd files, or even a Shapefile. They can also be created directly in hale connect using the built-in modelling tools.

To create a new schema using a schema file, follow this workflow logged in as a Theme Manager or Superuser:

1.	Go to “Schemas” on the main toolbar
2.	Go to “Create new schema” at the bottom of the schema list
3.	Select creation method. In the first step, select &laquo;Upload schema file&raquo;. Click &laquo;Continue&raquo;
4.	Define schema. Next, define the schema you want to use. The schema definition is determined by the creation method.

    * Click the &laquo;Select file(s)&raquo; button and navigate to the desired schema file (XSD) or drag a schema file to &laquo;Drop file(s) here&raquo;. If you want to create a schema for a shapefile, upload the shapefile and hale»connect will automatically extract the schema. If you want to create a schema for a GeoPackage, export a \.json.hsd (Hale Schema Definition) file from hale»studio and upload it. When you are finished, click &laquo;Continue&raquo;

    * Add information. Provide the name, author, type and version of your schema. When you are finished, click &laquo;Continue&raquo;

    * Confirm creation. In the final step, review your schema. You have the option to add or create a theme for your schema. When you are finished, click &laquo;Create&raquo; to save the schema
