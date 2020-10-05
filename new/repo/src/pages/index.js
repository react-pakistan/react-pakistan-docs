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
  Container,
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
        description='Description will go into a meta tag in <head />'>
        <Header className={clsx('hero hero--primary', styles.heroBanner)}>
          <Container className='container'>
            <ReactPakistanLogo src='../static/img/react-pakistan-logo-white.svg' />
            <HeaderTitle className='hero__title'>{siteConfig.title}</HeaderTitle>
            <HeaderSubtitle className='hero__subtitle'>{siteConfig.tagline}</HeaderSubtitle>
            <div className={styles.buttons}>
              <Link
                className={clsx(
                  'button button--outline button--secondary button--lg',
                  styles.getStarted,
                )}
                to={useBaseUrl('docs/')}
              >
                Read Docs
              </Link>
            </div>
          </Container>
        </Header>
        <Main>
          {features && features.length > 0 && (
            <section className={styles.features}>
              <div className='container'>
                <div className='row'>
                  {features.map((props, idx) => (
                    <Feature key={idx} {...props} />
                  ))}
                </div>
              </div>
            </section>
          )}
        </Main>
      </Layout>
    </ThemeProvider>
  );
}

export default Home;
