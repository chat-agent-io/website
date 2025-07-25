import { Card, CardContent } from '../../../components/UI/Card';
import styles from './WhatDoesntSection.module.scss';
import { YesIcon } from '@/app/assets/icons/YesIcon';
import { NoIcon } from '@/app/assets/icons/NoIcon';
import { CtaButton } from '../CtaButton/CtaButton';

export const WhatDoesntSection: React.FC = () => {
  const featureCards = [
    {
      title: "It Won't Take Bookings",
      description: 'Avoids liability, human error, or double-booking issues.',
      isPositive: false,
    },
    {
      title: "It Won't Charge Customers",
      description: 'Keeps you in control of sales, not AI.',
      isPositive: false,
    },
    {
      title: "It Won't Pretend To Be Human",
      description: 'Transparent by design. Customers trust clarity.',
      isPositive: false,
    },
    {
      title: 'It Answers Instantly, In Your Tone',
      description: 'Using your content',
      isPositive: true,
    },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            What ChatAgent Won&apos;t Do
            <br />& Why That&apos;s A Good Thing
          </h2>
        </div>

        <div className={styles.cardsSection}>
          {featureCards.map((card, index) => (
            <Card key={index} className={styles.featureCard}>
              <CardContent className={styles.cardContent}>
                <div className={styles.iconContainer}>
                  <div className={styles.iconBackground}>
                    {card.isPositive ? (
                      <YesIcon className={styles.icon} />
                    ) : (
                      <NoIcon className={styles.icon} />
                    )}
                  </div>
                </div>

                <div className={styles.textContent}>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardDescription}>{card.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={styles.bottomSection}>
          <p className={styles.subtitle}>
            No tricks. No automation horror stories. Just accurate replies fast.
          </p>

          <CtaButton />
        </div>
      </div>
    </section>
  );
};
