import React from 'react';
import { BlockCard } from './blocks/BlockCard';
import { BlockStatistic } from './blocks/BlockStatistic';
import { BlockFaq } from './blocks/BlockFaq';
import { BlockBanner } from './blocks/BlockBanner';

export interface Block {
  id: number;
  collection: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  item: Record<string, any>;
}

interface BlockRendererProps {
  block: Block;
  layout?: 'row' | 'grid';
  isFirstCard?: boolean;
}

export const BlockRenderer: React.FC<BlockRendererProps> = ({ block, layout = 'row', isFirstCard = false }) => {
  switch (block.collection) {
    case 'block_statistics':
      return <BlockStatistic {...(block.item as Parameters<typeof BlockStatistic>[0])} />;

    case 'block_card':
      return <BlockCard {...(block.item as Parameters<typeof BlockCard>[0])} layout={layout} isFirstCard={isFirstCard} />;

    case 'block_faqs':
      return <BlockFaq {...(block.item as Parameters<typeof BlockFaq>[0])} />;

    case 'block_banner':
      return <BlockBanner {...(block.item as Parameters<typeof BlockBanner>[0])} />;

    default:
      console.warn(`Unknown block collection: ${block.collection}`);
      return null;
  }
};
