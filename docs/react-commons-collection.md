---
id: react-commons-collection
title: React Commons Collection
sidebar_label: React Commons Collection
---

## React Pakistan

<img src="https://res.cloudinary.com/dq6hflqwx/image/upload/v1565548545/GitHub/React_Pakistan_Storybook_Logo.jpg" width="100%" />

React Pakistan is a Free & OpenSource Software (FOSS) platform, creating React software solutions for the global community.

## React Commons Collection

<div>
  <img src="https://res.cloudinary.com/dq6hflqwx/image/upload/v1566265693/GitHub/react-commons-collection.jpg" width="70%"/>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY1K6JwhYEBfsv52nUT30dAIjoFyp252cH6VVkhXB_Gq1bUSz-" width="20%" />
</div>

- [React Commons Storybook Playground](https://taimoormk.github.io/react-commons-collection/?path=/docs/react-pakistan-intro--page/)
- [React Commons NPM Module](https://www.npmjs.com/package/@react-pakistan/react-commons-collection)

A generic, Commons library for React web apps & React Native apps, following modern approach by building your project's UI in isolation using state of the art Storybook along with React.

## Install

Add React Commons Collection to your project:

`yarn add @react-pakistan/react-commons-collection` or `npm install @react-pakistan/react-commons-collection`

Add React Commons Collection base theme to your project.

`yarn add @react-pakistan/util-functions` or `npm install @react-pakistan/util-functions`

## Styles

Styled Components are employed to maintain and update theme for this project. Please consider adding Styled Component Provider wrapper to the entry point of your application, following is the sample code. You could either use the default theme as shown below or wire your custom theme object instead. See [Typography](https://taimoormk.github.io/react-commons-collection/?path=/docs/styleguide-typography--typography-story) & [Colors](https://taimoormk.github.io/react-commons-collection/?path=/docs/styleguide-colors--colors-story) being used in the theme object.

```javascript
  import {ThemeProvider} from 'styled-components';
  import {theme} from '@react-pakistan/util-functions';

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

## Use

- ### A
```javascript
  import { A } from '@react-pakistan/react-commons-collection';

  <A
    color='#000000'
    desktop=''
    download=''
    href='https://google.com'
    hreflang=''
    laptop=''
    laptopL=''
    media=''
    mobileL=''
    mobileM=''
    mobileS=''
    referrerpolicy=''
    rel=''
    tablet=''
    target='_blank'
    type=''
  >
    Go to Google
  </A>
```

<iframe
  height="500"
  id="React Pakistan - React Commons Collection A"
  title="React Pakistan - React Commons Collection A"
  width="100%"
  src="https://taimoormk.github.io/react-commons-collection/?path=/story/misc-a--a-story">
</iframe>

- ### Audio
```javascript
  import {Audio} from '@react-pakistan/react-commons-collection';

  <Audio
    autoplay
    controlPanelColor='#F7F7F7'
    controls
    currentTimeColor='#00D3CA'
    desktop=''
    laptop=''
    laptopL=''
    mobileL=''
    mobileM=''
    mobileS=''
    preload='auto'
    remainingTimeColor='#F62F5E'
    src='https://notificationsounds.com/sound-effects/insight-578/download/mp3'
    tablet=''
  />
```

<iframe
  height="500"
  id="React Pakistan - React Commons Collection Audio"
  title="React Pakistan - React Commons Collection Audio"
  width="100%"
  src="https://taimoormk.github.io/react-commons-collection/?path=/story/media-audio--audio-story">
</iframe>

- ### Background Image
```javascript
  import {BackgroundImage} from '@react-pakistan/react-commons-collection';

  <BackgroundImage
    desktop=''
    imageBackgroundColor='#F7F7F7'
    imageBackgroundHeight='400px'
    imageBackgroundMargin='0'
    imageBackgroundPadding='0'
    imageBackgroundPosition='center center'
    imageBackgroundRepeat='no-repeat'
    imageBackgroundSize='cover'
    imageBackgroundUrl='https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png'
    imageBackgroundWidth='600px'
    imageBorderRadius='0'
    laptop=''
    laptopL=''
    mobileL=''
    mobileM=''
    mobileS=''
    tablet=''
  />
```

<iframe
  height="500"
  id="React Pakistan - React Commons Collection Background Image"
  title="React Pakistan - React Commons Collection Background Image"
  width="100%"
  src="https://taimoormk.github.io/react-commons-collection/?path=/story/media-backgroundimage--background-image-story">
</iframe>

- ### Button
```javascript
  import {Button} from '@react-pakistan/react-commons-collection';

  <Button
    autoFocus
    border='1px solid #EFEFEF'
    borderRadius='0.5em'
    backgroundColor='#FFFFFF'
    desktop=''
    disabled={false}
    form=''
    formaction=''
    formenctype='text/plain'
    formmethod='get'
    formnovalidate={false}
    formTarget='_blank'
    height='auto'
    laptop=''
    laptopL=''
    mobileL=''
    mobileM=''
    mobileS=''
    name=''
    onClick={() => null}
    padding='1em'
    tablet=''
    type='submit'
    value=''
    width='auto'
  >
    Hello World
  </Button>
```

<iframe
  height="500"
  id="React Pakistan - React Commons Collection Button"
  title="React Pakistan - React Commons Collection Button"
  width="100%"
  src="https://taimoormk.github.io/react-commons-collection/?path=/story/input-button--button-story">
</iframe>

- ### Canvas
```javascript
  import {Canvas} from '@react-pakistan/react-commons-collection';

  <Canvas
    border='1px solid #000000'
    desktop=''
    height='400px'
    laptop=''
    laptopL=''
    mobileL=''
    mobileM=''
    mobileS=''
    id='canvasId'
    tablet=''
    width='600px'
  />
```

<iframe
  height="500"
  id="React Pakistan - React Commons Collection Canvas"
  title="React Pakistan - React Commons Collection Canvas"
  width="100%"
  src="https://taimoormk.github.io/react-commons-collection/?path=/story/media-canvas--canvas-story">
</iframe>

- ### Checkbox
```javascript
  import {CheckBox} from '@react-pakistan/react-commons-collection';

  <CheckBox
    checkedColor='#1E90FF'
    hasError={false}
    helperText=''
    helperTextColor=''
    isChecked={false}
    onChange={() => null}
    unCheckedColor='#B4B4B4'
    desktop=''
    laptop=''
    laptopL=''
    mobileL=''
    mobileM=''
    mobileS=''
    tablet=''
  />
```

<iframe
  height="500"
  id="React Pakistan - React Commons Collection CheckBox"
  title="React Pakistan - React Commons Collection CheckBox"
  width="100%"
  src="https://taimoormk.github.io/react-commons-collection/?path=/story/input-checkbox--check-box-story">
</iframe>

- ### ChildGrid
```javascript
  import {ChildGrid} from '@react-pakistan/react-commons-collection';

  <ChildGrid
    alignSelf='center'
    gridColumnEnd={1}
    gridColumnStart={1}
    gridRowEnd={1}
    gridRowStart={1}
    justifySelf='center'
    desktop=''
    laptop=''
    laptopL=''
    mobileL=''
    mobileM=''
    mobileS=''
    tablet=''
  >
    ChildGrid Component
  </ChildGrid>
```

<iframe
  height="500"
  id="React Pakistan - React Commons Collection ChildGrid"
  title="React Pakistan - React Commons Collection ChildGrid"
  width="100%"
  src="https://taimoormk.github.io/react-commons-collection/?path=/story/layout-childgrid--child-grid-story">
</iframe>

- ### ColumnContainer
```javascript
  import {ColumnContainer} from '@react-pakistan/react-commons-collection';

  <ColumnContainer
    alignItems='center'
    justifyContent='center'
    desktop=''
    laptop=''
    laptopL=''
    mobileL=''
    mobileM=''
    mobileS=''
    tablet=''
  >
    ColumnContainer Component
  </ColumnContainer>
```

<iframe
  height="500"
  id="React Pakistan - React Commons Collection ColumnContainer"
  title="React Pakistan - React Commons Collection ColumnContainer"
  width="100%"
  src="https://taimoormk.github.io/react-commons-collection/?path=/story/layout-columncontainer--column-container-story">
</iframe>

- ### Grid
```javascript
  import {Grid} from '@react-pakistan/react-commons-collection';

  <Grid
    alignItems='center'
    columnGap='1em'
    gridColumn='1fr 1fr 1fr'
    gridRow='1fr 1fr'
    justifyItems='stretch'
    rowGap='1em'
    desktop=''
    laptop=''
    laptopL=''
    mobileL=''
    mobileM=''
    mobileS=''
    tablet=''
  >
    <h2
      style={{
        alignItems: 'center',
        background: 'lightblue',
        border: '1px solid black',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        margin: 0,
        padding: '1rem'
      }}
    >
      Item
    </h2>
    <h2
      style={{
        alignItems: 'center',
        background: 'lightblue',
        border: '1px solid black',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        margin: 0,
        padding: '1rem'
      }}
    >
      Item
    </h2>
    <h2
      style={{
        alignItems: 'center',
        background: 'lightblue',
        border: '1px solid black',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        margin: 0,
        padding: '1rem'
      }}
    >
      Item
    </h2>
    <h2
      style={{
        alignItems: 'center',
        background: 'lightblue',
        border: '1px solid black',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        margin: 0,
        padding: '1rem'
      }}
    >
      Item
    </h2>
    <h2
      style={{
        alignItems: 'center',
        background: 'lightblue',
        border: '1px solid black',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        margin: 0,
        padding: '1rem'
      }}
    >
      Item
    </h2>
    <h2
      style={{
        alignItems: 'center',
        background: 'lightblue',
        border: '1px solid black',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        margin: 0,
        padding: '1rem'
      }}
    >
      Item
    </h2>
    <h2
      style={{
        alignItems: 'center',
        background: 'lightblue',
        border: '1px solid black',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        margin: 0,
        padding: '1rem'
      }}
    >
      Item
    </h2>
    <h2
      style={{
        alignItems: 'center',
        background: 'lightblue',
        border: '1px solid black',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        margin: 0,
        padding: '1rem'
      }}
    >
      Item
    </h2>
  </Grid>
```

<iframe
  height="500"
  id="React Pakistan - React Commons Collection Grid"
  title="React Pakistan - React Commons Collection Grid"
  width="100%"
  src="https://taimoormk.github.io/react-commons-collection/?path=/story/layout-grid--grid-story">
</iframe>

- ### Footer
```javascript
  import {Footer} from '@react-pakistan/react-commons-collection';

  <Footer
    desktop=''
    laptop=''
    laptopL=''
    mobileL=''
    mobileM=''
    mobileS=''
    tablet=''
  >
    Footer component
  </Footer>
```

<iframe
  height="500"
  id="React Pakistan - React Commons Collection Footer"
  title="React Pakistan - React Commons Collection Footer"
  width="100%"
  src="https://taimoormk.github.io/react-commons-collection/?path=/story/layout-footer--footer-story">
</iframe>

- ### H1
```javascript
  import {H1} from '@react-pakistan/react-commons-collection';

  <H1
    color='#FFFFFF'
    fontFamily='Playfair Display'
    fontSize='2em'
    fontWeight={700}
    letterSpacing='1px'
    lineHeight='normal'
    textAlign='left'
    textTransform='uppercase'
    desktop=''
    laptop=''
    laptopL=''
    mobileL=''
    mobileM=''
    mobileS=''
    tablet=''
  >
    H1 Component
  </H1>
```

<iframe
  height="500"
  id="React Pakistan - React Commons Collection H1"
  title="React Pakistan - React Commons Collection H1"
  width="100%"
  src="https://taimoormk.github.io/react-commons-collection/?path=/story/heading-h1--h-1-story">
</iframe>

- ### H2
```javascript
  import {H2} from '@react-pakistan/react-commons-collection';

  <H2
    color='#FFFFFF'
    fontFamily='Montserrat'
    fontSize='1.8em'
    fontWeight={700}
    letterSpacing='1px'
    lineHeight='normal'
    textAlign='left'
    textTransform='uppercase'
    desktop=''
    laptop=''
    laptopL=''
    mobileL=''
    mobileM=''
    mobileS=''
    tablet=''
  >
    H2 Component
  </H2>
```

<iframe
  height="500"
  id="React Pakistan - React Commons Collection H2"
  title="React Pakistan - React Commons Collection H2"
  width="100%"
  src="https://taimoormk.github.io/react-commons-collection/?path=/story/heading-h2--h-2-story">
</iframe>

- ### H3
```javascript
  import {H3} from '@react-pakistan/react-commons-collection';

  <H3
    color='#FFFFFF'
    fontFamily='Montserrat'
    fontSize='1.6em'
    fontWeight={700}
    letterSpacing='1px'
    lineHeight='normal'
    textAlign='left'
    textTransform='uppercase'
    desktop=''
    laptop=''
    laptopL=''
    mobileL=''
    mobileM=''
    mobileS=''
    tablet=''
  >
    H3 Component
  </H3>
```

<iframe
  height="500"
  id="React Pakistan - React Commons Collection H3"
  title="React Pakistan - React Commons Collection H3"
  width="100%"
  src="https://taimoormk.github.io/react-commons-collection/?path=/story/heading-h3--h-3-story">
</iframe>

- ### H4
```javascript
  import {H4} from '@react-pakistan/react-commons-collection';

  <H4
    color='#FFFFFF'
    fontFamily='Montserrat'
    fontSize='1.4em'
    fontWeight={700}
    letterSpacing='1px'
    lineHeight='normal'
    textAlign='left'
    textTransform='uppercase'
    desktop=''
    laptop=''
    laptopL=''
    mobileL=''
    mobileM=''
    mobileS=''
    tablet=''
  >
    H4 Component
  </H4>
```

<iframe
  height="500"
  id="React Pakistan - React Commons Collection H4"
  title="React Pakistan - React Commons Collection H4"
  width="100%"
  src="https://taimoormk.github.io/react-commons-collection/?path=/story/heading-h4--h-4-story">
</iframe>

- ### H5
```javascript
  import {H5} from '@react-pakistan/react-commons-collection';

  <H5
    color='#FFFFFF'
    fontFamily='Montserrat'
    fontSize='1.2em'
    fontWeight={700}
    letterSpacing='1px'
    lineHeight='normal'
    textAlign='left'
    textTransform='uppercase'
    desktop=''
    laptop=''
    laptopL=''
    mobileL=''
    mobileM=''
    mobileS=''
    tablet=''
  >
    H5 Component
  </H5>
```

<iframe
  height="500"
  id="React Pakistan - React Commons Collection H5"
  title="React Pakistan - React Commons Collection H5"
  width="100%"
  src="https://taimoormk.github.io/react-commons-collection/?path=/story/heading-h5--h-5-story">
</iframe>

- ### Header
```javascript
  import {Header} from '@react-pakistan/react-commons-collection';

  <Header>Header component</Header>
```

<iframe
  height="500"
  id="React Pakistan - React Commons Collection Header"
  title="React Pakistan - React Commons Collection Header"
  width="100%"
  src="https://taimoormk.github.io/react-commons-collection/?path=/story/layout-header--header-story">
</iframe>

- ### HR
```javascript
  import {HR} from '@react-pakistan/react-commons-collection';

  <HR 
    border='1px solid #1E90FF' 
    width='100%' padding='0px' 
    margin='0px' 
  />
```

<iframe
  height="500"
  id="React Pakistan - React Commons Collection HR"
  title="React Pakistan - React Commons Collection HR"
  width="100%"
  src="https://taimoormk.github.io/react-commons-collection/?path=/story/misc-hr--hr-story">
</iframe>

- ### Iframe
```javascript
  import {Iframe} from '@react-pakistan/react-commons-collection';

  <Iframe
    height='600px'
    name='iframe'
    sandbox='allow-Same-Origin'
    src='http://taimoor.io'
    width='800px'
    desktop=''
    laptop=''
    laptopL=''
    mobileL=''
    mobileM=''
    mobileS=''
    tablet=''
  />
```

<iframe
  height="500"
  id="React Pakistan - React Commons Collection Iframe"
  title="React Pakistan - React Commons Collection Iframe"
  width="100%"
  src="https://taimoormk.github.io/react-commons-collection/?path=/story/media-iframe--iframe-story">
</iframe>

- ### Image
```javascript
  import {Image} from '@react-pakistan/react-commons-collection';

  <Image
    alt='alt-image'
    height='auto'
    imageUrl='https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png'
    margin='0'
    padding='0'
    width='600px'
    desktop=''
    laptop=''
    laptopL=''
    mobileL=''
    mobileM=''
    mobileS=''
    tablet=''
  />
```

<iframe
  height="500"
  id="React Pakistan - React Commons Collection Image"
  title="React Pakistan - React Commons Collection Image"
  width="100%"
  src="https://taimoormk.github.io/react-commons-collection/?path=/story/media-image--image-story">
</iframe>

- ### Input
```javascript
  import {Input} from '@react-pakistan/react-commons-collection';

  <Input
    backgroundColor='#FFFFFF'
    border='1px solid #EFEFEF'
    borderRadius='0.5em'
    focusBorder='1px solid #1E90FF'
    focusColor='#F62F5E'
    hasError={false}
    helperText=''
    height='3.5em'
    width='100%'
    placeholder='Enter your email here'
    type='text'
    desktop=''
    laptop=''
    laptopL=''
    mobileL=''
    mobileM=''
    mobileS=''
    tablet=''
  />
```

- ### Li
```javascript
  import {Li} from '@react-pakistan/react-commons-collection';

  <Li desktop='' laptop='' laptopL='' mobileL='' mobileM='' mobileS='' tablet=''>
    Value
  </Li>
```

<iframe
  height="500"
  id="React Pakistan - React Commons Collection Image"
  title="React Pakistan - React Commons Collection Image"
  width="100%"
  src="https://taimoormk.github.io/react-commons-collection/?path=/story/misc-li--li-story">
</iframe>

- ### ProgressBar
```javascript
  import {ProgressBar} from '@react-pakistan/react-commons-collection';

  <ProgressBar
    backgroundColorBar='#F62F5E'
    backgroundColorValue='#EFFC90'
    height='0.25em'
    max='100'
    min='0'
    transition='2.5s ease-out'
    value='20'
    width='100%'
    desktop=''
    laptop=''
    laptopL=''
    mobileL=''
    mobileM=''
    mobileS=''
    tablet=''
  />
```

<iframe
  height="500"
  id="React Pakistan - React Commons Collection ProgressBar"
  title="React Pakistan - React Commons Collection ProgressBar"
  width="100%"
  src="https://taimoormk.github.io/react-commons-collection/?path=/story/media-progressbar--progress-bar-story">
</iframe>

- ### RadioButton
```javascript
  import {RadioButton} from '@react-pakistan/react-commons-collection';

  <RadioButton
    checked
    hasError={false}
    helperText={false}
    label=''
    tag='Label'
  />
```

- ### RowContainer
```javascript
  import {RowContainer} from '@react-pakistan/react-commons-collection';

  <RowContainer
    alignItems='center'
    justifyContent='center'
    desktop=''
    laptop=''
    laptopL=''
    mobileL=''
    mobileM=''
    mobileS=''
    tablet=''
>
    RowContainer Component
  </RowContainer>
```

<iframe
  height="500"
  id="React Pakistan - React Commons Collection RowContainer"
  title="React Pakistan - React Commons Collection RowContainer"
  width="100%"
  src="https://taimoormk.github.io/react-commons-collection/?path=/story/layout-rowcontainer--row-container-story">
</iframe>

- ### Select
```javascript
  import {Select} from '@react-pakistan/react-commons-collectiont';

  <Select
    form='form_id'
    name='dropDownName'
    size={0}
    autoFocus={false}
    disabled={false}
    hasError={false}
    helperText=''
    helperTextColor='#FFFFFF'
    label=''
    multiple={false}
    required={false}
>
    <Option value='volvo'>Volvo</Option>
    <Option disabled value='saab'>
        Saab
    </Option>
    <Option value='mercedes'>Mercedes</Option>
    <Option value='audi'>Audi</Option>
  </Select>
```

- ### Spacer
```javascript
  import {Spacer} from '@react-pakistan/react-commons-collection';

  <Spacer 
    margin='1em 1em 1em 1em'
    padding='0em 0em 0em 0em' 
  />
```

<iframe
  height="500"
  id="React Pakistan - React Commons Collection Spacer"
  title="React Pakistan - React Commons Collection Spacer"
  width="100%"
  src="https://taimoormk.github.io/react-commons-collection/?path=/story/layout-spacer--spacer-story">
</iframe>

- ### SocialShare
```javascript
  import {SocialShare} from '@react-pakistan/react-commons-collection';

  <SocialShare
    socialIcons={[
      {
        borderRadius: '50%',
        id: 'social-icon-1',
        round: true,
        serviceName: 'facebook',
        shareUrl: 'https://taimoormk.github.io/react-commons-collection',
        size: 32
      },
      {
        borderRadius: '50%',
        id: 'social-icon-2',
        round: true,
        serviceName: 'twitter',
        shareUrl: 'https://taimoormk.github.io/react-commons-collection',
        size: 32
      },
      {
        borderRadius: '50%',
        id: 'social-icon-3',
        round: true,
        serviceName: 'telegram',
        shareUrl: 'https://taimoormk.github.io/react-commons-collection',
        size: 32
      },
      {
        borderRadius: '50%',
        id: 'social-icon-4',
        round: true,
        serviceName: 'whatsapp',
        shareUrl: 'https://taimoormk.github.io/react-commons-collection',
        size: 32
      },
      {
        borderRadius: '50%',
        id: 'social-icon-5',
        round: true,
        serviceName: 'linkedin',
        shareUrl: 'https://taimoormk.github.io/react-commons-collection',
        size: 32
      },
      {
        borderRadius: '50%',
        id: 'social-icon-6',
        round: true,
        serviceName: 'pinterest',
        shareUrl: 'https://taimoormk.github.io/react-commons-collection',
        size: 32
      },
      {
        borderRadius: '50%',
        id: 'social-icon-7',
        round: true,
        serviceName: 'vk',
        shareUrl: 'https://taimoormk.github.io/react-commons-collection',
        size: 32
      },
      {
        borderRadius: '50%',
        id: 'social-icon-8',
        round: true,
        serviceName: 'ok',
        shareUrl: 'https://taimoormk.github.io/react-commons-collection',
        size: 32
      },
      {
        borderRadius: '50%',
        id: 'social-icon-9',
        round: true,
        serviceName: 'reddit',
        shareUrl: 'https://taimoormk.github.io/react-commons-collection',
        size: 32
      },
      {
        borderRadius: '50%',
        id: 'social-icon-10',
        round: true,
        serviceName: 'tumblr',
        shareUrl: 'https://taimoormk.github.io/react-commons-collection',
        size: 32
      },
      {
        borderRadius: '50%',
        id: 'social-icon-11',
        round: true,
        serviceName: 'livejournal',
        shareUrl: 'https://taimoormk.github.io/react-commons-collection',
        size: 32
      },
      {
        borderRadius: '50%',
        id: 'social-icon-12',
        round: true,
        serviceName: 'mailru',
        shareUrl: 'https://taimoormk.github.io/react-commons-collection',
        size: 32
      },
      {
        borderRadius: '50%',
        id: 'social-icon-13',
        round: true,
        serviceName: 'viber',
        shareUrl: 'https://taimoormk.github.io/react-commons-collection',
        size: 32
      },
      {
        borderRadius: '50%',
        id: 'social-icon-14',
        round: true,
        serviceName: 'workplace',
        shareUrl: 'https://taimoormk.github.io/react-commons-collection',
        size: 32
      },
      {
        borderRadius: '50%',
        id: 'social-icon-15',
        round: true,
        serviceName: 'line',
        shareUrl: 'https://taimoormk.github.io/react-commons-collection',
        size: 32
      },
      {
        borderRadius: '50%',
        id: 'social-icon-16',
        round: true,
        serviceName: 'pocket',
        shareUrl: 'https://taimoormk.github.io/react-commons-collection',
        size: 32
      },
      {
        borderRadius: '50%',
        id: 'social-icon-17',
        round: true,
        serviceName: 'instapaper',
        shareUrl: 'https://taimoormk.github.io/react-commons-collection',
        size: 32
      },
      {
        borderRadius: '50%',
        id: 'social-icon-18',
        round: true,
        serviceName: 'email',
        shareUrl: 'https://taimoormk.github.io/react-commons-collection',
        size: 32
      }
    ]}
  />
```

<iframe
  height="500"
  id="React Pakistan - React Commons Collection SocialShare"
  title="React Pakistan - React Commons Collection SocialShare"
  width="100%"
  src="https://taimoormk.github.io/react-commons-collection/?path=/story/misc-socialshare--social-share-story">
</iframe>

- ### Table
```javascript
  import {Table} from '@react-pakistan/react-commons-collection';

  <Table>
    <Thead>
      <Tr>
        <Td>Hey header</Td>
        <Td>Hello header</Td>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Hey body</Td>
        <Td>Hello body</Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Td>Hey foot</Td>
        <Td>Hello foot</Td>
       </Tr>
    </Tfoot>
  </Table>
```

- ### TextArea
```javascript
  import {TextArea} from '@react-pakistan/react-commons-collection';

  <TextArea
    backgroundColor='#FFFFFF'
    border='1px solid #EFEFEF'
    borderRadius='0.5em'
    color='#2E2E2E'
    disabled={false}
    fontFamily='Montserrat'
    fontSize='1em'
    fontWeight={400}
    hasError={false}
    helperText=''
    label=''
    letterSpacing='normal'
    lineHeight='normal'
    outlineColor='#1E90FF'
    cols={20}
    maxlength={300}
    minLenght={10}
    placeholder='Enter message here'
    placeholderColor='#6C6C6C'
    rows={12}
    wrap='hard'
    autoFocus={false}
    readOnly={false}
    required={false}
    desktop=''
    laptop=''
    laptopL=''
    mobileL=''
    mobileM=''
    mobileS=''
    tablet=''
  />
```

<iframe
  height="500"
  id="React Pakistan - React Commons Collection TextArea"
  title="React Pakistan - React Commons Collection TextArea"
  width="100%"
  src="https://taimoormk.github.io/react-commons-collection/?path=/story/input-textarea--text-area-story">
</iframe>

- ### Text
```javascript
  import {Text} from '@react-pakistan/react-commons-collection';

  <Text
    color='#FFFFFF'
    fontFamily='Montserrat'
    fontSize='1em'
    fontWeight={400}
    letterSpacing='normal'
    lineHeight='normal'
    textAlign='left'
    textTransform='none'
    desktop=''
    laptop=''
    laptopL=''
    mobileL=''
    mobileM=''
    mobileS=''
    tablet=''
>
    Text Component
  </Text>
```

- ### Ul
```javascript
  import { Ul } from '@react-pakistan/react-commons-collection';

  <Ul
    desktop=''
    laptop=''
    laptopL=''
    mobileL=''
    mobileM=''
    mobileS=''
    tablet=''
  >
    <Li>Value</Li>
  <Ul>
```

<iframe
  height="500"
  id="React Pakistan - React Commons Collection Ul"
  title="React Pakistan - React Commons Collection Ul"
  width="100%"
  src="https://taimoormk.github.io/react-commons-collection/?path=/story/misc-ul--ul-story">
</iframe>

- ### Video
```javascript
  import {Video} from '@react-pakistan/react-commons-collection';

  <Video
    autoplay={false}
    controls
    loops={false}
    muted={false}
    poster='https://upload.wikimedia.org/wikipedia/commons/b/b9/Elephants_Dream_s8_proog.jpg'
    preload='auto'
    src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
    width='100%'
    desktop=''
    laptop=''
    laptopL=''
    mobileL=''
    mobileM=''
    mobileS=''
    tablet=''
    autoplay
  />
```

<iframe
  height="500"
  id="React Pakistan - React Commons Collection Video"
  title="React Pakistan - React Commons Collection Video"
  width="100%"
  src="https://taimoormk.github.io/react-commons-collection/?path=/story/media-video--video-story">
</iframe>

- ### Wrapper
```javascript
  import {Wrapper} from '@react-pakistan/react-commons-collection';

  <Wrapper
    width='90%'
    desktop=''
    laptop=''
    laptopL=''
    mobileL=''
    mobileM=''
    mobileS=''
    tablet=''
    >
      Wrapper Component
  </Wrapper>
```

<iframe
  height="500"
  id="React Pakistan - React Commons Collection Wrapper"
  title="React Pakistan - React Commons Collection Wrapper"
  width="100%"
  src="https://taimoormk.github.io/react-commons-collection/?path=/story/layout-wrapper--wrapper-story">
</iframe>
