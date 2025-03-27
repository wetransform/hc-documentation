"use strict";(self.webpackChunkhc_documentation=self.webpackChunkhc_documentation||[]).push([[5379],{397:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/update_schemas-536a2d3dc0b300952773e61f952695af.png"},3067:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/cell_entity_could_not_be_resolved-d7e7a38885412d1caabefb24852cf964.png"},3345:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>h});const a=JSON.parse('{"id":"tutorials/2018-04-28-schema-update-tutorial","title":"Schema updates in hale\xbbstudio and on hale\xbbconnect","description":"In February 2024, several INSPIRE GML application schemas were updated. Data harmonized using v4.0 schemas, which currently have a v5.0 available, must be re-transformed using an updated transformation project to be compliant against the latest version of the schema. Breaking changes have also been introduced to v4.0 schemas, although no major version change was made. Automated online transformation workflows configured on the hale\xbbconnect platform can be easily updated to use a new schema version to publish, transform and validate datasets and services within minutes.","source":"@site/docs/tutorials/2018-04-28-schema-update-tutorial.md","sourceDirName":"tutorials","slug":"/tutorials/2018-04-28-schema-update-tutorial","permalink":"/cs/docs/tutorials/2018-04-28-schema-update-tutorial","draft":false,"unlisted":false,"editUrl":"https://github.com/wetransform/hc-documentation/tree/master/docs/tutorials/2018-04-28-schema-update-tutorial.md","tags":[],"version":"current","frontMatter":{"title":"Schema updates in hale\xbbstudio and on hale\xbbconnect","categories":["help-page-category-tutorials","help-page-subcategory-tutorials"],"layout":"help-detail","language":"en"},"sidebar":"tutorialSidebar","previous":{"title":"Za\u010d\xedn\xe1me s hale\xbbconnect","permalink":"/cs/docs/getting-started/2018-04-28-quick-start"},"next":{"title":"Konfigurace online transformace na hale\xbbconnect","permalink":"/cs/docs/tutorials/2018-04-29-transformation-tutorial"}}');var s=n(4848),o=n(8453);const i={title:"Schema updates in hale\xbbstudio and on hale\xbbconnect",categories:["help-page-category-tutorials","help-page-subcategory-tutorials"],layout:"help-detail",language:"en"},r=void 0,c={},h=[{value:"<strong>Tutorial data</strong>",id:"tutorial-data",level:3},{value:"<strong>Updating a Transformation Project</strong>",id:"updating-a-transformation-project",level:3},{value:"<strong>Updating an Online Transformation Workflow on hale\xbbconnect</strong>",id:"updating-an-online-transformation-workflow-on-haleconnect",level:3}];function l(e){const t={a:"a",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"In February 2024, several INSPIRE GML application schemas were updated. Data harmonized using v4.0 schemas, which currently have a v5.0 available, must be re-transformed using an updated transformation project to be compliant against the latest version of the schema. Breaking changes have also been introduced to v4.0 schemas, although no major version change was made. Automated online transformation workflows configured on the hale\xbbconnect platform can be easily updated to use a new schema version to publish, transform and validate datasets and services within minutes."}),"\n",(0,s.jsx)(t.p,{children:"This tutorial reviews the steps required to update the schema used in automated online transformation workflows. Updating an online transformation workflow requires the update of multiple resources and it must be performed by a user with Theme manager or Superuser permissions. Before we begin, let's review a list of the resources we need:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"a hale\xbbstudio transformation project"}),"\n",(0,s.jsx)(t.li,{children:"a schema(s) for your target data"}),"\n",(0,s.jsx)(t.li,{children:"a target theme"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"tutorial-data",children:(0,s.jsx)(t.strong,{children:"Tutorial data"})}),"\n",(0,s.jsxs)(t.p,{children:["The installation of hale\xbbstudio and the creation of alignments are beyond the scope of this tutorial. For more information, visit ",(0,s.jsx)(t.a,{href:"https://www.wetransform.to/products/halestudio/",children:"hale\xbbstudio"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"For this tutorial, we will use:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["An existing hale\xbbstudio transformation project. You can download the transformation project ",(0,s.jsx)(t.a,{href:"https://test.haleconnect.de/#/transformation/org/740/fee5465b-52eb-4adf-9fec-3b59dffdee71/overview",children:"here"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Source data. You can download the shapefile ",(0,s.jsx)(t.a,{href:"https://wetransform.box.com/s/6m9ygbmzestcmq9gk6uwrbs9kcyp12v5",children:"here"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The transformation project maps German protected sites data to the INSPIRE feature type ProtectedSite, which is found in the INSPIRE Protected Sites 4.0 schema."}),"\n",(0,s.jsx)(t.h3,{id:"updating-a-transformation-project",children:(0,s.jsx)(t.strong,{children:"Updating a Transformation Project"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Step 1: Open an existing transformation project in hale\xbbstudio"})}),"\n",(0,s.jsxs)(t.p,{children:["A transformation project is a ",(0,s.jsx)(t.a,{href:"https://www.wetransform.to/products/halestudio/",children:"hale\xbbstudio"})," project using the formats *.halex or *.halez that has been uploaded to hale\xbbconnect. The project contains references to source and target schemas, an alignment that defines the transformation by mapping elements from the source schema to elements in the target schema, additional configuration for the loaded schemas and configuration options for the desired output."]}),"\n",(0,s.jsx)(t.p,{children:'If you have hale\xbbstudio installed on your computer, you can load the transformation project named "INSPIRE_ProtectedSites.halex" which is included in the tutorial data.'}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Step 2: Update the INSPIRE schema used by the transformation project"})}),"\n",(0,s.jsx)(t.p,{children:"The next step is to update the schema used in the transformation project, so that it uses the INSPIRE Protected Sites schema version 5.0 instead of 4.0."}),"\n",(0,s.jsxs)(t.p,{children:["In hale\xbbstudio navigate to the File menu and select the option to Reload and update schemas. In the dialog that appears, double-click on the schema URL that is displayed and navigate to the INSPIRE presets and select the INSPIRE Protected Sites 5.0 schema. ",(0,s.jsx)("a",{className:"image-news text-center col-xs-12 mt mb",children:(0,s.jsx)("img",{src:n(397).A,alt:"",title:"Selecting a new schema",className:"img-responsive center-block"})})]}),"\n",(0,s.jsx)(t.p,{children:"Click \xabOK\xbb. The INSPIRE schema used in the transformation project is updated to v5.0."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Step 3: Load source data and complete cell entity matching"})}),"\n",(0,s.jsx)(t.p,{children:"In this step, we will load the source data and complete the steps displayed in the cell entity matching dialogs that appear in hale\xbbstudio. Cell entity matching dialogs appear when a schema is changed and hale\xbbstudio cannot determine how to update the existing mappings due to changed type names, property names or changed namespaces. In these cases, the end user must provide hale\xbbstudio information on how to update the existing mappings, based on the new schema."}),"\n",(0,s.jsxs)(t.p,{children:["It is useful to review the changes that have been made to the schema you are updating to obtain an overview of the elements that need to be updated. The changes are documented as comments in the INSPIRE *.xsd schema files available ",(0,s.jsx)(t.a,{href:"https://inspire.ec.europa.eu/schemas/index.html",children:"here"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"First, load the source data in hale\xbbstudio. Navigate to the File menu and select Import, next, select Source data..."}),"\n",(0,s.jsxs)(t.p,{children:["Once the source data is loaded, a potentially large number of cell entity dialogs will appear successively until all elements have been updated to reflect the new schema. A complete update requires the end user to manually select the element in the element tree that hale\xbbstudio is searching for, for each updated reference. In some cases, hale\xbbstudio will correctly identify the matching element in the new schema (for example if only the namespace changed but the type and property name remain the same), in other cases, direct user input is required. It is possible to skip one or more mappings in the dialog if the handling is not fully clear. Skipping a mapping allows the end user to continue with automatically assigned, or recognised mappings, without having to cancel the entire process. Unhandled mappings can be edited afterwards in the hale\xbbstudio UI. ",(0,s.jsx)("a",{className:"image-news text-center col-xs-12 mt mb",children:(0,s.jsx)("img",{src:n(3067).A,alt:"",title:"Cell entity matching",className:"img-responsive center-block"})})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Step 4: Check validation and save transformation project"})}),"\n",(0,s.jsx)(t.p,{children:"Once all cell entity matching has been completed, take a moment to check the validation of the updated transformation project to ensure that all required schema elements have been handled properly. In hale\xbbstudio, open the Report List window to view the status of the instance transformation and the instance validation. A green check indicates a valid project. A yellow warning indicates that the project contains mappings with warnings that can be reviewed in the Properties window. Double-click on the instance transformation and the instance validation text in the Report List window to view more information about warnings in the Properties window."}),"\n",(0,s.jsx)(t.p,{children:"Once your check is complete, save your project."}),"\n",(0,s.jsxs)(t.p,{children:["You can export the INSPIRE_ProtectedSites transformation project directly to your hale\xbbconnect account once you are finished updating the project. If you need help, visit the hale\xbbstudio User Guide help topic ",(0,s.jsx)(t.a,{href:"http://help.halestudio.org/latest/index.jsp?topic=%2Feu.esdihumboldt.hale.doc.user%2Fhtml%2Ftasks%2Fhaleconnect%2Fshareproject.html",children:"Share and update a transformation project on hale\xbbconnect"})," for further instructions."]}),"\n",(0,s.jsx)(t.p,{children:"You can also upload a transformation project manually."}),"\n",(0,s.jsx)(t.h3,{id:"updating-an-online-transformation-workflow-on-haleconnect",children:(0,s.jsx)(t.strong,{children:"Updating an Online Transformation Workflow on hale\xbbconnect"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Step 1: Create a new schema"})}),"\n",(0,s.jsx)(t.p,{children:"The updated transformation project you are working with transforms German Protected Sites data to INSPIRE Protected Sites v5.0. These INSPIRE feature types are found in the INSPIRE Protected Sites 5.0 schema, so you will create this schema on hale\xbbconnect. hale\xbbconnect contains a large number of schema presets, including all of the updated INSPIRE schemas."}),"\n",(0,s.jsx)(t.p,{children:"To create a new schema using a schema preset, follow this workflow logged in as a Theme Manager or Superuser:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Go to \u201cSchemas\u201d on the main toolbar"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Go to \u201cCreate new schema\u201d at the bottom of the schema list"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Select creation method. In the first step, select \xabSelect preset\xbb. Click \xabContinue\xbb"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Define schema. Next, define the schema you want to use. The schema definition is determined by the creation method."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Select the INSPIRE Protected Sites 5.0 schema preset from the dropdown list of available presets.",(0,s.jsx)("img",{src:n(7595).A,alt:"",title:"Creating a new schema from a preset",className:"img-responsive img-inline-help"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Add information. Provide the name, author, type and version of your schema. When you are finished, click \xabContinue\xbb"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Confirm creation. In the final step, review your schema. You have the option to create a theme for your schema. For this workflow, you do not need to enable theme creation. When you are finished, click \xabCreate\xbb to save the schema."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Step 2: Update the feature types of the target theme"})}),"\n",(0,s.jsx)(t.p,{children:"The next step is to update the Feature Types section of your INSPIRE Protected Sites theme to use the feature types from the INSPIRE Protected Sites 5.0 schema."}),"\n",(0,s.jsx)(t.p,{children:"First, navigate to your existing Protected Sites theme on hale\xbbconnect. Select the Feature Types section."}),"\n",(0,s.jsx)("img",{src:n(9598).A,alt:"",title:"Updating feature types",className:"img-responsive img-inline-help"}),"\n",(0,s.jsx)(t.p,{children:'Click the red "x" to delete the existing feature types and click on \xab+ Add new type\xbb. Navigate to the INSPIRE Protected Sites 5.0 schema in the dialog that appears and select \xabAdd all\xbb. Your existing theme is now updated to use the feature types from the INSPIRE Protected Sites 5.0 schema.'}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Step 3: Trigger the updated transformation project and republish existing resources"})}),"\n",(0,s.jsx)(t.p,{children:"Once you have updated your transformation project and updated the feature types in your existing target theme, you can re-run the online transformation to update your published resources on hale\xbbconnect."})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},7595:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/schema_5_en-227b033379c90ae2bc45d442285fa1bc.png"},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var a=n(6540);const s={},o=a.createContext(s);function i(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(o.Provider,{value:t},e.children)}},9598:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/update_feature_types_en-7e719c3bc80af67bac8ffbec9bde73b4.png"}}]);