---
id: react-emoji-collection
title: React Emoji Collection
sidebar_label: React Emoji Collection
---

## React Pakistan

<img src="https://res.cloudinary.com/dq6hflqwx/image/upload/v1565548545/GitHub/React_Pakistan_Storybook_Logo.jpg" width="100%" />

React Pakistan is a Free & OpenSource Software (FOSS) platform, creating React software solutions for the global community.

## React Emoji Collection

<div>
  <img src="https://res.cloudinary.com/dq6hflqwx/image/upload/v1592815676/GitHub/react-emoji-collection.jpg" width="70%"/>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY1K6JwhYEBfsv52nUT30dAIjoFyp252cH6VVkhXB_Gq1bUSz-" width="20%" />
</div>

- [React Emoji Storybook Playground](https://taimoormk.github.io/react-emoji-collection/?path=/story/1-react-pakistan-intro--page)
- [React Emoji NPM Module](https://www.npmjs.com/package/@react-pakistan/react-emoji-collection)

A generic, SVG Emoji library for React web apps, following modern approach by building your project's UI in isolation using state of the art Storybook along with React.

## Install

Add React Logo Collection to your project:

`yarn add @react-pakistan/react-emoji-collection` or `npm install @react-pakistan/react-emoji-collection`

Add React Emoji Collection base theme to your project.

`yarn add @react-pakistan/util-functions` or `npm install @react-pakistan/util-functions`

## Styles

Styled Components are employed to maintain and update theme for this project. Please consider adding Styled Component Provider wrapper to the entry point of your application, following is the sample code. You could either use the default theme as shown below or wire your custom theme object instead.

```javascript
  import { ThemeProvider } from 'styled-components';
  import { theme } from '@react-pakistan/util-functions';

  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
```

## Use

- ### BodyParts1
```javascript
  import { BodyParts1 } from '@react-pakistan/react-logo-collection/body-parts';

  <BodyParts1
    fontSize="32px"
  />
```

<iframe
  height="500"
  id="React Pakistan - React Emoji Collection Wrapper"
  title="React Pakistan - React Emoji Collection Wrapper"
  width="100%"
  src="https://react-pakistan.github.io/react-emoji-collection/?path=/story/peoplebody-bodyparts--body-parts">
</iframe>
