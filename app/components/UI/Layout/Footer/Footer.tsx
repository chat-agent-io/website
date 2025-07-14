import React from 'react';
import Image from 'next/image';
import { Accordion } from '../../Accordion';
import styles from './Footer.module.scss';
import { DarkLogo } from '@/app/assets/icons/DarkLogo';
import { LinkedInIcon } from '@/app/assets/icons/LinkedInIcon';
import { FacebookIcon } from '@/app/assets/icons/FacebookIcon';
import { InstagramIcon } from '@/app/assets/icons/InstagramIcon';
import { YoutubeIcon } from '@/app/assets/icons/YoutubeIcon';
import { TranslateIcon } from '@/app/assets/icons/TranslateIcon';

export const Footer = (): React.ReactElement => {
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

  const accordionItems = footerNavigation.map((category, index) => ({
    title: category.title,
    value: `item-${index}`,
    content: (
      <div className={styles.accordionContent}>
        {category.links.map((link, linkIndex) => (
          <a key={linkIndex} href="#" className={styles.accordionLink}>
            {link}
          </a>
        ))}
      </div>
    ),
  }));

  return (
    <footer className={styles.footer}>
      {/* Desktop Navigation */}
      <div className={styles.desktopNav}>
        <div className={styles.logoSection}>
          <DarkLogo />
          <span>ChatAgent</span>
        </div>

        <div className={styles.navCategories}>
          {footerNavigation.map((category, index) => (
            <div key={`footer-category-${index}`} className={styles.category}>
              <h4 className={styles.categoryTitle}>{category.title}</h4>

              <div className={styles.categoryLinks}>
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
          ))}
        </div>

        <div className={styles.socialSection}>
          <div className={styles.socialIcons}>
            <LinkedInIcon />
            <FacebookIcon />
            <InstagramIcon />
            <YoutubeIcon />
          </div>
          <div className={styles.translateButton}>
            <TranslateIcon />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={styles.mobileNav}>
        <div className={styles.mobileLogoContainer}>
          <Image
            src="/logo-button.svg"
            alt="ChatAgent Logo"
            width={80}
            height={32}
            className={styles.logo}
          />
        </div>

        <Accordion
          items={accordionItems}
          type="multiple"
          className={styles.accordion}
        />

        <div className={styles.mobileSocialSection}>
          <Image
            src="/icons.svg"
            alt="Social media icons"
            width={120}
            height={32}
          />
          <Image
            src="/translate-button.svg"
            alt="Language selector"
            width={100}
            height={32}
          />
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
