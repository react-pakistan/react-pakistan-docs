import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { Spacer, Text } from '@react-pakistan/react-commons-collection';
import { theme } from '@react-pakistan/util-functions';
import clsx from 'clsx';
import { string } from 'prop-types'
import React, { memo } from 'react';
import styles from './css/styles.module.css';
import { withTheme } from 'styled-components';

export const Feature = memo(withTheme(({
  description,
  imageUrl,
  route,
  title,
}) => {
  const imgUrl = useBaseUrl(imageUrl);

  return (
    <div className={clsx('col col--5', styles.feature)}>
      {imgUrl && (
        <div className='text--center'>
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <Text
        color='#006600'
        {...theme.typography.h3}
        textAlign='center'
      >
        {title}
      </Text>
      <Spacer margin='1.5rem 0' />
      <Text
        color='#006600'
        textAlign='center'
        {...theme.typography.p5}
      >
        {description}
      </Text>
      <Spacer margin='1.5rem 0' />
      <div className={styles.buttons}>
        <Link
          className={clsx(
            'button button--outline button--secondary button--lg',
            styles.getStarted,
          )}
          to={useBaseUrl(route)}
        >
          Read Docs
        </Link>
      </div>
    </div>
  );
}));

Feature.propTypes = {
  description: string.isRequired,
  imageUrl: string.isRequired,
  route: string.isRequired,
  title: string.isRequired,
};
