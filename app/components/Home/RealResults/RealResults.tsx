'use client';

import { useEffect, useRef } from 'react';
import styles from './RealResults.module.scss';
import animationData from '@/public/animations/phone/phone.json';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import mobileHeadingAnimationData from '@/public/animations/phoneheadingmob/phoneheadingmob.json';
import mobileAnimationData from '@/public/animations/phonemob/phonemob.json';
import { useIntersectionObserver } from '@/app/hooks/useIntersectionObserver';
import { Card, CardContent } from '@/app/components/UI/Card';
import { Clock2Icon } from '@/app/assets/icons/Clock2Icon';
import { ChatBubblesIcon } from '@/app/assets/icons/ChatBubblesIcon';
import { EarthIcon } from '@/app/assets/icons/EarthIcon';
import { DollarIcon } from '@/app/assets/icons/DollarIcon';

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

  const mobileBoxes = [
    {
      title: (
        <>
          <b>100%</b> of questions answered instantly
        </>
      ),
      icon: <Clock2Icon className={styles.icon} />,
    },
    {
      title: 'Up to 3,000 conversations/ month',
      icon: <ChatBubblesIcon className={styles.icon} color="#03010c" />,
    },
    {
      title: 'Supports 30+ languages for global reach',
      icon: <EarthIcon className={styles.icon} />,
    },
    {
      title: 'Cuts support workload by up to 50%',
      icon: <DollarIcon className={styles.icon} />,
    },
  ];

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
          <div className={styles.mobileLottieContainer}>
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
          {/* Mobile Boxes */}
          <div className={styles.mobileBoxes}>
            {mobileBoxes.map((box, index) => (
              <Card key={index} className={styles.mobileBox}>
                <CardContent className={styles.boxContent}>
                  <div className={styles.iconContainer}>
                    <div className={styles.iconBackground}>{box.icon}</div>
                  </div>
                  <div className={styles.textContent}>
                    <p className={styles.boxTitle}>{box.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
