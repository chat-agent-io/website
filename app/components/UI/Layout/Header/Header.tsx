import React from 'react';
import Image from 'next/image';
import { Button } from '../../Button';
import { Navigation } from '../../Navigation';
import styles from './Header.module.scss';
import { Logo } from '@/app/assets/icons/Logo';

export const Header = (): JSX.Element => {
  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Pricing', href: '#' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Logo />
        <span>ChatAgent</span>
      </div>

      <Navigation items={navItems} className={styles.navigation} />

      <div className={styles.buttonContainer}>
        <Button variant="black" size="sm">
          Sign in
        </Button>
      </div>
    </header>
  );
};
