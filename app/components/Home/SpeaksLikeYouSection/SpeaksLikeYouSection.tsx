'use client';

import { useEffect, useRef } from 'react';
import styles from './SpeaksLikeYouSection.module.scss';
import { CtaButton } from '../CtaButton/CtaButton';
import Lottie from 'lottie-react';
import animationData from '../../../../public/animations/chat/chat.json';
import mobileAnimationData from '../../../../public/animations/chatmob/chatmob.json';
import { useIntersectionObserver } from '@/app/hooks/useIntersectionObserver';

export const SpeaksLikeYouSection: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.3,
    rootMargin: '0px',
    triggerOnce: true,
  });

  const desktopLottieRef = useRef<any>(null);
  const mobileLottieRef = useRef<any>(null);

  useEffect(() => {
    if (isIntersecting) {
      if (desktopLottieRef.current) {
        desktopLottieRef.current.play();
      }
      if (mobileLottieRef.current) {
        mobileLottieRef.current.play();
      }
    }
  }, [isIntersecting]);

  return (
    <section ref={ref} className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Speaks Like You. <br />
            In Every Language.
          </h2>
          <p>
            ChatAgent matches your tone, style and professionalism in over{' '}
            <br /> 30 languages. Whether formal, casual, or playful — it sounds
            like you.
          </p>
        </div>
        <div className={styles.animation}>
          <Lottie
            lottieRef={desktopLottieRef}
            animationData={animationData}
            loop={false}
            autoplay={false}
          />
        </div>
        <div className={styles.animationMobile}>
          <Lottie
            lottieRef={mobileLottieRef}
            animationData={mobileAnimationData}
            loop={false}
            autoplay={false}
          />
        </div>
        <CtaButton />
      </div>
    </section>
  );
};
