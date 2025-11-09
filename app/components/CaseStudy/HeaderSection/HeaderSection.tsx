import React from 'react';
import styles from '../../CaseStudy/HeaderSection/HeaderSection.module.scss';

interface HeaderSectionProps {
  title: string;
  description?: string | null;
  centered?: boolean;
}

export const HeaderSection: React.FC<HeaderSectionProps> = ({
  title,
  description,
  centered = true,
}) => {
  return (
    <div className={styles.headerSection}>
      <div className={styles.sectionHeading}>
        <h2 className={styles.sectionTitle}>{title}</h2>
      </div>
      {description && (
        <div className={styles.sectionText}>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};
