---
title: "Edit and delete organisation profile"
categories:
- "help-page-category-users"
- "help-page-subcategory-users-orgs"
layout: help-detail
language: en

---

Administrator and organisation superusers can edit the organisation profile page. To access the organisation profile page:

1.  Go to settings (gear symbol)
2.  Go to &laquo;Organisations&raquo;
3.	Select your organisation from the list

Alternatively, you can click on the name of the organisation in your user profile.

On the organisation profile page, there are several configuration options available.

-	**Profile picture:** Click on the profile picture to upload your organisation's logo or custom avatar. Accepted file formats include JPEG and PNG.
-	**Name of the legal entity:** This optional field enables users to provide the name of the legal entity.
-	**Description:** This optional field enables users to provide a description of their organisation.
-	**Add Contact Information:** These standard contact info fields help other users reach out to you and can be used for the metadata autofill rules.
-	**Map configuration:** This section enables users to provide a URL to a WMS basemap, and optionally provide a copyright attribution displayed on the map view (see the image below). The copyright attribution field supports HTML links, e.g. `&copy; GeoBasis-DE / <a href="https://www.bkg.bund.de/">BKG</a> 2025 CC BY 4.0`. <br/>As organisation superuser or administrator, you can configure the default basemap for the map view in the view services section of your datasets. When members of your organisation view published services on the platform, the data is displayed using your configured WMS as the basemap. Users have the added ability to upload their own WMS basemap via the map view interface.<img src={require("/images/help/en/copyright_attribution.png").default} alt="" title="Basemap copyright attribution" className="img-responsive img-inline-help"/>
- **Events** Activate the &laquo;Subscribed&raquo; toggle to receive email notifications about automated workflows. The notifications provide information about the status of online transformations and service publishing every time a workflow is run.
- **CSW INSPIRE metadata** The fields: Supported languages, Default language, Date, Gemet keywords, Service conformity, and Temporal extent enable administrators of organisations with an activated CSW organisation endpoint to configure the CSW GetCapabilities document. Default values are entered automatically in the CSW GetCapabilities document if no values are entered in the fields. Entered values will appear after the nightly CSW update. 
- **Add custom fields:** Such fields are used to save user-defined values for metadata autofill rules. You and your organisation should agree on the keys for these user-defined fields so that they can be used effectively in the autofill rules.

Administrator and organisation superusers also have the option to create suborganisations, create users, add existing users and delete the organisation, directly from the organisation profile page.

:::warning[Caution]

When you delete an organisation, user accounts associated with the organisation remain active. These user accounts no longer have an organisation or role and as a consequence have very limited privileges until they are linked to a new organisation.

:::


:::warning[Caution]

The organisation name cannot be edited.

:::
