---
slug: storybook-sitemap
title: Storybook Sitemap
author: Taimoor Khan
author_title: Core Engineering @ ReactPakistan
author_url: https://github.com/Taimoormk
author_image_url: https://avatars0.githubusercontent.com/u/27800340?s=150&v=4
tags: [storybook, sitemap, generator]
---

### The Problem
While working with one of the React Pakistan Storybook based projects, I soon came
to realise that, there isn't any clean way to auto generate storybook app
sitemap which helps Search Engine Crawler to crawl all available pages.

### The Solution
Due to the fact that storybook app urls are dynamically generated from all the stories file,
it makes rather cumbersome to manage auto generated list of storybook app urls.

:::note
  To get started with this solution you must have installed storybook cli globally,
  to do so run `npm install -g sb`.
:::

Now, we are going to build `stories.json` file, that has all the meta information of
all the stories our storybook has, which will help us to create sitemap for the app.

- In order to do so, we are going to run `yarn build:storybook && sb extract ./.out`.
- The command `yarn build:storybook` resolves into `build-storybook -c .storybook -o .out`, that will generate the static storybook app and emit it into `.out` folder on the project root.
- The second command `sb extract ./.out`, will iterate over the static built storybook app in `.out` folder and generate `stories.json` file in the same folder i.e. `.out`.
- This will result in generation of `stories.json` file in `.out` folder, which will look like as following:
```json
  {
    "v": 2,
    "globalParameters": {},
      "kindParameters": {
      "1. React Pakistan / Intro": {
        "fileName": 621,
        "framework": "react"
      },
    },
    "stories": {
      "1-react-pakistan-intro--page": {
        "id": "1-react-pakistan-intro--page",
        "name": "Page",
        "kind": "1. React Pakistan / Intro",
        "story": "Page",
        "parameters": {
          "docsOnly": true,
          "__id": "1-react-pakistan-intro--page",
          "__isArgsStory": false
        }
      },
    },
  }
```