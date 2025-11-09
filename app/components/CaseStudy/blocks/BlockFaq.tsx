import React from 'react';
import styles from './BlockFaq.module.scss';

interface BlockFaqProps {
  id: number;
  question: string;
  answer: string;
}

export const BlockFaq: React.FC<BlockFaqProps> = ({ question, answer }) => {
  return (
    <div className={styles.faqItem}>
      <div className={styles.faqContent}>
        <div className={styles.question}>
          <h3>{question}</h3>
        </div>
        <div className={styles.answer}>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};
