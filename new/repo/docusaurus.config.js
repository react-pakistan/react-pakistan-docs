module.exports = {
  title: 'React Pakistan',
  tagline: 'An Open Source Platform',
  url: 'https://react-pakistan.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'react-pakistan', // Usually your GitHub org/user name.
  projectName: 'react-pakistan-docs', // Usually your repo name.
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
          position: 'left',
        },
        {
          to: 'blog',
          label: 'Blog',
          position: 'left'
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
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: ['@docusaurus/plugin-google-analytics'],
  themeConfig: {
    googleAnalytics: {
      trackingID: 'UA-150982437-1',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
  },
};
