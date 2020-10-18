---
id: react-native-icon-collection
title: React Native Icon Collection
sidebar_label: React Native Icon Collection
---

## React Pakistan

<img src="https://res.cloudinary.com/dq6hflqwx/image/upload/v1565548545/GitHub/React_Pakistan_Storybook_Logo.jpg" width="100%" />

React Pakistan is a Free & OpenSource Software (FOSS) platform, creating React software solutions for the global community.

## React Icon Collection

<div>
  <img src="https://res.cloudinary.com/dq6hflqwx/image/upload/v1567499955/GitHub/react-icons-collection.jpg" width="70%"/>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY1K6JwhYEBfsv52nUT30dAIjoFyp252cH6VVkhXB_Gq1bUSz-" width="20%" />
</div>

- [React Icon Storybook Playground](https://taimoormk.github.io/react-icon-collection/?path=/docs/react-pakistan-intro--page/)
- [React Icon NPM Module](https://www.npmjs.com/package/@react-pakistan/react-icon-collection)

A generic, SVG Icon library for React web apps, following modern approach by building your project's UI in isolation using state of the art Storybook along with React.

## Install

Add React Icon Collection to your project:

`yarn add @react-pakistan/react-icon-collection` or `npm install @react-pakistan/react-icon-collection`

Add React Icon Collection base theme to your project.

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

- ### FourthofjulyGrey12
```javascript
  import { FourthofjulyGrey12 } from '@react-pakistan/react-icons-collection/fourthofjuly-grey';

  <FourthofjulyGrey12
    fontSize="32px"
    fill="#2E2E2E"
  />
```

<iframe
  height="500"
  id="React Pakistan - React Icon Collection Wrapper"
  title="React Pakistan - React Icon Collection Wrapper"
  width="100%"
  src="https://react-pakistan.github.io/react-icon-collection/?path=/story/icon-fourthofjulygrey--fourthofjuly-grey">
</iframe>
