---
id: react-ui-collection
title: React UI Collection
sidebar_label: React UI Collection
---

## React Pakistan

<img src="https://res.cloudinary.com/dq6hflqwx/image/upload/v1565548545/GitHub/React_Pakistan_Storybook_Logo.jpg" width="100%" />

React Pakistan is an OpenSource & Free Software (FOSS) platform, creating React software solutions for the global community.

## React UI/UX Collection

<div>
  <img src="https://res.cloudinary.com/dq6hflqwx/image/upload/v1566265693/GitHub/react-ui-collection.jpg" width="70%"/>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY1K6JwhYEBfsv52nUT30dAIjoFyp252cH6VVkhXB_Gq1bUSz-" width="20%" />
</div>

A generic to specific, UI/UX library for React web apps, following modern approach by building your project's UI in isolation using state of the art Storybook along with React.

## Getting Started

Install React UI Collection to your project:

`yarn add @react-pakistan/react-ui-collection` or `npm install @react-pakistan/react-ui-collection`

## Documentation of React UI/UX Components

- ### Breadcrumbs
```javascript
import { Breadcrumbs } from '@react-pakistan/react-ui-collection/eCommerceV1UI/breadcrumbs';

  <Breadcrumbs
    breadcrumbs={['Item1','Item2','Item3']}
  />
```

- ### CartSummary
```javascript
import { CartSummary } from '@react-pakistan/react-ui-collection/eCommerceV1UI/cart-summary';

  <CartSummary
    topHeadingH4="4 Items In Your Cart"
    headerItems={[
      {id: 'header-item-1',colLabel: 'Item',justify: 'start'},
      {id: 'header-item-2',colLabel: 'Size',justify: 'center'},
      {id: 'header-item-3',colLabel: 'Quantity',justify: 'center'},
    ]}
    bodyItems={[
      {
        id: 'body-item-1',
        imageUrl: 'https://cdn.shopify.com/s/files/1/3003/0152/produc…',
        productTitle: 'Green T-shirt 2016',
      },
      {
        id: 'body-item-2',
        imageUrl: 'https://i.pinimg.com/originals/a5/52/78/a552788755…',
        productTitle: 'Purple T-shirt 2016',
      },
      {
        id: 'body-item-3',
        imageUrl: 'https://www.netballuk.co.uk/acatalog/Thunder-Bee-T…',
        productTitle: 'Yellow T-shirt 2016',
      },
    ]}
    backButton="Back to Shop"
    nextButton="Checkout"
  />
```

- ### Cart
```javascript
import { Cart } from '@react-pakistan/react-ui-collection/eCommerceV1UI/cart';

  <Cart
    cartItemsNumber={6}
  />
```

- ### CategoryBanner
```javascript
import { CategoryBanner } from '@react-pakistan/react-ui-collection/eCommerceV1UI/category-banner';

  <CategoryBanner
    imageBackgroundPadding="5em"
    imageBackgroundWidth="100%"
    imageBackgroundHeight="500px"
    imageBackgroundUrl="https://demo.accesspressthemes.com/fashstore-pro/w…"
    fontFamilyH3="PlayFair Display"
    fontSizeH3="3em"
    textAlignH3="left"
    textTransformH3="none"
    headingH3="Mens wear"
    menuItems={[
      {id: 'menu-item-1',menuLabel: 'Accessories',menuUrl: '/accessories'},
      {id: 'menu-item-2',menuLabel: 'ASOS Baisc Tops',menuUrl: '/asos-basic-tops'},
      {id: 'menu-item-3',menuLabel: 'Bags',menuUrl: '/bags'},
    ]}
    fontFamilyH5="Montserrat"
    textAlignH5="left"
    textTransformH5="none"
    colorH5="#FFFFFF"
  />
```

- ### CategoryCard
```javascript
import { CategoryCard } from '@react-pakistan/react-ui-collection/eCommerceV1UI/category-card';

  <CategoryCard
    imageBackgroundUrl="http://cdn.shopify.com/s/files/1/0014/1980/4719/co…"
    imageBackgroundWidth="100%"
    imageBackgroundHeight="500px"
    overlayColor="rgba(30, 144, 255, 0.5)"
    fontFamilyH3="PlayFair Display"
    fontSizeH3="2.5em"
    textAlignH3="center"
    textTransformH3="normal"
    colorH3="#FFFFFF"
    headingH3="Blue"
    fontFamilyText="Montserrat"
    fontSizeText="3em"
    fontWeightText={500}
    textTransformText="normal"
    textAlignText="left"
    lineHeightText={1.5}
    colorText="#FFFFFF"
    categoryText="Shop now"
  />
```
