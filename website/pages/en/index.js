/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

require('dotenv').config();
const React = require('react');
const Commons = require('@react-pakistan/react-commons-collection/a');
const Util = require('@react-pakistan/util-functions');
const Styled = require('styled-components');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className='homeContainer'>
        <div className='homeSplashFade'>
          <div className='wrapper homeWrapper'>{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className='projectLogo'>
        <img src={props.img_src} alt='Project Logo' />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className='projectTitle'>
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className='section promoSection'>
        <div className='promoRow'>
          <div className='pluginRowBlock'>{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className='pluginWrapper buttonWrapper'>
        <a className='button' href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/react-pakistan.svg`} />
        <div className='inner'>
          <ProjectTitle siteConfig={siteConfig} />
          {/* <PromoSection> */}
            {/* <Button href='#try'>Try It Out</Button> */}
            {/* <Button href={docUrl('doc1.html')}>Example Link</Button> */}
            {/* <Button href={docUrl('doc2.html')}>Example Link 2</Button> */}
          {/* </PromoSection> */}
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <a href={props.to}>
        <Container
          padding={['bottom', 'top']}
          id={props.id}
          background={props.background}>
          <GridBlock
            align='center'
            contents={props.children}
            layout={props.layout}
          />
        </Container>
      </a>
    );

    // const FeatureCallout = () => (
    //   <div
    //     className='productShowcaseSection paddingBottom'
    //     style={{textAlign: 'center'}}>
    //     <h2>Feature Callout</h2>
    //     <MarkdownBlock>These are features of this project</MarkdownBlock>
    //   </div>
    // );

    const ReactCommons = () => (
      <Block background='light' to='docs/react-commons-collection'>
        {[
          {
            content:
              'React Commons collection library is the most generic form of components, these components can be extended into anything specific as per your design specs',
            image: `${baseUrl}img/react-commons.svg`,
            imageAlign: 'right',
            title: 'React Commons Collection',
          },
        ]}
      </Block>
    );

    const ReactNativeCommons = () => (
      <Block background='dark'>
        {[
          {
            content:
              'React Native Commons collection library is the most generic form of components, these components can be extended into anything specific as per your design specs',
            image: `${baseUrl}img/react-native-commons.svg`,
            imageAlign: 'left',
            title: 'React Native Commons Collection',
          },
        ]}
      </Block>
    );

    const ReactUI = () => (
      <Block background='light'>
        {[
          {
            content:
              'React UI collection library is extended on React Commons collection library, creating semi-dynamic UI/UX implementation of various interfaces e.g. eCommerce app and more.',
            image: `${baseUrl}img/react-ui.svg`,
            imageAlign: 'right',
            title: 'React UI Collection',
          },
        ]}
      </Block>
    );

    const ReactNativeUI = () => (
      <Block background='dark'>
        {[
          {
            content:
              'React Native UI collection library is extended on React Native Commons collection library, creating semi-dynamic UI/UX implementation of various interfaces.',
            image: `${baseUrl}img/react-native-ui.svg`,
            imageAlign: 'left',
            title: 'React Native UI Collection',
          },
        ]}
      </Block>
    );

    const ReactIcon = () => (
      <Block background='light'>
        {[
          {
            content:
              'React Icon collection library is a categorised sets of Reactified versions of SVG icon components, designed to be friendly for developers, you can customise icons on the fly, e.g its colors, size etc.',
            image: `${baseUrl}img/react-icon.svg`,
            imageAlign: 'right',
            title: 'React Icon Collection',
          },
        ]}
      </Block>
    );

    const ReactNativeIcon = () => (
      <Block background='dark'>
        {[
          {
            content:
              'React Native Icon collection library is a categorised sets of Reactified versions of SVG icon components, designed to be friendly for developers, you can customise icons on the fly, e.g its colors, size etc.',
            image: `${baseUrl}img/react-native-icon.svg`,
            imageAlign: 'left',
            title: 'React Native Icon Collection',
          },
        ]}
      </Block>
    );

    const ReactLogo = () => (
      <Block background='light'>
        {[
          {
            content:
              'React Logo collection library is a categorised sets of Reactified versions of SVG logo components, designed to be friendly for developers, you can customise logos on the fly, e.g its colors, size etc.',
            image: `${baseUrl}img/react-logo.svg`,
            imageAlign: 'right',
            title: 'React Logo Collection',
          },
        ]}
      </Block>
    );

    const ReactNativeLogo = () => (
      <Block background='dark'>
        {[
          {
            content:
              'React Native Logo collection library is a categorised sets of Reactified versions of SVG logo components, designed to be friendly for developers, you can customise logos on the fly, e.g its colors, size etc.',
            image: `${baseUrl}img/react-native-logo.svg`,
            imageAlign: 'left',
            title: 'React Native Logo Collection',
          },
        ]}
      </Block>
    );

    const ReactEmoji = () => (
      <Block background='light'>
        {[
          {
            content:
              'React Emoji collection library is a categorised sets of Reactified versions of SVG logo components, designed to be friendly for developers, you can customise emojis on the fly, e.g its size etc.',
            image: `${baseUrl}img/react-emoji.svg`,
            imageAlign: 'right',
            title: 'React Emoji Collection',
          },
        ]}
      </Block>
    );

    const ReactNativeEmoji = () => (
      <Block background='dark'>
        {[
          {
            content:
              'React Native Emoji collection library is a categorised sets of Reactified versions of SVG logo components, designed to be friendly for developers, you can customise emojis on the fly, e.g its size etc.',
            image: `${baseUrl}img/react-native-emoji.svg`,
            imageAlign: 'left',
            title: 'React Native Emoji Collection',
          },
        ]}
      </Block>
    );

    const ReactDesign = () => (
      <Block>
        {[
          {
            content:
              'This project is still under development for its initial launch phase',
            image: `${baseUrl}img/react-design.svg`,
            imageAlign: 'right',
            title: 'React Design Collection',
          },
        ]}
      </Block>
    );

    const ReactNativeBoilerplate = () => (
      <Block background='light'>
        {[
          {
            content:
              'A well curated and high in-demand set of React Native boilerplate with various possibilities and combinations.',
            image: `${baseUrl}img/react-native-boilerplates.svg`,
            imageAlign: 'left',
            title: 'React Native Boilerplates',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout='threeColumn'>
        {[
          {
            image: 'https://res.cloudinary.com/dq6hflqwx/image/upload/v1566355017/GitHub/react-commons-collection.jpg',
            imageAlign: 'left',
            title: 'React Commons Collection',
          },
          {
            image: 'https://res.cloudinary.com/dq6hflqwx/image/upload/v1566355010/GitHub/react-ui-collection.jpg',
            imageAlign: 'left',
            title: 'React UI Collection',
          },
          {
            image: 'https://res.cloudinary.com/dq6hflqwx/image/upload/v1567499955/GitHub/react-icons-collection.jpg',
            imageAlign: 'left',
            title: 'React Icon Collection',
          },
          {
            image: 'https://res.cloudinary.com/dq6hflqwx/image/upload/v1567499957/GitHub/react-logo-collection.jpg',
            imageAlign: 'left',
            title: 'React Logo Collection',
          },
          {
            image: 'https://res.cloudinary.com/dq6hflqwx/image/upload/v1592815676/GitHub/react-emoji-collection.jpg',
            imageAlign: 'left',
            title: 'React Emoji Collection',
          },
          // {
          //   image: 'https://res.cloudinary.com/dq6hflqwx/image/upload/v1567499950/GitHub/react-design-collection.jpg',
          //   imageAlign: 'left',
          //   title: 'React Design Collection',
          // },
          {
            image: 'https://res.cloudinary.com/dq6hflqwx/image/upload/v1583650645/GitHub/react-native-commons-collection.jpg',
            imageAlign: 'left',
            title: 'React Native Commons Collection',
          },
          {
            image: 'https://res.cloudinary.com/dq6hflqwx/image/upload/v1583650649/GitHub/react-native-ui-collection.jpg',
            imageAlign: 'left',
            title: 'React Native UI Collection',
          },
          {
            image: 'https://res.cloudinary.com/dq6hflqwx/image/upload/v1583650647/GitHub/react-native-icon-collection.jpg',
            imageAlign: 'left',
            title: 'React Native Icon Collection',
          },
          {
            image: 'https://res.cloudinary.com/dq6hflqwx/image/upload/v1583650658/GitHub/react-native-logo-collection.jpg',
            imageAlign: 'left',
            title: 'React Native Logo Collection',
          },
          {
            image: 'https://res.cloudinary.com/dq6hflqwx/image/upload/v1583650658/GitHub/react-native-logo-collection.jpg',
            imageAlign: 'left',
            title: 'React Native Emoji Collection',
          },
          {
            image: 'https://res.cloudinary.com/dq6hflqwx/image/upload/v1548862588/react-native-boilerplate.jpg',
            imageAlign: 'left',
            title: 'React Native Boilerplate',
          },
          {},
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className='productShowcaseSection paddingBottom'>
          <h2>Who is Using This?</h2>
          <p>This project is used by these folks</p>
          <div className='logos'>{showcase}</div>
          <div className='more-users'>
            <a className='button' href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <Styled.ThemeProvider theme={Util.theme}>
        <div>
          <HomeSplash siteConfig={siteConfig} language={language} />
          <div className='mainContainer'>
            <Features />
            {/* <FeatureCallout /> */}
            <ReactCommons />
            <ReactNativeCommons />
            <ReactUI />
            <ReactNativeUI />
            <ReactIcon />
            <ReactNativeIcon />
            <ReactLogo />
            <ReactNativeLogo />
            <ReactEmoji />
            <ReactNativeEmoji />
            {/* <ReactDesign /> */}
            <ReactNativeBoilerplate />
            {/* <Showcase /> */}
          </div>
        </div>
      </Styled.ThemeProvider>
    );
  }
}

module.exports = Index;
