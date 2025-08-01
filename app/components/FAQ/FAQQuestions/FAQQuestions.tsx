'use client';

import React from 'react';
import { FAQQuestion } from '../FAQQuestion/FAQQuestion';
import styles from './FAQQuestions.module.scss';
import { FAQQuestionData } from '../FAQData';

interface ExtendedFAQQuestionData extends FAQQuestionData {
  category?: string;
}

interface FAQQuestionsProps {
  questions: ExtendedFAQQuestionData[];
}

export const FAQQuestions: React.FC<FAQQuestionsProps> = ({ questions }) => {
  return (
    <div className={styles.questionsContainer}>
      <div className={styles.questionsList}>
        {questions.map((question, index) => (
          <FAQQuestion key={index} question={question} />
        ))}
      </div>
    </div>
  );
};
