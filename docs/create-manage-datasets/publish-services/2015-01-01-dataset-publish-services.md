---
title: "Publish Services for a data set"
categories:
- "help-page-category-datasetworkflow"
- "help-page-subcategory-datasetworkflowpublishservices"
layout: help-detail
language: en
---

You can publish view and download services if the theme linked to your data set has a valid service configuration. Publishing services is done either by triggering the automated publishing process at the end of the data set creation, or through a manual command later on. When you publish services, the system always creates all configured services types at once; in other words, if your theme configuration includes a view- and a download service, it is not possible to publish just a download service. The reason for this is that the metadata of each has references to the other.

When you're logged in as a Data Manager or Theme manager, follow these steps to publish services manually:

1.	Go to &laquo;Data&raquo; on the main toolbar
2.	Pick the data set from the resource list for which you'd like to publish services
3.	Go to &laquo;View Services&raquo; or &laquo;Download Services&raquo;
4.	Activate the toggle switch
5.  Click &laquo;Publish services&raquo; to create and start the service, and also run any configured test suites
    *	This process runs in the background and can take a while. A progress bar displaying the status of service creation, service testing and service publishing appears. You will also receive an email with information on the success, or failure, of service publishing once the publication process has completed. The platform considers publications that take longer than one hour as having failed and will send you an email even if the publication is still running.<img src={require("/images/help/en/publish_services.png").default} alt="" title="Publishing view services" class="img-responsive img-inline-help"/>
6.	As each process completes, additional information will become available:
    *	Links to service and data set metadata
    *	For view services, you'll also get a preview link
    *	Test reports
    * Service settings
    * Service log <img src={require("/images/help/en/publish_services_testing.png").default} alt="" title="Publishing view services" class="img-responsive img-inline-help"/>
7.	To unpublish a service, deactivate the toggle switch and click &laquo;Delete services&raquo;.
