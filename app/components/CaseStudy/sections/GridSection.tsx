import React from 'react';
import { BlockRenderer } from '../blocks/BlockRenderer';

interface Block {
  id: number;
  studies_sections_id: number;
  collection: string;
  item: Record<string, any>;
}

interface Section {
  id: number;
  title: string;
  description: string | null;
  notice: string | null;
  study: number;
  type: 'simple' | 'grid' | string;
  blocks: Block[];
}

export const GridSection: React.FC<{ section: Section }> = ({ section }) => {
  return (
    <div>
      <BlockRenderer blocks={section.blocks} layout="grid" sectionTitle={section.title} />
    </div>
  );
};
