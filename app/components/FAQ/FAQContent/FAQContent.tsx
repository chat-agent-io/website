'use client';

import React, { useState, useMemo } from 'react';
import { FAQHeader } from '../FAQHeader/FAQHeader';
import { FAQCategories } from '../FAQCategories/FAQCategories';
import { FAQQuestions } from '../FAQQuestions/FAQQuestions';
import { FAQData } from '../FAQData';
import styles from './FAQContent.module.scss';

export const FAQContent: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('General');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredQuestions = useMemo(() => {
    const categoryData = FAQData.find((cat) => cat.name === selectedCategory);
    if (!categoryData) return [];

    if (!searchQuery.trim()) {
      return categoryData.questions;
    }

    return categoryData.questions.filter(
      (question) =>
        question.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        question.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [selectedCategory, searchQuery]);

  return (
    <div className={styles.faqContent}>
      <FAQHeader />
      <div className={styles.faqBody}>
        <FAQCategories
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
        <FAQQuestions questions={filteredQuestions} />
      </div>
    </div>
  );
};
