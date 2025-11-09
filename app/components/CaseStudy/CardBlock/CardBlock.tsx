import React from 'react';
import Image from 'next/image';
import styles from './CardBlock.module.scss';

interface Card {
  id: number;
  title: string;
  type: 'section' | 'image' | 'icon' | 'number';
  image: string | null;
  value: string | null;
  text_align: 'left' | 'center' | 'right';
  description: string;
  section_title: string | null;
  section_image: string | null;
}

interface CardBlockProps {
  blocks: Card[];
  layout?: 'simple' | 'grid';
  sectionTitle?: string;
}

export const CardBlock: React.FC<CardBlockProps> = ({
  blocks,
  layout = 'simple',
  sectionTitle,
}) => {
  const containerClass =
    layout === 'grid' ? styles.gridContainer : styles.simpleContainer;

  return (
    <div className={containerClass}>
      {blocks.map((card) => (
        <div
          key={card.id}
          className={styles.card}
          style={{ textAlign: card.text_align as any }}
        >
          {card.type === 'image' && card.image && (
            <div className={styles.cardImage}>
              <Image
                src={card.image}
                alt={card.title}
                width={300}
                height={200}
                unoptimized
              />
            </div>
          )}

          {card.type === 'icon' && card.image && (
            <div className={styles.iconContainer}>
              <Image
                src={card.image}
                alt={card.title}
                width={64}
                height={64}
                unoptimized
              />
            </div>
          )}

          {card.type === 'number' && card.value && (
            <div className={styles.numberBadge}>{card.value}</div>
          )}

          {card.type === 'section' && card.section_image && (
            <div className={styles.sectionImageContainer}>
              <Image
                src={card.section_image}
                alt={card.section_title || ''}
                width={300}
                height={200}
                unoptimized
              />
            </div>
          )}

          <div className={styles.cardContent}>
            {card.type === 'section' && card.section_title && (
              <h4 className={styles.sectionTitle}>{card.section_title}</h4>
            )}

            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardDescription}>{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
