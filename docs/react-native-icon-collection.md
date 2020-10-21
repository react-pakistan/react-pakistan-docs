---
id: react-native-icon-collection
title: React Native Icon Collection
sidebar_label: React Native Icon Collection
---

## React Pakistan

<img src="https://res.cloudinary.com/dq6hflqwx/image/upload/v1565548545/GitHub/React_Pakistan_Storybook_Logo.jpg" width="100%" />

React Pakistan is a Free & OpenSource Software (FOSS) platform, creating React software solutions for the global community.

## React Native Icon Collection

<div>
  <img src="https://res.cloudinary.com/dq6hflqwx/image/upload/v1583650647/GitHub/react-native-icon-collection.jpg" width="70%"/>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY1K6JwhYEBfsv52nUT30dAIjoFyp252cH6VVkhXB_Gq1bUSz-" width="20%" />
</div>

- [React Native Icon NPM Module](https://www.npmjs.com/package/@react-pakistan/react-native-icon-collection)

A generic, SVG Icon library for React Native apps, following modern approach by building your project's UI in isolation using state of the art Storybook along with React.

## Install

Add React Icon Collection to your project:

`yarn add @react-pakistan/react-native-icon-collection` or `npm install @react-pakistan/react-native-icon-collection`

Add React Native Icon Collection base theme to your project.

`yarn add @react-pakistan/util-react-native-functions` or `npm install @react-pakistan/util-react-native-functions`

## Styles

Styled Components are employed to maintain and update theme for this project. Please consider adding Styled Component Provider wrapper to the entry point of your application, following is the sample code. You could either use the default theme as shown below or wire your custom theme object instead. See [Typography](https://taimoormk.github.io/react-commons-collection/?path=/docs/styleguide-typography--typography-story) & [Colors](https://taimoormk.github.io/react-commons-collection/?path=/docs/styleguide-colors--colors-story) being used in the theme object.

```javascript
  import { ThemeProvider } from 'styled-components';
  import { theme } from '@react-pakistan/util-react-native-functions';

  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
```

## Tested

We aim to achieve 100% coverage and we shall...

![React Commons Collection Badge Branches](https://res.cloudinary.com/dq6hflqwx/image/upload/v1597117511/GitHub/badges/react-commons-collection/badge-branches.svg)
![React Commons Collection Badge Functions](https://res.cloudinary.com/dq6hflqwx/image/upload/v1597117511/GitHub/badges/react-commons-collection/badge-functions.svg)
![React Commons Collection Badge Lines](https://res.cloudinary.com/dq6hflqwx/image/upload/v1597117511/GitHub/badges/react-commons-collection/badge-lines.svg)
![React Commons Collection Badge Statements](https://res.cloudinary.com/dq6hflqwx/image/upload/v1597117511/GitHub/badges/react-commons-collection/badge-statements.svg)
