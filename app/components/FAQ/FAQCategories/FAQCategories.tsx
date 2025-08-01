'use client';

import React, { useState } from 'react';
import { Search } from 'lucide-react';
import styles from './FAQCategories.module.scss';

interface FAQCategoriesProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const categories = [
  'General',
  'Setup & Onboarding',
  'Pricing & Plans',
  'Features & Capabilities',
  'Security & Privacy',
  'Support & Troubleshooting',
  'Multi-Location & Partnerships'
];

export const FAQCategories: React.FC<FAQCategoriesProps> = ({
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
}) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleSearchClick = () => {
    setIsSearchVisible(true);
  };

  const handleSearchBlur = () => {
    if (!searchQuery.trim()) {
      setIsSearchVisible(false);
    }
  };

  const handleSearchFocus = () => {
    setIsSearchVisible(true);
  };

  return (
    <div className={styles.categoriesContainer}>
      <div className={styles.searchAndCategories}>
        <div className={styles.categoriesRow}>
          <div className={`${styles.searchBox} ${isSearchVisible ? styles.visible : ''}`}>
            <Search className={styles.searchIcon} onClick={handleSearchClick} />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              onBlur={handleSearchBlur}
              onFocus={handleSearchFocus}
              className={styles.searchInput}
            />
          </div>
          {categories.slice(0, 4).map((category) => (
            <button
              key={category}
              className={`${styles.categoryButton} ${
                selectedCategory === category ? styles.selected : ''
              }`}
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className={styles.categoriesRow}>
          {categories.slice(4).map((category) => (
            <button
              key={category}
              className={`${styles.categoryButton} ${
                selectedCategory === category ? styles.selected : ''
              }`}
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}; 