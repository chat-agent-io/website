'use client';

import React from 'react';
import { Button } from '../../Button';
import { Navigation } from '../../Navigation';
import styles from './Header.module.scss';
import { Logo } from '@/app/assets/icons/Logo';
import Link from 'next/link';
import { useMediaQuery } from '@/app/hooks/useMediaQuery';
import { HamburgerIcon } from '@/app/assets/icons/HamburgerIcon';

export const Header = (): React.ReactElement => {
  const isTablet = useMediaQuery('900');

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Pricing', href: '/pricing' },
  ];

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoContainer}>
        <Logo />
        <span>ChatAgent</span>
      </Link>

      {isTablet ? (
        <HamburgerIcon />
      ) : (
        <>
          <Navigation items={navItems} className={styles.navigation} />

          <div className={styles.buttonContainer}>
            <Button variant="black" size="sm">
              Sign in
            </Button>
          </div>
        </>
      )}
    </header>
  );
};
