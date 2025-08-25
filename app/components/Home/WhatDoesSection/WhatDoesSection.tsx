import styles from './WhatDoesSection.module.scss';
import Lottie from 'lottie-react';
import brainAnimation from '../../../../public/animations/icons/brain/brain.json';
import alwaysAvailableAnimation from '../../../../public/animations/icons/alwaysavailable/alwaysavailable.json';
import worksEverywhereAnimation from '../../../../public/animations/icons/workseverywhere/workseverywhere.json';

export const WhatDoesSection: React.FC = () => {
  const features = [
    {
      icon: (
        <Lottie
          animationData={brainAnimation}
          autoplay={true}
          loop={true}
          className={styles.featureIcon}
        />
      ),
      title: 'Learns your business',
      alt: 'Brain animation',
    },
    {
      icon: (
        <Lottie
          animationData={worksEverywhereAnimation}
          autoplay={true}
          loop={true}
          className={styles.featureIcon}
        />
      ),
      title: 'Works everywhere',
      alt: 'Works everywhere animation',
    },
    {
      icon: (
        <Lottie
          animationData={alwaysAvailableAnimation}
          autoplay={true}
          loop={true}
          className={styles.featureIcon}
        />
      ),
      title: 'Always available',
      alt: 'Always available animation',
    },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>What ChatAgent Does</h2>

        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.cardContent}>
                <div className={styles.featureIconContainer}>
                  {feature.icon}
                </div>
              </div>
              <p className={styles.featureTitle}>{feature.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
