export default {
  "title": "React Pakistan",
  "tagline": "An Open Source Platform",
  "url": "https://react-pakistan.github.io/",
  "baseUrl": "/react-pakistan-docs/",
  "onBrokenLinks": "error",
  "favicon": "img/favicon.ico",
  "organizationName": "react-pakistan",
  "projectName": "react-pakistan-docs",
  "themeConfig": {
    "navbar": {
      "title": "React Pakistan",
      "logo": {
        "alt": "React Pakistan Logo",
        "src": "img/react-pakistan-logo.svg"
      },
      "items": [
        {
          "to": "docs/",
          "activeBasePath": "docs",
          "label": "Docs",
          "position": "right"
        },
        {
          "to": "blog",
          "label": "Blog",
          "position": "right"
        },
        {
          "href": "https://github.com/react-pakistan",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "React Commons Collection",
              "to": "docs/react-commons-collection"
            },
            {
              "label": "React UI Collection",
              "to": "docs/react-ui-collection"
            },
            {
              "label": "React Icon Collection",
              "to": "docs/react-icon-collection"
            },
            {
              "label": "React Logo Collection",
              "to": "docs/react-logo-collection"
            },
            {
              "label": "React Emoji Collection",
              "to": "docs/react-emoji-collection"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Slack",
              "href": "https://reactpakistan.slack.com/"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/ReactJSPakistan"
            },
            {
              "label": "Email",
              "href": "mailto:react.pakistan14@gmail.com"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Blog",
              "to": "blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/react-pakistan"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2020 React Pakistan"
    },
    "googleAnalytics": {
      "trackingID": "UA-150982437-1",
      "anonymizeIP": true
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "metadatas": []
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/taimoor.khan/programming/own/react-pakistan/react-pakistan-docs/sidebars.js",
          "editUrl": "https://github.com/react-pakistan/react-pakistan-docs/edit/master/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/react-pakistan/react-pakistan-docs/edit/master/blog/"
        },
        "theme": {
          "customCss": "/Users/taimoor.khan/programming/own/react-pakistan/react-pakistan-docs/src/css/custom.css"
        },
        "sitemap": {
          "cacheTime": 600000,
          "changefreq": "weekly",
          "priority": 0.5,
          "trailingSlash": false
        }
      }
    ]
  ],
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|"
};