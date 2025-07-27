'use client';

import styles from './RealResults.module.scss';
import animationData from '../../../../public/animations/phone/phone.json';
import Lottie from 'lottie-react';

export const RealResults = (): React.ReactElement => {
  return (
    <section className={styles.section}>
      <div className={styles.phoneSection}>
        <div className={styles.phoneContainer}>
          <Lottie animationData={animationData} loop={true} autoplay={true} />
        </div>
      </div>
    </section>
  );
};
