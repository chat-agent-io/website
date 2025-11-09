import React from 'react';
import styles from './BlockBanner.module.scss';

interface BlockBannerProps {
  id: number;
  title: string;
  description: string;
  button_name: string;
  button_link?: string | null;
}

export const BlockBanner: React.FC<BlockBannerProps> = ({
  title,
  description,
  button_name,
}) => {
  return (
    <div className={styles.bannerFrame}>
      <div className={styles.bannerBackground} />
      <div className={styles.logoAndText}>
        <div className={styles.logoButton}>
          <svg width="150" height="24" viewBox="0 0 150 24" fill="none">
            <text x="0" y="18" fill="#03010C" fontFamily="Onest" fontSize="20" fontWeight="600">
              ChatAgent
            </text>
          </svg>
        </div>
        <div className={styles.bannerTextContent}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className={styles.containerButton}>
        <button className={styles.buttonPrimary}>
          {button_name}
        </button>
      </div>
    </div>
  );
};
