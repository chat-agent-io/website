'use client';

import { Card, CardContent } from '../../../components/UI/Card';
import styles from './ChatAgentForYouSection.module.scss';
import { useAutoSwipe } from '@/app/hooks/useAutoSwipe';
import Lottie from 'lottie-react';
import tooManyMessagesAnimation from '../../../../public/animations/icons/toomanymessages/toomanymessages.json';
import missedMessagesAnimation from '../../../../public/animations/icons/missedmessages/missedmessages.json';
import youDontWantToAnimation from '../../../../public/animations/icons/youdontwantto/youdontwantto.json';
import youTiredOfAnimation from '../../../../public/animations/icons/youretiredof/youretiredof.json';
import youWantAnimation from '../../../../public/animations/icons/youwant/youwant.json';

interface Scenario {
  header: string;
  title: string;
  icon: React.ReactNode;
}

export const ChatAgentForYouSection: React.FC = () => {
  const scenarios: Scenario[] = [
    {
      header: 'You get too many',
      title: 'DMs to reply manually',
      icon: (
        <Lottie
          animationData={tooManyMessagesAnimation}
          autoplay={true}
          loop={true}
          className={styles.icon}
        />
      ),
    },
    {
      header: "You've missed",
      title: 'messages and lost customers',
      icon: (
        <Lottie
          animationData={missedMessagesAnimation}
          autoplay={true}
          loop={true}
          className={styles.icon}
        />
      ),
    },
    {
      header: "You don't want to",
      title: 'hire extra staff just to answer Instagram',
      icon: (
        <Lottie
          animationData={youDontWantToAnimation}
          autoplay={true}
          loop={true}
          className={styles.icon}
        />
      ),
    },
    {
      header: "You're tired of",
      title: 'saying the same things over and over',
      icon: (
        <Lottie
          animationData={youTiredOfAnimation}
          autoplay={true}
          loop={true}
          className={styles.icon}
        />
      ),
    },
    {
      header: 'You want',
      title: 'every message answered even at 2 AM',
      icon: (
        <Lottie
          animationData={youWantAnimation}
          autoplay={true}
          loop={true}
          className={styles.icon}
        />
      ),
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
    totalSlides: scenarios.length,
    autoSwipeInterval: 5000,
  });

  const renderScenarioCard = (scenario: Scenario, index: number) => (
    <Card key={index} className={styles.scenarioCard}>
      <CardContent className={styles.cardContent}>
        <div className={styles.iconContainer}>
          <div className={styles.iconBackground}>{scenario.icon}</div>
        </div>

        <div className={styles.textContent}>
          <p className={styles.cardHeader}>{scenario.header}</p>
          <p className={styles.cardTitle}>{scenario.title}</p>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>ChatAgent Is For You If...</h2>
        </div>

        {/* Desktop Layout */}
        <div className={styles.cardsSection}>
          {scenarios.map((scenario, index) =>
            renderScenarioCard(scenario, index)
          )}
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
              {scenarios.map((scenario, index) => (
                <div key={index} className={styles.carouselSlide}>
                  {renderScenarioCard(scenario, index)}
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className={styles.pagination}>
            {scenarios.map((_, index) => (
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
      </div>
    </section>
  );
};
