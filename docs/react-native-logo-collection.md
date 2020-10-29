---
id: react-native-logo-collection
title: React Native Logo Collection
sidebar_label: React Native Logo Collection
---

## React Pakistan

<img src="https://res.cloudinary.com/dq6hflqwx/image/upload/v1565548545/GitHub/React_Pakistan_Storybook_Logo.jpg" width="100%" />

React Pakistan is a Free & OpenSource Software (FOSS) platform, creating React software solutions for the global community.

## React Native Logo Collection

<div>
  <img src="https://res.cloudinary.com/dq6hflqwx/image/upload/v1583650658/GitHub/react-native-logo-collection.jpg" width="70%"/>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY1K6JwhYEBfsv52nUT30dAIjoFyp252cH6VVkhXB_Gq1bUSz-" width="20%" />
</div>

- [React Native Logo NPM Module](https://www.npmjs.com/package/@react-pakistan/react-native-logo-collection)

A generic, SVG Logo library for React Native apps, following modern approach by building your project's UI in isolation using state of the art Storybook along with React.

## Install

Add React Native Logo Collection to your project:

`yarn add @react-pakistan/react-native-logo-collection` or `npm install @react-pakistan/react-native-logo-collection`

Add React Native Icon Collection base theme to your project.

`yarn add @react-pakistan/util-react-nativefunctions` or `npm install @react-pakistan/util-react-native-functions`

## Styles

Styled Components are employed to maintain and update theme for this project. Please consider adding Styled Component Provider wrapper to the entry point of your application, following is the sample code. You could either use the default theme as shown below or wire your custom theme object instead. See [Typography](https://taimoormk.github.io/react-commons-collection/?path=/docs/styleguide-typography--typography-story) & [Colors](https://taimoormk.github.io/react-commons-collection/?path=/docs/styleguide-colors--colors-story) being used in the theme object.

```javascript
  import { ThemeProvider } from 'styled-components';
  import { theme } from '@react-pakistan/util-react-native-functions';

  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
```
## Use

- ### BitcoinColor22
```javascript
  import { BitcoinColor22 } from '@react-pakistan/react-native-logo-collection/bitcoin-color';

  <BitcoinColor22
    fontSize="32px"
    color="#2E2E2E"
  />
```
