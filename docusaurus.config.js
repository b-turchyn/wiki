// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const sectionPrefix = require('./src/plugins/section-prefix');

const math = require('remark-math');
const katex = require('rehype-katex');
const importPartial = require('remark-import-partial');
const smartypants = require('@silvenon/remark-smartypants');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Everything I Know',
  // tagline: 'Dinosaurs are cool',
  url: 'https://wiki.brianturchyn.net/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'b-turchyn', // Usually your GitHub org/user name.
  projectName: 'wiki', // Usually your repo name.
  trailingSlash: true,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/b-turchyn/knowledge/tree/main/docs/',
          remarkPlugins: [sectionPrefix, math, importPartial, smartypants],
          rehypePlugins: [katex]
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Everything I Know',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://github.com/b-turchyn/wiki',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Social',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/BTWritesCode',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/b-turchyn',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://brianturchyn.net/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Brian Turchyn. Last updated ${new Date().toDateString()}.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    }
  ],
  scripts: [
    {
      defer: true,
      'data-domain': 'wiki.brianturchyn.net',
      src: 'https://plausible.io/js/plausible.js',
    },
    {
      defer: true,
      'data-domain': 'wiki.brianturchyn.net',
      src: 'https://plausible.io/js/script.outbound-links.js',
    },
  ]
};

module.exports = config;
