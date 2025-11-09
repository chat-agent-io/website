import React from 'react';
import { HeaderSection } from './HeaderSection';
import { BlockRenderer } from './blocks/BlockRenderer';

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

export const SectionRenderer: React.FC<{ section: Section }> = ({ section }) => {
  const layout = (section.type === 'grid' ? 'grid' : 'simple') as 'simple' | 'grid';

  return (
    <section>
      <HeaderSection title={section.title} description={section.description || undefined} />
      <BlockRenderer blocks={section.blocks} layout={layout} sectionTitle={section.title} />
      {section.notice && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <p>{section.notice}</p>
        </div>
      )}
    </section>
  );
};
