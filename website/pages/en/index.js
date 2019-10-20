/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

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
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/undraw_monitor.svg`} />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href="#try">Try It Out</Button>
            <Button href={docUrl('doc1.html')}>Example Link</Button>
            <Button href={docUrl('doc2.html')}>Example Link 2</Button>
          </PromoSection>
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
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Feature Callout</h2>
        <MarkdownBlock>These are features of this project</MarkdownBlock>
      </div>
    );

    const ReactCommons = () => (
      <Block background="light">
        {[
          {
            content:
              'Each new Docusaurus project has **randomly-generated** theme colors.',
            image: `${baseUrl}img/react-commons.svg`,
            imageAlign: 'right',
            title: 'React Commons Collection',
          },
        ]}
      </Block>
    );

    const ReactUI = () => (
      <Block id="try">
        {[
          {
            content:
              'To make your landing page more attractive, use illustrations! Check out ' +
              '[**unDraw**](https://undraw.co/) which provides you with customizable illustrations which are free to use. ' +
              'The illustrations you see on this page are from unDraw.',
            image: `${baseUrl}img/react-ui.svg`,
            imageAlign: 'left',
            title: 'React UI Collection',
          },
        ]}
      </Block>
    );

    const ReactIcon = () => (
      <Block background="dark">
        {[
          {
            content:
              'This is another description of how this project is useful',
            image: `${baseUrl}img/react-icon.svg`,
            imageAlign: 'right',
            title: 'React Icon Collection',
          },
        ]}
      </Block>
    );

    const ReactLogo = () => (
      <Block background="light">
        {[
          {
            content:
              'This is another description of how this project is useful',
            image: `${baseUrl}img/react-logo.svg`,
            imageAlign: 'left',
            title: 'React Logo Collection',
          },
        ]}
      </Block>
    );

    const ReactDesign = () => (
      <Block>
        {[
          {
            content:
              'This is another description of how this project is useful',
            image: `${baseUrl}img/react-design.svg`,
            imageAlign: 'right',
            title: 'React Design Collection',
          },
        ]}
      </Block>
    );

    const ReactNative = () => (
      <Block background="dark">
        {[
          {
            content:
              'This is another description of how this project is useful',
            image: `${baseUrl}img/react-native.svg`,
            imageAlign: 'left',
            title: 'React Native',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="threeColumn">
        {[
          {
            content: 'This is the content of my feature',
            image: 'https://res.cloudinary.com/dq6hflqwx/image/upload/v1566355017/GitHub/react-commons-collection.jpg',
            imageAlign: 'left',
            title: 'React Commons Collection',
          },
          {
            content: 'The content of my second feature',
            image: 'https://res.cloudinary.com/dq6hflqwx/image/upload/v1566355010/GitHub/react-ui-collection.jpg',
            imageAlign: 'left',
            title: 'React UI Collection',
          },
          {
            content: 'This is the content of my feature',
            image: 'https://res.cloudinary.com/dq6hflqwx/image/upload/v1567499955/GitHub/react-icons-collection.jpg',
            imageAlign: 'left',
            title: 'React Icon Collection',
          },
          {
            content: 'The content of my second feature',
            image: 'https://res.cloudinary.com/dq6hflqwx/image/upload/v1567499957/GitHub/react-logo-collection.jpg',
            imageAlign: 'left',
            title: 'React Logo Collection',
          },
          {
            content: 'The content of my second feature',
            image: 'https://res.cloudinary.com/dq6hflqwx/image/upload/v1567499950/GitHub/react-design-collection.jpg',
            imageAlign: 'left',
            title: 'React Design Collection',
          },
          {
            content: 'The content of my second feature',
            image: 'https://res.cloudinary.com/dq6hflqwx/image/upload/v1548862588/react-native-boilerplate.jpg',
            imageAlign: 'left',
            title: 'React Native Boilerplate',
          },
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
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by these folks</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <FeatureCallout />
          <ReactCommons />
          <ReactUI />
          <ReactIcon />
          <ReactLogo />
          <ReactDesign />
          <ReactNative />
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;
