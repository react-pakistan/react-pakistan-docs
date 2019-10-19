---
id: react-commons-collection
title: React Commons Collection
sidebar_label: Example Page
---

## React Pakistan

<img src="https://res.cloudinary.com/dq6hflqwx/image/upload/v1565548545/GitHub/React_Pakistan_Storybook_Logo.jpg" width="100%" />

React Pakistan is an OpenSource & Free Software (FOSS) platform, creating React software solutions for the global community.

## React Commons Collection

<div>
  <img src="https://res.cloudinary.com/dq6hflqwx/image/upload/v1566265693/GitHub/react-commons-collection.jpg" width="70%"/>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY1K6JwhYEBfsv52nUT30dAIjoFyp252cH6VVkhXB_Gq1bUSz-" width="20%" />
</div>

A generic, Commons library for React web apps & React Native apps, following modern approach by building your project's UI in isolation using state of the art Storybook along with React.

## Getting Started

Install React Commons Collection to your project:

`yarn add @react-pakistan/react-commons-collection` or `npm install @react-pakistan/react-commons-collection`

### Documentation of React Commons Components

- ### A
```javascript
import { A } from '@react-pakistan/react-commons-collection/commons/a';

  <A
    download=""
    href=""
    hreflang=""
    media=""
    referrerpolicy=""
    rel=""
    target="_blank"
    type=""
  >
  Go to Google
  </A>
```
- ### Audio
```javascript
  import { Audio } from '@react-pakistan/react-commons-collection/commons/audio';

  <Audio
    autoplay
    controls
    loop={false}
    muted={false}
    preload="auto"
    src="https://notificationsounds.com/sound-effects/insig…"
    controlPanelColor="#F7F7F7"
    currentTimeColor="#00D3CA"
    remainingTimeColor="#F62F5E"
  />
```
- ### Background Image
```javascript
import { BackgroundImage } from '@react-pakistan/react-commons-collection/commons/background-image';

  <BackgroundImage
    imageBackgroundMargin="0"
    imageBackgroundPadding="0"
    imageBackgroundWidth="600px"
    imageBackgroundHeight="400px"
    imageBackgroundColor="#6C6C6C"
    imageBackgroundUrl="https://cdn-images-1.medium.com/max/1200/1- ###y6C4nSv…"
    imageBackgroundRepeat="no-repeat"
    imageBackgroundPosition="center center"
    imageBackgroundSize="cover"
    imageBorderRadius="0"
  />
```
- ### Checkbox
```javascript
  import { CheckBox } from '@react-pakistan/react-commons-collection/commons/check-box';`

  <CheckBox />
```
- ### ChildGrid
```javascript
  import { ChildGrid } from '@react-pakistan/react-commons-collection/commons/child-grid';

  <ChildGrid
    gridColumnStart={1}
    gridColumnEnd={1}
    gridRowStart={1}
    gridRowEnd={1}
    justifySelf="center"
    alignSelf="center"
  >
    ChildGrid Component
  </ChildGrid>
```
- ### ColumnContainer
```javascript
  import { ColumnContainer } from '@react-pakistan/react-commons-collection/commons/column-container';

  <ColumnContainer
    justifyContent="center"
    alignItems="center"
  >
    ColumnContainer Component
  </ColumnContainer>
```
- ### Grid
```javascript
  import { Grid } from '@react-pakistan/react-commons-collection/commons/grid';

  <Grid
    gridColumn="1fr 1fr 1fr"
    gridRow="1fr 1fr"
    columnGap="1em"
    rowGap="1em"
    justifyItems="stretch"
    alignItems="center"
  >
  <h2 style={{
      alignItems: 'center',
      background: 'lightblue',
      border: '1px solid black',
    }}
  >
    Item
  </h2>
  <h2 style={{
      alignItems: 'center',
      background: 'lightblue',
      border: '1px solid black',
    }}
  >
    Item
  </h2>
  <h2 style={{
      alignItems: 'center',
      background: 'lightblue',
      border: '1px solid black',
    }}
  >
    Item
  </h2>
</Grid>
```
- ### H1
```javascript
  import { H1 } from '@react-pakistan/react-commons-collection/commons/h1';

  <H1
    fontFamily="Playfair Display"
    fontSize="2em"
    fontWeight={700}
    lineHeight="normal"
    letterSpacing="1px"
    textAlign="center"
    textTransform="uppercase"
    color="#2E2E2E"
  >
    H1 Component
  </H1>
```
- ### H2
```javascript
  import { H2 } from '@react-pakistan/react-commons-collection/commons/h2';

  <H2
    fontFamily="Montserrat"
    fontSize="1.8em"
    fontWeight={700}
    lineHeight="normal"
    letterSpacing="1px"
    textAlign="center"
    textTransform="uppercase"
    color="#2E2E2E"
  >
    H2 Component
  </H2>
