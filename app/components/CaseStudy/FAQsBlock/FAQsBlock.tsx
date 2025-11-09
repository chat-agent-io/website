import React, { useState } from 'react';
import styles from './FAQsBlock.module.scss';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

interface FAQsBlockProps {
  blocks: FAQ[];
}

export const FAQsBlock: React.FC<FAQsBlockProps> = ({ blocks }) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpanded = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className={styles.faqsContainer}>
      {blocks.map((faq) => (
        <div key={faq.id} className={styles.faqItem}>
          <button
            className={styles.questionButton}
            onClick={() => toggleExpanded(faq.id)}
            aria-expanded={expandedId === faq.id}
          >
            <span className={styles.questionText}>{faq.question}</span>
            <span
              className={`${styles.chevron} ${
                expandedId === faq.id ? styles.expanded : ''
              }`}
            >
              ›
            </span>
          </button>

          {expandedId === faq.id && (
            <div className={styles.answerContainer}>
              <p className={styles.answerText}>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
