'use client';

import React, { useState } from 'react';
import { Button } from '../../Button';
import { Navigation } from '../../Navigation';
import styles from './PreFooterNav.module.scss';
import { Logo } from '@/app/assets/icons/Logo';
import Link from 'next/link';
import { HamburgerIcon } from '@/app/assets/icons/HamburgerIcon';
import { MobileMenu } from '../MobileMenu';

export const PreFooterNav = (): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'FAQs', href: '/faq' },
  ];

  const mobileNavItems = [
    {
      label: 'Home',
      href: '/',
      description: 'AI-powered customer service solutions',
    },
    {
      label: 'Pricing',
      href: '/pricing',
      description: 'Flexible plans for every business size',
    },
    {
      label: 'FAQs',
      href: '/faq',
      description: 'Frequently asked questions about our service',
    },
    {
      label: 'Customer Stories',
      href: '/customers',
      description: 'Success stories from our clients',
    },
    {
      label: 'Support',
      href: '/support',
      description: 'Get help when you need it',
    },
  ];

  return (
    <div className={styles.preFooterNavWrapper}>
      <nav className={styles.preFooterNav}>
        <Link href="/" className={styles.logoContainer}>
          <Logo />
          <span>ChatAgent</span>
        </Link>

        <Navigation items={navItems} className={styles.navigation} />

        <div className={styles.buttonContainer}>
          <Button
            variant="gradient"
            size="sm"
            onClick={() => window.location.href = 'https://portal.chatagent.io/auth/signup'}
          >
            Start Free Trial
          </Button>

          <Button
            variant="black"
            size="sm"
            onClick={() => window.location.href = 'https://portal.chatagent.io/'}
          >
            Sign in
          </Button>
        </div>

        <button
          className={styles.hamburgerButton}
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <HamburgerIcon />
        </button>

        <MobileMenu
          navItems={mobileNavItems}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </nav>
    </div>
  );
};
