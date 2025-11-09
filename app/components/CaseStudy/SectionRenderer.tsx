import React from 'react';
import classNames from 'classnames';
import { HeaderSection } from './HeaderSection';
import { BlockRenderer, Block } from './BlockRenderer';
import styles from './SectionRenderer.module.scss';

export interface Section {
  id: number;
  title: string;
  description: string | null;
  notice: string | null;
  type: 'simple' | 'grid';
  blocks: Block[];
}

interface SectionRendererProps {
  section: Section;
}

export const SectionRenderer: React.FC<SectionRendererProps> = ({ section }) => {
  // Check if all blocks are FAQs
  const allFaqs = section.blocks.every(block => block.collection === 'block_faqs');

  // Determine layout class based on section type
  const layoutClass = classNames({
    [styles.faqLayout]: allFaqs,
    [styles.gridLayout]: !allFaqs && section.type === 'grid',
    [styles.simpleLayout]: !allFaqs && section.type === 'simple',
  });

  return (
    <section className={styles.section}>
      {/* Header - Title and Description */}
      <HeaderSection
        title={section.title}
        description={section.description}
      />

      {/* Blocks - Rendered dynamically based on collection type */}
      <div className={layoutClass}>
        {section.blocks.map((block, index) => (
          <BlockRenderer
            key={block.id}
            block={block}
            layout={section.type === 'grid' ? 'grid' : 'row'}
            isFirstCard={index === 0}
          />
        ))}
      </div>

      {/* Notice - Shown at the bottom if present */}
      {section.notice && (
        <div className={styles.notice}>
          <p>{section.notice}</p>
        </div>
      )}
    </section>
  );
};
