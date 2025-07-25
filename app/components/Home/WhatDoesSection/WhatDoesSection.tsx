import styles from './WhatDoesSection.module.scss';
import { BrainIcon } from '@/app/assets/icons/BrainIcon';
import { ClockIcon } from '@/app/assets/icons/ClockIcon';
import { ChatBubblesIcon } from '@/app/assets/icons/ChatBubblesIcon';

export const WhatDoesSection: React.FC = () => {
  const features = [
    {
      icon: <BrainIcon className={styles.featureIcon} />,
      title: 'Learns your business',
      alt: 'Brain icon',
    },
    {
      icon: <ChatBubblesIcon className={styles.featureIcon} />,
      title: 'Works everywhere',
      alt: 'Chat icon',
    },
    {
      icon: <ClockIcon className={styles.featureIcon} />,
      title: 'Always available',
      alt: 'Clock icon',
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
