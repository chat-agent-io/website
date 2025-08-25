'use client';

import React, { useState } from 'react';
import styles from './ChatSection.module.scss';
import { ChatIcon } from '@/app/assets/icons/ChatIcon';
import { useMediaQuery } from '@/app/hooks/useMediaQuery';
import { CtaButton } from '../CtaButton/CtaButton';
import Lottie from 'lottie-react';
import animationData from '../../../../public/animations/notifications/notifications.json';
import mobileAnimationData from '../../../../public/animations/notificationsmob/notificationsmob.json';

export const ChatSetupSection = (): React.ReactElement => {
  const [currentStep, setCurrentStep] = useState(0);
  const isTablet = useMediaQuery('900');

  const chatMessages = [
    {
      message: "👋🏻 Hi there!... Let's setup your AI agent together...",
      timestamp: '1m ago',
    },
    {
      message: "It only takes a few minutes. We'll guide you.",
      timestamp: '1m ago',
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.headerSection}>
        <h1 className={styles.mainHeading}>
          Your DMs Answered Instantly. <br /> Without Lifting a Finger.
        </h1>

        <h1 className={styles.mainHeadingMobile}>
          Your DMs
          <br />
          Answered Instantly.
          <br />
          Without Lifting a Finger.
        </h1>

        <p className={styles.subHeading}>
          ChatAgent replies to every Instagram, WhatsApp, <br />
          {"or website message — so you don't have to."}
        </p>
        <CtaButton />
      </div>
      <div className={styles.dmsContent}>
        <div className={styles.dmsImages}>
          <Lottie animationData={animationData} autoplay={true} loop={true} />
        </div>
        <div className={styles.dmsImagesMobile}>
          <Lottie
            animationData={mobileAnimationData}
            autoplay={true}
            loop={true}
          />
        </div>
        <p>
          Stop losing customers just because you didn&apos;t see the message.
        </p>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.cardWrapper}>
          {/* Onboarding Header */}
          <div className={styles.onboardingHeader}>
            <div className={styles.headerPart}>
              <h2 className={styles.onboardingTitle}>
                Let&apos;s Get Your
                <br />
                AI Agent Set Up.
              </h2>
            </div>
          </div>

          {/* Steps Indicator */}
          <div className={styles.stepsIndicator}>
            <div className={styles.stepCount}>{currentStep}/3</div>
            <div className={styles.progressDots}>
              <div className={styles.progressDot}></div>
              <div className={styles.progressDot}></div>
              <div className={styles.progressDot}></div>
            </div>
          </div>

          {/* New Onboarding Chat */}
          <div className={styles.newOnboardingChat}>
            {/* Messages Container */}
            <div className={styles.messagesContainer}>
              {chatMessages.map((chat, index) => (
                <div key={index} className={styles.chatAgentMessageContainer}>
                  <div className={styles.messageContainer}>
                    {/* Profile Image Container */}
                    <div className={styles.profileImageContainer}>
                      <div className={styles.profileImage}>
                        <ChatIcon />
                      </div>
                    </div>

                    {/* Pill and Time */}
                    <div className={styles.pillAndTime}>
                      <div className={styles.textPill}>
                        <div className={styles.messageText}>{chat.message}</div>
                      </div>
                      <div className={styles.timeContainer}>
                        <div className={styles.timestamp}>{chat.timestamp}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Container Text Box */}
            <div className={styles.containerTextBox}>
              <div className={styles.textBox}>
                <div className={styles.stepsContainer}>
                  <div className={styles.letStart}>Let&apos;s Start</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
