import React, { useState } from 'react';
import styles from './DesktopFooter.module.scss';
import { DarkLogo } from '@/app/assets/icons/DarkLogo';
import { LinkedInIcon } from '@/app/assets/icons/LinkedInIcon';
import { FacebookIcon } from '@/app/assets/icons/FacebookIcon';
import { InstagramIcon } from '@/app/assets/icons/InstagramIcon';
import { YoutubeIcon } from '@/app/assets/icons/YoutubeIcon';
import { TranslateIcon } from '@/app/assets/icons/TranslateIcon';
import { UpArrowIcon } from '@/app/assets/icons/UpArrowIcon';
import { DownArrowIcon } from '@/app/assets/icons/DownArrowIcon';
import { LanguageDropdown } from '../../LanguageSelection';

export const DesktopFooter = (): React.ReactElement => {
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [collapsedCategories, setCollapsedCategories] = useState<Set<number>>(
    new Set()
  );

  const footerNavigation = [
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Blog', 'Contact Us'],
    },
    {
      title: 'Product',
      links: [
        'How it Works',
        'Customer Stories',
        'Pricing Plans',
        'Integrations (soon)',
      ],
    },
    {
      title: 'Support',
      links: ['WhatsApp Support'],
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms of Service'],
    },
    {
      title: 'Contact',
      links: ['support@chatagent.io'],
    },
  ];

  const handleLanguageSelect = (languageCode: string) => {
    setSelectedLanguage(languageCode);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const toggleCategory = (categoryIndex: number) => {
    const newCollapsedCategories = new Set(collapsedCategories);
    if (newCollapsedCategories.has(categoryIndex)) {
      newCollapsedCategories.delete(categoryIndex);
    } else {
      newCollapsedCategories.add(categoryIndex);
    }
    setCollapsedCategories(newCollapsedCategories);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.desktopNav}>
        <div className={styles.logoSection}>
          <DarkLogo />
          <span>ChatAgent</span>
        </div>

        <div className={styles.navCategories}>
          {footerNavigation.map((category, index) => {
            const isCollapsed = collapsedCategories.has(index);

            return (
              <div key={`footer-category-${index}`} className={styles.category}>
                <div
                  className={styles.categoryHeader}
                  onClick={() => toggleCategory(index)}
                  style={{ border: !isCollapsed ? 'none' : '' }}
                >
                  <h4 className={styles.categoryTitle}>{category.title}</h4>
                  <div
                    className={`${styles.arrowIcon} ${
                      isCollapsed ? styles.collapsed : ''
                    }`}
                  >
                    <UpArrowIcon />
                  </div>
                </div>

                <div
                  className={`${styles.categoryLinks} ${
                    isCollapsed ? styles.collapsed : styles.expanded
                  }`}
                >
                  {category.links.map((link, linkIndex) => (
                    <a
                      key={`footer-link-${index}-${linkIndex}`}
                      href="#"
                      className={styles.categoryLink}
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.socialSection}>
          <div className={styles.socialIcons}>
            <LinkedInIcon />
            <FacebookIcon />
            <InstagramIcon />
            <YoutubeIcon />
          </div>
          <div style={{ position: 'relative' }}>
            <button
              className={styles.translateButton}
              onClick={toggleLanguageDropdown}
            >
              <TranslateIcon />
            </button>
            <LanguageDropdown
              isOpen={isLanguageDropdownOpen}
              onClose={() => setIsLanguageDropdownOpen(false)}
              selectedLanguage={selectedLanguage}
              onLanguageSelect={handleLanguageSelect}
            />
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <div className={styles.copyrightText}>
          © 2025 ChatAgent | All rights reserved.
        </div>
        <div className={styles.poweredBy}>Powered by InstaReply</div>
      </div>
    </footer>
  );
};
