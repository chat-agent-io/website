import React from 'react';
import Image from 'next/image';
import { Button } from '../../Button';
import { Navigation } from '../../Navigation';
import styles from './Header.module.scss';

export const Header = (): JSX.Element => {
  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Pricing', href: '#' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image
          src="/logo-frame.svg"
          alt="ChatAgent Logo"
          width={120}
          height={32}
          className={styles.logo}
        />
      </div>

      <Navigation items={navItems} className={styles.navigation} />

      <div className={styles.buttonContainer}>
        <Button variant="primary" size="md">
          Sign in
        </Button>
      </div>
    </header>
  );
};
