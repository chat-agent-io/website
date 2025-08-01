'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './FAQQuestion.module.scss';
import { FAQQuestionData } from '../FAQData';

interface FAQQuestionProps {
  question: FAQQuestionData;
}

export const FAQQuestion: React.FC<FAQQuestionProps> = ({ question }) => {
  const [isOpen, setIsOpen] = useState(false);
  const IconComponent = question.icon;

  return (
    <div className={styles.questionContainer}>
      <div className={styles.iconContainer}>
        <div className={styles.iconWrapper}>
          <IconComponent />
        </div>
      </div>
      <div className={styles.questionFrame}>
        <div className={styles.questionContent}>
          <div className={styles.questionHeader}>
            <h3 className={styles.questionText}>{question.question}</h3>
          </div>
          <div
            className={`${styles.answerContainer} ${
              isOpen ? styles.expanded : ''
            }`}
          >
            <p className={styles.answerText}>{question.answer}</p>
          </div>
        </div>
        <button
          className={`${styles.arrowButton} ${isOpen ? styles.rotated : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          <ChevronDown className={styles.arrowIcon} />
        </button>
      </div>
    </div>
  );
};
