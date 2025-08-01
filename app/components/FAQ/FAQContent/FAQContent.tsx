'use client';

import React, { useState, useMemo } from 'react';
import { FAQHeader } from '../FAQHeader/FAQHeader';
import { FAQCategories } from '../FAQCategories/FAQCategories';
import { FAQQuestions } from '../FAQQuestions/FAQQuestions';
import { FAQData, FAQQuestionData } from '../FAQData';
import styles from './FAQContent.module.scss';

export const FAQContent: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('General');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredQuestions = useMemo(() => {
    // If no search query, show questions from selected category
    if (!searchQuery.trim()) {
      const categoryData = FAQData.find((cat) => cat.name === selectedCategory);
      return categoryData ? categoryData.questions : [];
    }

    // If there's a search query, search across all categories
    const searchLower = searchQuery.toLowerCase();
    const allMatchingQuestions: (FAQQuestionData & { category: string })[] = [];

    FAQData.forEach((category) => {
      const matchingQuestions = category.questions.filter(
        (question) =>
          question.question.toLowerCase().includes(searchLower) ||
          question.answer.toLowerCase().includes(searchLower)
      );

      // Add category information to each matching question
      matchingQuestions.forEach((question) => {
        allMatchingQuestions.push({
          ...question,
          category: category.name,
        });
      });
    });

    return allMatchingQuestions;
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
