---
title: "Create new data set"
categories:
- "help-page-category-datasetworkflow"
- "help-page-subcategory-datasetworkflowcreatedataset"
layout: help-detail
language: en
---

## Supported formats ##

hale»connect currently supports a range of file formats which can be used to create data sets. The size limit for single file upload is 2 GB. The size limit for attachments on haleconnect.com is 750 MiB. A data set may contain:

**Vector data**
  * Supported vector data formats include \*.gml, \*gpkg and \*.shp
  * Multiple \*.shp files can be uploaded to create a data set
  * Publication of \*.shp files in which the first object does not have a geometry is currently not supported
  * One or more  \*.gml files per data set is supported
    * INSPIRE, 3A, CityGML, XPlanung and ISYBAU are fully supported
  * \*.gml files containing the element gml:GenericMetaData, an empty gml:boundedBy element or arc geometries are currently not supported
  * One or more  \*.gpkg files per data set is supported
    * \*.gpkg schemas can be exported from hale»studio as \*.json.hsd files for use in hale»connect
    * \*.gpkg is supported as source and target in online transformation configurations
  * The publication of 3D data is supported.

**Non-spatial data**
  * Supported data formats include \*.xml

**Raster data**
  * Supported formats include \*.png, and \*.GeoTIFF
  * Currently the upload of one raster data resource per data set is supported
  * Publishing raster resources without vector resources is not supported. A dummy vector file needs to be added in this case
  * A separate raster layer is published in the view and download services

**Attachments**
  * Supported file attachment formats include \*.pdf, \*.png, \*.GeoTIFF, or even textures for 3D data
  * Attachments with dots in their file name are not supported
  * There are multiple ways to upload and associate attachments to your data set
  * Attachments uploaded during data set creation are added to the attachments section automatically
  * The attachment files uploaded to hale»connect have a publicly available link to the attachment file. The links to attachment files can be included in your Predefined data set download service. The links to attachment files and external URLs can also be viewed in the Feature Explorer Tool.
  * Separate service layers are not created for attachment files
  * Visit our help page for [more information about working with attachments](../../references/data/2018-03-10-reference-data-files.md)

**A combination of these data resources**
  * Data sets can include \*.gml, raster and attachment data resources. View and download services for vector and raster data are published as separate layers.
  * Currently the upload of \*.shp with combined data resources is not supported

## Create a dataset ##

To create a new data set, follow this workflow as a logged in data manager or theme manager:

1. Go to &laquo;Data&raquo; on the main toolbar
2. Go to &laquo;Create new Data Set&raquo; at the bottom of the data set list
3. Select a theme to link to your data set.
    * You can also create a data set without linking it to a theme, but without the link, you can't publish services or execute transformation projects for that data set.
    * Superusers who belong to more than one organisation can select the organisation in which to create a dataset. The dropdown menu of available organisations enables Superusers to create datasets for organizations that they are not currently logged into.
4. Select the data source. There are a few ways to upload the files belonging to your dataset:
    *	Click &laquo;Select file(s)&raquo; and navigate to the desired dataset.
    * Click &laquo;Enter URL(s)&raquo; and add the desired URL or WFS GetFeature request. Add the API key in the Authorization field if you would like to pass an API key in the authorization header of the HTTP request to download data via API.
    * Drag a dataset to &laquo;Drop file(s) here&raquo;

   The size limit for single file upload is 2 GB.

   <br/>
   Tip: We recommend that you zip your files to reduce upload times and to ensure that no files are lost. To upload a Shapefile, you should zip all individual files (\*.shp, \*.dbf, \*.prj, \*.shx, …) in an archive. To upload an XML file such as ALKIS, ISYBAU or GML, we also recommend that you upload them as a zip archive.

   <br/>
   To upload your files from a database click &laquo;Connect to database&raquo; and enter the following information:
      * Database type (MS SQL, PostgreSQL and PostGIS are currently supported)
      * Host (:Port)
      * Database (Provide the database name)
      * Username
      * Password
    <br/>
    <img src={require("/images/help/en/upload_from_database.png").default} alt="" title="Uploading files from a database" className="img-responsive img-inline-help"/>

5.	Give your data set a name. This name should enable you to quickly und clearly identify the data set in the system. If the linked theme's metadata configuration is set up to use the name in publishing, the name is also used for data set metadata.
6.	Provide metadata for your data set. Metadata entry is determined by the theme associated with your dataset.

    If the theme uses the metadata editor, enter required and optional metadata for your dataset or services:
      * Metadata categories display a red badge with the number of missing required metadata elements. Click the chevron at the end of any  metadata category to expand it.
      * Required input fields are marked by red symbols. Optional input fields are marked by orange symbols.
      * Metadata categories display a green check mark once you have provided all required metadata.
      * Click «Fill automatically» if you accidentally remove or overwrite pre-populated values and you would like to retrieve the original values.
      * Click &laquo;Continue&raquo; to save the metadata.<img src={require("/images/help/en/create-dataset-metadata.png").default} alt="" title="The metadata editor" className="img-responsive img-inline-help"/>

      <br/>
    If the theme uses Republish existing metadata:

      * Upload your existing metadata file.<img src={require("/images/help/en/create-dataset-metadata_2.png").default} alt="" title="The metadata editor" className="img-responsive img-inline-help"/>

    If the theme uses Link to existing metadata:

      * Provide a link to your metadata file.<img src={require("/images/help/en/create-dataset-metadata_3.png").default} alt="" title="The metadata editor" className="img-responsive img-inline-help"/>
       <br/>

7. The «Set project variables» step will appear if your theme has a transformation configuration and you have added project variables to your transformation project in hale»studio. hale»connect provides users the option to edit the transformation project variable in this optional step.
8.	In the final step, you can review the execution rules configured for the theme. The execution rules are a list of all possible steps in the publishing process. By default, you will see up to five toggle switches to publish Download and View Services, to transform the new data set, and to publish services for the transformed data set. If you know you need to work on the data set before it is to be published, deactivate the service publishing.

:::caution

If you close the browser or the tab, or you click a different link, you will be asked whether the work in progress data set should be saved or deleted. If you pick save, you can continue editing it later.

:::
