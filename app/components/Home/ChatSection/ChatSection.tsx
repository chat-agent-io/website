'use client';

import { ImageIcon, SendIcon } from 'lucide-react';
import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '../../UI/Card';
import { StepProgress } from '../../UI/ProgressBar';
import styles from './ChatSection.module.scss';

export const ChatSetupSection = (): JSX.Element => {
  const [currentStep, setCurrentStep] = useState(1);
  const [inputValue, setInputValue] = useState('');

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
      message: "👋 Hi there!\nLet's setup your AI agent together...",
      timestamp: '2:30 PM',
    },
    {
      message: 'Step 1 - Could you please tell me your business name?',
      timestamp: '2:31 PM',
    },
  ];

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      // Handle message sending logic here
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
          <span className={styles.highlight}>Always on.</span>
        </h1>

        <p className={styles.subHeading}>
          Every DM, and chat, answered automatically, in your tone 24/7
        </p>
      </div>

      <div className={styles.contentWrapper}>
        <Card className={styles.mainCard} variant="elevated">
          <div className={styles.cardContent}>
            <div className={styles.leftColumn}>
              <div className={styles.setupInfo}>
                <h2 className={styles.setupHeading}>
                  Let&apos;s get your
                  <br />
                  <span className={styles.gradientText}>AI agent set up.</span>
                </h2>

                <p className={styles.setupDescription}>
                  It only takes a few minutes.
                  <br />
                  We&apos;ll guide you through each step.
                </p>

                <button className={styles.helpLink}>
                  Need Help? Contact Support
                </button>
              </div>

              <div className={styles.stepsList}>
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className={`${styles.stepItem} ${
                      step.active ? styles.active : ''
                    }`}
                  >
                    <div className={styles.stepIndicator}>
                      {step.active ? (
                        <div className={styles.activeIndicator} />
                      ) : (
                        <span className={styles.stepNumber}>{step.number}</span>
                      )}
                    </div>
                    <span className={styles.stepText}>
                      Step {step.number} - {step.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <Card className={styles.chatCard} variant="outlined">
              <div className={styles.chatHeader}>
                <div className={styles.avatarContainer}>
                  <Image
                    src="/union.svg"
                    alt="AI Assistant"
                    width={16}
                    height={14}
                    className={styles.avatar}
                  />
                </div>

                <div className={styles.stepProgress}>
                  Step {currentStep} of 3
                </div>

                <StepProgress
                  currentStep={currentStep}
                  totalSteps={3}
                  className={styles.progressBars}
                />
              </div>

              <CardContent className={styles.chatMessages}>
                {chatMessages.map((chat, index) => (
                  <div key={index} className={styles.messageContainer}>
                    <div className={styles.messageAvatar}>
                      <Image
                        src="/union.svg"
                        alt="AI Assistant"
                        width={16}
                        height={14}
                        className={styles.avatar}
                      />
                    </div>
                    <div className={styles.messageBubble}>
                      <p className={styles.messageText}>{chat.message}</p>
                      <span className={styles.timestamp}>{chat.timestamp}</span>
                    </div>
                  </div>
                ))}

                <div className={styles.typingIndicator}>
                  <div className={styles.typingDots}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className={styles.typingText}>
                    ChatAgent is typing...
                  </span>
                </div>
              </CardContent>

              <div className={styles.chatInput}>
                <button className={styles.attachButton}>
                  <ImageIcon className={styles.inputIcon} />
                </button>

                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your business name here..."
                  className={styles.inputField}
                />

                <button
                  className={styles.sendButton}
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                >
                  <SendIcon className={styles.sendIcon} />
                </button>
              </div>
            </Card>
          </div>
        </Card>
      </div>
    </section>
  );
};
