import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '../../Button';
import styles from './MobileMenu.module.scss';
import { Logo } from '@/app/assets/icons/Logo';

interface NavigationItem {
  label: string;
  href: string;
  description?: string;
}

interface MobileMenuProps {
  navItems?: NavigationItem[];
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  navItems = [
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
  ],
  isOpen,
  setIsOpen,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  const closeMenu = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimating(true);
        });
      });
    } else {
      setIsAnimating(false);
      setShouldRender(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, closeMenu]);

  if (!shouldRender) return null;

  return (
    <>
      <div
        className={`${styles.overlay} ${isAnimating ? styles.visible : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <nav
        className={`${styles.mobileMenu} ${isAnimating ? styles.open : ''}`}
        aria-hidden={!isOpen}
      >
        <div className={styles.menuHeader}>
          <Link href="/" className={styles.logoContainer} onClick={closeMenu}>
            <Logo />
            <span>ChatAgent</span>
          </Link>

          <button
            className={styles.closeButton}
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="#03010c"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className={styles.menuContent}>
          <div className={styles.navigationSection}>
            <ul className={styles.navList}>
              {navItems.map((item, index) => (
                <li key={index} className={styles.navItem}>
                  <Link
                    href={item.href}
                    className={styles.navLink}
                    onClick={closeMenu}
                  >
                    <span className={styles.navLabel}>{item.label}</span>
                    {item.description && (
                      <span className={styles.navDescription}>
                        {item.description}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.actionSection}>
            <Button variant="outline" size="lg" full onClick={closeMenu}>
              Sign in
            </Button>
            <Button variant="black" size="lg" full onClick={closeMenu}>
              Get Started
            </Button>
          </div>

          <div className={styles.footerSection}>
            <div className={styles.supportInfo}>
              <h4 className={styles.supportTitle}>Need Help?</h4>
              <p className={styles.supportText}>
                Contact our support team for assistance
              </p>
              <a
                href="mailto:support@chatagent.io"
                className={styles.supportLink}
              >
                support@chatagent.io
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
