import useBaseUrl from '@docusaurus/useBaseUrl';
import { H3, Spacer, Text } from '@react-pakistan/react-commons-collection';
import clsx from 'clsx';
import { string } from 'prop-types'
import React from 'react';
import styles from './styles.module.css';
import { FeatureItemWrapper } from './styled';

export const Feature = ({
  description,
  imageUrl,
  route,
  title,
}) => {
  const imgUrl = useBaseUrl(imageUrl);

  return (
    <FeatureItemWrapper className={clsx('col col--6', styles.feature)}>
      {imgUrl && (
        <div className='text--center'>
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <H3
        color='#006600'
        textAlign='center'
      >
        {title}
      </H3>
      <Spacer margin='1.5rem 0' />
      <Text
        color='#006600'
        textAlign='center'
      >
        {description}
      </Text>
    </FeatureItemWrapper>
  );
};

Feature.propTypes = {
  description: string.isRequired,
  imageUrl: string.isRequired,
  route: string.isRequired,
  title: string.isRequired,
};
