// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

const sectionPrefix = require('./src/plugins/section-prefix');

const math = require('remark-math');
const katex = require('rehype-katex');
const importPartial = require('./src/plugins/remark-import-partial');
const smartypants = require('@silvenon/remark-smartypants');
const urls = require('rehype-urls');
const fontaine = require('fontaine');

const urlRewriteConfig = function(url, node) {
  if (url.host && url.host !== 'wiki.brianturchyn.net') {
    // Update the URL
    const tmpUrl = new URL(url.href);
    tmpUrl.searchParams.set('utm_source', 'wiki.brianturchyn.net');
    url.parse(tmpUrl.href);
  }
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Everything I Know',
  // tagline: 'Dinosaurs are cool',
  url: 'https://wiki.brianturchyn.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/logo.webp',
  organizationName: 'b-turchyn', // Usually your GitHub org/user name.
  projectName: 'wiki', // Usually your repo name.
  trailingSlash: true,
  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      ({
        indexBlog: false,
        docsRouteBasePath: '/',
        hashed: true
      })
    ]
  ],
  plugins: [
    function fontainePlugin(_context, _options) {
      return {
        name: 'fontaine-plugin',
        configureWebpack(_config, _isServer) {
          return {
            plugins: [
              fontaine.FontaineTransform.webpack({
                fallbacks: [
                  'system-ui',
                  '-apple-system',
                  'BlinkMackSystemFont',
                  'Segoe UI',
                  'Roboto',
                  'Oxygen',
                  'Ubuntu',
                  'Cantarell',
                  'Open Sans',
                  'Helvetica Neue',
                  'sans-serif',
                ],
                resolvePath: (id) => '../fonts/' + id,
              }),
            ],
          };
        },
      };
    }
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/b-turchyn/wiki/tree/main/',
          remarkPlugins: [math, importPartial, smartypants],
          rehypePlugins: [katex, [urls, urlRewriteConfig]]
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        }
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      metadata: [
        {name: 'keywords', content: 'Productivity, Psychology, Programming, Books, Digital Garden'},
      ],
      navbar: {
        title: 'Everything I Know',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.webp',
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
                label: 'Mastodon',
                href: 'https://mastodon.social/@btwritescode',
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
        additionalLanguages: ['awk', 'kotlin', 'java', 'properties', 'ruby', 'vim'],
      },
    },
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
      'data-api': '/stats/api/event',
      src: '/stats/js/script.outbound-links.js',
    },
  ],
  clientModules: [require.resolve('./titleChange.ts')]
};

module.exports = config;
