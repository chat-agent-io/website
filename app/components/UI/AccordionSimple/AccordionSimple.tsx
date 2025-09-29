'use client';

import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import styles from './AccordionSimple.module.scss';

export interface AccordionSimpleItem {
  title: string;
  content: string | ReactNode;
}

export interface AccordionSimpleProps {
  items: AccordionSimpleItem[];
  className?: string;
  allowMultiple?: boolean;
  initialOpenIndices?: number[];
}

export const AccordionSimple: React.FC<AccordionSimpleProps> = ({
  items,
  className,
  allowMultiple = true,
  initialOpenIndices,
}) => {
  const initialOpenSet = useMemo(
    () => new Set<number>(initialOpenIndices ?? []),
    [initialOpenIndices]
  );

  const [openItems, setOpenItems] = useState<Set<number>>(initialOpenSet);

  useEffect(() => {
    if (initialOpenIndices) {
      setOpenItems(new Set(initialOpenIndices));
    }
  }, [initialOpenIndices]);

  const containerClassName = className
    ? `${styles.accordionSimple} ${className}`
    : styles.accordionSimple;

  const toggleItem = (index: number) => {
    setOpenItems((previous) => {
      const next = new Set(previous);
      if (next.has(index)) {
        next.delete(index);
        return next;
      }

      if (!allowMultiple) {
        return new Set<number>([index]);
      }

      next.add(index);
      return next;
    });
  };

  const renderContent = (content: string | ReactNode) => {
    if (typeof content === 'string') {
      return content.split('\n').map((paragraph, paragraphIndex) => (
        <p key={`paragraph-${paragraphIndex}`} className={styles.contentParagraph}>
          {paragraph}
        </p>
      ));
    }

    return content;
  };

  return (
    <div className={containerClassName}>
      {items.map((item, index) => {
        const isOpen = openItems.has(index);
        const contentId = `accordion-simple-panel-${index}`;
        const buttonId = `accordion-simple-trigger-${index}`;

        return (
          <div
            key={`accordion-item-${index}`}
            className={`${styles.accordionItem}${isOpen ? ' isOpen' : ''}`}
          >
            <button
              type="button"
              id={buttonId}
              className={styles.accordionButton}
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
              aria-controls={contentId}
            >
              <h3 className={styles.accordionTitle}>{item.title}</h3>
              <span className={styles.iconContainer} aria-hidden="true">
                <span className={styles.iconSymbol}>{isOpen ? '×' : '+'}</span>
              </span>
              <span className={styles.visuallyHidden}>
                {isOpen ? 'Collapse section' : 'Expand section'}
              </span>
            </button>
            {isOpen && (
              <div
                id={contentId}
                role="region"
                aria-labelledby={buttonId}
                className={styles.accordionContent}
              >
                <div className={styles.contentInner}>{renderContent(item.content)}</div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
