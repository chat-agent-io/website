import React from 'react';
import { StatisticsBlock } from '../StatisticsBlock/StatisticsBlock';
import { CardBlock } from '../CardBlock/CardBlock';
import { FAQsBlock } from '../FAQsBlock/FAQsBlock';
import { BannerBlock } from '../BannerBlock/BannerBlock';
import styles from './Section.module.scss';

interface Block {
  id: number;
  studies_sections_id: number;
  collection: string;
  item: Record<string, any>;
}

interface SectionProps {
  title: string;
  description?: string | null;
  notice?: string | null;
  type: 'simple' | 'grid';
  blocks: Block[];
}

export const Section: React.FC<SectionProps> = ({
  title,
  description,
  notice,
  type,
  blocks,
}) => {
  const groupedBlocks = groupBlocksByCollection(blocks);

  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        {description && <p className={styles.sectionDescription}>{description}</p>}
      </div>

      <div className={styles.sectionContent}>
        {groupedBlocks.statistics.length > 0 && (
          <StatisticsBlock
            blocks={groupedBlocks.statistics.map((b) => b.item)}
          />
        )}

        {groupedBlocks.cards.length > 0 && (
          <CardBlock
            blocks={groupedBlocks.cards.map((b) => b.item)}
            layout={type}
            sectionTitle={title}
          />
        )}

        {groupedBlocks.faqs.length > 0 && (
          <FAQsBlock blocks={groupedBlocks.faqs.map((b) => b.item)} />
        )}

        {groupedBlocks.banners.length > 0 && (
          <BannerBlock blocks={groupedBlocks.banners.map((b) => b.item)} />
        )}
      </div>

      {notice && <div className={styles.notice}>{notice}</div>}
    </section>
  );
};

function groupBlocksByCollection(
  blocks: Block[]
): {
  statistics: Block[];
  cards: Block[];
  faqs: Block[];
  banners: Block[];
} {
  return {
    statistics: blocks.filter((b) => b.collection === 'block_statistics'),
    cards: blocks.filter((b) => b.collection === 'block_card'),
    faqs: blocks.filter((b) => b.collection === 'block_faqs'),
    banners: blocks.filter((b) => b.collection === 'block_banner'),
  };
}
