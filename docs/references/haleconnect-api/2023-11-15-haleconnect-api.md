---
title: "hale»connect API"
categories:
- "help-page-category-reference"
- "help-page-subcategory-reference-API"
layout: help-detail
language: en

---

The hale»connect platform can be accessed via API. The hale»connect API enables users to automatically execute workflows, change configuration settings, manage organisations and users, and many other tasks. A series of access URLs permit access to various platform functionality exposed via API. To begin exploring the hale»connect API in Swagger, it is necessary to log-in using your hale»connect user name and password.

Enter this URL in your favorite browser: https://haleconnect.com/swagger/

For on-premise users, enter: https://[yourdomain]/swagger/

wetransform can enable use of the hale»connect API for on-premise customers upon request.


Select Login, and provide your hale»connect user name and password to obtain an authentication token. If the Login endpoint is not visible, enter https://haleconnect.com/accounts/swagger.yaml in the URL input field at the top of the page and click on &laquo;Explore&raquo;. Click in the Model Schema field on the right hand side to copy the code template to the body.

<img src={require('@site/static/images/help/en/swaggerUI.png').default} alt="" title="Swagger UI" className="img-responsive img-inline-help"/>

A valid authentication token is required to execute tasks via API, and to access additional hale»connect API URLs. Click the &laquo;Try it out!&raquo; button and copy the generated token in the response body. At the top of the page, paste the token in the field that contains the text **api_key**. The field is located next to the hale»connect API URL. Once you have logged in and provided a valid authentication token, you can use the hale»connect API to perform tasks.

The HTTP operation(s) available for each endpoint are listed. The operations [GET](https://datatracker.ietf.org/doc/html/rfc9110#name-get), [POST](https://datatracker.ietf.org/doc/html/rfc9110#name-post), [PUT](https://datatracker.ietf.org/doc/html/rfc9110#name-put) and [DELETE](https://datatracker.ietf.org/doc/html/rfc9110#name-delete) are supported.

The GET operation requests the retrieval of data.

The POST operation requests that a server accept data contained in the request.

The PUT operation requests a resource to create or update its state.

The DELETE operation requests deletion of a state or resource.

When working in Swagger, wetransform recommends examining the endpoint, the HTTP operation and the written description of the endpoint available for each entry.

### User service
user_service: https://haleconnect.com/accounts/swagger.yaml

Actions exposed in the user service include hale»connect login, organisation and user management, passwords, permissions and registration.

### Bucket service
bucket_service:

  Bucket: https://haleconnect.com/store/data/swagger.yaml

  Schema: https://haleconnect.com/store/schemas/swagger.yaml

  TransformationProject: https://haleconnect.com/store/projects/swagger.yaml

  Metadata: https://haleconnect.com/store/metadata/swagger.yaml

  Attachment: https://haleconnect.com/store/attachments/swagger.yaml

A bucket is a container for objects stored in file storage. The hale»connect bucket service APIs provide access to files and datasets associated with each resource type. Some bucket service endpoints require providing a bucket id and organisation number. The bucket id and organisation id can be found in hale»connect resource links.

In the following example URL, the bucket id is **abe0849a-5110-43a5-81e4-5880fce3f398** and the organisation id is **599**.

Example URL: https://test.haleconnect.de/#/dataset/org/599/abe0849a-5110-43a5-81e4-5880fce3f398/files

### Interaction service
interaction_service: https://haleconnect.com/interactions/swagger.yaml

The interaction service provides access to comments, tasks and notes on a given resource, as well as the forum.

### Schema service
schema_service: https://haleconnect.com/schemas/swagger.yaml

The schema service grants access to schemas and profiles and enables users to perform actions related to schema locations, namespaces, and feature types.

### Project service
project_service: https://haleconnect.com/projects/swagger.yaml

The project service allows users to access transformation projects, alignments and mapping cells.

### Workflow manager
workflow_manager: https://haleconnect.com/workflows/swagger.yaml

The workflow manager service manages most tasks on the platform including transformations, validation, and status updates. The workflow manager service also enables users to access information about ETF Validator and Spatineo monitoring.

### Resources
resources: https://haleconnect.com/resources/swagger.yaml

The resource service enables access to organisation settings such as usage capacity and CSW configuration.

### Reports
reports: https://haleconnect.com/reports/swagger.yaml

The reports service provides access to validation results and usage information for datasets and services on hale»connect.

### Actions
actions: https://haleconnect.com/actions/swagger.yaml

The actions service enables users to delete an organisation and get the default basemap of an organisation.
