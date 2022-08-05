---
title: "Feature types"
categories:
- "help-page-category-reference"
- "help-page-subcategory-reference-schemas"
layout: help-detail
language: en

---

The Feature types section displays the (feature) types that make up your schema. A Feature Type is a class whose objects can be instantiated as a standalone object, compared to a property type, which is only instantiated in the context of a full feature. In the GML world, Features instantiated from a Feature Type are directly contained by a FeatureCollection.

The search box at the top of the page allows you to filter feature types by name. For each feature type, hale connect displays its name and properties on the left hand, and its description and documentation on the right-hand side. For each property in a feature type, the name and data type are listed. Click the chevron to view additional information on the property, such as constraints defined on it.

You can create as many feature types as you want in a schema. To add a new feature type, follow these steps:

1.	Scroll to the bottom of the feature type list;
2.	Click on «Add new type».  Provide the name and description of the feature type. Click &laquo;Continue&raquo;
3.	Create relationship. Optionally, you can decide that your new feature type should be related to an existing feature type. If you want to associate the new feature type with an existing one, click the dashed box corresponding to the association type that you want to use. There are four type extension patterns to choose from:

      a.	[Aggregation](http://inspire-extensions.wetransform.to/patterns/aggregation.html)

      b.	[Inheritance](http://inspire-extensions.wetransform.to/patterns/inheritance.html)

      c.	[Association](http://inspire-extensions.wetransform.to/patterns/association.html)

      d.	[Composition](http://inspire-extensions.wetransform.to/patterns/composition.html)

      You then need to pick the actual type to associate to – first, select a schema, then, select the concrete feature type.

      If you are not sure which type extension pattern to apply, click &laquo;I need a suggestion&raquo;. Click on the » button to select a schema which contains a feature type that is related to your new feature type. Next, click on the » button to select the related feature type.

      Click the chevron next to each question and provide an answer. A suggestion based on your answers is provided. If multiple options exist, a green bar under the applicable type extension patterns will appear. The most complete status bar represents the most suitable choice. Click on the type extension pattern to select it.

      When you are finished, click &laquo;Continue&raquo;.

4.	Define properties. Click the &laquo;+&raquo; button to add an additional property to your feature type. Click Name to enter a name. Click Configure property to edit property types and constraints. Use the description field to provide any relevant information.
5.	When you are finished, click &laquo;Continue&raquo;.
6.	Confirm creation. Click &laquo;Create&raquo; to save the schema.

If you want to remove a single feature type, click the red «remove» icon. If you want to edit the feature type, click the «Edit» icon.
