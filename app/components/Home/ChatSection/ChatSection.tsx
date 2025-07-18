'use client';

import React, { useState } from 'react';
import { Card, CardContent } from '../../UI/Card';
import { StepProgress } from '../../UI/ProgressBar';
import styles from './ChatSection.module.scss';
import { ChatIcon } from '@/app/assets/icons/ChatIcon';
import { ChatAttachmentIcon } from '@/app/assets/icons/ChatAttachmentIcon';
import { ChatSendIcon } from '@/app/assets/icons/ChatSendIcon';
import { useMediaQuery } from '@/app/hooks/useMediaQuery';

export const ChatSetupSection = (): React.ReactElement => {
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const [currentStep, setCurrentStep] = useState(1);
  const [inputValue, setInputValue] = useState('');
  const isTablet = useMediaQuery('900');

  const steps = [
    {
      number: 1,
      text: 'Gathering your basic information...',
      active: currentStep === 1,
    },
    {
      number: 2,
      text: 'Share some documents to train your agent...',
      active: currentStep === 2,
    },
    {
      number: 3,
      text: 'Connect your channels...',
      active: currentStep === 3,
    },
  ];

  const chatMessages = [
    {
      message: "👋🏻 Hi there!\nLet's setup your AI agent together...",
      timestamp: '2:30 PM',
    },
    {
      message: 'Step 1 - Could you please tell me your business name?',
      timestamp: '2:31 PM',
    },
  ];

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setInputValue('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.headerSection}>
        <h1 className={styles.mainHeading}>
          Effortless replies.
          <br />
          Always on.
        </h1>

        <p className={styles.subHeading}>
          Every DM, and chat, answered automatically, in your tone 24/7
        </p>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.cardWrapper}>
          <div className={styles.cardContent}>
            <div className={styles.leftColumn}>
              <div className={styles.setupInfo}>
                <h2 className={styles.setupHeading}>
                  Let&apos;s get your
                  <br />
                  AI agent set up.
                </h2>

                <p className={styles.setupDescription}>
                  It only takes a few minutes.
                  <br />
                  We&apos;ll guide you through each step.
                </p>

                <button className={styles.helpLink}>Need Help?</button>
              </div>

              {!isTablet && (
                <div className={styles.stepsList}>
                  {steps.map((step, index) => (
                    <div
                      key={index}
                      className={`${styles.stepItem} ${
                        step.active ? styles.active : ''
                      }`}
                    >
                      <div className={styles.stepIndicator}></div>
                      <span className={styles.stepText}>
                        Step {step.number} - {step.text}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Card className={styles.chatCard}>
              <div className={styles.chatHeader}>
                <div className={styles.avatarContainer}>
                  <ChatIcon />
                </div>

                <div className={styles.headerContent}>
                  <div className={styles.stepProgress}>
                    Step {currentStep} of 3
                  </div>

                  <StepProgress
                    currentStep={currentStep - 1}
                    totalSteps={3}
                    className={styles.progressBars}
                  />
                </div>
              </div>

              <CardContent className={styles.chatMessages}>
                {chatMessages.map((chat, index) => (
                  <div key={index} className={styles.messageContainer}>
                    <div className={styles.messageAvatar}>
                      <ChatIcon />
                    </div>
                    <div className={styles.messageBubble}>
                      <p className={styles.messageText}>{chat.message}</p>
                      <span className={styles.timestamp}>{chat.timestamp}</span>
                    </div>
                  </div>
                ))}

                <div className={styles.typingIndicator}>
                  <span className={styles.typingText}>
                    ChatAgent is typing...
                  </span>
                </div>
              </CardContent>

              <div className={styles.chatInput}>
                <button className={styles.attachButton}>
                  <ChatAttachmentIcon />
                </button>

                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type here..."
                  className={styles.inputField}
                />

                <button
                  className={styles.sendButton}
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                >
                  <ChatSendIcon />
                </button>
              </div>
            </Card>
          </div>
          {isTablet && (
            <div className={styles.stepsList} style={{ marginTop: '40px' }}>
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`${styles.stepItem} ${
                    step.active ? styles.active : ''
                  }`}
                >
                  <div className={styles.stepIndicator}></div>
                  <span className={styles.stepText}>
                    Step {step.number} - {step.text}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
