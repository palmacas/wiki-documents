// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {

  title: 'Seeed Studio Wiki',
  tagline: 'The Seeed Studio Files Management Platform, Opening up and Cooperation.',
  
  url: 'http://wiki.seeedstudio.vip',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/S.png',
  

  scripts: [
    // String format.
    // 'https://viewer.altium.com/client/static/js/embed.js',
    
    // Object format.
    {
      src: 'https://viewer.altium.com/client/static/js/embed.js',
      async: true,
    },
  ],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Seeed Studio', // Usually your GitHub org/user name.
  projectName: 'wiki-documents', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en',  'zh-CN'],
    path: 'i18n',
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {

          routeBasePath: '/',

          sidebarPath: require.resolve('./sidebars.js'),
          
          remarkPlugins: [math],
          rehypePlugins: [katex],

          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editLocalizedFiles: false,
          editCurrentVersion: false,

          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],

          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          disableVersioning: false,
          includeCurrentVersion: true,
          lastVersion: undefined,

          include: ['**/*.md', '**/*.mdx'],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],

          editUrl:
            'https://github.com/Seeed-Studio/wiki-documents/edit/main/',
        },

        
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Seeed-Studio/wiki-documents/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  
  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/docusaurus.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          },
        ],
      },
    ],
    'docusaurus-plugin-image-zoom',
    'docusaurus-plugin-sass'
  ],
  
  themeConfig:
    
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */

    ({

      zoom: {
        selector: '.markdown :not(em) > img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        },
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        // https://github.com/gabrielcsapo/docusaurus-plugin-image-zoom
        config: {}
      },

      giscus: {
        repo: 'Seeed-Studio/wiki-documents',
        repoId: 'MDEwOlJlcG9zaXRvcnkzMDM5NTk0Nzk=',
        category: 'Q&A',
        categoryId: 'DIC_kwDOEh4Nt84CTIbM',
        theme: 'light_high_contrast',
        darkTheme: 'dark_tritanopia'
      },

      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        // title: 'My Site',
        logo: {
          alt: 'Seeed Studio',
          src: 'https://files.seeedstudio.com/wiki/wiki-platform/S.png',
          className: 'navbar_logo_items'
        },
        items: [
          {
            type: 'doc',
            docId: 'Getting_Started',
            position: 'left',
            label: 'Getting Started',
            className:'navbar_doc_items'
          },
          {
            type: 'doc',
            docId: 'Sensor_Network',
            position: 'left',
            label: 'Sensor Network',
            className:'navbar_doc_items'
          },
          {
            type: 'doc',
            docId: 'Edge_Computing',
            position: 'left',
            label: 'Edge Computing',
            className:'navbar_doc_items'
          },
          {
            type: 'doc',
            docId: 'CloudnChain',
            position: 'left',
            label: 'Cloud & Chain',
            className:'navbar_doc_items'
          },
          {
            type: 'doc',
            docId: 'Solutions',
            position: 'left',
            label: 'Solutions',
            className:'navbar_doc_items'
          },
          {
            to: 'https://github.com/Seeed-Studio/wiki-documents',
            label: 'GitHub 💭',
            position: 'right',
            className:'navbar_doc_items'
          },
          {
            type: 'localeDropdown',
            position: 'right',
            className:'navbar_doc_items'
          },
          // {
          //   type: 'dropdown',
          //   label: 'Page',
          //   position: 'right',
          //   items: [
          //     {
          //       label: 'SenseCAP',
          //       to: '/indexIAG',
          //       target: '_blank',
          //     },
          //     {
          //       label: 'Initial',
          //       to: './',
          //       target: '_blank',
          //     },
          //   ],
          //   className:'navbar_doc_items'
          // },
        ],
      },
      
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Navigation',
            items: [
              {
                label: 'Getting Started',
                to: '/Getting_Started',
              },
              {
                label: 'Sensor Network',
                to: '/Sensor_Network',
              },
              {
                label: 'Edge Computing',
                to: '/Edge_Computing',
              },
              {
                label: 'Cloud & Chain',
                to: '/CloudnChain',
              },
              {
                label: 'Solutions',
                to: '/Solutions',
              },
            ],
          },
          {
            title: 'Ecosystem',
            items: [
              {
                label: 'Discord',
                to: 'https://discord.com/invite/QqMgVwHT3X',
              },
              {
                label: 'Project Hub',
                to: 'https://project.seeedstudio.com/',
              },
              {
                label: 'Partners',
                to: 'https://www.seeedstudio.com/ecosystem/',
              },
              {
                label: 'Distributors',
                to: 'https://www.seeedstudio.com/distributors.html',
              },
            ],
          },
          {
            title: 'Quick Guide',
            items: [
              {
                label: 'Bazzar',
                to: 'https://www.seeedstudio.com/',
              },
              {
                label: 'How to get help',
                to: 'https://www.seeedstudio.com/get_help/HowToGetHelp',
              },
              {
                label: 'FAQs',
                to: 'https://support.seeedstudio.com/knowledgebase',
              },
              {
                label: 'Forum',
                to: 'https://forum.seeedstudio.com/',
              },
              {
                label: 'Technical Support',
                to: 'https://www.seeedstudio.com/get_help/TechnicalSupport',
              },
            ],
          },
          {
            title: 'Company',
            items: [
              {
                label: 'About Seeed',
                to: 'https://www.seeedstudio.com/about-us/',
              },
              {
                label: 'Join us',
                to: 'https://www.seeedstudio.com/join-us/',
              },
              {
                label: 'Contact Us',
                to: 'https://www.seeedstudio.com/contacts',
              },
              {
                label: 'Press',
                to: 'https://www.seeedstudio.com/blog/2020/04/22/seeed-in-the-news/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Seeed Studio, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: '8182LB8Y0D',
  
        // Public API key: it is safe to commit it
        apiKey: 'a2761291fdfe389c56720a86986d1952',
  
        indexName: 'wiki',
  
        // Optional: see doc section below
        contextualSearch: false,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        //... other Algolia params
      },
      mermaid: {
        options: {
          maxTextSize: 50,
        },
      },

      announcementBar: {
        id: 'support_us',
        content:
          'We are looking forward to your contribution! Welcome to check our <a target="_blank" rel="https://github.com/orgs/Seeed-Studio/projects/3/views/1" href="https://github.com/BilltheWorld/wiki-documents/blob/docusaurus-version/TASK.md">task lists</a>！',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: false,
      },

    }),
  
  
};

module.exports = config;
