'use client';

import { Card, CardContent } from '@/app/components/UI/Card';
import styles from './WhatDoesntSection.module.scss';
import { YesIcon } from '@/app/assets/icons/YesIcon';
import { CtaButton } from '../CtaButton/CtaButton';
import { WontTakeBookingIcon } from '@/app/assets/icons/WontTakeBookingIcon';
import { WontChargeCustomersIcon } from '@/app/assets/icons/WontChargeCustomersIcon';
import { WontPretendIcon } from '@/app/assets/icons/WontPretendIcon';
import { useAutoSwipe } from '@/app/hooks/useAutoSwipe';

interface FeatureCard {
  title: string;
  byDesign?: string;
  description: string;
  tip: string;
  icon: React.ReactNode;
}

export const WhatDoesntSection: React.FC = () => {
  const featureCards: FeatureCard[] = [
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

  const {
    currentSlide,
    goToSlide,
    isDragging,
    dragOffset,
    containerRef,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleMouseLeave,
  } = useAutoSwipe({
    totalSlides: featureCards.length,
    autoSwipeInterval: 5000,
  });

  const renderFeatureCard = (card: FeatureCard, index: number) => (
    <Card key={index} className={styles.featureCard}>
      <CardContent className={styles.cardContent}>
        <div className={styles.iconContainer}>
          <div className={styles.iconBackground}>{card.icon}</div>
        </div>

        <div className={styles.textContent}>
          <h3 className={styles.cardTitle}>
            {card.title} {card.byDesign && <b>{card.byDesign}</b>}
          </h3>
          <p className={styles.cardDescription}>{card.description}</p>
          <p className={styles.cardTip}>{card.tip}</p>
        </div>
      </CardContent>
    </Card>
  );

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
          <div
            className={styles.carouselContainer}
            ref={containerRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            <div
              className={styles.carouselTrack}
              style={{
                transform: `translateX(calc(-${
                  currentSlide * 100
                }% + ${dragOffset}px))`,
                transition: isDragging ? 'none' : 'transform 0.3s ease-out',
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
