import { Card, CardContent } from '@/app/components/UI/Card';
import styles from './DataPrivacySection.module.scss';
import { GDPRIcon } from '@/app/assets/icons/GDPRIcon';
import { EncryptionIcon } from '@/app/assets/icons/EncryptionIcon';
import { NoStorageIcon } from '@/app/assets/icons/NoStorageIcon';
import { PrivacyControlIcon } from '@/app/assets/icons/PrivacyControlIcon';
import { CtaButton } from '../CtaButton/CtaButton';

export const DataPrivacySection: React.FC = () => {
  const privacyFeatures = [
    {
      title: 'GDPR Compliant',
      description: 'We follow the strictest international standard',
      icon: <GDPRIcon className={styles.icon} />,
    },
    {
      title: 'End-to-End Encryption',
      description: 'Conversations are fully encrypted in transit',
      icon: <EncryptionIcon className={styles.icon} />,
    },
    {
      title: 'No Message Storage',
      description:
        "ChatAgent doesn't store or reuse your customer messages — unless you choose to",
      icon: <NoStorageIcon className={styles.icon} />,
    },
    {
      title: 'Custom Privacy Controls',
      description:
        'You decide what ChatAgent can say, and what it never should',
      icon: <PrivacyControlIcon className={styles.icon} />,
    },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            You Own The Data.
            <br />
            We Power The Replies.
          </h2>

          <p className={styles.subtitle}>
            ChatAgent keeps your conversations private, your data
            <br />
            protected and your customers safe — by design.
          </p>
        </div>

        <div className={styles.cardsSection}>
          {privacyFeatures.map((feature, index) => (
            <Card key={index} className={styles.featureCard}>
              <CardContent className={styles.cardContent}>
                <div className={styles.cardContentDesktop}>
                  <div className={styles.iconContainer}>
                    <div className={styles.iconBackground}>{feature.icon}</div>
                  </div>

                  <div className={styles.textContent}>
                    <h3 className={styles.cardTitle}>{feature.title}</h3>
                    <p className={styles.cardDescription}>
                      {feature.description}
                    </p>
                  </div>
                </div>
                <div className={styles.cardContentMobile}>
                  <div className={styles.titleWrapper}>
                    <div className={styles.iconBackground}>{feature.icon}</div>
                    <h3 className={styles.cardTitle}>{feature.title}</h3>
                  </div>

                  <div className={styles.textContent}>
                    <p className={styles.cardDescription}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={styles.bottomSection}>
          <CtaButton />
        </div>
      </div>
    </section>
  );
};
