import React from 'react';
import Image from 'next/image';
import styles from './BannerBlock.module.scss';

interface Banner {
  id: number;
  title: string;
  description: string;
  button_name: string;
  button_link: string | null;
}

interface BannerBlockProps {
  blocks: Banner[];
}

export const BannerBlock: React.FC<BannerBlockProps> = ({ blocks }) => {
  if (blocks.length === 0) return null;

  const banner = blocks[0];

  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerContent}>
        <div className={styles.textContent}>
          <h2 className={styles.bannerTitle}>{banner.title}</h2>
          <p className={styles.bannerDescription}>{banner.description}</p>
        </div>

        <button
          className={styles.bannerButton}
          onClick={() => {
            window.location.href =
              banner.button_link || 'https://portal.chatagent.io/auth/signup';
          }}
        >
          {banner.button_name}
        </button>
      </div>
    </div>
  );
};
