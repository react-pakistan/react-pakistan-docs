module.exports = {
  baseUrl: '/react-pakistan-docs/',
  deploymentBranch: 'gh-pages',
  favicon: 'img/favicon.ico',
  onBrokenLinks: 'throw',
  organizationName: 'react-pakistan', // Usually your GitHub org/user name.
  projectName: 'react-pakistan-docs', // Usually your repo name.
  tagline: 'An Open Source Platform',
  title: 'React Pakistan',
  trailingSlash: false,
  url: 'https://react-pakistan.github.io/',
  themeConfig: {
    navbar: {
      title: 'React Pakistan',
      logo: {
        alt: 'React Pakistan Logo',
        src: 'img/react-pakistan-logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
        {
          to: 'blog',
          label: 'Blog',
          position: 'right'
        },
        {
          href: 'https://github.com/react-pakistan',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Intro',
              to: 'docs',
            },
            {
              label: 'React Commons Collection',
              to: 'docs/react-commons-collection',
            },
            {
              label: 'React UI Collection',
              to: 'docs/react-ui-collection',
            },
            {
              label: 'React Icon Collection',
              to: 'docs/react-icon-collection',
            },
            {
              label: 'React Logo Collection',
              to: 'docs/react-logo-collection',
            },
            {
              label: 'React Emoji Collection',
              to: 'docs/react-emoji-collection',
            },
            {
              label: 'React Native Commons Collection',
              to: 'docs/react-native-commons-collection',
            },
            {
              label: 'React Native UI Collection',
              to: 'docs/react-native-ui-collection',
            },
            {
              label: 'React Native Icon Collection',
              to: 'docs/react-native-icon-collection',
            },
            {
              label: 'React Native Logo Collection',
              to: 'docs/react-native-logo-collection',
            },
            {
              label: 'React Native Emoji Collection',
              to: 'docs/react-native-emoji-collection',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Slack',
              href: 'https://reactpakistan.slack.com/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/ReactJSPakistan',
            },
            {
              label: 'Email',
              href: 'mailto:react.pakistan14@gmail.com',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/react-pakistan',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} React Pakistan`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/react-pakistan/react-pakistan-docs/edit/dev/docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/react-pakistan/react-pakistan-docs/edit/dev/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          // cacheTime: 600 * 1000, // 600 sec - cache purge period
          changefreq: 'weekly',
          priority: 0.5,
        },
        gtag: {
          trackingID: 'G-S6JTPYP976',
          // Optional fields.
          anonymizeIP: true, // Should IPs be anonymized?
        },
      },
    ],
  ],
};
