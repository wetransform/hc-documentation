// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'hale»connect',
  tagline: 'One of the world\'s leading platforms for Geodata Transformations',
  url: 'https://help.wetransform.to',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'images/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'wetransform', // Usually your GitHub org/user name.
  projectName: 'hc-documentation', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'cs'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/wetransform/hc-documentation/tree/master/',
          editLocalizedFiles: true
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Documentation',
        logo: {
          alt: 'hale»connect Logo',
          src: 'images/hale-connect-black.png',
          srcDark: 'images/hale-connect-monochrome.png',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Docs',
          // },
          // {
          //   href: 'https://www.wetransform.to',
          //   label: 'GitHub',
          //   position: 'right',
          // },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Products & Services',
            items: [
              {
                label: 'hale»studio',
                to: 'https://wetransform.to/halestudio/',
              },
              {
                label: 'hale»connect',
                to: 'https://wetransform.to/haleconnect/',
              },
              {
                label: 'Professional Support',
                to: 'https://wetransform.to/inspire-experts/',
              },
              {
                label: 'Research Data Management',
                to: 'https://wetransform.to/research-data-management/',
              },
              {
                label: 'Workshops and Training Sessions',
                to: 'https://wetransform.to/workshops-training/',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Getting Started with hale»connect',
                to: '/docs/getting-started/2018-04-28-quick-start',
              },
              {
                label: 'Forum',
                href: 'https://discuss.wetransform.to/#/forum',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/wetransform',
              },
            ],
          },
          {
            title: 'About Us',
            items: [
              {
                label: 'Company & Team',
                to: 'https://wetransform.to/about-us/',
              },
              {
                label: 'Contact Us',
                to: 'https://wetransform.to/contact-us/',
              },
              {
                label: 'Careers',
                to: 'https://wetransform.to/careers/',
              },
              {
                label: 'Partners',
                to: 'https://wetransform.to/partners/',
              },
              {
                label: 'Newsletter',
                to: 'https://wetransform.to/news-and-events/',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} wetransform GmbH`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

    plugins: [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      'docusaurus-plugin-sass'
      // {
      //   // add options here for above plugin
      //   // if options are added, above plugin import needs to be wrapped with options in array
      //   // example: [require(plugin), {options}]
      // }
    ]
};

module.exports = config;
