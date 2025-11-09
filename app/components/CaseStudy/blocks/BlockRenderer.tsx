import React from 'react';
import { StatisticsBlock } from '../../CaseStudy/StatisticsBlock/StatisticsBlock';
import { CardBlock } from '../../CaseStudy/CardBlock/CardBlock';
import { FAQsBlock } from '../../CaseStudy/FAQsBlock/FAQsBlock';
import { BannerBlock } from '../../CaseStudy/BannerBlock/BannerBlock';

interface Block {
  id: number;
  studies_sections_id: number;
  collection: string;
  item: Record<string, any>;
}

interface BlockRendererProps {
  blocks: Block[];
  layout: 'simple' | 'grid';
  sectionTitle?: string;
}

export const BlockRenderer: React.FC<BlockRendererProps> = ({ blocks, layout, sectionTitle }) => {
  const statistics = blocks.filter(b => b.collection === 'block_statistics').map(b => b.item);
  const cards = blocks.filter(b => b.collection === 'block_card').map(b => b.item);
  const faqs = blocks.filter(b => b.collection === 'block_faqs').map(b => b.item);
  const banners = blocks.filter(b => b.collection === 'block_banner').map(b => b.item);

  return (
    <>
      {statistics.length > 0 && <StatisticsBlock blocks={statistics} />}
      {cards.length > 0 && <CardBlock blocks={cards} layout={layout} sectionTitle={sectionTitle} />}
      {faqs.length > 0 && <FAQsBlock blocks={faqs} />}
      {banners.length > 0 && <BannerBlock blocks={banners} />}
    </>
  );
};
