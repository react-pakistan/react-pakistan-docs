import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { H3, Text } from '@react-pakistan/react-commons-collection';
import { theme } from '@react-pakistan/util-functions';
import { ThemeProvider } from 'styled-components';
import styles from './styles.module.css';
import { features } from './helpers';
import {
  ReactPakistanLogo,
  HeaderTitle,
  HeaderSubtitle,
} from './styled';

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--6', styles.feature)}>
      {imgUrl && (
        <div className='text--center'>
          <img className={styles.featureImage} src={imgUrl} alt={title}  />
        </div>
      )}
      <H3>{title}</H3>
      <Text>{description}</Text>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <ThemeProvider theme={theme}>
      <Layout
        title={`Hello from ${siteConfig.title}`}
        description='Description will go into a meta tag in <head />'>
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
          <div className='container'>
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
          </div>
        </header>
        <main>
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
        </main>
      </Layout>
    </ThemeProvider>
  );
}

export default Home;
