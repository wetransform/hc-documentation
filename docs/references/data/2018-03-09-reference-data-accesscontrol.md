---
title: "Access control"
categories:
- "help-page-category-reference"
- "help-page-subcategory-reference-data"
layout: help-detail
language: en
sidebar_position: 2

---

The access control section defines how published hale»connect services can be accessed. hale»connect supports secure service requests through the use of authentication tokens. Toggle &laquo;Authentication with Organisation Token&raquo; to enable secure service requests. View and download services can be configured separately.

Authentication tokens can be generated on the organisation profile page. Click the &laquo;Generate token&raquo; button to generate an authentication token. Tokens are valid for two weeks and are stored in the browser cache. The ```kelvin_token``` parameter is automatically added to services protected via token authentication. The token must be included in the URL to access the protected service.

<img src={require("/images/help/en/token_auth.png").default} alt="" title="Generating an authentication token on the organisation profile page" className="img-responsive img-inline-help"/>

Basic password protection can also be enabled. Basic password protection is not as secure as token authentication. Toggle &laquo;Basic Authentication with a fixed Username and Password&raquo; to enable password protection. Using this protection mechanism, access to services require that a user enter a username and password.

Changes to access controls require that services are republished to take effect.

Currently, token authentication for series or series sub-datasets is not supported.
