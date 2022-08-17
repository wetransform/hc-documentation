---
title: "Files"
categories:
- "help-page-category-reference"
- "help-page-subcategory-reference-data"
layout: help-detail
language: en
sidebar_position: 1

---

The Files section displays the number of files associated with the data set in a grey badge. In the Files section, you can upload additional files, view files, download files or delete files.

There are a few ways to add files:

  * Click «Select files(s)» and navigate to your data set
  * Click «Enter URL(s)» and add the desired URL or WFS GetFeature request. Add the API key in the Authorization field if you would like to pass an API key in the authorization header of the HTTP request to download data via API.
  * Click «Drop file(s) here» to drag and drop your files

Some file types (such as shapefiles and geodatabases) consist of multiple component files, so-called aggregate files. hale»connect displays these as a single logical file. To view the component files associated with an aggregate file, click on the file name or the “+” badge to show component files individually. To go back to see all files, click on «All files».

 To download all files in one archive, click on «Download as archive» to save a copy of the files to your computer. Clicking on the name of a component file will allow you to download the file.

 To delete a single (logical or component) file, click the red “x” in the top left corner of a file box. To delete all files, click on «Delete all files». Deleted files cannot be recovered.

 The toggle «Keep synchronised with data source» enables users to select the frequency with which datasets downloaded via API are updated. Updates can be configured to run daily, every hour or every ten minutes. The «Synchronise now» button triggers immediate synchronisation of files.

### **Upload Attachments**

 There are multiple ways to upload file attachments on hale»connect. You can upload attachments in the Files section of your dataset once it is published using drag-and-drop, uploading a file from disk, or by providing a URL. Attachments uploaded via URL can be automatically redownloaded by clicking on the «Redownload URL attachments» button. Alternatively, you can upload attachments during file creation. Attachment file types may include PDFs, GeoTIFFs or textures for 3D files. Attachments with dots in their file name are not supported. Attachment files are referenced in your data set.

 **Upload attachments during data set creation**

 In some cases, you may want to create a data set with a \*.gml file or a \*.shp which references a variety of associated documents or resources. If your \*.gml contains relative file references, you can upload the referenced resources during data set creation. hale»connect also supports publishing shapefiles with referenced attachments. Relative file references added to fields within shapefile attribute tables are recognized as attachments. Attachments uploaded during data set creation are added to the Files section of the dataset automatically. For datasets with transformation configurations, attachments are transferred automatically to the target dataset.

 Attachment files uploaded to hale»connect have a publicly available link to the attachment file. The links to attachment files can be included in your Predefined data set download service and viewed using the Feature Explorer Tool. Separate service layers are not created for attachment files.

 Once your data set is published, you can view your attachment files:

   *	Go to «Data» and select the data set from the list of resources
   *	Select the «Files» section
   *  Attachments appear in the «Attachments» panel. A warning will appear if your data set contains relative links to resources that were not uploaded during data creation. You can upload any missing attachment files directly in the «Attachments» panel. Republish your data set to include the new attachment link(s).

**Add placeholder values to your GML**

 Attachment files uploaded manually in the Files sections of your data set can be referenced in your GML data sets. To reference an attachment file, you must edit your GML file to include placeholder values for your attachment. The place holder value must be entered in an attribute that requires a string value, and must follow this pattern:```attachment:///<uploadedAttachmentFile>```

**Example:** ```<base:link>attachment:///MyFile.pdf<base:link>```

External URLs can also be referenced in your GML data sets. The external URLs must be entered in an attribute that requires a string value, and must follow
this pattern:```attachment-<urlToExternalFile>```

**Example:**```<base:link>attachment-http://www.mywebsite.de<base:link>```

The next step is to create a data set with your edited GML. File analysis identifies references to attachments and external URLs in your source data files. If you reference external URLs in your GML, you do not need to upload attachment files. If you reference attachments on the hale»connect platform, upload your attachment files in the Files section of your data.

To upload attachment files:

  *	Go to «Data» and select the data set from the list of resources
  *	Select the «Files» section
  *	Click «Upload attachment» to upload the referenced attachment. The file name must be identical to the file name in the GML. If you reference more than one attachment, you will see a list of file names in the Attachments section.
  *	Refresh your services

The expression in the GML is transformed into a publicly available link to the uploaded attachment file. The links to attachment files and external URLs can be viewed in the Feature Explorer Tool, which enables you to explore the attributes of complex GML files.

### **Associating files to feature types**

The system automatically associates the contents of each file to one of the theme’s feature types. For XML files, this process is deterministic and safe, for other file types which don’t have qualified namespaces and consistently defined attribute names, we use a heuristic to identify the best match. In some cases, this best match will still be incorrect. You can thus manually associate the contents of a file with a feature type:

1.	Click on the Pen icon in the file tile you want to re-associate
2.	From the list, choose the feature type to associate
