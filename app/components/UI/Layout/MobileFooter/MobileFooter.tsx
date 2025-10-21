import React, { useState } from 'react';
import styles from './MobileFooter.module.scss';
import { DarkLogo } from '@/app/assets/icons/DarkLogo';
import { TranslateIcon } from '@/app/assets/icons/TranslateIcon';
import { LinkedInIcon } from '@/app/assets/icons/LinkedInIcon';
import { FacebookIcon } from '@/app/assets/icons/FacebookIcon';
import { InstagramIcon } from '@/app/assets/icons/InstagramIcon';
import { YoutubeIcon } from '@/app/assets/icons/YoutubeIcon';
import { LanguageDropdown } from '../../LanguageSelection';
import { UpArrowIcon } from '@/app/assets/icons/UpArrowIcon';

const linkRoutes: Record<string, string> = {
  'About Us': '/about-us',
  Careers: '/careers',
  FAQs: '/faq',
  Pricing: '/pricing',
  'Privacy Policy': '/legal/privacy-policy',
  'Terms & Conditions': '/legal/terms-conditions',
  'Contact Us': '/contact-us',
};

const footerSections = [
  {
    title: 'Company',
    links: ['About Us', 'Careers'],
  },
  {
    title: 'Product',
    links: ['FAQs', 'Industries', 'Pricing'],
  },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms & Conditions'],
  },
  {
    title: 'Contact',
    links: ['Contact Us'],
  },
];

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordion}>
      <div className={styles.accordionItem}>
        <button
          className={styles.accordionTrigger}
          onClick={toggleAccordion}
          aria-expanded={isOpen}
        >
          <span className={styles.accordionTitle}>{title}</span>
          <UpArrowIcon
            className={`${styles.chevron} ${isOpen ? styles.open : ''}`}
          />
        </button>
        <div
          className={`${styles.accordionContent} ${
            isOpen ? styles.open : styles.closed
          }`}
        >
          <div className={styles.accordionContentInner}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export const MobileFooter = (): React.ReactElement => {
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleLanguageSelect = (languageCode: string) => {
    setSelectedLanguage(languageCode);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Logo and translate section */}
          <div className={styles.header}>
            <div className={styles.logoContainer}>
              <DarkLogo className={styles.logo} />
              <span>ChatAgent</span>
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

          <div className={styles.linksContainer}>
            <div className={styles.column}>
              {footerSections.slice(0, 2).map((section, index) => (
                <Accordion key={`section-${index}`} title={section.title}>
                  {section.links.map((link, linkIndex) => (
                    <a
                      key={`link-${linkIndex}`}
                      href={linkRoutes[link] ?? '#'}
                      className={styles.link}
                    >
                      {link}
                    </a>
                  ))}
                </Accordion>
              ))}
            </div>

            <div className={styles.column}>
              {footerSections.slice(2).map((section, index) => (
                <Accordion key={`section-${index + 2}`} title={section.title}>
                  {section.links.map((link, linkIndex) => (
                    <a
                      key={`link-${linkIndex}`}
                      href={linkRoutes[link] ?? '#'}
                      className={styles.link}
                    >
                      {link}
                    </a>
                  ))}
                </Accordion>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <div className={styles.socialIcons}>
          <LinkedInIcon />
          <FacebookIcon />
          <InstagramIcon />
          <YoutubeIcon />
        </div>

        <div className={styles.copyrightContainer}>
          <p className={styles.copyrightText}>
            © 2025 ChatAgent | All rights reserved.
          </p>
          <p className={styles.poweredByText}>Powered by InstaReply</p>
        </div>
      </div>
    </footer>
  );
};
