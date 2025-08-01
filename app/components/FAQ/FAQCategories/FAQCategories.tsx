'use client';

import React, { useState, useEffect } from 'react';
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
  'Multi-Location & Partnerships',
];

export const FAQCategories: React.FC<FAQCategoriesProps> = ({
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
}) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  // Clear selected category when search query is entered
  useEffect(() => {
    if (searchQuery.trim() && selectedCategory !== '') {
      onCategoryChange('');
    }
  }, [searchQuery, selectedCategory, onCategoryChange]);

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

  const handleCategoryClick = (category: string) => {
    onSearchChange(''); // Clear search when selecting a category
    onCategoryChange(category);
  };

  return (
    <div className={styles.categoriesContainer}>
      <div className={styles.searchAndCategories}>
        <div className={styles.categoriesRow}>
          <div
            className={`${styles.searchBox} ${
              isSearchVisible ? styles.visible : ''
            }`}
            onClick={handleSearchClick}
          >
            <Search className={styles.searchIcon} />
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
              onClick={() => handleCategoryClick(category)}
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
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
