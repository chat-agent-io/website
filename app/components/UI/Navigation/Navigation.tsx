'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Navigation.module.scss';

interface NavigationItem {
  label: string;
  href: string;
}

interface NavigationProps {
  items: NavigationItem[];
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ items, className }) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <nav className={`${styles.navigation} ${className || ''}`}>
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li key={index} className={styles.item}>
            <Link
              href={item.href}
              className={`${styles.link} ${
                activeItem === item.href ? styles.active : ''
              }`}
              onMouseEnter={() => setActiveItem(item.href)}
              onMouseLeave={() => setActiveItem(null)}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
