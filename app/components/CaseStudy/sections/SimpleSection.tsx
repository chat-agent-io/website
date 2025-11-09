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

export const SimpleSection: React.FC<{ section: Section }> = ({ section }) => {
  return (
    <div>
      <BlockRenderer blocks={section.blocks} layout="simple" sectionTitle={section.title} />
    </div>
  );
};
