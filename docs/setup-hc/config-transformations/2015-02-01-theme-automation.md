---
title: "Automated Publishing and Transformation"
categories:
- "help-page-category-setup-haleconnect"
- "help-page-subcategory-setup-haleconnect-themetransformation-automation"
layout: help-detail
language: en

---

An automated workflow performs service publishing and data transformation as a background process that does not require any user interaction. The automated workflow responds to events including service updates and transformations. When events occur, services are created and published, and transformation projects are executed. A typical automated workflow looks like this:

1. Creation of a non-INSPIRE data set
1. Publication of services for the non-INSPIRE data set
1. Transformation of data to an INSPIRE target model
1. Publication of services for the newly created INSPIRE data set

When logged in as a theme manager or organisation superuser, follow these steps to set up the automated workflow:

1.	Go to &laquo;Themes&raquo;
1.	Pick the theme you'd like to automate from the list of themes
1.	Go to &laquo;Automation&raquo;
1.	Set the execution rules for service updates and transformations. Decide when the execution should happen - manually, immediately or with a delay.
1.	If you've selected &laquo;Later&raquo;, proceed to set up when exactly the transformation and publishing should be executed:
    * **Daily:** Pick the time of the day at which the transformation and publishing should be executed.
    * **Weekly:** Pick the weekday and the time of the day at which the transformation and publishing should be executed.
    * **Monthly:** Pick the day of the month and the time of the day at which the transformation and publishing should be executed.
    <br/>
    <img src={require("/images/help/en/automated_publishing.png").default} alt="" title="Automating publishing" class="img-responsive img-inline-help"/>
