import React from 'react';
import styles from './Separator.module.scss';

interface SeparatorProps {
  className?: string;
}

export const Separator: React.FC<SeparatorProps> = ({ className = '' }) => {
  return <div className={`${styles.separator} ${className}`} />;
};
