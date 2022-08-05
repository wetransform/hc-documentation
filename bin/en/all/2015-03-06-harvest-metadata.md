---
title: "Access the harvesting endpoint"
categories:
- "help-page-category-users"
- "help-page-subcategory-users-metadata"
layout: help-detail
language: en

---

We provide a harvesting endpoint for catalogue services that want to harvest metadata from the haleconnect platform. The harvesting URL can be built using the following pattern:

    https://haleconnect.com/services/bsp/metadata/org/<your org num>

Catalogue services retrieve a zip file containing all of the metadata for an organization from the harvesting URL.

As a system administrator, you can access a preview page which displays the metadata that is accessible from the harvesting endpoint. The harvesting preview page URL can be built using the following pattern:

    https://haleconnect.com/services/bsp/metadata/org/<your org num>?preview=true

<div class="alert alert-warning important-info">
  <table>
    <tr>
        <td style="width:3em">
          <div class="important-info-icon">
            <span class="glyphicon glyphicon-exclamation-sign" style="font-size:2em"></span>
          </div>
        </td>
        <td>To find your organisation number, navigate to your organisation's account page in settings (gear symbol). Your organisation number is displayed in the browser URL. For example: https://haleconnect.com/#/organisation/1 indicates that your organisation number is 1.</td>
    </tr>
  </table>
</div>

The Harvest-Preview page displays the harvesting URL, the preview page URL and the number of resources at the endpoint. There are also options to control the inclusion of remote metadata resources and keyword filters through the use of toggles. The includeremote toggle allows you to include remote metadata in the endpoint. The keywords toggle allows you to filter the list of metadata resources for datasets with the keyword 'inspireidentifiziert'. You can add additional keywords by adding one or more keywords in a comma separated list to the preview page URL after the keywords parameter.

For example, to filter on the keyword 'infoFeatureAccessService', construct the following URL:

    https://haleconnect.com/services/bsp/metadata/org/1?preview=true&keywords=infoFeatureAccessService

The Harvest-Preview page lists the metadata resources in tabular format at the bottom of the page. Metadata resources are listed in rows with the following columns:

* Type: The type of service
* Title: The title of the service
* Simple Keywords: The keywords extracted from the keywords field in the metadata file
* Fileidentifier: The file identifier number
* Filename: The name of the metadata file
* Link: A hyperlink to the metadata file
