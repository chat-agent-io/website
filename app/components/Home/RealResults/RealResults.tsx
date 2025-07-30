'use client';

import { useEffect, useRef } from 'react';
import styles from './RealResults.module.scss';
import animationData from '../../../../public/animations/phone/phone.json';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import mobileHeadingAnimationData from '../../../../public/animations/phoneheadingmob/phoneheadingmob.json';
import mobileAnimationData from '../../../../public/animations/phonemob/phonemob.json';
import { useIntersectionObserver } from '@/app/hooks/useIntersectionObserver';

export const RealResults = (): React.ReactElement => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.3,
    rootMargin: '0px',
    triggerOnce: true,
  });

  const desktopLottieRef = useRef<LottieRefCurrentProps>(null);
  const mobileHeadingLottieRef = useRef<LottieRefCurrentProps>(null);
  const mobileLottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (isIntersecting) {
      if (desktopLottieRef.current) {
        desktopLottieRef.current.play();
      }
      if (mobileHeadingLottieRef.current) {
        mobileHeadingLottieRef.current.play();
      }
      if (mobileLottieRef.current) {
        mobileLottieRef.current.play();
      }
    }
  }, [isIntersecting]);

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.phoneSection}>
        <div className={styles.phoneContainer}>
          <Lottie
            lottieRef={desktopLottieRef}
            animationData={animationData}
            loop={false}
            autoplay={false}
          />
        </div>
        <div className={styles.phoneMobile}>
          <Lottie
            lottieRef={mobileHeadingLottieRef}
            animationData={mobileHeadingAnimationData}
            loop={false}
            autoplay={false}
          />
          <Lottie
            lottieRef={mobileLottieRef}
            animationData={mobileAnimationData}
            loop={false}
            autoplay={false}
          />
        </div>
      </div>
    </section>
  );
};
