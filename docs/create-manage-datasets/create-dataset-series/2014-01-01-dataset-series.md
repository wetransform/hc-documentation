---
title: "Create new dataset series"
categories:
- "help-page-category-datasetworkflow"
- "help-page-subcategory-datasetworkflowcreatedatasetseries"
layout: help-detail
language: en
---


A dataset series is a collection of datasets sharing the same product specification [ISO 19115]. All files in a dataset series have the same schema and the same spatial coordinate reference system. It is also possible to create derived dataset series by means of transformation projects. A dataset series has its own INSPIRE, ISO or national metadata.

hale»connect supports the creation of dataset series and enables customers to upload multiple datasets easily using batch upload.

*Dataset series are enabled on a per organisation basis. Please contact us at info@wetransform.to for more information about dataset series.*

A range of file formats can be used to create a dataset series. A dataset series may contain:

### Vector data ###
  * Supported vector data formats include \*.gml and \*.shp
  * Multiple \*.shp files can be uploaded to create a dataset
  * Series which use \*.shp files can be created on hale»connect and used to transform data into \*.gml series that can be published. Series which use \*.shp files cannot be published.
  * Currently the upload of one \*.gml file per dataset is supported
    * INSPIRE, 3A, CityGML, XPlanung and ISYBAU are fully supported
  * \*.gml files containing the element gml:GenericMetaData, an empty gml:boundedBy element or arc geometries are currently not supported

### Non-spatial data ###
  * Supported data formats include \*.xml

### Raster data ###
  * Supported formats include \*.png, and \*.GeoTIFF
  * Currently the upload of one raster data resource per dataset is supported
  * Publishing raster resources without vector resources is not supported. A dummy vector file needs to be added in this case
  * A separate raster layer is published in the view and download services

### Attachments ###
  * Supported file attachment formats include \*.pdf, \*.png, \*.GeoTIFF, or even textures for 3D data
  * Attachments with dots in their file name are not supported
  * There are multiple ways to upload and associate attachments to your dataset
  * Attachments uploaded during dataset creation are added to the attachments section automatically
  * The attachment files uploaded to hale»connect have a publicly available link to the attachment file. The links to attachment files can be included in your Predefined dataset download service. The links to attachment files and external URLs can also be viewed in the Feature Explorer Tool.
  * Separate service layers are not created for attachment files
  * Visit our help page for [more information about working with attachments](https://www.wetransform.to/help/en/help-page-category-reference/help-page-subcategory-reference-data/2018/03/10/reference-data-files/)

### A combination of these data resources ###
  * Datasets can include \*.gml, raster and attachment data resources. View and download services for vector and raster data are published as separate layers.
  * Currently the upload of \*.shp with combined data resources is not supported

### **Creating a new dataset series** ###

Follow this workflow to publish a dataset series, logged in as a theme manager or superuser:

1. Create a schema based on your source data and toggle the switch to create a theme.
2. Navigate to your newly created theme, and click on the dataset series section.
3. In the dataset series section of your theme, toggle the switch to *Publish aggregate services for all datasets using this theme*.
4. Make sure to activate WFS in the download service section of your theme because it is currently not possible to publish series if there is no WFS configured.
5. If you plan to add data to your series using batch upload, click on the metadata section in the theme and add a dataset name pattern using the autofill assistant to provide your datasets with pre-configured names. This step is optional and recommended for batch upload if you need a special naming pattern for your datasets.

Once the theme is configured, any user belonging to your organisation or a sub-organisation of your organisation can create and publish a dataset series.

1. Go to &laquo;Data&raquo; on the main toolbar
2. Go to &laquo;Create new dataset&raquo; at the bottom of the dataset list
3. Select a series enabled theme to link to your dataset. The option to use batch upload appears when a series enabled theme is selected.
4. Users have the option to create a dataset series that contains a single dataset, or a dataset series that contains any number of datasets. Dataset series are automatically named using the following pattern: User organisaton (Theme name).

    **Dataset series with a single dataset:**  
      * Select the data sources for the individual dataset. There are a few ways to upload the files belonging to your dataset:
        *	Click &laquo;Select file(s)&raquo; and navigate to the desired dataset.
        * Click &laquo;Enter URL(s)&raquo; and navigate to the desired URL or WFS.
        * Drag a dataset to &laquo;Drop file(s) here&raquo;

      * Name your dataset and enter any required metadata elements. Metadata entry is determined by the metadata configuration in the theme associated with your dataset.

      * When a dataset series using individual files is created, the dataset series, the dataset belonging to the series and the dataset series metadata and dataset metadata are published. In the final step of dataset series creation, toggle *Create services* to publish dataset series services. Navigate to the dataset contained in your series to publish the individual dataset's services.

      * Execution rules are displayed in the final step of the workflow if your theme contains a transformation configuration. You can activate toggles to execute the transformation and create services for a series enabled target theme.


    **Dataset series using batch upload:**
      * Toggle the switch to use batch upload. There is only one way to upload files using batch upload. Creating a dataset series using batch upload requires the upload of a zip that directly contains the datasets as zips.<img src={require("/images/help/en/batch_upload.png").default} alt="batch upload" title="Dataset series using batch upload" className="img-responsive img-inline-help"/>

      * The dataset name and metadata steps are not available for dataset series creation using batch upload. We recommend configuring a [dataset name pattern autofill rule](https://www.wetransform.to/help/en/help-page-category-setup-haleconnect/help-page-subcategory-setup-haleconnect-thememetadata/2015/02/10/theme-edit-metadata/) in your theme to automatically name datasets belonging to a series. You can edit the metadata on a per dataset basis after series creation.

      * The mass publishing of services for dataset series using batch upload is not currently supported. When a dataset series using batch upload is created, the dataset series, the datasets belonging to the series and the dataset series metadata and dataset metadata are published. You can navigate to the resources to publish services after series creation.

      * The final step in the data series using batch upload workflow displays a list of the datasets added to the series.

 5. Dataset series can be viewed in the dataset resource list. Dataset series are identified by a 'Series' label. Click on the chevron next to the 'Series' label to expand the series and view the individual dataset resources which belong to the series. Visit the [Viewing datasets in the resource list](https://www.wetransform.to/help/en/help-page-category-datasetworkflow/help-page-subcategory-datasetworkflowcreatedataset/2015/01/08/viewing-resource-list/) documentation page for more information about working with the resource list and optimizing the display of fields to best suit your needs.

6. Click on the dataset series to navigate to the resource. Dataset series are organized similarly to datasets. The overview panel of a dataset series provides a summary overview of the resource including ownership information and a status panel which displays the system status of the series metadata and services. Users can edit series metadata in the metadata section, and series services in the view and download services sections. The dataset series section contains a list of all datasets which belong to a series. Every dataset that is published using a series enabled theme is added to the same dataset series.

7. To delete a dataset series, navigate to the series and click &laquo;Delete&raquo;. The dataset series and all sub-datasets are deleted.
