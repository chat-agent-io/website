'use client';

import React, { useState } from 'react';
import { Button } from '../../Button';
import { Navigation } from '../../Navigation';
import styles from './Header.module.scss';
import { Logo } from '@/app/assets/icons/Logo';
import Link from 'next/link';
import { HamburgerIcon } from '@/app/assets/icons/HamburgerIcon';
import { MobileMenu } from '../MobileMenu';

export const Header = (): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'FAQ', href: '/faq' },
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
      label: 'How it Works',
      href: '/how-it-works',
      description: 'Learn about our AI technology',
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
    {
      label: 'FAQ',
      href: '/faq',
      description: 'Frequently asked questions',
    },
  ];

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoContainer}>
        <Logo />
        <span>ChatAgent</span>
      </Link>

      <Navigation items={navItems} className={styles.navigation} />

      <div className={styles.buttonContainer}>
        <Button variant="gradient" size="sm">
          Start Free Trial
        </Button>

        <Button variant="black" size="sm">
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
    </header>
  );
};
