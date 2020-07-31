/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'Taimoor Khan',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: 'https://avatars0.githubusercontent.com/u/27800340?s=400&v=4',
    infoLink: 'https://github.com/taimoormk',
    pinned: true,
  },
];

const siteConfig = {
  title: 'React Pakistan', // Title for your website.
  tagline: 'An Open Source Platform',
  url: 'https://react-pakistan.github.io/', // Your website URL
  baseUrl: '/react-pakistan-docs/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'react-pakistan-docs',
  organizationName: 'react-pakistan',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {page: 'index', label: 'Home'},
    {doc: 'react-commons-collection', label: 'React Commons'},
    {doc: 'react-ui-collection', label: 'React UI'},
    {doc: 'react-icon-collection', label: 'React Icon'},
    {doc: 'react-logo-collection', label: 'React Logo'},
    {doc: 'react-native-boilerplate', label: 'React Native Boilerplate'},
    {search: true},
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/react-pakistan-logo.svg',
  footerIcon: 'img/react-pakistan-logo-white.svg',
  favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#006600',
    secondaryColor: '#1d6658',
  },

  /* Custom fonts for website */
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} React Pakistan`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  // docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',

  algolia: {
    apiKey: process.env.ALGOLIA_KEY,
    indexName: 'react-pakistan',
    algoliaOptions: {} // Optional, if provided by Algolia
  },

  gaTrackingId: 'UA-150982437-1',
};

module.exports = siteConfig;