```
- ### H3
```javascript
  import { H3 } from '@react-pakistan/react-commons-collection/commons/h3';

  <H3
    fontFamily="Montserrat"
    fontSize="1.6em"
    fontWeight={700}
    lineHeight="normal"
    letterSpacing="1px"
    textAlign="center"
    textTransform="uppercase"
    color="#2E2E2E"
  >
    H3 Component
  </H3>
```
- ### H4
```javascript
  import { H4 } from '@react-pakistan/react-commons-collection/commons/h4';

  <H4
    fontFamily="Montserrat"
    fontSize="1.4em"
    fontWeight={700}
    lineHeight="normal"
    letterSpacing="1px"
    textAlign="center"
    textTransform="uppercase"
    color="#2E2E2E"
  >
    H4 Component
  </H4>
```
- ### H5
```javascript
  import { H5 } from '@react-pakistan/react-commons-collection/commons/h5';

  <H5
    fontFamily="Montserrat"
    fontSize="1.2em"
    fontWeight={700}
    lineHeight="normal"
    letterSpacing="1px"
    textAlign="center"
    textTransform="uppercase"
    color="#2E2E2E"
  >
    H5 Component
  </H5>
```
- ### HR
```javascript
  import { HR } from '@react-pakistan/react-commons-collection/commons/hr';

  <HR width="100%" lineColor="#1E90FF" />
```
- ### Image
```javascript
  import { Image } from '@react-pakistan/react-commons-collection/commons/image';

  <Image
    imageUrl="https://cdn-images-1.medium.com/max/1200/1- ###y6C4nSv…"
    alt="alt-image"
    margin="0"
    padding="0"
    width="600px"
    height="auto"
  />
```
- ### Input
```javascript
  import { Input } from '@react-pakistan/react-commons-collection/commons/input';

  <Input
    type="text"
    placeholder="Enter your email here"
    height="3.5em"
    border="1px solid #EFEFEF"
    borderRadius="0.5em"
    backgroundColor="#ffffff"
  />
```
- ### Li
```javascript
  import { Li } from '@react-pakistan/react-commons-collection/commons/li';

  <Li>Value</Li>
```
- ### ProgressBar
```javascript
  import { ProgressBar } from '@react-pakistan/react-commons-collection/commons/progress-bar';

  <ProgressBar
    value="20"
    min="0"
    max="100"
    width="100%"
    height="0.25em"
    backgroundColorBar="#F62F5E"
    backgroundColorValue="#EFFC90"
    transition="2.5s ease-out"
  />
```
- ### RadioButton
```javascript
  import { RadioButton } from '@react-pakistan/react-commons-collection/commons/radio-button';

  <RadioButton checked />
```
- ### RowContainer
```javascript
  import { RowContainer } from '@react-pakistan/react-commons-collection/commons/row-container';

  <RowContainer
    justifyContent="center"
    alignItems="center"
  >
    RowContainer Component
  </RowContainer>
```
- ### Spacer
```javascript
  import { Spacer } from '@react-pakistan/react-commons-collection/commons/spacer';

  <Spacer
    margin="1em 1em 1em 1em"
    padding="0em 0em 0em 0em"
  />
```
- ### TextArea
```javascript
   import { TextArea } from '@react-pakistan/react-commons-collection/commons/text-area';

  <TextArea
    autofocus={false}
    cols={70}
    dirname=""
    disabled={false}
    form=""
    maxlength={300}
    name=""
    placeholder="Enter message here"
    readonly={false}
    required={false}
    type="text"
    wrap="hard"
    rows={12}
    border="1px solid #EFEFEF"
    borderRadius="0.5em"
    backgroundColor="#FFFFFF"
  />
```
- ### Text
```javascript
  import { Text } from '@react-pakistan/react-commons-collection/commons/text';

  <Text
    fontFamily="Montserrat"
    fontSize="1em"
    fontWeight={400}
    lineHeight={0.8}
    letterSpacing="1px"
    textAlign="center"
    textTransform="none"
    textDecoration="none"
    color="#2E2E2E"
  >
    Text Component
  </Text>
```
- ### Ul
```javascript
  import { Ul } from '@react-pakistan/react-commons-collection/commons/ul';

  <Ul>
    <Li>Value</Li>
  <Ul>
```
- ### Video
```javascript
  import { Video } from '@react-pakistan/react-commons-collection/commons/video';

  <Video
    autoplay
    controls
    loop={false}
    muted={false}
    poster="https://upload.wikimedia.org/wikipedia/commons/b/b…"
    preload="auto"
    src="http://commondatastorage.googleapis.com/gtv-videos…"
    width="100%"
  />
```
- ### Wrapper
```javascript
  import { Wrapper } from '@react-pakistan/react-commons-collection/commons/wrapper';

  <Wrapper width="70%">
    Wrapper Component
  </Wrapper>
```