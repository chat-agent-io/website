import React from 'react';
import styles from './HeaderSection.module.scss';

interface HeaderSectionProps {
  title: string;
  description?: string | null;
  notice?: string | null;
}

export const HeaderSection: React.FC<HeaderSectionProps> = ({
  title,
  description,
  notice,
}) => {
  return (
    <div className={styles.header}>
      <div className={styles.heading}>
        <h2 className={styles.title}>{title}</h2>
      </div>
      {description && (
        <div className={styles.subheading}>
          <p className={styles.description}>{description}</p>
        </div>
      )}
      {notice && (
        <div className={styles.notice}>
          <p>{notice}</p>
        </div>
      )}
    </div>
  );
};
