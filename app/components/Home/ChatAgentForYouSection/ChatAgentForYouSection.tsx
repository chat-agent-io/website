'use client';

import { Card, CardContent } from '../../../components/UI/Card';
import styles from './ChatAgentForYouSection.module.scss';
import { ChatBubblesIcon } from '@/app/assets/icons/ChatBubblesIcon';
import { MissedMessagesIcon } from '@/app/assets/icons/MissedMessagesIcon';
import { HireStaffIcon } from '@/app/assets/icons/HireStaffIcon';
import { RepetitiveIcon } from '@/app/assets/icons/RepetitiveIcon';
import { TwentyFourSevenIcon } from '@/app/assets/icons/TwentyFourSevenIcon';
import { useState } from 'react';

interface Scenario {
  header: string;
  title: string;
  icon: React.ReactNode;
}

export const ChatAgentForYouSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const scenarios: Scenario[] = [
    {
      header: 'You get too many',
      title: 'DMs to reply manually',
      icon: <ChatBubblesIcon className={styles.icon} color="#7C38BC" />,
    },
    {
      header: "You've missed",
      title: 'messages and lost customers',
      icon: <MissedMessagesIcon className={styles.icon} />,
    },
    {
      header: "You don't want to",
      title: 'hire extra staff just to answer Instagram',
      icon: <HireStaffIcon className={styles.icon} />,
    },
    {
      header: "You're tired of",
      title: 'saying the same things over and over',
      icon: <RepetitiveIcon className={styles.icon} />,
    },
    {
      header: 'You want',
      title: 'every message answered even at 2 AM',
      icon: <TwentyFourSevenIcon className={styles.icon} />,
    },
  ];

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

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

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
          <div className={styles.carouselContainer}>
            <div
              className={styles.carouselTrack}
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
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
