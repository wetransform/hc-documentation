/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      'Getting Started': [
        'getting-started/2018-04-28-quick-start'
      ]
    },
    {
      'Tutorials & Training': [
        {
          type: 'autogenerated',
          dirName: 'tutorials'
        }
      ]
    },
    {
      'Key Concepts: Resources': [
        {
          type: 'autogenerated',
          dirName: 'key-concepts'
        }
      ]
    },
    {
      'Set up hale»connect': [
        {
          'Create a schema': [
            {
              type: 'autogenerated',
              dirName: 'setup-hc/create-a-schema'
            }
          ]
        },
        {
          'Create a transformation project': [
            {
              type: 'autogenerated',
              dirName: 'setup-hc/create-a-transformation-project'
            }
          ]
        },
        {
          'Create a theme': [
            {
              type: 'autogenerated',
              dirName: 'setup-hc/create-a-theme'
            }
          ]
        },
        {
          'Edit metadata configuration': [
            {
              type: 'autogenerated',
              dirName: 'setup-hc/edit-metadata-config'
            }
          ]
        },
        {
          'Configure services': [
            {
              type: 'autogenerated',
              dirName: 'setup-hc/config-services'
            }
          ]
        },
        {
          'Configure validation': [
            {
              type: 'autogenerated',
              dirName: 'setup-hc/config-validation'
            }
          ]
        },
        {
          'Configure source data': [
            {
              type: 'autogenerated',
              dirName: 'setup-hc/config-source-data'
            }
          ]
        },
        {
          'Configure transformation projects and automated workflows': [
            {
              type: 'autogenerated',
              dirName: 'setup-hc/config-transformations'
            }
          ]
        }
      ]
    },
    {
      'Create and manage data sets': [
        {
          'Create a new data set': [
            {
              type: 'autogenerated',
              dirName: 'create-manage-datasets/create-dataset'
            }
          ]
        },
        {
          'Create metadata': [
            {
              type: 'autogenerated',
              dirName: 'create-manage-datasets/create-metadata'
            }
          ]
        },
        {
          'Edit Metadata': [
            {
              type: 'autogenerated',
              dirName: 'create-manage-datasets/edit-metadata'
            }
          ]
        },
        {
          'Create a new data set series': [
            {
              type: 'autogenerated',
              dirName: 'create-manage-datasets/create-dataset-series'
            }
          ]
        },
        {
          'Publish services': [
            {
              type: 'autogenerated',
              dirName: 'create-manage-datasets/publish-services'
            }
          ]
        },
        {
          'Using the Feature Explorer Tool': [
            {
              type: 'autogenerated',
              dirName: 'create-manage-datasets/feature-explorer'
            }
          ]
        },
        {
          'Using the Map Preview': [
            {
              type: 'autogenerated',
              dirName: 'create-manage-datasets/map-preview'
            }
          ]
        }
      ]
    },
    {
      'Define a profile of a schema': [
        {
          'Create a profile': [
            {
              type: 'autogenerated',
              dirName: 'define-schema-profile/create-profile'
            }
          ]
        },
        {
          'Copy a profile': [
            {
              type: 'autogenerated',
              dirName: 'define-schema-profile/copy-profile'
            }
          ]
        },
        {
          'Download a profile as a test suite or an example XML document': [
            {
              type: 'autogenerated',
              dirName: 'define-schema-profile/download-profile-as'
            }
          ]
        },
        {
          'Define type and property level constraints': [
            {
              type: 'autogenerated',
              dirName: 'define-schema-profile/define-type-constraints'
            }
          ]
        },
        {
          'Define profile consistency conditions': [
            {
              type: 'autogenerated',
              dirName: 'define-schema-profile/define-consistency-conds'
            }
          ]
        },
        {
          'Delete a profile': [
            {
              type: 'autogenerated',
              dirName: 'define-schema-profile/delete-profile'
            }
          ]
        },
      ]
    },
    {
      'Users, Roles, and Organisations': [
        {
          'Introduction to users': [
            {
              type: 'autogenerated',
              dirName: 'users-roles-orgs/intro-to-users'
            }
          ]
        },
        {
          'Registration': [
            {
              type: 'autogenerated',
              dirName: 'users-roles-orgs/registration'
            }
          ]
        },
        {
          'Edit users': [
            {
              type: 'autogenerated',
              dirName: 'users-roles-orgs/edit-users'
            }
          ]
        },
        {
          'Manage organisations': [
            {
              type: 'autogenerated',
              dirName: 'users-roles-orgs/manage-orgs'
            }
          ]
        },
        {
          'Harvesting Metadata': [
            {
              type: 'autogenerated',
              dirName: 'users-roles-orgs/harvesting-metadata'
            }
          ]
        },
      ]
    },
    {
      'References': [
        {
          'hale»connect API': [
            {
              type: 'autogenerated',
              dirName: 'references/haleconnect-api'
            }
          ]
        },
        {
          'Browser Compatibility': [
            {
              type: 'autogenerated',
              dirName: 'references/browser-compat'
            }
          ]
        },
        {
          'Data': [
            {
              type: 'autogenerated',
              dirName: 'references/data',
            }
          ]
        },
        {
          'Themes': [
            {
              type: 'autogenerated',
              dirName: 'references/themes'
            }
          ]
        },
        {
          'Schemas': [
            {
              type: 'autogenerated',
              dirName: 'references/schemas'
            }
          ]
        },
        {
          'Transformation projects': [
            {
              type: 'autogenerated',
              dirName: 'references/transformation-projects'
            }
          ]
        },
        {
          'Settings': [
            {
              type: 'autogenerated',
              dirName: 'references/settings'
            }
          ]
        },
      ]
    }
    // {
    //   type: 'html',
    //   value: '<img src="sponsor.png" alt="Sidebar Image Item Example" />', // The HTML to be rendered
    //   defaultStyle: true, // Use the default menu item styling
    // },
    // {
    //   type: 'link',
    //   label: '@wetransform Website', // The link label
    //   href: 'https://www.wetransform.to', // The external URL
    // },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
