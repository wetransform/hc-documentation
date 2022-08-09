---
title: "Create a new schema based on an existing schema"
categories:
- "help-page-category-setup-haleconnect"
- "help-page-subcategory-setup-haleconnect-schema-create"
layout: help-detail
language: en

---

A *schema* describes the structure of a data set through the definition of types and their properties. Schemas can be imported from multiple types of data sources, such as databases, XML schema files, or even a Shapefile. They can also be created directly in hale connect using the built-in modelling tools.

To create a new schema using the modelling tools, follow this workflow logged in as a Theme Manager or Superuser:

1.	Go to “Schemas” on the main toolbar
2.	Go to “Create new schema” at the bottom of the schema list
3.	Select creation method. In the first step, select &laquo;Create based on an existing schema&raquo;. Click &laquo;Continue&raquo;
4.	Define schema. Next, define the schema you want to use. The schema definition is determined by the creation method.

    * Add information. Provide the name, namespace, shorthand, author, version and description of your schema. When you are finished, click &laquo;Continue&raquo;

    * Add type. Provide the name and description of the feature type. Click &laquo;Continue&raquo;

    * Create relationship. Optionally, you can decide that your new feature type should be related to an existing feature type. If you want to associate the new feature type with an existing one, click the dashed box corresponding to the association type that you want to use. There are four type extension patterns to choose from:

        a.	[Aggregation](http://inspire-extensions.wetransform.to/patterns/aggregation.html)

        b.	[Inheritance](http://inspire-extensions.wetransform.to/patterns/inheritance.html)

        c.	[Association](http://inspire-extensions.wetransform.to/patterns/association.html)

        d.	[Composition](http://inspire-extensions.wetransform.to/patterns/composition.html)

        You then need to pick the actual type to associate to – first, select a schema, then, select the concrete feature type.

        If you are not sure which type extension pattern to apply, click &laquo;I need a suggestion&raquo;. Click on the » button to select a schema which contains a feature type that is related to your new feature type. Next, click on the » button to select the related feature type.

        Click the chevron next to each question and provide an answer. A suggestion based on your answers is provided. If multiple options exist, a green bar under the applicable type extension patterns will appear. The most complete status bar represents the most suitable choice. Click on the type extension pattern to select it.

        When you are finished, click &laquo;Continue&raquo;.

    * Define properties. Click the &laquo;+&raquo; button to add an additional property to your feature type. Click Name to enter a name. Click Configure property to edit property types and constraints. Use the description field to provide any relevant information. When you are finished, click &laquo;Continue&raquo;

    * Confirm creation. Click &laquo;Create&raquo; to save the schema
