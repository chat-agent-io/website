import React from 'react';
import styles from './Card.module.scss';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'outlined';
  radius?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = 'default',
  radius = '16px',
}) => {
  return (
    <div
      className={`${styles.card} ${styles[variant]} ${className || ''}`}
      style={{ borderRadius: radius }}
    >
      {children}
    </div>
  );
};

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({
  children,
  className,
}) => {
  return (
    <div className={`${styles.content} ${className || ''}`}>{children}</div>
  );
};
