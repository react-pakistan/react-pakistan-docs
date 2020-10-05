import useBaseUrl from '@docusaurus/useBaseUrl';
import { H3, Text } from '@react-pakistan/react-commons-collection';
import clsx from 'clsx';
import { string } from 'prop-types'
import React from 'react';
import styles from './styles.module.css';

export const Feature = ({
  description,
  imageUrl,
  title,
}) => {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--6', styles.feature)}>
      {imgUrl && (
        <div className='text--center'>
          <img className={styles.featureImage} src={imgUrl} alt={title}  />
        </div>
      )}
      <H3
        color='#006600'
        textAlign='center'
      >
        {title}
      </H3>
      <Text
        color='#006600'
        textAlign='center'
      >
        {description}
      </Text>
    </div>
  );
};

Feature.propTypes = {
  description: string.isRequired,
  imageUrl: string.isRequired,
  title: string.isRequired,
};
