'use client';

import styles from './RealResults.module.scss';
import animationData from '../../../../public/animations/phone/phone.json';
import Lottie from 'lottie-react';
import mobileHeadingAnimationData from '../../../../public/animations/phoneheadingmob/phoneheadingmob.json';
import mobileAnimationData from '../../../../public/animations/phonemob/phonemob.json';

export const RealResults = (): React.ReactElement => {
  return (
    <section className={styles.section}>
      <div className={styles.phoneSection}>
        <div className={styles.phoneContainer}>
          <Lottie animationData={animationData} loop={true} autoplay={true} />
        </div>
        <div className={styles.phoneMobile}>
          <Lottie
            animationData={mobileHeadingAnimationData}
            loop={true}
            autoplay={true}
          />
          <Lottie
            animationData={mobileAnimationData}
            loop={true}
            autoplay={true}
          />
        </div>
      </div>
    </section>
  );
};
