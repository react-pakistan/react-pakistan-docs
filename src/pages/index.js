import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { theme } from '@react-pakistan/util-functions';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import styles from '../css/styles.module.css';
import { Feature } from '../feature';
import { features } from '../helpers';

const Home = () => {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <ThemeProvider theme={theme}>
      <Layout
        title={`Hello from ${siteConfig.title}`}
        description='Description will go into a meta tag in <head />'
      >
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
          <div className='container'>
            <img src='../../static/img/react-pakistan-logo-white.svg' alt='React Pakistan Logo' width='150rem' />
            <h1 className='hero__title'>{siteConfig.title}</h1>
            <h2 className='hero__subtitle'>{siteConfig.tagline}</h2>
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
};

export default Home;
