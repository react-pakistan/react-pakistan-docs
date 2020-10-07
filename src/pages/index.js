import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { theme } from '@react-pakistan/util-functions';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import { ThemeProvider } from 'styled-components';
import React from 'react';
import Feature from './feature';
import features from './helpers';
import * as Styled from './styled';
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
        <Styled.Header className={clsx('hero hero--primary', styles.heroBanner)}>
          <Styled.Container className='container'>
            <img src='../static/img/react-pakistan-logo-white.svg' alt='React Pakistan Logo' />
            <Styled.HeaderTitle className='hero__title'>{siteConfig.title}</Styled.HeaderTitle>
            <Styled.HeaderSubtitle className='hero__subtitle'>{siteConfig.tagline}</Styled.HeaderSubtitle>
            <Styled.ButtonWrapper className={styles.buttons}>
              <Link
                className={clsx(
                  'button button--outline button--secondary button--lg',
                  styles.getStarted,
                )}
                to={useBaseUrl('docs/')}
              >
                Read Docs
              </Link>
            </Styled.ButtonWrapper>
          </Styled.Container>
        </Styled.Header>
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
