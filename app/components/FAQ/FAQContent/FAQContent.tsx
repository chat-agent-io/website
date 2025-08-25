'use client';

import React, { useState, useMemo } from 'react';
import { FAQHeader } from '../FAQHeader/FAQHeader';
import { FAQCategories } from '../FAQCategories/FAQCategories';
import { FAQQuestions } from '../FAQQuestions/FAQQuestions';
import { FAQData, FAQQuestionData } from '../FAQData';
import { useMediaQuery } from '@/app/hooks/useMediaQuery';
import { Search } from 'lucide-react';
import styles from './FAQContent.module.scss';

const categories = [
  'General',
  'Setup & Onboarding',
  'Pricing & Plans',
  'Multi-Location & Partnerships',
  'Security & Privacy',
  'Features & Capabilities',
  'Support & Troubleshooting',
];

export const FAQContent: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('General');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedCategories, setExpandedCategories] = useState<string[]>([
    'General',
  ]);
  const isMobile = useMediaQuery('768');

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

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleCategoryClick = (category: string) => {
    setSearchQuery(''); // Clear search when selecting a category
    setSelectedCategory(category);
    if (isMobile && !expandedCategories.includes(category)) {
      toggleCategory(category);
    }
  };

  const renderMobileCategories = () => (
    <div className={styles.mobileCategoriesContainer}>
      {categories.map((category) => {
        const categoryData = FAQData.find((cat) => cat.name === category);
        const isExpanded = expandedCategories.includes(category);

        return (
          <div key={category} className={styles.mobileCategoryItem}>
            <div
              className={styles.mobileCategoryHeader}
              onClick={() => toggleCategory(category)}
            >
              <span className={styles.mobileCategoryTitle}>{category}</span>
              <div
                className={`${styles.mobileCategoryArrow} ${
                  isExpanded ? styles.expanded : ''
                }`}
              >
                <svg width="13" height="8" viewBox="0 0 13 8" fill="none">
                  <path
                    d="M1 1L6.5 6.5L12 1"
                    stroke="#B3B2B6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            {isExpanded && categoryData && (
              <div className={styles.mobileCategoryQuestions}>
                {categoryData.questions.map((question, index) => (
                  <div key={index}>
                    <div className={styles.mobileQuestionAnswer}>
                      <div className={styles.mobileQuestion}>
                        {question.question}
                      </div>
                      <div className={styles.mobileAnswer}>
                        {question.answer}
                      </div>
                    </div>
                    {index < categoryData.questions.length - 1 && (
                      <div className={styles.mobileSeparator}></div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <div className={styles.faqContent}>
      <FAQHeader />
      {isMobile ? (
        <div className={styles.faqMobileBody}>
          {/* Mobile Search Box */}
          <div className={styles.mobileSearchContainer}>
            <div className={styles.mobileSearchBox}>
              <Search className={styles.mobileSearchIcon} />
              <input
                type="text"
                placeholder="Search questions"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.mobileSearchInput}
              />
            </div>
          </div>

          {/* Mobile Categories List or Search Results */}
          {!searchQuery.trim() ? (
            renderMobileCategories()
          ) : (
            <div className={styles.mobileSearchResults}>
              {filteredQuestions.map((question, index) => (
                <div key={index}>
                  <div className={styles.mobileQuestionAnswer}>
                    <div className={styles.mobileQuestion}>
                      {question.question}
                    </div>
                    <div className={styles.mobileAnswer}>{question.answer}</div>
                  </div>
                  {index < filteredQuestions.length - 1 && (
                    <div className={styles.mobileSeparator}></div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className={styles.faqBody}>
          <FAQCategories
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
          <FAQQuestions questions={filteredQuestions} />
        </div>
      )}
    </div>
  );
};
