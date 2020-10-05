import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { theme } from '@react-pakistan/util-functions';
import { ThemeProvider } from 'styled-components';
import { Feature } from './feature';
import { features } from './helpers';
import {
  ButtonWrapper,
  Container,
  FeatureRow,
  FeatureSection,
  FeatureWrapper,
  Header,
  HeaderSubtitle,
  HeaderTitle,
  Main,
  ReactPakistanLogo,
} from './styled';
import styles from './styles.module.css';

const Home = () => {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <ThemeProvider theme={theme}>
      <Layout
        title={`Hello from ${siteConfig.title}`}
        description='Description will go into a meta tag in <head />'
      >
        <Header className={clsx('hero hero--primary', styles.heroBanner)}>
          <Container className='container'>
            <ReactPakistanLogo src='../static/img/react-pakistan-logo-white.svg' />
            <HeaderTitle className='hero__title'>{siteConfig.title}</HeaderTitle>
            <HeaderSubtitle className='hero__subtitle'>{siteConfig.tagline}</HeaderSubtitle>
            <ButtonWrapper className={styles.buttons}>
              <Link
                className={clsx(
                  'button button--outline button--secondary button--lg',
                  styles.getStarted,
                )}
                to={useBaseUrl('docs/')}
              >
                Read Docs
              </Link>
            </ButtonWrapper>
          </Container>
        </Header>
        <Main>
          {features && features.length > 0 && (
            <FeatureSection className={styles.features}>
              <FeatureWrapper className='container'>
                <FeatureRow className='row'>
                  {features.map((props, idx) => (
                    <Feature key={idx} {...props} />
                  ))}
                </FeatureRow>
              </FeatureWrapper>
            </FeatureSection>
          )}
        </Main>
      </Layout>
    </ThemeProvider>
  );
};

export default Home;
