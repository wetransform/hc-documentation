---
title: "General information about users and organisations"
categories:
- "help-page-category-users"
- "help-page-subcategory-users-general"
layout: help-detail
language: en

---

In most situations, a user is associated with an organisation and has exactly one of five default roles within the organisation. The five default roles are cumulative, i.e. a Theme Manager can do everything a Data Manager can do:

1.	**User (US):** A user who can log in to the system and does not have a specific role in an organisation. Can typically only read public resources.
2.	**Data Manager (DM):** A user who can log in to the system and is responsible for uploading and maintaining data sets.
3.	**Theme Manager (TM):** A user who can log in to the system and manage themes, schemas and transformation projects.
4.	**Superuser (SU):** A user who can log in to the system and is responsible for an organisation.
5.	**Administrator (AD):** A user who can log in to the system and access all system functionality and resources. The Administrator's access is not defined through his organisational role.

The structure of organisations is hierarchical. Each organisational structure has a root organisation, such as in this example:

* State A
    * County A1
        * Municipality A1a
        * Municipality A1b
    * County A2
        * Municipality A2a
        * Municipality A2b
        * Municipality A2c

Usually, a user has exactly one role inside an organisation. The user gets access to resources and functions of the system via privileges defined for the role. Some privileges depend on the hierarchical structure of the organisations of the logged in user and the owner of a resource.

**Example:** You belong to &laquo;County A1&raquo; with role &laquo;Superuser&raquo;. As a &laquo;Superuser&raquo;, you can see the data sets belonging to your organisation &laquo;County A1&raquo;, and the data sets belonging to any suborganisations associated with your root organisation. You can create new user accounts and suborganisations for your organisation, or for any of its suborganisations. You can create as many levels of suborganisations as you need.

<div class="alert alert-warning important-info">
  <table>
    <tr>
        <td style="width:3em">
          <div class="important-info-icon">
            <span class="glyphicon glyphicon-exclamation-sign" style="font-size:2em"></span>
          </div>
        </td>
        <td>When you create a new user as an administrator, the system enforces association of the user with an organisation and a role.</td>
    </tr>
  </table>
</div>

