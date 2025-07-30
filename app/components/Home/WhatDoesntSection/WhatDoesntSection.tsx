'use client';

import { Card, CardContent } from '../../../components/UI/Card';
import styles from './WhatDoesntSection.module.scss';
import { YesIcon } from '@/app/assets/icons/YesIcon';
import { CtaButton } from '../CtaButton/CtaButton';
import { WontTakeBookingIcon } from '@/app/assets/icons/WontTakeBookingIcon';
import { WontChargeCustomersIcon } from '@/app/assets/icons/WontChargeCustomersIcon';
import { WontPretendIcon } from '@/app/assets/icons/WontPretendIcon';
import { useState } from 'react';

export const WhatDoesntSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featureCards = [
    {
      title: "It Won't Take Bookings",
      byDesign: ' — By Design.',
      description: 'Avoids liability, human error, or double-booking.',
      tip: '(Pro & Enterprise support it.)',
      icon: <WontTakeBookingIcon />,
    },
    {
      title: "It Won't Charge Customers",
      description: 'Keeps you in control of sales, not AI.',
      tip: '(You decide when and how.)',
      icon: <WontChargeCustomersIcon />,
    },
    {
      title: "It Won't Pretend To Be Human",
      description: 'Transparent by design. Customers trust clarity.',
      tip: '(Customers trust clarity.)',
      icon: <WontPretendIcon />,
    },
    {
      title: 'It Answers Instantly, In Your Tone',
      description: 'Using your content',
      tip: '(Across channels.)',
      icon: <YesIcon />,
    },
  ];

  const renderFeatureCard = (card: any, index: number) => (
    <Card key={index} className={styles.featureCard}>
      <CardContent className={styles.cardContent}>
        <div className={styles.iconContainer}>
          <div className={styles.iconBackground}>{card.icon}</div>
        </div>

        <div className={styles.textContent}>
          <h3 className={styles.cardTitle}>
            {card.title} <b>{card.byDesign}</b>
          </h3>
          <p className={styles.cardDescription}>{card.description}</p>
          <p className={styles.cardTip}>{card.tip}</p>
        </div>
      </CardContent>
    </Card>
  );

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            What ChatAgent Won&apos;t Do
            <br />& Why That&apos;s A Good Thing
          </h2>
        </div>

        {/* Desktop Layout */}
        <div className={styles.cardsSection}>
          {featureCards.map((card, index) => renderFeatureCard(card, index))}
        </div>

        {/* Mobile Custom Carousel */}
        <div className={styles.mobileSwiper}>
          <div className={styles.carouselContainer}>
            <div
              className={styles.carouselTrack}
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {featureCards.map((card, index) => (
                <div key={index} className={styles.carouselSlide}>
                  {renderFeatureCard(card, index)}
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className={styles.pagination}>
            {featureCards.map((_, index) => (
              <button
                key={index}
                className={`${styles.paginationDot} ${
                  index === currentSlide ? styles.paginationDotActive : ''
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
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
