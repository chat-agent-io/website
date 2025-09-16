'use client';

import React, { useState } from 'react';
import styles from './ChatSection.module.scss';
import { ChatIcon } from '@/app/assets/icons/ChatIcon';
import { CtaButton } from '../CtaButton/CtaButton';
import { ChatAttachmentIcon } from '@/app/assets/icons/ChatAttachmentIcon';
import { ChatSendIcon } from '@/app/assets/icons/ChatSendIcon';
import Lottie from 'lottie-react';
import animationData from '../../../../public/animations/notifications/notifications.json';
import mobileAnimationData from '../../../../public/animations/notificationsmob/notificationsmob.json';
import { StartOverIcon } from '@/app/assets/icons/StartOverIcon';
import { NeedHelpIcon } from '@/app/assets/icons/NeedHelpIcon';
import Image from 'next/image';

interface Message {
  message: string;
  timestamp: string;
  isUser?: boolean;
}

export const ChatSetupSection = (): React.ReactElement => {
  const [isMobile, setIsMobile] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      message: "👋🏻 Hi there!... Let's setup your AI agent together...",
      timestamp: '1m ago',
    },
    {
      message: "It only takes a few minutes. We'll guide you.",
      timestamp: '1m ago',
    },
  ]);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 900);
      if (window.innerWidth <= 900) {
        setIsStarted(true);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleStartClick = () => {
    console.log("Let's Start button clicked!"); // Debug log
    const userMessage: Message = {
      message: "Let's go! 🔥",
      timestamp: 'now',
      isUser: true,
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsStarted(true);
  };

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
            <div className={styles.stepCount}>0/3</div>
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
              {messages.map((chat, index) => (
                <div
                  key={index}
                  className={
                    chat.isUser
                      ? styles.userMessageContainer
                      : styles.chatAgentMessageContainer
                  }
                >
                  <div className={styles.messageContainer}>
                    {!chat.isUser && (
                      /* Profile Image Container */
                      <div className={styles.profileImageContainer}>
                        <div className={styles.profileImage}>
                          {isMobile ? (
                            <Image
                              src="/imgs/chat-icon.png"
                              alt="Chat Icon"
                              width={24}
                              height={21}
                            />
                          ) : (
                            <ChatIcon />
                          )}
                        </div>
                      </div>
                    )}

                    {/* Pill and Time */}
                    <div className={styles.pillAndTime}>
                      <div className={styles.textPill}>
                        <div
                          className={
                            chat.isUser
                              ? styles.userMessageText
                              : styles.messageText
                          }
                        >
                          {chat.message}
                        </div>
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
              {!isStarted ? (
                <div className={styles.textBox} onClick={handleStartClick}>
                  <div className={styles.stepsContainer}>
                    <div className={styles.letStart}>Let&apos;s Start</div>
                  </div>
                </div>
              ) : (
                <div className={styles.inputContainer}>
                  {!isMobile && (
                    <button className={styles.startOverButton}>
                      <StartOverIcon />
                      Start Over
                    </button>
                  )}
                  <div className={styles.chatInputBox}>
                    <div className={styles.chatInput}>
                      <div className={styles.attachmentIcon}>
                        <ChatAttachmentIcon />
                      </div>
                      <input
                        type="text"
                        placeholder="Write a message..."
                        className={styles.messageInput}
                      />
                      <button className={styles.sendButton}>
                        <span className={styles.sendButtonText}>Send</span>
                        <ChatSendIcon />
                      </button>
                    </div>
                  </div>
                  {!isMobile && (
                    <button className={styles.needHelpButton}>
                      <NeedHelpIcon />
                      Need Help?
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Buttons Outside Chat */}
          {isMobile && isStarted && (
            <div className={styles.mobileButtonsContainer}>
              <button className={styles.startOverButton}>
                <StartOverIcon />
                Start Over
              </button>
              <button className={styles.needHelpButton}>
                <NeedHelpIcon />
                Need Help?
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
